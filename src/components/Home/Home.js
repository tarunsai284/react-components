import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { get } from '../../common/APIwrapper/appwrapper';
import * as Constants from '../../common/constants'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap/';
import { isString } from '../../common/utils/stringUtils';

const errorAlert = (handleCloseAlert) => {
    return (
        <div class="alert alert-danger" role="alert">
            <div>
                A simple danger alert—check it out!
            </div>
            <button type="button" onClick={handleCloseAlert} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        </div>
    )
}

const listGroupElements = (posts) => {
    return (
        <ListGroup>
            {
                posts.map((ele, index) => {
                    return (
                        <ListGroup.Item action
                            key={`listgroup-item-${index.toString()}`}
                            href={`#listgroup-item-${index.toString()}`}>
                            {ele && ele.title && isString(ele.title) && ele.title.substring(0, 50)}
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    );
}

const tabContent = (posts) => {
    return (
        <Tab.Content>
            {
                posts.map((ele, index) =>
                    <Tab.Pane eventKey={`#listgroup-item-${index.toString()}`}>{ele.body}</Tab.Pane>
                )
            }
        </Tab.Content>
    )
}


const Home = () => {
    const [posts, setPosts] = useState([])
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const fetchPosts = () => {
        get(Constants.JSON_PLACEHOLDER_POSTS+"dfsf", {}, {})
            .then(data => {
                if (!data.ok) throw new Error(data.status);
                return data.json();
            })
            .then(data => {
                if (data != null && Array.isArray(data)) {
                    setPosts(data.slice(0, 10));
                }
            })
            .catch(err => {
                console.log(err)
                setShowErrorAlert(true);
            })
    }
    useEffect(fetchPosts, []);
    const handleCloseAlert = () => { setShowErrorAlert(false) }
    const errorAlertEle  = errorAlert(handleCloseAlert);

    return (

        <div className={styles.Home} data-testid="Home">
            {showErrorAlert && errorAlertEle}
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        {listGroupElements(posts)}
                    </Col>
                    <Col sm={8}>
                        {tabContent(posts)}
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
