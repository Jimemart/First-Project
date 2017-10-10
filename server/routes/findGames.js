require('dotenv').config()
const express = require('express');
const router = express.Router()
const igdb = require('igdb-api-node').default;
const MY_API = process.env.IGDB_API
const client = igdb(MY_API);
const Game = require('../models/Game')

router.get('/findone/:id', (req,res,next)=>{

  const gameId = req.params.id
  console.log(gameId)
  client.games({
    ids : [gameId],
    limit: 1
  },[
    'name',
    'cover',
    'popularity',
    'release_dates.platform',
    'summary',
    'slug',
    'screenshots',
  ]).then(response1 =>{
    return res.status(200).json(response1.body)
    // const gameId = parseInt(response1.body[0].id)
    // Game.findOne({'id' : gameId})
    //     .then((response)=>{
    //       if(response == null){
    //         return res.status(200).json(response1.body)
    //       }else{
    //         return res.status(200).json("full")
    //       }
    //     })
  }).catch(err=>{
    throw err
  })
})

router.get('/search/:game', (req,res, next)=>{
  const toSearch = req.params.game
  client.games({
    search: toSearch,
    limit : 6,
    order: 'popularity:desc',
  },[
    'name',
    'cover',
    'slug',
    'screenshots'
  ]).then((response)=>{
    return res.status(200).json(response)
  }).catch(err =>{
    throw err
  })
})

router.get('/find/game/:id', (req,res,next)=>{
  const gameId = req.params.game

  client.games({
    ids:[gameId],
    limit : 1,
    order: 'popularity:desc',
  },[
    'name',
    'games'
  ]).then((results)=>{
    return res.status(200).json(results.body[0].games)
  }).catch(err =>{
    throw err
  })
})
module.exports = router
