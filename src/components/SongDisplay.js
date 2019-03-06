import React from "react"
import "../styles/songDisplay.css"

const SongDisplay = ({ trackDetails }) => (
	<div className="song">
		<img src={trackDetails.artworkUrl} alt="artwork" className="song__artwork"/>
		<div className="song__details">
			<p className="song__name">{trackDetails.trackName}</p>
			<p className="song__artist">{trackDetails.artistName}</p>
		</div>
	</div>
)

export default SongDisplay