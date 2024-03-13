const express = require('express');
const router = express.Router();
const Crud = require('../utils/Crud.js');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

// Modèle User
const USER_TABLE = 'User';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nourrain-dev',
  password: 'nourrain-dev-password',
  database: 'nourrain_db'
});

function generateAuthToken(user) {
  const authToken = jwt.sign({user_id: user.user_id, user_email: user.user_email}, 'secret', {expiresIn: '1h'});
  return authToken;
}

// Inscription d'un nouvel utilisateur
router.post('/signup', (req, res) => {
  const userData = req.body;

  // Connecter à la base de données
connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MariaDB');
});

  // Vérifier si l'adresse e-mail est déjà utilisée
  connection.query('SELECT * FROM User WHERE user_email = ?', userData.user_email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({message: 'Erreur lors de la vérification de l\'adresse e-mail'});
    }
    if (results.length > 0) {
      return res.status(400).json({message: 'Cette adresse e-mail est déjà utilisée'});
    }

      // Ajouter l'utilisateur à la base de données
  Crud.create(USER_TABLE, userData, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }
    res.json({ message: 'Inscription réussie', user: result });
  });
  });


});

// Connexion d'un utilisateur
router.post('/login', (req, res) => {
  const { user_email, user_password } = req.body;

  // Connecter à la base de données
connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MariaDB');
});

  // Vérifier si l'user existe dans la base de données
  connection.query('SELECT * FROM User WHERE user_email = ? AND user_password = ?', [user_email, user_password], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({message: 'Erreur lors de la vérification des informations de connexion'});
    }

    if (results.length === 0 ) {
      return res.status(401).json({message: 'Adresse e-mail ou mot de passe incorrect'});
    }

    //Générer un token
    const authToken = generateAuthToken(results[0]);

    res.json({ message: 'Connexion réussie', authToken });
  });
});

// Lire les informations d'un utilisateur
router.get('/:user_id', (req, res) => {
  const userId = req.params.user_id;

  // Lire les informations de l'utilisateur à partir de son ID
  Crud.read(USER_TABLE, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur lors de la lecture des informations utilisateur' });
    }

    const user = results.find(user => user.user_id === parseInt(userId));
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({ user });
  });
});

// Mettre à jour les informations d'un utilisateur
router.put('/:user_id', (req, res) => {
  const userId = req.params.user_id;
  const newData = req.body;

  // Mettre à jour les informations de l'utilisateur dans la base de données
  Crud.update(USER_TABLE, userId, newData, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur lors de la mise à jour des informations utilisateur' });
    }
    res.json({ message: 'Informations utilisateur mises à jour', user: result });
  });
});

// Supprimer un utilisateur
router.delete('/:user_id', (req, res) => {
  const userId = req.params.user_id;

  // Supprimer l'utilisateur de la base de données
  Crud.remove(USER_TABLE, userId, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
    res.json({ message: 'Utilisateur supprimé avec succès' });
  });
});

module.exports = router;
