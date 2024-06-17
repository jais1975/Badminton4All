import React, { Component } from 'react';
import TopBar from './topBar';

class ContactUs extends Component {

    render() { 
        return <div className="content">
                    <TopBar pageName='ContactUs' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></TopBar>
                    <h1>Badminton 4 All</h1>
                    <p>This is a Contact Us</p>
                </div>;
    }
}
 
export default ContactUs;