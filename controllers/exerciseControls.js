const Exercise = require('../models/exercise')

exports.createExercise = async (req,res,next) => {
    try {
        const { name, timeLength } = req.body;
        const exercise = await new Exercise({
            name,
            timeLength
        })
        exercise.save()
        res.status(200).json({ success:true, exercise})
    } catch (error) {
        res.status(500).json({ success:false, message:'internal server error'})
    }
}

exports.deleteExercise = async (req,res,next) => {
    try {
        const id = req.params.id;
        const exerciseDeleted = await Exercise.deleteOne({ _id:id })
    
        res.status(200).json({ success:true, message:'Deletion successful!' })
    } catch (error) {
        res.status(500).json({ success:false, message:'internal server error'})
    }
}