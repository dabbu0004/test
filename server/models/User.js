import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  occupation: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', UserSchema);