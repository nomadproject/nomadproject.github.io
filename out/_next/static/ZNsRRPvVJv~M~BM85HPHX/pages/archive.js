(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{110:function(e,t,n){e.exports=n(109)},150:function(e,t,n){__NEXT_REGISTER_PAGE("/archive",function(){return e.exports=n(211),{page:e.exports.default}})},211:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(52),i=n(51);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(a=l(t).call(this,e))||"object"!==c(a)&&"function"!=typeof a?m(r):a,f(m(m(n)),"uvEl",void 0),f(m(m(n)),"uv",void 0),f(m(m(n)),"uvstate",void 0),f(m(m(n)),"urlDataProvider",void 0),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r["Component"]),n=t,(o=[{key:"openManifest",value:function(){this.uvEl.style.display="block",this.props.scrollIntoView&&this.uvEl.scrollIntoView(),this.uv.set(Object.assign({},this.uvstate,{collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;window.addEventListener("uvLoaded",function(t){e.urlDataProvider=new UV.URLDataProvider,e.uvstate={root:e.props.root,configUri:e.props.configUri,locales:[{name:"en-GB"}],iiifResourceUri:"",collectionIndex:Number(e.urlDataProvider.get("c",0)),manifestIndex:Number(e.urlDataProvider.get("m",0)),sequenceIndex:Number(e.urlDataProvider.get("s",0)),canvasIndex:Number(e.urlDataProvider.get("cv",0)),rotation:Number(e.urlDataProvider.get("r",0)),xywh:e.urlDataProvider.get("xywh","")},e.uvEl=document.querySelector("#"+e.props.id||"#uv"),e.uv=createUV(e.uvEl,e.uvstate,e.urlDataProvider),e.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",e.uvstate.iiifResourceUri)}),e.uvstate.iiifResourceUri=Utils.Urls.getHashParameter("manifest"),e.uvstate.iiifResourceUri&&e.openManifest()},!1)}}},{key:"componentWillReceiveProps",value:function(e){this.uvstate&&e.manifest&&this.uvstate.iiifResourceUri!==e.manifest&&(this.uvstate.iiifResourceUri=e.manifest,this.openManifest())}},{key:"render",value:function(){return a.a.createElement("div",{id:"uv",class:"uv"})}}])&&s(n.prototype,o),i&&s(n,i),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return b});var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,y(t).call(this,e))).state={manifest:"https://nomadproject.netlify.com/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}},n}var n,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(c=[{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;window.addEventListener("uvLoaded",function(t){var n=document.querySelector("iiif-gallery");n.addEventListener("onSelectManifest",function(t){e.setState(function(e,n){return{uv:{manifest:t.detail.id}}})}),n.manifest=e.state.manifest},!1)}}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(o.a,{title:"Archive"},a.a.createElement("script",{src:"https://unpkg.com/iiif-gallery/dist/iiifgallery.js"}),a.a.createElement("script",{src:"/static/uv/lib/offline.js"}),a.a.createElement("script",{src:"/static/uv/helpers.js"})),a.a.createElement("header",{class:"pa3 overflow-hidden"},a.a.createElement("a",{href:"/index.html#objects",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},a.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},a.a.createElement("title",null,"chevronLeft icon"),a.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),a.a.createElement("span",{class:"pl1 f4"},"go back")),a.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.state.headerMessage}})),a.a.createElement("main",null,a.a.createElement(p,{id:"uv",root:this.state.uv.root,configUri:this.state.uv.configUri,manifest:this.state.uv.manifest,scrollIntoView:"true"}),a.a.createElement("iiif-gallery",{ignore:this.state.ignore})),a.a.createElement(i.a,null),a.a.createElement("script",{async:!0,src:"/static/uv/uv.js"}))}}])&&d(n.prototype,c),s&&d(n,s),t}()},51:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("footer",{class:"pv4 ph3 ph5-m ph6-l mid-gray bg-light-gray"},a.a.createElement("p",{class:"f3 firasans fw4 mw7 tc center"},"with thanks to"),a.a.createElement("div",{class:"pv4 ph3 ph5-ns tc"},a.a.createElement("a",{class:"dib h4 w4 mr3 mb4",href:"http://www.kayd.org/"},a.a.createElement("img",{src:"/static/img/kayd-logo.png",style:{height:"100px;"},alt:"KAYD Somali Arts and Culture"})),a.a.createElement("a",{class:"dib h4 w4 mr3 mb4",href:"https://www.hlf.org.uk/"},a.a.createElement("img",{src:"/static/img/hlf-logo.png",alt:"Heritage Lottery Fund"})),a.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.sussex.ac.uk/shl/"},a.a.createElement("img",{src:"/static/img/sussex-humanities-lab.jpg",alt:"Sussex University Humanities Lab"})),a.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.bl.uk"},a.a.createElement("img",{src:"/static/img/BL-logo.jpg",alt:"British Library"})),a.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.britishmuseum.org"},a.a.createElement("img",{src:"/static/img/BM-logo.png",alt:"British Museum"})),a.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.quexpark.co.uk/museum/"},a.a.createElement("img",{src:"/static/img/powell-cotton-logo.png",alt:"Powell Cotton Museum"})),a.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"https://www.thefuseboxbrighton.com/"},a.a.createElement("img",{src:"/static/img/fusebox-logo.png",alt:"The FuseBox"}))),a.a.createElement("small",{class:"db tc"},a.a.createElement("p",{class:"f6 fw3 lato"},"icons via ",a.a.createElement("a",{class:"no-underline underline-hover",href:"https://fontawesome.com"},"Font Awesome"))),e.children)}},52:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(110),i=n.n(o),c=(n(26),"https://nomad-project.co.uk/static/img/nomad-og.jpg"),s="UA-126420986-1";t.a=function(e){return a.a.createElement(i.a,null,a.a.createElement("meta",{charSet:"UTF-8"}),a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(s)}),a.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());\n\t\t\tgtag('config', '".concat(s,"');\n\t\t\t")}}),a.a.createElement("title",null,e.title||""),a.a.createElement("meta",{name:"description",content:e.description||"Nomad Project"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/tachyons/css/tachyons.min.css"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/css/styles.css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato",rel:"stylesheet"}),a.a.createElement("meta",{property:"og:url",content:e.url||"https://nomad-project.co.uk"}),a.a.createElement("meta",{property:"og:title",content:e.title||""}),a.a.createElement("meta",{property:"og:description",content:e.description||"Nomad Project"}),a.a.createElement("meta",{name:"twitter:site",content:e.url||"https://nomad-project.co.uk"}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:image",content:e.ogImage||c}),a.a.createElement("meta",{property:"og:image",content:e.ogImage||c}),a.a.createElement("meta",{property:"og:image:width",content:"1200"}),a.a.createElement("meta",{property:"og:image:height",content:"630"}),e.children)}}},[[150,1,0]]]);