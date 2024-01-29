var express=require('express')
const mongoose=require('mongoose')
const user =require('./user')    //import user data
app.set('view engine','ejs')    //know that ejs file
mongoose.set('strictQuery',true);     // set of rule we can used which are present in mongodb
mongoose.connect('mongodb://localhost:27017/MongoDb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get('/'async function(req,res)    // for show data in home page
{
    let data =await user.find();    // find the data
    res.render('home',{dt:data})/// send data in object format
})
app.get('/'.async function(req,res)
)
