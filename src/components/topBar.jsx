import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    
    render() {
        let pageName = this.props.pageName;
        let buttonHome = '';
        let buttonAboutUs = '';
        let buttonContactUs = '';

        if (pageName === 'Home') {
            buttonHome = <button className={this.props.selectedButton}>Home</button>;
            buttonAboutUs =   <button className={this.props.pageClassName}><Link to="/AboutUs">About Us</Link></button>;
            buttonContactUs = <button className={this.props.pageClassName}><Link to="/ContactUs">Contact</Link></button>;
        } else if (pageName === 'AboutUs') {
            buttonHome =      <button className={this.props.pageClassName}><Link to="/">Home</Link></button>;
            buttonAboutUs =   <button className={this.props.selectedButton}>About Us</button>;
            buttonContactUs = <button className={this.props.pageClassName}><Link to="/ContactUs">Contact</Link></button>;
        } else if (pageName === 'ContactUs') {
            buttonHome =    <button className={this.props.pageClassName}><Link to="/">Home</Link></button>;
            buttonAboutUs = <button className={this.props.pageClassName}><Link to="/AboutUs">About Us</Link></button>;
            buttonContactUs = <button className={this.props.selectedButton}>Contact</button>;
        } else {
            buttonHome =    <button className={this.props.pageClassName}><Link to="/">Home</Link></button>;
            buttonAboutUs = <button className={this.props.pageClassName}><Link to="/AboutUs">About Us</Link></button>;
            buttonContactUs = <button className={this.props.selectedButton}><Link to="/ContactUs">Contact</Link></button>;
        }

        return <div className="top-nav">
                    {buttonHome}
                    {buttonAboutUs}
                    {buttonContactUs}
               </div>;
    }
}
 
export default TopBar;