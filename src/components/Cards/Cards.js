import React, { useState } from "react";
import CarouselIndicatorButton from '../CarouselIndicatorButton/CarouselIndicatorButton';
import PropTypes from 'prop-types';


const cardsJSON = require('./Cards.json');

const carouselInner = (cardsJSON, slideNum = 0) => {
	return cardsJSON.map((ele, index) => {
		return (

			<div className={`carousel-item ${slideNum == index ? "active" : ""}`} key={index}>
				<img src={ele.imgSrc} className="d-block vw-100 vh-100" alt={ele.imgName} />
			</div>
		);
	})
}

const carouselIndicators = (cardsJSON, slideNum = 0) => {
	cardsJSON.map((ele, index) => {
		const cName = slideNum == index ? "active" : "";
		const ariaCurrent = slideNum == index ? "true" : "false";
		const carouselProps = {
			"dataBsTarget": "#carouselExampleIndicators",
			"dataBsSlideTo": index.toString(),
			"cName": cName,
			"ariaCurrent": ariaCurrent,
			"ariaLabel": "Slide " + (index + 1),
			"keyIdx": index
		}
		return <CarouselIndicatorButton {...carouselProps} key={index} />
	})
}

const Cards = () => {
	const [slideNum, setSlideNum] = useState(0);
	const handlePrevButton = () => {
		if(slideNum!=0) setSlideNum(slideNum - 1);
		else setSlideNum(cardsJSON.length-1)
	}
	const handleNextButton = () => {
		if(slideNum!=cardsJSON.length-1) setSlideNum(slideNum + 1);
		else setSlideNum(0)
	}
	return (
		<div id="carouselExampleIndicators" className="carousel slide">
			<div className="carousel-indicators">
				{carouselIndicators(cardsJSON, slideNum)}
			</div>
			<div className="carousel-inner">
				{carouselInner(cardsJSON, slideNum)}
			</div>
			<button className={`carousel-control-prev`} onClick={handlePrevButton} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className={`carousel-control-next`} onClick={handleNextButton} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	)
};

Cards.propTypes = {};

Cards.defaultProps = {};

export default Cards;
