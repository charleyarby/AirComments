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
'localhost:4000/postsong/:song_id'
 -add song to database

'localhost:4000/postcomment/:song_id/:comment_id/'
 -add comments to current song

### GET
'localhost:4000/getsong/:song_id'
 -get all info for specific song

'localhost:4000/getcomment/:song_id'
 -get all comment for specific song

### DELETE
'localhost:4000/deletesong/:song_id'
 -delete specific song

'localhost:4000/deletecomment/:comment_id/'
 -delete specific comment


### UPDATE
'localhost:4000/updatesong/:song_id'
 -update specific song

'localhost:4000/updatecomment/:comment_id'
 -update specific comment



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


