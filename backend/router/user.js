const { update } = require("../utils/Crud");
const app = require("./app");

import Express from "express";
import { join } from 'path';


// Créer un endpoint GET
app.patch('/addCredits', 
    (request, response) => {
    const userId = request.body.userId; // Utilisation de request.query pour récupérer les paramètres d'URL
    update('User', userId, 'user_credits_amount = user_credits_amount + 5', (error, results) => { // Modification de l'appel à la fonction read
        if (error) {
            // Gestion des erreurs
            console.error('Erreur lors de la récupération des données depuis la base de données:', error);
            response.status(500).json({ error: 'Erreur lors de la récupération des données depuis la base de données.' });
        } else {
            // Renvoie les résultats au format JSON
        response.status(200).send("User account credited");
        }
    });

    // update('User', request.body.userId, 'user_credits_amount = user_credits_amount + 5');
    // response.status(200).send("User account credited");
  }
);

app.get('/getUser', (request, response) => {
    const userId = request.query.userId; // Utilisation de request.query pour récupérer les paramètres d'URL
    read(`User WHERE id = ${userId}`, (error, results) => { // Modification de l'appel à la fonction read
        if (error) {
            // Gestion des erreurs
            console.error('Erreur lors de la récupération des données depuis la base de données:', error);
            response.status(500).json({ error: 'Erreur lors de la récupération des données depuis la base de données.' });
        } else {
            // Renvoie les résultats au format JSON
            response.json(results); // Utilisation de response pour renvoyer la réponse JSON
        }
    });
});

// Server des fichiers statiques
app.use('/public', Express.static(join('assets')));


// Lancer le serveur
app.listen(PORT,
  () => {
    console.info("API Listening on port " + PORT);
  }
);