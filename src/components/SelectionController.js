import React from "react"
import PlayController from "./PlayController"

import "./controller.css"

const SelectionController = ({ nextTrack, prevTrack, pausePlay, label}) => (
	<div className="controller-container">
		<p onClick={prevTrack}>Previous</p>
		<PlayController onClick={pausePlay} label={label}/>
		<p onClick={nextTrack}>Next</p>
	</div>
)

export default SelectionController