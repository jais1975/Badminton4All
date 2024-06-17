import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftBar extends Component {
    render() { 
        let pageName = this.props.pageName;        
        let buttonSkillsVideos = '';
        let buttonPhysioVideos = '';
        let buttonUpcomingEvents = '';
        let buttonBuySell = '';

        if (pageName === 'SkillsVideos') {
            buttonSkillsVideos =   <button className={this.props.selectedButton}>Skills Videos</button>;
            buttonPhysioVideos =   <button className={this.props.pageClassName}><Link to="/PhysioVideos">Physio Videos</Link></button>;
            buttonUpcomingEvents = <button className={this.props.pageClassName}><Link to="/UpcomingEvents">Upcoming Events</Link></button>;
            buttonBuySell =        <button className={this.props.pageClassName}><Link to="/BuySell">Buy And Sell</Link></button>;
        } else if (pageName === 'PhysioVideos') {
            buttonSkillsVideos =   <button className={this.props.pageClassName}><Link to="/SkillsVideos">Skills Videos</Link></button>;
            buttonPhysioVideos =   <button className={this.props.selectedButton}>Physio Videos</button>;
            buttonUpcomingEvents = <button className={this.props.pageClassName}><Link to="/UpcomingEvents">Upcoming Events</Link></button>;
            buttonBuySell =        <button className={this.props.pageClassName}><Link to="/BuySell">Buy And Sell</Link></button>;
        } else if (pageName === 'UpcomingEvents') {
            buttonSkillsVideos =   <button className={this.props.pageClassName}><Link to="/SkillsVideos">Skills Videos</Link></button>;
            buttonPhysioVideos =   <button className={this.props.pageClassName}><Link to="/PhysioVideos">Physio Videos</Link></button>;
            buttonUpcomingEvents = <button className={this.props.selectedButton}>Upcoming Events</button>;
            buttonBuySell =        <button className={this.props.pageClassName}><Link to="/BuySell">Buy And Sell</Link></button>;
        } else if (pageName === 'BuySell') {
            buttonSkillsVideos =   <button className={this.props.pageClassName}><Link to="/SkillsVideos">Skills Videos</Link></button>;
            buttonPhysioVideos =   <button className={this.props.pageClassName}><Link to="/PhysioVideos">Physio Videos</Link></button>;
            buttonUpcomingEvents = <button className={this.props.pageClassName}><Link to="/UpcomingEvents">Upcoming Events</Link></button>;
            buttonBuySell =        <button className={this.props.selectedButton}>Buy And Sell</button>;
        } else {
            buttonSkillsVideos =   <button className={this.props.pageClassName}><Link to="/SkillsVideos">Skills Videos</Link></button>;
            buttonPhysioVideos =   <button className={this.props.pageClassName}><Link to="/PhysioVideos">Physio Videos</Link></button>;
            buttonUpcomingEvents = <button className={this.props.pageClassName}><Link to="/UpcomingEvents">Upcoming Events</Link></button>;
            buttonBuySell =        <button className={this.props.pageClassName}><Link to="/BuySell">Buy And Sell</Link></button>;
        }
        return <div className="left-nav">
                    <ul>
                        {/* <button ><Link to="/SkillsVideos">Skills Videos</Link></button>
                        <button ><Link to="/PhysioVideos">Physio Videos</Link></button>
                        <button ><Link to="/UpcomingEvents">Upcoming Events</Link></button>
                        <button ><Link to="/BuySell">Buy And Sell</Link></button> */}
                    {buttonSkillsVideos}
                    {buttonPhysioVideos}
                    {buttonUpcomingEvents}
                    {buttonBuySell}
                    </ul>
               </div>;
    }
}
 
export default LeftBar;