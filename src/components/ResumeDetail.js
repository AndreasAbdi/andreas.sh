import React from 'react';
import PropTypes from 'prop-types';

import 'components/ResumeDetail.css';

class ResumeDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let title = null;   
        if (this.props.workPosition) {
            title = <li>props.workPosition</li>;
        }
        let infoListItems = this.props.info
            .map((v, k) => (<li key={k}>{v}</li>));
        let infoList = (<ol>{infoListItems}</ol>);

        return (
            <div className="resume-detail">
                <ul>
                    <li>{this.props.header}</li>
                    <li>{this.props.startDate.toDateString()}</li>
                    <li>{this.props.endDate.toDateString()}</li>
                    {title}
                </ul>
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