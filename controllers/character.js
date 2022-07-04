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
    
    return res.status(200).json({
        msg : 'character get one'
    })
}


const characterPost = async (req = request, res = response) => {
    return res.status(200).json({
        msg : 'character post'
    })
}


const characterPut = async (req = request, res = response) => {
    return res.status(200).json({
        msg : 'character put'
    })
}


//virtual DELETE
const characterDelete = async (req = request, res = response) => {
    return res.status(200).json({
        msg : 'character delete'
    })
}

//phisical DELETE
const characterPhisicalDelete = async (req = request, res = response) => {
    
}


module.exports = {
    characterGet,
    characterGetOne,
    characterPost,
    characterPut,
    characterDelete,
}