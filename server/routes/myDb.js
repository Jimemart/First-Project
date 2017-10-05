const express = require('express')
const router = express.Router()
const Game = require('../models/Game')


router.get('/find/db/:id', (req, res, next) =>{
  const gameId = parseInt(req.params.id)
  console.log(gameId)
  Game.findOne({'id': gameId})
      .then((response)=> {
        console.log("en db", response)
        if(response == null){
        res.status(200).json("empty")}else{
          res.status(200).json(response)
        }
      })
      .catch((err)=> console.log(err))
})

router.post('/save/game', (req, res, next)=>{
  const screenShot = req.body.game.screenshots[0].url.split('_thumb').join('_screenshot_huge')
  const mainImg = req.body.game.cover.url.split("_thumb").join("_thumb_2x")
    const newGame = new Game ({
      id: req.body.game.id,
      name: req.body.game.name,
      cover : mainImg,
       platforms: req.body.game.release_dates,
       summary : req.body.game.summary,
       screenshots : screenShot
    }).save()
      .then(g => res.status(200).json(g))
      .catch(e => next(e))
})


module.exports = router;
