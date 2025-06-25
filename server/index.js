const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const cors = require('cors');


mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected to the DB"))
    .catch(err => console.log("Failed to connect to the DB", err));

// ✅ Allow requests from your frontend (localhost:3000)
app.use(cors({
    origin: 'http://localhost:5173', // or '*' to allow all
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

const surveyRoutes = require('./routes/surveyRoutes')

app.use('/api/survey', surveyRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)
)

