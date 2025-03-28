import{$ as y,a as h}from"./chain-Z-ySmOka.js";import{r as f,e as i}from"./index-KmaxkdDD.js";function x(e){const t=f.useRef(null);return y(()=>{t.current=e},[e]),f.useCallback((...r)=>{const n=t.current;return n==null?void 0:n(...r)},[])}function C(e){let[t,r]=f.useState(e),n=f.useRef(null),l=x(()=>{if(!n.current)return;let u=n.current.next();if(u.done){n.current=null;return}t===u.value?l():r(u.value)});y(()=>{n.current&&l()});let a=x(u=>{n.current=u(t),l()});return[t,a]}const b={prefix:String(Math.round(Math.random()*1e10)),current:0},v=i.createContext(b),w=i.createContext(!1);let M=!!(typeof window<"u"&&window.document&&window.document.createElement),p=new WeakMap;function k(e=!1){let t=f.useContext(v),r=f.useRef(null);if(r.current===null&&!e){var n,l;let a=(l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||l===void 0||(n=l.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(a){let u=p.get(a);u==null?p.set(a,{id:t.current,state:a.memoizedState}):a.memoizedState!==u.state&&(t.current=u.id,p.delete(a))}r.current=++t.current}return r.current}function I(e){let t=f.useContext(v);t===b&&!M&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=k(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function j(e){let t=i.useId(),[r]=f.useState(H()),n=r?"react-aria":`react-aria${b.prefix}`;return e||`${n}-${t}`}const V=typeof i.useId=="function"?j:I;function z(){return!1}function P(){return!0}function q(e){return()=>{}}function H(){return typeof i.useSyncExternalStore=="function"?i.useSyncExternalStore(q,z,P):f.useContext(w)}let K=!!(typeof window<"u"&&window.document&&window.document.createElement),$=new Map,m=new FinalizationRegistry(e=>{$.delete(e)});function N(e){let[t,r]=f.useState(e),n=f.useRef(null),l=V(t),a=f.useRef(null);if(m.register(a,l),K){const u=$.get(l);u&&!u.includes(n)?u.push(n):$.set(l,[n])}return y(()=>{let u=l;return()=>{m.unregister(a),$.delete(u)}},[l]),f.useEffect(()=>{let u=n.current;return u&&r(u),()=>{u&&(n.current=null)}}),l}function R(e,t){if(e===t)return e;let r=$.get(e);if(r)return r.forEach(l=>l.current=t),t;let n=$.get(t);return n?(n.forEach(l=>l.current=e),e):t}function B(e=[]){let t=N(),[r,n]=C(t),l=f.useCallback(()=>{n(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,n]);return y(l,[t,l,...e]),r}function S(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(r=S(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function A(){for(var e,t,r=0,n="",l=arguments.length;r<l;r++)(e=arguments[r])&&(t=S(e))&&(n&&(n+=" "),n+=t);return n}function F(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let l in n){let a=t[l],u=n[l];typeof a=="function"&&typeof u=="function"&&l[0]==="o"&&l[1]==="n"&&l.charCodeAt(2)>=65&&l.charCodeAt(2)<=90?t[l]=h(a,u):(l==="className"||l==="UNSAFE_className")&&typeof a=="string"&&typeof u=="string"?t[l]=A(a,u):l==="id"&&a&&u?t.id=R(a,u):t[l]=u!==void 0?u:a}}return t}function G(...e){return e.length===1&&e[0]?e[0]:t=>{for(let r of e)typeof r=="function"?r(t):r!=null&&(r.current=t)}}function J(e){const t=f.useRef(null);return f.useMemo(()=>({get current(){return t.current},set current(r){t.current=r,typeof e=="function"?e(r):e&&(e.current=r)}}),[e])}const Q=Symbol("default");function U({values:e,children:t}){for(let[r,n]of e)t=i.createElement(r.Provider,{value:n},t);return t}function Y(e){let{className:t,style:r,children:n,defaultClassName:l,defaultChildren:a,defaultStyle:u,values:s}=e;return f.useMemo(()=>{let o,d,c;return typeof t=="function"?o=t({...s,defaultClassName:l}):o=t,typeof r=="function"?d=r({...s,defaultStyle:u||{}}):d=r,typeof n=="function"?c=n({...s,defaultChildren:a}):n==null?c=a:c=n,{className:o??l,style:d||u?{...u,...d}:void 0,children:c??a,"data-rac":""}},[t,r,n,l,a,u,s])}function X(e,t){let r=f.useContext(e);if(t===null)return null;if(r&&typeof r=="object"&&"slots"in r&&r.slots){let n=t||Q;if(!r.slots[n]){let l=new Intl.ListFormat().format(Object.keys(r.slots).map(u=>`"${u}"`)),a=t?`Invalid slot "${t}".`:"A slot prop is required.";throw new Error(`${a} Valid slot names are ${l}.`)}return r.slots[n]}return r}function D(e,t,r){let n=X(r,e.slot)||{},{ref:l,...a}=n,u=J(f.useMemo(()=>G(t,l),[t,l])),s=F(a,e);return"style"in a&&a.style&&"style"in e&&e.style&&(typeof a.style=="function"||typeof e.style=="function"?s.style=o=>{let d=typeof a.style=="function"?a.style(o):a.style,c={...o.defaultStyle,...d},g=typeof e.style=="function"?e.style({...o,defaultStyle:c}):e.style;return{...c,...g}}:s.style={...a.style,...e.style}),[s,u]}function E(e=!0){let[t,r]=f.useState(e),n=f.useRef(!1),l=f.useCallback(a=>{n.current=!0,r(!!a)},[]);return y(()=>{n.current||r(!1)},[]),[l,t]}function L(e){const t=/^(data-.*)$/;let r={};for(const n in e)t.test(n)||(r[n]=e[n]);return r}export{J as $,D as a,Y as b,F as c,N as d,x as e,X as f,E as g,L as h,U as i,H as j,Q as k,G as l,B as m};
