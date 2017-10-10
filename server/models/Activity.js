const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActSchema = new Schema({
  text: String,
  owner: Schema.Types.ObjectId,
  image: String,
  addedUser: Schema.Types.ObjectId,
  kind : {
    type: String,
    enum : ['FRIEND', 'GAME', 'GROUP'],
    default: 'FRIEND'
  }
},{
  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Act = mongoose.model('Act', ActSchema)
module.exports = Act
