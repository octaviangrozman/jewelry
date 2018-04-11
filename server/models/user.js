// Dependencies
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

// Our schema definition
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    googleId: String,
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum : ['user','admin'],
      default: 'user'
    },
    registerDate : { 
      type: Date, 
      default: Date.now 
    } // Timestamp
  }
);

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
  
      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);

    callback(null, isMatch);
  })
};

export default mongoose.model('User', userSchema);
