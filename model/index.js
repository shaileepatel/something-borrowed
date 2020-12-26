var db = require(__dirname + '/../db');

var getOutfits = (params, callback) => {
  var query = `select * from outfits where type = "${params.type}"`;
  db.connection.query(query, callback);
};

var getOneOutfit = () => {
  // var query = `select * from fav_categories where user_id = ${id}`;
  // return db.connection.queryAsync(query);
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