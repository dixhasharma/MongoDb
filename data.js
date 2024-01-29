var express=require('express')
const mongoose=require('mongoose')
const user =require('./user')
mongoose.set('strictQuery',true);     // set of rule we can used which are present in mongodb
mongoose.connect('mongodb://localhost:27017/MongoDb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

async function insertData()
{
    var dt={"name":"anjali","course":"mca"}   //insert data
    var b=new user(dt);      //new var and send data in dt
    var result=await b.save()      //save the data (dt) using .save
    console.log(result);           //console it
}
insertData()

async function getData()
{
    var dt=await user.find();
    dt.forEach(row=>{
        console.log(row._id+"\t"+row.name+"\t"+row.course);
    })
}



// async function deldata(id)
// {
//     var dt=await user.deleteOne({_id:id})       //for delete
//     console.log(dt);
// }
// insertData()
// deldata("65b72c355df4ac68581c5bb8")