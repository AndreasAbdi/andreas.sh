import React from 'react';
import PropTypes from 'prop-types';

import 'components/body/resume/TimeRange.css';

class TimeRange extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className="resume-section-header">
                {this.props.title}
            </h2>
        );
    }
}

TimeRange.defaultProps = {
    title: 'default header'
};

TimeRange.propTypes = {
    title: PropTypes.string
};

export default TimeRange;