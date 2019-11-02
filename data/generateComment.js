const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const perf = require('execution-time')();
const fs = require('fs')
const csvWriter = require('csv-write-stream');
var faker = require('faker')
var skewnorm = require('skew-normal-random');
var distributions = require('distributions');
const momentRandom = require('moment-random');
const random = require('random')
var writer = csvWriter();
//var normal = distributions.Normal(0.3 /* mean */, 1 /* std deviation */);
const commentLengthNormal = random.normal(0.2, 0.1)
const songNormal = random.normal(0.5, 0.3)
//const playedNormal = random.normal(0.5, 0.5)
//perf.start();
//rSkewNorm(alpha, location, scale, [min], [max])
const dataGen =  () => {
  writer.pipe(fs.createWriteStream('../generatedData/data.csv'));
  for(var i=1; i<=100000; i++) {
    
    var numSentence = Math.ceil(Math.abs(commentLengthNormal())*10)
    var comment = faker.lorem.sentences(numSentence)
    var songID=1000000000;
    var userID=1400000000;
    while(songID>10000000){
    var songID = Math.ceil(Math.abs(songNormal())*10000000)
    }
    while(userID>14000000) {
      userID = Math.ceil(Math.abs(songNormal())*14000000)
    }
    //var playID = Math.ceil(Math.abs(playedNormal())*1000)
    writer.write({
        
        song_id: songID,
        user_id: userID,
        content: comment,
        time_stamp: momentRandom().format("YYYYMMDD"),
        track_time: Math.ceil(Math.random()*120)
    })
  }
  writer.end()

}
dataGen();
// var newData=[];
// for(var i=0; i<10000000; i++) {
//   newData.push(  {
//     id: i,
//     song_id: i,
//     user_id: i,
//     content: 'comment_1',
//     time: 1234,
//     track_time: 1234
//   })
// }




// csvWriter
//   .writeRecords(newData)
//   .then(()=> console.log('The CSV file was written successfully'));



//at beginning of your code

//at end of your code
