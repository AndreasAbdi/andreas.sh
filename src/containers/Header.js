import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import Menu from 'components/header/menu/Menu.js';
import HeaderImage from 'components/header/HeaderImage.js';
import PropTypes from 'prop-types';
import Rings from 'resources/rings.png';
import 'containers/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var headerStyle = {
            backgroundImage: 'url(' + Rings + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '140% 80%',
            backgroundSize: '40vw 40vh',
        };

        return (
            <div className="header" >
                <Container
                    fluid={true}
                >
                    <Row
                        noGutters={true}
                    >
                        <Col xs='5'>
                            <HeaderImage />
                        </Col>
                        <Col xs='7' style={headerStyle}>
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