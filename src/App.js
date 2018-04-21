import React, { Component } from 'react';

import Head from "./Head";
import GalleryContainer from "./GalleryContainer";

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Head />
        <GalleryContainer />
        <div className="hmmm">?</div>
      </main>
    );
  }
}

export default App;
