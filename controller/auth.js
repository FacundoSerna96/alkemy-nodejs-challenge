const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/generateJWT");

const User = require('../models/user');


const login = async (req = request, res = response) => {

    const {mail, password} = req.body;

    try {
        const user = await User.findAll({
            where:{
                mail:mail
            }
        });

        if(!user){
            return res.status(400).json({
                msg: 'Username does not exist'
            })
        }

        //verificar si el usuario esta activo
        if(!user.estado){
            return res.status(400).json({
                msg: 'Username does not exist'
            })
        }

        //verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'password error'
            })
        }

        //generate JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong :C',
            error: error
        })
    }
}

const register = async (req = request, res = response) => {
    const {name, mail, password} = req.body;

    const user = await User.findAll({
        where:{
            mail:mail
        }
    });

    if(user){
        res.status(400).json({
            msg:'the email is already registered'
        })
    }

    const state = true;
    const rol = 'USER';
    const newUser = new User({name, mail, password, rol, state})

    //encrypting the password
    const salt = bcryptjs.genSaltSync(10);
    newUser.password = bcryptjs.hashSync(password, salt);

    try {
        await newUser.save();
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

    res.json({
        user: newUser
    })
}


module.exports= {
    login,register
}