var AnchorBlockTune;!function(){var e={966:function(e){function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function e(n){var t=n.api,r=n.data,a=n.settings,c=n.block;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.block=c,this.settings=a,this.data=r||{}}var t,r,a;return t=e,a=[{key:"isTune",get:function(){return!0}}],(r=[{key:"getAnchor",value:function(){return this.data.anchor}},{key:"render",value:function(){var e=this,n=document.createElement("div"),t=document.createElement("div");t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 984.899 984.899"><path d="M884.75 779.899l46.1 14.301c24.899 7.699 48.899-14.4 43.1-39.9l-48.7-215.1c-5.8-25.4-36.899-35.101-56.1-17.4l-161.9 149.8c-19.2 17.7-12 49.5 13 57.3l42.2 13.1c-25.2 28.899-54.9 53.7-88.1 73.3-37.601 22.2-78.9 37.3-121.9 44.5V500.6h103.9c33.1 0 60-26.899 60-60 0-33.1-26.9-60-60-60h-103.9v-49.5c64.8-24.4 111-86.9 111-160.1 0-94.3-76.7-171-171-171s-171 76.7-171 171c0 73.2 46.2 135.8 111 160.1v49.5h-103.9c-33.1 0-60 26.9-60 60 0 33.101 26.9 60 60 60h103.9v359.2c-42.9-7.3-84.3-22.3-121.9-44.5-33.1-19.7-62.899-44.5-88.1-73.4l42.2-13.1c24.9-7.7 32.1-39.5 13-57.3l-161.9-149.7c-19.2-17.7-50.3-8-56.1 17.4l-48.7 215.199c-5.8 25.4 18.2 47.601 43.1 39.9l46.1-14.3c39.2 56.2 90.2 103.6 149.3 138.6 73.3 43.4 157.4 66.3 243 66.3s169.6-22.899 243-66.3c59.099-35.099 110.099-82.499 149.3-138.7zM543.45 170.9c0 7.8-1.8 15.2-4.9 21.9-8.199 17.2-25.8 29.1-46.1 29.1s-37.9-11.9-46.1-29.1c-3.2-6.6-4.9-14-4.9-21.9 0-28.1 22.9-51 51-51s51 22.9 51 51z"/></svg>';var r=document.createElement("input");return r.placeholder="Anchor",r.value=this.anchor,r.addEventListener("input",(function(n){var t=n.target.value.replace(/[^a-z0-9_-]/gi,"");t.length>0?e.data.anchor=t:e.data.anchor=void 0})),n.appendChild(t),n.appendChild(r),n}},{key:"save",value:function(){return this.data}}])&&n(t.prototype,r),a&&n(t,a),e}();e.exports=t}},n={},t=function t(r){var a=n[r];if(void 0!==a)return a.exports;var c=n[r]={exports:{}};return e[r](c,c.exports,t),c.exports}(966);AnchorBlockTune=t}();