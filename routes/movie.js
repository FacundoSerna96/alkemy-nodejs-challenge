const { Router } = require("express");
const { check } = require("express-validator");
const { movieGet, movieGetOne, moviePost, moviePut, movieDelete } = require("../controllers/movie");
const { fieldValidator, jwtValidator } = require("../middlewares");

const router = Router();

router.get('/', movieGet);

router.get('/:id', [
    check('id', 'invalid id').isNumeric(),
    fieldValidator
],movieGetOne);

router.post('/', [
    jwtValidator,
    check('title', 'title is required').not().isEmpty(),
    check('genreId', 'invalid id').isNumeric(),
    fieldValidator
],moviePost);

router.put('/:id', [
    jwtValidator,
    check('id', 'invalid id').isNumeric(),
    check('title', 'title is required').not().isEmpty(),
    check('genreId', 'invalid id').isNumeric(),
    fieldValidator
],moviePut);

router.delete('/:id', [
    jwtValidator,
    check('id', 'invalid id').isNumeric(),
    fieldValidator
],movieDelete);


module.exports = router;