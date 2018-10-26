import React from 'react';
import { Component } from "react";

export default class StretchImage extends Component {

    img;

    constructor(props) {
        super(props);
    }

    resize() {
        var width = this.img.parentElement.offsetWidth;
        this.img.style.width = width + 'px';
    }

    componentDidMount() {

        // prevent server-side compilation error
        if (typeof window === 'undefined') {
            return;
        }

        var that = this;

        window.addEventListener('resize', function (e) {
            that.resize();
        });

        this.resize();
    }

    render() {
		return (
            <img ref={ref => this.img = ref} src={this.props.src} alt={this.props.title} />
        )
    }

}