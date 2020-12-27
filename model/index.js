var db = require(__dirname + '/../db');

var getOutfits = (params, callback) => {
  var query = `select * from outfits where type = "${params.type}"`;
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

// var checkIfListingIsFav = (id) => {
//   var query = `select listing_id from fav_listings where fav_category_id IN (select id from fav_categories where user_id = ${id})`;
//   return db.connection.queryAsync(query);
// };

// var getListing = (id) => {
//   var query = `select * from listings where id = ${id}`;
//   return db.connection.queryAsync(query);
// };

module.exports.getOutfits = getOutfits;
module.exports.getOneOutfit = getOneOutfit;