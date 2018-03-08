import React from 'react';
import Halftone from 'resources/halftone.png';

import 'components/header/menu/MenuImage.css';

class MenuImage extends React.Component {
    render() {
        return (
            <img className="menu-image" src={Halftone} alt={'logo'} />
        );
    }
}

export default MenuImage;