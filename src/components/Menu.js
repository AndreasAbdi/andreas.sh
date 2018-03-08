import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import MenuElement from 'components/MenuElement.js';
import MenuImage from 'components/MenuImage.js';
import MenuBar from 'components/MenuBar.js';

import 'components/Menu.css';

class Menu extends React.Component {
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
            <div className="menu">
                <Container
                    fluid={true}
                >
                    <Row
                        noGutters={true}
                    >
                        <Col xs='2'>
                            <MenuImage />
                        </Col>
                        <Col xs='10'>
                            <MenuBar 
                                details = {this.props.details}
                            />
                        </Col>
                    </Row>
                </Container> 
            </div>
        );
    }
}

Menu.propTypes = {
    details: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        command: PropTypes.arrayOf(PropTypes.func.isRequired)
    }))
};

export default Menu;