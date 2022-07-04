const app = require('../app.js')
const request = require('supertest')
const myRequest = request(process.env.TEST_HOST)

describe('movies', () => {
    describe('GET', () =>{
        it('Should return json as default data format', (done) => {
            myRequest.get('/api/movies')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});

describe('movies', () => {
    describe('GET', () =>{
        it('Acceso a recursos inexistentes en endpoints de detalle', (done) => {
            myRequest.get('/api/movies/joe')
                .expect(400, done);
        });
    });
});

describe('movies', () => {
    describe('POST', () =>{
        it('Campos faltantes o con un formato inválido en BODY de las peticiones', (done) => {

            let movie = {
                title: '',
                image: '',
                releaseDate: '',
                rating:''
            }

            myRequest.post('/api/movie')
                .send(movie)
                .expect(404, done);
        });
    });
});