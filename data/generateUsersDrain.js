const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const perf = require('execution-time')();
const fs = require('fs')
var faker = require('faker')
const momentRandom = require('moment-random');
const random = require('random')
const million = 1000000
var randomNormal = require('random-normal');
const writeLikes = fs.createWriteStream('../generatedData/users.csv');
writeLikes.write('id,username,user_pic\n', 'utf8');

function generateLikes(writer, encoding, callback) {
  let i = 14*million;
  let id = 0;
  function write() {
    let ok = true;
    do {
      if(i%100000===0) {
        console.log((id/(14*million)*100).toFixed(2) +'%')
      }
      i -= 1;
      id += 1;
      var username = faker.internet.userName();
      var user_pic = faker.image.avatar();
      
      const data = `${i},${username},${user_pic}\n`;
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

generateLikes(writeLikes, 'utf-8', () => {
  writeLikes.end();
});