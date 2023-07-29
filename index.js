const express=require('express');
const port=8000;
const path=require('path')
const db=require('./config/mongoose')
const Contact=require('./models/contact')
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded());
app.use(express.static('assets'));

/*app.use(function(req,res,next){
  req.myname="adarsh";
  console.log("midleware 1 called:");
  next();
});

app.use(function(req,res,next){
  console.log("my name middleware 2 is:",req.myname)
 // console.log("midleware 2 called:");
  next();
}); */




var contactList= [
  {
    name:"Adarsh",
    phone: "97363532"
  },
  {
    name:"Adarsh",
    phone: "97363532"
  },
  {
    name:"Adarsh",
    phone: "97363532"
  }
]

app.get('/',function(req,res){
  //  console.log(__dirname);
    //res.send('<h1>cool!it is running</h1>'); 
    //console.log(req.myname);
    return res.render('home', 
    {
      title:"Contact List",
      contact_list: contactList
    });
});

app.get('/practice',function(req,res){

    return res.render('practice',{title:"Let us play with ejs"});
});

app.post('/create-contact',async function(req,res){
//contactList.push({
 // name:req.body.name,
 // phone:req.body.phone
//})
//contactList.push(req.body)

 const data=new Contact(req.body)
 await data.save()
 res.send("save data") 


  //console.log(req.body);
  //console.log(req.body.name);
  //console.log(req.body.phone)
  //return res.redirect('/practice');
});

app.listen(port,function(err){
    if(err) {console.log('Error in running the server',err);}

console.log("yep, the server is working fine at port ", port);
});
