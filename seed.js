var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {

  Stories.clear((err, instance) => {
    if (err) {
       console.log(err);
    } else {
        console.log("clear success");
    }
  })

  for(var i = 0; i < data.length; i++) {

    console.log(data[i].by.id);

    var story = {
      id: data[i].id,
      by: data[i].by.id,
      title: data[i].title,
      score: data[i].score,
      karma: data[i].by.karma,
      about: data[i].by.about
    }

    Stories.insertOne(story, (err, instance) => {
     if (err) {
        console.log(err);
     } else {
         console.log("success");
     }
   })
  }

};

seedDb(data);