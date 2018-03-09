import React from 'react';
import PropTypes from 'prop-types';

import 'components/body/resume/ResumeSectionHeader.css';

class ResumeSectionHeader extends React.Component {

    getDateString(date) {
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        let monthString = monthNames[date.getMonth()];
        let yearString = date.getFullYear();
        return monthString + ' ' + yearString;

    }

    render() {
        let startDateString = this.getDateString(this.props.startDate);
        let endDateString = this.getDateString(this.props.endDate);
        let dateString = startDateString + '-' + endDateString;

        return ( 
            <div className = 'time-range' > 
                {dateString} 
            </div>
        );
    }
}

ResumeSectionHeader.defaultProps = {
    startDate: new Date('January 1, 0000 00:00:00'),
    endDate: new Date('January 1, 0000 00:00:00')
};

ResumeSectionHeader.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
};

export default ResumeSectionHeader;