CREATE KEYSPACE IF NOT EXISTS testKeyspace
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };

USE testKeyspace;

CREATE TABLE comments (id int, song_id int, user_id int, content text, time_posted int, track_time int, PRIMARY KEY(song_id, id));


