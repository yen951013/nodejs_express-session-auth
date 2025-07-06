import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  passwordHash: {
	  type: String,
  },
});
const User = mongoose.model('User', userSchema);

export { User };