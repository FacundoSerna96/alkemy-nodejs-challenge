const DataTypes = require('sequelize');
const db = require('../db/connection');

const User = db.define('user', {
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    rol:{
        type: DataTypes.STRING,
    },
    state:{
        type: DataTypes.BOOLEAN,
    },
});


module.exports = User;