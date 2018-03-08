
import React from 'react';
import PropTypes from 'prop-types';

import 'components/header/menu/MenuElement.css';

class MenuElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="menu-element" onClick={this.props.command}>
                {this.props.title}
            </button>
        );
    }
}

MenuElement.defaultProps = {
    title: 'unassigned name for button',
    command: () => {}
};

MenuElement.propTypes = {
    title: PropTypes.string,
    command: PropTypes.funct
};

export default MenuElement;