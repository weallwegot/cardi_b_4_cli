#! /usr/bin/env node
'use strict';

const request = require('request');

const options = {
  url: 'http://cardibbars.pythonanywhere.com/api/v1',
  method: 'GET'
};

request(options, function(error, response, body) {
  if (error) {
      console.error(error);
  }
  if (response.statusCode === 200) {
    var new_body=JSON.parse(body)
    var lyric = new_body.data.lyric
    var song = new_body.data.song
    console.log(lyric, '--', song);
  } else {
    console.error('Error:', response.statusCode, ':', response.statusMessage);
  }
});