import React from "react"
import "./controller.css"

const convertTime = time => {
	const mins = Math.floor(time/60)
	const secs = `${time % 60}`.padStart(2, '0')
	return `${mins}:${secs}`
}

const SlideRender = ({ currentTime, duration }) => (
	<div className="slide-render-container">
		<p className="time-text">{convertTime(currentTime)}</p>
		<div className="slide-total">
			<div className="slide-progress"></div>
		</div>
		<p className="time-text">{convertTime(duration - currentTime)}</p>
	</div>
)

export default SlideRender