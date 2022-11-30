var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{s(t.next(e))}catch(r){i(r)}}function l(e){try{s(t["throw"](e))}catch(r){i(r)}}function s(e){e.done?n(e.value):a(e.value).then(o,l)}s((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(r){return s([e,r])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=r.call(e,n)}catch(l){o=[6,l];a=0}finally{t=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="wv-timelog-list";var a=0;var i=false;var o=false;var l=typeof window!=="undefined"?window:{};var s=l.document||{head:{}};var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var f={};var c=new WeakMap;var $=function(e){return c.get(e)};var v=e("r",(function(e,r){return c.set(r.$lazyInstance$=e,r)}));var h=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return c.set(e,r)};var m=function(e,r){return r in e};var p=function(e){return console.error(e)};var d=new Map;var g=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=d.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{d.set(i,e)}return e[a]}),p)};var y=[];var b=[];var w=[];var _=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&u.$flags$&4){k(R)}else{u.raf(R)}}}};var S=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){p(n)}}e.length=0};var j=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){p(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var R=function(){a++;S(y);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(b,e);j(w,e);if(b.length>0){w.push.apply(w,b);b.length=0}if(i=y.length+b.length+w.length>0){u.raf(R)}else{a=0}};var k=function(e){return Promise.resolve().then(e)};var x=_(y,false);var E=_(b,true);var O={};var C=function(e){e=typeof e;return e==="object"||e==="function"};var P=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var U=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){u.$cssShim$=l.__stencil_cssshim;if(u.$cssShim$){return u.$cssShim$.initShim()}}))}return Promise.resolve()}));var L=e("p",(function(){return __awaiter(n,void 0,void 0,(function(){var e,n,a,i,o;return __generator(this,(function(f){switch(f.label){case 0:{u.$cssShim$=l.__stencil_cssshim}e=r.meta.url;n=new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(s.querySelectorAll("script")).find((function(e){return n.test(e.src)||e.getAttribute("data-stencil-namespace")===t}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));N(o.href,a);if(!!window.customElements)return[3,3];return[4,r.import("./p-7f10eb01.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:o.href})]}}))}))}));var N=function(e,r){var n=P(t);try{l[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;l[n]=function(t){var i=new URL(t,e).href;var o=a.get(i);if(!o){var u=s.createElement("script");u.type="module";u.crossOrigin=r.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){u.onload=function(){e(l[n].m);u.remove()}}));a.set(i,o);s.head.appendChild(u)}return o}}};var A=function(e,r){if(e!=null&&!C(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var I="hydrated";var M=function(e,r){if(r===void 0){r=""}{return function(){return}}};var T=function(e,r){{return function(){return}}};var B=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var o=false;var l=false;var s=[];var u=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!C(a)){a=String(a)}if(o&&l){s[s.length-1].$text$+=a}else{s.push(o?z(null,a):a)}l=o}}};u(n);if(r){if(r.key){i=r.key}{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var c=z(e,null);c.$attrs$=r;if(s.length>0){c.$children$=s}{c.$key$=i}return c}));var z=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}return n};var q={};var H=function(e){return e&&e.$tag$===q};var V=function(e,r,n,t,a,i){if(n===t){return}var o=m(e,r);var s=r.toLowerCase();if(r==="class"){var f=e.classList;var c=F(n);var $=F(t);f.remove.apply(f,c.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!c.includes(e)})))}else if(r==="key");else if(!o&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(m(l,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(n){u.rel(e,r,n,false)}if(t){u.ael(e,r,t,false)}}else{var v=C(t);if((o||v&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var h=t==null?"":t;if(r==="list"){o=false}else if(n==null||e[r]!=h){e[r]=h}}else{e[r]=t}}catch(p){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!o||i&4||a)&&!v){t=t===true?"":t;{e.setAttribute(r,t)}}}};var D=/\s/;var F=function(e){return!e?[]:e.split(D)};var W=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||O;var o=r.$attrs$||O;{for(t in i){if(!(t in o)){V(a,t,i[t],undefined,n,r.$flags$)}}}for(t in o){V(a,t,i[t],o[t],n,r.$flags$)}};var G=function(e,r,n,t){var a=r.$children$[n];var i=0;var l;var u;if(a.$text$!==null){l=a.$elm$=s.createTextNode(a.$text$)}else{l=a.$elm$=s.createElement(a.$tag$);{W(null,a,o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){u=G(e,a,i);if(u){l.appendChild(u)}}}}return l};var Q=function(e,r,n,t,a,i){var o=e;var l;for(;a<=i;++a){if(t[a]){l=G(null,n,a);if(l){t[a].$elm$=l;o.insertBefore(l,r)}}}};var J=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var K=function(e,r,n,t){var a=0;var i=0;var o=0;var l=0;var s=r.length-1;var u=r[0];var f=r[s];var c=t.length-1;var $=t[0];var v=t[c];var h;var m;while(a<=s&&i<=c){if(u==null){u=r[++a]}else if(f==null){f=r[--s]}else if($==null){$=t[++i]}else if(v==null){v=t[--c]}else if(X(u,$)){Y(u,$);u=r[++a];$=t[++i]}else if(X(f,v)){Y(f,v);f=r[--s];v=t[--c]}else if(X(u,v)){Y(u,v);e.insertBefore(u.$elm$,f.$elm$.nextSibling);u=r[++a];v=t[--c]}else if(X(f,$)){Y(f,$);e.insertBefore(f.$elm$,u.$elm$);f=r[--s];$=t[++i]}else{o=-1;{for(l=a;l<=s;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===$.$key$){o=l;break}}}if(o>=0){m=r[o];if(m.$tag$!==$.$tag$){h=G(r&&r[i],n,o)}else{Y(m,$);r[o]=undefined;h=m.$elm$}$=t[++i]}else{h=G(r&&r[i],n,i);$=t[++i]}if(h){{u.$elm$.parentNode.insertBefore(h,u.$elm$)}}}}if(a>s){Q(e,t[c+1]==null?null:t[c+1].$elm$,n,t,i,c)}else if(i>c){J(r,a,s)}};var X=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}}return false};var Y=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;if(r.$text$===null){{{W(e,r,o)}}if(t!==null&&a!==null){K(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}Q(n,null,r,a,0,a.length-1)}else if(t!==null){J(t,0,t.length-1)}}else if(e.$text$!==r.$text$){n.data=r.$text$}};var Z=function(e,r,n,t){var a=r.$vnode$||z(null,null);var i=H(t)?t:B(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;Y(a,i)};var ee=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var re=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=M("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var o=r.$lazyInstance$;var l=function(){return ne(e,r,n,o)};ee(r,i);var s;if(t){{s=le(o,"componentWillLoad")}}a();return se(s,(function(){return E(l)}))};var ne=function(e,r,n,t,a){var i=M("update",n.$tagName$);var o=e["s-rc"];var l=M("render",n.$tagName$);{{Z(e,r,n,te(t))}}if(u.$cssShim$){u.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}l();i();{var s=e["s-p"];var f=function(){return ae(e,r,n)};if(s.length===0){f()}else{Promise.all(s).then(f);r.$flags$|=4;s.length=0}}};var te=function(e,r){try{e=e.render()}catch(n){p(n)}return e};var ae=function(e,r,n){var t=M("postUpdate",n.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(I)}{le(a,"componentDidLoad")}t();{r.$onReadyResolve$(e);if(!i){oe()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){k((function(){return re(e,r,n,false)}))}r.$flags$&=~(4|512)}};var ie=function(e,r){{var n=$(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){re(e,n,r,false)}return t}};var oe=function(e){{s.documentElement.classList.add(I)}{u.$flags$|=2}};var le=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){p(t)}}return undefined};var se=function(e,r){return e&&e.then?e.then(r):r()};var ue=function(e,r){return $(e).$instanceValues$.get(r)};var fe=function(e,r,n,t){var a=$(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(r);var l=a.$flags$;var s=a.$lazyInstance$;n=A(n,t.$members$[r][0]);if(n!==o&&(!(l&8)||o===undefined)){a.$instanceValues$.set(r,n);if(s){if((l&(2|16))===2){re(i,a,t,false)}}}};var ce=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return ue(this,t)},set:function(e){fe(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;u.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var $e=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a,o,l;return __generator(this,(function(s){switch(s.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=g(t);if(!i.then)return[3,2];n=T();return[4,i];case 1:i=s.sent();n();s.label=2;case 2:if(!i.isProxied){ce(i,t,2);i.isProxied=true}a=M("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch(u){p(u)}{r.$flags$&=~8}a();s.label=3;case 3:o=r.$ancestorComponent$;l=function(){return re(e,r,t,true)};if(o&&o["s-rc"]){o["s-rc"].push(l)}else{l()}return[2]}}))}))};var ve=function(e,r){if((u.$flags$&1)===0){var n=M("connectedCallback",r.$tagName$);var t=$(e);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ee(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{k((function(){return $e(e,t,r)}))}}n()}};var he=function(e){if((u.$flags$&1)===0){var r=$(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var me=e("b",(function(e,r){if(r===void 0){r={}}var n=M();var t=[];var a=r.exclude||[];var i=s.head;var o=l.customElements;var f=i.querySelector("meta[charset]");var c=s.createElement("style");var v=[];var m;var p=true;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",s.baseURI).href;if(r.syncQueue){u.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}var i=n.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;h(r);return n}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(p){v.push(this)}else{u.jmp((function(){return ve(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return he(e)}))};r.prototype.forceUpdate=function(){ie(this,n)};r.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!o.get(i)){t.push(i);o.define(i,ce(l,n,1))}}))}));c.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";c.setAttribute("data-styles","");i.insertBefore(c,f?f.nextSibling:i.firstChild);p=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{u.jmp((function(){return m=setTimeout(oe,30,"timeout")}))}n()}));var pe=function(e){var r=new URL(e,u.$resourcesUrl$);return r.origin!==l.location.origin?r.href:r.pathname};var de=e("g",(function(e,r){if(r in f){return f[r]}else if(r==="window"){return l}else if(r==="document"){return s}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return pe(".")}else if(r==="queue"){return{write:E,read:x,tick:{then:function(e){return k(e)}}}}return undefined}));f.store=function(){var e;var r=function(r){e=r};var n=function(){return e&&e.getState()};var t=function(){return e};var a=function(r,n){Object.keys(n).forEach((function(t){var a=n[t];Object.defineProperty(r,t,{get:function(){return function(){var r=[];for(var n=0;n<arguments.length;n++){r[n]=arguments[n]}return e.dispatch(a.apply(void 0,r))}},configurable:true,enumerable:true})}))};var i=function(r,n){var t=function(t,a){var i=n(e.getState());Object.keys(i).forEach((function(e){var n=i[e];r[e]=n}))};var a=e.subscribe((function(){return t()}));t();return a};return{getStore:t,setStore:r,getState:n,mapDispatchToProps:a,mapStateToProps:i}}()}}}));