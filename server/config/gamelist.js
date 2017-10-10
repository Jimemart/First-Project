const igdb = require('igdb-api-node').default;

global['3scaleKey'] = '5748115f6c9f196a1fb62692da9c36cd';

const client = igdb()

const myFunctions = {
  obtenerJuego : () => {
    client.games({
        ids: [
            18472,
            18228
        ]
    }, [
        'name',
        'cover'
    ]).then(response => {
      return response
    })
    .catch(error => {
      console.log(error);
    })
  }

}
module.exports = myFunctions
// client.image({
//     cloudinary_id: 'example-id-123'
// }, 'cover_small', 'jpg'); // https://images.igdb.com/igdb/image/upload/t_cover_small/example-id-123.jpg
