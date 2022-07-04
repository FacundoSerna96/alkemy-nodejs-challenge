const DataTypes = require('sequelize');
const db = require('../db/connection');
const Genre = require('./Genre');

const Movie = db.define('movie', {
    title:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    },
    releaseDate:{
        type: DataTypes.DATEONLY,
    },
    rating:{
        type: DataTypes.INTEGER,
    },
    genreId:{
        type: DataTypes.INTEGER,
    },
    state:{
        type: DataTypes.BOOLEAN,
    },
});


module.exports = Movie;