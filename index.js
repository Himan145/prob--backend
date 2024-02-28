//0FfrSr0bH1OM0V1k
//mongodb+srv://himanbiswas376:0FfrSr0bH1OM0V1k@cluster0.qbynmaw.mongodb.net/?retryWrites=true&w=majority
const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const { CreateProv, GetProv } = require('./ProvController');

const app=express();

mongoose.connect('mongodb+srv://himanbiswas376:0FfrSr0bH1OM0V1k@cluster0.qbynmaw.mongodb.net/?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());

app.post('/create',CreateProv);
app.get('/get',GetProv);


app.listen(5000,()=>{
    console.log('Application started at port 5000');
})