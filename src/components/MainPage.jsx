import React, { Component } from 'react';
import TopBar from './topBar';

class MainPage extends Component {    

    render() { 
        return <div className="content">
                    <TopBar pageName='Home' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></TopBar>
                    <h1>Badminton 4 All</h1>
                    <p>This is a simple HTML page with a left navigation bar, a top navigation bar, and a simple body with text.</p>
               </div>;
    }
}
 
export default MainPage;