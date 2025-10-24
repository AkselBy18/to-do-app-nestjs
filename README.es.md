#ToDoApp - Prueba técnica de back-end creada en con Nestjs.
Está construida con NestJS, usa MySQL como base de datos y Swagger para la documentación.

#Despliegue en Producción

El API está desplegado y disponible en:

URL Principal:
- http://api.todoapp.saltwortdevs.com (Subdominio)

URL Alternativa:
- http://178.16.143.210 (IP directa)

#Requisitos previos
Asegúrate de tener instalado en tu dispositivo los siguientes programas.

- Node.js (https://nodejs.org/en/download) (25.0.0)
- NPM (https://www.npmjs.com/) (11.6.2)
- NestJS (npm i -g @nestjs/cli) / (11.0.10)
- MySQL (Mamp) (https://www.mamp.info/en/downloads/)

#Clonar el respositorio
git clone https://github.com/AkselBy18/to-do-app-nestjs
cd to-do-app-nestjs

#Instalar las dependencias necesarias
Ejecuta el comando en la terminal dentro de la carpeta del proyecto /to-do-app-nestjs o desde Visual Studio Code abre la carpeta del proyecto y selecciona la pestaña "Terminal" y "New Terminal"

npm install

#Archivo .env
Crea el archivo .env con los valores contenidos en .env.sample
El archivo debe de ir ubicado en la raíz del proyecto. 

Nota: Este es un proyecto de ejemplo y las credenciales contenidas en el archivo .env son de uso local.

#Creación de la base de datos
Pasos para iniciar el gestor de base de datos local y crear la base de datos.

Abre la aplicación de MAMP (instalada previamente)
Haz clic en el botón de "Start"
Selecciona la opción de Web Server en "Apache"
Abre el gestor web de base de datos local (http://localhost:8888/phpMyAdmin5/index.php)
Selecciona la pestaña de "SQL" en el gestor web.
Copia el contenido del archivo database.sql y ejecútalo para crear la base de datos.

#Ejecuta las migración de las tablas
Ejecuta el siguiente comando en la terminal dentro de la carpeta del proyecto /to-do-app-nestjs o desde Visual Studio Code abre la carpeta del proyecto y selecciona la pestaña "Terminal" y "New Terminal"
npm run migration:run -- -d data-source.ts

#Ejecutar el proyecto
nest start --watch

El proyecto se iniciará en: 
http://localhost:3000

Una vez iniciado, puedes consultar la documentación con el siguiente enlace en el navegador:
http://localhost:3000/v1/docs

#Tecnologías utilizadas

NestJS - Framework backend de Node.js
TypeORM - ORM para MySQL
Swagger - Documentación de API
MySQL - Base de datos relacional
Bcrypt - encriptación de datos sensibles
JWT - autenticación de usuarios por medio de token