const sequelize = require('sequelize');
const database = require('../src/db');
const schema="";

class Usuario extends sequelize.Model{}

Usuario.init({

        id:{
            type:sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        nome:{
            type:sequelize.STRING(25),
            allowNull:false
        },
        email:{
            type:sequelize.STRING(50),
            allowNull:false
        },
        senha:{
            type:sequelize.STRING(20),
            allowNull:false
        },
        data_registro:{
            type:sequelize.DATE,
            allowNull:false,
            defaultValue:sequelize.NOW
        }
    },
    {
        sequelize:database,modelName: 'usuario',schema
    }
)

module.exports = Usuario;