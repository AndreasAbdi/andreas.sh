import React from 'react';

import {ListGroup, ListGroupItem} from 'reactstrap';
import 'components/body/info/Info.css';

class Info extends React.Component {
    render() {
        return (
            <div className="info">
                <ListGroup>
                    <ListGroupItem>Name: Andreas Abdi</ListGroupItem>
                    <ListGroupItem>Occupation: Software Developer</ListGroupItem>
                    <ListGroupItem>Residence: Vancouver, BC</ListGroupItem>
                    <ListGroupItem>WYD: Something</ListGroupItem>
                    <ListGroupItem>Age: Old Man</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Info;