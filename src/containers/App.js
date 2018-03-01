import React from 'react';
import './App.css';
import {Container, Row, Col, Button} from 'reactstrap';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Container
                    fluid={true}>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="App-intro">
                                This is some text
                            </p>
                        </Col>
                        <Col>
                            <Button color="primary">Primary</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Header />
                            <Menu />
                            <MenuButton />
                            <Image />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Body />
                            <InfoSlice />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//todo
class Header extends React.Component {
    render() {
        return (
            <div>this is the body</div>
        );
    }
}

//todo
class Menu extends React.Component {
    render() {
        return (
            <div>this is the body</div>
        );
    }
}


class MenuButton extends React.Component {
    render() {
        return (
            <div>this is the body</div>
        );
    }
}

//todo
class Image extends React.Component {
    render() {
        return (
            <div>this is the body</div>
        );
    }
}

//todo
class Body extends React.Component {
    render() {
        return (
            <div>this is the body</div>
        );
    }
}

//todo
class InfoSlice extends React.Component {
    render() {
        return (
            <div>this is the InfoSlice</div>
        );
    }
}
export default App;
