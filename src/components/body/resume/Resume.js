import React from 'react';
import PropTypes from 'prop-types';
import ResumeSection from 'components/body/resume/ResumeSection.js';
import 'components/body/resume/Resume.css';

class Resume extends React.Component {
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
            <div className="resume">
                {sectionDetails}
            </div>
        );
    }
}

Resume.propTypes = {
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

export default Resume;