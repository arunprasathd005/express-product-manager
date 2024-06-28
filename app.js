 const express=require('express');
 const app=express();
 const bodyparser=require('body-parser')
 const adminroutes=require('./routes/adminroutes')//import
const shoproutes=require('./routes/shoproutes')
const path=require('path');

 app.use('/admin',adminroutes)//give import knowlwdge to app..first para is url..namma oru oru time um kuda vena epdi enga kudtha pothum
 app.use(shoproutes)
 app.use(bodyparser.urlencoded({ extended: true })); //extended :true is option,otherwise deprecated error will cause
 app.use((req,res,next)=>{//if all the url all not matched ,then it comes here
   
   res.status(404).sendFile(path.join(__dirname,'views','404.html'));//used for wrong url
})


 
 app.listen(3000)