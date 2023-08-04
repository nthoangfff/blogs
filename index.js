const express = require('express');
const app = express();
const ejs = require('ejs');


app.use(express.static('public'));
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('pages/index');
});


app.listen(5000,()=>{
    console.log("Run sever 5000")
});