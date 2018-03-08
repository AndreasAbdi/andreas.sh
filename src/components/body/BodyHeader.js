import React from 'react';
import HeaderImage from 'resources/bodyHeader.png';
import 'components/body/BodyHeader.css';

class BodyHeader extends React.Component {
    render() {
        return (
            <div className="body-header">
                <img src={HeaderImage} alt={'logo'} />
            </div>
        );
    }
}

export default BodyHeader;