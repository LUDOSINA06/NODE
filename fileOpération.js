// Importer le module fs (file system)
const fs = require('fs');

// Étape 1 : Créer un fichier 'welcome.txt' avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.log('Erreur lors de la création du fichier:', err);
    return;
  }
  console.log('Fichier "welcome.txt" créé avec succès.');

  // Étape 2 : Lire le contenu du fichier 'welcome.txt' et l'afficher
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Erreur lors de la lecture du fichier:', err);
      return;
    }
    console.log('Contenu du fichier "welcome.txt":');
    console.log(data);  // Affiche le contenu du fichier dans la console
  });
});
