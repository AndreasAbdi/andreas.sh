import React from 'react';
import logo from './logo.svg';
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
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <h1 className="App-title">Welcome to React</h1>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
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
