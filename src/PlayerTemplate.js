import React from "react"
import { render } from "react-dom"
import ReactPlayer from 'react-player'
import PlayController from "./components/PlayController.js"
import SongDisplay from "./components/SongDisplay.js"
import SelectionController from "./components/SelectionController.js"

import "./player.css"

/*
The goal is to create an audio player, similar to what you'd find at the bottom of the Spotify app.
All our media files are accessible via URLs, as you can see below in `this.tracks`. We're using a
library called react-player (https://www.npmjs.com/package/react-player) for the actual streaming
logic. Our MediaPlayer component encapsulates a ReactPlayer component.

The Player component should implement the following functionality (in order of priority):
1. It should have a play/pause button. Clicking on the button should play/pause the song
   accordingly.
2. It should display the track name, artist name, and artwork for the given track.
3. It should have next/previous buttons for navigating to the next/previous track in `this.tracks`.
4. Style it! The player should always appear at the bottom of the page, and should take up the full
   width of the screen.
5. A seeker for the song. It should graphically show the amount of the song that has been played
   relative to the total length of the song. When you click within the seeker, it should skip
   to a point in the song based on where you click. Look into progressInterval and onProgress in the
   ReactPlayer library (among others).

Notes:
- Assume for now that we will always have a harcoded playlist in `this.tracks`.
- Feel free to add additional libraries if necessary.
- Prioritize a clean implementation.
- Launch localhost:3000 in the browser to view the result.
*/
class Player extends React.Component {
  constructor(props) {
    super(props);
    // This is the 'playlist' of tracks that we're playing/pausing, navigating through, etc.
    this.tracks = [
      {
        id: 1,
        trackName: "The Pretender",
        artistName: "Foo Fighters",
        artworkUrl: "https://images.sk-static.com/images/media/profile_images/artists/29315/huge_avatar",
        mediaUrl: "https://p.scdn.co/mp3-preview/6aba2f4e671ffe07fd60807ca5fef82d48146d4c?cid=1cef747d7bdf4c52ac981490515bda71",
        durationMilliseconds: 30000 // This track is 30 seconds long (30,000 milliseconds).
      },
      {
        id: 2,
        artistName: "Arctic Monkeys",
        trackName: "Do I Wanna Know?",
        artworkUrl: "https://cps-static.rovicorp.com/3/JPG_500/MI0003/626/MI0003626958.jpg?partner=allrovi.com",
        mediaUrl: "https://p.scdn.co/mp3-preview/9ec5fce4b39656754da750499597fcc1d2cc82e5?cid=1cef747d7bdf4c52ac981490515bda71",
        durationMilliseconds: 30000
      },
    ];

    this.state = {
      playing: false,
      currentTrackIndex: 0
    }
  }

  pausePlay = () => this.setState({ playing: !this.state.playing })

  getCurrentTrack = () => {
    const {currentTrackIndex} = this.state
    const currentTrack = this.tracks[currentTrackIndex]
    return this.tracks.find(track => track.id === currentTrack.id)
  }

  nextTrack = () => {
    const { currentTrackIndex } = this.state
    const lastTrackIndex = this.tracks.length - 1
    const nextTrackIndex = currentTrackIndex !== lastTrackIndex ? currentTrackIndex + 1 : 0
    this.setState({ currentTrackIndex: nextTrackIndex })
  }

  prevTrack = () => {
    const { currentTrackIndex } = this.state
    const lastTrackIndex = this.tracks.length - 1
    const prevTrackIndex = currentTrackIndex ? currentTrackIndex - 1 : lastTrackIndex
    this.setState({ currentTrackIndex: prevTrackIndex })
  }

  render() {
    const {playing, currentTrackIndex} = this.state
    const currentTrack = this.getCurrentTrack()
    return (
      <div className="player-container">
        <SongDisplay trackDetails={currentTrack}/>
        <div style={{marginLeft: "5em", display: "flex"}}>
        <SelectionController nextTrack={this.nextTrack} prevTrack={this.prevTrack} pausePlay={this.pausePlay} playing={playing}/>
        </div>
        <MediaPlayer playing={playing} mediaUrl={currentTrack.mediaUrl}/>
      </div>
    );
  }
}

/*
Library documentation: https://www.npmjs.com/package/react-player
*/
class MediaPlayer extends React.Component {
  render() {
    const {playing, mediaUrl} = this.props
    return (
      <div>
        <ReactPlayer
          ref="reactPlayer"
          playing={playing}
          height={'0px'}
          width={'0px'}
          config={{ file: { forceAudio: true } }}
          url={mediaUrl} /> 
      </div>
    )
  }
}

export default Player;