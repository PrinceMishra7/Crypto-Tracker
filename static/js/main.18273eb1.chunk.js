(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(t,e,r){t.exports=r(155)},124:function(t,e,r){},125:function(t,e,r){},153:function(t,e,r){},155:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(97),i=r.n(a),c=(r(124),r(125),r(45)),l=r(8),u=r(212),s=r(208),f=r(213),h=r(209),p=r(201),d=r(206),y=r(102),v=r(205),m=Object(n.createContext)(),g=function(){var t=Object(l.n)(),e=Object(n.useContext)(m);var r=Object(y.a)({palette:{mode:"dark"}});return o.a.createElement(v.a,{theme:r},o.a.createElement(u.a,{color:"transparent",position:"static"},o.a.createElement(s.a,null,o.a.createElement(f.a,null,o.a.createElement(h.a,{onClick:function(){t("/")},flexGrow:1,sx:{color:"gold",fontFamily:"'Montserrat', sans-serif",fontWeight:"bold",cursor:"pointer"}},"Crypto Tracker"),o.a.createElement(p.a,{variant:"outlined",sx:{minWidth:100,height:40,marginRight:15},size:"small",value:e.currency,onChange:function(t){e.setCurrency(t.target.value)}},o.a.createElement(d.a,{value:"INR"},"INR"),o.a.createElement(d.a,{value:"USD"},"USD"))))))},b=r(24),w=r(7),E=function(t){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(t,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},x=function(t){return"https://api.coingecko.com/api/v3/coins/".concat(t)},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,r=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=").concat(r,"&days=").concat(e)},L=function(t){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(t,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},O=r(101),k=r.n(O);function _(){_=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(C){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var y={};l(y,a,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==e&&r.call(m,a)&&(y=m);var g=d.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),l(g,c,"Generator"),l(g,a,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var S=function(){var t=!1,e=Object(n.useState)([]),r=Object(w.a)(e,2),a=r[0],i=r[1],l=Object(n.useContext)(m),u=l.currency,s=l.symbol,f=function(){var t=Object(b.a)(_().mark(function t(){var e,r;return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(L(u),{method:"GET",mode:"cors"});case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,i(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)(function(){f()},[u]),o.a.createElement("div",{className:"carousel",style:{height:"50%",display:"flex",alignItems:"center"}},o.a.createElement(k.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:a.map(function(e){return t=!1,e.price_change_percentage_24h>=0&&(t=!0),o.a.createElement(c.b,{style:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"},to:"/coins/".concat(e.id)},o.a.createElement("img",{src:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),o.a.createElement("span",null,e.symbol,"\xa0",o.a.createElement("span",{style:{color:!0===t?"rgb(14, 203, 129)":"red",fontWeight:500}},t>0?"+":"",e.price_change_percentage_24h.toFixed(2),"%")),o.a.createElement("span",{style:{fontSize:22,fontWeight:500}},s," ",e.current_price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))}),autoPlay:!0}))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"banner",style:{backgroundImage:"url(./banner2.jpg)"}},o.a.createElement(s.a,{className:"banner-content",sx:{height:400,display:"flex",flexDirection:"column",paddingTop:5,justifyContent:"space-around"}},o.a.createElement("div",{className:"tagline",style:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"}},o.a.createElement(h.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"}},"Crypto Tracker"),o.a.createElement(h.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"}},"Get all the Info regarding your favorite Crypto Currency")),o.a.createElement(S,null))))},N=r(202),F=r(207),G=r(211),P=r(219),T=r(220),M=r(216),I=r(217),B=r(218),D=r(221),A=r(204);function W(){W=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var y={};l(y,a,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==e&&r.call(m,a)&&(y=m);var g=d.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),l(g,c,"Generator"),l(g,a,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var R=function(){var t=Object(l.n)(),e=Object(n.useState)([]),r=Object(w.a)(e,2),a=r[0],i=r[1],c=Object(n.useState)(!1),u=Object(w.a)(c,2),f=u[0],p=u[1],d=Object(n.useState)(""),g=Object(w.a)(d,2),x=g[0],j=g[1],L=Object(n.useState)(1),O=Object(w.a)(L,2),k=O[0],_=O[1],S=Object(n.useContext)(m),C=S.currency,R=S.symbol,Y=function(){var t=Object(b.a)(W().mark(function t(){var e,r;return W().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.next=4,fetch(E(C),{method:"GET",mode:"cors"});case 4:return e=t.sent,t.next=7,e.json();case 7:r=t.sent,i(r),p(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0.message);case 15:case"end":return t.stop()}},t,null,[[1,12]])}));return function(){return t.apply(this,arguments)}}();function z(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var H=Object(y.a)({palette:{mode:"dark"}}),U={backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"};Object(n.useEffect)(function(){Y()},[C]);var J=function(){return a.filter(function(t){return t.name.toLowerCase().includes(x)||t.symbol.toLowerCase().includes(x)})};return o.a.createElement(v.a,{theme:H},o.a.createElement(s.a,{style:{textAlign:"center"}},o.a.createElement(h.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"}},"Cryptocurrency Prices by Market Cap"),o.a.createElement(N.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(t){return j(t.target.value)}}),o.a.createElement(M.a,{component:F.a},f?o.a.createElement(G.a,{style:{backgroundColor:"gold"}}):o.a.createElement(I.a,{"aria-label":"simple table"},o.a.createElement(B.a,{style:{backgroundColor:"#EEBC1D"}},o.a.createElement(P.a,null,["Coin","Price","24h Change","Market Cap"].map(function(t){return o.a.createElement(T.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},key:t,align:"Coin"===t?"":"Price"===t?"center":"right"},t)}))),o.a.createElement(D.a,null,J().slice(10*(k-1),10*(k-1)+10).map(function(e){var r=e.price_change_percentage_24h>0;return o.a.createElement(P.a,{key:e.name,sx:U,onClick:function(){t("/coins/".concat(e.id))}},o.a.createElement(T.a,{component:"th",scope:"row",style:{display:"flex",gap:15}},o.a.createElement("img",{src:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("span",{style:{textTransform:"uppercase",fontSize:22}},e.symbol),o.a.createElement("span",{style:{color:"darkgrey"}},e.name))),o.a.createElement(T.a,null,R," ",z(e.current_price.toFixed(2))),o.a.createElement(T.a,{align:"right",style:{color:r>0?"rgb(14, 203, 129)":"red",fontWeight:500}},r>0?"+":"",e.price_change_percentage_24h.toFixed(2),"%"),o.a.createElement(T.a,{align:"right"},R," ",z(e.market_cap.toString().slice(0,-6)),"M"))})))),o.a.createElement(A.a,{sx:{button:{color:"gold"}},count:(J().length/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},onChange:function(t,e){_(e),window.scroll(0,450)}})))},Y=function(){return o.a.createElement("div",null,o.a.createElement(C,null),o.a.createElement(R,null))},z=r(3),H=r(13),U=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],J=r(5),$=r(31),q=r(103),K=function(t){var e=t.children,r=t.selected,n=t.onClick;return o.a.createElement("span",{onClick:n,style:{border:"1px solid gold",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:r?"gold":"",color:r?"black":"",fontWeight:r?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"22%"}},e)},Q=r(222);function V(){V=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var y={};l(y,a,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==e&&r.call(m,a)&&(y=m);var g=d.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),l(g,c,"Generator"),l(g,a,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var X=function(t){t.coin;$.c.register.apply($.c,Object(H.a)($.j));var e=Object(l.p)().id,r=Object(n.useContext)(m),a=r.currency,i=r.symbol,c=Object(n.useState)(),u=Object(w.a)(c,2),s=u[0],f=u[1],h=Object(n.useState)(!1),p=Object(w.a)(h,2),d=p[0],g=p[1],E=Object(n.useState)(1),x=Object(w.a)(E,2),L=x[0],O=x[1],k=function(){var t=Object(b.a)(V().mark(function t(){var r,n;return V().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,fetch(j(e,L,a),{method:"GET",mode:"cors"});case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,g(!0),console.log(n.prices),f(n.prices),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0.message);case 16:case"end":return t.stop()}},t,null,[[1,13]])}));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){k()},[a,L]);var _=Object(J.a)("div")(function(t){var e=t.theme;return Object(z.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}),S=Object(y.a)({palette:{mode:"dark"}});return o.a.createElement(v.a,{theme:S},o.a.createElement(_,null,!s|!d?o.a.createElement(Q.a,{style:{color:"gold"},size:250,thickness:1}):o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{data:{labels:s.map(function(t){var e=new Date(t[0]),r=e.getHours()>12?"".concat(e.getHours()-12,":").concat(e.getMinutes()," PM"):"".concat(e.getHours(),":").concat(e.getMinutes()," AM");return 1===L?r:e.toLocaleDateString()}),datasets:[{data:s.map(function(t){return t[1]}),label:"Price (Past ".concat(L," Days) in ").concat(i),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),o.a.createElement("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"}},U.map(function(t){return o.a.createElement(K,{key:t.value,onClick:function(){O(t.value),g(!1)},selected:t.value===L},t.label)})))))};r(153);function Z(){Z=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var y={};l(y,a,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==e&&r.call(m,a)&&(y=m);var g=d.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),l(g,c,"Generator"),l(g,a,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var tt=function(){var t=Object(l.p)().id,e=Object(n.useContext)(m),r=e.currency,a=e.symbol,i=Object(n.useState)({}),c=Object(w.a)(i,2),u=c[0],s=c[1],f=Object(n.useState)(""),p=Object(w.a)(f,2),d=p[0],y=p[1],v=Object(n.useState)(""),g=Object(w.a)(v,2),E=g[0],j=g[1],L=Object(n.useState)(0),O=Object(w.a)(L,2),k=O[0],_=O[1],S=Object(n.useState)(0),C=Object(w.a)(S,2),N=C[0],F=C[1],P=Object(n.useState)(0),T=Object(w.a)(P,2),M=T[0],I=T[1],B=function(){var e=Object(b.a)(Z().mark(function e(){var n,o;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x(t),{method:"GET",mode:"cors"});case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,j(o.description.en.split(". ")[0]),y(o.image.large),_(o.market_cap_rank),F(o.market_data.current_price[r.toLowerCase()]),I(o.market_data.market_cap[r.toLowerCase()]),s(o);case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();function D(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Object(n.useEffect)(function(){B()},[]),u?o.a.createElement("div",{className:"coin-container"},o.a.createElement("div",{className:"coin-sidebar"},o.a.createElement("img",{src:d,alt:u.name,height:"200",style:{marginBottom:"20"}}),o.a.createElement(h.a,{variant:"h3",sx:{fontWeight:"bold",marginBottom:"20 !important",fontFamily:"Montserrat"}},u.name),o.a.createElement(h.a,{variant:"subtitle1",style:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"}},E),o.a.createElement("div",{className:"market-data"},o.a.createElement("span",{style:{display:"flex"}},o.a.createElement(h.a,{variant:"h5",style:{fontWeight:"bold",marginBottom:"20 !important",fontFamily:"Montserrat"}},"Rank:"),"\xa0 \xa0",o.a.createElement(h.a,{variant:"h5",style:{fontFamily:"Montserrat"}},D(k))),o.a.createElement("span",{style:{display:"flex"}},o.a.createElement(h.a,{variant:"h5",style:{fontWeight:"bold",marginBottom:"20 !important",fontFamily:"Montserrat"}},"Current Price:"),"\xa0 \xa0",o.a.createElement(h.a,{variant:"h5",style:{fontFamily:"Montserrat"}},a," ",D(N))),o.a.createElement("span",{style:{display:"flex"}},o.a.createElement(h.a,{variant:"h5",style:{fontWeight:"bold",marginBottom:"20 !important",fontFamily:"Montserrat"}},"Market Cap:"),"\xa0 \xa0",o.a.createElement(h.a,{variant:"h5",style:{fontFamily:"Montserrat"}},a," ",D(M.toString().slice(0,-6)),"M")))),o.a.createElement(X,{coin:u})):o.a.createElement(G.a,{style:{backgroundColor:"gold"}})};var et=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"app"},o.a.createElement(g,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",element:o.a.createElement(Y,null)}),o.a.createElement(l.a,{path:"/coins/:id",element:o.a.createElement(tt,null)}))))},rt=function(t){var e=t.children,r=Object(n.useState)("INR"),a=Object(w.a)(r,2),i=a[0],c=a[1],l=Object(n.useState)("\u20b9"),u=Object(w.a)(l,2),s=u[0],f=u[1];return Object(n.useEffect)(function(){"INR"===i?f("\u20b9"):"USD"===i&&f("$")},[i]),o.a.createElement(m.Provider,{value:{currency:i,symbol:s,setCurrency:c}},e)};r(154);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(rt,null,o.a.createElement(et,null))))}},[[116,1,2]]]);
//# sourceMappingURL=main.18273eb1.chunk.js.map