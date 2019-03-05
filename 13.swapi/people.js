const request = require('request');

const getPeople = (id, callback) => {
  request({
    url: `https://swapi.co/api/people/${id}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback(error);
    }

    if (body.detail) {
      callback('Couldn\'t find that dude !');
    } else {
      callback(undefined, body);
    }
  });
};

const getMovie = (url, callback) => {
  request({
    url,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback(error);
    }

    if (body.detail) {
      callback('Couldn\'t find that Movie !');
    } else {
      callback(undefined, body.title);
    }
  });
}

module.exports = {
  getPeople,
  getMovie
};