import React from 'react';
import {Col, Row} from 'reactstrap';
import Menu from 'components/Menu.js';
import HeaderImage from 'components/HeaderImage.js';
import PropTypes from 'prop-types';

//todo
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Row>
                    <Col>
                        <div>
                            {'Hello this is the header'}
                        </div>
                        <HeaderImage />
                        <Menu 
                            details={this.props.menuDetails}
                        />
                    </Col>
                </Row>
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