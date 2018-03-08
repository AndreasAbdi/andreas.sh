import React from 'react';
import logo from 'resources/logo.png';

import 'components/HeaderImage.css';

//todo: weird image on left
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