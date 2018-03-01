import React from 'react';
import {Col, Row} from 'reactstrap';
import ResumeSection from 'components/ResumeSection.js';

import PropTypes from 'prop-types';

//todo
class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sectionDetails = null;
        if (this.props.sectionDetails) {
            sectionDetails = this.props.sectionDetails
                .map((detail, k) => (
                    <ResumeSection
                        key={k}
                        title = {detail.title}
                        details = {detail.details}
                    />
                )
                );
        }

        return (
            <div className="body">
                <Row>
                    <Col>
                        <div>
                            {'Hello this is the body'}
                        </div>
                        {sectionDetails}
                    </Col>
                </Row>
            </div>
        );
    }
}

Body.propTypes = {
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