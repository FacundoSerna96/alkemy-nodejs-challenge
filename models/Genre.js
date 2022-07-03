const DataTypes = require('sequelize');
const db = require('../db/connection');

const Genre = db.define('genre', {
    id:{
        type: DataTypes.INTEGER,
    },
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