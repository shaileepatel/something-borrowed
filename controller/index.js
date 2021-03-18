const model = require(__dirname + '/../model');

const getOutfits = (req, res) => {
  const params = {
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
      const response = [];
      for (let i = 0; i < data.length; i++) {
        const outfit = {};
        outfit.id = data[i].id;
        outfit.type = data[i].type;
        outfit.name = data[i].name;
        outfit.description = data[i].description;
        outfit.size = data[i].size;
        outfit.images = data[i].url;
        outfit.price = data[i].price;
        outfit.availability = data[i].available ? true : false;
        response.push(outfit);
      }
      res.json(response);
    }
  })
};

const getOneOutfit = (req, res) => {
  const id = req.params.id;
  model.getOneOutfit(id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      if (data.length === 0) {
        return res.sendStatus(404);
      }
      const imageUrls = [];
      for (let i = 0; i < data.length; i++) {
        imageUrls.push(data[i].url);
      }
      const outfit = data[0];
      const resultOutfit = {};
      resultOutfit.id = outfit.id;
      resultOutfit.type = outfit.type;
      resultOutfit.name = outfit.name;
      resultOutfit.description = outfit.description;
      resultOutfit.size = outfit.size;
      resultOutfit.price = outfit.price;
      resultOutfit.images = imageUrls;
      resultOutfit.availability = outfit.available ? true : false;
      resultOutfit.sellerInfo = {
        id: outfit.sellerId,
        name: outfit.sellerName,
        description: outfit.sellerDescription
      }
      res.json(resultOutfit);
    }
  })
};

module.exports.getOutfits = getOutfits;
module.exports.getOneOutfit = getOneOutfit;