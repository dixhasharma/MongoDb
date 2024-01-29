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
 })

 app.get("/edit",async function(req,res){
    if(req.query.upid){
        var id=req.query.upid;
        var data=await user.find({_id:id});
        res.render("edit",{data:data});
    }else if(req.query.submit){
        var id=req.query.i;
        var n=req.query.n;
        var c=req.query.c;
        var result=await user.updateOne({_id:id},{$set:{name:n,course:c} });
        console.log(result);
        res.redirect("/");
    }else{
        res.redirect("/");
    }
 }).listen(5000)
 
 
 
 























