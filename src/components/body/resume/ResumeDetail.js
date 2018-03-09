import React from 'react';
import PropTypes from 'prop-types';
import TimeRange from 'components/body/resume/TimeRange.js';
import 'components/body/resume/ResumeDetail.css';

class ResumeDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let infoListItems = this.props.info
            .map((v, k) => (<li className='resume-detail-info-elem' key={k}>{v}</li>));
        let infoList = (<ul className='resume-detail-info'>{infoListItems}</ul>);

        return (
            <div className='resume-detail'>
                <h4 className='resume-detail-header'>
                    {this.props.header}
                </h4>
                <div className='resume-detail-general'>
                    <div className='position'>
                        {this.props.workPosition}
                    </div>
                    <TimeRange
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                    />
                </div>
                {infoList}
            </div>
        );
    }
}

ResumeDetail.defaultProps = {
    title: 'default header'
};

ResumeDetail.propTypes = {
    header: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    workPosition: PropTypes.string,
    info: PropTypes.arrayOf(PropTypes.string)
};

export default ResumeDetail;