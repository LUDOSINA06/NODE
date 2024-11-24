// Importer la bibliothèque generate-password
const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    uppercase: true, // Inclure des lettres majuscules
    lowercase: true, // Inclure des lettres minuscules
    symbols: true, // Inclure des symboles
    excludeSimilarCharacters: true, // Exclure des caractères similaires comme "o" et "0"
  });

  console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour afficher le mot de passe généré
generateRandomPassword();
