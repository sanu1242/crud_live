const mongoose = require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://sakshamagrawal:<db_root>@cluster0.js1jl72.mongodb.net/curd-live-aiml?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('Database connected successfully');
    }
    else{
        console.log('Database connection failed');
    }   
}
module.exports=dbConn;