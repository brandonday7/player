import React from "react"
import "../styles/controller.css"

const SlideRender = ({currentTime, duration}) => (
	<div className="slider">
		<div 
			style={{width: `${20*currentTime/duration}em`}} 
			className="slider__progress">
		</div>
	</div>
)

export default SlideRender