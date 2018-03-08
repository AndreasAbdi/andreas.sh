
import React from 'react';
import PropTypes from 'prop-types';

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
            <button className="menu-element" onClick={this.props.command}>
                {textElements}
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