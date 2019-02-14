import React, { Component } from "react"
import { render } from "react-dom"
import ReactPlayer from 'react-player'
import PlayController from "./components/PlayController.js"
import SongDisplay from "./components/SongDisplay.js"
import SelectionController from "./components/SelectionController.js"

import "./player.css"

class Player extends Component {
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
      currentTrackIndex: 0,
      finalTrackIndex: this.tracks.length - 1,
    }
  }

  pausePlay = () => this.setState({ playing: !this.state.playing })

  getCurrentTrack = () => {
    const {currentTrackIndex} = this.state
    const currentTrack = this.tracks[currentTrackIndex]
    return this.tracks.find(track => track.id === currentTrack.id)
  }

  nextTrack = () => {
    const { currentTrackIndex, finalTrackIndex } = this.state
    const nextTrackIndex = currentTrackIndex !== finalTrackIndex ? currentTrackIndex + 1 : 0
    this.setState({ currentTrackIndex: nextTrackIndex })
  }

  prevTrack = () => {
    const { currentTrackIndex, finalTrackIndex } = this.state
    // if current track index is non-zero, move to last track
    // otherwise, loop back to first track in list
    const prevTrackIndex = currentTrackIndex ? currentTrackIndex - 1 : finalTrackIndex
    this.setState({ currentTrackIndex: prevTrackIndex })
  }

  render() {
    const {playing, currentTrackIndex, currentTime, trackDuration} = this.state
    const currentTrack = this.getCurrentTrack()
    return (
      <div className="player-container">
        <SongDisplay trackDetails={currentTrack}/>
        <MediaPlayer 
          playing={playing} 
          mediaUrl={currentTrack.mediaUrl} 
          nextTrack={this.nextTrack}
          prevTrack={this.prevTrack}
          pausePlay={this.pausePlay}
        />
      </div>
    );
  }
}

/*
Library documentation: https://www.npmjs.com/package/react-player
*/
class MediaPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: 0,
      currentTime: 0
    }
  }

  update = (type, val) => this.setState({[type]: val})

  ref = player => {
    this.player = player
  }

  seek = toTime => this.player.seekTo(toTime)

  render() {
    const {playing, mediaUrl, nextTrack, prevTrack, pausePlay} = this.props
    const { duration, currentTime } = this.state
    return (
      <div>
        <SelectionController 
          nextTrack={nextTrack} 
          prevTrack={prevTrack} 
          pausePlay={pausePlay} 
          playing={playing} 
          seek={this.seek}
          currentTime={currentTime}
          duration={duration}
        />
        <ReactPlayer
          ref={this.ref}
          playing={playing}
          height={'0px'}
          width={'0px'}
          config={{ file: { forceAudio: true } }}
          url={mediaUrl} 
          onSeek={newTime => this.update("currentTime", Math.ceil(newTime))}
          onProgress={data => this.update("currentTime", Math.ceil(data.playedSeconds))} 
          onDuration={duration => this.update("duration", Math.ceil(duration))}
        />
      </div>
    )
  }
}

export default Player;