const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ChatSchema = new Schema({
  room: String,
  sender: Schema.Types.ObjectId,
  message: String,
  recieve: Schema.Types.ObjectId,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chat', ChatSchema);
