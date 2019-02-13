import React from "react"

const SelectionController = ({ nextTrack, prevTrack}) => (
	<div>
		<p onClick={prevTrack}>Previous</p>
		<p onClick={nextTrack}>Next</p>
	</div>
)

export default SelectionController