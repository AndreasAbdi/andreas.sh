import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import MenuImage from 'components/header/menu/MenuImage.js';
import MenuBar from 'components/header/menu/MenuBar.js';
import {menuButton} from 'types/Types.js';
import 'components/header/menu/Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
    details: PropTypes.arrayOf(menuButton)
};

export default Menu;