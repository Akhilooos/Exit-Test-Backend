const mongoose = require('mongoose');
const mongourl = process.env.MONGODB_URL || "mongodb+srv://akhilmathew990:BcBs3XNZ5Ghwn2kT@email.3vdbbum.mongodb.net/?retryWrites=true&w=majority" ;
const dbname = process.env.DB_NAME || "Details";


mongoose.connect(mongourl, { dbName: dbname })
.then(()=>{
    console.log(`Connected to MongoDB ${mongourl}`)
})
.catch(err => console.log(err))
//BcBs3XNZ5Ghwn2kT
//akhilmathew990
//mongodb+srv://akhilmathew990:BcBs3XNZ5Ghwn2kT@email.3vdbbum.mongodb.net/?retryWrites=true&w=majority