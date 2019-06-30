import React from 'react';
import { Component } from "react";

export default class Vimeo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
		return (
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                <iframe src={this.props.video} style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} frameBorder="0" mozallowfullscreen="true" allowFullScreen="true"></iframe>
            </div>
        )
    }

}