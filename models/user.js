const mongoose = require ('mongoose');
/* const post = require('./post'); */
mongoose.connect('mongodb://127.0.0.1:27017/testingthedatabase');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
    password: String
})

module.exports = mongoose.model('user', userSchema);