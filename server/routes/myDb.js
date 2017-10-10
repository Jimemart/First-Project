const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const User = require('../models/User')
const Group = require('../models/Group')
const Act = require('../models/Activity')
const moment = require('moment')
moment().format()

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

router.post('/add/activity', (req,res,next)=>{
  const newActivity = new Act({
    text: req.body.newAct.text,
    owner : req.body.newAct.owner,
    image: req.body.newAct.image,
    addedUser: req.body.newAct.addedUser,
    kind: req.body.newAct.kind
  }).save()
    .then(act => res.status(200).json(act))
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

router.get('/common/groups/:id', (req, res, next)=>{
  const gameId = req.params.id

  Group.find({'gameId' : gameId})
        .then((games) => res.status(200).json(games))
        .catch(err =>{
          throw err
        })
})

router.get('/user/activity/:id', (req,res,next)=>{
  const userId = req.params.id
  Act.find({'owner' : userId}).sort({'created_at': -1})
      .then((acts)=> {
        acts.forEach(act=>{
          const date = moment(act.created_at, moment.ISO_8601).format('YYYY-MM-DD hh:mm:ss a')
          act.since = moment(date).fromNow()
        })

        res.status(200).json(acts)})
      .catch(err =>{
        throw err
      })
})

router.get('/find/users/name/:name', (req, res, next)=>{
  const search = new RegExp(req.params.name)
  User.find({'username' : {$regex : search , $options: 'i' }})
        .then(users => res.status(200).json(users))
        .catch(err =>{
          throw err
        })
})

router.get('/find/groups/name/:name', (req, res, next)=>{
  const search = new RegExp(req.params.name)
  Group.find({'gameSlug' : {$regex : search , $options: 'i' }})
        .then(users => res.status(200).json(users))
        .catch(err =>{
          throw err
        })
})

module.exports = router;
