const express = require('express')
let cors = require('cors');
const db = require('../db/connection');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth',
            character:  '/api/characters',
            movie :     '/api/movies',
        }

        this.dbConnection();
        this.middlewares();
        this.route();
    }

    async dbConnection(){
        try {

            await db.sync();
            console.log('Database online!');
            
        } catch (error) {
            throw new Error(error);
        }
    }


    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json());
    }

    route(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.movie, require('../routes/movie'));
        this.app.use(this.paths.character, require('../routes/character'));
    }

    listen(){
        this.app.listen(this.port   , () =>{
            console.log('Listening at', this.port);
        }) 
    }

}


module.exports = Server;