#! /usr/bin/env node
'use strict';

const request = require('request');
const debug = false

if(debug){
  var url_to_use = 'http://localhost:5000/api/v1'
} else {
  var url_to_use = 'http://cardibbars.pythonanywhere.com/api/v1'
}

var all_args = process.argv

if(all_args.length>2){
  var val_args = all_args.slice(2)
  var my_json_body = {
    method: 'getRandomQuote',
    category: val_args
  }
  var options = {
    url: url_to_use,
    method: 'POST',
    json: true, 
    body: my_json_body
  };
} else {
  var options = {
    url: url_to_use,
    method: 'GET'
  };
}


var r = request(options, function(error, response, body) {
  if (error) {
      console.error(error);
  }
  if (response.statusCode === 200) {
    // bc sometimes it gets returned in strange format? idk what im doing
    if(body.toString() === "[object Object]"){
      var new_body = body
    } else {
      var new_body=JSON.parse(body)
    }
    

    if(new_body.meta.code > 399){
      console.log(new_body.error.message)
    } else {

      var lyric = new_body.data.lyric
      var song = new_body.data.song
      var author = new_body.data.author
      if(song.length>0){
        console.log(lyric, '--',author, 'in' ,song)
      } else {
        console.log(lyric, '--', author);
      }
    }


  } else {
    console.log(JSON.stringify(body))
    console.error('Error:', response.statusCode, ':', response.statusMessage);
  }
});
//r.end();
function endIt(){
  r.end()
  process.exit(1)
}
setTimeout(endIt,450)