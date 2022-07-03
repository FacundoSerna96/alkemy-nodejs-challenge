const DataTypes = require('sequelize');
const db = require('../db/connection');

const User = db.define('user', {
    id:{
        type: DataTypes.INTEGER,
    },
    name:{
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