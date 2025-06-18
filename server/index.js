const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;


mongoose.connect('mongodb+srv://orapelengm239:yW5PuLo9RXod6jKg@sidecluster.ge68xmx.mongodb.net/results?retryWrites=true&w=majority&appName=sideCluster', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("connected to the DB"))
.catch(err => console.log("Failed to connect to the DB", err));
const surveyRoutes = require('./routes/surveyRoutes')

app.use(express.json());
app.use('/api/results', surveyRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}` )
)

