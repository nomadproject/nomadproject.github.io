(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{19:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(0),r=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(f(f(n=a(this,c(t).call(this,e)))),"uvEl",void 0),l(f(f(n)),"uv",void 0),l(f(f(n)),"uvstate",void 0),l(f(f(n)),"urlDataProvider",void 0);var o=f(f(n));return"undefined"==typeof window?a(n):(window.addEventListener("uvLoaded",function(e){o.urlDataProvider=new UV.URLDataProvider,o.uvstate={root:o.props.root,configUri:o.props.configUri,locales:[{name:"en-GB"}],iiifResourceUri:"",collectionIndex:Number(o.urlDataProvider.get("c",0)),manifestIndex:Number(o.urlDataProvider.get("m",0)),sequenceIndex:Number(o.urlDataProvider.get("s",0)),canvasIndex:Number(o.urlDataProvider.get("cv",0)),rotation:Number(o.urlDataProvider.get("r",0)),xywh:o.urlDataProvider.get("xywh","")},o.uvEl=document.querySelector("#"+o.props.id||"#uv"),o.uv=createUV(o.uvEl,o.uvstate,o.urlDataProvider),o.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",o.uvstate.iiifResourceUri)}),o.uvstate.iiifResourceUri=Utils.Urls.getHashParameter("manifest"),o.uvstate.iiifResourceUri&&o.openManifest()},!1),n)}var n,i,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(i=[{key:"openManifest",value:function(){this.uvEl.style.display="block",this.uvEl.scrollIntoView(),this.uv.set(Object.assign({},this.uvstate,{collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentWillReceiveProps",value:function(e){this.uvstate&&e.manifest&&this.uvstate.iiifResourceUri!==e.manifest&&(this.uvstate.iiifResourceUri=e.manifest,this.openManifest())}},{key:"render",value:function(){return r.a.createElement("div",{id:"uv",class:"uv"})}}])&&u(n.prototype,i),p&&u(n,p),t}()},209:function(e,t,n){__NEXT_REGISTER_PAGE("/test",function(){return e.exports=n(210),{page:e.exports.default}})},210:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n(0),r=n.n(o);n(52),n(51),n(19);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).state={manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}},n}var n,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;document.querySelector("iiif-gallery").addEventListener("onSelectManifest",function(t){e.setState(function(e,n){return{uv:{manifest:t.detail.id}}})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("iiif-gallery",{manifest:this.state.manifest,ignore:this.state.ignore}))}}])&&u(n.prototype,i),f&&u(n,f),t}()}},[[209,1,0]]]);