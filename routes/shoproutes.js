 const express =require('express');
 const router =express.Router();
 const path=require('path');//it give the correct path
const rootdir=require('../utils/path');
 router.get('/',(req,res,next)=>{//  ..=>oru step path la munndai poraku 
    //res.sendFile(path.join(__dirname,'..','views','shop.html'))//if we give the file path,it give the contents of those file path
    res.sendFile(path.join(rootdir,'views','shop.html'))//we set the path in rootdir const
 })//__dirname ..it starts from oru harddisk to this js file path
 module.exports=router;