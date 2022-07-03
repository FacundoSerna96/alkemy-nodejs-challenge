const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/generateJWT");

const User = require('../models/user');

const { sendMail } = require("../helpers/sendgrid");


const login = async (req = request, res = response) => {

    const {email, password} = req.body;

    try {
        const user = await User.findAll({
            where:{
                email:email
            }
        });

        if(!user){
            return res.status(400).json({
                msg: 'User does not exist'
            })
        }

        //verificar si el usuario esta activo
        if(user.estado == 0){
            return res.status(400).json({
                msg: 'User does not exist'
            })
        }

        //verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user[0].password);
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
    const {name, email, password} = req.body;

    const user = await User.findAll({
        where:{
            email:email
        }
    });

    if(user.length > 0){
        return res.status(400).json({
            msg:'the email is already registered'
        })
    }

    const state = true;
    const rol = 'USER';
    const newUser = new User({name, email, password, rol, state})

    //encrypting the password
    const salt = bcryptjs.genSaltSync(10);
    newUser.password = bcryptjs.hashSync(password, salt);

    try {
        await newUser.save();
        sendMail(email); //send welcome email
        return res.status(200).json({
            user: newUser
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }

}


module.exports= {
    login,register
}