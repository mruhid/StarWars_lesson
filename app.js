const express= require('express');
const app=express();
const fs =require('fs');

app.use('/Cssru/',express.static('/FileCss'));


app.get("/",async(req,res)=>{

    const data=fs.readFileSync('./index.html','utf-8');

    res.end(data);
});

app.get("/yoda",async(req,res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.json({
        name:"Yoda",
        role:"jedi Master",
        age:900,
        forcePoint:2000
    })
})


app.get("/darthmaul",async(req,res)=>{
    res.json({
        name:"Darth Maul",
        role:"sith Maul",
        age:200,
        forcePoint:1200
    })
});


app.get("/darthFarFar",async(req,res)=>{
    res.json({
        name:"Darth Far Far Wittless",
        role:"sith Maul",
        age:5,
        forcePoint:10000000
    })
});






app.listen(5001,'0.0.0.0',()=>{
    console.log('server isleyir');
})