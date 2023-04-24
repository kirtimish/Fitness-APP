const express = require('express');
const router = express.Router();
const exerciseControls = require('../controllers/exerciseControls');

router.post('/create', exerciseControls.createExercise);
router.delete('/delete/:id',exerciseControls.deleteExercise);


module.exports = router;