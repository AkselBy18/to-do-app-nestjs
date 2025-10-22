CREATE DATABASE IF NOT EXISTS toDoApp;

USE toDoApp;

create table users (
    pk_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);

create table tasks (
    pk_task INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    priority ENUM('low', 'medium', 'hight') DEFAULT 'low',
    done BOOLEAN NOT NULL DEFAULT false,
    date_creation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    date_update DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    fk_user INT NOT NULL,

    CONSTRAINT fk_task_user
        FOREIGN KEY (fk_user)
        REFERENCES Users(pk_user)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);