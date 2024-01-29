var express=require ('express')
const mongoose=require('mongoose')
var app=express();
const user=require('./user')
mongoose.set('strictQuery',true)
var app=express();
app.set('view engine','ejs')
mongoose.connect("mongodb://localhost:27017/MongoDb",
{
    useNewUrlParser:true,
    useUnifiedTopology:true 
})

app.get('/',async function(req,res){
    let data=await user.find();
    res.render('home',{dt:data})
})
 app.get('/add', async function (req,res){
    if(req.query.submit){
        var a = req.query.n;
        var b = req.query.c;
        var dt = {"name":a, "course":b};
        var std=new user(dt);
        var result = await std.save();
        console.log(result);
        return res.redirect("/");

    }else{
    res.render('add',{
        data:{}
    });
}   
 });

 app.get("/delete", async function(req,res)
 {
    var id=req.query.delid;
    const result=await user.deleteOne({_id:id});
    console.log(result);
    res.redirect("/")
 }).listen(5000)















// var express=require('express')
// const mongoose=require('mongoose')
// const user =require('./user')
// mongoose.set('strictQuery',true);     // set of rule we can used which are present in mongodb
// mongoose.connect('mongodb://localhost:27017/MongoDb',
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// async function insertData()
// {
//     var dt={"name":"anjali","course":"mca"}   //insert data
//     var b=new user(dt);      //new var and send data in dt
//     var result=await b.save()      //save the data (dt) using .save
//     console.log(result);           //console it
// }
// insertData()

// async function getData()
// {
//     var dt=await user.find();
//     dt.forEach(row=>{
//         console.log(row._id+"\t"+row.name+"\t"+row.course);
//     })
// }



// async function deldata(id)
// {
//     var dt=await user.deleteOne({_id:id})       //for delete
//     console.log(dt);
// }
// insertData()
// deldata("65b72c355df4ac68581c5bb8")










// var express=require('express')
// const mongoose=require('mongoose')
// const user =require('./user')    //import user data
// app.set('view engine','ejs')    //know that ejs file
// mongoose.set('strictQuery',true);     // set of rule we can used which are present in mongodb
// mongoose.connect('mongodb://localhost:27017/MongoDb',
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// app.get('/', async function(req,res)    // for show data in home page
// {
//     let data =await user.find();    // find the data
//     res.render('home',{dt:data})/// send data in object format
// }).listen(5000)


// app.get('/insert',async function(req,res)
// {
//     if(req.query.submit){
//         var a=req.query.n;
//         var b=req.query.c;
//         var dt={"name": a,"course":b};
//         var std= new student(dt);
//         var result=await std.save();
//         console.log("Data Saved");
//         console.log(result);
//         return res.redirect("/");
//     }
//     else{
//         res.render("insert",{
//             data: {}
//         });
//     }
// }
// )
