import React, { Component } from "react";

import Search from "./Search";
import Gallery from "./Gallery";

class GalleryContainer extends Component {
  last_search = "";

  timeout = null;

  state = {
    apiKey: "LouXV5IDYNZ3ozPSjsH3aEvFeUZHB68N",
    gifs: [],
    search: ""
  };

  componentDidMount() {
    this.getGifs();
  }

  componentDidUpdate() {
    if (this.state.search !== this.last_search) this.getGifs();
    else this.last_search = this.state.search;
  }

  getGifs = () => {
    const api = `http://api.giphy.com/v1/gifs/search?q=${
      this.state.search
    }&api_key=${this.state.apiKey}&limit=12`;

    fetch(api)
      .then(res => res.json())
      .then(data => this.setState({ gifs: data.data }));
  };

  timeoutFire(that, target) {
    return function() {
        that.setState({
            search: target.value
        });
    };
  }

  handleInput = e => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.timeoutFire(this, e.target), 1000);
  };

  render() {      
    return (
      <section className="galleryContainer">
        <Search onchange={this.handleInput} />
        {this.state.gifs.length ? (
          <Gallery gifs={this.state.gifs} />
        ) : (
          <div className="loading">"Loading..."</div>
        )}
      </section>
    );
  }
}

export default GalleryContainer;
