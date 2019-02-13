import React from "react"

const SongDisplay = ({ trackDetails }) => (
	<div>
		<p>{trackDetails.trackName}</p>
		<p>{trackDetails.artistName}</p>
		<img src={trackDetails.artworkUrl} width="200" alt="artwork"/>
	</div>
)

export default SongDisplay