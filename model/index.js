var db = require(__dirname + '/../db');

var getOutfits = (params, callback) => {
  var select;
  var queryType;
  for(var key in params) {
    if (params[key] !== undefined) {
      select = key;
      queryType = params[key];
    }
  }
  var queryType = params.type;
  var query = `select * from outfits where ${select} = "${queryType}"`;
  db.connection.query(query, callback);
};

var getOneOutfit = (id, callback) => {
  var query = `
  select  o.*,
          s.id as sellerId,
          s.name as sellerName,
          s.description as 'sellerDescription',
          i.url
  from outfits as o
  inner join sellers as s on (o.seller_id = s.id)
  inner join images as i on (i.outfit_id = o.id)
  where o.id = ${id}`;
  db.connection.query(query, callback);
};

module.exports.getOutfits = getOutfits;
module.exports.getOneOutfit = getOneOutfit;