#ToDoApp - Backend technical test created with NestJS.
It is built with NestJS, uses MySQL as the database, and Swagger for documentation.

#Prerequisites
Make sure you have the following programs installed on your device.

- Node.js (https://nodejs.org/en/download) (25.0.0)
- NPM (https://www.npmjs.com/) (11.6.2)
- MySQL (Mamp) (https://www.mamp.info/en/downloads/)

#Clone the repository

git clone https://github.com/AkselBy18/to-do-app-nestjs
cd to-do-app-nestjs

#Install the necessary dependencies

npm install

#.env file
Create the .env file with the values contained in .env.sample

Note: This is a sample project, and the credentials contained in the .env file are for local use only.

#Database creation
Steps to start the local database manager and create the database.

- Open the MAMP application (previously installed)
- Click on the "Start" button
- Select the "Apache" option as Web Server
- Open the local web database manager (http://localhost:8888/phpMyAdmin5/index.php)
- Select the "SQL" tab in the web manager.
- Copy the content of the database.sql file and run it to create the database.

#Run the project

nest start --watch

#The project will start at:
http://localhost:3000

Once started, you can check the documentation at the following link in your browser:
http://localhost:3000/v1/docs

#Technologies used

NestJS - Node.js backend framework
TypeORM - ORM for MySQL
Swagger - API documentation
MySQL - Relational database
Bcrypt - Encryption for sensitive data
JWT - Token-based user authentication