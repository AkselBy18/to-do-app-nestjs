# ToDoApp - Back-end technical test created with NestJS.
It is built with NestJS, uses MySQL as the database and Swagger for documentation.

# Prerequisites
Make sure you have the following programs installed on your device.

- Node.js (https://nodejs.org/en/download) (25.0.0)
- NPM (https://www.npmjs.com/) (11.6.2)
- NestJS (npm i -g @nestjs/cli) / (11.0.10)
- MySQL (Mamp) (https://www.mamp.info/en/downloads/)

# Clone the repository
git clone https://github.com/AkselBy18/to-do-app-nestjs
cd to-do-app-nestjs

# Install necessary dependencies
Run the command in the terminal within the project folder /to-do-app-nestjs or from Visual Studio Code open the project folder and select the "Terminal" tab and "New Terminal"

npm install

# .env file
Create the .env file with the values contained in .env.sample
The file must be located at the root of the project.

Note: This is a sample project and the credentials contained in the .env file are for local use.

# Database creation
Steps to start the local database manager and create the database.

Open the MAMP application (previously installed)
Click the "Start" button
Select the Web Server option in "Apache"
Open the local web database manager (http://localhost:8888/phpMyAdmin5/index.php)
Select the "SQL" tab in the web manager.
Copy the content of the database.sql file and execute it to create the database.

# Run table migrations
Run the following command in the terminal within the project folder /to-do-app-nestjs or from Visual Studio Code open the project folder and select the "Terminal" tab and "New Terminal"
npm run migration:run -- -d data-source.ts

# Run the project
nest start --watch

The project will start at:
http://localhost:3000

Once started, you can check the documentation with the following link in your browser:
http://localhost:3000/v1/docs

# Technologies used

NestJS - Node.js backend framework
TypeORM - ORM for MySQL
Swagger - API documentation
MySQL - Relational database
Bcrypt - sensitive data encryption
JWT - user authentication through token