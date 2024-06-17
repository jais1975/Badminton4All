import React, { Component } from 'react';
import TopBar from './topBar';
import LeftBar from './leftbar';
import VideoRender from './VideoRender';

class SkillsVideos extends Component {
    render() { 
        return <div>
                    <LeftBar pageName='SkillsVideos' pageClassName='top-bar-buttons' selectedButton='selected-top-bar-button'></LeftBar>
                    <div className="content">
                        <TopBar></TopBar>
                        <h1>Badminton 4 All</h1>
                        <p>This is Skills Videos Page</p>
                        <div class="container">
                            <div>
                                <VideoRender description='Clever Return' title='video1' src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F364427039643315%2F&show_text=false&width=267&t=0'></VideoRender>
                            </div>
                            <div>
                                <VideoRender description='Backhand Strong Return' title='video2' src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1423030195248450%2F&show_text=false&width=267&t=0'></VideoRender>
                            </div>
                            <div>
                                <VideoRender description='Deceptive Service Return' title='video3' src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F958799622392911%2F&show_text=false&width=267&t=0'></VideoRender>
                            </div>
                        </div>
                        <div class="container">
                            <div>
                                <VideoRender description='Service Return' title='video1' src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1100472387902959%2F&show_text=false&width=267&t=0'></VideoRender>
                            </div>
                            <div>
                                <VideoRender description='Badminton Footwork' title='video2' src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F445225611484455%2F&show_text=false&width=267&t=0'></VideoRender>
                            </div>
                            <div>
                                <VideoRender description='Net Shots' title='video3' src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1322136255129120%2F&show_text=false&width=267&t=0'></VideoRender>
                            </div>
                        </div>
                    </div>
               </div>;
    }
}
 
export default SkillsVideos;