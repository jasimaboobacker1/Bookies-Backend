require('dotenv').config()
// import express
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
// create an express application
const pfserver = express()
require('./DB/connection')



pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(router)
pfserver.use('/Uploads',express.static('./Uploads'))
const PORT = process.env.PORT || 4000;

pfserver.listen(PORT,()=>{
    console.log(`BookStore Server started at port :${PORT} and waiting for client request!!!!!`);
})


pfserver.get('/',(req,res)=>{
    res.send('<h1>BookStore server started and waiting for client request!!!!!</h1>')
})



