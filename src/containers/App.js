import React from 'react';
import './App.css';
import Header from 'containers/Header.js';
import Body from 'containers/Body.js';

class App extends React.Component {
    render() {
        let menuDetails = [{
            title: 'HOM3',
            command: () => {}
        }, {
            title: 'PROJ3CTS',
            command: () => {}
        }, {
            title: 'RESUM3',
            command: () => {}
        }];
        let details = [{
            header: 'some company',
            startDate: new Date('December 17, 1995 03:24:00'), 
            endDate: new Date('December 17, 1995 03:24:00'),
            workPosition: 'some position',
            info: ['this is some info string','some other string'],
        }, {
            header: 'some second company',
            startDate: new Date('December 17, 2018 03:24:00'), 
            endDate: new Date('December 17, 2013 03:24:00'),
            workPosition: 'some position',
            info: ['this is some new info string','some other string'],
        }];
        let sectionDetails = [{
            title: 'section header',
            details: details
        }];
        return (
            <div className="app">
                <Header 
                    menuDetails = {menuDetails}
                />
                {/* <Body 
                    sectionDetails = {sectionDetails}
                /> */}
            </div>
        );
    }
}

export default App;
