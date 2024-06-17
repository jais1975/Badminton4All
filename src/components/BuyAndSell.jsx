import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import TopBar from './topBar';
import LeftBar from './leftbar';

class BuySell extends Component {
    render() { 
        return <div>
                    <LeftBar pageName='BuySell' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></LeftBar>
                    <div className="content">
                        <TopBar></TopBar>
                        <p>Page coming soon ... :)</p>
                    </div>
               </div>;
    }
}
 
export default BuySell;