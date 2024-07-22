import{_ as pe}from"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import{_ as E}from"./extends-CF3RwP-h.js";import{P as l}from"./index-CpCSUgdU.js";import{r as d,R as we}from"./index-DH5ua8nC.js";import{j as F}from"./jsx-runtime-DQ32znRX.js";import{a as j,u as Q,b as C}from"./index-BW2nVlX_.js";import{b as Tt}from"./index-ef8Z-xiF.js";import{b as Rt,h as Dt,o as Ot,i as Bt,l as Ht}from"./floating-ui.react-BezaurJz.js";var ie=function(){return ie=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},ie.apply(this,arguments)};var v={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=Symbol.for("react.element"),We=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Me=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Re=Symbol.for("react.context"),Lt=Symbol.for("react.server_context"),De=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Pt=Symbol.for("react.offscreen"),st;st=Symbol.for("react.module.reference");function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ae:switch(e=e.type,e){case ke:case Ce:case Me:case Oe:case Be:return e;default:switch(e=e&&e.$$typeof,e){case Lt:case Re:case De:case Le:case He:case Te:return e;default:return t}}case We:return t}}}v.ContextConsumer=Re;v.ContextProvider=Te;v.Element=Ae;v.ForwardRef=De;v.Fragment=ke;v.Lazy=Le;v.Memo=He;v.Portal=We;v.Profiler=Ce;v.StrictMode=Me;v.Suspense=Oe;v.SuspenseList=Be;v.isAsyncMode=function(){return!1};v.isConcurrentMode=function(){return!1};v.isContextConsumer=function(e){return V(e)===Re};v.isContextProvider=function(e){return V(e)===Te};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ae};v.isForwardRef=function(e){return V(e)===De};v.isFragment=function(e){return V(e)===ke};v.isLazy=function(e){return V(e)===Le};v.isMemo=function(e){return V(e)===He};v.isPortal=function(e){return V(e)===We};v.isProfiler=function(e){return V(e)===Ce};v.isStrictMode=function(e){return V(e)===Me};v.isSuspense=function(e){return V(e)===Oe};v.isSuspenseList=function(e){return V(e)===Be};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ke||e===Ce||e===Me||e===Oe||e===Be||e===Pt||typeof e=="object"&&e!==null&&(e.$$typeof===Le||e.$$typeof===He||e.$$typeof===Te||e.$$typeof===Re||e.$$typeof===De||e.$$typeof===st||e.getModuleId!==void 0)};v.typeOf=V;const tt=e=>typeof e=="object"&&e!=null&&e.nodeType===1,nt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Pe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return nt(r.overflowY,t)||nt(r.overflowX,t)||(o=>{const n=(u=>{if(!u.ownerDocument||!u.ownerDocument.defaultView)return null;try{return u.ownerDocument.defaultView.frameElement}catch{return null}})(o);return!!n&&(n.clientHeight<o.scrollHeight||n.clientWidth<o.scrollWidth)})(e)}return!1},ve=(e,t,r,o,n,u,s,i)=>u<e&&s>t||u>e&&s<t?0:u<=e&&i<=r||s>=t&&i>=r?u-e-o:s>t&&i<r||u<e&&i>r?s-t+n:0,Kt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Ft=(e,t)=>{var r,o,n,u;if(typeof document>"u")return[];const{scrollMode:s,block:i,inline:a,boundary:m,skipOverflowHiddenElements:h}=t,S=typeof m=="function"?m:X=>X!==m;if(!tt(e))throw new TypeError("Invalid target");const y=document.scrollingElement||document.documentElement,w=[];let p=e;for(;tt(p)&&S(p);){if(p=Kt(p),p===y){w.push(p);break}p!=null&&p===document.body&&Pe(p)&&!Pe(document.documentElement)||p!=null&&Pe(p,h)&&w.push(p)}const T=(o=(r=window.visualViewport)==null?void 0:r.width)!=null?o:innerWidth,I=(u=(n=window.visualViewport)==null?void 0:n.height)!=null?u:innerHeight,{scrollX:x,scrollY:U}=window,{height:q,width:R,top:ne,right:re,bottom:ue,left:oe}=e.getBoundingClientRect(),{top:ce,right:fe,bottom:ge,left:he}=(X=>{const b=window.getComputedStyle(X);return{top:parseFloat(b.scrollMarginTop)||0,right:parseFloat(b.scrollMarginRight)||0,bottom:parseFloat(b.scrollMarginBottom)||0,left:parseFloat(b.scrollMarginLeft)||0}})(e);let D=i==="start"||i==="nearest"?ne-ce:i==="end"?ue+ge:ne+q/2-ce+ge,O=a==="center"?oe+R/2-he+fe:a==="end"?re+fe:oe-he;const se=[];for(let X=0;X<w.length;X++){const b=w[X],{height:g,width:f,top:c,right:$,bottom:A,left:P}=b.getBoundingClientRect();if(s==="if-needed"&&ne>=0&&oe>=0&&ue<=I&&re<=T&&ne>=c&&ue<=A&&oe>=P&&re<=$)return se;const B=getComputedStyle(b),W=parseInt(B.borderLeftWidth,10),H=parseInt(B.borderTopWidth,10),N=parseInt(B.borderRightWidth,10),L=parseInt(B.borderBottomWidth,10);let k=0,M=0;const G="offsetWidth"in b?b.offsetWidth-b.clientWidth-W-N:0,Y="offsetHeight"in b?b.offsetHeight-b.clientHeight-H-L:0,Z="offsetWidth"in b?b.offsetWidth===0?0:f/b.offsetWidth:0,_="offsetHeight"in b?b.offsetHeight===0?0:g/b.offsetHeight:0;if(y===b)k=i==="start"?D:i==="end"?D-I:i==="nearest"?ve(U,U+I,I,H,L,U+D,U+D+q,q):D-I/2,M=a==="start"?O:a==="center"?O-T/2:a==="end"?O-T:ve(x,x+T,T,W,N,x+O,x+O+R,R),k=Math.max(0,k+U),M=Math.max(0,M+x);else{k=i==="start"?D-c-H:i==="end"?D-A+L+Y:i==="nearest"?ve(c,A,g,H,L+Y,D,D+q,q):D-(c+g/2)+Y/2,M=a==="start"?O-P-W:a==="center"?O-(P+f/2)+G/2:a==="end"?O-$+N+G:ve(P,$,f,W,N+G,O,O+R,R);const{scrollLeft:z,scrollTop:K}=b;k=_===0?0:Math.max(0,Math.min(K+k/_,b.scrollHeight-g/_+Y)),M=Z===0?0:Math.max(0,Math.min(z+M/Z,b.scrollWidth-f/Z+G)),D+=K-k,O+=z-M}se.push({el:b,top:k,left:M})}return se};var Vt=0;function lt(){}function At(e,t){if(e){var r=Ft(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});r.forEach(function(o){var n=o.el,u=o.top,s=o.left;n.scrollTop=u,n.scrollLeft=s})}}function rt(e,t,r){var o=e===t||t instanceof r.Node&&e.contains&&e.contains(t);return o}function je(e,t){var r;function o(){r&&clearTimeout(r)}function n(){for(var u=arguments.length,s=new Array(u),i=0;i<u;i++)s[i]=arguments[i];o(),r=setTimeout(function(){r=null,e.apply(void 0,s)},t)}return n.cancel=o,n}function ee(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){for(var n=arguments.length,u=new Array(n>1?n-1:0),s=1;s<n;s++)u[s-1]=arguments[s];return t.some(function(i){return i&&i.apply(void 0,[o].concat(u)),o.preventDownshiftDefault||o.hasOwnProperty("nativeEvent")&&o.nativeEvent.preventDownshiftDefault})}}function Ke(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){t.forEach(function(n){typeof n=="function"?n(o):n&&(n.current=o)})}}function Wt(){return String(Vt++)}function Fe(e,t){return!e||!t?e:Object.keys(e).reduce(function(r,o){return r[o]=jt(t,o)?t[o]:e[o],r},{})}function jt(e,t){return e[t]!==void 0}function qt(e){var t=e.key,r=e.keyCode;return r>=37&&r<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function Ie(e,t,r,o,n){n===void 0&&(n=!1);var u=r.length;if(u===0)return-1;var s=u-1;(typeof e!="number"||e<0||e>s)&&(e=t>0?-1:s+1);var i=e+t;i<0?i=n?s:0:i>s&&(i=n?0:s);var a=xe(i,t<0,r,o,n);return a===-1?e>=u?-1:e:a}function xe(e,t,r,o,n){n===void 0&&(n=!1);var u=r.length;if(t){for(var s=e;s>=0;s--)if(!o(r[s],s))return s}else for(var i=e;i<u;i++)if(!o(r[i],i))return i;return n?xe(t?u-1:0,t,r,o):-1}function ot(e,t,r,o){return o===void 0&&(o=!0),r&&t.some(function(n){return n&&(rt(n,e,r)||o&&rt(n,r.document.activeElement,r))})}var Nt=je(function(e){at(e).textContent=""},500);function at(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function _t(e,t){if(!(!e||!t)){var r=at(t);r.textContent=e,Nt(t)}}function zt(e){var t=e==null?void 0:e.getElementById("a11y-status-message");t&&t.remove()}var dt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function Ut(e,t,r){var o=e.props,n=e.type,u={};Object.keys(t).forEach(function(s){Xt(s,e,t,r),r[s]!==t[s]&&(u[s]=r[s])}),o.onStateChange&&Object.keys(u).length&&o.onStateChange(E({type:n},u))}function Xt(e,t,r,o){var n=t.props,u=t.type,s="on"+qe(e)+"Change";n[s]&&o[e]!==void 0&&o[e]!==r[e]&&n[s](E({type:u},o))}function Gt(e,t){return t.changes}var it=je(function(e,t){_t(e,t)},200),Yt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect,Jt="useId"in we?function(t){var r=t.id,o=t.labelId,n=t.menuId,u=t.getItemId,s=t.toggleButtonId,i=t.inputId,a="downshift-"+we.useId();r||(r=a);var m=d.useRef({labelId:o||r+"-label",menuId:n||r+"-menu",getItemId:u||function(h){return r+"-item-"+h},toggleButtonId:s||r+"-toggle-button",inputId:i||r+"-input"});return m.current}:function(t){var r=t.id,o=r===void 0?"downshift-"+Wt():r,n=t.labelId,u=t.menuId,s=t.getItemId,i=t.toggleButtonId,a=t.inputId,m=d.useRef({labelId:n||o+"-label",menuId:u||o+"-menu",getItemId:s||function(h){return o+"-item-"+h},toggleButtonId:i||o+"-toggle-button",inputId:a||o+"-input"});return m.current};function Qt(e,t,r,o){var n,u;if(e===void 0){if(t===void 0)throw new Error(o);n=r[t],u=t}else u=t===void 0?r.indexOf(e):t,n=e;return[n,u]}function Zt(e){return/^\S{1}$/.test(e)}function qe(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function ct(e){var t=d.useRef(e);return t.current=e,t}function en(e,t,r,o){var n=d.useRef(),u=d.useRef(),s=d.useCallback(function(w,p){u.current=p,w=Fe(w,p.props);var T=e(w,p),I=p.props.stateReducer(w,E({},p,{changes:T}));return I},[e]),i=d.useReducer(s,t,r),a=i[0],m=i[1],h=ct(t),S=d.useCallback(function(w){return m(E({props:h.current},w))},[h]),y=u.current;return d.useEffect(function(){var w=Fe(n.current,y==null?void 0:y.props),p=y&&n.current&&!o(w,a);p&&Ut(y,w,a),n.current=a},[a,y,o]),[a,S]}function tn(e,t,r,o){var n=en(e,t,r,o),u=n[0],s=n[1];return[Fe(u,t),s]}var ae={itemToString:function(t){return t?String(t):""},itemToKey:function(t){return t},stateReducer:Gt,scrollIntoView:At,environment:typeof window>"u"?void 0:window};function te(e,t,r){r===void 0&&(r=dt);var o=e["default"+qe(t)];return o!==void 0?o:r[t]}function de(e,t,r){r===void 0&&(r=dt);var o=e[t];if(o!==void 0)return o;var n=e["initial"+qe(t)];return n!==void 0?n:te(e,t,r)}function nn(e){var t=de(e,"selectedItem"),r=de(e,"isOpen"),o=dn(e),n=de(e,"inputValue");return{highlightedIndex:o<0&&t&&r?e.items.findIndex(function(u){return e.itemToKey(u)===e.itemToKey(t)}):o,isOpen:r,selectedItem:t,inputValue:n}}function $e(e,t,r){var o=e.items,n=e.initialHighlightedIndex,u=e.defaultHighlightedIndex,s=e.isItemDisabled,i=e.itemToKey,a=t.selectedItem,m=t.highlightedIndex;return o.length===0?-1:n!==void 0&&m===n&&!s(o[n],n)?n:u!==void 0&&!s(o[u],u)?u:a?o.findIndex(function(h){return i(a)===i(h)}):r<0&&!s(o[o.length-1],o.length-1)?o.length-1:r>0&&!s(o[0],0)?0:-1}function rn(e,t,r){var o=d.useRef({isMouseDown:!1,isTouchMove:!1,isTouchEnd:!1});return d.useEffect(function(){if(!e)return lt;var n=t.map(function(h){return h.current});function u(){o.current.isTouchEnd=!1,o.current.isMouseDown=!0}function s(h){o.current.isMouseDown=!1,ot(h.target,n,e)||r()}function i(){o.current.isTouchEnd=!1,o.current.isTouchMove=!1}function a(){o.current.isTouchMove=!0}function m(h){o.current.isTouchEnd=!0,!o.current.isTouchMove&&!ot(h.target,n,e,!1)&&r()}return e.addEventListener("mousedown",u),e.addEventListener("mouseup",s),e.addEventListener("touchstart",i),e.addEventListener("touchmove",a),e.addEventListener("touchend",m),function(){e.removeEventListener("mousedown",u),e.removeEventListener("mouseup",s),e.removeEventListener("touchstart",i),e.removeEventListener("touchmove",a),e.removeEventListener("touchend",m)}},[e,r]),o.current}var on=function(){return lt};function un(e,t,r,o){o===void 0&&(o={});var n=o.document,u=an();d.useEffect(function(){if(!(!e||u||!n)){var s=e(t);it(s,n)}},r),d.useEffect(function(){return function(){it.cancel(),zt(n)}},[n])}function sn(e){var t=e.highlightedIndex,r=e.isOpen,o=e.itemRefs,n=e.getItemNodeFromIndex,u=e.menuElement,s=e.scrollIntoView,i=d.useRef(!0);return Yt(function(){t<0||!r||!Object.keys(o.current).length||(i.current===!1?i.current=!0:s(n(t),u))},[t]),i}function ut(e,t,r){var o,n=((o=e.items)==null?void 0:o.length)&&t>=0;return E({isOpen:!1,highlightedIndex:-1},n&&E({selectedItem:e.items[t],isOpen:te(e,"isOpen"),highlightedIndex:te(e,"highlightedIndex")},r))}function ln(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}function an(){var e=we.useRef(!0);return we.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e.current}function ft(e){var t=te(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}function dn(e){var t=de(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}var be={environment:l.shape({addEventListener:l.func.isRequired,removeEventListener:l.func.isRequired,document:l.shape({createElement:l.func.isRequired,getElementById:l.func.isRequired,activeElement:l.any.isRequired,body:l.any.isRequired}).isRequired,Node:l.func.isRequired}),itemToString:l.func,itemToKey:l.func,stateReducer:l.func},gt=E({},be,{getA11yStatusMessage:l.func,highlightedIndex:l.number,defaultHighlightedIndex:l.number,initialHighlightedIndex:l.number,isOpen:l.bool,defaultIsOpen:l.bool,initialIsOpen:l.bool,selectedItem:l.any,initialSelectedItem:l.any,defaultSelectedItem:l.any,id:l.string,labelId:l.string,menuId:l.string,getItemId:l.func,toggleButtonId:l.string,onSelectedItemChange:l.func,onHighlightedIndexChange:l.func,onStateChange:l.func,onIsOpenChange:l.func,scrollIntoView:l.func});function cn(e,t,r){var o=t.type,n=t.props,u;switch(o){case r.ItemMouseMove:u={highlightedIndex:t.disabled?-1:t.index};break;case r.MenuMouseLeave:u={highlightedIndex:-1};break;case r.ToggleButtonClick:case r.FunctionToggleMenu:u={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:$e(n,e,0)};break;case r.FunctionOpenMenu:u={isOpen:!0,highlightedIndex:$e(n,e,0)};break;case r.FunctionCloseMenu:u={isOpen:!1};break;case r.FunctionSetHighlightedIndex:u={highlightedIndex:n.isItemDisabled(n.items[t.highlightedIndex],t.highlightedIndex)?-1:t.highlightedIndex};break;case r.FunctionSetInputValue:u={inputValue:t.inputValue};break;case r.FunctionReset:u={highlightedIndex:ft(n),isOpen:te(n,"isOpen"),selectedItem:te(n,"selectedItem"),inputValue:te(n,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return E({},e,u)}function fn(e){for(var t=e.keysSoFar,r=e.highlightedIndex,o=e.items,n=e.itemToString,u=e.isItemDisabled,s=t.toLowerCase(),i=0;i<o.length;i++){var a=(i+r+(t.length<2?1:0))%o.length,m=o[a];if(m!==void 0&&n(m).toLowerCase().startsWith(s)&&!u(m,a))return a}return r}ie(ie({},gt),{items:l.array.isRequired,isItemDisabled:l.func});var gn=ie(ie({},ae),{isItemDisabled:function(){return!1}}),ye=0,Ne=1,_e=2,Se=3,ze=4,Ue=5,Xe=6,Ge=7,Ye=8,Je=9,Qe=10,Ee=11,ht=12,mt=13,Ze=14,pt=15,vt=16,It=17,bt=18,et=19,Ve=20,yt=21,wt=Object.freeze({__proto__:null,FunctionCloseMenu:It,FunctionOpenMenu:vt,FunctionReset:yt,FunctionSelectItem:et,FunctionSetHighlightedIndex:bt,FunctionSetInputValue:Ve,FunctionToggleMenu:pt,ItemClick:Ze,ItemMouseMove:mt,MenuMouseLeave:ht,ToggleButtonBlur:Ee,ToggleButtonClick:ye,ToggleButtonKeyDownArrowDown:Ne,ToggleButtonKeyDownArrowUp:_e,ToggleButtonKeyDownCharacter:Se,ToggleButtonKeyDownEnd:Xe,ToggleButtonKeyDownEnter:Ge,ToggleButtonKeyDownEscape:ze,ToggleButtonKeyDownHome:Ue,ToggleButtonKeyDownPageDown:Qe,ToggleButtonKeyDownPageUp:Je,ToggleButtonKeyDownSpaceButton:Ye});function hn(e,t){var r,o=t.type,n=t.props,u=t.altKey,s;switch(o){case Ze:s={isOpen:te(n,"isOpen"),highlightedIndex:ft(n),selectedItem:n.items[t.index]};break;case Se:{var i=t.key,a=""+e.inputValue+i,m=!e.isOpen&&e.selectedItem?n.items.findIndex(function(w){return n.itemToKey(w)===n.itemToKey(e.selectedItem)}):e.highlightedIndex,h=fn({keysSoFar:a,highlightedIndex:m,items:n.items,itemToString:n.itemToString,isItemDisabled:n.isItemDisabled});s={inputValue:a,highlightedIndex:h,isOpen:!0}}break;case Ne:{var S=e.isOpen?Ie(e.highlightedIndex,1,n.items,n.isItemDisabled):u&&e.selectedItem==null?-1:$e(n,e,1);s={highlightedIndex:S,isOpen:!0}}break;case _e:if(e.isOpen&&u)s=ut(n,e.highlightedIndex,!1);else{var y=e.isOpen?Ie(e.highlightedIndex,-1,n.items,n.isItemDisabled):$e(n,e,-1);s={highlightedIndex:y,isOpen:!0}}break;case Ge:case Ye:s=ut(n,e.highlightedIndex,!1);break;case Ue:s={highlightedIndex:xe(0,!1,n.items,n.isItemDisabled),isOpen:!0};break;case Xe:s={highlightedIndex:xe(n.items.length-1,!0,n.items,n.isItemDisabled),isOpen:!0};break;case Je:s={highlightedIndex:Ie(e.highlightedIndex,-10,n.items,n.isItemDisabled)};break;case Qe:s={highlightedIndex:Ie(e.highlightedIndex,10,n.items,n.isItemDisabled)};break;case ze:s={isOpen:!1,highlightedIndex:-1};break;case Ee:s=E({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((r=n.items)==null?void 0:r.length)&&{selectedItem:n.items[e.highlightedIndex]});break;case et:s={selectedItem:t.selectedItem};break;default:return cn(e,t,wt)}return E({},e,s)}var mn=["onClick"],pn=["onMouseLeave","refKey","ref"],vn=["onBlur","onClick","onPress","onKeyDown","refKey","ref"],In=["item","index","onMouseMove","onClick","onMouseDown","onPress","refKey","disabled","ref"];bn.stateChangeTypes=wt;function bn(e){e===void 0&&(e={});var t=E({},gn,e),r=t.scrollIntoView,o=t.environment,n=t.getA11yStatusMessage,u=tn(hn,t,nn,ln),s=u[0],i=u[1],a=s.isOpen,m=s.highlightedIndex,h=s.selectedItem,S=s.inputValue,y=d.useRef(null),w=d.useRef(null),p=d.useRef({}),T=d.useRef(null),I=Jt(t),x=ct({state:s,props:t}),U=d.useCallback(function(g){return p.current[I.getItemId(g)]},[I]);un(n,s,[a,m,h,S],o);var q=sn({menuElement:w.current,highlightedIndex:m,isOpen:a,itemRefs:p,scrollIntoView:r,getItemNodeFromIndex:U});d.useEffect(function(){return T.current=je(function(g){g({type:Ve,inputValue:""})},500),function(){T.current.cancel()}},[]),d.useEffect(function(){S&&T.current(i)},[i,S]),d.useEffect(function(){var g=de(t,"isOpen");g&&y.current&&y.current.focus()},[]);var R=rn(o,[y,w],d.useCallback(function(){x.current.state.isOpen&&i({type:Ee})},[i,x])),ne=on();d.useEffect(function(){a||(p.current={})},[a]);var re=d.useMemo(function(){return{ArrowDown:function(f){f.preventDefault(),i({type:Ne,altKey:f.altKey})},ArrowUp:function(f){f.preventDefault(),i({type:_e,altKey:f.altKey})},Home:function(f){f.preventDefault(),i({type:Ue})},End:function(f){f.preventDefault(),i({type:Xe})},Escape:function(){x.current.state.isOpen&&i({type:ze})},Enter:function(f){f.preventDefault(),i({type:x.current.state.isOpen?Ge:ye})},PageUp:function(f){x.current.state.isOpen&&(f.preventDefault(),i({type:Je}))},PageDown:function(f){x.current.state.isOpen&&(f.preventDefault(),i({type:Qe}))}," ":function(f){f.preventDefault();var c=x.current.state;if(!c.isOpen){i({type:ye});return}c.inputValue?i({type:Se,key:" "}):i({type:Ye})}}},[i,x]),ue=d.useCallback(function(){i({type:pt})},[i]),oe=d.useCallback(function(){i({type:It})},[i]),ce=d.useCallback(function(){i({type:vt})},[i]),fe=d.useCallback(function(g){i({type:bt,highlightedIndex:g})},[i]),ge=d.useCallback(function(g){i({type:et,selectedItem:g})},[i]),he=d.useCallback(function(){i({type:yt})},[i]),D=d.useCallback(function(g){i({type:Ve,inputValue:g})},[i]),O=d.useCallback(function(g){var f=g===void 0?{}:g,c=f.onClick,$=pe(f,mn),A=function(){var B;(B=y.current)==null||B.focus()};return E({id:I.labelId,htmlFor:I.toggleButtonId,onClick:ee(c,A)},$)},[I]),se=d.useCallback(function(g,f){var c,$=g===void 0?{}:g,A=$.onMouseLeave,P=$.refKey,B=P===void 0?"ref":P,W=$.ref,H=pe($,pn),N=f===void 0?{}:f;N.suppressRefError;var L=function(){i({type:ht})};return E((c={},c[B]=Ke(W,function(k){w.current=k}),c.id=I.menuId,c.role="listbox",c["aria-labelledby"]=H&&H["aria-label"]?void 0:""+I.labelId,c.onMouseLeave=ee(A,L),c),H)},[i,ne,I]),X=d.useCallback(function(g,f){var c,$=g===void 0?{}:g,A=$.onBlur,P=$.onClick;$.onPress;var B=$.onKeyDown,W=$.refKey,H=W===void 0?"ref":W,N=$.ref,L=pe($,vn),k=f===void 0?{}:f;k.suppressRefError;var M=x.current.state,G=function(){i({type:ye})},Y=function(){M.isOpen&&!R.isMouseDown&&i({type:Ee})},Z=function(K){var J=qt(K);J&&re[J]?re[J](K):Zt(J)&&i({type:Se,key:J})},_=E((c={},c[H]=Ke(N,function(z){y.current=z}),c["aria-activedescendant"]=M.isOpen&&M.highlightedIndex>-1?I.getItemId(M.highlightedIndex):"",c["aria-controls"]=I.menuId,c["aria-expanded"]=x.current.state.isOpen,c["aria-haspopup"]="listbox",c["aria-labelledby"]=L&&L["aria-label"]?void 0:""+I.labelId,c.id=I.toggleButtonId,c.role="combobox",c.tabIndex=0,c.onBlur=ee(A,Y),c),L);return L.disabled||(_.onClick=ee(P,G),_.onKeyDown=ee(B,Z)),_},[i,I,x,R,ne,re]),b=d.useCallback(function(g){var f,c=g===void 0?{}:g,$=c.item,A=c.index,P=c.onMouseMove,B=c.onClick,W=c.onMouseDown;c.onPress;var H=c.refKey,N=H===void 0?"ref":H,L=c.disabled,k=c.ref,M=pe(c,In);L!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');var G=x.current,Y=G.state,Z=G.props,_=Qt($,A,Z.items,"Pass either item or index to getItemProps!"),z=_[0],K=_[1],J=Z.isItemDisabled(z,K),Et=function(){R.isTouchEnd||K===Y.highlightedIndex||(q.current=!1,i({type:mt,index:K,disabled:J}))},kt=function(){i({type:Ze,index:K})},Mt=function(Ct){return Ct.preventDefault()},me=E((f={},f[N]=Ke(k,function(le){le&&(p.current[I.getItemId(K)]=le)}),f["aria-disabled"]=J,f["aria-selected"]=z===Y.selectedItem,f.id=I.getItemId(K),f.role="option",f),M);return J||(me.onClick=ee(B,kt)),me.onMouseMove=ee(P,Et),me.onMouseDown=ee(W,Mt),me},[x,I,R,q,i]);return{getToggleButtonProps:X,getLabelProps:O,getMenuProps:se,getItemProps:b,toggleMenu:ue,openMenu:ce,closeMenu:oe,setHighlightedIndex:fe,selectItem:ge,reset:he,setInputValue:D,highlightedIndex:m,isOpen:a,selectedItem:h,inputValue:S}}E({},gt,{items:l.array.isRequired,isItemDisabled:l.func,inputValue:l.string,defaultInputValue:l.string,initialInputValue:l.string,inputId:l.string,onInputValueChange:l.func});E({},ae,{isItemDisabled:function(){return!1}});be.stateReducer,be.itemToKey,be.environment,l.array,l.array,l.array,l.func,l.number,l.number,l.number,l.func,l.func,l.string,l.string;ae.itemToKey,ae.stateReducer,ae.environment;const xt=6,yn=48,wn=1,xn=yn*xt,$n=wn*xt-1,Nn=xn+$n,Sn=j.div`
  ${()=>{const{tokens:e}=Q(),{select:t}=e;return[C`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,En=j.div`
  ${({$isOpen:e,$hasError:t,$isDisabled:r})=>{const{tokens:o}=Q(),{select:n}=o;return[C`
        display: grid;
        background: ${n.button.backgroundColor.base};
        padding-top: ${n.button.paddingTop};
        padding-bottom: ${n.button.paddingBottom};
        padding-left: ${n.button.paddingLeft};
        padding-right: ${n.button.paddingRight};
        border-radius: ${n.button.stroke.radius};
        outline-width: ${n.button.stroke.width.base};
        outline-style: ${n.button.stroke.style};
        outline-color: ${n.button.stroke.color.base};
        outline-offset: ${n.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${n.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${n.button.stroke.width.hover};
          outline-color: ${n.button.stroke.color.hover};
          outline-offset: ${n.button.stroke.offset.hover};

          svg {
            color: ${n.button.icon.color.hover};
          }
        }
      `,t&&C`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.error};
            outline-color: ${n.button.stroke.color.error};
            outline-offset: ${n.button.stroke.offset.error};
          }
        `,e&&C`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.active};
            outline-color: ${n.button.stroke.color.active};
            outline-offset: ${n.button.stroke.offset.active};

            svg {
              color: ${n.button.icon.color.active};
            }
          }
        `,r&&C`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.disabled};
            outline-color: ${n.button.stroke.color.disabled};
            outline-offset: ${n.button.stroke.offset.disabled};

            svg {
              color: ${n.button.icon.color.disabled};
            }
          }
        `]}}
`,kn=j.div`
  ${()=>{const{tokens:e}=Q(),{select:t}=e;return C`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,Mn=j.div`
  ${()=>{const{tokens:e}=Q(),{select:t}=e;return C`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,$t=j(Tt)`
  rotate: 0deg;
`,Cn=j($t)`
  rotate: 180deg;
`,Tn=j.div`
  ${({$isOpen:e})=>{const{tokens:t}=Q(),{select:r}=t;return C`
      display: ${e?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${r.menu.radius};
      border-width: ${r.menu.stroke.width};
      border-style: ${r.menu.stroke.style};
      border-color: ${r.menu.stroke.color};
      box-shadow: 0px 2px 2px ${r.menu.shadow.outer.color};
      z-index: ${r.menu.zIndex};
    `}}
`,St=j.div`
  ${()=>C`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`,Rn=j(St)`
  ${({$visible:e})=>{const{tokens:t}=Q(),{select:r}=t;return[C`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${r.menu.shadow.inner.color};
      `,e&&C`
          transform: translateY(0px);
        `]}}
`,Dn=j(St)`
  ${({$visible:e})=>{const{tokens:t}=Q(),{select:r}=t;return[C`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${r.menu.shadow.inner.color};
      `,e&&C`
          transform: translateY(0px);
        `]}}
`,On=j.ul`
  ${()=>{const{tokens:e}=Q(),{select:t}=e,{menu:{scrollBar:{thumbColor:r,trackColor:o,radius:n}}}=t;return C`
      all: unset;
      display: grid;
      scrollbar-color: ${r} ${o};
      background: ${t.menu.separator.color};
      gap: ${t.menu.separator.width};
      overflow-y: auto;

      @supports not (scrollbar-color: ${r} ${o}) {
        &::-webkit-scrollbar {
          background: ${o};
        }

        &::-webkit-scrollbar-thumb {
          background: ${r};
          border: 4px solid ${o};
          border-radius: ${n};
        }
      }
    `}}
`;function Bn(e){const{offsetValue:t}=e,{refs:r,floatingStyles:o}=Rt({placement:"bottom-start",whileElementsMounted:Dt,middleware:[Ot(t),Bt({padding:16}),Ht({apply({rects:n,elements:u}){Object.assign(u.floating.style,{minWidth:`${n.reference.width}px`})}})]});return{refs:r,floatingStyles:o}}function Hn(e){const{isOpen:t}=e,r={threshold:1},o=d.useRef(null),n=d.useRef(null),[u,s]=d.useState(!1),[i,a]=d.useState(!1);function m(h,S){if(!(h.length<2)){if(S===0)return o;if(h.length===S+1)return n}}return d.useEffect(()=>{if(!t||!o.current||!n.current)return;const h=new IntersectionObserver(([y])=>{y&&s(!y.isIntersecting)},r),S=new IntersectionObserver(([y])=>{y&&a(!y.isIntersecting)},r);return h.observe(o.current),S.observe(n.current),()=>{h.disconnect(),S.disconnect()}},[t]),{getListItemRef:m,showTopShadow:u,showBottomShadow:i}}function Ln(e){const{getToggleButtonProps:t,getMenuProps:r,isOpen:o,items:n,toggleButtonProps:u,renderButtonContent:s,renderListItem:i,hasError:a,isDisabled:m,maxListHeight:h,testID:S="select"}=e,{tokens:y}=Q(),{select:w}=y,{refs:p,floatingStyles:T}=Bn({offsetValue:parseInt(w.gap,10)}),{getListItemRef:I,showTopShadow:x,showBottomShadow:U}=Hn({isOpen:o});return F.jsxs(F.Fragment,{children:[F.jsx(Sn,{children:F.jsx(En,{...u,...t({ref:p.setReference,disabled:m}),$isOpen:o,$hasError:a,$isDisabled:m,"data-testid":S,children:F.jsxs(kn,{children:[s(),F.jsx(Mn,{children:o?F.jsx(Cn,{"aria-hidden":"true"}):F.jsx($t,{"aria-hidden":"true"})})]})})}),F.jsxs(Tn,{...r({ref:p.setFloating}),style:T,$isOpen:o,children:[F.jsx(Rn,{$visible:x}),F.jsx(On,{style:{maxHeight:h},children:o&&n.map((q,R)=>i(I(n,R),q,R))}),F.jsx(Dn,{$visible:U})]})]})}Ln.__docgenInfo={description:"",methods:[],displayName:"SelectBase",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},toggleButtonProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"literal",value:'"aria-describedby"'}],raw:`Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-describedby"
>`},description:""},renderButtonContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},renderListItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(ref: any, item: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"any"},name:"ref"},{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},maxListHeight:{required:!1,tsType:{name:"number"},description:""}}};export{Nn as M,Ln as S,bn as u};
