import React from "react"
import "./controller.css"

const SlideRender = ({currentTime, duration}) => (
	<div className="slide-total">
		<div 
			style={{width: `${20*currentTime/duration}em`}} 
			className="slide-progress">
		</div>
	</div>
)

export default SlideRender