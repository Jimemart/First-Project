const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const User = require('../models/User')
const Group = require('../models/Group')

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

  User.findByIdAndUpdate(userId, updates, {new : true})
        .then(user => res.status(200).json(user))
        .catch((err)=> {throw err});

})

router.post('/new/group', (req,res,next)=>{
  console.log(req.body.groupInfo)
  const newGroup = new Group({
    groupname: req.body.groupInfo.groupname,
    platform: req.body.groupInfo.platform,
    groupImage: req.body.groupInfo.groupImage,
    gameId : req.body.groupInfo.gameId,
    gameSlug: req.body.groupInfo.gameSlug,
    gameName: req.body.groupInfo.gameName,
    users:req.body.groupInfo.users
  }).save()
    .then(group => res.status(200).json(group))
    .catch(err =>{
       throw err
     })
})

router.get('/groups/user/:id', (req,res,next)=>{
  const userId = req.params.id
  Group.find({users:{ $in:[userId]}})
        .then(groups => res.status(200).json(groups))
        .catch((err)=>{
          throw err
        })
})

router.get('/get/group/:id', (req, res, next)=>{
  const groupId = req.params.id
  Group.findOne({"_id" : groupId})
        .then(group => res.status(200).json(group))
        .catch(err => {
          throw err
        })
})

router.post('/group/add/user', (req,res,next)=>{
  const updates = {users: req.body.updates}
  const groupId = req.body.id
  Group.findByIdAndUpdate(groupId, updates, {new : true})
          .then(user => res.status(200).json(user))
          .catch((err)=> {throw err});
})

module.exports = router;
