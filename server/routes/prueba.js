const express = require('express');
const myFunctions = require('../config/gamelist')
const gamesRoutes = express.Router()
const igdb = require('igdb-api-node').default;
const client = igdb('30da31e7cb07ece61239b92610d20f54');


gamesRoutes.get("/giveme/:platforms/:off/:qt", (req,res,next)=>{
   const myFilter = req.params.platforms.split("-")
   const myOffset = parseInt(req.params.off)
   const myQt = parseInt(req.params.qt)
   var text = myFilter.join(",")

  client.games({
    filters:{
      'release_dates.platform-any' : text
    },
    limit: myQt,
    offset: myOffset,
    order: 'popularity:desc',
}, [
    'name',
    'cover',
]).then(response => {
      return res.status(200).json(response.body);
  }).catch(error => {
      throw error;
  });

})


module.exports = gamesRoutes
