import React from 'react';
import PropTypes from 'prop-types';

import 'components/body/resume/ResumeSectionHeader.css';

class ResumeSectionHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume-header">{this.props.title}</div>
        );
    }
}

ResumeSectionHeader.defaultProps = {
    title: 'default header'
};

ResumeSectionHeader.propTypes = {
    title: PropTypes.string
};

export default ResumeSectionHeader;