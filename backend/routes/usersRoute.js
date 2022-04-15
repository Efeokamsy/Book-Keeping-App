const express = require('express');
const User = require('../models/User');
const usersRoute = express.Router();


//Register user
usersRoute.post('/register',async (req, res)=>{
    try{
    const { name, email, password } = req.body;
    const user = await User.create({name, email, password});
    console.log(user);
    res.send(user);
    } catch (error){
    res.send(error);
    }
    });

    //login user
usersRoute.post('/login', (req, res)=>{
    res.send('login routes');
    });

//update user
usersRoute.put('/update', (req, res)=>{
    res.send('Update routes');
    });

 //Fetch User
 usersRoute.get('/api/users', (req, res)=>{
    res.send('Fetch users');     
    });

//Delete user
usersRoute.delete('/', (req, res)=>{
    res.send('Delete routes');
    });





    module.exports = usersRoute;