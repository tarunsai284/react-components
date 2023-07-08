import React, { useState } from "react";
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

const carouselItems = (carouselJson) => {
    return carouselJson.map((ele, index) => {
        return (
            <Carousel.Item key={`carousels-carousel-item-${index.toString()}`}>
                <img
                    className="d-block vw-100 vh-100"
                    src={ele.imgSrc}
                    alt={ele.imgName}
                />
                <Carousel.Caption className="text-dark">
                    <h3>{ele.imgName}</h3>
                    <p>{ele.imgName}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    });
}


const Carousels = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    console.log(carouselItems(props.carouselJson));
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {carouselItems(props.carouselJson)}
        </Carousel>
    )
};

Carousels.propTypes = {
    carouselJson: PropTypes.arrayOf(PropTypes.shape({
        imgSrc: PropTypes.string,
        imgName: PropTypes.string,
    }))
};

Carousels.defaultProps = {
    carouselJson: []
};

export default Carousels;
