const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB, process.env.USER,process.env.PASS,{
    host:process.env.HOST,
    port:process.env.DB_PORT,
    dialect: process.env.DIALECT
    //logging : true
});



module.exports = db;