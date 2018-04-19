import React, { Component } from "react";

class Video extends Component {
  render() {
    return <video src={this.props.url} autoPlay loop className="video" />;
  }
}

export default Video;
