const express=require ('express');
const app=express();
const bodyParser=require("body-parser");
const mysql=require("mysql2");
const cors = require("cors");
const { createPool } = require('mysql');

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nodejs"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/get',(req,res) => {
    const sqlGet=" SELECT * FROM loginuser";  
    db.query(sqlGet,(error,result) => {
        res.send(result);
    });
});

app.get('/',(req,res) => {
    const sqlInsert="INSERT INTO loginuser(user_name,user_pass) VALUES('priya@gmail.com',123456)";
    db.query(sqlInsert,(error,result) => {
        console.log("error",error);
        console.log("result",result);
        //res.send('Hello Express');
    }); 
});

app.listen(5000, () => {
    console.log("server is running on 5000");
})





















//app.get('/',function(req,res){
  //  res.sendFile(__dirname+'/App.js');
//});

//app.get('/API',function(req,res){
  //  res.send(req.query.name);
//});

//app.listen(7000,()=>{
//    console.log("listening on port 7000")
//});

