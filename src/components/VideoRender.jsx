import React, { Component } from 'react';

class VideoRender extends Component {
    render() { 
    console.log('Video Render props =' + this.props.title);
    console.log('Video Render props =' + this.props.src);
    //const reelUrl = 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F' + this.props.src + '%2F&show_text=false&width=267&t=0';
    
    //console.log('reelUrl =' + reelUrl);
    return <p>
                <p><b>{this.props.description}</b></p>
                <iframe title={this.props.title}
                src = {this.props.src}
                width="267" height="476" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen="true">    
                </iframe>
           </p>
    }
}
 
export default VideoRender;