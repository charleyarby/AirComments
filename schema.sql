
DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id serial ,
  song_id INTEGER NOT NULL ,
  username_id INTEGER NOT NULL ,
  content TEXT NOT NULL ,
  time_stamp INTEGER NOT NULL ,
  track_time INTEGER NOT NULL ,
  PRIMARY KEY (id)
);
