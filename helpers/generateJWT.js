const jwt = require('jsonwebtoken');


const generateJWT = (uid = '') =>{
    return new Promise((res, rej) => {
        const payload = {uid};

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '6h'
        }, (err, token) =>{
            if(err){
                console.log(err);
                rej('Failed to generate token!');
            }else{
                res(token);
            }
        });
    });
}


module.exports = {
    generateJWT
}