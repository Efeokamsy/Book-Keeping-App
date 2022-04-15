const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://Efe:bSrSaw8LfqXwCsB1@cluster0.3fs1q.mongodb.net/Book-Keeping-App', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
        .then(()=> console.log('Db Connected'))
        .catch(err => console.log(err));
            
};

module.exports = dbConnect;