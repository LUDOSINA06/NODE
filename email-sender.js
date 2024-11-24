// Importer la bibliothèque nodemailer
const nodemailer = require('nodemailer');

// Configurer le transporteur (service d'email)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez votre service d'email (par exemple, Gmail)
  auth: {
    user: 'votre-email@gmail.com', // Remplacez par votre email
    pass: 'votre-mot-de-passe-app', // Remplacez par un mot de passe d'application ou votre mot de passe
  },
});

// Définir les options de l'email
const mailOptions = {
  from: 'votre-email@gmail.com', // Expéditeur
  to: 'destinataire@gmail.com', // Destinataire
  subject: 'Hello depuis Node.js', // Sujet de l'email
  text: 'Ceci est un email envoyé depuis Node.js avec nodemailer !', // Contenu
};

// Envoyer l'email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Erreur lors de l\'envoi de l\'email :', err);
  } else {
    console.log('Email envoyé avec succès ! Détails :', info.response);
  }
});
