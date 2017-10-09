const express = require('express');
require('dotenv').config()
const myFunctions = require('../config/gamelist')
const gamesRoutes = express.Router()
const igdb = require('igdb-api-node').default;
const MY_API = process.env.IGDB_API
const client = igdb(MY_API);


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
