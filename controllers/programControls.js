const Program = require('../models/program')
const Exercise = require('../models/exercise')

exports.createProgram = async (req,res,next) => {
    try {
        const { name, exercises } = req.body;

        const exerciseList = await Exercise.find({ 'name': { $in: exercises } })
        // console.log(exerciseList, '>>>')
        const program = await new Program({
            name: name,
            exercises: exerciseList
        })
        program.save()
        res.status(200).json({ success:true, program})
    } catch (error) {
        res.status(500).json({ success:false, message:'internal server error'})
    }
}

exports.updateProgram = async(req,res,next) => {
    try {
        const id = req.params.id;
        const { name, exercises } = req.body;

        const exerciseList = await Exercise.find({ 'name': { $in: exercises} })

        const updatedProgram = await Program.findOneAndUpdate({_id: id}, {$set:{name:name, exercises:exerciseList}})

        res.status(200).json({ success:true, message:'Updation successful!'})
    } catch (error) {
        res.status(500).json({ success:false, message:'internal server error'})
    }
}

exports.deleteProgram = async (req,res,next) => {
    try {
        const id = req.params.id;
        const programDeleted = await Program.deleteOne({ _id:id })
    
        res.status(200).json({ success:true, message:'Deletion successful!' })
    } catch (error) {
        res.status(500).json({ success:false, message:'internal server error'})
    }
}