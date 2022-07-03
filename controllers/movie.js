const { request, response } = require("express");
//const { Movie } = require("../models/Movie");


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
    res.status(201).json({
        msg: 'movie create'
    })
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