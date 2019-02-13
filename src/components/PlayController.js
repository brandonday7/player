import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import "./play.css"

const PlayController = ({ pause, onClick}) => (
	<FontAwesomeIcon className="icon" onClick={onClick} icon={pause ? faPauseCircle : faPlayCircle}/>
)

export default PlayController