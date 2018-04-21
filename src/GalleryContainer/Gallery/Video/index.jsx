import React, { Component } from "react";

class Video extends Component {
  state = {
    play: false,
  }

  togglePlay = e => {
    this.setState({
      play: !this.state.play,
    }, () => {
      // this.state.play ? e.target.play() : e.target.pause();
    });
  }

  render() {
    return <video src={this.props.url} loop className="video" onClick={this.props.onclick} onMouseOver={this.togglePlay} onMouseOut={this.togglePlay}/>;
  }
}

export default Video;
