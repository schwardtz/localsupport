(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0bd85818":"f878c10f","chunk-43dea85e":"23b37cde","chunk-7a5e3704":"19f551e0","chunk-94e5f69e":"fd6f1071","chunk-d0923606":"a651d323","chunk-606541da":"a60b1c1d","chunk-1a5aba18":"6bc98fcd","chunk-50748559":"5a73ded0","chunk-dec65592":"966e8c20"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0bd85818":1,"chunk-43dea85e":1,"chunk-7a5e3704":1,"chunk-94e5f69e":1,"chunk-606541da":1,"chunk-1a5aba18":1,"chunk-50748559":1,"chunk-dec65592":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0bd85818":"b1328712","chunk-43dea85e":"6b67c28e","chunk-7a5e3704":"d5781dd5","chunk-94e5f69e":"499690d7","chunk-d0923606":"31d6cfe0","chunk-606541da":"554a79e4","chunk-1a5aba18":"5b8a3861","chunk-50748559":"44c4a41e","chunk-dec65592":"f8aec731"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("653a"),o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LocalSupport"),e._m(0)],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("address",[n("h2",[e._v("Impressum")]),e._v("Johannes Klinger "),n("br"),e._v("Freihofstr. 16 "),n("br"),e._v("60385 Frankfurt "),n("br"),e._v("Kontakt: "),n("a",{attrs:{href:"mailto:mail@johannesklinger.com"}},[e._v("E-Mail")])]),n("a",{attrs:{href:"https://icons8.com/icons",title:"Icons von icons8"}},[e._v("Alle Icons von https://icons8.com/icons")]),n("br"),n("a",{attrs:{href:"https://www.dafont.com/de/bargain.font",title:"Font für Überschrift"}},[e._v("Schriftart der Überschrift von https://www.dafont.com/de/bargain.font")])])}],i=(n("d3b7"),function(){return n.e("chunk-43dea85e").then(n.bind(null,"9b4d"))}),u={name:"App",components:{LocalSupport:i}},s=u,f=(n("034f"),n("2877")),l=Object(f["a"])(s,a,c,!1,null,null,null),d=l.exports,h=n("0ff2"),p=n("8c4f"),m=function(){return n.e("chunk-94e5f69e").then(n.bind(null,"371a"))},b=function(){return n.e("chunk-7a5e3704").then(n.bind(null,"5e8b"))},g=function(){return n.e("chunk-0bd85818").then(n.bind(null,"a0be"))},v=function(){return n.e("chunk-d0923606").then(n.bind(null,"1270"))},k=[{path:"/",name:"home",component:g},{path:"/contact",name:"contact",component:m},{path:"/overview",name:"Locations",component:b},{path:"/input",name:"input",component:v}],y=new p["a"]({routes:k}),w=y,L=n("2699"),O=n("a40a"),_=n("4e2b"),x=(n("6cc5"),n("e11e")),C=n.n(x);delete C.a.Icon.Default.prototype._getIconUrl,C.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),o["a"].component("l-map",L["a"]),o["a"].component("l-tile-layer",O["a"]),o["a"].component("l-marker",_["a"]),o["a"].use(p["a"]),o["a"].use(h["a"]),o["a"].config.productionTip=!1,new o["a"]({store:r["a"],router:w,render:function(e){return e(d)}}).$mount("#app"),r["a"].dispatch("fetchLocations")},"653a":function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("b0c0"),n("ac1f"),n("841c"),n("159b");var r=n("2b0e"),o=n("2f62"),a=n("f6fd");r["a"].use(o["a"]),t["a"]=new o["a"].Store({state:{filter:{categories:[],search:""},locations:[]},actions:{fetchLocations:function(e){var t=e.commit;a["a"].collection("locations").orderBy("name").get().then((function(e){e.forEach((function(e){t("addLocation",e.data())}))}))}},mutations:{addCategoryFilter:function(e,t){-1==e.filter.categories.indexOf(t)?e.filter.categories.push(t):e.filter.categories.splice(e.filter.categories.indexOf(t),1)},searchFilter:function(e,t){e.filter.search=t},addLocation:function(e,t){t.geolocation=[t.location.latitude,t.location.longitude],e.locations.push(t)}},getters:{getFilteredLocations:function(e){return e.locations.filter((function(t){if((-1!=t.city.toLowerCase().indexOf(e.filter.search.toLowerCase())||-1!=t.name.toLowerCase().indexOf(e.filter.search.toLowerCase())||-1!=t.description.toLowerCase().indexOf(e.filter.search.toLowerCase())||-1!=t.categories.map((function(t){return-1!=t.toLowerCase().indexOf(e.filter.search.toLowerCase())})).indexOf(!0))&&(0===e.filter.categories.length||-1!=t.categories.map((function(t){return-1!=e.filter.categories.indexOf(t)})).indexOf(!0)))return t}))},getSearchFilter:function(e){return e.filter.search},getCategoryFilter:function(e){return e.filter.categories},getZoomLocation:function(e){return e.locations.filter((function(t){if(e.filter.search.length>=4&&-1!=t.city.toLowerCase().indexOf(e.filter.search.toLowerCase()))return t}))[0]}},strict:!0})},"85ec":function(e,t,n){},f6fd:function(e,t,n){"use strict";var r=n("59ca"),o=n.n(r),a={apiKey:"AIzaSyA698dsY7FHMRks7MYU226oxEFyraMtw6I",authDomain:"support-your-local-dealer.firebaseapp.com",databaseURL:"https://support-your-local-dealer.firebaseio.com",projectId:"support-your-local-dealer",storageBucket:"support-your-local-dealer.appspot.com",messagingSenderId:"596359913429",appId:"1:596359913429:web:c0de592c15aa4d059ca75c"},c=o.a.initializeApp(a);n("e71f"),t["a"]=c.firestore()}});
//# sourceMappingURL=app.986ea4c9.js.map