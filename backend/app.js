const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/User.js');
const mysql = require('mysql');

const app = express();

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nourrain-dev',
  password: 'nourrain-dev-password',
  database: 'nourrain_db'
});

// Middleware pour analyser le corps des requêtes au format JSON
app.use(bodyParser.json());

// Connecter à la base de données
connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MariaDB');
});

// Middleware pour gérer les routes des utilisateurs
app.use('/user', userRoutes);

// Port d'écoute du serveur
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
