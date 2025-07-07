 const { createTask, getAllTasks, updateTaskStatus, deleteTask, getSingleTask } = require("../controllers/task.controller")


module.exports = (app)=>{
// //api/createtask
app.post("/api/createtask",  createTask)

// /api/fetchtasks
app.get("/api/fetchtasks",  getAllTasks)

app.get("/api/task/:id", getSingleTask)
// /api/updatetask
app.put("/api/updatetask", updateTaskStatus)

// /api/deletetask
app.delete("/api/deletetask", deleteTask);

}



