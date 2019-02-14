import React from "react"
import "./controller.css"
import moment from "moment"

const SlideRender = ({currentTime}) => (
	<div className="slide-render-container">
		<p className>{moment(currentTime).format("m:ss")}</p>
		<div className="slide-total">
			<div className="slide-progress"></div>
		</div>
	</div>
)

export default SlideRender