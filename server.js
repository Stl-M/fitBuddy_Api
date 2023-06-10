require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const cors = require('cors');

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(('public')));

app.use(cors({origin: ['http://localhost:3000', 'https://fitbuddy-9zoy.onrender.com/']}))

//routes

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(() =>{
    app.listen(process.env.PORT, ()=> {
        console.log('connected to db & running on port 4000:)');
    })
})
.catch((err) =>{console.log(err)});






























