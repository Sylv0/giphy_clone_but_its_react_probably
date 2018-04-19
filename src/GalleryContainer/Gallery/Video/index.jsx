import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div>
                <video src={this.props.url} autoPlay loop></video>
            </div>
        );
    }
}

export default Video;