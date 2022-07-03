
const jwtValidator = require('./jwtValidator');
const fieldValidator = require('../middlewares/fieldValidator');


module.exports = {
    ...fieldValidator,
    ...jwtValidator,
}