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
      var response = [];
      for (var i = 0; i < data.length; i++) {
        var obj = {};
        obj.id = data[i].id;
        obj.type = data[i].type;
        obj.name = data[i].name;
        obj.description = data[i].description;
        obj.size = data[i].size;
        obj.images = data[i].url;
        obj.price = data[i].price;
        obj.availability = data[i].available ? true : false;
        response.push(obj);
      }
      res.json(response);
    }
  })
};

var getOneOutfit = (req, res) => {
  var id = req.params.id;
  model.getOneOutfit(id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      if (data.length === 0) {
        return res.sendStatus(404);
      }
      var imageUrls = [];
      for (var i = 0; i < data.length; i++) {
        imageUrls.push(data[i].url);
      }
      var outfit = data[0];
      var obj = {};
      obj.id = outfit.id;
      obj.type = outfit.type;
      obj.name = outfit.name;
      obj.description = outfit.description;
      obj.size = outfit.size;
      obj.price = outfit.price;
      obj.images = imageUrls;
      obj.availability = outfit.available ? true : false;
      obj.sellerInfo = {
        id: outfit.sellerId,
        name: outfit.sellerName,
        description: outfit.sellerDescription
      }
      res.json(obj);
    }
  })
};

module.exports.getOutfits = getOutfits;
module.exports.getOneOutfit = getOneOutfit;