const express = require('express');

const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth)

//get all workouts
router.get('/', getWorkouts);

//get a single workout
router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);




module.exports = router;
