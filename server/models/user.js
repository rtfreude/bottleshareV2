const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
})

//(name of collection, schema for collection)
mongoose.model('users', userSchema)