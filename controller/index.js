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
  model.getOneOutfit(id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      var obj = {};
      for (var i = 0; i < data.length; i++) {
        obj.id = data[i].id;
        obj.type = data[i].type;
        obj.name = data[i].name;
        obj.description = data[i].description;
        obj.size = data[i].size;
        obj.price = data[i].price;
        obj.availability = data[i].available;
        obj.sellerInfo = {
          id: data[i].sellerId,
          name: data[i].sellerName,
          description: data[i].sellerDescription
        }
      }
      res.json(obj);
    }
  })
};

// {
//   "image": string,
//   "availability": boolean,
//   "sellerInfo": {
//     "id": number,
//     "name": string,
//     "description": string
//   }
// }

// {
//   "available": 1,
//   "seller_id": 94,
//   "email": "Ulises72@hotmail.com"
// }


module.exports.getOutfits = getOutfits;
module.exports.getOneOutfit = getOneOutfit;