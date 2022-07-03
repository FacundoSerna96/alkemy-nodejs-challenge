const DataTypes = require('sequelize');
const db = require('../db/connection');

const Genre = db.define('genre', {
    name:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    },
    state:{
        type: DataTypes.BOOLEAN,
    },
});


module.exports = Genre;