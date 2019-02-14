import React from "react"
import "../styles/songDisplay.css"

const SongDisplay = ({ trackDetails }) => (
	<div className="song-container">
		<img src={trackDetails.artworkUrl} alt="artwork" className="artwork"/>
		<div className="track-details">
			<p className="track-name">{trackDetails.trackName}</p>
			<p className="artist-name">{trackDetails.artistName}</p>
		</div>
	</div>
)

export default SongDisplay