import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('http://127.0.0.1:27017/food').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.