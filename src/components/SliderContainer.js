import React from "react"
import SlideRender from "./SlideRender"
import { Slider, Direction } from 'react-player-controls'

import "../styles/controller.css"

const convertTime = time => {
	const mins = Math.floor(time/60)
	const secs = `${time % 60}`.padStart(2, '0')
	return `${mins}:${secs}`
}

const SliderContainer = ({ pausePlay, seek, currentTime, duration}) => (
		<div className="slide-render-container">
			<p className="time-text left">{convertTime(currentTime)}</p>
			<Slider
		  	direction={Direction.HORIZONTAL}
		  	isEnabled
		  	onChange={newValue => seek(newValue)}
		  	onChangeStart={pausePlay}
		  	onChangeEnd={pausePlay}
  		>
  			<SlideRender currentTime={currentTime} duration={duration}/>
			</Slider>
			<p className="time-text right">{convertTime(duration - currentTime)}</p>
		</div>
)

export default SliderContainer