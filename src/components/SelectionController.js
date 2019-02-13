import React from "react"
import PlayController from "./PlayController"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import "./controller.css"

const SelectionController = ({ nextTrack, prevTrack, pausePlay, playing}) => (
	<div className="controller-container">
		<FontAwesomeIcon className="icon change-song" onClick={prevTrack} icon={faBackward}/>
		<PlayController onClick={pausePlay} playing={playing}/>
		<FontAwesomeIcon className="icon change-song" onClick={nextTrack} icon={faForward}/>
	</div>
)

export default SelectionController