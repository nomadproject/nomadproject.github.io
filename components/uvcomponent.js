import React from 'react';
import { Component } from "react";

export default class UVComponent extends Component {

	constructor(props) {
        super(props);
    }

    openManifest() {

        window.scrollTo(0, 0);
    
        // set manifest and reset hash params
        // $uv.slideDown('fast', function () {

        document.querySelector('.uv').style.display = 'block';

        window.uv.set({
            root: window.root,
            configUri: window.configUri,
            iiifResourceUri: window.manifest,
            collectionIndex: 0,
            manifestIndex: 0,
            sequenceIndex: 0,
            canvasIndex: 0,
            locales: [{ name: 'en-GB' }]
        });
    }

    componentDidMount() {

        var that = this;

        window.addEventListener('uvLoaded', function (e) {

            window.urlDataProvider = new UV.URLDataProvider();
            window.root = that.props.root;
            window.configUri = that.props.configUri;

            var data = {
                root: window.root,
                configUri: window.configUri,
                collectionIndex: Number(window.urlDataProvider.get('c', 0)),
                manifestIndex: Number(window.urlDataProvider.get('m', 0)),
                sequenceIndex: Number(window.urlDataProvider.get('s', 0)),
                canvasIndex: Number(window.urlDataProvider.get('cv', 0)),
                rotation: Number(window.urlDataProvider.get('r', 0)),
                xywh: window.urlDataProvider.get('xywh', ''),
                locales: [{ name: 'en-GB' }]
            };
        
            window.uv = createUV('#uv', data, window.urlDataProvider);
        
            window.uv.on('created', function () {
                Utils.Urls.setHashParameter('manifest', window.manifest);
            });

            // are there uv hash parameters?
            window.manifest = Utils.Urls.getHashParameter('manifest');
        
            if (window.manifest) {
                that.openManifest();
            }
        
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.manifest) {
            window.manifest = nextProps.manifest;
            this.openManifest();
        }
    }

    render() {
		return (
			<div id="uv" class="uv"></div>
        )
    }

}