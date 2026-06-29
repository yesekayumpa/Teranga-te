import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const recipients = [
  'contact@teranga-te.com'
];

// Test mode: use Ethereal for local testing
const TEST_MODE = process.env.TEST_MODE === 'true';

let transporter;

if (TEST_MODE) {
  // Create test account on Ethereal
  nodemailer.createTestAccount().then((account) => {
    transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
    console.log('Test mode enabled - Ethereal credentials:');
    console.log('User:', account.user);
    console.log('Pass:', account.pass);
    console.log('Preview URL will be shown in console after sending');
  });
} else {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, company, email, domain, formula, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Wait for transporter to be ready in test mode
    if (TEST_MODE && !transporter) {
      return res.status(503).json({ error: 'Transporter not ready yet' });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: TEST_MODE ? email : recipients.join(','),
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

    const info = await transporter.sendMail(mailOptions);
    console.log('Email interne envoyé avec succès');

    // Envoyer un email de confirmation au client depuis l'entreprise
    console.log('Envoi email de confirmation au client:', email);
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

    await transporter.sendMail(confirmationMailOptions);
    console.log('Email de confirmation envoyé avec succès à:', email);
    
    if (TEST_MODE) {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    res.json({ success: true, message: 'Email sent successfully', testMode: TEST_MODE });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
