const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const Chat = require('../models/Chat');

router.post('/save/message',(req,res,next)=>{
  const newMessage = new Chat({
    room: req.body.message.room,
    sender: req.body.message.sender,
    message: req.body.message.message,
    recieve: req.body.message.recieve,
    nameOfSender: req.body.message.nameOfSender
  }).save()
    .then(message => res.status(200).json(message))
    .catch(err => {
      throw err
    })
})

router.get('/chat/room/:roomname', (req,res,next)=>{
  const roomName = req.params.roomname
  Chat.find({'room' : roomName}).sort({updated_at: 1})
    .then(messages => res.status(200).json(messages))
    .catch(err =>{
      throw err
    })
})


module.exports = router;
