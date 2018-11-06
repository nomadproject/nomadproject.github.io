import React from 'react';
import { Component } from "react";

export default class AR extends Component {

	constructor(props) {
        super(props);
        
        // prevent server-side compilation error
        if (typeof window === 'undefined') {
            return;
        }

        return window.location.replace('/static/ar.html');
    }
    
    render() {
		return (null)
	}
}