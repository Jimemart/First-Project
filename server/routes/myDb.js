const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const User = require('../models/User')

router.post('/hola', (req,res,next)=>{
  const updates = {games : req.body.games}
  const userId = req.body.userId


  User.findByIdAndUpdate(userId,updates,{new: true})
      .then(user => res.status(200).json(user))
      .catch((err)=> {throw err});
})
router.get('/user/:gameId', (req,res,next)=>{
  const gameId = req.params.gameId
  User.find({games:{ $in: [gameId]}})
      .then((users)=>{
        return res.status(200).json(users)
      })
      .catch(err =>{
        throw err
      })
})

router.get('/user/profile/:id', (req,res,next)=>{
  const userId = req.params.id
  User.findOne({'_id' :userId})
      .then((user)=>{
        return res.status(200).json(user)
      })
      .catch(err =>{
        throw err
      })
})
router.post('/follow/user', (req,res,next)=>{
  const userId = req.body.myId
  const updates = {friends : req.body.updates}
  console.log('en DB', updates)
  User.findByIdAndUpdate(userId, updates, {new : true})
        .then(user => res.status(200).json(user))
        .catch((err)=> {throw err});

})


module.exports = router;
