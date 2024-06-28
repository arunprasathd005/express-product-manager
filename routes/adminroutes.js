const express=require('express');
const router=express.Router();
const path=require('path');
const rootdir=require('../utils/path');
router.get('/add-product',(req,res,next)=>{
   // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
   res.sendFile(path.join(rootdir,'views','add-product.html'))
    
 })
 router.post("/add-product",(req,res,next)=>{///store-product ,instead of this i directlt give add-proucut bcz the methods are different(get,post) 
    console.log("form data:",req.body);
    res.status(200).send('<b>product submitted</b>')
 })
 module.exports= router;//export  