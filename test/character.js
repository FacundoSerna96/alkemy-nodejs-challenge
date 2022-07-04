const app = require('../app.js')
const request = require('supertest')
const myRequest = request(process.env.TEST_HOST)

describe('characters', () => {
    describe('GET', () =>{
        it('Should return json as default data format', (done) => {
            myRequest.get('/api/characters')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});

describe('characters', () => {
    describe('GET', () =>{
        it('Acceso a recursos inexistentes en endpoints de detalle', (done) => {
            myRequest.get('/api/characters/joe')
                .expect(400, done);
        });
    });
});

describe('characters', () => {
    describe('POST', () =>{
        it('Campos faltantes o con un formato inválido en BODY de las peticiones', (done) => {

            let character = {
                name: '',
                image: '',
                age: '',
                weight:'',
                history:''
            }

            myRequest.post('/api/characters')
                .send(character)
                .expect(404, done);
        });
    });
});