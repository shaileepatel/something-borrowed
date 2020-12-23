var {connection} = require("./db");
var faker = require("faker");

var total = 100;
var totalImages = 10000;

var users = (total) => {
  var values = [];
  for(var i = 0; i < total; i++) {
    var name = faker.name.findName();
    var email = faker.internet.email();
    values.push([name, email]);
  }
  var query = 'INSERT INTO users (name, email) VALUES ?';
  connection.query(query, [values], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Users created");
    }
  });
}

var sellers = (total) => {
  var values = [];
  for(var i = 0; i < total; i++) {
    var name = faker.name.findName();
    var email = faker.internet.email();
    var description = faker.lorem.sentence();
    values.push([name, email, description]);
  }
  var query = 'INSERT INTO sellers (name, email, description) VALUES ?';
  connection.query(query, [values], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sellers created");
    }
  });
}

var outfits = (total) => {
  var values = [];
  var typeOptions = ["gown", "saree", "dress", "bridesmaid", "lengha"];
  var sizeOptions = ["xs", "s", "m", "l", "xl", "xxl"];
  for(var i = 0; i < total; i++) {
    var type = typeOptions[Math.floor(Math.random() * typeOptions.length)];
    var name = faker.commerce.productName();
    var description = faker.commerce.productDescription();
    var size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
    var price = Math.floor(Math.random() * 2000 + 100);
    var available = Math.random() < 0.5 ? false : true;
    var seller_id = Math.floor(Math.random() * 100 + 1);
    values.push([type, name, description, size, price, available, seller_id]);
  }
  var query = 'INSERT INTO outfits (type, name, description, size, price, available, seller_id) VALUES ?';
  connection.query(query, [values], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Outfits created");
    }
  });
}

var images = (total) => {
  var values = [];
  var photoSet = [[1, 3], [4, 6], [7, 7], [8, 9], [10, 12], [13, 13], [14, 15], [16, 18], [19, 19], [20, 21], [22, 22], [23, 23], [24, 24], [25, 25], [26, 26], [27, 27]];
  for(var i = 1; i <= total; i++) {
    var setNum = Math.floor(Math.random() * photoSet.length);
    for (var j = photoSet[setNum][0]; j <= photoSet[setNum][1]; j++) {
      var url = `https://mvp-images.s3-us-west-1.amazonaws.com/${j}.webp`;
      values.push([url, i]);
    }
  }
  var query = 'INSERT INTO images (url, outfit_id) VALUES ?';
  connection.query(query, [values], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Images created");
    }
  });
}

var checkout = (total) => {
  var values = [];
  for(var i = 0; i < total; i++) {
    var user_id = Math.floor(Math.random() * 100 + 1);
    var outfit_id = Math.floor(Math.random() * 100 + 1);
    values.push([user_id, outfit_id]);
  }
  var query = 'INSERT INTO checkout (user_id, outfit_id) VALUES ?';
  connection.query(query, [values], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Checkout created");
    }
  });
}

users(total);

sellers(total);

outfits(total);

images(total);

checkout(total);