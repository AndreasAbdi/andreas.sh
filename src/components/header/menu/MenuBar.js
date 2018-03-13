import React from 'react';
import PropTypes from 'prop-types';
import MenuElement from 'components/header/menu/MenuElement.js';
import {menuButton} from 'types/Types.js';

import 'components/header/menu/MenuBar.css';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menuElements = null;        
        if(this.props.details) {
            menuElements = this.props.details
                .map((v, k) => (<MenuElement 
                    key={k} 
                    title={v.title}
                    target={v.target}
                />));
        }
        return (
            <div className="menu-bar">
                {menuElements}
            </div>
        );
    }
}

MenuBar.propTypes = {
    details: PropTypes.arrayOf(menuButton)
};

export default MenuBar;