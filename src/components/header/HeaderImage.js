import React from 'react';
import logo from 'resources/logo.png';
import 'components/header/HeaderImage.css';

class HeaderImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-image">
                <img src={logo} alt={'logo'} />
            </div>
        );
    }
}


export default HeaderImage;