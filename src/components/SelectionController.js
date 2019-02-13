import React from "react"
import PlayController from "./PlayController"
import SlideRender from "./SlideRender"
import { Slider, Direction } from 'react-player-controls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import "./controller.css"

const SelectionController = ({ nextTrack, prevTrack, pausePlay, playing}) => (
	<div className="controller-container">
		<div className="buttons-container">
			<FontAwesomeIcon className="icon change-song" onClick={prevTrack} icon={faBackward}/>
			<PlayController onClick={pausePlay} playing={playing}/>
			<FontAwesomeIcon className="icon change-song" onClick={nextTrack} icon={faForward}/>
		</div>
		<Slider
		  direction={Direction.HORIZONTAL}
		  isEnabled
		  onChange={newValue => console.log(`clicked at ${newValue}`)}
		  onChangeStart={startValue => console.log(`started dragging at ${startValue}`)}
		  onChangeEnd={endValue => console.log(`stopped dragging at ${endValue}`)}
  >
  	<SlideRender />
		</Slider>
	</div>
)

export default SelectionController