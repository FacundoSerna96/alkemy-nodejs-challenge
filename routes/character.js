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
    check('id', 'invalid id').isNumeric(),
    fieldValidator
],characterGetOne);

router.post('/', [
    jwtValidator,
    check('name', 'name is required').not().isEmpty(),
    check('movieId', 'invalid id').isNumeric(),
    fieldValidator
],characterPost);

router.put('/:id', [
    jwtValidator,
    check('id', 'invalid id').isNumeric(),
    check('name', 'name is required').not().isEmpty(),
    check('movieId', 'invalid movieId').isNumeric(),
    fieldValidator
],characterPut);

router.delete('/:id', [
    jwtValidator,
    check('id', 'invalid id').isNumeric(),
    fieldValidator
],characterDelete);


module.exports = router;