var model = require(__dirname + '/../model');

var getOutfits = (req, res) => {
};

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