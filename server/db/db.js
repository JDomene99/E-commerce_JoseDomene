import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const bdMongo = ( async () => {
    try {
        mongoose.set("strictQuery", false);
        const DB_URI = process.env.MONGODB_URI;
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a', db.connection.name)
    } catch (error) {
        console.log(error)
    }
    
})

export default bdMongo;

