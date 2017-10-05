const express = require('express');
const router = express.Router()
const igdb = require('igdb-api-node').default;
const client = igdb('d954ff37e0384de2413508acc74eb559');
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
    'screenshots'
  ]).then(response1 =>{
    const gameId = parseInt(response1.body[0].id)
    Game.findOne({'id' : gameId})
        .then((response)=>{
          if(response == null){
            return res.status(200).json(response1.body)
          }else{
            return res.status(200).json("full")
          }
        })
  }).catch(err=>{
    throw err
  })
})

module.exports = router
