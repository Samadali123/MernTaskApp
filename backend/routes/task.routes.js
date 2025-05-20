 const { createTask, getAllTasks, updateTaskStatus, deleteTask } = require("../controllers/task.controller")


module.exports = (app)=>{
// //api/createtask
app.post("/api/createtask",  createTask)

// /api/fetchtasks
app.get("/api/fetchtasks",  getAllTasks)


// /api/updatetask
app.put("/api/updatetask", updateTaskStatus)

// /api/deletetask
app.delete("/api/deletetask", deleteTask);

}



