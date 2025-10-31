/**
 * 
 * npm install sequelize --save
 * npm install mysql2 --save
 * npm install express --save
 * npm install nodemon --save
 * 
 */

const express = require("express");
const app = express();
const Sequelize = require("sequelize");

// Configruações do Banco de dados
const sequelize = new Sequelize('miqueias_ds','root','', {
    host: "localhost",
    dialect: 'mysql'
});


