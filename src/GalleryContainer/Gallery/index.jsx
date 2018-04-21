import React, { Component } from 'react';

import Video from "./Video";

import './gallery.css';

class Gallery extends Component {
    toggleSelected (e) {
      e.target.classList.toggle("selected");
      e.target.classList.contains("selected") ? e.target.play() : e.target.pause();
    }

    render() {
        return (
            <div className="gallery">
                {this.props.gifs.map(gif => <Video key={gif.id} url={gif.images.original_mp4.mp4} onclick={this.toggleSelected}/>)}
            </div>
        );
    }
}

export default Gallery;