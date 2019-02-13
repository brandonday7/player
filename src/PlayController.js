import React from "react"

const PlayController = ({ label, onClick}) => (
	<p onClick={onClick}>{label}</p>
)

export default PlayController