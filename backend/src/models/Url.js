const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  emailSalt: {
    type: String,
    required: true,
  },
  hashedEmail: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  }
},{
    timestamps:true
});

module.exports = mongoose.model('Url', urlSchema);