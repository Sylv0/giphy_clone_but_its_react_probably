import React, { Component } from 'react';

import Gallery from "./Gallery";

class GalleryContainer extends Component {

    state = {
        apiKey: "LouXV5IDYNZ3ozPSjsH3aEvFeUZHB68N",
        gifs: [],
        search: "React.js"
    }

    componentDidMount(){
        this.getGifs();
    }

    componentDidUpdate() {
        console.log(this.state.search);
        // this.getGifs();
    }

    getGifs = () => {
        const api = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${this.state.apiKey}&limit=12`;

        fetch(api).then(res => res.json()).then(data => this.setState({gifs: data.data}));
    }

    handleInput = (e) => {
        this.setState({
            search: e.target.value.split(" ").join("+")
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInput}/>
                {this.state.gifs.length ? <Gallery gifs={this.state.gifs}/> : "Loading..."}
            </div>
        );
    }
}

export default GalleryContainer;