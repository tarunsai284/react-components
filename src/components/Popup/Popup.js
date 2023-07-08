import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.css';
import { Button, Modal } from 'react-bootstrap/';


const Popup = () => {
    const [showPopUp, setShowPopUp] = useState(false)

    const handleShow = () => {
        setShowPopUp(true);
    }
    
    const handleClose = () => {
        setShowPopUp(false);
    }
    return (
        <div className={styles.Popup} data-testid="Popup">
            <Button onClick={handleShow} className={styles.triggerButton} variant="dark" size="lg">
                Click Me
            </Button>
            <Modal
                show={showPopUp}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='bg-primary-subtle' closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

Popup.propTypes = {};

Popup.defaultProps = {};

export default Popup;
