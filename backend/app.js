const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT
const logger = require("morgan")
// const cors = require("cors")
const path = require("path");
const {createDbConnection } = require("./config/db")



// create db connection
createDbConnection();


// reading json data and request body 

app.use(express.json())
app.use(express.urlencoded({extended : true}))


// logging requests 
app.use(logger("dev"))

app.use(express.static('dist'));
// //aply cors
// app.use(cors());


// stitch the routes to the server
require("./routes/task.routes")(app);



app.listen(PORT, ()=>{
    console.log(` Server started on port ${PORT}`)
})


module.exports = app;



