const { request, response } = require("express");
const Movie = require("../models/Movie");


const movieGet = async (req = request, res = response) => {

    const {name, genreId, order}  = req.query;


    res.json({
        msg: 'movie get all',
        name: name,
        genreId: genreId,
        order: order
    })
}


const movieGetOne = async (req = request, res = response) => {                              
    res.json({
        msg: 'movie get one'
    })
}


const moviePost = async (req = request, res = response) => {

    const {title, image, releaseDate, rating, genreId, state} = req.body;

    const newMovie = new Movie({title, image, releaseDate, rating, genreId, state})

    try {
        await newMovie.save()
        res.status(201).json({
            movie: newMovie
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
    
}


const moviePut = async (req = request, res = response) => {
    res.json({
        msg: 'movie update'
    })
}


const movieDelete = async (req = request, res = response) => {
    res.json({
        msg: 'movie delete'
    })
}



module.exports = {
    movieGet,
    movieGetOne,
    moviePost,
    moviePut,
    movieDelete,
}