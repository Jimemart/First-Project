const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const User = require('../models/User')
// router.post('/save/game', (req, res, next)=>{
//   const screenShot = req.body.game.screenshots[0].url.split('_thumb').join('_screenshot_huge')
//   const mainImg = req.body.game.cover.url.split("_thumb").join("_thumb_2x")
//     const newGame = new Game ({
//       id: req.body.game.id,
//       name: req.body.game.name,
//       cover : mainImg,
//        platforms: req.body.game.release_dates,
//        summary : req.body.game.summary,
//        screenshots : screenShot
//     }).save()
//       .then(g => res.status(200).json(g))
//       .catch(e => next(e))
// })
//
//   router.get('/find/db/:id', (req, res, next)=>{
//     const gameId = req.params.id
//     console.log(gameId)
//     Game.findOne({'id' : gameId})
//         .then(game =>{
//           return res.status(200).json(game)
//         })
//         .catch(e => next(e))
//
//   })
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

module.exports = router;
