const Nc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Nc();function Cs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},Ut=[],Ce=()=>{},Dc=()=>!1,Mc=/^on[^a-z]/,yr=t=>Mc.test(t),Ss=t=>t.startsWith("onUpdate:"),ie=Object.assign,As=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xc=Object.prototype.hasOwnProperty,W=(t,e)=>xc.call(t,e),F=Array.isArray,Ft=t=>br(t)==="[object Map]",Po=t=>br(t)==="[object Set]",$=t=>typeof t=="function",oe=t=>typeof t=="string",Ps=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",Oo=t=>Z(t)&&$(t.then)&&$(t.catch),ko=Object.prototype.toString,br=t=>ko.call(t),Lc=t=>br(t).slice(8,-1),No=t=>br(t)==="[object Object]",Os=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gn=Cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Er=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uc=/-(\w)/g,$e=Er(t=>t.replace(Uc,(e,n)=>n?n.toUpperCase():"")),Fc=/\B([A-Z])/g,Xt=Er(t=>t.replace(Fc,"-$1").toLowerCase()),Ir=Er(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=Er(t=>t?`on${Ir(t)}`:""),bn=(t,e)=>!Object.is(t,e),Jn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ts=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ai;const ns=()=>ai||(ai=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function ks(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?jc(r):ks(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(oe(t))return t;if(Z(t))return t}}const Bc=/;(?![^(]*\))/g,$c=/:([^]+)/,Hc=/\/\*[^]*?\*\//g;function jc(t){const e={};return t.replace(Hc,"").split(Bc).forEach(n=>{if(n){const r=n.split($c);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ns(t){let e="";if(oe(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ns(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vc=Cs(Wc);function Do(t){return!!t||t===""}const Vg=t=>oe(t)?t:t==null?"":F(t)||Z(t)&&(t.toString===ko||!$(t.toString))?JSON.stringify(t,Mo,2):String(t),Mo=(t,e)=>e&&e.__v_isRef?Mo(t,e.value):Ft(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Po(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!F(e)&&!No(e)?String(e):e;let Ie;class Kc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zc(t,e=Ie){e&&e.active&&e.effects.push(t)}function qc(){return Ie}const Ds=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xo=t=>(t.w&ht)>0,Lo=t=>(t.n&ht)>0,Gc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ht},Jc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];xo(s)&&!Lo(s)?s.delete(t):e[n++]=s,s.w&=~ht,s.n&=~ht}e.length=n}},rs=new WeakMap;let ln=0,ht=1;const ss=30;let we;const It=Symbol(""),is=Symbol("");class Ms{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zc(this,r)}run(){if(!this.active)return this.fn();let e=we,n=lt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=we,we=this,lt=!0,ht=1<<++ln,ln<=ss?Gc(this):ci(this),this.fn()}finally{ln<=ss&&Jc(this),ht=1<<--ln,we=this.parent,lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let lt=!0;const Uo=[];function Qt(){Uo.push(lt),lt=!1}function Zt(){const t=Uo.pop();lt=t===void 0?!0:t}function ge(t,e,n){if(lt&&we){let r=rs.get(t);r||rs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ds()),Fo(s)}}function Fo(t,e){let n=!1;ln<=ss?Lo(t)||(t.n|=ht,n=!xo(t)):n=!t.has(we),n&&(t.add(we),we.deps.push(t))}function qe(t,e,n,r,s,i){const o=rs.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Os(n)&&c.push(o.get("length")):(c.push(o.get(It)),Ft(t)&&c.push(o.get(is)));break;case"delete":F(t)||(c.push(o.get(It)),Ft(t)&&c.push(o.get(is)));break;case"set":Ft(t)&&c.push(o.get(It));break}if(c.length===1)c[0]&&os(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);os(Ds(a))}}function os(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&li(r);for(const r of n)r.computed||li(r)}function li(t,e){(t!==we||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yc=Cs("__proto__,__v_isRef,__isVue"),Bo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ps)),Xc=xs(),Qc=xs(!1,!0),Zc=xs(!0),ui=el();function el(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qt();const r=V(this)[e].apply(this,n);return Zt(),r}}),t}function tl(t){const e=V(this);return ge(e,"has",t),e.hasOwnProperty(t)}function xs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?_l:Vo:e?Wo:jo).get(r))return r;const o=F(r);if(!t){if(o&&W(ui,s))return Reflect.get(ui,s,i);if(s==="hasOwnProperty")return tl}const c=Reflect.get(r,s,i);return(Ps(s)?Bo.has(s):Yc(s))||(t||ge(r,"get",s),e)?c:ue(c)?o&&Os(s)?c:c.value:Z(c)?t?zo(c):Tr(c):c}}const nl=$o(),rl=$o(!0);function $o(t=!1){return function(n,r,s,i){let o=n[r];if(Kt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!or(s)&&!Kt(s)&&(o=V(o),s=V(s)),!F(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const c=F(n)&&Os(r)?Number(r)<n.length:W(n,r),a=Reflect.set(n,r,s,i);return n===V(i)&&(c?bn(s,o)&&qe(n,"set",r,s):qe(n,"add",r,s)),a}}function sl(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&qe(t,"delete",e,void 0),r}function il(t,e){const n=Reflect.has(t,e);return(!Ps(e)||!Bo.has(e))&&ge(t,"has",e),n}function ol(t){return ge(t,"iterate",F(t)?"length":It),Reflect.ownKeys(t)}const Ho={get:Xc,set:nl,deleteProperty:sl,has:il,ownKeys:ol},al={get:Zc,set(t,e){return!0},deleteProperty(t,e){return!0}},cl=ie({},Ho,{get:Qc,set:rl}),Ls=t=>t,wr=t=>Reflect.getPrototypeOf(t);function $n(t,e,n=!1,r=!1){t=t.__v_raw;const s=V(t),i=V(e);n||(e!==i&&ge(s,"get",e),ge(s,"get",i));const{has:o}=wr(s),c=r?Ls:n?Bs:En;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Hn(t,e=!1){const n=this.__v_raw,r=V(n),s=V(t);return e||(t!==s&&ge(r,"has",t),ge(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jn(t,e=!1){return t=t.__v_raw,!e&&ge(V(t),"iterate",It),Reflect.get(t,"size",t)}function fi(t){t=V(t);const e=V(this);return wr(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function di(t,e){e=V(e);const n=V(this),{has:r,get:s}=wr(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?bn(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function hi(t){const e=V(this),{has:n,get:r}=wr(e);let s=n.call(e,t);s||(t=V(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function pi(){const t=V(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function Wn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=V(o),a=e?Ls:t?Bs:En;return!t&&ge(c,"iterate",It),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function Vn(t,e,n){return function(...r){const s=this.__v_raw,i=V(s),o=Ft(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Ls:e?Bs:En;return!e&&ge(i,"iterate",a?is:It),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function ll(){const t={get(i){return $n(this,i)},get size(){return jn(this)},has:Hn,add:fi,set:di,delete:hi,clear:pi,forEach:Wn(!1,!1)},e={get(i){return $n(this,i,!1,!0)},get size(){return jn(this)},has:Hn,add:fi,set:di,delete:hi,clear:pi,forEach:Wn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Wn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vn(i,!1,!1),n[i]=Vn(i,!0,!1),e[i]=Vn(i,!1,!0),r[i]=Vn(i,!0,!0)}),[t,n,e,r]}const[ul,fl,dl,hl]=ll();function Us(t,e){const n=e?t?hl:dl:t?fl:ul;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const pl={get:Us(!1,!1)},gl={get:Us(!1,!0)},ml={get:Us(!0,!1)},jo=new WeakMap,Wo=new WeakMap,Vo=new WeakMap,_l=new WeakMap;function vl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yl(t){return t.__v_skip||!Object.isExtensible(t)?0:vl(Lc(t))}function Tr(t){return Kt(t)?t:Fs(t,!1,Ho,pl,jo)}function Ko(t){return Fs(t,!1,cl,gl,Wo)}function zo(t){return Fs(t,!0,al,ml,Vo)}function Fs(t,e,n,r,s){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Bt(t){return Kt(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function Kt(t){return!!(t&&t.__v_isReadonly)}function or(t){return!!(t&&t.__v_isShallow)}function qo(t){return Bt(t)||Kt(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Go(t){return ir(t,"__v_skip",!0),t}const En=t=>Z(t)?Tr(t):t,Bs=t=>Z(t)?zo(t):t;function Jo(t){lt&&we&&(t=V(t),Fo(t.dep||(t.dep=Ds())))}function Yo(t,e){t=V(t);const n=t.dep;n&&os(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Xo(t){return Qo(t,!1)}function bl(t){return Qo(t,!0)}function Qo(t,e){return ue(t)?t:new El(t,e)}class El{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:En(e)}get value(){return Jo(this),this._value}set value(e){const n=this.__v_isShallow||or(e)||Kt(e);e=n?e:V(e),bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:En(e),Yo(this))}}function $t(t){return ue(t)?t.value:t}const Il={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zo(t){return Bt(t)?t:new Proxy(t,Il)}class wl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ms(e,()=>{this._dirty||(this._dirty=!0,Yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=V(this);return Jo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Tl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ce):(r=t.get,s=t.set),new wl(r,s,i||!s,n)}function ut(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Rr(i,e,n)}return s}function Se(t,e,n,r){if($(t)){const i=ut(t,e,n,r);return i&&Oo(i)&&i.catch(o=>{Rr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Se(t[i],e,n,r));return s}function Rr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){ut(a,null,10,[t,o,c]);return}}Rl(t,n,s,r)}function Rl(t,e,n,r=!0){console.error(t)}let In=!1,as=!1;const le=[];let Le=0;const Ht=[];let We=null,yt=0;const ea=Promise.resolve();let $s=null;function ta(t){const e=$s||ea;return t?e.then(this?t.bind(this):t):e}function Cl(t){let e=Le+1,n=le.length;for(;e<n;){const r=e+n>>>1;wn(le[r])<t?e=r+1:n=r}return e}function Hs(t){(!le.length||!le.includes(t,In&&t.allowRecurse?Le+1:Le))&&(t.id==null?le.push(t):le.splice(Cl(t.id),0,t),na())}function na(){!In&&!as&&(as=!0,$s=ea.then(sa))}function Sl(t){const e=le.indexOf(t);e>Le&&le.splice(e,1)}function Al(t){F(t)?Ht.push(...t):(!We||!We.includes(t,t.allowRecurse?yt+1:yt))&&Ht.push(t),na()}function gi(t,e=In?Le+1:0){for(;e<le.length;e++){const n=le[e];n&&n.pre&&(le.splice(e,1),e--,n())}}function ra(t){if(Ht.length){const e=[...new Set(Ht)];if(Ht.length=0,We){We.push(...e);return}for(We=e,We.sort((n,r)=>wn(n)-wn(r)),yt=0;yt<We.length;yt++)We[yt]();We=null,yt=0}}const wn=t=>t.id==null?1/0:t.id,Pl=(t,e)=>{const n=wn(t)-wn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function sa(t){as=!1,In=!0,le.sort(Pl);const e=Ce;try{for(Le=0;Le<le.length;Le++){const n=le[Le];n&&n.active!==!1&&ut(n,null,14)}}finally{Le=0,le.length=0,ra(),In=!1,$s=null,(le.length||Ht.length)&&sa()}}function Ol(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[f]||Q;g&&(s=n.map(y=>oe(y)?y.trim():y)),h&&(s=n.map(ts))}let c,a=r[c=Lr(e)]||r[c=Lr($e(e))];!a&&i&&(a=r[c=Lr(Xt(e))]),a&&Se(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Se(l,t,6,s)}}function ia(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const f=ia(l,e,!0);f&&(c=!0,ie(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(Z(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):ie(o,i),Z(t)&&r.set(t,o),o)}function Cr(t,e){return!t||!yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Xt(e))||W(t,e))}let ye=null,oa=null;function ar(t){const e=ye;return ye=t,oa=t&&t.type.__scopeId||null,e}function un(t,e=ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Si(-1);const i=ar(e);let o;try{o=t(...s)}finally{ar(i),r._d&&Si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ur(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:h,data:g,setupState:y,ctx:S,inheritAttrs:P}=t;let L,k;const M=ar(t);try{if(n.shapeFlag&4){const x=s||r;L=xe(f.call(x,x,h,i,y,g,S)),k=a}else{const x=e;L=xe(x.length>1?x(i,{attrs:a,slots:c,emit:l}):x(i,null)),k=e.props?a:kl(a)}}catch(x){gn.length=0,Rr(x,t,1),L=se(Rt)}let j=L;if(k&&P!==!1){const x=Object.keys(k),{shapeFlag:te}=j;x.length&&te&7&&(o&&x.some(Ss)&&(k=Nl(k,o)),j=zt(j,k))}return n.dirs&&(j=zt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,ar(M),L}const kl=t=>{let e;for(const n in t)(n==="class"||n==="style"||yr(n))&&((e||(e={}))[n]=t[n]);return e},Nl=(t,e)=>{const n={};for(const r in t)(!Ss(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Dl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?mi(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!Cr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?mi(r,o,l):!0:!!o;return!1}function mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cr(n,i))return!0}return!1}function Ml({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xl=t=>t.__isSuspense;function Ll(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Al(t)}const Kn={};function Yn(t,e,n){return aa(t,e,n)}function aa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var c;const a=qc()===((c=ae)==null?void 0:c.scope)?ae:null;let l,f=!1,h=!1;if(ue(t)?(l=()=>t.value,f=or(t)):Bt(t)?(l=()=>t,r=!0):F(t)?(h=!0,f=t.some(x=>Bt(x)||or(x)),l=()=>t.map(x=>{if(ue(x))return x.value;if(Bt(x))return Et(x);if($(x))return ut(x,a,2)})):$(t)?e?l=()=>ut(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Se(t,a,3,[y])}:l=Ce,e&&r){const x=l;l=()=>Et(x())}let g,y=x=>{g=M.onStop=()=>{ut(x,a,4)}},S;if(Rn)if(y=Ce,e?n&&Se(e,a,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const x=Ou();S=x.__watcherHandles||(x.__watcherHandles=[])}else return Ce;let P=h?new Array(t.length).fill(Kn):Kn;const L=()=>{if(!!M.active)if(e){const x=M.run();(r||f||(h?x.some((te,ne)=>bn(te,P[ne])):bn(x,P)))&&(g&&g(),Se(e,a,3,[x,P===Kn?void 0:h&&P[0]===Kn?[]:P,y]),P=x)}else M.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>pe(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),k=()=>Hs(L));const M=new Ms(l,k);e?n?L():P=M.run():s==="post"?pe(M.run.bind(M),a&&a.suspense):M.run();const j=()=>{M.stop(),a&&a.scope&&As(a.scope.effects,M)};return S&&S.push(j),j}function Ul(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?ca(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ae;qt(this);const c=aa(s,i.bind(r),n);return o?qt(o):wt(),c}function ca(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Et(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))Et(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Et(t[n],e);else if(Po(t)||Ft(t))t.forEach(n=>{Et(n,e)});else if(No(t))for(const n in t)Et(t[n],e);return t}function Kg(t,e){const n=ye;if(n===null)return t;const r=Or(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=Q]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&Et(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Qt(),Se(a,n,8,[t.el,c,t,e]),Zt())}}function la(t,e){return $(t)?(()=>ie({name:t.name},e,{setup:t}))():t}const Xn=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function Fl(t,e){fa(t,"a",e)}function Bl(t,e){fa(t,"da",e)}function fa(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ua(s.parent.vnode)&&$l(r,e,n,s),s=s.parent}}function $l(t,e,n,r){const s=Sr(e,t,r,!0);da(()=>{As(r[e],s)},n)}function Sr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qt(),qt(n);const c=Se(e,n,t,o);return wt(),Zt(),c});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=ae)=>(!Rn||t==="sp")&&Sr(t,(...r)=>e(...r),n),Hl=Je("bm"),jl=Je("m"),Wl=Je("bu"),Vl=Je("u"),Kl=Je("bum"),da=Je("um"),zl=Je("sp"),ql=Je("rtg"),Gl=Je("rtc");function Jl(t,e=ae){Sr("ec",t,e)}const ha="components";function _i(t,e){return Xl(ha,t,!0,e)||t}const Yl=Symbol.for("v-ndc");function Xl(t,e,n=!0,r=!1){const s=ye||ae;if(s){const i=s.type;if(t===ha){const c=Su(i,!1);if(c&&(c===e||c===$e(e)||c===Ir($e(e))))return i}const o=vi(s[t]||i[t],e)||vi(s.appContext[t],e);return!o&&r?i:o}}function vi(t,e){return t&&(t[e]||t[$e(e)]||t[Ir($e(e))])}const cs=t=>t?Ta(t)?Or(t)||t.proxy:cs(t.parent):null,pn=ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cs(t.parent),$root:t=>cs(t.root),$emit:t=>t.emit,$options:t=>js(t),$forceUpdate:t=>t.f||(t.f=()=>Hs(t.update)),$nextTick:t=>t.n||(t.n=ta.bind(t.proxy)),$watch:t=>Ul.bind(t)}),Fr=(t,e)=>t!==Q&&!t.__isScriptSetup&&W(t,e),Ql={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fr(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];ls&&(o[e]=0)}}const f=pn[e];let h,g;if(f)return e==="$attrs"&&ge(t,"get",e),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,W(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fr(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&W(t,o)||Fr(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(pn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ls=!0;function Zl(t){const e=js(t),n=t.proxy,r=t.ctx;ls=!1,e.beforeCreate&&bi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:g,beforeUpdate:y,updated:S,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:M,destroyed:j,unmounted:x,render:te,renderTracked:ne,renderTriggered:me,errorCaptured:be,serverPrefetch:Oe,expose:ve,inheritAttrs:Xe,components:gt,directives:ke,filters:sn}=e;if(l&&eu(l,r,null),o)for(const J in o){const K=o[J];$(K)&&(r[J]=K.bind(n))}if(s){const J=s.call(n,n);Z(J)&&(t.data=Tr(J))}if(ls=!0,i)for(const J in i){const K=i[J],He=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):Ce,Qe=!$(K)&&$(K.set)?K.set.bind(n):Ce,Ne=Te({get:He,set:Qe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:he=>Ne.value=he})}if(c)for(const J in c)pa(c[J],r,n,J);if(a){const J=$(a)?a.call(n):a;Reflect.ownKeys(J).forEach(K=>{Qn(K,J[K])})}f&&bi(f,t,"c");function re(J,K){F(K)?K.forEach(He=>J(He.bind(n))):K&&J(K.bind(n))}if(re(Hl,h),re(jl,g),re(Wl,y),re(Vl,S),re(Fl,P),re(Bl,L),re(Jl,be),re(Gl,ne),re(ql,me),re(Kl,M),re(da,x),re(zl,Oe),F(ve))if(ve.length){const J=t.exposed||(t.exposed={});ve.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:He=>n[K]=He})})}else t.exposed||(t.exposed={});te&&t.render===Ce&&(t.render=te),Xe!=null&&(t.inheritAttrs=Xe),gt&&(t.components=gt),ke&&(t.directives=ke)}function eu(t,e,n=Ce){F(t)&&(t=us(t));for(const r in t){const s=t[r];let i;Z(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bi(t,e,n){Se(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,r){const s=r.includes(".")?ca(n,r):()=>n[r];if(oe(t)){const i=e[t];$(i)&&Yn(s,i)}else if($(t))Yn(s,t.bind(n));else if(Z(t))if(F(t))t.forEach(i=>pa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Yn(s,i,t)}}function js(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>cr(a,l,o,!0)),cr(a,e,o)),Z(e)&&i.set(e,a),a}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=tu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const tu={data:Ei,props:Ii,emits:Ii,methods:fn,computed:fn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:fn,directives:fn,watch:ru,provide:Ei,inject:nu};function Ei(t,e){return e?t?function(){return ie($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function nu(t,e){return fn(us(t),us(e))}function us(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function fn(t,e){return t?ie(Object.create(null),t,e):e}function Ii(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ie(Object.create(null),yi(t),yi(e!=null?e:{})):e}function ru(t,e){if(!t)return e;if(!e)return t;const n=ie(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function ga(){return{app:null,config:{isNativeTag:Dc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function iu(t,e){return function(r,s=null){$(r)||(r=ie({},r)),s!=null&&!Z(s)&&(s=null);const i=ga(),o=new Set;let c=!1;const a=i.app={_uid:su++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ku,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...f)):$(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const g=se(r,s);return g.appContext=i,f&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Or(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){lr=a;try{return l()}finally{lr=null}}};return a}}let lr=null;function Qn(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=ae||ye;if(r||lr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:lr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function ou(t,e,n,r=!1){const s={},i={};ir(i,Pr,1),t.propsDefaults=Object.create(null),ma(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ko(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function au(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=V(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(Cr(t.emitsOptions,g))continue;const y=e[g];if(a)if(W(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const S=$e(g);s[S]=fs(a,c,S,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{ma(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!W(e,h)&&((f=Xt(h))===h||!W(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=fs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&qe(t,"set","$attrs")}function ma(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Gn(a))continue;const l=e[a];let f;s&&W(s,f=$e(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Cr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=V(n),l=c||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=fs(s,a,h,l[h],t,!W(l,h))}}return o}function fs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(qt(s),r=l[n]=a.call(null,e),wt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function _a(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const f=h=>{a=!0;const[g,y]=_a(h,e,!0);ie(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return Z(t)&&r.set(t,Ut),Ut;if(F(i))for(let f=0;f<i.length;f++){const h=$e(i[f]);wi(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=$e(f);if(wi(h)){const g=i[f],y=o[h]=F(g)||$(g)?{type:g}:ie({},g);if(y){const S=Ci(Boolean,y.type),P=Ci(String,y.type);y[0]=S>-1,y[1]=P<0||S<P,(S>-1||W(y,"default"))&&c.push(h)}}}const l=[o,c];return Z(t)&&r.set(t,l),l}function wi(t){return t[0]!=="$"}function Ti(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ri(t,e){return Ti(t)===Ti(e)}function Ci(t,e){return F(e)?e.findIndex(n=>Ri(n,t)):$(e)&&Ri(e,t)?0:-1}const va=t=>t[0]==="_"||t==="$stable",Ws=t=>F(t)?t.map(xe):[xe(t)],cu=(t,e,n)=>{if(e._n)return e;const r=un((...s)=>Ws(e(...s)),n);return r._c=!1,r},ya=(t,e,n)=>{const r=t._ctx;for(const s in t){if(va(s))continue;const i=t[s];if($(i))e[s]=cu(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},ba=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},lu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ir(e,"_",n)):ya(e,t.slots={})}else t.slots={},e&&ba(t,e);ir(t.slots,Pr,1)},uu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ie(s,e),!n&&c===1&&delete s._):(i=!e.$stable,ya(e,s)),o=e}else e&&(ba(t,e),o={default:1});if(i)for(const c in s)!va(c)&&!(c in o)&&delete s[c]};function ds(t,e,n,r,s=!1){if(F(t)){t.forEach((g,y)=>ds(g,e&&(F(e)?e[y]:e),n,r,s));return}if(Xn(r)&&!s)return;const i=r.shapeFlag&4?Or(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(oe(l)?(f[l]=null,W(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(a))ut(a,c,12,[o,f]);else{const g=oe(a),y=ue(a);if(g||y){const S=()=>{if(t.f){const P=g?W(h,a)?h[a]:f[a]:a.value;s?F(P)&&As(P,i):F(P)?P.includes(i)||P.push(i):g?(f[a]=[i],W(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else g?(f[a]=o,W(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,pe(S,n)):S()}}}const pe=Ll;function fu(t){return du(t)}function du(t,e){const n=ns();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:g,setScopeId:y=Ce,insertStaticContent:S}=t,P=(u,d,p,m=null,v=null,b=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!an(u,d)&&(m=_(u),he(u,v,b,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:A}=d;switch(E){case Ar:L(u,d,p,m);break;case Rt:k(u,d,p,m);break;case Br:u==null&&M(d,p,m,R);break;case Ve:gt(u,d,p,m,v,b,R,I,w);break;default:A&1?te(u,d,p,m,v,b,R,I,w):A&6?ke(u,d,p,m,v,b,R,I,w):(A&64||A&128)&&E.process(u,d,p,m,v,b,R,I,w,T)}N!=null&&v&&ds(N,u&&u.ref,b,d||u,!d)},L=(u,d,p,m)=>{if(u==null)r(d.el=c(d.children),p,m);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},k=(u,d,p,m)=>{u==null?r(d.el=a(d.children||""),p,m):d.el=u.el},M=(u,d,p,m)=>{[u.el,u.anchor]=S(u.children,d,p,m,u.el,u.anchor)},j=({el:u,anchor:d},p,m)=>{let v;for(;u&&u!==d;)v=g(u),r(u,p,m),u=v;r(d,p,m)},x=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),s(u),u=p;s(d)},te=(u,d,p,m,v,b,R,I,w)=>{R=R||d.type==="svg",u==null?ne(d,p,m,v,b,R,I,w):Oe(u,d,v,b,R,I,w)},ne=(u,d,p,m,v,b,R,I)=>{let w,E;const{type:N,props:A,shapeFlag:D,transition:B,dirs:H}=u;if(w=u.el=o(u.type,b,A&&A.is,A),D&8?f(w,u.children):D&16&&be(u.children,w,null,m,v,b&&N!=="foreignObject",R,I),H&&mt(u,null,m,"created"),me(w,u,u.scopeId,R,m),A){for(const G in A)G!=="value"&&!Gn(G)&&i(w,G,null,A[G],b,u.children,m,v,ce);"value"in A&&i(w,"value",null,A.value),(E=A.onVnodeBeforeMount)&&Me(E,m,u)}H&&mt(u,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;X&&B.beforeEnter(w),r(w,d,p),((E=A&&A.onVnodeMounted)||X||H)&&pe(()=>{E&&Me(E,m,u),X&&B.enter(w),H&&mt(u,null,m,"mounted")},v)},me=(u,d,p,m,v)=>{if(p&&y(u,p),m)for(let b=0;b<m.length;b++)y(u,m[b]);if(v){let b=v.subTree;if(d===b){const R=v.vnode;me(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},be=(u,d,p,m,v,b,R,I,w=0)=>{for(let E=w;E<u.length;E++){const N=u[E]=I?rt(u[E]):xe(u[E]);P(null,N,d,p,m,v,b,R,I)}},Oe=(u,d,p,m,v,b,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:N}=d;w|=u.patchFlag&16;const A=u.props||Q,D=d.props||Q;let B;p&&_t(p,!1),(B=D.onVnodeBeforeUpdate)&&Me(B,p,d,u),N&&mt(d,u,p,"beforeUpdate"),p&&_t(p,!0);const H=v&&d.type!=="foreignObject";if(E?ve(u.dynamicChildren,E,I,p,m,H,b):R||K(u,d,I,null,p,m,H,b,!1),w>0){if(w&16)Xe(I,d,A,D,p,m,v);else if(w&2&&A.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",A.style,D.style,v),w&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],Ee=A[ee],Nt=D[ee];(Nt!==Ee||ee==="value")&&i(I,ee,Ee,Nt,v,u.children,p,m,ce)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&E==null&&Xe(I,d,A,D,p,m,v);((B=D.onVnodeUpdated)||N)&&pe(()=>{B&&Me(B,p,d,u),N&&mt(d,u,p,"updated")},m)},ve=(u,d,p,m,v,b,R)=>{for(let I=0;I<d.length;I++){const w=u[I],E=d[I],N=w.el&&(w.type===Ve||!an(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,N,null,m,v,b,R,!0)}},Xe=(u,d,p,m,v,b,R)=>{if(p!==m){if(p!==Q)for(const I in p)!Gn(I)&&!(I in m)&&i(u,I,p[I],null,R,d.children,v,b,ce);for(const I in m){if(Gn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(u,I,E,w,R,d.children,v,b,ce)}"value"in m&&i(u,"value",p.value,m.value)}},gt=(u,d,p,m,v,b,R,I,w)=>{const E=d.el=u?u.el:c(""),N=d.anchor=u?u.anchor:c("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),u==null?(r(E,p,m),r(N,p,m),be(d.children,p,N,v,b,R,I,w)):A>0&&A&64&&D&&u.dynamicChildren?(ve(u.dynamicChildren,D,p,v,b,R,I),(d.key!=null||v&&d===v.subTree)&&Ea(u,d,!0)):K(u,d,p,N,v,b,R,I,w)},ke=(u,d,p,m,v,b,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,w):sn(d,p,m,v,b,R,w):Pt(u,d,w)},sn=(u,d,p,m,v,b,R)=>{const I=u.component=Iu(u,m,v);if(ua(u)&&(I.ctx.renderer=T),wu(I),I.asyncDep){if(v&&v.registerDep(I,re),!u.el){const w=I.subTree=se(Rt);k(null,w,d,p)}return}re(I,u,d,p,v,b,R)},Pt=(u,d,p)=>{const m=d.component=u.component;if(Dl(u,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,Sl(m.update),m.update();else d.el=u.el,m.vnode=d},re=(u,d,p,m,v,b,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:A,u:D,parent:B,vnode:H}=u,X=N,G;_t(u,!1),N?(N.el=H.el,J(u,N,R)):N=H,A&&Jn(A),(G=N.props&&N.props.onVnodeBeforeUpdate)&&Me(G,B,N,H),_t(u,!0);const ee=Ur(u),Ee=u.subTree;u.subTree=ee,P(Ee,ee,h(Ee.el),_(Ee),u,v,b),N.el=ee.el,X===null&&Ml(u,ee.el),D&&pe(D,v),(G=N.props&&N.props.onVnodeUpdated)&&pe(()=>Me(G,B,N,H),v)}else{let N;const{el:A,props:D}=d,{bm:B,m:H,parent:X}=u,G=Xn(d);if(_t(u,!1),B&&Jn(B),!G&&(N=D&&D.onVnodeBeforeMount)&&Me(N,X,d),_t(u,!0),A&&z){const ee=()=>{u.subTree=Ur(u),z(A,u.subTree,u,v,null)};G?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ee()):ee()}else{const ee=u.subTree=Ur(u);P(null,ee,p,m,u,v,b),d.el=ee.el}if(H&&pe(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;pe(()=>Me(N,X,ee),v)}(d.shapeFlag&256||X&&Xn(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&pe(u.a,v),u.isMounted=!0,d=p=m=null}},w=u.effect=new Ms(I,()=>Hs(E),u.scope),E=u.update=()=>w.run();E.id=u.uid,_t(u,!0),E()},J=(u,d,p)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,au(u,d.props,m,p),uu(u,d.children,p),Qt(),gi(),Zt()},K=(u,d,p,m,v,b,R,I,w=!1)=>{const E=u&&u.children,N=u?u.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){Qe(E,A,p,m,v,b,R,I,w);return}else if(D&256){He(E,A,p,m,v,b,R,I,w);return}}B&8?(N&16&&ce(E,v,b),A!==E&&f(p,A)):N&16?B&16?Qe(E,A,p,m,v,b,R,I,w):ce(E,v,b,!0):(N&8&&f(p,""),B&16&&be(A,p,m,v,b,R,I,w))},He=(u,d,p,m,v,b,R,I,w)=>{u=u||Ut,d=d||Ut;const E=u.length,N=d.length,A=Math.min(E,N);let D;for(D=0;D<A;D++){const B=d[D]=w?rt(d[D]):xe(d[D]);P(u[D],B,p,null,v,b,R,I,w)}E>N?ce(u,v,b,!0,!1,A):be(d,p,m,v,b,R,I,w,A)},Qe=(u,d,p,m,v,b,R,I,w)=>{let E=0;const N=d.length;let A=u.length-1,D=N-1;for(;E<=A&&E<=D;){const B=u[E],H=d[E]=w?rt(d[E]):xe(d[E]);if(an(B,H))P(B,H,p,null,v,b,R,I,w);else break;E++}for(;E<=A&&E<=D;){const B=u[A],H=d[D]=w?rt(d[D]):xe(d[D]);if(an(B,H))P(B,H,p,null,v,b,R,I,w);else break;A--,D--}if(E>A){if(E<=D){const B=D+1,H=B<N?d[B].el:m;for(;E<=D;)P(null,d[E]=w?rt(d[E]):xe(d[E]),p,H,v,b,R,I,w),E++}}else if(E>D)for(;E<=A;)he(u[E],v,b,!0),E++;else{const B=E,H=E,X=new Map;for(E=H;E<=D;E++){const _e=d[E]=w?rt(d[E]):xe(d[E]);_e.key!=null&&X.set(_e.key,E)}let G,ee=0;const Ee=D-H+1;let Nt=!1,si=0;const on=new Array(Ee);for(E=0;E<Ee;E++)on[E]=0;for(E=B;E<=A;E++){const _e=u[E];if(ee>=Ee){he(_e,v,b,!0);continue}let De;if(_e.key!=null)De=X.get(_e.key);else for(G=H;G<=D;G++)if(on[G-H]===0&&an(_e,d[G])){De=G;break}De===void 0?he(_e,v,b,!0):(on[De-H]=E+1,De>=si?si=De:Nt=!0,P(_e,d[De],p,null,v,b,R,I,w),ee++)}const ii=Nt?hu(on):Ut;for(G=ii.length-1,E=Ee-1;E>=0;E--){const _e=H+E,De=d[_e],oi=_e+1<N?d[_e+1].el:m;on[E]===0?P(null,De,p,oi,v,b,R,I,w):Nt&&(G<0||E!==ii[G]?Ne(De,p,oi,2):G--)}}},Ne=(u,d,p,m,v=null)=>{const{el:b,type:R,transition:I,children:w,shapeFlag:E}=u;if(E&6){Ne(u.component.subTree,d,p,m);return}if(E&128){u.suspense.move(d,p,m);return}if(E&64){R.move(u,d,p,T);return}if(R===Ve){r(b,d,p);for(let A=0;A<w.length;A++)Ne(w[A],d,p,m);r(u.anchor,d,p);return}if(R===Br){j(u,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),pe(()=>I.enter(b),v);else{const{leave:A,delayLeave:D,afterLeave:B}=I,H=()=>r(b,d,p),X=()=>{A(b,()=>{H(),B&&B()})};D?D(b,H,X):X()}else r(b,d,p)},he=(u,d,p,m=!1,v=!1)=>{const{type:b,props:R,ref:I,children:w,dynamicChildren:E,shapeFlag:N,patchFlag:A,dirs:D}=u;if(I!=null&&ds(I,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const B=N&1&&D,H=!Xn(u);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&Me(X,d,u),N&6)Bn(u.component,p,m);else{if(N&128){u.suspense.unmount(p,m);return}B&&mt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,T,m):E&&(b!==Ve||A>0&&A&64)?ce(E,d,p,!1,!0):(b===Ve&&A&384||!v&&N&16)&&ce(w,d,p),m&&Ot(u)}(H&&(X=R&&R.onVnodeUnmounted)||B)&&pe(()=>{X&&Me(X,d,u),B&&mt(u,null,d,"unmounted")},p)},Ot=u=>{const{type:d,el:p,anchor:m,transition:v}=u;if(d===Ve){kt(p,m);return}if(d===Br){x(u);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(p,b);I?I(u.el,b,w):w()}else b()},kt=(u,d)=>{let p;for(;u!==d;)p=g(u),s(u),u=p;s(d)},Bn=(u,d,p)=>{const{bum:m,scope:v,update:b,subTree:R,um:I}=u;m&&Jn(m),v.stop(),b&&(b.active=!1,he(R,u,d,p)),I&&pe(I,d),pe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ce=(u,d,p,m=!1,v=!1,b=0)=>{for(let R=b;R<u.length;R++)he(u[R],d,p,m,v)},_=u=>u.shapeFlag&6?_(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),C=(u,d,p)=>{u==null?d._vnode&&he(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,p),gi(),ra(),d._vnode=u},T={p:P,um:he,m:Ne,r:Ot,mt:sn,mc:be,pc:K,pbc:ve,n:_,o:t};let O,z;return e&&([O,z]=e(T)),{render:C,hydrate:O,createApp:iu(C,O)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ea(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=rt(s[i]),c.el=o.el),n||Ea(o,c)),c.type===Ar&&(c.el=o.el)}}function hu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pu=t=>t.__isTeleport,Ve=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Br=Symbol.for("v-stc"),gn=[];let Re=null;function Zn(t=!1){gn.push(Re=t?null:[])}function gu(){gn.pop(),Re=gn[gn.length-1]||null}let Tn=1;function Si(t){Tn+=t}function Ia(t){return t.dynamicChildren=Tn>0?Re||Ut:null,gu(),Tn>0&&Re&&Re.push(t),t}function $r(t,e,n,r,s,i){return Ia(mn(t,e,n,r,s,i,!0))}function mu(t,e,n,r,s){return Ia(se(t,e,n,r,s,!0))}function hs(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Pr="__vInternal",wa=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||ue(t)||$(t)?{i:ye,r:t,k:e,f:!!n}:t:null);function mn(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wa(e),ref:e&&er(e),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ye};return c?(Vs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),Tn>0&&!o&&Re&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Re.push(a),a}const se=_u;function _u(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yl)&&(t=Rt),hs(t)){const c=zt(t,e,!0);return n&&Vs(c,n),Tn>0&&!i&&Re&&(c.shapeFlag&6?Re[Re.indexOf(t)]=c:Re.push(c)),c.patchFlag|=-2,c}if(Au(t)&&(t=t.__vccOpts),e){e=vu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=Ns(c)),Z(a)&&(qo(a)&&!F(a)&&(a=ie({},a)),e.style=ks(a))}const o=oe(t)?1:xl(t)?128:pu(t)?64:Z(t)?4:$(t)?2:0;return mn(t,e,n,r,s,o,i,!0)}function vu(t){return t?qo(t)||Pr in t?ie({},t):t:null}function zt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?yu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wa(c),ref:e&&e.ref?n&&s?F(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nt(t=" ",e=0){return se(Ar,null,t,e)}function zg(t="",e=!1){return e?(Zn(),mu(Rt,null,t)):se(Rt,null,t)}function xe(t){return t==null||typeof t=="boolean"?se(Rt):F(t)?se(Ve,null,t.slice()):typeof t=="object"?rt(t):se(Ar,null,String(t))}function rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Vs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pr in e)?e._ctx=ye:s===3&&ye&&(ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ye},n=32):(e=String(e),r&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function yu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ns([e.class,r.class]));else if(s==="style")e.style=ks([e.style,r.style]);else if(yr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Me(t,e,n,r=null){Se(t,e,7,[n,r])}const bu=ga();let Eu=0;function Iu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||bu,i={uid:Eu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_a(r,s),emitsOptions:ia(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ol.bind(null,i),t.ce&&t.ce(i),i}let ae=null,Ks,Dt,Ai="__VUE_INSTANCE_SETTERS__";(Dt=ns()[Ai])||(Dt=ns()[Ai]=[]),Dt.push(t=>ae=t),Ks=t=>{Dt.length>1?Dt.forEach(e=>e(t)):Dt[0](t)};const qt=t=>{Ks(t),t.scope.on()},wt=()=>{ae&&ae.scope.off(),Ks(null)};function Ta(t){return t.vnode.shapeFlag&4}let Rn=!1;function wu(t,e=!1){Rn=e;const{props:n,children:r}=t.vnode,s=Ta(t);ou(t,n,s,e),lu(t,r);const i=s?Tu(t,e):void 0;return Rn=!1,i}function Tu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Go(new Proxy(t.ctx,Ql));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cu(t):null;qt(t),Qt();const i=ut(r,t,0,[t.props,s]);if(Zt(),wt(),Oo(i)){if(i.then(wt,wt),e)return i.then(o=>{Pi(t,o,e)}).catch(o=>{Rr(o,t,0)});t.asyncDep=i}else Pi(t,i,e)}else Ra(t,e)}function Pi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=Zo(e)),Ra(t,n)}let Oi;function Ra(t,e,n){const r=t.type;if(!t.render){if(!e&&Oi&&!r.render){const s=r.template||js(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ie(ie({isCustomElement:i,delimiters:c},o),a);r.render=Oi(s,l)}}t.render=r.render||Ce}qt(t),Qt(),Zl(t),Zt(),wt()}function Ru(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ge(t,"get","$attrs"),e[n]}}))}function Cu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ru(t)},slots:t.slots,emit:t.emit,expose:e}}function Or(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zo(Go(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pn)return pn[n](t)},has(e,n){return n in e||n in pn}}))}function Su(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Au(t){return $(t)&&"__vccOpts"in t}const Te=(t,e)=>Tl(t,e,Rn);function Ca(t,e,n){const r=arguments.length;return r===2?Z(e)&&!F(e)?hs(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hs(n)&&(n=[n]),se(t,e,n))}const Pu=Symbol.for("v-scx"),Ou=()=>Ue(Pu),ku="3.3.4",Nu="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,ki=bt&&bt.createElement("template"),Du={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(Nu,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ki.innerHTML=r?`<svg>${t}</svg>`:t;const c=ki.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xu(t,e,n){const r=t.style,s=oe(n);if(n&&!s){if(e&&!oe(e))for(const i in e)n[i]==null&&ps(r,i,"");for(const i in n)ps(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ni=/\s*!important$/;function ps(t,e,n){if(F(n))n.forEach(r=>ps(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Lu(t,e);Ni.test(n)?t.setProperty(Xt(r),n.replace(Ni,""),"important"):t[r]=n}}const Di=["Webkit","Moz","ms"],Hr={};function Lu(t,e){const n=Hr[e];if(n)return n;let r=$e(e);if(r!=="filter"&&r in t)return Hr[e]=r;r=Ir(r);for(let s=0;s<Di.length;s++){const i=Di[s]+r;if(i in t)return Hr[e]=i}return e}const Mi="http://www.w3.org/1999/xlink";function Uu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mi,e.slice(6,e.length)):t.setAttributeNS(Mi,e,n);else{const i=Vc(e);n==null||i&&!Do(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,f=n==null?"":n;l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Do(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Mt(t,e,n,r){t.addEventListener(e,n,r)}function Bu(t,e,n,r){t.removeEventListener(e,n,r)}function $u(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Hu(e);if(r){const l=i[e]=Vu(r,s);Mt(t,c,l,a)}else o&&(Bu(t,c,o,a),i[e]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function Hu(t){let e;if(xi.test(t)){e={};let r;for(;r=t.match(xi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}let jr=0;const ju=Promise.resolve(),Wu=()=>jr||(ju.then(()=>jr=0),jr=Date.now());function Vu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(Ku(r,n.value),e,5,[r])};return n.value=t,n.attached=Wu(),n}function Ku(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Li=/^on[a-z]/,zu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Mu(t,r,s):e==="style"?xu(t,n,r):yr(e)?Ss(e)||$u(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qu(t,e,r,s))?Fu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Uu(t,e,r,s))};function qu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Li.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Li.test(e)&&oe(n)?!1:e in t}const Ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Jn(e,n):e};function Gu(t){t.target.composing=!0}function Fi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ui(s);const i=r||s.props&&s.props.type==="number";Mt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ts(c)),t._assign(c)}),n&&Mt(t,"change",()=>{t.value=t.value.trim()}),e||(Mt(t,"compositionstart",Gu),Mt(t,"compositionend",Fi),Mt(t,"change",Fi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ui(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ts(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ju=ie({patchProp:zu},Du);let Bi;function Yu(){return Bi||(Bi=fu(Ju))}const Xu=(...t)=>{const e=Yu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qu(t){return oe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(g=64)),r.push(n[f],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new ef;const g=i<<2|c>>4;if(r.push(g),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tf=function(t){const e=Sa(t);return Aa.encodeByteArray(e,!0)},Pa=function(t){return tf(t).replace(/\./g,"")},Oa=function(t){try{return Aa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=()=>nf().__FIREBASE_DEFAULTS__,sf=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},of=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oa(t[1]);return e&&JSON.parse(e)},zs=()=>{try{return rf()||sf()||of()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},af=t=>{var e,n;return(n=(e=zs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ka=()=>{var t;return(t=zs())===null||t===void 0?void 0:t.config},Na=t=>{var e;return(e=zs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function uf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ff(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function df(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hf(){try{return typeof indexedDB=="object"}catch{return!1}}function pf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="FirebaseError";class pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gf,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mf(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new pt(s,c,r)}}function mf(t,e){return t.replace(_f,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _f=/\{\$([^}]+)}/g;function vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($i(i)&&$i(o)){if(!ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $i(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yf(t,e){const n=new bf(t,e);return n.subscribe.bind(n)}class bf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wr),s.error===void 0&&(s.error=Wr),s.complete===void 0&&(s.complete=Wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tf(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wf(t){return t===vt?void 0:t}function Tf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new If(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Cf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Sf=Y.INFO,Af={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Pf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Af[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=Sf,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Of=(t,e)=>e.some(n=>t instanceof n);let Hi,ji;function kf(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nf(){return ji||(ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ma=new WeakMap,gs=new WeakMap,xa=new WeakMap,Vr=new WeakMap,qs=new WeakMap;function Df(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ma.set(n,t)}).catch(()=>{}),qs.set(e,t),e}function Mf(t){if(gs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gs.set(t,e)}let ms={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xf(t){ms=t(ms)}function Lf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kr(this),e,...n);return xa.set(r,e.sort?e.sort():[e]),ft(r)}:Nf().includes(t)?function(...e){return t.apply(Kr(this),e),ft(Ma.get(this))}:function(...e){return ft(t.apply(Kr(this),e))}}function Uf(t){return typeof t=="function"?Lf(t):(t instanceof IDBTransaction&&Mf(t),Of(t,kf())?new Proxy(t,ms):t)}function ft(t){if(t instanceof IDBRequest)return Df(t);if(Vr.has(t))return Vr.get(t);const e=Uf(t);return e!==t&&(Vr.set(t,e),qs.set(e,t)),e}const Kr=t=>qs.get(t);function Ff(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ft(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ft(o.result),a.oldVersion,a.newVersion,ft(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Bf=["get","getKey","getAll","getAllKeys","count"],$f=["put","add","delete","clear"],zr=new Map;function Wi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zr.get(e))return zr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$f.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bf.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return zr.set(e,i),i}xf(t=>({...t,get:(e,n,r)=>Wi(e,n)||t.get(e,n,r),has:(e,n)=>!!Wi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _s="@firebase/app",Vi="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Da("@firebase/app"),Wf="@firebase/app-compat",Vf="@firebase/analytics-compat",Kf="@firebase/analytics",zf="@firebase/app-check-compat",qf="@firebase/app-check",Gf="@firebase/auth",Jf="@firebase/auth-compat",Yf="@firebase/database",Xf="@firebase/database-compat",Qf="@firebase/functions",Zf="@firebase/functions-compat",ed="@firebase/installations",td="@firebase/installations-compat",nd="@firebase/messaging",rd="@firebase/messaging-compat",sd="@firebase/performance",id="@firebase/performance-compat",od="@firebase/remote-config",ad="@firebase/remote-config-compat",cd="@firebase/storage",ld="@firebase/storage-compat",ud="@firebase/firestore",fd="@firebase/firestore-compat",dd="firebase",hd="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]",pd={[_s]:"fire-core",[Wf]:"fire-core-compat",[Kf]:"fire-analytics",[Vf]:"fire-analytics-compat",[qf]:"fire-app-check",[zf]:"fire-app-check-compat",[Gf]:"fire-auth",[Jf]:"fire-auth-compat",[Yf]:"fire-rtdb",[Xf]:"fire-rtdb-compat",[Qf]:"fire-fn",[Zf]:"fire-fn-compat",[ed]:"fire-iid",[td]:"fire-iid-compat",[nd]:"fire-fcm",[rd]:"fire-fcm-compat",[sd]:"fire-perf",[id]:"fire-perf-compat",[od]:"fire-rc",[ad]:"fire-rc-compat",[cd]:"fire-gcs",[ld]:"fire-gcs-compat",[ud]:"fire-fst",[fd]:"fire-fst-compat","fire-js":"fire-js",[dd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map,ys=new Map;function gd(t,e){try{t.container.addComponent(e)}catch(n){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(ys.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,t);for(const n of fr.values())gd(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new Nn("app","Firebase",md);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=hd;function Ua(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=ka()),!n)throw dt.create("no-options");const i=fr.get(s);if(i){if(ur(n,i.options)&&ur(r,i.config))return i;throw dt.create("duplicate-app",{appName:s})}const o=new Rf(s);for(const a of ys.values())o.addComponent(a);const c=new _d(n,r,o);return fr.set(s,c),c}function vd(t=vs){const e=fr.get(t);if(!e&&t===vs&&ka())return Ua();if(!e)throw dt.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let s=(r=pd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(c.join(" "));return}Cn(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="firebase-heartbeat-database",bd=1,Sn="firebase-heartbeat-store";let qr=null;function Fa(){return qr||(qr=Ff(yd,bd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sn)}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),qr}async function Ed(t){try{return await(await Fa()).transaction(Sn).objectStore(Sn).get(Ba(t))}catch(e){if(e instanceof pt)Ct.warn(e.message);else{const n=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(n.message)}}}async function Ki(t,e){try{const r=(await Fa()).transaction(Sn,"readwrite");await r.objectStore(Sn).put(e,Ba(t)),await r.done}catch(n){if(n instanceof pt)Ct.warn(n.message);else{const r=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ct.warn(r.message)}}}function Ba(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=1024,wd=30*24*60*60*1e3;class Td{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zi(),{heartbeatsToSend:n,unsentEntries:r}=Rd(this._heartbeatsCache.heartbeats),s=Pa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zi(){return new Date().toISOString().substring(0,10)}function Rd(t,e=Id){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hf()?pf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ed(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qi(t){return Pa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){Cn(new Gt("platform-logger",e=>new Hf(e),"PRIVATE")),Cn(new Gt("heartbeat",e=>new Td(e),"PRIVATE")),jt(_s,Vi,t),jt(_s,Vi,"esm2017"),jt("fire-js","")}Sd("");function Gs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ad=$a,Ha=new Nn("auth","Firebase",$a());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Da("@firebase/auth");function Pd(t,...e){dr.logLevel<=Y.WARN&&dr.warn(`Auth (${Mn}): ${t}`,...e)}function tr(t,...e){dr.logLevel<=Y.ERROR&&dr.error(`Auth (${Mn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,...e){throw Js(t,...e)}function Fe(t,...e){return Js(t,...e)}function Od(t,e,n){const r=Object.assign(Object.assign({},Ad()),{[e]:n});return new Nn("auth","Firebase",r).create(e,{appName:t.name})}function Js(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ha.create(t,...e)}function U(t,e,...n){if(!t)throw Js(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function Ge(t,e){t||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kd(){return Gi()==="http:"||Gi()==="https:"}function Gi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kd()||uf()||"connection"in navigator)?navigator.onLine:!0}function Dd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=lf()||ff()}get(){return Nd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new xn(3e4,6e4);function en(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tn(t,e,n,r,s={}){return Wa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Dn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ja.fetch()(Va(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Wa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Md),e);try{const s=new Ld(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw zn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw zn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Od(t,f,l);Ae(t,f)}}catch(s){if(s instanceof pt)throw s;Ae(t,"network-request-failed",{message:String(s)})}}async function Ln(t,e,n,r,s={}){const i=await tn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Va(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ys(t.config,s):`${t.config.apiScheme}://${s}`}class Ld{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),xd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(t,e){return tn(t,"POST","/v1/accounts:delete",e)}async function Fd(t,e){return tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bd(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Xs(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_n(Gr(s.auth_time)),issuedAtTime:_n(Gr(s.iat)),expirationTime:_n(Gr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gr(t){return Number(t)*1e3}function Xs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Oa(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $d(t){const e=Xs(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pt&&Hd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_n(this.lastLoginAt),this.creationTime=_n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await An(t,Fd(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kd(i.providerUserInfo):[],c=Vd(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ka(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Wd(t){const e=Ye(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vd(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kd(t){return t.map(e=>{var{providerId:n}=e,r=Gs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(t,e){const n=await Wa(t,{},async()=>{const r=Dn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Va(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ja.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):$d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Pn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ka(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await An(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bd(this,e)}reload(){return Wd(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await An(this,Ud(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:x,isAnonymous:te,providerData:ne,stsTokenManager:me}=n;U(j&&me,e,"internal-error");const be=Pn.fromJSON(this.name,me);U(typeof j=="string",e,"internal-error"),et(h,e.name),et(g,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof te=="boolean",e,"internal-error"),et(y,e.name),et(S,e.name),et(P,e.name),et(L,e.name),et(k,e.name),et(M,e.name);const Oe=new Tt({uid:j,auth:e,email:g,emailVerified:x,displayName:h,isAnonymous:te,photoURL:S,phoneNumber:y,tenantId:P,stsTokenManager:be,createdAt:k,lastLoginAt:M});return ne&&Array.isArray(ne)&&(Oe.providerData=ne.map(ve=>Object.assign({},ve))),L&&(Oe._redirectEventId=L),Oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Pn;s.updateFromServerResponse(n);const i=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=Ji.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ji.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}za.type="NONE";const Yi=za;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Wt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wt(ze(Yi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(Yi);const o=nr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Tt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Wt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ja(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xa(e))return"Blackberry";if(Qa(e))return"Webos";if(Qs(e))return"Safari";if((e.includes("chrome/")||Ga(e))&&!e.includes("edge/"))return"Chrome";if(Ya(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qa(t=fe()){return/firefox\//i.test(t)}function Qs(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ga(t=fe()){return/crios\//i.test(t)}function Ja(t=fe()){return/iemobile/i.test(t)}function Ya(t=fe()){return/android/i.test(t)}function Xa(t=fe()){return/blackberry/i.test(t)}function Qa(t=fe()){return/webos/i.test(t)}function kr(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qd(t=fe()){var e;return kr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gd(){return df()&&document.documentMode===10}function Za(t=fe()){return kr(t)||Ya(t)||Qa(t)||Xa(t)||/windows phone/i.test(t)||Ja(t)}function Jd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e=[]){let n;switch(t){case"Browser":n=Xi(fe());break;case"Worker":n=`${Xi(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mn}/${r}`}async function tc(t,e){return tn(t,"GET","/v2/recaptchaConfig",en(t,e))}function Qi(t){return t!==void 0&&t.enterprise!==void 0}class nc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Yd().appendChild(r)})}function Xd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qd="https://www.google.com/recaptcha/enterprise.js?render=",Zd="recaptcha-enterprise",eh="NO_RECAPTCHA";class sc{constructor(e){this.type=Zd,this.auth=nn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{tc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new nc(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Qi(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(eh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Qi(window.grecaptcha))s(c,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rc(Qd+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function pr(t,e,n,r=!1){const s=new sc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zi(this),this.idTokenSubscription=new Zi(this),this.beforeStateQueue=new th(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ha,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}async initializeRecaptchaConfig(){const e=await tc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new sc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Wt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nn(t){return Ye(t)}class Zi{constructor(e){this.auth=e,this.observer=null,this.addObserver=yf(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ur(i,e!=null?e:{}))return s;Ae(s,"already-initialized")}return n.initialize({options:e})}function sh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ic(t,e,n){const r=nn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=oc(e),{host:o,port:c}=ih(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||oh()}function oc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ih(t){const e=oc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:eo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:eo(o)}}}function eo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function ah(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return Ln(t,"POST","/v1/accounts:signInWithPassword",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(t,e){return Ln(t,"POST","/v1/accounts:signInWithEmailLink",en(t,e))}async function lh(t,e){return Ln(t,"POST","/v1/accounts:signInWithEmailLink",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Zs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new On(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new On(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await pr(e,r,"signInWithPassword");return Jr(e,s)}else return Jr(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await pr(e,r,"signInWithPassword");return Jr(e,i)}else return Promise.reject(s)});case"emailLink":return ch(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ah(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lh(e,{idToken:n,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t,e){return Ln(t,"POST","/v1/accounts:signInWithIdp",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="http://localhost";class St extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new St(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vt(e,n)}buildRequest(){const e={requestUri:uh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dh(t){const e=dn(hn(t)).link,n=e?dn(hn(e)).deep_link_id:null,r=dn(hn(t)).deep_link_id;return(r?dn(hn(r)).link:null)||r||n||e||t}class ei{constructor(e){var n,r,s,i,o,c;const a=dn(hn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=fh((s=a.mode)!==null&&s!==void 0?s:null);U(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=dh(e);try{return new ei(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(e,n){return On._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ei.parseLink(n);return U(r,"argument-error"),On._fromEmailAndCode(e,r.code,r.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Un{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Un{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Un{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return Ln(t,"POST","/v1/accounts:signUp",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=to(r);return new At({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=to(r);return new At({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function to(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends pt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gr(e,n,r,s)}}function cc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,i,e,r):i})}async function hh(t,e,n=!1){const r=await An(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ph(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await An(t,cc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Xs(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),At._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t,e,n=!1){const r="signIn",s=await cc(t,r,e),i=await At._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gh(t,e){return lc(nn(t),e)}async function Gg(t,e,n){var r;const s=nn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await pr(s,i,"signUpPassword");o=Yr(s,l)}else o=Yr(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await pr(s,i,"signUpPassword");return Yr(s,f)}else return Promise.reject(l)});const c=await o.catch(l=>Promise.reject(l)),a=await At._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(a.user),a}function Jg(t,e,n){return gh(Ye(t),rn.credential(e,n))}function mh(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function _h(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function vh(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function yh(t){return Ye(t).signOut()}const mr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){const t=fe();return Qs(t)||kr(t)}const Eh=1e3,Ih=10;class fc extends uc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bh()&&Jd(),this.fallbackToPolling=Za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ih):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Eh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fc.type="LOCAL";const wh=fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends uc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dc.type="SESSION";const hc=dc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Th(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ti("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}function Ch(t){Be().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return typeof Be().WorkerGlobalScope!="undefined"&&typeof Be().importScripts=="function"}async function Sh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ah(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ph(){return pc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="firebaseLocalStorageDb",Oh=1,_r="firebaseLocalStorage",mc="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function kh(){const t=indexedDB.deleteDatabase(gc);return new Fn(t).toPromise()}function Es(){const t=indexedDB.open(gc,Oh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_r,{keyPath:mc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_r)?e(r):(r.close(),await kh(),e(await Es()))})})}async function no(t,e,n){const r=Dr(t,!0).put({[mc]:e,value:n});return new Fn(r).toPromise()}async function Nh(t,e){const n=Dr(t,!1).get(e),r=await new Fn(n).toPromise();return r===void 0?null:r.value}function ro(t,e){const n=Dr(t,!0).delete(e);return new Fn(n).toPromise()}const Dh=800,Mh=3;class _c{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Es(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nr._getInstance(Ph()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sh(),!this.activeServiceWorker)return;this.sender=new Rh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ah()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Es();return await no(e,mr,"1"),await ro(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>no(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Dr(s,!1).getAll();return new Fn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_c.type="LOCAL";const xh=_c;new xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t,e){return e?ze(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uh(t){return lc(t.auth,new ni(t),t.bypassAuthState)}function Fh(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ph(n,new ni(t),t.bypassAuthState)}async function Bh(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),hh(n,new ni(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uh;case"linkViaPopup":case"linkViaRedirect":return Bh;case"reauthViaPopup":case"reauthViaRedirect":return Fh;default:Ae(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new xn(2e3,1e4);class Lt extends vc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$h.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="pendingRedirect",rr=new Map;class jh extends vc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await Wh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wh(t,e){const n=zh(e),r=Kh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vh(t,e){rr.set(t._key(),e)}function Kh(t){return ze(t._redirectPersistence)}function zh(t){return nr(Hh,t.config.apiKey,t.name)}async function qh(t,e,n=!1){const r=nn(t),s=Lh(r,e),o=await new jh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=10*60*1e3;class Jh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gh&&this.cachedEventUids.clear(),this.cachedEventUids.has(so(e))}saveEventToCache(e){this.cachedEventUids.add(so(e)),this.lastProcessedEventTime=Date.now()}}function so(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e={}){return tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zh=/^https?/;async function ep(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xh(t);for(const n of e)try{if(tp(n))return}catch{}Ae(t,"unauthorized-domain")}function tp(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zh.test(n))return!1;if(Qh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new xn(3e4,6e4);function io(){const t=Be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rp(t){return new Promise((e,n)=>{var r,s,i;function o(){io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{io(),n(Fe(t,"network-request-failed"))},timeout:np.get()})}if(!((s=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Be().gapi)===null||i===void 0)&&i.load)o();else{const c=Xd("iframefcb");return Be()[c]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},rc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw sr=null,e})}let sr=null;function sp(t){return sr=sr||rp(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new xn(5e3,15e3),op="__/auth/iframe",ap="emulator/auth/iframe",cp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function up(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ys(e,ap):`https://${t.config.authDomain}/${op}`,r={apiKey:e.apiKey,appName:t.name,v:Mn},s=lp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Dn(r).slice(1)}`}async function fp(t){const e=await sp(t),n=Be().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:up(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),c=Be().setTimeout(()=>{i(o)},ip.get());function a(){Be().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hp=500,pp=600,gp="_blank",mp="http://localhost";class oo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _p(t,e,n,r=hp,s=pp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},dp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(c=Ga(l)?gp:n),qa(l)&&(e=e||mp,a.scrollbars="yes");const f=Object.entries(a).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(qd(l)&&c!=="_self")return vp(e||"",c),new oo(null);const h=window.open(e||"",c,f);U(h,t,"popup-blocked");try{h.focus()}catch{}return new oo(h)}function vp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="__/auth/handler",bp="emulator/auth/handler",Ep=encodeURIComponent("fac");async function ao(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mn,eventId:s};if(e instanceof ac){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Un){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${Ep}=${encodeURIComponent(a)}`:"";return`${Ip(t)}?${Dn(c).slice(1)}${l}`}function Ip({config:t}){return t.emulator?Ys(t,bp):`https://${t.authDomain}/${yp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="webStorageSupport";class wp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hc,this._completeRedirectFn=qh,this._overrideRedirectResult=Vh}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ao(e,n,r,bs(),s);return _p(e,o,ti())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ao(e,n,r,bs(),s);return Ch(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fp(e),r=new Jh(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xr,{type:Xr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xr];o!==void 0&&n(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ep(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Za()||Qs()||kr()}}const Tp=wp;var co="@firebase/auth",lo="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sp(t){Cn(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ec(t)},l=new nh(r,s,i,a);return sh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Gt("auth-internal",e=>{const n=nn(e.getProvider("auth").getImmediate());return(r=>new Rp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(co,lo,Cp(t)),jt(co,lo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=5*60,Pp=Na("authIdTokenMaxAge")||Ap;let uo=null;const Op=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pp)return;const s=n==null?void 0:n.token;uo!==s&&(uo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Is(t=vd()){const e=La(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rh(t,{popupRedirectResolver:Tp,persistence:[xh,wh,hc]}),r=Na("authTokenSyncURL");if(r){const i=Op(r);_h(n,i,()=>i(n.currentUser)),mh(n,o=>i(o))}const s=af("auth");return s&&ic(n,`http://${s}`),n}Sp("Browser");/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window!="undefined";function kp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Qr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pe(s)?s.map(t):t(s)}return n}const vn=()=>{},Pe=Array.isArray,Np=/\/$/,Dp=t=>t.replace(Np,"");function Zr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Up(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Mp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jt(e.matched[r],n.matched[s])&&bc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lp(t[n],e[n]))return!1;return!0}function Lp(t,e){return Pe(t)?ho(t,e):Pe(e)?ho(e,t):t===e}function ho(t,e){return Pe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Up(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var kn;(function(t){t.pop="pop",t.push="push"})(kn||(kn={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function Fp(t){if(!t)if(xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dp(t)}const Bp=/^[^#]+#/;function $p(t,e){return t.replace(Bp,"#")+e}function Hp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function jp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function po(t,e){return(history.state?history.state.position-e:-1)+t}const ws=new Map;function Wp(t,e){ws.set(t,e)}function Vp(t){const e=ws.get(t);return ws.delete(t),e}let Kp=()=>location.protocol+"//"+location.host;function Ec(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),fo(a,"")}return fo(n,t)+r+s}function zp(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Ec(t,location),S=n.value,P=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===S){o=null;return}L=P?g.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,S,{delta:L,type:kn.pop,direction:L?L>0?yn.forward:yn.back:yn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const y=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(y),y}function f(){const{history:g}=window;!g.state||g.replaceState(q({},g.state,{scroll:Mr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function go(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mr():null}}function qp(t){const{history:e,location:n}=window,r={value:Ec(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Kp()+t+a;try{e[f?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(a,l){const f=q({},e.state,go(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=q({},s.value,e.state,{forward:a,scroll:Mr()});i(f.current,f,!0);const h=q({},go(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Gp(t){t=Fp(t);const e=qp(t),n=zp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:$p.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Jp(t){return typeof t=="string"||t&&typeof t=="object"}function Ic(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wc=Symbol("");var mo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mo||(mo={}));function Yt(t,e){return q(new Error,{type:t,[wc]:!0},e)}function je(t,e){return t instanceof Error&&wc in t&&(e==null||!!(t.type&e))}const _o="[^/]+?",Yp={sensitive:!1,strict:!1,start:!0,end:!0},Xp=/[.+*?^${}()[\]/\\]/g;function Qp(t,e){const n=q({},Yp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Xp,"\\$&"),y+=40;else if(g.type===1){const{value:S,repeatable:P,optional:L,regexp:k}=g;i.push({name:S,repeatable:P,optional:L});const M=k||_o;if(M!==_o){y+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+x.message)}}let j=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(j=L&&l.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,y+=20,L&&(y+=-8),P&&(y+=-20),M===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",S=i[g-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function a(l){let f="",h=!1;for(const g of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of g)if(y.type===0)f+=y.value;else if(y.type===1){const{value:S,repeatable:P,optional:L}=y,k=S in l?l[S]:"";if(Pe(k)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const M=Pe(k)?k.join("/"):k;if(!M)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Zp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Zp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vo(r))return 1;if(vo(s))return-1}return s.length-r.length}function vo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tg={type:0,value:""},ng=/[a-zA-Z0-9_]/;function rg(t){if(!t)return[[]];if(t==="/")return[[tg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:ng.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function sg(t,e,n){const r=Qp(rg(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ig(t,e){const n=[],r=new Map;e=Eo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const y=!g,S=og(f);S.aliasOf=g&&g.record;const P=Eo(e,f),L=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of j)L.push(q({},S,{components:g?g.record.components:S.components,path:x,aliasOf:g?g.record:S}))}let k,M;for(const j of L){const{path:x}=j;if(h&&x[0]!=="/"){const te=h.record.path,ne=te[te.length-1]==="/"?"":"/";j.path=h.record.path+(x&&ne+x)}if(k=sg(j,h,P),g?g.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),y&&f.name&&!bo(k)&&o(f.name)),S.children){const te=S.children;for(let ne=0;ne<te.length;ne++)i(te[ne],k,g&&g.children[ne])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return M?()=>{o(M)}:vn}function o(f){if(Ic(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&eg(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Tc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!bo(f)&&r.set(f.record.name,f)}function l(f,h){let g,y={},S,P;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Yt(1,{location:f});P=g.record.name,y=q(yo(h.params,g.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&yo(f.params,g.keys.map(M=>M.name))),S=g.stringify(y)}else if("path"in f)S=f.path,g=n.find(M=>M.re.test(S)),g&&(y=g.parse(S),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw Yt(1,{location:f,currentLocation:h});P=g.record.name,y=q({},h.params,f.params),S=g.stringify(y)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:S,params:y,matched:L,meta:cg(L)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function yo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function og(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ag(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ag(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function bo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cg(t){return t.reduce((e,n)=>q(e,n.meta),{})}function Eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tc(t,e){return e.children.some(n=>n===t||Tc(t,n))}const Rc=/#/g,lg=/&/g,ug=/\//g,fg=/=/g,dg=/\?/g,Cc=/\+/g,hg=/%5B/g,pg=/%5D/g,Sc=/%5E/g,gg=/%60/g,Ac=/%7B/g,mg=/%7C/g,Pc=/%7D/g,_g=/%20/g;function ri(t){return encodeURI(""+t).replace(mg,"|").replace(hg,"[").replace(pg,"]")}function vg(t){return ri(t).replace(Ac,"{").replace(Pc,"}").replace(Sc,"^")}function Ts(t){return ri(t).replace(Cc,"%2B").replace(_g,"+").replace(Rc,"%23").replace(lg,"%26").replace(gg,"`").replace(Ac,"{").replace(Pc,"}").replace(Sc,"^")}function yg(t){return Ts(t).replace(fg,"%3D")}function bg(t){return ri(t).replace(Rc,"%23").replace(dg,"%3F")}function Eg(t){return t==null?"":bg(t).replace(ug,"%2F")}function vr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ig(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cc," "),o=i.indexOf("="),c=vr(o<0?i:i.slice(0,o)),a=o<0?null:vr(i.slice(o+1));if(c in e){let l=e[c];Pe(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Io(t){let e="";for(let n in t){const r=t[n];if(n=yg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pe(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Tg=Symbol(""),wo=Symbol(""),xr=Symbol(""),Oc=Symbol(""),Rs=Symbol("");function cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function st(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Yt(4,{from:n,to:e})):h instanceof Error?c(h):Jp(h)?c(Yt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(h=>c(h))})}function es(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rg(c)){const l=(c.__vccOpts||c)[e];l&&s.push(st(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=kp(l)?l.default:l;i.components[o]=f;const g=(f.__vccOpts||f)[e];return g&&st(g,n,r,i,o)()}))}}return s}function Rg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function To(t){const e=Ue(xr),n=Ue(Oc),r=Te(()=>e.resolve($t(t.to))),s=Te(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const g=h.findIndex(Jt.bind(null,f));if(g>-1)return g;const y=Ro(a[l-2]);return l>1&&Ro(f)===y&&h[h.length-1].path!==y?h.findIndex(Jt.bind(null,a[l-2])):g}),i=Te(()=>s.value>-1&&Pg(n.params,r.value.params)),o=Te(()=>s.value>-1&&s.value===n.matched.length-1&&bc(n.params,r.value.params));function c(a={}){return Ag(a)?e[$t(t.replace)?"replace":"push"]($t(t.to)).catch(vn):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Cg=la({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:To,setup(t,{slots:e}){const n=Tr(To(t)),{options:r}=Ue(xr),s=Te(()=>({[Co(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Co(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ca("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Sg=Cg;function Ag(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ro(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Co=(t,e,n)=>t!=null?t:e!=null?e:n,Og=la({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(Rs),s=Te(()=>t.route||r.value),i=Ue(wo,0),o=Te(()=>{let l=$t(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=Te(()=>s.value.matched[o.value]);Qn(wo,Te(()=>o.value+1)),Qn(Tg,c),Qn(Rs,s);const a=Xo();return Yn(()=>[a.value,c.value,t.name],([l,f,h],[g,y,S])=>{f&&(f.instances[h]=l,y&&y!==f&&l&&l===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),l&&f&&(!y||!Jt(f,y)||!g)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,g=h&&h.components[f];if(!g)return So(n.default,{Component:g,route:l});const y=h.props[f],S=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=Ca(g,q({},S,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return So(n.default,{Component:L,route:l})||L}}});function So(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kg=Og;function Ng(t){const e=ig(t.routes,t),n=t.parseQuery||Ig,r=t.stringifyQuery||Io,s=t.history,i=cn(),o=cn(),c=cn(),a=bl(tt);let l=tt;xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Qr.bind(null,_=>""+_),h=Qr.bind(null,Eg),g=Qr.bind(null,vr);function y(_,C){let T,O;return Ic(_)?(T=e.getRecordMatcher(_),O=C):O=_,e.addRoute(O,T)}function S(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function k(_,C){if(C=q({},C||a.value),typeof _=="string"){const p=Zr(n,_,C.path),m=e.resolve({path:p.path},C),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:vr(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Zr(n,_.path,C.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),C.params=h(C.params)}const O=e.resolve(T,C),z=_.hash||"";O.params=f(g(O.params));const u=Mp(r,q({},_,{hash:vg(z),path:O.path})),d=s.createHref(u);return q({fullPath:u,hash:z,query:r===Io?wg(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function M(_){return typeof _=="string"?Zr(n,_,a.value.path):q({},_)}function j(_,C){if(l!==_)return Yt(8,{from:C,to:_})}function x(_){return me(_)}function te(_){return x(q(M(_),{replace:!0}))}function ne(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function me(_,C){const T=l=k(_),O=a.value,z=_.state,u=_.force,d=_.replace===!0,p=ne(T);if(p)return me(q(M(p),{state:typeof p=="object"?q({},z,p.state):z,force:u,replace:d}),C||T);const m=T;m.redirectedFrom=C;let v;return!u&&xp(r,O,T)&&(v=Yt(16,{to:m,from:O}),Ne(O,O,!0,!1)),(v?Promise.resolve(v):ve(m,O)).catch(b=>je(b)?je(b,2)?b:Qe(b):K(b,m,O)).then(b=>{if(b){if(je(b,2))return me(q({replace:d},M(b.to),{state:typeof b.to=="object"?q({},z,b.to.state):z,force:u}),C||m)}else b=gt(m,O,!0,d,z);return Xe(m,O,b),b})}function be(_,C){const T=j(_,C);return T?Promise.reject(T):Promise.resolve()}function Oe(_){const C=kt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(_):_()}function ve(_,C){let T;const[O,z,u]=Dg(_,C);T=es(O.reverse(),"beforeRouteLeave",_,C);for(const p of O)p.leaveGuards.forEach(m=>{T.push(st(m,_,C))});const d=be.bind(null,_,C);return T.push(d),ce(T).then(()=>{T=[];for(const p of i.list())T.push(st(p,_,C));return T.push(d),ce(T)}).then(()=>{T=es(z,"beforeRouteUpdate",_,C);for(const p of z)p.updateGuards.forEach(m=>{T.push(st(m,_,C))});return T.push(d),ce(T)}).then(()=>{T=[];for(const p of u)if(p.beforeEnter)if(Pe(p.beforeEnter))for(const m of p.beforeEnter)T.push(st(m,_,C));else T.push(st(p.beforeEnter,_,C));return T.push(d),ce(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=es(u,"beforeRouteEnter",_,C),T.push(d),ce(T))).then(()=>{T=[];for(const p of o.list())T.push(st(p,_,C));return T.push(d),ce(T)}).catch(p=>je(p,8)?p:Promise.reject(p))}function Xe(_,C,T){c.list().forEach(O=>Oe(()=>O(_,C,T)))}function gt(_,C,T,O,z){const u=j(_,C);if(u)return u;const d=C===tt,p=xt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},z)):s.push(_.fullPath,z)),a.value=_,Ne(_,C,T,d),Qe()}let ke;function sn(){ke||(ke=s.listen((_,C,T)=>{if(!Bn.listening)return;const O=k(_),z=ne(O);if(z){me(q(z,{replace:!0}),O).catch(vn);return}l=O;const u=a.value;xt&&Wp(po(u.fullPath,T.delta),Mr()),ve(O,u).catch(d=>je(d,12)?d:je(d,2)?(me(d.to,O).then(p=>{je(p,20)&&!T.delta&&T.type===kn.pop&&s.go(-1,!1)}).catch(vn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),K(d,O,u))).then(d=>{d=d||gt(O,u,!1),d&&(T.delta&&!je(d,8)?s.go(-T.delta,!1):T.type===kn.pop&&je(d,20)&&s.go(-1,!1)),Xe(O,u,d)}).catch(vn)}))}let Pt=cn(),re=cn(),J;function K(_,C,T){Qe(_);const O=re.list();return O.length?O.forEach(z=>z(_,C,T)):console.error(_),Promise.reject(_)}function He(){return J&&a.value!==tt?Promise.resolve():new Promise((_,C)=>{Pt.add([_,C])})}function Qe(_){return J||(J=!_,sn(),Pt.list().forEach(([C,T])=>_?T(_):C()),Pt.reset()),_}function Ne(_,C,T,O){const{scrollBehavior:z}=t;if(!xt||!z)return Promise.resolve();const u=!T&&Vp(po(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return ta().then(()=>z(_,C,u)).then(d=>d&&jp(d)).catch(d=>K(d,_,C))}const he=_=>s.go(_);let Ot;const kt=new Set,Bn={currentRoute:a,listening:!0,addRoute:y,removeRoute:S,hasRoute:L,getRoutes:P,resolve:k,options:t,push:x,replace:te,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:He,install(_){const C=this;_.component("RouterLink",Sg),_.component("RouterView",kg),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(a)}),xt&&!Ot&&a.value===tt&&(Ot=!0,x(s.location).catch(z=>{}));const T={};for(const z in tt)Object.defineProperty(T,z,{get:()=>a.value[z],enumerable:!0});_.provide(xr,C),_.provide(Oc,Ko(T)),_.provide(Rs,a);const O=_.unmount;kt.add(_),_.unmount=function(){kt.delete(_),kt.size<1&&(l=tt,ke&&ke(),ke=null,a.value=tt,Ot=!1,J=!1),O()}}};function ce(_){return _.reduce((C,T)=>C.then(()=>Oe(T)),Promise.resolve())}return Bn}function Dg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Jt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Jt(l,a))||s.push(a))}return[n,r,s]}function Mg(){return Ue(xr)}const xg={key:0},Lg={key:1},Ug={__name:"App",setup(t){const e=Mg(),n=Xo(!0);vh(Is(),function(s){s?n.value=!0:n.value=!1});const r=()=>{yh(Is()),e.push("/")};return(s,i)=>{const o=_i("router-link"),c=_i("router-view");return Zn(),$r("div",null,[mn("nav",null,[se(o,{to:"/"},{default:un(()=>[nt(" Home ")]),_:1}),nt(" | "),mn("span",null,[se(o,{to:"/feed"},{default:un(()=>[nt(" Feed ")]),_:1}),nt(" | ")]),n.value?(Zn(),$r("span",xg,[mn("button",{onClick:r}," Logout ")])):(Zn(),$r("span",Lg,[se(o,{to:"/register"},{default:un(()=>[nt(" Register ")]),_:1}),nt(" | "),se(o,{to:"/sign-in"},{default:un(()=>[nt(" Login ")]),_:1})]))]),se(c)])}}},Fg="modulepreload",Ao={},Bg="/firebase-auth/",qn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Bg}${r}`,r in Ao)return;Ao[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Fg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},$g=Ng({history:Gp(),routes:[{path:"/",component:()=>qn(()=>import("./Home.113116d5.js"),[])},{path:"/register",component:()=>qn(()=>import("./Register.e67d48a1.js"),[])},{path:"/sign-in",component:()=>qn(()=>import("./SignIn.1e21654d.js"),[])},{path:"/feed",component:()=>qn(()=>import("./Feed.bb6ca782.js"),[])}]});var Hg="firebase",jg="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(Hg,jg,"app");const Wg={apiKey:"AIzaSyCADDPZK38h6kXH87DX54hCMRDPPsFgQdM",authDomain:"vue-firestore-yarn.firebaseapp.com",projectId:"vue-firestore-yarn",storageBucket:"vue-firestore-yarn.appspot.com",messagingSenderId:"606075661395",appId:"1:606075661395:web:309af8b5f96980d457aaa6",measurementId:"G-KGJGH9SD9E"};Ua(Wg);location.hostname==="localhost"&&ic(Is(),"http://localhost:9099");const kc=Xu(Ug);kc.use($g);kc.mount("#app");export{Ve as F,mn as a,Gg as b,$r as c,zg as d,vh as e,Kl as f,Is as g,Zn as o,Xo as r,Jg as s,Vg as t,Mg as u,qg as v,Kg as w};
