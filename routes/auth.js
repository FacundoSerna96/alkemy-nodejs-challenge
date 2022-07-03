const {Router} = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { login, register } = require('../controllers/auth');


const router = Router();


router.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    fieldValidator
],login)

router.post('/register', [
    //fieldValidator
],register)


module.exports = router;