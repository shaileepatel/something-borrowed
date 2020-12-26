var model = require(__dirname + '/../model');

var getOutfits = (req, res) => {
  var params = {
    type: req.query.type,
    size: req.query.size,
    minPrice: req.query.minPrice,
    maxPrice: req.query.maxPrice
  };
  model.getOutfits(params, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  })
};

// [
//   {
//     "id": number,
//     "type": string,
//     "name": string,
//     "description": string,
//     "image": string,
//     "size": string,
//     "price": number,
//     "availability": boolean,
//     "sellerInfo": {
//       "id": number,
//       "name": string,
//       "description": string
//     }
//   }
// ]



var getOneOutfit = (req, res) => {
  var id = req.params.id;
  model.getListing(id)
    .then((response) => {
      res.json(response[0]);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getOutfits = getOutfits;
module.exports.getOneOutfit = getOneOutfit;