import React from 'react';
import { Component } from "react";

export default class UVComponent extends Component {

	constructor(props) {
        super(props);
    }

    openManifest() {

        window.scrollTo(0, 0);
    
        document.querySelector('.uv').style.display = 'block';

        window.uv.set({
            root: window.uvstate.root,
            configUri: window.uvstate.configUri,
            iiifResourceUri: window.uvstate.iiifResourceUri,
            collectionIndex: 0,
            manifestIndex: 0,
            sequenceIndex: 0,
            canvasIndex: 0,
            locales: window.uvstate.locales
        });
    }

    componentDidMount() {

        var that = this;

        window.addEventListener('uvLoaded', function (e) {

            window.uvstate = {
                urlDataProvider: new UV.URLDataProvider(),
                root: that.props.root,
                configUri: that.props.configUri,
                locales: [{ name: 'en-GB' }],
                iiifResourceUri: ''
            }

            var data = {
                root: window.uvstate.root,
                configUri: window.uvstate.configUri,
                collectionIndex: Number(window.uvstate.urlDataProvider.get('c', 0)),
                manifestIndex: Number(window.uvstate.urlDataProvider.get('m', 0)),
                sequenceIndex: Number(window.uvstate.urlDataProvider.get('s', 0)),
                canvasIndex: Number(window.uvstate.urlDataProvider.get('cv', 0)),
                rotation: Number(window.uvstate.urlDataProvider.get('r', 0)),
                xywh: window.uvstate.urlDataProvider.get('xywh', ''),
                locales: window.uvstate.locales
            };
        
            window.uv = createUV('#uv', data, window.uvstate.urlDataProvider);
        
            window.uv.on('created', function () {
                Utils.Urls.setHashParameter('manifest', window.uvstate.iiifResourceUri);
            });

            // are there uv hash parameters?
            window.uvstate.iiifResourceUri = Utils.Urls.getHashParameter('manifest');
        
            if (window.uvstate.iiifResourceUri) {
                that.openManifest();
            }
        
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.manifest) {
            window.uvstate.iiifResourceUri = nextProps.manifest;
            this.openManifest();
        }
    }

    render() {
		return (
			<div id="uv" class="uv"></div>
        )
    }

}