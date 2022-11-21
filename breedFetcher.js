const request = require('request');
const breed = process.argv[2];

const fetchBreedDescription = function(breed, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  // convert body from string to object  
  const data = JSON.parse(body);
  if (error) {
      callback(error, null);
      return;
    }
    if (!data.length) {
      callback('no such breed')
      return
    }
    
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

