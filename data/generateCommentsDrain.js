const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const perf = require('execution-time')();
const fs = require('fs')
const csvWriter = require('csv-write-stream');
var faker = require('faker')
const momentRandom = require('moment-random');
const random = require('random')
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var writer = csvWriter();
const start = new Date(2011, 8, 01);
const end   = new Date(2019, 11, 04);
const range = moment.range(start, end)
const million = 1000000
var randomNormal = require('random-normal');
//var normal = distributions.Normal(0.3 /* mean */, 1 /* std deviation */);
const commentLengthNormal = random.normal(0.2, 0.1)
const writeUsers = fs.createWriteStream('../generatedData/comments.csv');
writeUsers.write('song_id,username_id,content,time_stamp,track_time\n', 'utf8');

function generateSong(writer, encoding, callback) {
  let i = 300*million;
  let id = 0;
  function write() {
    let ok = true;
    do {
      if(i%100000===0) {
        console.log((id/(300*million)*100).toFixed(2) +'%')
      }
      i -= 1;
      id += 1;
      var date = momentRandom(end, start).format("YYYYMMDD")
      var year = date.slice(0,4)
      var username = faker.internet.userName();
      var numWords = Math.ceil(Math.random()*5)
      var track_name = faker.lorem.words(numWords);
      var numSentence = Math.ceil(Math.abs(commentLengthNormal())*10)
      var comment = faker.lorem.sentences(numSentence)
      var song_id=Math.ceil(Math.abs(randomNormal({mean: 5000000, dev:2000000})));
      var username_id=Math.ceil(Math.abs(randomNormal({mean: 7000000, dev:2000000})));
      while(song_id>10000000){
        song_id = Math.ceil(Math.abs(randomNormal({mean: 5000000, dev:2000000})));
      }
      while(username_id>14000000) {
        username_id = Math.ceil(Math.abs(randomNormal({mean: 7000000, dev:2000000})));
      }
      var time_stamp = momentRandom().format("YYYYMMDD");
      var track_time = Math.ceil(Math.random()*400);
      const data = `${song_id},${username_id},${comment},${time_stamp},${track_time}\n`;
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

generateSong(writeUsers, 'utf-8', () => {
  writeUsers.end();
});