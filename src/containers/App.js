import React from 'react';
import './App.css';
import Header from 'components/header/Header.js';
import Body from 'components/body/Body.js';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        let menuDetails = [{
            title: 'HOM3',
            target: '/home'
        }, {
            title: 'PROJ3CTS',
            target: '/projects'
        }, {
            title: 'RESUM3',
            target: '/resume'
        }];
        let details = [{
            header: 'Compute Canada',
            startDate: new Date('January 1, 2017 00:00:00'), 
            endDate: new Date('February 28, 2018 00:00:00'),
            workPosition: 'Junior Software Developer',
            info: [
                'Converted and deployed golang and python services to Kubernetes and Docker to reduce deployment times and support continuous integration/continuous development',
                'Automated Kubernetes node deployment/destruction with terraform and python based scripts on OpenStack VMs to reduce maintenance time on Kubernetes cluster',
                'Added logging metrics for service queries and Kubernetes node usage and maintained ELK monitoring stack to help prevent and detect service outages',
                'Ran and built locust based python performance tests for AWS S3 and FUSE storage services to validate service conversion from on premise hardware to cloud based services',
                'Troubleshot issues with AWS S3 Based systems and prototyped Overlay ACL support and large file operations webservice using python to help transition legacy storage system to modern s3 based storage'],
        }, {
            header: 'Elastic Path Software',
            startDate: new Date('August 1, 2015 00:00:00'), 
            endDate: new Date('April 31, 2016 00:00:00'),
            workPosition: 'Java Software Developer Co-op',
            info: [
                'Built OAuth 2.0 / eCommerce REST level 3 components in Java on Linux with maven/gradle based builds to support Wish lists and API Gateway features',
                'Integrated JQuery /AngularJS frontends on OSGI based Content Management System (Adobe Experience Manager 6.0) with eCommerce REST API',
                'Maintained code health by using Test Driven Development (TDD), writing JUnit unit tests and Selenium/Cucumber based Acceptance tests',
                'Wrote CI jobs and internal release pipelines using Jenkins and groovy based DSL for separate customer and internal sales deploys of products to help allow faster release schedules',
                'Dockerized project components for easier consumption of projects by other teams'],
        }];
        let educationDetails = [{
            header: 'Simon Fraser University',
            startDate: new Date('September 1, 2013 00:00:00'), 
            endDate: new Date('August 31, 2016 00:00:00'),
            workPosition: 'Bachelors of Science',
            info: [
                'Majored in Computer Science',
                'Graduated early via high school credits and larger course loads',
                'International Baccalaureate Excellence Entrance Scholarship'
            ],
        },{
            header: 'Port Moody Secondary School',
            startDate: new Date('September 1, 2009 00:00:00'), 
            endDate: new Date('August 31, 2013 00:00:00'),
            workPosition: 'High School Degree',
            info: [
                'Graduated via the International Baccalaureate Program'
            ],
        }];
        let sectionDetails = [{
            title: 'Work Experience',
            details: details
        }, {
            title: 'Education',
            details: educationDetails
        }
        ];
        let displayType = 'resume';
        return (
            <BrowserRouter>
                <div className='app'>
                    <Header 
                        menuDetails = {menuDetails}
                    />
                    <Body 
                        displayType = {displayType}
                        sectionDetails = {sectionDetails}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
