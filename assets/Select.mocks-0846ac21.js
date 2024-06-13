import{_ as pe}from"./objectWithoutPropertiesLoose-68193569.js";import{_ as T}from"./extends-4c19d496.js";import{P as l}from"./index-2baff29e.js";import{r as d,R as we}from"./index-c013ead5.js";import{j as V}from"./jsx-runtime-6eef64cc.js";import{a as j,u as Q,b as M}from"./index-f9091704.js";import{b as Dt}from"./index-b1778622.js";import{b as Ct,h as Rt,o as Ot,i as Bt,l as Ht}from"./floating-ui.react-06582175.js";var ie=function(){return ie=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},ie.apply(this,arguments)};var v={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=Symbol.for("react.element"),We=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),De=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),Kt=Symbol.for("react.server_context"),Re=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Lt=Symbol.for("react.offscreen"),lt;lt=Symbol.for("react.module.reference");function F(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ae:switch(e=e.type,e){case Ee:case Me:case ke:case Oe:case Be:return e;default:switch(e=e&&e.$$typeof,e){case Kt:case Ce:case Re:case Ke:case He:case De:return e;default:return t}}case We:return t}}}v.ContextConsumer=Ce;v.ContextProvider=De;v.Element=Ae;v.ForwardRef=Re;v.Fragment=Ee;v.Lazy=Ke;v.Memo=He;v.Portal=We;v.Profiler=Me;v.StrictMode=ke;v.Suspense=Oe;v.SuspenseList=Be;v.isAsyncMode=function(){return!1};v.isConcurrentMode=function(){return!1};v.isContextConsumer=function(e){return F(e)===Ce};v.isContextProvider=function(e){return F(e)===De};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ae};v.isForwardRef=function(e){return F(e)===Re};v.isFragment=function(e){return F(e)===Ee};v.isLazy=function(e){return F(e)===Ke};v.isMemo=function(e){return F(e)===He};v.isPortal=function(e){return F(e)===We};v.isProfiler=function(e){return F(e)===Me};v.isStrictMode=function(e){return F(e)===ke};v.isSuspense=function(e){return F(e)===Oe};v.isSuspenseList=function(e){return F(e)===Be};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ee||e===Me||e===ke||e===Oe||e===Be||e===Lt||typeof e=="object"&&e!==null&&(e.$$typeof===Ke||e.$$typeof===He||e.$$typeof===De||e.$$typeof===Ce||e.$$typeof===Re||e.$$typeof===lt||e.getModuleId!==void 0)};v.typeOf=F;const nt=e=>typeof e=="object"&&e!=null&&e.nodeType===1,rt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Le=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return rt(r.overflowY,t)||rt(r.overflowX,t)||(o=>{const n=(u=>{if(!u.ownerDocument||!u.ownerDocument.defaultView)return null;try{return u.ownerDocument.defaultView.frameElement}catch{return null}})(o);return!!n&&(n.clientHeight<o.scrollHeight||n.clientWidth<o.scrollWidth)})(e)}return!1},ve=(e,t,r,o,n,u,s,i)=>u<e&&s>t||u>e&&s<t?0:u<=e&&i<=r||s>=t&&i>=r?u-e-o:s>t&&i<r||u<e&&i>r?s-t+n:0,Pt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Vt=(e,t)=>{var r,o,n,u;if(typeof document>"u")return[];const{scrollMode:s,block:i,inline:a,boundary:m,skipOverflowHiddenElements:h}=t,S=typeof m=="function"?m:X=>X!==m;if(!nt(e))throw new TypeError("Invalid target");const y=document.scrollingElement||document.documentElement,w=[];let p=e;for(;nt(p)&&S(p);){if(p=Pt(p),p===y){w.push(p);break}p!=null&&p===document.body&&Le(p)&&!Le(document.documentElement)||p!=null&&Le(p,h)&&w.push(p)}const D=(o=(r=window.visualViewport)==null?void 0:r.width)!=null?o:innerWidth,I=(u=(n=window.visualViewport)==null?void 0:n.height)!=null?u:innerHeight,{scrollX:x,scrollY:z}=window,{height:q,width:C,top:ne,right:re,bottom:ue,left:oe}=e.getBoundingClientRect(),{top:ce,right:fe,bottom:ge,left:he}=(X=>{const b=window.getComputedStyle(X);return{top:parseFloat(b.scrollMarginTop)||0,right:parseFloat(b.scrollMarginRight)||0,bottom:parseFloat(b.scrollMarginBottom)||0,left:parseFloat(b.scrollMarginLeft)||0}})(e);let R=i==="start"||i==="nearest"?ne-ce:i==="end"?ue+ge:ne+q/2-ce+ge,O=a==="center"?oe+C/2-he+fe:a==="end"?re+fe:oe-he;const se=[];for(let X=0;X<w.length;X++){const b=w[X],{height:g,width:f,top:c,right:$,bottom:A,left:L}=b.getBoundingClientRect();if(s==="if-needed"&&ne>=0&&oe>=0&&ue<=I&&re<=D&&ne>=c&&ue<=A&&oe>=L&&re<=$)return se;const B=getComputedStyle(b),W=parseInt(B.borderLeftWidth,10),H=parseInt(B.borderTopWidth,10),N=parseInt(B.borderRightWidth,10),K=parseInt(B.borderBottomWidth,10);let E=0,k=0;const G="offsetWidth"in b?b.offsetWidth-b.clientWidth-W-N:0,Y="offsetHeight"in b?b.offsetHeight-b.clientHeight-H-K:0,Z="offsetWidth"in b?b.offsetWidth===0?0:f/b.offsetWidth:0,_="offsetHeight"in b?b.offsetHeight===0?0:g/b.offsetHeight:0;if(y===b)E=i==="start"?R:i==="end"?R-I:i==="nearest"?ve(z,z+I,I,H,K,z+R,z+R+q,q):R-I/2,k=a==="start"?O:a==="center"?O-D/2:a==="end"?O-D:ve(x,x+D,D,W,N,x+O,x+O+C,C),E=Math.max(0,E+z),k=Math.max(0,k+x);else{E=i==="start"?R-c-H:i==="end"?R-A+K+Y:i==="nearest"?ve(c,A,g,H,K+Y,R,R+q,q):R-(c+g/2)+Y/2,k=a==="start"?O-L-W:a==="center"?O-(L+f/2)+G/2:a==="end"?O-$+N+G:ve(L,$,f,W,N+G,O,O+C,C);const{scrollLeft:U,scrollTop:P}=b;E=_===0?0:Math.max(0,Math.min(P+E/_,b.scrollHeight-g/_+Y)),k=Z===0?0:Math.max(0,Math.min(U+k/Z,b.scrollWidth-f/Z+G)),R+=P-E,O+=U-k}se.push({el:b,top:E,left:k})}return se};var Ft=0;function je(){}function At(e,t){if(e){var r=Vt(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});r.forEach(function(o){var n=o.el,u=o.top,s=o.left;n.scrollTop=u,n.scrollLeft=s})}}function ot(e,t,r){var o=e===t||t instanceof r.Node&&e.contains&&e.contains(t);return o}function qe(e,t){var r;function o(){r&&clearTimeout(r)}function n(){for(var u=arguments.length,s=new Array(u),i=0;i<u;i++)s[i]=arguments[i];o(),r=setTimeout(function(){r=null,e.apply(void 0,s)},t)}return n.cancel=o,n}function ee(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){for(var n=arguments.length,u=new Array(n>1?n-1:0),s=1;s<n;s++)u[s-1]=arguments[s];return t.some(function(i){return i&&i.apply(void 0,[o].concat(u)),o.preventDownshiftDefault||o.hasOwnProperty("nativeEvent")&&o.nativeEvent.preventDownshiftDefault})}}function Pe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){t.forEach(function(n){typeof n=="function"?n(o):n&&(n.current=o)})}}function Wt(){return String(Ft++)}function Ve(e,t){return!e||!t?e:Object.keys(e).reduce(function(r,o){return r[o]=jt(t,o)?t[o]:e[o],r},{})}function jt(e,t){return e[t]!==void 0}function qt(e){var t=e.key,r=e.keyCode;return r>=37&&r<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function Ie(e,t,r,o,n){n===void 0&&(n=!1);var u=r.length;if(u===0)return-1;var s=u-1;(typeof e!="number"||e<0||e>s)&&(e=t>0?-1:s+1);var i=e+t;i<0?i=n?s:0:i>s&&(i=n?0:s);var a=xe(i,t<0,r,o,n);return a===-1?e>=u?-1:e:a}function xe(e,t,r,o,n){n===void 0&&(n=!1);var u=r.length;if(t){for(var s=e;s>=0;s--)if(!o(r[s],s))return s}else for(var i=e;i<u;i++)if(!o(r[i],i))return i;return n?xe(t?u-1:0,t,r,o):-1}function it(e,t,r,o){return o===void 0&&(o=!0),r&&t.some(function(n){return n&&(ot(n,e,r)||o&&ot(n,r.document.activeElement,r))})}var Nt=qe(function(e){at(e).textContent=""},500);function at(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function _t(e,t){if(!(!e||!t)){var r=at(t);r.textContent=e,Nt(t)}}function Ut(e){var t=e==null?void 0:e.getElementById("a11y-status-message");t&&t.remove()}var dt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function zt(e,t,r){var o=e.props,n=e.type,u={};Object.keys(t).forEach(function(s){Xt(s,e,t,r),r[s]!==t[s]&&(u[s]=r[s])}),o.onStateChange&&Object.keys(u).length&&o.onStateChange(T({type:n},u))}function Xt(e,t,r,o){var n=t.props,u=t.type,s="on"+Ne(e)+"Change";n[s]&&o[e]!==void 0&&o[e]!==r[e]&&n[s](T({type:u},o))}function Gt(e,t){return t.changes}var ut=qe(function(e,t){_t(e,t)},200),Yt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect,Jt="useId"in we?function(t){var r=t.id,o=t.labelId,n=t.menuId,u=t.getItemId,s=t.toggleButtonId,i=t.inputId,a="downshift-"+we.useId();r||(r=a);var m=d.useRef({labelId:o||r+"-label",menuId:n||r+"-menu",getItemId:u||function(h){return r+"-item-"+h},toggleButtonId:s||r+"-toggle-button",inputId:i||r+"-input"});return m.current}:function(t){var r=t.id,o=r===void 0?"downshift-"+Wt():r,n=t.labelId,u=t.menuId,s=t.getItemId,i=t.toggleButtonId,a=t.inputId,m=d.useRef({labelId:n||o+"-label",menuId:u||o+"-menu",getItemId:s||function(h){return o+"-item-"+h},toggleButtonId:i||o+"-toggle-button",inputId:a||o+"-input"});return m.current};function Qt(e,t,r,o){var n,u;if(e===void 0){if(t===void 0)throw new Error(o);n=r[t],u=t}else u=t===void 0?r.indexOf(e):t,n=e;return[n,u]}function Zt(e){return/^\S{1}$/.test(e)}function Ne(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function ct(e){var t=d.useRef(e);return t.current=e,t}function en(e,t,r,o){var n=d.useRef(),u=d.useRef(),s=d.useCallback(function(w,p){u.current=p,w=Ve(w,p.props);var D=e(w,p),I=p.props.stateReducer(w,T({},p,{changes:D}));return I},[e]),i=d.useReducer(s,t,r),a=i[0],m=i[1],h=ct(t),S=d.useCallback(function(w){return m(T({props:h.current},w))},[h]),y=u.current;return d.useEffect(function(){var w=Ve(n.current,y==null?void 0:y.props),p=y&&n.current&&!o(w,a);p&&zt(y,w,a),n.current=a},[a,y,o]),[a,S]}function tn(e,t,r,o){var n=en(e,t,r,o),u=n[0],s=n[1];return[Ve(u,t),s]}var ae={itemToString:function(t){return t?String(t):""},itemToKey:function(t){return t},stateReducer:Gt,scrollIntoView:At,environment:typeof window>"u"?void 0:window};function te(e,t,r){r===void 0&&(r=dt);var o=e["default"+Ne(t)];return o!==void 0?o:r[t]}function de(e,t,r){r===void 0&&(r=dt);var o=e[t];if(o!==void 0)return o;var n=e["initial"+Ne(t)];return n!==void 0?n:te(e,t,r)}function nn(e){var t=de(e,"selectedItem"),r=de(e,"isOpen"),o=dn(e),n=de(e,"inputValue");return{highlightedIndex:o<0&&t&&r?e.items.findIndex(function(u){return e.itemToKey(u)===e.itemToKey(t)}):o,isOpen:r,selectedItem:t,inputValue:n}}function $e(e,t,r){var o=e.items,n=e.initialHighlightedIndex,u=e.defaultHighlightedIndex,s=e.isItemDisabled,i=e.itemToKey,a=t.selectedItem,m=t.highlightedIndex;return o.length===0?-1:n!==void 0&&m===n&&!s(o[n],n)?n:u!==void 0&&!s(o[u],u)?u:a?o.findIndex(function(h){return i(a)===i(h)}):r<0&&!s(o[o.length-1],o.length-1)?o.length-1:r>0&&!s(o[0],0)?0:-1}function rn(e,t,r){var o=d.useRef({isMouseDown:!1,isTouchMove:!1,isTouchEnd:!1});return d.useEffect(function(){if(!e)return je;var n=t.map(function(h){return h.current});function u(){o.current.isTouchEnd=!1,o.current.isMouseDown=!0}function s(h){o.current.isMouseDown=!1,it(h.target,n,e)||r()}function i(){o.current.isTouchEnd=!1,o.current.isTouchMove=!1}function a(){o.current.isTouchMove=!0}function m(h){o.current.isTouchEnd=!0,!o.current.isTouchMove&&!it(h.target,n,e,!1)&&r()}return e.addEventListener("mousedown",u),e.addEventListener("mouseup",s),e.addEventListener("touchstart",i),e.addEventListener("touchmove",a),e.addEventListener("touchend",m),function(){e.removeEventListener("mousedown",u),e.removeEventListener("mouseup",s),e.removeEventListener("touchstart",i),e.removeEventListener("touchmove",a),e.removeEventListener("touchend",m)}},[e,r]),o.current}var on=function(){return je};function un(e,t,r,o){o===void 0&&(o={});var n=o.document,u=an();d.useEffect(function(){if(!(!e||u||!n)){var s=e(t);ut(s,n)}},r),d.useEffect(function(){return function(){ut.cancel(),Ut(n)}},[n])}function sn(e){var t=e.highlightedIndex,r=e.isOpen,o=e.itemRefs,n=e.getItemNodeFromIndex,u=e.menuElement,s=e.scrollIntoView,i=d.useRef(!0);return Yt(function(){t<0||!r||!Object.keys(o.current).length||(i.current===!1?i.current=!0:s(n(t),u))},[t]),i}function st(e,t,r){var o;r===void 0&&(r=!0);var n=((o=e.items)==null?void 0:o.length)&&t>=0;return T({isOpen:!1,highlightedIndex:-1},n&&T({selectedItem:e.items[t],isOpen:te(e,"isOpen"),highlightedIndex:te(e,"highlightedIndex")},r&&{inputValue:e.itemToString(e.items[t])}))}function ln(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}function an(){var e=we.useRef(!0);return we.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e.current}function ft(e){var t=te(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}function dn(e){var t=de(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}var be={environment:l.shape({addEventListener:l.func.isRequired,removeEventListener:l.func.isRequired,document:l.shape({createElement:l.func.isRequired,getElementById:l.func.isRequired,activeElement:l.any.isRequired,body:l.any.isRequired}).isRequired,Node:l.func.isRequired}),itemToString:l.func,itemToKey:l.func,stateReducer:l.func},gt=T({},be,{getA11yStatusMessage:l.func,highlightedIndex:l.number,defaultHighlightedIndex:l.number,initialHighlightedIndex:l.number,isOpen:l.bool,defaultIsOpen:l.bool,initialIsOpen:l.bool,selectedItem:l.any,initialSelectedItem:l.any,defaultSelectedItem:l.any,id:l.string,labelId:l.string,menuId:l.string,getItemId:l.func,toggleButtonId:l.string,onSelectedItemChange:l.func,onHighlightedIndexChange:l.func,onStateChange:l.func,onIsOpenChange:l.func,scrollIntoView:l.func});function cn(e,t,r){var o=t.type,n=t.props,u;switch(o){case r.ItemMouseMove:u={highlightedIndex:t.disabled?-1:t.index};break;case r.MenuMouseLeave:u={highlightedIndex:-1};break;case r.ToggleButtonClick:case r.FunctionToggleMenu:u={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:$e(n,e,0)};break;case r.FunctionOpenMenu:u={isOpen:!0,highlightedIndex:$e(n,e,0)};break;case r.FunctionCloseMenu:u={isOpen:!1};break;case r.FunctionSetHighlightedIndex:u={highlightedIndex:n.isItemDisabled(n.items[t.highlightedIndex],t.highlightedIndex)?-1:t.highlightedIndex};break;case r.FunctionSetInputValue:u={inputValue:t.inputValue};break;case r.FunctionReset:u={highlightedIndex:ft(n),isOpen:te(n,"isOpen"),selectedItem:te(n,"selectedItem"),inputValue:te(n,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return T({},e,u)}function fn(e){for(var t=e.keysSoFar,r=e.highlightedIndex,o=e.items,n=e.itemToString,u=e.isItemDisabled,s=t.toLowerCase(),i=0;i<o.length;i++){var a=(i+r+(t.length<2?1:0))%o.length,m=o[a];if(m!==void 0&&n(m).toLowerCase().startsWith(s)&&!u(m,a))return a}return r}ie(ie({},gt),{items:l.array.isRequired,isItemDisabled:l.func});var gn=ie(ie({},ae),{isItemDisabled:function(){return!1}}),hn=je,ye=0,_e=1,Ue=2,Se=3,ze=4,Xe=5,Ge=6,Ye=7,Je=8,Qe=9,Ze=10,Te=11,ht=12,mt=13,et=14,pt=15,vt=16,It=17,bt=18,tt=19,Fe=20,yt=21,wt=Object.freeze({__proto__:null,FunctionCloseMenu:It,FunctionOpenMenu:vt,FunctionReset:yt,FunctionSelectItem:tt,FunctionSetHighlightedIndex:bt,FunctionSetInputValue:Fe,FunctionToggleMenu:pt,ItemClick:et,ItemMouseMove:mt,MenuMouseLeave:ht,ToggleButtonBlur:Te,ToggleButtonClick:ye,ToggleButtonKeyDownArrowDown:_e,ToggleButtonKeyDownArrowUp:Ue,ToggleButtonKeyDownCharacter:Se,ToggleButtonKeyDownEnd:Ge,ToggleButtonKeyDownEnter:Ye,ToggleButtonKeyDownEscape:ze,ToggleButtonKeyDownHome:Xe,ToggleButtonKeyDownPageDown:Ze,ToggleButtonKeyDownPageUp:Qe,ToggleButtonKeyDownSpaceButton:Je});function mn(e,t){var r,o=t.type,n=t.props,u=t.altKey,s;switch(o){case et:s={isOpen:te(n,"isOpen"),highlightedIndex:ft(n),selectedItem:n.items[t.index]};break;case Se:{var i=t.key,a=""+e.inputValue+i,m=!e.isOpen&&e.selectedItem?n.items.findIndex(function(w){return n.itemToKey(w)===n.itemToKey(e.selectedItem)}):e.highlightedIndex,h=fn({keysSoFar:a,highlightedIndex:m,items:n.items,itemToString:n.itemToString,isItemDisabled:n.isItemDisabled});s={inputValue:a,highlightedIndex:h,isOpen:!0}}break;case _e:{var S=e.isOpen?Ie(e.highlightedIndex,1,n.items,n.isItemDisabled):u&&e.selectedItem==null?-1:$e(n,e,1);s={highlightedIndex:S,isOpen:!0}}break;case Ue:if(e.isOpen&&u)s=st(n,e.highlightedIndex,!1);else{var y=e.isOpen?Ie(e.highlightedIndex,-1,n.items,n.isItemDisabled):$e(n,e,-1);s={highlightedIndex:y,isOpen:!0}}break;case Ye:case Je:s=st(n,e.highlightedIndex,!1);break;case Xe:s={highlightedIndex:xe(0,!1,n.items,n.isItemDisabled),isOpen:!0};break;case Ge:s={highlightedIndex:xe(n.items.length-1,!0,n.items,n.isItemDisabled),isOpen:!0};break;case Qe:s={highlightedIndex:Ie(e.highlightedIndex,-10,n.items,n.isItemDisabled)};break;case Ze:s={highlightedIndex:Ie(e.highlightedIndex,10,n.items,n.isItemDisabled)};break;case ze:s={isOpen:!1,highlightedIndex:-1};break;case Te:s=T({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((r=n.items)==null?void 0:r.length)&&{selectedItem:n.items[e.highlightedIndex]});break;case tt:s={selectedItem:t.selectedItem};break;default:return cn(e,t,wt)}return T({},e,s)}var pn=["onClick"],vn=["onMouseLeave","refKey","ref"],In=["onBlur","onClick","onPress","onKeyDown","refKey","ref"],bn=["item","index","onMouseMove","onClick","onMouseDown","onPress","refKey","disabled","ref"];yn.stateChangeTypes=wt;function yn(e){e===void 0&&(e={}),hn();var t=T({},gn,e),r=t.scrollIntoView,o=t.environment,n=t.getA11yStatusMessage,u=tn(mn,t,nn,ln),s=u[0],i=u[1],a=s.isOpen,m=s.highlightedIndex,h=s.selectedItem,S=s.inputValue,y=d.useRef(null),w=d.useRef(null),p=d.useRef({}),D=d.useRef(null),I=Jt(t),x=ct({state:s,props:t}),z=d.useCallback(function(g){return p.current[I.getItemId(g)]},[I]);un(n,s,[a,m,h,S],o);var q=sn({menuElement:w.current,highlightedIndex:m,isOpen:a,itemRefs:p,scrollIntoView:r,getItemNodeFromIndex:z});d.useEffect(function(){return D.current=qe(function(g){g({type:Fe,inputValue:""})},500),function(){D.current.cancel()}},[]),d.useEffect(function(){S&&D.current(i)},[i,S]),d.useEffect(function(){var g=de(t,"isOpen");g&&y.current&&y.current.focus()},[]);var C=rn(o,[y,w],d.useCallback(function(){x.current.state.isOpen&&i({type:Te})},[i,x])),ne=on();d.useEffect(function(){a||(p.current={})},[a]);var re=d.useMemo(function(){return{ArrowDown:function(f){f.preventDefault(),i({type:_e,altKey:f.altKey})},ArrowUp:function(f){f.preventDefault(),i({type:Ue,altKey:f.altKey})},Home:function(f){f.preventDefault(),i({type:Xe})},End:function(f){f.preventDefault(),i({type:Ge})},Escape:function(){x.current.state.isOpen&&i({type:ze})},Enter:function(f){f.preventDefault(),i({type:x.current.state.isOpen?Ye:ye})},PageUp:function(f){x.current.state.isOpen&&(f.preventDefault(),i({type:Qe}))},PageDown:function(f){x.current.state.isOpen&&(f.preventDefault(),i({type:Ze}))}," ":function(f){f.preventDefault();var c=x.current.state;if(!c.isOpen){i({type:ye});return}c.inputValue?i({type:Se,key:" "}):i({type:Je})}}},[i,x]),ue=d.useCallback(function(){i({type:pt})},[i]),oe=d.useCallback(function(){i({type:It})},[i]),ce=d.useCallback(function(){i({type:vt})},[i]),fe=d.useCallback(function(g){i({type:bt,highlightedIndex:g})},[i]),ge=d.useCallback(function(g){i({type:tt,selectedItem:g})},[i]),he=d.useCallback(function(){i({type:yt})},[i]),R=d.useCallback(function(g){i({type:Fe,inputValue:g})},[i]),O=d.useCallback(function(g){var f=g===void 0?{}:g,c=f.onClick,$=pe(f,pn),A=function(){var B;(B=y.current)==null||B.focus()};return T({id:I.labelId,htmlFor:I.toggleButtonId,onClick:ee(c,A)},$)},[I]),se=d.useCallback(function(g,f){var c,$=g===void 0?{}:g,A=$.onMouseLeave,L=$.refKey,B=L===void 0?"ref":L,W=$.ref,H=pe($,vn),N=f===void 0?{}:f;N.suppressRefError;var K=function(){i({type:ht})};return T((c={},c[B]=Pe(W,function(E){w.current=E}),c.id=I.menuId,c.role="listbox",c["aria-labelledby"]=H&&H["aria-label"]?void 0:""+I.labelId,c.onMouseLeave=ee(A,K),c),H)},[i,ne,I]),X=d.useCallback(function(g,f){var c,$=g===void 0?{}:g,A=$.onBlur,L=$.onClick;$.onPress;var B=$.onKeyDown,W=$.refKey,H=W===void 0?"ref":W,N=$.ref,K=pe($,In),E=f===void 0?{}:f;E.suppressRefError;var k=x.current.state,G=function(){i({type:ye})},Y=function(){k.isOpen&&!C.isMouseDown&&i({type:Te})},Z=function(P){var J=qt(P);J&&re[J]?re[J](P):Zt(J)&&i({type:Se,key:J})},_=T((c={},c[H]=Pe(N,function(U){y.current=U}),c["aria-activedescendant"]=k.isOpen&&k.highlightedIndex>-1?I.getItemId(k.highlightedIndex):"",c["aria-controls"]=I.menuId,c["aria-expanded"]=x.current.state.isOpen,c["aria-haspopup"]="listbox",c["aria-labelledby"]=K&&K["aria-label"]?void 0:""+I.labelId,c.id=I.toggleButtonId,c.role="combobox",c.tabIndex=0,c.onBlur=ee(A,Y),c),K);return K.disabled||(_.onClick=ee(L,G),_.onKeyDown=ee(B,Z)),_},[i,I,x,C,ne,re]),b=d.useCallback(function(g){var f,c=g===void 0?{}:g,$=c.item,A=c.index,L=c.onMouseMove,B=c.onClick,W=c.onMouseDown;c.onPress;var H=c.refKey,N=H===void 0?"ref":H,K=c.disabled,E=c.ref,k=pe(c,bn);K!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');var G=x.current,Y=G.state,Z=G.props,_=Qt($,A,Z.items,"Pass either item or index to getItemProps!"),U=_[0],P=_[1],J=Z.isItemDisabled(U,P),Tt=function(){C.isTouchEnd||P===Y.highlightedIndex||(q.current=!1,i({type:mt,index:P,disabled:J}))},Et=function(){i({type:et,index:P})},kt=function(Mt){return Mt.preventDefault()},me=T((f={},f[N]=Pe(E,function(le){le&&(p.current[I.getItemId(P)]=le)}),f["aria-disabled"]=J,f["aria-selected"]=U===Y.selectedItem,f.id=I.getItemId(P),f.role="option",f),k);return J||(me.onClick=ee(B,Et)),me.onMouseMove=ee(L,Tt),me.onMouseDown=ee(W,kt),me},[x,I,C,q,i]);return{getToggleButtonProps:X,getLabelProps:O,getMenuProps:se,getItemProps:b,toggleMenu:ue,openMenu:ce,closeMenu:oe,setHighlightedIndex:fe,selectItem:ge,reset:he,setInputValue:R,highlightedIndex:m,isOpen:a,selectedItem:h,inputValue:S}}T({},gt,{items:l.array.isRequired,isItemDisabled:l.func,inputValue:l.string,defaultInputValue:l.string,initialInputValue:l.string,inputId:l.string,onInputValueChange:l.func});T({},ae,{isItemDisabled:function(){return!1}});be.stateReducer,be.itemToKey,be.environment,l.array,l.array,l.array,l.func,l.number,l.number,l.number,l.func,l.func,l.string,l.string;ae.itemToKey,ae.stateReducer,ae.environment;const xt=6,wn=48,xn=1,$n=wn*xt,Sn=xn*xt-1,_n=$n+Sn,Tn=j.div`
  ${()=>{const{tokens:e}=Q(),{select:t}=e;return[M`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,En=j.div`
  ${({$isOpen:e,$hasError:t,$isDisabled:r})=>{const{tokens:o}=Q(),{select:n}=o;return[M`
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
      `,t&&M`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.error};
            outline-color: ${n.button.stroke.color.error};
            outline-offset: ${n.button.stroke.offset.error};
          }
        `,e&&M`
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
        `,r&&M`
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
  ${()=>{const{tokens:e}=Q(),{select:t}=e;return M`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,Mn=j.div`
  ${()=>{const{tokens:e}=Q(),{select:t}=e;return M`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,$t=j(Dt)`
  rotate: 0deg;
`,Dn=j($t)`
  rotate: 180deg;
`,Cn=j.div`
  ${({$isOpen:e})=>{const{tokens:t}=Q(),{select:r}=t;return M`
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
  ${()=>M`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`,Rn=j(St)`
  ${({$visible:e})=>{const{tokens:t}=Q(),{select:r}=t;return[M`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${r.menu.shadow.inner.color};
      `,e&&M`
          transform: translateY(0px);
        `]}}
`,On=j(St)`
  ${({$visible:e})=>{const{tokens:t}=Q(),{select:r}=t;return[M`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${r.menu.shadow.inner.color};
      `,e&&M`
          transform: translateY(0px);
        `]}}
`,Bn=j.ul`
  ${()=>{const{tokens:e}=Q(),{select:t}=e,{menu:{scrollBar:{thumbColor:r,trackColor:o,radius:n}}}=t;return M`
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
`;function Hn(e){const{offsetValue:t}=e,{refs:r,floatingStyles:o}=Ct({placement:"bottom-start",whileElementsMounted:Rt,middleware:[Ot(t),Bt({padding:16}),Ht({apply({rects:n,elements:u}){Object.assign(u.floating.style,{minWidth:`${n.reference.width}px`})}})]});return{refs:r,floatingStyles:o}}function Kn(e){const{isOpen:t}=e,r={threshold:1},o=d.useRef(null),n=d.useRef(null),[u,s]=d.useState(!1),[i,a]=d.useState(!1);function m(h,S){if(!(h.length<2)){if(S===0)return o;if(h.length===S+1)return n}}return d.useEffect(()=>{if(!t||!o.current||!n.current)return;const h=new IntersectionObserver(([y])=>{y&&s(!y.isIntersecting)},r),S=new IntersectionObserver(([y])=>{y&&a(!y.isIntersecting)},r);return h.observe(o.current),S.observe(n.current),()=>{h.disconnect(),S.disconnect()}},[t]),{getListItemRef:m,showTopShadow:u,showBottomShadow:i}}function Ln(e){const{getToggleButtonProps:t,getMenuProps:r,isOpen:o,items:n,toggleButtonProps:u,renderButtonContent:s,renderListItem:i,hasError:a,isDisabled:m,maxListHeight:h,testID:S="select"}=e,{tokens:y}=Q(),{select:w}=y,{refs:p,floatingStyles:D}=Hn({offsetValue:parseInt(w.gap,10)}),{getListItemRef:I,showTopShadow:x,showBottomShadow:z}=Kn({isOpen:o});return V.jsxs(V.Fragment,{children:[V.jsx(Tn,{children:V.jsx(En,{...u,...t({ref:p.setReference,disabled:m}),$isOpen:o,$hasError:a,$isDisabled:m,"data-testid":S,children:V.jsxs(kn,{children:[s(),V.jsx(Mn,{children:o?V.jsx(Dn,{"aria-hidden":"true"}):V.jsx($t,{"aria-hidden":"true"})})]})})}),V.jsxs(Cn,{...r({ref:p.setFloating}),style:D,$isOpen:o,children:[V.jsx(Rn,{$visible:x}),V.jsx(Bn,{style:{maxHeight:h},children:o&&n.map((q,C)=>i(I(n,C),q,C))}),V.jsx(On,{$visible:z})]})]})}Ln.__docgenInfo={description:"",methods:[],displayName:"SelectBase",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},toggleButtonProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"literal",value:'"aria-describedby"'}],raw:`Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-describedby"
>`},description:""},renderButtonContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},renderListItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(ref: any, item: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"any"},name:"ref"},{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},maxListHeight:{required:!1,tsType:{name:"number"},description:""}}};const Un=Array.from({length:15},(e,t)=>{const r=`${t+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}});export{_n as M,Ln as S,Un as m,yn as u};
