const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema  = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    name: String,
    phone: String,
    role: String,
    mail: String,
    avatar: {
        type:String,
        default: 'https://res.cloudinary.com/databaseimg/image/upload/v1637675049/nrqdelcxjrjotgepjqi7.jpg',
    },
    gem: Number,
    birthday: Date,
},
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;