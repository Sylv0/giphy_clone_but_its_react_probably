import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <input type="text" onChange={this.props.onchange}/>
        );
    }
}

export default index;