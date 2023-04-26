const express = require('express');
const router = express.Router();
const programControls = require('../controllers/programControls');

router.post('/create', programControls.createProgram);
router.put('/update/:id', programControls.updateProgram);
router.delete('/delete/:id', programControls.deleteProgram)

module.exports = router;