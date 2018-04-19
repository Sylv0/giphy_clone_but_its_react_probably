import React, { Component } from 'react';

import Video from "./Video";

import './gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                {this.props.gifs.map(gif => <Video key={gif.id} url={gif.images.original_mp4.mp4}/>)}
            </div>
        );
    }
}

export default Gallery;