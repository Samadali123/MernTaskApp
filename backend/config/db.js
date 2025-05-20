const mongoose = require("mongoose")


exports.createDbConnection = async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URL)

        console.info("Database connected successfully")
    } catch (error) {
         console.info(error)
    }
}



