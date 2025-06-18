const Result = require("../models/surveyModel")


// get survey
exports.getSurvey = async (req,res) => {
    try {
        const survey = await Result.find();
        res.json(survey);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

exports.survey = (req,res) => {
    const newSurvey = req.body;
    const created = Result.create(newSurvey);
    res.status(201).json(created);
}