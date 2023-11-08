const mongoose = require("mongoose")

const connectDataBase = async()=>{

try {
    
    const conn = mongoose.connect(process.env.MONGO_URL)

    console.log(`MongoDB connected`)

} catch (error) {

    console.log(`ERROR: ${error}`)

}
}

module.exports = connectDataBase