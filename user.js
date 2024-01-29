const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
   name:String,               //in sting format data
   course:String
});

module.exports=mongoose.model("Table1",studentSchema)