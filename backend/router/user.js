const { update } = require("../utils/Crud");


import Express from "express";
import { join } from 'path';

// Récupérer le port des variables d'environnement ou préciser une valeur par défaut
const PORT = process.env.PORT || 8000;

// Créer l'objet Express
const app = Express();

// Créer un endpoint GET
app.put('/addCredits', 
    (request, response) => {
    update('User', request.body.userId, 'user_credits_amount = user_credits_amount + 5');
    response.status(200).send("User account credited");
  }
);

// Créer un endpoint GET
app.get('/getUser', 
    (request, response) => {
    const userId = request.body.userId;
    read(`User WHERE id = ${userId}`);
    response.status(200).send({});
  }
);

// Server des fichiers statiques
app.use('/public', Express.static(join('assets')));


// Lancer le serveur
app.listen(PORT,
  () => {
    console.info("API Listening on port " + PORT);
  }
);