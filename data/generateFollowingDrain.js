const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const perf = require('execution-time')();
const fs = require('fs')
var faker = require('faker')
const momentRandom = require('moment-random');
const random = require('random')
const million = 1000000
var randomNormal = require('random-normal');
const writeFollowings = fs.createWriteStream('../generatedData/followings.csv');
writeFollowings.write('username_id,artist_id\n', 'utf8');

function generateFollowings(writer, encoding, callback) {
  let i = 50*million;
  let id = 0;
  function write() {
    let ok = true;
    do {
      if(i%100000===0) {
        console.log((id/(50*million)*100).toFixed(2) +'%')
      }
      i -= 1;
      id += 1;
      var username_id=Math.ceil(Math.abs(randomNormal({mean: 7*million, dev:2*million})));
      while(username_id>10*million){
        username_id = Math.ceil(Math.abs(randomNormal({mean: 7*million, dev:2*million})));
      }
      var artist_id=Math.ceil(Math.abs(randomNormal({mean: 5*million, dev:2*million})));
      while(artist_id>10*million){
        artist_id = Math.ceil(Math.abs(randomNormal({mean: 5*million, dev:2*million})));
      }
      
      const data = `${username_id},${artist_id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

generateFollowings(writeFollowings, 'utf-8', () => {
  writeFollowings.end();
});