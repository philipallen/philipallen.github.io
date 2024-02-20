import{a as L,u as P,b as $,j as x}from"./index-e4c57c99.js";import{a as Qt}from"./index-583b5bb5.js";import{_ as C}from"./extends-98964cd2.js";import{P as l}from"./index-2baff29e.js";import{r as d,R as lt}from"./index-c013ead5.js";import{c as Zt,T as en}from"./index-e1b96a7a.js";import{I as tn,a as nn}from"./InputAlert-d02adbdb.js";import{I as on}from"./InputLabelTop-cf58e370.js";import{T as dt}from"./Typography-2bd14f01.js";import{a as rn,b as sn,o as un,f as an,s as ln}from"./floating-ui.react-ba44fe65.js";function he(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var b={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=Symbol.for("react.element"),Ge=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),Pe=Symbol.for("react.profiler"),He=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),dn=Symbol.for("react.server_context"),Ve=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),cn=Symbol.for("react.offscreen"),Dt;Dt=Symbol.for("react.module.reference");function N(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ze:switch(e=e.type,e){case Be:case Pe:case Le:case Fe:case Ke:return e;default:switch(e=e&&e.$$typeof,e){case dn:case Ae:case Ve:case We:case je:case He:return e;default:return t}}case Ge:return t}}}b.ContextConsumer=Ae;b.ContextProvider=He;b.Element=ze;b.ForwardRef=Ve;b.Fragment=Be;b.Lazy=We;b.Memo=je;b.Portal=Ge;b.Profiler=Pe;b.StrictMode=Le;b.Suspense=Fe;b.SuspenseList=Ke;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(e){return N(e)===Ae};b.isContextProvider=function(e){return N(e)===He};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ze};b.isForwardRef=function(e){return N(e)===Ve};b.isFragment=function(e){return N(e)===Be};b.isLazy=function(e){return N(e)===We};b.isMemo=function(e){return N(e)===je};b.isPortal=function(e){return N(e)===Ge};b.isProfiler=function(e){return N(e)===Pe};b.isStrictMode=function(e){return N(e)===Le};b.isSuspense=function(e){return N(e)===Fe};b.isSuspenseList=function(e){return N(e)===Ke};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Be||e===Pe||e===Le||e===Fe||e===Ke||e===cn||typeof e=="object"&&e!==null&&(e.$$typeof===We||e.$$typeof===je||e.$$typeof===He||e.$$typeof===Ae||e.$$typeof===Ve||e.$$typeof===Dt||e.getModuleId!==void 0)};b.typeOf=N;const ct=e=>typeof e=="object"&&e!=null&&e.nodeType===1,ft=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ne=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return ft(n.overflowY,t)||ft(n.overflowX,t)||(r=>{const o=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},Ce=(e,t,n,r,o,i,s,u)=>i<e&&s>t||i>e&&s<t?0:i<=e&&u<=n||s>=t&&u>=n?i-e-r:s>t&&u<n||i<e&&u>n?s-t+o:0,fn=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},gn=(e,t)=>{var n,r,o,i;if(typeof document>"u")return[];const{scrollMode:s,block:u,inline:f,boundary:h,skipOverflowHiddenElements:a}=t,m=typeof h=="function"?h:z=>z!==h;if(!ct(e))throw new TypeError("Invalid target");const y=document.scrollingElement||document.documentElement,S=[];let I=e;for(;ct(I)&&m(I);){if(I=fn(I),I===y){S.push(I);break}I!=null&&I===document.body&&Ne(I)&&!Ne(document.documentElement)||I!=null&&Ne(I,a)&&S.push(I)}const R=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,D=(i=(o=window.visualViewport)==null?void 0:o.height)!=null?i:innerHeight,{scrollX:M,scrollY:H}=window,{height:v,width:E,top:_,right:O,bottom:ae,left:Z}=e.getBoundingClientRect(),{top:le,right:de,bottom:ne,left:xe}=(z=>{const w=window.getComputedStyle(z);return{top:parseFloat(w.scrollMarginTop)||0,right:parseFloat(w.scrollMarginRight)||0,bottom:parseFloat(w.scrollMarginBottom)||0,left:parseFloat(w.scrollMarginLeft)||0}})(e);let A=u==="start"||u==="nearest"?_-le:u==="end"?ae+ne:_+v/2-le+ne,V=f==="center"?Z+E/2-xe+de:f==="end"?O+de:Z-xe;const ce=[];for(let z=0;z<S.length;z++){const w=S[z],{height:oe,width:re,top:ie,right:fe,bottom:ge,left:p}=w.getBoundingClientRect();if(s==="if-needed"&&_>=0&&Z>=0&&ae<=D&&O<=R&&_>=ie&&ae<=ge&&Z>=p&&O<=fe)return ce;const g=getComputedStyle(w),c=parseInt(g.borderLeftWidth,10),k=parseInt(g.borderTopWidth,10),K=parseInt(g.borderRightWidth,10),j=parseInt(g.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in w?w.offsetWidth-w.clientWidth-c-K:0,q="offsetHeight"in w?w.offsetHeight-w.clientHeight-k-j:0,W="offsetWidth"in w?w.offsetWidth===0?0:re/w.offsetWidth:0,U="offsetHeight"in w?w.offsetHeight===0?0:oe/w.offsetHeight:0;if(y===w)T=u==="start"?A:u==="end"?A-D:u==="nearest"?Ce(H,H+D,D,k,j,H+A,H+A+v,v):A-D/2,B=f==="start"?V:f==="center"?V-R/2:f==="end"?V-R:Ce(M,M+R,R,c,K,M+V,M+V+E,E),T=Math.max(0,T+H),B=Math.max(0,B+M);else{T=u==="start"?A-ie-k:u==="end"?A-ge+j+q:u==="nearest"?Ce(ie,ge,oe,k,j+q,A,A+v,v):A-(ie+oe/2)+q/2,B=f==="start"?V-p-c:f==="center"?V-(p+re/2)+F/2:f==="end"?V-fe+K+F:Ce(p,fe,re,c,K+F,V,V+E,E);const{scrollLeft:G,scrollTop:ee}=w;T=U===0?0:Math.max(0,Math.min(ee+T/U,w.scrollHeight-oe/U+q)),B=W===0?0:Math.max(0,Math.min(G+B/W,w.scrollWidth-re/W+F)),A+=ee-T,V+=G-B}ce.push({el:w,top:T,left:B})}return ce};var ue=function(){return ue=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ue.apply(this,arguments)};var pn=0;function Ye(){}function hn(e,t){if(e){var n=gn(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(r){var o=r.el,i=r.top,s=r.left;o.scrollTop=i,o.scrollLeft=s})}}function gt(e,t,n){var r=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return r}function Xe(e,t){var n;function r(){n&&clearTimeout(n)}function o(){for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];r(),n=setTimeout(function(){n=null,e.apply(void 0,s)},t)}return o.cancel=r,o}function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];return t.some(function(u){return u&&u.apply(void 0,[r].concat(i)),r.preventDownshiftDefault||r.hasOwnProperty("nativeEvent")&&r.nativeEvent.preventDownshiftDefault})}}function _e(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){t.forEach(function(o){typeof o=="function"?o(r):o&&(o.current=r)})}}function mn(){return String(pn++)}function vn(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function qe(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=In(t,r)?t[r]:e[r],n},{})}function In(e,t){return e[t]!==void 0}function bn(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function Me(e,t,n,r,o){o===void 0&&(o=!1);var i=n.length;if(i===0)return-1;var s=i-1;(typeof e!="number"||e<0||e>s)&&(e=t>0?-1:s+1);var u=e+t;u<0?u=o?s:0:u>s&&(u=o?0:s);var f=Te(u,t<0,n,r,o);return f===-1?e>=i?-1:e:f}function Te(e,t,n,r,o){o===void 0&&(o=!1);var i=n.length;if(t){for(var s=e;s>=0;s--)if(!r(n[s],s))return s}else for(var u=e;u<i;u++)if(!r(n[u],u))return u;return o?Te(t?i-1:0,t,n,r):-1}function pt(e,t,n,r){return r===void 0&&(r=!0),n&&t.some(function(o){return o&&(gt(o,e,n)||r&&gt(o,n.document.activeElement,n))})}var yn=Xe(function(e){Et(e).textContent=""},500);function Et(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function wn(e,t){if(!(!e||!t)){var n=Et(t);n.textContent=e,yn(t)}}var xn=["isInitialMount","highlightedIndex","items","environment"],Ot={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function $n(e,t,n){var r=e.props,o=e.type,i={};Object.keys(t).forEach(function(s){Sn(s,e,t,n),n[s]!==t[s]&&(i[s]=n[s])}),r.onStateChange&&Object.keys(i).length&&r.onStateChange(C({type:o},i))}function Sn(e,t,n,r){var o=t.props,i=t.type,s="on"+Je(e)+"Change";o[s]&&r[e]!==void 0&&r[e]!==n[e]&&o[s](C({type:i},r))}function kn(e,t){return t.changes}function Cn(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var Mn=Xe(function(e,t){wn(e(),t)},200),Rn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect,Tn="useId"in lt?function(t){var n=t.id,r=t.labelId,o=t.menuId,i=t.getItemId,s=t.toggleButtonId,u=t.inputId,f="downshift-"+lt.useId();n||(n=f);var h=d.useRef({labelId:r||n+"-label",menuId:o||n+"-menu",getItemId:i||function(a){return n+"-item-"+a},toggleButtonId:s||n+"-toggle-button",inputId:u||n+"-input"});return h.current}:function(t){var n=t.id,r=n===void 0?"downshift-"+mn():n,o=t.labelId,i=t.menuId,s=t.getItemId,u=t.toggleButtonId,f=t.inputId,h=d.useRef({labelId:o||r+"-label",menuId:i||r+"-menu",getItemId:s||function(a){return r+"-item-"+a},toggleButtonId:u||r+"-toggle-button",inputId:f||r+"-input"});return h.current};function Dn(e,t,n,r){var o,i;if(e===void 0){if(t===void 0)throw new Error(r);o=n[t],i=t}else i=t===void 0?n.indexOf(e):t,o=e;return[o,i]}function En(e){return e?String(e):""}function On(e){return/^\S{1}$/.test(e)}function Je(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function Bt(e){var t=d.useRef(e);return t.current=e,t}function Bn(e,t,n,r){var o=d.useRef(),i=d.useRef(),s=d.useCallback(function(S,I){i.current=I,S=qe(S,I.props);var R=e(S,I),D=I.props.stateReducer(S,C({},I,{changes:R}));return D},[e]),u=d.useReducer(s,t,n),f=u[0],h=u[1],a=Bt(t),m=d.useCallback(function(S){return h(C({props:a.current},S))},[a]),y=i.current;return d.useEffect(function(){var S=y&&o.current&&!r(o.current,f);S&&$n(y,qe(o.current,y.props),f),o.current=f},[f,y,r]),[f,m]}function Ln(e,t,n,r){var o=Bn(e,t,n,r),i=o[0],s=o[1];return[qe(i,t),s]}var we={itemToString:En,stateReducer:kn,getA11ySelectionMessage:Cn,scrollIntoView:hn,environment:typeof window>"u"?void 0:window};function J(e,t,n){n===void 0&&(n=Ot);var r=e["default"+Je(t)];return r!==void 0?r:n[t]}function me(e,t,n){n===void 0&&(n=Ot);var r=e[t];if(r!==void 0)return r;var o=e["initial"+Je(t)];return o!==void 0?o:J(e,t,n)}function Pn(e){var t=me(e,"selectedItem"),n=me(e,"isOpen"),r=me(e,"highlightedIndex"),o=me(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:o}}function De(e,t,n){var r=e.items,o=e.initialHighlightedIndex,i=e.defaultHighlightedIndex,s=t.selectedItem,u=t.highlightedIndex;return r.length===0?-1:o!==void 0&&u===o?o:i!==void 0?i:s?r.indexOf(s):n===0?-1:n<0?r.length-1:0}function Hn(e,t,n,r){var o=d.useRef({isMouseDown:!1,isTouchMove:!1});return d.useEffect(function(){if(n){var i=function(){o.current.isMouseDown=!0},s=function(m){o.current.isMouseDown=!1,e&&!pt(m.target,t.map(function(y){return y.current}),n)&&r()},u=function(){o.current.isTouchMove=!1},f=function(){o.current.isTouchMove=!0},h=function(m){e&&!o.current.isTouchMove&&!pt(m.target,t.map(function(y){return y.current}),n,!1)&&r()};return n.addEventListener("mousedown",i),n.addEventListener("mouseup",s),n.addEventListener("touchstart",u),n.addEventListener("touchmove",f),n.addEventListener("touchend",h),function(){n.removeEventListener("mousedown",i),n.removeEventListener("mouseup",s),n.removeEventListener("touchstart",u),n.removeEventListener("touchmove",f),n.removeEventListener("touchend",h)}}},[e,n]),o}var An=function(){return Ye};function ht(e,t,n){var r=n.isInitialMount,o=n.highlightedIndex,i=n.items,s=n.environment,u=he(n,xn);d.useEffect(function(){r||!(s!=null&&s.document)||Mn(function(){return e(C({highlightedIndex:o,highlightedItem:i[o],resultCount:i.length},u))},s.document)},t)}function Vn(e){var t=e.highlightedIndex,n=e.isOpen,r=e.itemRefs,o=e.getItemNodeFromIndex,i=e.menuElement,s=e.scrollIntoView,u=d.useRef(!0);return Rn(function(){t<0||!n||!Object.keys(r.current).length||(u.current===!1?u.current=!0:s(o(t),i))},[t]),u}var Fn=Ye;function mt(e,t,n){var r;n===void 0&&(n=!0);var o=((r=e.items)==null?void 0:r.length)&&t>=0;return C({isOpen:!1,highlightedIndex:-1},o&&C({selectedItem:e.items[t],isOpen:J(e,"isOpen"),highlightedIndex:J(e,"highlightedIndex")},n&&{inputValue:e.itemToString(e.items[t])}))}function Kn(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}var Lt={environment:l.shape({addEventListener:l.func.isRequired,removeEventListener:l.func.isRequired,document:l.shape({createElement:l.func.isRequired,getElementById:l.func.isRequired,activeElement:l.any.isRequired,body:l.any.isRequired}).isRequired,Node:l.func.isRequired}),itemToString:l.func,stateReducer:l.func},Pt=C({},Lt,{getA11yStatusMessage:l.func,highlightedIndex:l.number,defaultHighlightedIndex:l.number,initialHighlightedIndex:l.number,isOpen:l.bool,defaultIsOpen:l.bool,initialIsOpen:l.bool,selectedItem:l.any,initialSelectedItem:l.any,defaultSelectedItem:l.any,id:l.string,labelId:l.string,menuId:l.string,getItemId:l.func,toggleButtonId:l.string,onSelectedItemChange:l.func,onHighlightedIndexChange:l.func,onStateChange:l.func,onIsOpenChange:l.func,scrollIntoView:l.func});function jn(e,t,n){var r=t.type,o=t.props,i;switch(r){case n.ItemMouseMove:i={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:i={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:i={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:De(o,e,0)};break;case n.FunctionOpenMenu:i={isOpen:!0,highlightedIndex:De(o,e,0)};break;case n.FunctionCloseMenu:i={isOpen:!1};break;case n.FunctionSetHighlightedIndex:i={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:i={inputValue:t.inputValue};break;case n.FunctionReset:i={highlightedIndex:J(o,"highlightedIndex"),isOpen:J(o,"isOpen"),selectedItem:J(o,"selectedItem"),inputValue:J(o,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return C({},e,i)}function Wn(e){for(var t=e.keysSoFar,n=e.highlightedIndex,r=e.items,o=e.itemToString,i=e.isItemDisabled,s=t.toLowerCase(),u=0;u<r.length;u++){var f=(u+n+(t.length<2?1:0))%r.length,h=r[f];if(h!==void 0&&o(h).toLowerCase().startsWith(s)&&!i(h,f))return f}return n}ue(ue({},Pt),{items:l.array.isRequired,isItemDisabled:l.func,getA11ySelectionMessage:l.func});function Nn(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}var _n=ue(ue({},we),{getA11yStatusMessage:Nn,isItemDisabled:function(){return!1}}),qn=Ye,Re=0,Qe=1,Ze=2,Ee=3,et=4,tt=5,nt=6,ot=7,rt=8,it=9,st=10,Oe=11,Ht=12,At=13,ut=14,Vt=15,Ft=16,Kt=17,jt=18,at=19,Ue=20,Wt=21,Nt=Object.freeze({__proto__:null,ToggleButtonClick:Re,ToggleButtonKeyDownArrowDown:Qe,ToggleButtonKeyDownArrowUp:Ze,ToggleButtonKeyDownCharacter:Ee,ToggleButtonKeyDownEscape:et,ToggleButtonKeyDownHome:tt,ToggleButtonKeyDownEnd:nt,ToggleButtonKeyDownEnter:ot,ToggleButtonKeyDownSpaceButton:rt,ToggleButtonKeyDownPageUp:it,ToggleButtonKeyDownPageDown:st,ToggleButtonBlur:Oe,MenuMouseLeave:Ht,ItemMouseMove:At,ItemClick:ut,FunctionToggleMenu:Vt,FunctionOpenMenu:Ft,FunctionCloseMenu:Kt,FunctionSetHighlightedIndex:jt,FunctionSelectItem:at,FunctionSetInputValue:Ue,FunctionReset:Wt});function Un(e,t){var n,r=t.type,o=t.props,i=t.altKey,s;switch(r){case ut:s={isOpen:J(o,"isOpen"),highlightedIndex:J(o,"highlightedIndex"),selectedItem:o.items[t.index]};break;case Ee:{var u=t.key,f=""+e.inputValue+u,h=!e.isOpen&&e.selectedItem?o.items.indexOf(e.selectedItem):e.highlightedIndex,a=Wn({keysSoFar:f,highlightedIndex:h,items:o.items,itemToString:o.itemToString,isItemDisabled:o.isItemDisabled});s={inputValue:f,highlightedIndex:a,isOpen:!0}}break;case Qe:{var m=e.isOpen?Me(e.highlightedIndex,1,o.items,o.isItemDisabled):i&&e.selectedItem==null?-1:De(o,e,1);s={highlightedIndex:m,isOpen:!0}}break;case Ze:if(e.isOpen&&i)s=mt(o,e.highlightedIndex,!1);else{var y=e.isOpen?Me(e.highlightedIndex,-1,o.items,o.isItemDisabled):De(o,e,-1);s={highlightedIndex:y,isOpen:!0}}break;case ot:case rt:s=mt(o,e.highlightedIndex,!1);break;case tt:s={highlightedIndex:Te(0,!1,o.items,o.isItemDisabled),isOpen:!0};break;case nt:s={highlightedIndex:Te(o.items.length-1,!0,o.items,o.isItemDisabled),isOpen:!0};break;case it:s={highlightedIndex:Me(e.highlightedIndex,-10,o.items,o.isItemDisabled)};break;case st:s={highlightedIndex:Me(e.highlightedIndex,10,o.items,o.isItemDisabled)};break;case et:s={isOpen:!1,highlightedIndex:-1};break;case Oe:s=C({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((n=o.items)==null?void 0:n.length)&&{selectedItem:o.items[e.highlightedIndex]});break;case at:s={selectedItem:t.selectedItem};break;default:return jn(e,t,Nt)}return C({},e,s)}var zn=["onClick"],Gn=["onMouseLeave","refKey","ref"],Yn=["onBlur","onClick","onPress","onKeyDown","refKey","ref"],Xn=["item","index","onMouseMove","onClick","onMouseDown","onPress","refKey","disabled","ref"];_t.stateChangeTypes=Nt;function _t(e){e===void 0&&(e={}),qn();var t=C({},_n,e),n=t.items,r=t.scrollIntoView,o=t.environment,i=t.itemToString,s=t.getA11ySelectionMessage,u=t.getA11yStatusMessage,f=Ln(Un,t,Pn,Kn),h=f[0],a=f[1],m=h.isOpen,y=h.highlightedIndex,S=h.selectedItem,I=h.inputValue,R=d.useRef(null),D=d.useRef(null),M=d.useRef({}),H=d.useRef(null),v=Tn(t),E=d.useRef(),_=d.useRef(!0),O=Bt({state:h,props:t}),ae=d.useCallback(function(p){return M.current[v.getItemId(p)]},[v]);ht(u,[m,y,I,n],C({isInitialMount:_.current,previousResultCount:E.current,items:n,environment:o,itemToString:i},h)),ht(s,[S],C({isInitialMount:_.current,previousResultCount:E.current,items:n,environment:o,itemToString:i},h));var Z=Vn({menuElement:D.current,highlightedIndex:y,isOpen:m,itemRefs:M,scrollIntoView:r,getItemNodeFromIndex:ae});d.useEffect(function(){return H.current=Xe(function(p){p({type:Ue,inputValue:""})},500),function(){H.current.cancel()}},[]),d.useEffect(function(){I&&H.current(a)},[a,I]),Fn({isInitialMount:_.current,props:t,state:h}),d.useEffect(function(){_.current||(E.current=n.length)}),d.useEffect(function(){var p=me(t,"isOpen");p&&R.current&&R.current.focus()},[]);var le=Hn(m,[D,R],o,function(){a({type:Oe})}),de=An();d.useEffect(function(){return _.current=!1,function(){_.current=!0}},[]),d.useEffect(function(){m||(M.current={})},[m]);var ne=d.useMemo(function(){return{ArrowDown:function(g){g.preventDefault(),a({type:Qe,altKey:g.altKey})},ArrowUp:function(g){g.preventDefault(),a({type:Ze,altKey:g.altKey})},Home:function(g){g.preventDefault(),a({type:tt})},End:function(g){g.preventDefault(),a({type:nt})},Escape:function(){O.current.state.isOpen&&a({type:et})},Enter:function(g){g.preventDefault(),a({type:O.current.state.isOpen?ot:Re})},PageUp:function(g){O.current.state.isOpen&&(g.preventDefault(),a({type:it}))},PageDown:function(g){O.current.state.isOpen&&(g.preventDefault(),a({type:st}))}," ":function(g){g.preventDefault();var c=O.current.state;if(!c.isOpen){a({type:Re});return}c.inputValue?a({type:Ee,key:" "}):a({type:rt})}}},[a,O]),xe=d.useCallback(function(){a({type:Vt})},[a]),A=d.useCallback(function(){a({type:Kt})},[a]),V=d.useCallback(function(){a({type:Ft})},[a]),ce=d.useCallback(function(p){a({type:jt,highlightedIndex:p})},[a]),z=d.useCallback(function(p){a({type:at,selectedItem:p})},[a]),w=d.useCallback(function(){a({type:Wt})},[a]),oe=d.useCallback(function(p){a({type:Ue,inputValue:p})},[a]),re=d.useCallback(function(p){var g=p===void 0?{}:p,c=g.onClick,k=he(g,zn),K=function(){var T;(T=R.current)==null||T.focus()};return C({id:v.labelId,htmlFor:v.toggleButtonId,onClick:Q(c,K)},k)},[v]),ie=d.useCallback(function(p,g){var c,k=p===void 0?{}:p,K=k.onMouseLeave,j=k.refKey,T=j===void 0?"ref":j,B=k.ref,F=he(k,Gn),q=g===void 0?{}:g;q.suppressRefError;var W=function(){a({type:Ht})};return C((c={},c[T]=_e(B,function(U){D.current=U}),c.id=v.menuId,c.role="listbox",c["aria-labelledby"]=F&&F["aria-label"]?void 0:""+v.labelId,c.onMouseLeave=Q(K,W),c),F)},[a,de,v]),fe=d.useCallback(function(p,g){var c,k=p===void 0?{}:p,K=k.onBlur,j=k.onClick;k.onPress;var T=k.onKeyDown,B=k.refKey,F=B===void 0?"ref":B,q=k.ref,W=he(k,Yn),U=g===void 0?{}:g;U.suppressRefError;var G=O.current.state,ee=function(){a({type:Re})},$e=function(){G.isOpen&&!le.current.isMouseDown&&a({type:Oe})},Se=function(Y){var X=bn(Y);X&&ne[X]?ne[X](Y):On(X)&&a({type:Ee,key:X})},se=C((c={},c[F]=_e(q,function(te){R.current=te}),c["aria-activedescendant"]=G.isOpen&&G.highlightedIndex>-1?v.getItemId(G.highlightedIndex):"",c["aria-controls"]=v.menuId,c["aria-expanded"]=O.current.state.isOpen,c["aria-haspopup"]="listbox",c["aria-labelledby"]=W&&W["aria-label"]?void 0:""+v.labelId,c.id=v.toggleButtonId,c.role="combobox",c.tabIndex=0,c.onBlur=Q(K,$e),c),W);return W.disabled||(se.onClick=Q(j,ee),se.onKeyDown=Q(T,Se)),se},[O,v,de,a,le,ne]),ge=d.useCallback(function(p){var g,c=p===void 0?{}:p,k=c.item,K=c.index,j=c.onMouseMove,T=c.onClick,B=c.onMouseDown;c.onPress;var F=c.refKey,q=F===void 0?"ref":F,W=c.disabled,U=c.ref,G=he(c,Xn);W!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');var ee=O.current,$e=ee.state,Se=ee.props,se=Dn(k,K,Se.items,"Pass either item or index to getItemProps!"),te=se[0],Y=se[1],X=Se.isItemDisabled(te,Y),Gt=function(){Y!==$e.highlightedIndex&&(Z.current=!1,a({type:At,index:Y,disabled:X}))},Yt=function(){a({type:ut,index:Y})},Xt=function(Jt){return Jt.preventDefault()},ke=C((g={},g[q]=_e(U,function(pe){pe&&(M.current[v.getItemId(Y)]=pe)}),g["aria-disabled"]=X,g["aria-selected"]=""+(te===$e.selectedItem),g.id=v.getItemId(Y),g.role="option",g),G);return X||(ke.onClick=Q(T,Yt)),ke.onMouseMove=Q(j,Gt),ke.onMouseDown=Q(B,Xt),ke},[O,v,Z,a]);return{getToggleButtonProps:fe,getLabelProps:re,getMenuProps:ie,getItemProps:ge,toggleMenu:xe,openMenu:V,closeMenu:A,setHighlightedIndex:ce,selectItem:z,reset:w,setInputValue:oe,highlightedIndex:y,isOpen:m,selectedItem:S,inputValue:I}}C({},Pt,{items:l.array.isRequired,isItemDisabled:l.func,selectedItemChanged:l.func,getA11ySelectionMessage:l.func,inputValue:l.string,defaultInputValue:l.string,initialInputValue:l.string,inputId:l.string,onInputValueChange:l.func});C({},we,{selectedItemChanged:function(t,n){return t!==n},getA11yStatusMessage:vn,isItemDisabled:function(){return!1}});function Jn(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}C({},Lt,{selectedItems:l.array,initialSelectedItems:l.array,defaultSelectedItems:l.array,getA11yRemovalMessage:l.func,activeIndex:l.number,initialActiveIndex:l.number,defaultActiveIndex:l.number,onActiveIndexChange:l.func,onSelectedItemsChange:l.func,keyNavigationNext:l.string,keyNavigationPrevious:l.string});we.itemToString,we.stateReducer,we.environment;const Qn=L.div`
  ${()=>{const{tokens:e}=P(),{dropdown:t}=e;return $`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,Zn=L.div`
  ${({$isDisabled:e,$hasSelectedItem:t})=>{const{tokens:n}=P(),{dropdown:r}=n;return[$`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${r.button.placeholder.color.base};
      `,e&&$`
          color: ${r.button.placeholder.color.disabled};
        `,t&&$`
          color: ${r.button.text.color.base};
        `,e&&t&&$`
          color: ${r.button.text.color.disabled};
        `]}}
`,eo=L.div`
  ${()=>{const{tokens:e}=P(),{dropdown:t}=e;return $`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,qt=L(Zt)`
  rotate: 0deg;
`,to=L(qt)`
  rotate: 180deg;
`,no=L.div`
  ${({$isSelected:e,$isHighlighted:t})=>{const{tokens:n}=P(),{dropdown:r}=n;return[$`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${r.menu.option.inner.gap};
        color: ${r.menu.option.inner.color.base};
        padding-top: ${r.menu.option.inner.paddingTop};
        padding-bottom: ${r.menu.option.inner.paddingBottom};
        padding-left: ${r.menu.option.inner.paddingLeft};
        padding-right: ${r.menu.option.inner.paddingRight};
        border-radius: ${r.menu.option.inner.radius};
        background: ${r.menu.option.inner.backgroundColor.base};
        outline-width: ${r.menu.option.inner.stroke.width};
        outline-style: ${r.menu.option.inner.stroke.style};
        outline-color: ${r.menu.option.inner.stroke.color.base};
        outline-offset: ${r.menu.option.inner.stroke.offset};
      `,e&&$`
          background: ${r.menu.option.inner.backgroundColor.active};
          outline-color: ${r.menu.option.inner.stroke.color.active};
        `,t&&$`
          background: ${r.menu.option.inner.backgroundColor.hover};
          outline-color: ${r.menu.option.inner.stroke.color.hover};
        `]}}
`,oo=L(en)`
  ${({$isSelected:e})=>{const{tokens:t}=P(),{dropdown:n}=t;return[$`
        visibility: ${e?"visible":"hidden"};
        width: ${n.menu.option.inner.icon.width};
        height: ${n.menu.option.inner.icon.height};
      `]}}
`,Ut=6,ro=48,io=1,so=ro*Ut,uo=io*Ut-1,ao=so+uo,lo=L.div`
  ${()=>{const{tokens:e}=P(),{dropdown:t}=e;return[$`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,co=L.div`
  ${({$isOpen:e,$hasError:t,$isDisabled:n})=>{const{tokens:r}=P(),{dropdown:o}=r;return[$`
        display: grid;
        background: ${o.button.backgroundColor.base};
        padding-top: ${o.button.paddingTop};
        padding-bottom: ${o.button.paddingBottom};
        padding-left: ${o.button.paddingLeft};
        padding-right: ${o.button.paddingRight};
        border-radius: ${o.button.stroke.radius};
        outline-width: ${o.button.stroke.width.base};
        outline-style: ${o.button.stroke.style};
        outline-color: ${o.button.stroke.color.base};
        outline-offset: ${o.button.stroke.offset.base};
        cursor: pointer;

        svg {
          color: ${o.button.icon.color.base};
        }

        &:hover {
          outline-width: ${o.button.stroke.width.hover};
          outline-color: ${o.button.stroke.color.hover};
          outline-offset: ${o.button.stroke.offset.hover};

          svg {
            color: ${o.button.icon.color.hover};
          }
        }
      `,t&&$`
          &,
          &:hover {
            outline-width: ${o.button.stroke.width.error};
            outline-color: ${o.button.stroke.color.error};
            outline-offset: ${o.button.stroke.offset.error};
          }
        `,e&&$`
          &,
          &:hover {
            outline-width: ${o.button.stroke.width.active};
            outline-color: ${o.button.stroke.color.active};
            outline-offset: ${o.button.stroke.offset.active};

            svg {
              color: ${o.button.icon.color.active};
            }
          }
        `,n&&$`
          cursor: not-allowed;

          &,
          &:hover {
            outline-width: ${o.button.stroke.width.disabled};
            outline-color: ${o.button.stroke.color.disabled};
            outline-offset: ${o.button.stroke.offset.disabled};

            svg {
              color: ${o.button.icon.color.disabled};
            }
          }
        `]}}
`,fo=L.div`
  ${({$isOpen:e})=>{const{tokens:t}=P(),{dropdown:n}=t;return $`
      display: ${e?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${n.menu.radius};
      border-width: ${n.menu.stroke.width};
      border-style: ${n.menu.stroke.style};
      border-color: ${n.menu.stroke.color};
      box-shadow: 0px 2px 2px ${n.menu.shadow.outer.color};
    `}}
`,zt=L.div`
  ${()=>$`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`,go=L(zt)`
  ${({$visible:e})=>{const{tokens:t}=P(),{dropdown:n}=t;return[$`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${n.menu.shadow.inner.color};
      `,e&&$`
          transform: translateY(0px);
        `]}}
`,po=L(zt)`
  ${({$visible:e})=>{const{tokens:t}=P(),{dropdown:n}=t;return[$`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${n.menu.shadow.inner.color};
      `,e&&$`
          transform: translateY(0px);
        `]}}
`,ho=L.ul`
  ${()=>{const{tokens:e}=P(),{dropdown:t}=e,{menu:{scrollbar:{thumbColor:n,trackColor:r}}}=t;return $`
      all: unset;
      display: grid;
      scrollbar-color: ${n} ${r};
      background: ${t.menu.separator.color};
      gap: ${t.menu.separator.width};
      overflow-y: auto;
    `}}
`,mo=L.li`
  ${()=>{const{tokens:e}=P(),{dropdown:t}=e;return[$`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;function vo(e){const{offsetValue:t}=e,{refs:n,floatingStyles:r}=rn({placement:"bottom-start",whileElementsMounted:sn,middleware:[un(t),an({padding:16}),ln({apply({rects:o,elements:i}){Object.assign(i.floating.style,{minWidth:`${o.reference.width}px`})}})]});return{refs:n,floatingStyles:r}}function Io(e){const{isOpen:t}=e,n={threshold:1},r=d.useRef(null),o=d.useRef(null),[i,s]=d.useState(!1),[u,f]=d.useState(!1);function h(a,m){if(!(a.length<2)){if(m===0)return r;if(a.length===m+1)return o}}return d.useEffect(()=>{if(!t||!r.current||!o.current)return;const a=new IntersectionObserver(([y])=>{y&&s(!y.isIntersecting)},n),m=new IntersectionObserver(([y])=>{y&&f(!y.isIntersecting)},n);return a.observe(r.current),m.observe(o.current),()=>{a.disconnect(),m.disconnect()}},[t]),{getListItemRef:h,showTopShadow:i,showBottomShadow:u}}function bo(e){const{items:t,select:{getToggleButtonProps:n,getMenuProps:r,getItemProps:o,isOpen:i},renderButtonContent:s,renderListItemContent:u,hasError:f,isDisabled:h,maxListHeight:a,testID:m="dropdown"}=e,{tokens:y}=P(),{dropdown:S}=y,{refs:I,floatingStyles:R}=vo({offsetValue:parseInt(S.gap,10)}),{getListItemRef:D,showTopShadow:M,showBottomShadow:H}=Io({isOpen:i});return x.jsxs(x.Fragment,{children:[x.jsx(lo,{children:x.jsx(co,{...n({ref:I.setReference,disabled:h}),$isOpen:i,$hasError:f,$isDisabled:h,"data-testid":m,children:s()})}),x.jsxs(fo,{...r({ref:I.setFloating}),style:R,$isOpen:i,children:[x.jsx(go,{$visible:M}),x.jsx(ho,{style:{maxHeight:a},children:i&&t.map((v,E)=>x.jsx(mo,{...o({key:v.id,item:v,index:E,ref:D(t,E)}),children:u(v,E)}))}),x.jsx(po,{$visible:H})]})]})}function vt(e){const{labelProps:t,placeholder:n,selectedItem:r=null,onChange:o,alertProps:i,testID:s="dropdown",...u}=e,{isDisabled:f,items:h}=u,{tokens:a}=P(),{dropdown:m}=a;function y(M){return M?M.title:""}const S=_t({items:h,selectedItem:r,itemToString:y,onSelectedItemChange:o}),{getLabelProps:I,isOpen:R,highlightedIndex:D}=S;return x.jsx(tn,{alert:i?x.jsx(nn,{...i,testID:`${s}-alert`}):void 0,children:x.jsx(on,{...t,...I(),children:x.jsx(bo,{...u,select:S,renderButtonContent:()=>x.jsxs(Qn,{children:[x.jsx(Zn,{$isDisabled:f,$hasSelectedItem:!!r,children:x.jsx(dt,{component:"span",color:"inherit",fontFamily:m.button.text.fontFamily,variant:m.button.text.typographyVariant,noWrap:!0,children:r?r.title:n})}),x.jsx(eo,{children:R?x.jsx(to,{"aria-hidden":"true"}):x.jsx(qt,{"aria-hidden":"true"})})]}),renderListItemContent:(M,H)=>{const v=r===M,E=D===H;return x.jsxs(no,{$isSelected:v,$isHighlighted:E,children:[x.jsx(oo,{$isSelected:v,"aria-hidden":"true"}),x.jsx(dt,{component:"span",color:"inherit",fontFamily:m.menu.option.inner.text.fontFamily,variant:m.menu.option.inner.text.typographyVariant,noWrap:!0,children:M.title})]})},maxListHeight:ao,testID:s})})})}const yo=Array.from({length:15},(e,t)=>{const n=`${t+1}`.padStart(2,"0");return{id:`item-${n}`,title:`Item ${n}`,value:n}}),{useArgs:wo}=__STORYBOOK_MODULE_CLIENT_API__,xo={title:"Inputs/Dropdown",component:vt,render:function(t){const[,n]=wo();function r({selectedItem:o}){n({selectedItem:o}),Qt("onChange")(o)}return x.jsx("div",{style:{height:400},children:x.jsx(vt,{...t,onChange:r})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{placeholder:"Select...",items:yo,hasError:!1,isDisabled:!1}},ve={args:{labelProps:{"aria-label":"Label"}}},Ie={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},be={args:{labelProps:{label:"Label"}}},ye={args:{hasError:!0,labelProps:{label:"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var It,bt,yt;ve.parameters={...ve.parameters,docs:{...(It=ve.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(yt=(bt=ve.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var wt,xt,$t;Ie.parameters={...Ie.parameters,docs:{...(wt=Ie.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...($t=(xt=Ie.parameters)==null?void 0:xt.docs)==null?void 0:$t.source}}};var St,kt,Ct;be.parameters={...be.parameters,docs:{...(St=be.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label"
    }
  }
}`,...(Ct=(kt=be.parameters)==null?void 0:kt.docs)==null?void 0:Ct.source}}};var Mt,Rt,Tt;ye.parameters={...ye.parameters,docs:{...(Mt=ye.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(Tt=(Rt=ye.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};const $o=["Basic","Disabled","WithLabel","WithError"],Lo=Object.freeze(Object.defineProperty({__proto__:null,Basic:ve,Disabled:Ie,WithError:ye,WithLabel:be,__namedExportsOrder:$o,default:xo},Symbol.toStringTag,{value:"Module"}));export{ve as B,Lo as D,be as W,Ie as a,ye as b};
