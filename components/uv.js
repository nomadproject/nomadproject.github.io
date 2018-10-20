import React from 'react';
import { Component } from "react";

let urlDataProvider, data, uv;

export default class UV extends Component {

	constructor(props) {

        super(props);

        data = {
            root: '../static/uv',
            configUri: '../static/uv.json',
            locales: [{ name: 'en-GB' }]
        }
    }

    openManifest() {

        window.scrollTo(0, 0);
    
        // set manifest and reset hash params
        // $uv.slideDown('fast', function () {
            uv.set(Object.assign({}, data, {
                    iiifResourceUri: manifest,
                    collectionIndex: 0,
                    manifestIndex: 0,
                    sequenceIndex: 0,
                    canvasIndex: 0
                }
            ));
        //});
    }

    componentDidMount() {
        window.addEventListener('uvLoaded', function (e) {

            urlDataProvider = new UV.URLDataProvider();
        
            // set initial hash params
            data = Object.assign({}, data, {
                collectionIndex: Number(urlDataProvider.get('c', 0)),
                manifestIndex: Number(urlDataProvider.get('m', 0)),
                sequenceIndex: Number(urlDataProvider.get('s', 0)),
                canvasIndex: Number(urlDataProvider.get('cv', 0)),
                rotation: Number(urlDataProvider.get('r', 0)),
                xywh: urlDataProvider.get('xywh', '')
            });
        
            uv = createUV('#uv', data, urlDataProvider);
        
            uv.on('created', function () {
                Utils.Urls.setHashParameter('manifest', manifest);
            });

            // are there uv hash parameters?
            manifest = Utils.Urls.getHashParameter('manifest');
        
            if (manifest) {
                this.openManifest();
            }
        
        }, false);
    }

    render() {
		return (
			<div id="uv" class="uv"></div>
        )
    }

}