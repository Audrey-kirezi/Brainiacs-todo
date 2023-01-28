const express = require('express');

const app = express();
const fs = require('fs');
const Credentials=require('./user.js')
console.log(Credentials.email)
console.log(Credentials.password);
const bodyParser = require('body-parser')

let user = fs.readFile('user.txt','utf8',(err,data)=>{
    if(err) throw err

    fs.writeFile('user.js',data,(err)=>{
        console.log("Hey yaaaa!");
    })

})



var urlEncodedParser = bodyParser.urlencoded({extended : false})
const url = require('url');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{

res.render('login');

})

app.post('/login',urlEncodedParser,(req,res)=>{
    var userCredentials = req.body;

    if(userCredentials.email ==Credentials.email && userCredentials.password == Credentials.password){
        res.send("User logged in successfully");
    }else {
        res.send("Invalid credentials");
    }
})

app.listen(5000,()=>{
    console.log('The server is running')
});

