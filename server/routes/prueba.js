const express = require('express');
const myFunctions = require('../config/gamelist')
const gamesRoutes = express.Router()
const igdb = require('igdb-api-node').default;
const client = igdb('d954ff37e0384de2413508acc74eb559');


gamesRoutes.get("/giveme/:platforms", (req,res,next)=>{
   const myFilter = req.params.platforms.split("-")
   var text = myFilter.join(",")
  client.games({
    filters:{
      'release_dates.platform-any' : text
    },
    limit: 21,
    offset: 0,
    order: 'popularity:desc',
}, [
    'name',
    'cover'
]).then(response => {
      return res.status(200).json(response.body);
  }).catch(error => {
      throw error;
  });

})

module.exports = gamesRoutes
