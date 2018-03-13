
import React from 'react';
import PropTypes from 'prop-types';
import {menuButton} from 'types/Types.js';
import {NavLink} from 'react-router-dom';

import 'components/header/menu/MenuElement.css';

class MenuElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let textElements = [];
        if(this.props.title) {
            textElements = this.props.title
                .split(/(\d+)/)
                .filter(Boolean)
                .map((v, k) => {
                    if(v.match(/[0-9]+/)) {
                        return (<div className='text-elem numeric'>{v}</div>);
                    }
                    if(v.match(/[a-zA-Z]+/)) {
                        return (<div className='text-elem alphabet'>{v}</div>);
                    }
                });
        }
        return (
            <NavLink className="menu-element" to={this.props.target}>
                {textElements}
            </NavLink>
        );
    }
}

MenuElement.defaultProps = {
    title: 'unassigned name for button',
    target: '/home'
};

MenuElement.propTypes = menuButton;

export default MenuElement;