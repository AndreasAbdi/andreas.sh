import React from 'react';
import PropTypes from 'prop-types';
import MenuElement from 'components/MenuElement.js';

import 'components/MenuBar.css';

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
                    command={v.command}
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
    details: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        command: PropTypes.arrayOf(PropTypes.func.isRequired)
    }))
};

export default MenuBar;