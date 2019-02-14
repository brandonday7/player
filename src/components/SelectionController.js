import React from "react"
import PlayController from "./PlayController"
import SlideRender from "./SlideRender"
import { Slider, Direction } from 'react-player-controls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import "./controller.css"

const SelectionController = ({ nextTrack, prevTrack, pausePlay, playing, seek, currentTime, duration}) => (
	<div className="controller-container">
		<div className="buttons-container">
			<FontAwesomeIcon className="icon change-song" onClick={prevTrack} icon={faBackward}/>
			<PlayController onClick={pausePlay} playing={playing}/>
			<FontAwesomeIcon className="icon change-song" onClick={nextTrack} icon={faForward}/>
		</div>
		<Slider
		  direction={Direction.HORIZONTAL}
		  isEnabled
		  onChange={newValue => seek(newValue)}
		  onChangeStart={pausePlay}
		  onChangeEnd={pausePlay}
  >
  	<SlideRender currentTime={currentTime} duration={duration}/>
		</Slider>
	</div>
)

export default SelectionController