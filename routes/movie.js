const { Router } = require("express");
const { check } = require("express-validator");
const { movieGet, movieGetOne, moviePost, moviePut, movieDelete } = require("../controllers/movie");
const { fieldValidator, jwtValidator } = require("../middlewares");

const router = Router();

router.get('/', movieGet);

router.get('/:id', [
    check('id', 'No es un id valido').isNumeric(),
    fieldValidator
],movieGetOne);

router.post('/', [
    jwtValidator,
    check('title', 'el titulo es obligatorio').not().isEmpty(),
    check('genreId', 'No es un id valido').isNumeric(),
    fieldValidator
],moviePost);

router.put('/:id', [
    jwtValidator,
    check('id', 'No es un id valido').isNumeric(),
    check('title', 'el titulo es obligatorio').not().isEmpty(),
    check('genreId', 'No es un id valido').isNumeric(),
    fieldValidator
],moviePut);

router.delete('/:id', [
    jwtValidator,
    check('id', 'No es un id valido').isNumeric(),
    fieldValidator
],movieDelete);


module.exports = router;