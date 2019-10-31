# SoundClout Information and Comments Module

***Artist, Track Information and Comments for the SoundClout App***

This module consists of information about the artist and track as well as the ability to infinitely scroll through comments and post comments that reference a time within the displayed track.


## Related Projects

- https://github.com/AirCloudy/song-display
- https://github.com/AirCloudy/playbar
- https://github.com/AirCloudy/Related-Tracks

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [API Call](#apicall)
1. [Development](#development)

## Usage

The user will be able to view track and artist information, post comments, like and repost tracks and comments.

## API Call


### POST
POST /song
-Add a new song under the song collection
-Data goes in the body

POST /song/:song_id/comments
-Add a comment in the comments collection for the specific song
-Data goes in the body

### GET
GET /song
-Get all songs

GET /song/:song_id
-Get the song with id

GET /song/:song_id/comments
-Get all the comments for specific song id

GET /song/:song_id/comments/:comment_id
-Get the specific comment from the specific song

### DELETE
DELETE /song
-delete all songs

DELETE /song/:song_id
-delete specific song

DELETE /song/:song_id/comments
-delete all comments from specific song

DELETE /song/:song_id/comments/:comment_id/
-delete specific comment from specific song


### PATCH
PATCH /song/:song_id'
-update specific song
-Data goes in the body

PATCH /song/:song_id/comments/:comment_id
-update specific comment from specific song
-Data goes in the body


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


