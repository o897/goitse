const Result = require("../models/surveyModel")


// get survey
exports.getSurvey = async (req, res) => {
    try {
        const survey = await Result.find();
        res.json(survey);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// post data
exports.addSurvey = async (req, res) => {

    try {
        // const survey = new Result({
        //     "name": "Jane Doe",
        //     "email": "jane@example.com",
        //     "dob": "1995-07-20",
        //     "contact": "0712345678"
        //   })

        const {name, email, dob, contact } = req.body;
        
        const survey = new Result({
            name, email, dob, contact
        })

        await survey.save();

    } catch (error) {
        res.status(500).json({ error: error.message })
    }


}

orA@unix/?25