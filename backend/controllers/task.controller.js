const taskModel = require("../models/task.model")



// create new task 
exports.createTask = async (req,res)=>{
    try {
        
        const {title , description } = req.body;
        if(! title || ! description){
            res.status(400).json({success: false, message : "Please provide title and description for creating new task"})
        }
        

        const taskCreated = await taskModel.create({
            title,
            description
        });

        res.status(200).json({success : true, message : "Task created successfully", taskCreated })

    } catch (error) {
           res.status(500).json({success : false, message : error.message})
    }
}



// get all tasks 
exports.getAllTasks = async (req, res)=>{
    try {
        const allTasks = await taskModel.find();
        res.status(200).json({success : true, message : "All Tasks fetched successfully", allTasks})
    } catch (error) {
        res.status(500).json({success : false, message : error.message})
    }
}


// update single task status by Id
exports.updateTaskStatus = async (req, res)=>{
    try {
       
        const {id} = req.body || req.query;

        if(! id) return res.status(400).json({success : false, message : "Please provide taskId for updateting the status"})

       const updatedTask = await taskModel.findById(id)     
       updatedTask.completedStatus = !updatedTask.completedStatus;
       await updatedTask.save();

       res.status(200).json({success : true, message : "Task updated successfully", updatedTask})

    } catch (error) {
        res.status(500).json({success : false, message : error.message})
    }
}




exports.deleteTask =  async (req, res)=>{
    try {

        const {id} = req.body || req.query;

        if(! id) return res.status(400).json({success : false, message : "Please provide taskId for deleting the task"})

        await taskModel.findByIdAndDelete({_id : id}) ;
        res.status(200).json({success : true, message  : "Task  deleted successfully"})
    } catch (error) {
        res.status(500).json({success : false, message : error.message})
    }
}

