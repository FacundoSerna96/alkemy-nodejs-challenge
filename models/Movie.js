const DataTypes = require('sequelize');
const db = require('../db/connection');
const Genre = require('./Genre');

const Movie = db.define('movie', {
    id:{
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    },
    releaseDate:{
        type: DataTypes.DATE,
    },
    rating:{
        type: DataTypes.INTEGER,
    },
    state:{
        type: DataTypes.BOOLEAN,
    },
});

Movie.hasOne(Genre,{foreignKey:'id',as:'genreId'})

module.exports = Genre;