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
    
    const {id} = req.params;

    try {
        const movie = await Movie.findOne({
            where: {
                id: id
            }
        })
    
        res.status(200).json({
            movie : movie
        })

    } catch (error) {
        res.status(400).json({
            error : error
        })
    }
}


const moviePost = async (req = request, res = response) => {

    const {title, image, releaseDate, rating, genreId} = req.body;

    const state = 1;

    const newMovie = new Movie({title, image, releaseDate, rating, genreId, state})

    try {
        await newMovie.save()
        return res.status(201).json({
            movie: newMovie
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
    
}


const moviePut = async (req = request, res = response) => {

    const {id} = req.params;
    const {title, image, releaseDate, rating, genreId} = req.body;

    const updatedMovie = {
        title: title,
        image: image,
        releaseDate: releaseDate,
        rating: rating,
        genreId : genreId
    }

    try {
        const movie = await Movie.findByPk(id)
        
        if(!movie){
            return res.status(404).json({
                msg:`movie not found ${id}`
            })
        }

        await movie.update(updatedMovie);

        return res.status(200).json({
            movie: movie
        })

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }

}


//virtual DELETE
const movieDelete = async (req = request, res = response) => {
    
    const {id} = req.params;
    
    const updatedMovie = {
        state: false
    }

    try {
        const movie = await Movie.findByPk(id)
        
        if(!movie){
            return res.status(404).json({
                msg:`movie not found ${id}`
            })
        }

        await movie.update(updatedMovie);

        return res.status(200).json({
            movie: movie
        })

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}

//phisical DELETE
const moviePhisicalDelete = async (req = request, res = response) => {
    
    const {id} = req.params;
    
    try {
        const movie = await Movie.findByPk(id)
        
        if(!movie){
            return res.status(404).json({
                msg:`movie not found ${id}`
            })
        }

        await movie.destroy();

        return res.status(200).json({
            msg: 'Movie Deleted'
        })

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}


module.exports = {
    movieGet,
    movieGetOne,
    moviePost,
    moviePut,
    movieDelete,
}