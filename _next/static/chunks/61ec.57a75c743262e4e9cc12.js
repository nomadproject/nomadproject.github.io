(window.webpackJsonp=window.webpackJsonp||[]).push([["61ec"],{"4n3w":function(e,t,n){var r={"./iiif-gallery_2.entry.js":["oRNJ","139f"]};function i(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(r)},i.id="4n3w",e.exports=i},"8mO2":function(e,t,n){"use strict";n.d(t,"a",function(){return z}),n.d(t,"b",function(){return ue}),n.d(t,"c",function(){return $e}),n.d(t,"d",function(){return H}),n.d(t,"e",function(){return h});var r,i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{s(r.next(e))}catch(t){o(t)}}function l(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,l)}s((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},l=window,s=document,c={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)}},u=function(){var e=!1;try{s.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(t){}return e}(),$=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),f=new WeakMap,d=function(e){return f.get(e)},h=function(e,t){return f.set(t.$lazyInstance$=e,t)},y=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};return t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e}),f.set(e,t)},p=function(e,t){return t in e},m=function(e){return console.error(e)},v=function(e,t,r){var i=e.$lazyBundleIds$;return n("4n3w")("./"+i+".entry.js").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},m)},g=new Map,b=l.__stencil_cssshim,w=0,S=!1,E=[],k=[],O=[],x=function(e){return function(t){e.push(t),S||(S=!0,c.raf(L))}},j=function(e,t){for(var n=0,r=0;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(i){m(i)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},L=function(){w++,function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){m(n)}e.length=0}(E);var e=2==(6&c.$flags$)?performance.now()+7*Math.ceil(w*(1/22)):1/0;j(k,e),j(O,e),k.length>0&&(O.push.apply(O,k),k.length=0),(S=E.length+k.length+O.length>0)?c.raf(L):w=0},C=x(k),P={},I=function(e){return null!=e},N=function(e){return e.toLowerCase()},M=function(e){return["object","function"].includes(typeof e)};var z=function(){return l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)")?Promise.resolve():n.e("7052").then(n.t.bind(null,"2ES+",7))},T=new WeakMap,R=function(e,t,n){!function(e,t,n,r){var i=_(t),o=g.get(i);if(e=11===e.nodeType?e:s,o)if("string"==typeof o){e=e.head||e;var a=T.get(e),l=void 0;if(a||T.set(e,a=new Set),!a.has(i)){if(b){var c=(l=b.createHostStyle(r,i,o))["s-sc"];c&&(i=c,a=null)}else(l=s.createElement("style")).innerHTML=o;e.insertBefore(l,e.querySelector("link")),a&&a.add(i)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=e.adoptedStyleSheets.concat([o]))}(e.getRootNode(),t.$tagName$,0,e)},_=function(e,t){return"sc-"+e},H=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i,o=null,a=!1,l=!1,s=[],c=function(t){for(var n=0;n<t.length;n++)o=t[n],Array.isArray(o)?c(o):null!=o&&"boolean"!=typeof o&&((a="function"!=typeof e&&!M(o))&&(o=String(o)),a&&l?s[s.length-1].$text$+=o:s.push(a?{$flags$:0,$text$:o}:o),l=a)};if(c(n),t){i=t.key||void 0;var u=t.className||t.class;u&&(t.class="object"!=typeof u?u:Object.keys(u).filter(function(e){return u[e]}).join(" "))}if("function"==typeof e)return e(t,s,A);var $={$flags$:0,$tag$:e,$children$:s.length>0?s:null,$elm$:void 0,$attrs$:t};return $.$key$=i,$},U={},A={forEach:function(e,t){return e.map(B).forEach(t)},map:function(e,t){return e.map(B).map(t).map(V)}},B=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},V=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}},W=function(e,t,n,r,i,o){if(n!==r)if("class"!==t||i)if("style"===t){for(var a in n)r&&null!=r[a]||(a.includes("-")?e.style.removeProperty(a):e.style[a]="");for(var a in r)n&&r[a]===n[a]||(a.includes("-")?e.style.setProperty(a,r[a]):e.style[a]=r[a])}else if("key"===t);else if("ref"===t)r&&r(e);else if(t.startsWith("on")&&!p(e,t))t=p(e,N(t))?N(t.substring(2)):N(t[2])+t.substring(3),n&&c.rel(e,t,n,!1),r&&c.ael(e,t,r,!1);else{var l=p(e,t),s=M(r);if((l||s&&null!==r)&&!i)try{e[t]=null==r&&-1===e.tagName.indexOf("-")?"":r}catch(f){}null==r||!1===r?e.removeAttribute(t):(!l||4&o||i)&&!s&&(r=!0===r?"":r.toString(),e.setAttribute(t,r))}else{var u=q(n),$=q(e.className).filter(function(e){return!u.includes(e)});e.className=$.concat(q(r).filter(function(e){return!$.includes(e)})).join(" ")}},q=function(e){return e?e.split(" "):[]},Q=function(e,t,n,r){var i=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||P,a=t.$attrs$||P;for(r in o)null==a[r]&&null!=o[r]&&W(i,r,o[r],void 0,n,t.$flags$);for(r in a)W(i,r,o[r],a[r],n,t.$flags$)},D=function(e,t,n,r){var i,o,a=t.$children$[n],l=0;if(I(a.$text$))a.$elm$=s.createTextNode(a.$text$);else if(i=a.$elm$=s.createElement(a.$tag$),Q(null,a,!1),a.$children$)for(l=0;l<a.$children$.length;++l)(o=D(e,a,l))&&i.appendChild(o);return a.$elm$},F=function(e,t,n,r,i,o){for(var a,l=e;i<=o;++i)r[i]&&(a=D(null,n,i))&&(r[i].$elm$=a,l.insertBefore(a,t))},J=function(e,t,n,r){for(;t<=n;++t)I(e[t])&&(r=e[t].$elm$,X(e[t],!0),r.remove())},G=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},K=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,i=t.$children$;I(t.$text$)?e.$text$!==t.$text$&&(n.textContent=t.$text$):(Q(e,t,!1),I(r)&&I(i)?function(e,t,n,r){for(var i,o,a=0,l=0,s=0,c=0,u=t.length-1,$=t[0],f=t[u],d=r.length-1,h=r[0],y=r[d];a<=u&&l<=d;)if(null==$)$=t[++a];else if(null==f)f=t[--u];else if(null==h)h=r[++l];else if(null==y)y=r[--d];else if(G($,h))K($,h),$=t[++a],h=r[++l];else if(G(f,y))K(f,y),f=t[--u],y=r[--d];else if(G($,y))K($,y),e.insertBefore($.$elm$,f.$elm$.nextSibling),$=t[++a],y=r[--d];else if(G(f,h))K(f,h),e.insertBefore(f.$elm$,$.$elm$),f=t[--u],h=r[++l];else{for(s=-1,c=a;c<=u;++c)if(t[c]&&I(t[c].$key$)&&t[c].$key$===h.$key$){s=c;break}s>=0?((o=t[s]).$tag$!==h.$tag$?i=D(t&&t[l],n,s):(K(o,h),t[s]=void 0,i=o.$elm$),h=r[++l]):(i=D(t&&t[l],n,l),h=r[++l]),i&&$.$elm$.parentNode.insertBefore(i,$.$elm$)}a>u?F(e,null==r[d+1]?null:r[d+1].$elm$,n,r,l,d):l>d&&J(t,a,u)}(n,r,t,i):I(i)?(I(e.$text$)&&(n.textContent=""),F(n,null,t,i,0,i.length-1)):I(r)&&J(r,0,r.length-1))},X=function(e,t){e&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$),e.$children$&&e.$children$.forEach(function(e){X(e,t)}))},Y=function(e,t,n,r){var i,o=t.$vnode$||{$flags$:0};N(e.tagName),(i=r)&&i.$tag$===U?r.$tag$=null:r=H(null,null,r),r.$flags$|=4,t.$vnode$=r,r.$elm$=o.$elm$=e,K(o,r)},Z=function(e,t){return o(void 0,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:if(!e||!e[t])return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e[t]()];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),m(n),[3,4];case 4:return[2]}})})},ee=function(e,t,n,r){return o(void 0,void 0,void 0,function(){var i;return a(this,function(o){switch(o.label){case 0:return t.$flags$|=16,i=t.$lazyInstance$,r?[4,Z(i,"componentWillLoad")]:[3,2];case 1:o.sent(),o.label=2;case 2:return C(function(){return te(e,t,n,i,r)}),[2]}})})},te=function(e,t,n,r,i){t.$flags$&=-17,e["s-lr"]=!1,i&&R(e,n,t.$modeName$),t.$flags$|=4;try{Y(e,t,0,r.render())}catch(o){m(o)}t.$flags$&=-5,b&&b.updateHost(e),e["s-lr"]=!0,t.$flags$|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(function(e){return e()}),e["s-rc"].length=0),ne(e,t)},ne=function(e,t,n){if(!e["s-al"]){t.$lazyInstance$;var r=t.$ancestorComponent$;512&t.$flags$||(t.$flags$|=512,e.classList.add("hydrated"),t.$onReadyResolve$(e),r||(s.documentElement.classList.add("hydrated"),setTimeout(function(){return c.$flags$|=2},999))),r&&((n=r["s-al"])&&(n.delete(e),0===n.size&&(r["s-al"]=void 0,r["s-init"]())),t.$ancestorComponent$=void 0)}},re=function(e,t,n,r){var i,o,a=d(e),l=a.$hostElement$,s=a.$instanceValues$.get(t),c=a.$flags$;if(i=n,o=r.$members$[t][0],!((n=null==i||M(i)?i:4&o?"false"!==i&&(""===i||!!i):1&o?String(i):i)===s||8&c&&void 0!==s)&&(a.$instanceValues$.set(t,n),a.$lazyInstance$)){if(r.$watchers$&&1==(9&c)){var u=r.$watchers$[t];u&&u.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,n,s,t)}catch(r){m(r)}})}2==(22&c)&&ee(l,a,r,!1)}},ie=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),i=e.prototype;if(r.forEach(function(e){var r=e[0],o=e[1][0];31&o||2&n&&32&o?Object.defineProperty(i,r,{get:function(){return e=r,d(this).$instanceValues$.get(e);var e},set:function(e){re(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(i,r,{value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=d(this);return n.$onReadyPromise$.then(function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)})}})}),1&n){var o=new Map;i.attributeChangedCallback=function(e,t,n){var r=o.get(e);this[r]=(null!==n||"boolean"!=typeof this[r])&&n},e.observedAttributes=r.filter(function(e){e[0];return 15&e[1][0]}).map(function(e){var t=e[0],n=e[1][1]||t;return o.set(n,t),n})}}return e},oe=function(e,t){return function(n){return e.$lazyInstance$?e.$lazyInstance$[t](n):e.$onReadyPromise$.then(function(){return e.$lazyInstance$[t](n)}).catch(m)}},ae=function(e){return u?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e)},le=function(e,t,n,r,i){return o(void 0,void 0,void 0,function(){var r,o;return a(this,function(a){switch(a.label){case 0:return 0!=(256&t.$flags$)?[3,2]:(t.$flags$|=256,[4,v(n)]);case 1:(i=a.sent()).isProxied||(n.$watchers$=i.watchers,ie(i,n,2),i.isProxied=!0),t.$flags$|=8;try{new i(t)}catch(l){m(l)}t.$flags$&=-9,se(t.$lazyInstance$),!i.isStyleRegistered&&i.style&&(r=i.style,function(e,t,n){var r=g.get(e);$&&n?(r=r||new CSSStyleSheet).replace(t):r=t,g.set(e,r)}(_(n.$tagName$,t.$modeName$),r,!!(1&n.$flags$)),i.isStyleRegistered=!0),a.label=2;case 2:return(o=t.$ancestorComponent$)&&!o["s-lr"]&&o["s-rc"]?o["s-rc"].push(function(){return le(e,t,n)}):ee(e,t,n,!0),[2]}})})},se=function(e){},ce=function(e,t){if(0==(1&c.$flags$)){var n=d(e);if(t.$listeners$&&(n.$rmListeners$=function(e,t,n){var r=n.map(function(n){var r=n[0],i=n[1],o=n[2],a=e,l=oe(t,o),s=ae(r);return c.ael(a,i,l,s),function(){return c.rel(a,i,l,s)}});return function(){return r.forEach(function(e){return e()})}}(e,n,t.$listeners$)),!(1&n.$flags$)){n.$flags$|=1;for(var r=e;r=r.parentNode||r.host;)if(r["s-init"]&&!r["s-lr"]){n.$ancestorComponent$=r,(r["s-al"]=r["s-al"]||new Set).add(e);break}t.$members$&&Object.entries(t.$members$).forEach(function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}}),le(e,n,t)}se(n.$lazyInstance$)}},ue=function(e,t){void 0===t&&(t={});var n=[],r=t.exclude||[],o=s.head,a=l.customElements,u=o.querySelector("meta[charset]"),$=s.createElement("style");Object.assign(c,t),c.$resourcesUrl$=new URL(t.resourcesUrl||"/",l.location.href).href,t.syncQueue&&(c.$flags$|=4),e.forEach(function(e){return e[1].forEach(function(t){var o={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3],$watchers$:{}},l=o.$tagName$,s=function(e){function t(t){var n=e.call(this,t)||this;return t=n,n["s-lr"]=!1,n["s-rc"]=[],y(t),n}return i(t,e),t.prototype.connectedCallback=function(){ce(this,o)},t.prototype.disconnectedCallback=function(){!function(e){if(0==(1&c.$flags$)){var t=d(e);t.$rmListeners$&&(t.$rmListeners$(),t.$rmListeners$=void 0),b&&b.removeHost(e),t.$lazyInstance$}}(this)},t.prototype["s-init"]=function(){var e=d(this);e.$lazyInstance$&&ne(this,e)},t.prototype["s-hmr"]=function(e){},t.prototype.forceUpdate=function(){var e=d(this);ee(this,e,o,!1)},t.prototype.componentOnReady=function(){return d(this).$onReadyPromise$},t}(HTMLElement);o.$lazyBundleIds$=e[0],r.includes(l)||a.get(l)||(n.push(l),a.define(l,ie(s,o,1)))})}),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),o.insertBefore($,u?u.nextSibling:o.firstChild)},$e=function(e,t,n){var r=fe(e);return{emit:function(e){return r.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}}},fe=function(e){return d(e).$hostElement$}},Q0G1:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),a=n("a7VT"),l=n("Tit0"),s=(n("bcUQ"),n("8mO2"));!function(){if(void 0!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var c=n("q1tI"),u=n.n(c);n.d(t,"default",function(){return $});var $=function(e){function t(e){return Object(r.default)(this,t),Object(o.default)(this,Object(a.default)(t).call(this,e))}return Object(l.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&(registerServiceWorker(),applyPolyfills().then(function(){var e;window,Object(s.a)().then(function(){Object(s.b)([["iiif-gallery_2",[[0,"iiif-gallery",{manifest:[1],ignore:[1],items:[32],reset:[64]},[[0,"selectItem","itemSelected"]]],[0,"iiif-gallery-item",{item:[8],selected:[4]}]]]],e)})}))}},{key:"render",value:function(){return u.a.createElement("iiif-gallery",{manifest:this.props.manifest,ignore:this.props.ignore})}}]),t}(c.Component)},bcUQ:function(e,t,n){"use strict";(function(e){}).call(this,n("yLpj"))}}]);