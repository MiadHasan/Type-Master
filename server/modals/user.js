import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  wpm: {
    type: Number,
    default: 0,
  },
  accuracy: {
    type: Number,
    default: 0,
  },
  best: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

export default User;