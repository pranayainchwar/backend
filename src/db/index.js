import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // here we got error when we not use .js

const connectDB = async () => {
    try{
const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.error("MONGODB connection FAILED", error);
        process.exit(1)
    }
}

export default connectDB
