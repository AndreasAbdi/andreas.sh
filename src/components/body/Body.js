import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import BodyHeader from 'components/body/BodyHeader.js';
import PropTypes from 'prop-types';
import Info from 'components/body/info/Info.js';
import Resume from 'components/body/resume/Resume.js';

import {Route, Switch} from 'react-router-dom';

import 'components/body/Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body">
                <Container
                    fluid={true}
                >
                    <Row
                        noGutters={true}
                        className='row-header-bar'
                    >
                        <Col>
                            <BodyHeader />
                        </Col>
                    </Row>
                    <Row
                        noGutters={true}
                        className='data'
                    >
                        <Col>
                            <Switch>
                                <Route 
                                    path='/home' 
                                    render={() => (
                                        <Info />
                                    )} 
                                />
                                <Route 
                                    path='/projects' 
                                    render={() => (
                                        <h1>
                                            WIP
                                        </h1>
                                    )} 
                                />
                                <Route 
                                    path='/resume' 
                                    render={() => (
                                        <Resume 
                                            sectionDetails={this.props.sectionDetails}
                                        />
                                    )} 
                                />
                                <Route
                                    render = { () => (
                                        <h1>
                                            Hi, this page cannot be found. 
                                        </h1>
                                    )}
                                />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Body.propTypes = {
    displayType: PropTypes.string,
    sectionDetails: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        details: PropTypes.arrayOf(PropTypes.shape({
            header: PropTypes.string.isRequired,
            startDate: PropTypes.instanceOf(Date).isRequired,
            endDate: PropTypes.instanceOf(Date).isRequired,
            workPosition: PropTypes.string,
            info: PropTypes.arrayOf(PropTypes.string)
        }))
    }))
};

export default Body;