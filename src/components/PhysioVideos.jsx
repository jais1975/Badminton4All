import React, { Component } from 'react';
import TopBar from './topBar';
import LeftBar from './leftbar';
import VideoRender from './VideoRender';

class PhysioVideos extends Component {
    render() { 
        return <div>
                    <LeftBar pageName='PhysioVideos' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></LeftBar>
                    <div className="content">
                        <TopBar></TopBar>
                        <h1>Badminton 4 All</h1>
                        <p>This is Physio Videos Page</p>
                        <div class="container">
                            <div>
                                <VideoRender description='Fix Tennis Elbow in 3 Steps' title='video1' src='https://www.youtube.com/embed/DA5EBRiLhDU'></VideoRender>
                            </div>
                            <div>
                                <VideoRender description='Golfers Elbow' title='video2' src='https://www.youtube.com/embed/dDZhNzKV7tA'></VideoRender>
                            </div>
                            <div>
                                <VideoRender description='Knee Strengthening Exercises' title='video3' src='https://www.youtube.com/embed/gRByvZeMjqs'></VideoRender>
                            </div>
                        </div>
                    </div>
                </div>;
    }
}
 
export default PhysioVideos;