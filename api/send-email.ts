import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Fonction de logging détaillé
const logDebug = (step: string, data: any) => {
  console.log(`[DEBUG ${new Date().toISOString()}] ${step}:`, JSON.stringify(data, null, 2));
};

const logError = (step: string, error: any) => {
  console.error(`[ERROR ${new Date().toISOString()}] ${step}:`, {
    name: error.name,
    message: error.message,
    code: error.code,
    errno: error.errno,
    syscall: error.syscall,
    hostname: error.hostname,
    stack: error.stack,
    response: error.response,
    command: error.command,
    responseCode: error.responseCode,
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

    const recipients = ['contact@teranga-te.com'];
    logDebug('SMTP_CONFIG_START', { requestId, recipients });

    // Vérification des variables d'environnement
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? '***HIDDEN***' : 'MISSING',
      from: process.env.SMTP_FROM,
    };

    logDebug('SMTP_ENV_VARS', { requestId, config: smtpConfig });

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      logDebug('SMTP_CONFIG_MISSING', { 
        requestId, 
        missing: {
          host: !process.env.SMTP_HOST,
          user: !process.env.SMTP_USER,
          pass: !process.env.SMTP_PASS,
        }
      });
      return res.status(500).json({ 
        error: 'SMTP configuration incomplete',
        technical: {
          requestId,
          missingEnvVars: {
            SMTP_HOST: !process.env.SMTP_HOST,
            SMTP_USER: !process.env.SMTP_USER,
            SMTP_PASS: !process.env.SMTP_PASS,
          },
          timestamp: new Date().toISOString(),
        }
      });
    }

    logDebug('TRANSPORTER_CREATION', { requestId, host: process.env.SMTP_HOST, port: process.env.SMTP_PORT });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    logDebug('TRANSPORTER_CREATED', { requestId });

    // Vérification de la connexion
    logDebug('SMTP_VERIFY_START', { requestId });
    try {
      await transporter.verify();
      logDebug('SMTP_VERIFY_SUCCESS', { requestId });
    } catch (verifyError: any) {
      logError('SMTP_VERIFY_FAILED', verifyError);
      return res.status(500).json({ 
        error: 'SMTP connection verification failed',
        technical: {
          requestId,
          verifyError: {
            name: verifyError.name,
            message: verifyError.message,
            code: verifyError.code,
            errno: verifyError.errno,
            syscall: verifyError.syscall,
            hostname: verifyError.hostname,
          },
          timestamp: new Date().toISOString(),
        }
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: recipients.join(','),
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
    };

    logDebug('SEND_EMAIL_INTERNAL_START', { requestId, recipients, to: mailOptions.to });

    try {
      const info = await transporter.sendMail(mailOptions);
      logDebug('SEND_EMAIL_INTERNAL_SUCCESS', { 
        requestId, 
        messageId: info.messageId,
        response: info.response,
        accepted: info.accepted,
        rejected: info.rejected,
      });
    } catch (sendError: any) {
      logError('SEND_EMAIL_INTERNAL_FAILED', sendError);
      return res.status(500).json({ 
        error: 'Failed to send internal email',
        technical: {
          requestId,
          sendError: {
            name: sendError.name,
            message: sendError.message,
            code: sendError.code,
            errno: sendError.errno,
            syscall: sendError.syscall,
            hostname: sendError.hostname,
            response: sendError.response,
            responseCode: sendError.responseCode,
            command: sendError.command,
          },
          timestamp: new Date().toISOString(),
        }
      });
    }

    const confirmationMailOptions = {
      from: process.env.SMTP_FROM,
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
    };

    logDebug('SEND_EMAIL_CONFIRMATION_START', { requestId, to: email });

    try {
      const confirmInfo = await transporter.sendMail(confirmationMailOptions);
      logDebug('SEND_EMAIL_CONFIRMATION_SUCCESS', { 
        requestId, 
        messageId: confirmInfo.messageId,
        response: confirmInfo.response,
      });
    } catch (confirmError: any) {
      logError('SEND_EMAIL_CONFIRMATION_FAILED', confirmError);
      // On continue même si l'email de confirmation échoue
      logDebug('SEND_EMAIL_CONFIRMATION_FAILED_CONTINUE', { requestId });
    }
    
    logDebug('REQUEST_SUCCESS', { requestId });
    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      technical: {
        requestId,
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
          errno: error.errno,
          syscall: error.syscall,
          hostname: error.hostname,
          stack: error.stack,
        },
        timestamp: new Date().toISOString(),
      }
    });
  }
}
