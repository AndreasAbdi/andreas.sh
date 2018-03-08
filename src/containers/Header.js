import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import Menu from 'components/Menu.js';
import HeaderImage from 'components/HeaderImage.js';
import PropTypes from 'prop-types';

import 'containers/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Container
                    fluid={true}
                >
                    <Row
                        noGutters={true}
                    >
                        <Col xs='5'>
                            <HeaderImage />
                        </Col>
                        <Col xs='7'>
                            <Menu 
                                details={this.props.menuDetails}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Header.propTypes = {
    menuDetails: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        command: PropTypes.arrayOf(PropTypes.func.isRequired)
    }))
};

export default Header;