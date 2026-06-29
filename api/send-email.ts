import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Fonction de logging détaillé
const logDebug = (step: string, data: any) => {
  console.log(`[DEBUG ${new Date().toISOString()}] ${step}:`, JSON.stringify(data, null, 2));
};

const logError = (step: string, error: any) => {
  console.error(`[ERROR ${new Date().toISOString()}] ${step}:`, {
    name: error.name,
    message: error.message,
    code: error.code,
    statusCode: error.statusCode,
    stack: error.stack,
    response: error.response,
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  logDebug('REQUEST_START', {
    requestId,
    method: req.method,
    headers: req.headers,
    body: req.body,
    timestamp: new Date().toISOString(),
  });

  if (req.method !== 'POST') {
    logDebug('METHOD_NOT_ALLOWED', { requestId, method: req.method });
    return res.status(405).json({ 
      error: 'Method not allowed',
      technical: {
        requestId,
        receivedMethod: req.method,
        expectedMethod: 'POST',
        timestamp: new Date().toISOString(),
      }
    });
  }

  try {
    const { name, company, email, domain, formula, message } = req.body;

    logDebug('VALIDATION_INPUT', { requestId, formData: { name, company, email, domain, formula, messageLength: message?.length } });

    if (!name || !email || !message) {
      logDebug('VALIDATION_FAILED', { requestId, missingFields: { name: !name, email: !email, message: !message } });
      return res.status(400).json({ 
        error: 'Missing required fields',
        technical: {
          requestId,
          validation: {
            name: name ? 'present' : 'missing',
            email: email ? 'present' : 'missing',
            message: message ? 'present' : 'missing',
          },
          timestamp: new Date().toISOString(),
        }
      });
    }

    // Vérification de la clé API Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    logDebug('RESEND_CONFIG_CHECK', { requestId, hasApiKey: !!resendApiKey });

    if (!resendApiKey) {
      logDebug('RESEND_API_KEY_MISSING', { requestId });
      return res.status(500).json({ 
        error: 'Resend API key not configured',
        technical: {
          requestId,
          missingEnvVar: 'RESEND_API_KEY',
          timestamp: new Date().toISOString(),
        }
      });
    }

    const resend = new Resend(resendApiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@teranga-te.com';
    const recipients = ['contact@teranga-te.com'];

    logDebug('SEND_EMAIL_INTERNAL_START', { requestId, recipients, fromEmail });

    try {
      const internalEmail = await resend.emails.send({
        from: fromEmail,
        to: recipients,
        cc: email,
        replyTo: email,
        subject: `Nouvelle demande de contact - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C29941;">Nouvelle demande de contact</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Entreprise:</strong> ${company || 'Non spécifié'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Domaine:</strong> ${domain || 'Non spécifié'}</p>
              <p><strong>Formule:</strong> ${formula || 'Non spécifié'}</p>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Ce message a été envoyé depuis le formulaire de contact de Teranga Technology & Energy.
            </p>
          </div>
        `,
      });

      logDebug('SEND_EMAIL_INTERNAL_SUCCESS', { 
        requestId, 
        messageId: internalEmail.data?.id,
        response: internalEmail,
      });
    } catch (sendError: any) {
      logError('SEND_EMAIL_INTERNAL_FAILED', sendError);
      return res.status(500).json({ 
        error: 'Failed to send internal email via Resend',
        technical: {
          requestId,
          sendError: {
            name: sendError.name,
            message: sendError.message,
            code: sendError.code,
            statusCode: sendError.statusCode,
            response: sendError.response,
          },
          timestamp: new Date().toISOString(),
        }
      });
    }

    logDebug('SEND_EMAIL_CONFIRMATION_START', { requestId, to: email });

    try {
      const confirmationEmail = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Confirmation de votre demande - Teranga Technology & Energy',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C29941;">Merci pour votre message !</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p>Bonjour ${name},</p>
              <p>Nous avons bien reçu votre demande de contact. Notre équipe vous répondra dans les plus brefs délais.</p>
              <p style="margin-top: 20px;"><strong>Récapitulatif de votre message :</strong></p>
              <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 5px; border-left: 3px solid #C29941;">${message}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Teranga Technology & Energy<br>
              Rue LIB-12, Résidence Adja Coura, Liberté 6 Extension, Dakar<br>
              Email: contact@teranga-te.com<br>
              Tel: +221 77 337 26 28
            </p>
          </div>
        `,
      });

      logDebug('SEND_EMAIL_CONFIRMATION_SUCCESS', { 
        requestId, 
        messageId: confirmationEmail.data?.id,
        response: confirmationEmail,
      });
    } catch (confirmError: any) {
      logError('SEND_EMAIL_CONFIRMATION_FAILED', confirmError);
      // On continue même si l'email de confirmation échoue
      logDebug('SEND_EMAIL_CONFIRMATION_FAILED_CONTINUE', { requestId });
    }
    
    logDebug('REQUEST_SUCCESS', { requestId });
    res.json({ 
      success: true, 
      message: 'Email sent successfully via Resend',
      technical: {
        requestId,
        provider: 'Resend',
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error: any) {
    logError('UNEXPECTED_ERROR', error);
    res.status(500).json({ 
      error: 'Unexpected error occurred',
      technical: {
        requestId,
        error: {
          name: error.name,
          message: error.message,
          code: error.code,
          stack: error.stack,
        },
        timestamp: new Date().toISOString(),
      }
    });
  }
}
