
const express=require('express');
const userRoutes=require('./Routes/users');

const app=express();

app.use(express.json());
app.use('/users',userRoutes);




app.listen(3000,()=> console.log('Connected port: 3000'));