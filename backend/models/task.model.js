const mongoose = require("mongoose");


const TaskSchema  = mongoose.Schema({

    title : {
        type : String,
        required : [true, "Title is required"],
    },
    description : {
        type : String,
        required : [true, "Description is required"],
    },
    completedStatus : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})


module.exports = mongoose.model("Task", TaskSchema);

