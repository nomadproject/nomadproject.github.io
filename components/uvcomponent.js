import React from 'react';
import { Component } from "react";

export default class UVComponent extends Component {

    uv;

	constructor(props) {
        super(props);
    }

    openManifest() {

        window.scrollTo(0, 0);
    
        document.querySelector('.uv').style.display = 'block';

        this.uv.set({
            root: this.uvstate.root,
            configUri: this.uvstate.configUri,
            iiifResourceUri: this.uvstate.iiifResourceUri,
            collectionIndex: 0,
            manifestIndex: 0,
            sequenceIndex: 0,
            canvasIndex: 0,
            locales: this.uvstate.locales
        });
    }

    componentDidMount() {

        var that = this;

        window.addEventListener('uvLoaded', function (e) {

            that.uvstate = {
                urlDataProvider: new UV.URLDataProvider(),
                root: that.props.root,
                configUri: that.props.configUri,
                locales: [{ name: 'en-GB' }],
                iiifResourceUri: ''
            }

            var data = {
                root: that.uvstate.root,
                configUri: that.uvstate.configUri,
                collectionIndex: Number(that.uvstate.urlDataProvider.get('c', 0)),
                manifestIndex: Number(that.uvstate.urlDataProvider.get('m', 0)),
                sequenceIndex: Number(that.uvstate.urlDataProvider.get('s', 0)),
                canvasIndex: Number(that.uvstate.urlDataProvider.get('cv', 0)),
                rotation: Number(that.uvstate.urlDataProvider.get('r', 0)),
                xywh: that.uvstate.urlDataProvider.get('xywh', ''),
                locales: that.uvstate.locales
            };
        
            that.uv = createUV('#uv', data, that.uvstate.urlDataProvider);
        
            that.uv.on('created', function () {
                Utils.Urls.setHashParameter('manifest', that.uvstate.iiifResourceUri);
            });

            // are there uv hash parameters?
            that.uvstate.iiifResourceUri = Utils.Urls.getHashParameter('manifest');
        
            if (that.uvstate.iiifResourceUri) {
                that.openManifest();
            }
        
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.manifest) {
            this.uvstate.iiifResourceUri = nextProps.manifest;
            this.openManifest();
        }
    }

    render() {
		return (
			<div id="uv" class="uv"></div>
        )
    }

}