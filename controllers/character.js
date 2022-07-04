const { request, response } = require("express");
const {Movie, Character} = require("../models");
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


const characterGet = async (req = request, res = response) => {
   return res.status(200).json({
        msg : 'character get'
    })
}


const characterGetOne = async (req = request, res = response) => {   
    
    const {id} = req.params;

    try {
        const character = await Character.findOne({
            where: {
                id: id,
                state: 1
            }
        })

        const idMovie = character.movieId;

        const movies = await Movie.findAll({
            where : {
                id: idMovie
            }
        })
    
        res.status(200).json({
            character : character,
            movies: movies
        })

    } catch (error) {
        res.status(400).json({
            error : error
        })
    }
}


const characterPost = async (req = request, res = response) => {
    const {name, image, age, weight, history, movieId} = req.body;

    const state = 1;

    const newCharacter = new Character({name, image, age, weight, history, movieId, state})

    try {
        await newCharacter.save()
        return res.status(201).json({
            character: newCharacter
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}


const characterPut = async (req = request, res = response) => {
    const {id} = req.params;
    const {name, image, age, weight, history, movieId} = req.body;

    const updatedCharacter = {
        name: name,
        image: image,
        age: age,
        weight: weight,
        history : history,
        movieId : movieId
    }

    try {
        const character = await Character.findByPk(id)
        
        if(!character){
            return res.status(404).json({
                msg:`character not found ${id}`
            })
        }

        await character.update(updatedCharacter);

        return res.status(200).json({
            character: character
        })

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }

}


//virtual DELETE
const characterDelete = async (req = request, res = response) => {
    const {id} = req.params;
    
    const updatedCharacter = {
        state: false
    }

    try {
        const character = await Character.findByPk(id)
        
        if(!character){
            return res.status(404).json({
                msg:`character not found ${id}`
            })
        }

        await character.update(updatedCharacter);

        return res.status(200).json({
            character: character
        })

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}

//phisical DELETE
const characterPhisicalDelete = async (req = request, res = response) => {
    const {id} = req.params;
    
    try {
        const character = await Character.findByPk(id)
        
        if(!character){
            return res.status(404).json({
                msg:`character not found ${id}`
            })
        }

        await character.destroy();

        return res.status(200).json({
            msg: 'Character Deleted'
        })

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}


module.exports = {
    characterGet,
    characterGetOne,
    characterPost,
    characterPut,
    characterDelete,
}