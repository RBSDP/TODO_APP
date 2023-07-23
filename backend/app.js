require('dotenv').config()
require('./config/database').connecttoDb();
const express = require('express');
const userRouter = require('./routes/userRoutes')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.use('/',userRouter);





module.exports = app;
