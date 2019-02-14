import React from "react"
import "./controller.css"

const SlideRender = ({currentTime}) => (
	<div>
		<p>{currentTime}</p>
		<div className="slide-render-container">
			<div className="slide-progress"></div>
		</div>
	</div>
)

export default SlideRender