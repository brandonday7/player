import React from "react"
import PlayController from "./PlayController"
import SliderContainer from "./SliderContainer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import "../styles/controller.css"

const SelectionController = ({ nextTrack, prevTrack, pausePlay, playing, seek, currentTime, duration}) => (
	<div className="controller">
		<div className="controller__buttons">
			<FontAwesomeIcon 
				className="icon icon--large" 
				onClick={prevTrack} 
				icon={faBackward}
			/>
			<PlayController onClick={pausePlay} playing={playing}/>
			<FontAwesomeIcon 
				className="icon icon--large" 
				onClick={nextTrack} 
				icon={faForward}
			/>
		</div>

		<SliderContainer
			pausePlay={pausePlay}
			seek={seek}
			currentTime={currentTime}
			duration={duration}
		/>
	</div>
)

export default SelectionController