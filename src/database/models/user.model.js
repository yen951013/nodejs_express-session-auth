import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'userName is required'],
    unique: [true, 'userName has been used'],
    minlength: 5,
    maxlength: 15,
    match: [/^[a-zA-Z0-9_.]+$/, 'userName only allows characters: letters(A~Z, a~z), digits(0~9), underscores(_), and periods(.)'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: [true, 'email has been used'],
    match: [/.+\@.+\..+/, 'email format error'],
    lowercase: true,
    trim: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  passwordHash: {
    type: String,
    required: [true, 'passwordHash is required'],
    minlength: 60,
    maxlength: 60,
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  }
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.passwordHash;
    }
  },
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.passwordHash;
    }
  }
});
const User = mongoose.model('User', userSchema);

export { User };