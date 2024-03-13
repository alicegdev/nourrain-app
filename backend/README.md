## Clone the repo on your machine

## Then select "Reopen and rebuild and container" in VS Code

## When you've succesfully done it and you are in home/dev :

## To init the db :
mycli -h db -u root -p rootpassword <./db/ddl/init.sql

## To create the tables:
mycli -h db -u root -p rootpassword <./db/ddl/ddl.sql