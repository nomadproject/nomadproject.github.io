import React from 'react';
import { Component } from "react";
import CrossfadeImage from "./crossfadeimg";

export default class Carousel extends Component {

    crossfade;

    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0
        };
    }

    changeImage() {
        if (this.state.imageIndex === this.props.images.length - 1) {
            this.setState({ imageIndex: 0 });
        } else {
            this.setState({ imageIndex: this.state.imageIndex + 1 });
        }
    }

    componentDidMount() {
        setInterval(() => this.changeImage(), 4000);
    }

    render() {
		return (
            <div className="crossfade-img" ref={ref => this.crossfade = ref}>
                <CrossfadeImage
                    src={this.props.images[this.state.imageIndex]}
                    duration={1000}
                    timingFunction={"ease-out"}
                />
            </div>
        )
    }

}