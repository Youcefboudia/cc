const express = require('express')
const mysql = require('mysql')
const upload = require('express-fileupload')
const cors = require('cors')
const body_p = require('body-parser')
const { read } = require('fs')
const fileUpload = require('express-fileupload')

const app =express ()
app.use(body_p.urlencoded({extends:true}))
app.use(cors())
app.use(upload())
app.use(express.json())
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vote"
  });

app.get('/',(req,res)=>{
   con.query('SELECT * FROM `candidate` ORDER BY RAND() limit 3',(err,result)=>{
    res.send(result);
   })
})
app.post('/test',(req,res)=>{
  let file 
  if(req.files){
    file = req.files.file
    file.mv('../project1/public/'+file.name,(err)=>{
      if (err) throw err
    })
    res.json(req.body)
    console.log(req.body.username);
    let SQL = `INSERT INTO candidate( first_name, last_name, number, username, password, image) VALUES ('`+req.body.firstname+`','`+req.body.lastname+`',`+req.body.number+`,'`+req.body.username+`','`+req.body.city+`','`+file.name+`')`
  con.query(SQL,(err,result)=>{
    //res.send(err);
    console.log(result);
   })}
  
})
app.listen(2000,()=>console.log('http://localhost:2000/'))