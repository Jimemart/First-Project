const express = require('express');
const router = express.Router()
const igdb = require('igdb-api-node').default;
const client = igdb('d954ff37e0384de2413508acc74eb559');

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
  ]).then(response =>{
    return res.status(200).json(response.body)
  }).catch(err=>{
    throw err
  })
})

module.exports = router
