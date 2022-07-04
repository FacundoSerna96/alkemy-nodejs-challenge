const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const jwtValidator = async (req = request, res = response, next) =>{
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg: 'token not found'
        });
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const usuarioAutenticado = await User.findAll({
            where:{
                id:uid
            }
        });


        req.usuarioAutenticado = usuarioAutenticado;
        req.uid = uid;

        if(!usuarioAutenticado[0]){
            return res.status(401).json({
                msg:'invalid token - user not found'
            }); 
        }

        //validar que el usuario no ha sido borrado
        if(!usuarioAutenticado[0].state){
            return res.status(401).json({
                msg:'invalid token - user not found'
            });
        }
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'invalid token'
        })
    }
}


module.exports = {
    jwtValidator
}