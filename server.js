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

app.use(cors({origin: ['https://fitbuddy-9zoy.onrender.com/', 'http://localhost:3000']}))

//routes///htttp://localhost:4000//

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

const port = process.env.PORT || 4000

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(() =>{
    app.listen(port, ()=> {
        console.log(`connected to db & running on port ${port}`);
    })
})
.catch((err) =>{console.log(err)});






























