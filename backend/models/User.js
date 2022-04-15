const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

//Schema

const UserSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
email:{
type: String,
required: true,
unique: true,
},
password: {
    type: String,
    required: true,
}

});

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;