import React, { Component } from "react";
import logo from './logo.gif';

class Head extends Component {
  render() {
    return <img src={logo} alt="Giphy Logo" className="title"/>;
  }
}

export default Head;
