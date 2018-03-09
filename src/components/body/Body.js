import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import BodyHeader from 'components/body/BodyHeader.js';
import PropTypes from 'prop-types';
import Info from 'components/body/info/Info.js';
import Resume from 'components/body/resume/Resume.js';

import 'components/body/Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let display = null;
        if (this.props.displayType == 'info') {
            display = (
                <Info />
            );
        }

        if (this.props.displayType == 'resume') {
            display = (
                <Resume 
                    sectionDetails={this.props.sectionDetails}
                />
            );
        }
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
                            {display}
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