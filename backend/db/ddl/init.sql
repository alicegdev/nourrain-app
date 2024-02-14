/*
Script de création de la base de données.
*/
create database IF NOT EXISTS nourrain_db;

/* Créer l'utilisateur API */
create user IF NOT EXISTS 'nourrain-dev'@'%.%.%.%' identified by 'nourrain-dev-password';
grant select, update, insert, delete on nourrain_db.* to 'nourrain-dev'@'%.%.%.%';
flush privileges;