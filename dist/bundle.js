!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.AnchorBlockTune=n():e.AnchorBlockTune=n()}(self,(function(){return(()=>{var e={966:(e,n,t)=>{function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t(548).toString();var a=function(){function e(n){var t=n.api,r=n.data;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.data=r||{},this._CSS={classWrapper:"cdx-anchor-tune-wrapper",classIcon:"cdx-anchor-tune-icon",classInput:"cdx-anchor-tune-input"}}var n,t,a;return n=e,a=[{key:"isTune",get:function(){return!0}}],(t=[{key:"getAnchor",value:function(){return this.data.anchor||""}},{key:"render",value:function(){var e=this,n=document.createElement("div");n.classList.add(this._CSS.classWrapper);var t=document.createElement("div");t.classList.add(this._CSS.classIcon),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g id="hash"><path style="" d="M30,12V8h-5.004l1-8h-4l-1,8h-7.998l1-8h-4l-1,8H2v4h6.498L7.5,20H2v4h5l-1,8h4l1-8h8l-1.002,8H22    l1-8h7v-4h-6.5l0.996-8H30z M19.5,20h-8l0.998-8h7.998L19.5,20z" fill="#878787" data-original="#030104" class=""/></g></g></svg>';var r=document.createElement("input");return r.placeholder=this.api.i18n.t("Anchor"),r.classList.add(this._CSS.classInput),r.value=this.getAnchor(),r.addEventListener("input",(function(n){var t=n.target.value;0!==t.indexOf("http")&&(t="https://".concat(t)),t.length>0?e.data.anchor=t:e.data.anchor=void 0})),n.appendChild(t),n.appendChild(r),n}},{key:"save",value:function(){return this.data}}])&&r(n.prototype,t),a&&r(n,a),e}();e.exports=a},424:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".cdx-anchor-tune-wrapper {\n    display: flex;\n}\n\n.cdx-anchor-tune-icon {\n    width: 12px;\n    height: 22px;\n    margin-left: 7px;\n}\n\n.cdx-anchor-tune-icon svg {\n    vertical-align: inherit;\n}\n\n.cdx-anchor-tune-input {\n    width: 80px;\n    border: 0;\n    box-sizing: border-box;\n    margin-left: 7px;\n    outline: none;\n}\n",""]);const o=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},548:(e,n,t)=>{"use strict";var r=t(379),a=t.n(r),o=t(424);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals},379:(e,n,t)=>{"use strict";var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=i(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function v(e,n){var t,r,a;if(n.singleton){var o=p++;t=h||(h=s(n)),r=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=s(n),r=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var s=c(e,n),l=0;l<t.length;l++){var u=i(t[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=s}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}return t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t(966)})()}));