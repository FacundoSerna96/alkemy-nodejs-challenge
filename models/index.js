
const Genre = require('./Genre');
const Character = require('./Character')
const Movie = require('./Movie')
const User = require('./User')


Movie.belongsTo(Genre, {foreignKey: 'genreId'});
Genre.hasMany(Movie,{foreignKey:'genreId'});


module.exports = {
    Genre,
    Character,
    Movie,
    User
}