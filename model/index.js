var db = require(__dirname + '/../db');

var getOutfits = (params, callback) => {
  var conditions = '';
  if (params.type !== undefined) {
    conditions = `type = "${params.type}"`;
  }
  if (params.size !== undefined) {
    if (conditions.length !== 0) {
      conditions += ` and `;
    }
    conditions += `size = "${params.size}"`;
  }
  if (params.minPrice !== undefined) {
    if (conditions.length !== 0) {
      conditions += ` and `;
    }
    conditions += `price >= ${params.minPrice}`;
  }
  if (params.maxPrice !== undefined) {
    if (conditions.length !== 0) {
      conditions += ` and `;
    }
    conditions += `price <= ${params.maxPrice}`;
  }
  var query = `select * from outfits where ${conditions}`;
  console.log(query);
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