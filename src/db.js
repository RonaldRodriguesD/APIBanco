const sequelize = require('sequelize');
const database = new sequelize('testeAPI', 'root','etec', {
    dialect: 'mysql',host:'localhost',port:3306
});
database.sync();
module.exports = database;