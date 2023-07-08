import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarouselIndicatorButton.module.css';

const CarouselIndicatorButton = (props) => (

    <div className={styles.CarouselIndicatorButton} data-testid="CarouselIndicatorButton">
        <button type="button"
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={props.dataBsSlideTo}
            className={props.cName}
            aria-current={props.ariaCurrent}
            aria-label={props.ariaLabel}
        />
    </div>
);

CarouselIndicatorButton.propTypes = {
    dataBsTarget: PropTypes.string,
    dataBsSlideTo: PropTypes.string,
    cName: PropTypes.string,
    ariaCurrent: PropTypes.string,
    ariaLabel: PropTypes.string,
};

CarouselIndicatorButton.defaultProps = {
    dataBsTarget: "#placeHolder",
    dataBsSlideTo: "0",
    cName: "",
    ariaCurrent: "false",
    ariaLabel: "Slide 1",
};

export default CarouselIndicatorButton;
