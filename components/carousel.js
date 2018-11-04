import React from 'react';
import { Component } from "react";

function Images(props) {
    return props.images.map((src) => (
        <div>
            <img src={src} />
        </div>
    ))
}

export default class Carousel extends Component {

    siema;

    constructor(props) {
        super(props);
    }

    resize() {
        // var width = this.img.parentElement.offsetWidth;
        // this.img.style.width = width + 'px';
    }

    componentDidMount() {

        // prevent server-side compilation error
        if (typeof window === 'undefined') {
            return;
        }

        var carousel = new Siema({
            loop: true,
            draggable: false
        });

        setInterval(() => carousel.next(), 2000);

        // var that = this;

        // window.addEventListener('resize', function (e) {
        //     that.resize();
        // });

        // this.resize();
    }

    render() {
		return (
            <div class="siema" ref={(siema) => this.siema = siema}>
                <Images images={this.props.images} />
            </div>
            // <img ref={ref => this.img = ref} src={this.props.src} alt={this.props.title} />
        )
    }

}