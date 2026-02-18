const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  occupation: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', UserSchema);