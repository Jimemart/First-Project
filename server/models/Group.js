const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
  groupname:String,
  platform:String,
  groupImage:String,
  gameId:Number,
  gameName:String,
  gameSlug:String,
  groupName:String,
  users:[Schema.Types.ObjectId]
})

const Group = mongoose.model('Group', groupSchema)
module.exports = Group
