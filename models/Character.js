const DataTypes = require('sequelize');
const db = require('../db/connection');
const Movie = require('./Movie');

const Character = db.define('character', {
    name:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    },
    age:{
        type: DataTypes.INTEGER,
    },
    weight:{
        type: DataTypes.FLOAT,
    },
    history:{
        type: DataTypes.STRING,
    },
    state:{
        type: DataTypes.BOOLEAN,
    },
});


module.exports = Character;