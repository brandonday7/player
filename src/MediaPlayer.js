import React, { Component } from "react"
import ReactPlayer from 'react-player'
import SelectionController from "./components/SelectionController.js"

import "./styles/player.css"

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
      <div className="media-player-container">
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
          onEnded={nextTrack}
        />
      </div>
    )
  }
}

export default MediaPlayer