(window.webpackJsonp=window.webpackJsonp||[]).push([["139f"],{oRNJ:function(e,t,n){"use strict";n.r(t),n.d(t,"iiif_gallery",function(){return o}),n.d(t,"iiif_gallery_item",function(){return l});var i=n("8mO2"),r=function(e,t,n,i){return new(n||(n=Promise))(function(r,s){function o(e){try{l(i.next(e))}catch(t){s(t)}}function c(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(o,c)}l((i=i.apply(e,t||[])).next())})},s=function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(c){s=[6,c],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},o=function(){function e(e){Object(i.e)(this,e),this.items=null,this.selectManifest=Object(i.c)(this,"selectManifest",7),this.selectCollection=Object(i.c)(this,"selectCollection",7),this.selectCanvas=Object(i.c)(this,"selectCanvas",7)}return e.prototype.manifestHandler=function(){this._reset()},e.prototype.ignoreHandler=function(){this._reset()},e.prototype.componentWillLoad=function(){this._reset()},e.prototype._reset=function(){var e=this;this.manifest?manifesto.loadManifest(this.manifest).then(function(t){var n=manifesto.create(t);if(n.isCollection())e.items=n.items;else{var i=n.getSequences();if(i.length){var r=i[0];e.items=r.getCanvases()}}if(e.ignore){var s=e.ignore.split(",").map(function(e){return e.trim()});e.items=e.items.filter(function(e){return-1===s.indexOf(e.id)})}}).catch(function(e){console.error(e),console.error("failed to load manifest")}):this.items=null},e.prototype.reset=function(){return r(this,void 0,void 0,function(){return s(this,function(e){return this._reset(),[2]})})},e.prototype.render=function(){var e=this;return this.items?Object(i.d)("section",{class:"cf w-100 pa2"},this.items.map(function(t){return Object(i.d)("iiif-gallery-item",{item:t,selected:e._selectedItem===t})})):null},e.prototype.itemSelected=function(e){var t=e.detail;this._selectedItem=t,t.isCollection()?this.selectCollection.emit(t):t.isManifest()?this.selectManifest.emit(t):this.selectCanvas.emit(t)},Object.defineProperty(e,"watchers",{get:function(){return{manifest:["manifestHandler"],ignore:["ignoreHandler"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();var c=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===s)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}),l=function(){function e(e){Object(i.e)(this,e),this.selected=!1,this.selectItem=Object(i.c)(this,"selectItem",7)}return e.prototype.renderLabel=function(){var e=this.item.getDefaultLabel();if(e)return Object(i.d)("div",{class:"ph2 ph0-ns pb3 link"},Object(i.d)("h3",{class:"f5 f4-ns mb0 black-90"},e))},e.prototype.render=function(){var e=this,t=this.item.getThumbnail(),n=c({collection:this.item.isCollection(),manifest:this.item.isManifest(),canvas:this.item.isCanvas(),selected:this.selected,"aspect-ratio":!0,"aspect-ratio--1x1":!0});return Object(i.d)("div",{onClick:function(){return e._itemSelectedHandler()},class:"fl w-100 w-50-m  w-25-ns pa2"},Object(i.d)("div",{class:n},t?Object(i.d)("img",{src:t.id,class:"db bg-center cover aspect-ratio--object"}):Object(i.d)("span",null,"No thumbnail")),this.renderLabel())},e.prototype._itemSelectedHandler=function(){this.selectItem.emit(this.item)},Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}()}}]);