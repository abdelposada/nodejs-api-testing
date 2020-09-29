const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  userName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
