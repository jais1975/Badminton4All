import React, { Component } from 'react';
import TopBar from './topBar';
import LeftBar from './leftbar';

class UpcomingEvents extends Component {
    render() { 
        return <div>
                    {/* <div className="left-nav">
                        <ul>
                            <button ><Link to="/SkillsVideos">Skills Videos</Link></button>                          
                            <button ><Link to="/PhysioVideos">Physio Videos</Link></button>                       
                            <button className='btn btn-secondary btn-lg mb-2'>Upcoming Tournaments</button>
                            <button ><Link to="/BuySell">Buy And Sell</Link></button>
                        </ul>
                    </div> */}
                    <LeftBar pageName='UpcomingEvents' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></LeftBar>
                    <div className="content">
                        <TopBar></TopBar>
                        <h1>Badminton 4 All</h1>
                        <p>This is Upcoming Events Page</p>
                    </div>
                </div>

    }
}
 
export default UpcomingEvents;