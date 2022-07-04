
const Genre = require('./Genre');
const Character = require('./Character')
const Movie = require('./Movie')
const User = require('./User')


Movie.belongsTo(Genre, {foreignKey: 'genreId'});
Genre.hasMany(Movie,{foreignKey:'genreId'});

Character.belongsTo(Movie, {foreignKey: 'movieId'});
Movie.hasMany(Character, {foreignKey: 'movieId'})


module.exports = {
    Genre,
    Character,
    Movie,
    User
}