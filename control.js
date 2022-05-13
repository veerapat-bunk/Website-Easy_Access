// Before of use Source Code
/* 
   download
    1: npm init
    2: npm install express mysql body-parser
    3: npm install ejs
    open and link
    1: open module Apache
    2: open module MtSQL
    3: link database(phpMyAdmin) file sport.sql
*/

// Open call Express
const express = require('express');
const bodyParser = require('body-parser'); 
const mysql = require('mysql');
const PoolCluster = require('mysql/lib/PoolCluster');
const { send } = require('express/lib/response');

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//-------- View ------------//
app.set('view engine','ejs')

//Connect public folder
app.use(express.static('public'))
app.use(express.static('public/css'))

//MySQL Connect phpMyAdmin
const pool = mysql.createPool({
    connectionLimit : 10,
    connectionTimeout : 20,
    host : 'localhost', //www.google.com/sql or Server IP Address
    user : 'root',
    password : '',
    database : 'sport' //Connect Database from beers.sql (Import to phpMyAdmin)
})
var obj={} 
// Main page
app.get("/home",(req,res) =>{
    res.render('index')  
})
// page ID login
app.get("/home/ID%=1",(req,res) =>{
    res.render('id')
})
// multi sport
// page sport football
app.get("/home/ID%=1/sport/football",(req,res) =>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id : ?",connection.threadId)
        connection.query('SELECT football.name, football.location, football.img, football.link FROM football',(err,rows)=>{
        connection.release();
        if(!err){
            obj = {football : rows , Error : err}
            res.render('football',obj)
        }else{
            console.log(err)
             }    
        })   
    })   
})
// page sport badminton
app.get("/home/ID%=1/sport/badminton",(req,res) =>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id : ?",connection.threadId)
        connection.query('SELECT badminton.name,badminton.location,badminton.img,badminton.link FROM badminton',(err,rows)=>{
        connection.release();
        if(!err){
            obj = {badminton : rows , Error : err}
            res.render('badminton',obj)
        }else{
            console.log(err)
             }    
        })   
    }) 
})
// page sport basketball
app.get("/home/ID%=1/sport/basketball",(req,res) =>{
    res.render('basketball')
})

// info Football 
// page football-1
app.get("/home/ID%=1/sport/football/RATCHAYOTIN",(req,res) =>{
    res.render('football-1')
})
// page football-1
app.get("/home/ID%=1/sport/football/BANGSAOTONG",(req,res) =>{
    res.render('football-2')
})

// info badminton
// page badminton-1
app.get("/home/ID%=1/sport/badminton/SENANIKHOM",(req,res) =>{
    res.render('badminton-1')
})
// page badminton-2
app.get("/home/ID%=1/sport/badminton/MEGABADMINTON",(req,res) =>{
    res.render('badminton-2')
})

// page login
app.get("/home/login",(req,res) =>{
    res.render('login')
})

app.listen(port, () => 
    console.log("listen on port : ?", port)
    )