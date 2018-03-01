import React from 'react';
import PropTypes from 'prop-types';

import ResumeSectionHeader from 'components/ResumeSectionHeader.js';
import ResumeDetail from 'components/ResumeDetail.js';

import 'components/ResumeSection.css';


class ResumeSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sectionDetails = null;
        if (this.props.details) {
            sectionDetails = this.props.details
                .map((detail, k) => (
                    <ResumeDetail 
                        key={k}
                        header={detail.header}
                        startDate={detail.startDate}
                        endDate={detail.endDate}
                        workPosition={detail.workPosition}
                        info={detail.info}
                    />
                )
                );
        }

        return (
            <div className="resume-section">
                <ResumeSectionHeader 
                    title={this.props.title}
                />
                {sectionDetails}
            </div>
        );
    }
}

ResumeSection.propTypes = {
    title: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        workPosition: PropTypes.string,
        info: PropTypes.arrayOf(PropTypes.string)
    }))
};

export default ResumeSection;