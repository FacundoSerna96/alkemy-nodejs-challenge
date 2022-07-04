const { Router } = require("express");
const { check } = require("express-validator");

const { characterGet, 
        characterGetOne, 
        characterPost, 
        characterPut, 
        characterDelete } = require("../controllers/character");

const { fieldValidator, jwtValidator } = require("../middlewares");

const router = Router();

router.get('/', characterGet);

router.get('/:id', [
    check('id', 'No es un id valido').isNumeric(),
    fieldValidator
],characterGetOne);

router.post('/', [
    jwtValidator,
    check('name', 'el titulo es obligatorio').not().isEmpty(),
    check('movieId', 'No es un id valido').isNumeric(),
    fieldValidator
],characterPost);

router.put('/:id', [
    jwtValidator,
    check('id', 'No es un id valido').isNumeric(),
    check('name', 'el titulo es obligatorio').not().isEmpty(),
    check('movieId', 'No es un id valido').isNumeric(),
    fieldValidator
],characterPut);

router.delete('/:id', [
    jwtValidator,
    check('id', 'No es un id valido').isNumeric(),
    fieldValidator
],characterDelete);


module.exports = router;