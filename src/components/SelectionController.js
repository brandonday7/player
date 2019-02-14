import React from "react"
import PlayController from "./PlayController"
import SlideRender from "./SlideRender"
import { Slider, Direction } from 'react-player-controls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import "./controller.css"

const convertTime = time => {
	const mins = Math.floor(time/60)
	const secs = `${time % 60}`.padStart(2, '0')
	return `${mins}:${secs}`
}

const SelectionController = ({ nextTrack, prevTrack, pausePlay, playing, seek, currentTime, duration}) => (
	<div className="controller-container">
		<div className="buttons-container">
			<FontAwesomeIcon className="icon change-song" onClick={prevTrack} icon={faBackward}/>
			<PlayController onClick={pausePlay} playing={playing}/>
			<FontAwesomeIcon className="icon change-song" onClick={nextTrack} icon={faForward}/>
		</div>
		
		<div className="slide-render-container">
			<p className="time-text">{convertTime(currentTime)}</p>
			<Slider
		  	direction={Direction.HORIZONTAL}
		  	isEnabled
		  	onChange={newValue => seek(newValue)}
		  	onChangeStart={pausePlay}
		  	onChangeEnd={pausePlay}
  		>
  			<SlideRender currentTime={currentTime} duration={duration}/>
			</Slider>
			<p className="time-text">{convertTime(duration - currentTime)}</p>
		</div>
	</div>
)

export default SelectionController