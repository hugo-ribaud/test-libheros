const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 20,
    match: /^[a-z]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  }
});

// @ts-ignore
UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);