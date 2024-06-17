import React, { Component } from 'react';
import TopBar from './topBar';

class AboutUs extends Component {

    render() {
        return <div className="content">
                    <TopBar pageName='AboutUs' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></TopBar>
                    <h1>Badminton 4 All</h1>
                    <p>This is a About Us</p>
                </div>;
    }
}
 
export default AboutUs;