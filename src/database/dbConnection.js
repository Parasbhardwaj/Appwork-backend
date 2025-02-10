import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

function mongoSetup() {
    console.log(process.env.DBURL);
    
    mongoose.connect("mongodb://127.0.0.1:27017/appwork",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log('Connected!'))
}

export {mongoSetup};