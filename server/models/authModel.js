const mongoose = require('mongoose');

const authSchema = mongoose.Schema(
  {
    username: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {
      type: String,
      default: 'user',
    },
    phoneNumber: Number,
    avatar: String,
  },
  {
    timestamps: true,
  }
);

const authModel = mongoose.model('authModel', authSchema);

module.exports = authModel;
