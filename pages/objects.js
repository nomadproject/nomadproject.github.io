import React from 'react';
import Head from '../components/head';
import Footer from '../components/footer';
import { Component } from "react";

export default class Objects extends Component {

	constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
		return (
			<div>

				<Head title="Objects">
					<script src="https://unpkg.com/iiif-gallery/dist/iiifgallery.js"></script>
					<script src="/static/uv/lib/offline.js"></script>
					<script src="/static/uv/helpers.js"></script>
					<script src="/static/js/uv-setup.js"></script>
				</Head>

				<header class="pa3 overflow-hidden">
					<a href="/index.html#objects" class="db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4">
						<svg class="w1" data-icon="chevronLeft" viewBox="0 0 32 32" fill="currentcolor">
							<title>chevronLeft icon</title>
							<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
						</svg>
						<span class="pl1 f4">go back</span>
					</a>
					<div class="db fl pt3 lato lh-copy">Watch this space for more objects and stories from the Nomad workshops...</div>
				</header>

				<main>

					<div id="uv" class="uv"></div>

					<iiif-gallery manifest="https://nomad-project.co.uk/objects/collection/index.json" ignore="https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json"></iiif-gallery>

				</main>

				<Footer />

				<script src="/static/uv/uv.js"></script>

			</div>
		)
	}
}