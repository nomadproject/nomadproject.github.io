(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{19:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(0),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=c(t).call(this,e))||"object"!==i(o)&&"function"!=typeof o?s(r):o,l(s(s(n)),"uvEl",void 0),l(s(s(n)),"uv",void 0),l(s(s(n)),"uvstate",void 0),l(s(s(n)),"urlDataProvider",void 0),n}var n,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r["Component"]),n=t,(f=[{key:"openManifest",value:function(){this.uvEl.style.display="block",this.uvEl.scrollIntoView(),this.uv.set(Object.assign({},this.uvstate,{collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;window.addEventListener("uvLoaded",function(t){e.urlDataProvider=new UV.URLDataProvider,e.uvstate={root:e.props.root,configUri:e.props.configUri,locales:[{name:"en-GB"}],iiifResourceUri:"",collectionIndex:Number(e.urlDataProvider.get("c",0)),manifestIndex:Number(e.urlDataProvider.get("m",0)),sequenceIndex:Number(e.urlDataProvider.get("s",0)),canvasIndex:Number(e.urlDataProvider.get("cv",0)),rotation:Number(e.urlDataProvider.get("r",0)),xywh:e.urlDataProvider.get("xywh","")},e.uvEl=document.querySelector("#"+e.props.id||"#uv"),e.uv=createUV(e.uvEl,e.uvstate,e.urlDataProvider),e.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",e.uvstate.iiifResourceUri)}),e.uvstate.iiifResourceUri=Utils.Urls.getHashParameter("manifest"),e.uvstate.iiifResourceUri&&e.openManifest()},!1)}}},{key:"componentWillReceiveProps",value:function(e){this.uvstate&&e.manifest&&this.uvstate.iiifResourceUri!==e.manifest&&(this.uvstate.iiifResourceUri=e.manifest,this.openManifest())}},{key:"render",value:function(){return o.a.createElement("div",{id:"uv",class:"uv"})}}])&&a(n.prototype,f),p&&a(n,p),t}()},230:function(e,t,n){__NEXT_REGISTER_PAGE("/objects",function(){return e.exports=n(231),{page:e.exports.default}})},231:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(0),o=n.n(r),i=n(52),a=n(51),c=n(19);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,f(t).call(this,e))).state={manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}},n}var n,u,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(u=[{key:"componentWillMount",value:function(){var e=this;window.addEventListener("uvLoaded",function(t){var n=document.querySelector("iiif-gallery");n.manifest=e.state.manifest,n.addEventListener("onSelectManifest",function(t){e.setState(function(e,n){return{uv:{manifest:t.detail.id}}})})},!1)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(i.a,{title:"Objects"},o.a.createElement("script",{src:"https://unpkg.com/iiif-gallery/dist/iiifgallery.js"}),o.a.createElement("script",{src:"/static/uv/lib/offline.js"}),o.a.createElement("script",{src:"/static/uv/helpers.js"})),o.a.createElement("header",{class:"pa3 overflow-hidden"},o.a.createElement("a",{href:"/index.html#objects",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},o.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},o.a.createElement("title",null,"chevronLeft icon"),o.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),o.a.createElement("span",{class:"pl1 f4"},"go back")),o.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.state.headerMessage}})),o.a.createElement("main",null,o.a.createElement(c.a,{id:"uv",root:this.state.uv.root,configUri:this.state.uv.configUri,manifest:this.state.uv.manifest}),o.a.createElement("iiif-gallery",{ignore:this.state.ignore})),o.a.createElement(a.a,null),o.a.createElement("script",{async:!0,src:"/static/uv/uv.js"}))}}])&&s(n.prototype,u),v&&s(n,v),t}()}},[[230,1,0]]]);