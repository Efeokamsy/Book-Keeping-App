const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const User = require('./models/User');
const error = require('./middlewares/errorMiddlwareHandler');
const usersRoute = require('./routes/usersRoute');

const app = express();
const port = 5000;

//Db Connect
dbConnect();


//Routes
//Users Routes

//Passing body data
app.use(express.json());


app.use('/api/users', usersRoute);
app.use(error.errorMiddlewareHandler);

//Server
app.listen(port, function(){
  console.log(`The server is up and runing at ${port}`);
});

//Oakamon
//HunAbJYEKjbW9i4p
//Efe
//bSrSaw8LfqXwCsB1
//Coonection String mongodb+srv://<username>:<password>@cluster0.3fs1q.mongodb.net/test