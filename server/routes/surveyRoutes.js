const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController')

router.get('/',surveyController.getSurvey);
router.post('/',surveyController.addSurvey);

module.exports = router;