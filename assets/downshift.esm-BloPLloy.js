import{_ as le}from"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import{_ as x}from"./extends-CF3RwP-h.js";import{P as c}from"./index-CpCSUgdU.js";import{r as s,R as Ee}from"./index-DH5ua8nC.js";var be=function(){return be=Object.assign||function(t){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},be.apply(this,arguments)};var w={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=Symbol.for("react.element"),Ge=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Le=Symbol.for("react.context"),fn=Symbol.for("react.server_context"),Ae=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),gn=Symbol.for("react.offscreen"),Rt;Rt=Symbol.for("react.module.reference");function Y(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ze:switch(e=e.type,e){case Be:case Ve:case Pe:case We:case Ue:return e;default:switch(e=e&&e.$$typeof,e){case fn:case Le:case Ae:case _e:case je:case Fe:return e;default:return t}}case Ge:return t}}}w.ContextConsumer=Le;w.ContextProvider=Fe;w.Element=ze;w.ForwardRef=Ae;w.Fragment=Be;w.Lazy=_e;w.Memo=je;w.Portal=Ge;w.Profiler=Ve;w.StrictMode=Pe;w.Suspense=We;w.SuspenseList=Ue;w.isAsyncMode=function(){return!1};w.isConcurrentMode=function(){return!1};w.isContextConsumer=function(e){return Y(e)===Le};w.isContextProvider=function(e){return Y(e)===Fe};w.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ze};w.isForwardRef=function(e){return Y(e)===Ae};w.isFragment=function(e){return Y(e)===Be};w.isLazy=function(e){return Y(e)===_e};w.isMemo=function(e){return Y(e)===je};w.isPortal=function(e){return Y(e)===Ge};w.isProfiler=function(e){return Y(e)===Ve};w.isStrictMode=function(e){return Y(e)===Pe};w.isSuspense=function(e){return Y(e)===We};w.isSuspenseList=function(e){return Y(e)===Ue};w.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Be||e===Ve||e===Pe||e===We||e===Ue||e===gn||typeof e=="object"&&e!==null&&(e.$$typeof===_e||e.$$typeof===je||e.$$typeof===Fe||e.$$typeof===Le||e.$$typeof===Ae||e.$$typeof===Rt||e.getModuleId!==void 0)};w.typeOf=Y;const Mt=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Dt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",qe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Dt(r.overflowY,t)||Dt(r.overflowX,t)||(i=>{const n=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}})(i);return!!n&&(n.clientHeight<i.scrollHeight||n.clientWidth<i.scrollWidth)})(e)}return!1},De=(e,t,r,i,n,l,o,u)=>l<e&&o>t||l>e&&o<t?0:l<=e&&u<=r||o>=t&&u>=r?l-e-i:o>t&&u<r||l<e&&u>r?o-t+n:0,hn=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},vn=(e,t)=>{var r,i,n,l;if(typeof document>"u")return[];const{scrollMode:o,block:u,inline:a,boundary:I,skipOverflowHiddenElements:D}=t,z=typeof I=="function"?I:J=>J!==I;if(!Mt(e))throw new TypeError("Invalid target");const P=document.scrollingElement||document.documentElement,E=[];let y=e;for(;Mt(y)&&z(y);){if(y=hn(y),y===P){E.push(y);break}y!=null&&y===document.body&&qe(y)&&!qe(document.documentElement)||y!=null&&qe(y,D)&&E.push(y)}const B=(i=(r=window.visualViewport)==null?void 0:r.width)!=null?i:innerWidth,C=(l=(n=window.visualViewport)==null?void 0:n.height)!=null?l:innerHeight,{scrollX:$,scrollY:M}=window,{height:Q,width:k,top:ne,right:Z,bottom:ee,left:re}=e.getBoundingClientRect(),{top:oe,right:he,bottom:ve,left:me}=(J=>{const b=window.getComputedStyle(J);return{top:parseFloat(b.scrollMarginTop)||0,right:parseFloat(b.scrollMarginRight)||0,bottom:parseFloat(b.scrollMarginBottom)||0,left:parseFloat(b.scrollMarginLeft)||0}})(e);let U=u==="start"||u==="nearest"?ne-oe:u==="end"?ee+ve:ne+Q/2-oe+ve,j=a==="center"?re+k/2-me+he:a==="end"?Z+he:re-me;const se=[];for(let J=0;J<E.length;J++){const b=E[J],{height:m,width:v,top:h,right:S,bottom:g,left:d}=b.getBoundingClientRect();if(o==="if-needed"&&ne>=0&&re>=0&&ee<=C&&Z<=B&&ne>=h&&ee<=g&&re>=d&&Z<=S)return se;const f=getComputedStyle(b),p=parseInt(f.borderLeftWidth,10),K=parseInt(f.borderTopWidth,10),V=parseInt(f.borderRightWidth,10),T=parseInt(f.borderBottomWidth,10);let R=0,O=0;const F="offsetWidth"in b?b.offsetWidth-b.clientWidth-p-V:0,L="offsetHeight"in b?b.offsetHeight-b.clientHeight-K-T:0,G="offsetWidth"in b?b.offsetWidth===0?0:v/b.offsetWidth:0,A="offsetHeight"in b?b.offsetHeight===0?0:m/b.offsetHeight:0;if(P===b)R=u==="start"?U:u==="end"?U-C:u==="nearest"?De(M,M+C,C,K,T,M+U,M+U+Q,Q):U-C/2,O=a==="start"?j:a==="center"?j-B/2:a==="end"?j-B:De($,$+B,B,p,V,$+j,$+j+k,k),R=Math.max(0,R+M),O=Math.max(0,O+$);else{R=u==="start"?U-h-K:u==="end"?U-g+T+L:u==="nearest"?De(h,g,m,K,T+L,U,U+Q,Q):U-(h+m/2)+L/2,O=a==="start"?j-d-p:a==="center"?j-(d+v/2)+F/2:a==="end"?j-S+V+F:De(d,S,v,p,V+F,j,j+k,k);const{scrollLeft:_,scrollTop:H}=b;R=A===0?0:Math.max(0,Math.min(H+R/A,b.scrollHeight-m/A+L)),O=G===0?0:Math.max(0,Math.min(_+O/G,b.scrollWidth-v/G+F)),U+=H-R,j+=_-O}se.push({el:b,top:R,left:O})}return se};var mn=0;function Xe(){}function pn(e,t){if(e){var r=vn(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});r.forEach(function(i){var n=i.el,l=i.top,o=i.left;n.scrollTop=l,n.scrollLeft=o})}}function kt(e,t,r){var i=e===t||t instanceof r.Node&&e.contains&&e.contains(t);return i}function Ye(e,t){var r;function i(){r&&clearTimeout(r)}function n(){for(var l=arguments.length,o=new Array(l),u=0;u<l;u++)o[u]=arguments[u];i(),r=setTimeout(function(){r=null,e.apply(void 0,o)},t)}return n.cancel=i,n}function W(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){for(var n=arguments.length,l=new Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];return t.some(function(u){return u&&u.apply(void 0,[i].concat(l)),i.preventDownshiftDefault||i.hasOwnProperty("nativeEvent")&&i.nativeEvent.preventDownshiftDefault})}}function fe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){t.forEach(function(n){typeof n=="function"?n(i):n&&(n.current=i)})}}function In(){return String(mn++)}function Re(e,t){return!e||!t?e:Object.keys(e).reduce(function(r,i){return r[i]=St(t,i)?t[i]:e[i],r},{})}function St(e,t){return e[t]!==void 0}function Kt(e){var t=e.key,r=e.keyCode;return r>=37&&r<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function ae(e,t,r,i,n){n===void 0&&(n=!1);var l=r.length;if(l===0)return-1;var o=l-1;(typeof e!="number"||e<0||e>o)&&(e=t>0?-1:o+1);var u=e+t;u<0?u=n?o:0:u>o&&(u=n?0:o);var a=xe(u,t<0,r,i,n);return a===-1?e>=l?-1:e:a}function xe(e,t,r,i,n){n===void 0&&(n=!1);var l=r.length;if(t){for(var o=e;o>=0;o--)if(!i(r[o],o))return o}else for(var u=e;u<l;u++)if(!i(r[u],u))return u;return n?xe(t?l-1:0,t,r,i):-1}function Ot(e,t,r,i){return i===void 0&&(i=!0),r&&t.some(function(n){return n&&(kt(n,e,r)||i&&kt(n,r.document.activeElement,r))})}var yn=Ye(function(e){Tt(e).textContent=""},500);function Tt(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function bn(e,t){if(!(!e||!t)){var r=Tt(t);r.textContent=e,yn(t)}}function xn(e){var t=e==null?void 0:e.getElementById("a11y-status-message");t&&t.remove()}var Ht={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function wn(e,t,r){var i=e.props,n=e.type,l={};Object.keys(t).forEach(function(o){Cn(o,e,t,r),r[o]!==t[o]&&(l[o]=r[o])}),i.onStateChange&&Object.keys(l).length&&i.onStateChange(x({type:n},l))}function Cn(e,t,r,i){var n=t.props,l=t.type,o="on"+Je(e)+"Change";n[o]&&i[e]!==void 0&&i[e]!==r[e]&&n[o](x({type:l},i))}function Mn(e,t){return t.changes}var Et=Ye(function(e,t){bn(e,t)},200),Dn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?s.useLayoutEffect:s.useEffect,$t="useId"in Ee?function(t){var r=t.id,i=t.labelId,n=t.menuId,l=t.getItemId,o=t.toggleButtonId,u=t.inputId,a="downshift-"+Ee.useId();r||(r=a);var I=s.useRef({labelId:i||r+"-label",menuId:n||r+"-menu",getItemId:l||function(D){return r+"-item-"+D},toggleButtonId:o||r+"-toggle-button",inputId:u||r+"-input"});return I.current}:function(t){var r=t.id,i=r===void 0?"downshift-"+In():r,n=t.labelId,l=t.menuId,o=t.getItemId,u=t.toggleButtonId,a=t.inputId,I=s.useRef({labelId:n||i+"-label",menuId:l||i+"-menu",getItemId:o||function(D){return i+"-item-"+D},toggleButtonId:u||i+"-toggle-button",inputId:a||i+"-input"});return I.current};function Bt(e,t,r,i){var n,l;if(e===void 0){if(t===void 0)throw new Error(i);n=r[t],l=t}else l=t===void 0?r.indexOf(e):t,n=e;return[n,l]}function kn(e){return/^\S{1}$/.test(e)}function Je(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function Qe(e){var t=s.useRef(e);return t.current=e,t}function Pt(e,t,r,i){var n=s.useRef(),l=s.useRef(),o=s.useCallback(function(E,y){l.current=y,E=Re(E,y.props);var B=e(E,y),C=y.props.stateReducer(E,x({},y,{changes:B}));return C},[e]),u=s.useReducer(o,t,r),a=u[0],I=u[1],D=Qe(t),z=s.useCallback(function(E){return I(x({props:D.current},E))},[D]),P=l.current;return s.useEffect(function(){var E=Re(n.current,P==null?void 0:P.props),y=P&&n.current&&!i(E,a);y&&wn(P,E,a),n.current=a},[a,P,i]),[a,z]}function On(e,t,r,i){var n=Pt(e,t,r,i),l=n[0],o=n[1];return[Re(l,t),o]}var Me={itemToString:function(t){return t?String(t):""},itemToKey:function(t){return t},stateReducer:Mn,scrollIntoView:pn,environment:typeof window>"u"?void 0:window};function ie(e,t,r){r===void 0&&(r=Ht);var i=e["default"+Je(t)];return i!==void 0?i:r[t]}function ye(e,t,r){r===void 0&&(r=Ht);var i=e[t];if(i!==void 0)return i;var n=e["initial"+Je(t)];return n!==void 0?n:ie(e,t,r)}function Vt(e){var t=ye(e,"selectedItem"),r=ye(e,"isOpen"),i=En(e),n=ye(e,"inputValue");return{highlightedIndex:i<0&&t&&r?e.items.findIndex(function(l){return e.itemToKey(l)===e.itemToKey(t)}):i,isOpen:r,selectedItem:t,inputValue:n}}function ge(e,t,r){var i=e.items,n=e.initialHighlightedIndex,l=e.defaultHighlightedIndex,o=e.isItemDisabled,u=e.itemToKey,a=t.selectedItem,I=t.highlightedIndex;return i.length===0?-1:n!==void 0&&I===n&&!o(i[n],n)?n:l!==void 0&&!o(i[l],l)?l:a?i.findIndex(function(D){return u(a)===u(D)}):r<0&&!o(i[i.length-1],i.length-1)?i.length-1:r>0&&!o(i[0],0)?0:-1}function Ft(e,t,r){var i=s.useRef({isMouseDown:!1,isTouchMove:!1,isTouchEnd:!1});return s.useEffect(function(){if(!e)return Xe;var n=t.map(function(D){return D.current});function l(){i.current.isTouchEnd=!1,i.current.isMouseDown=!0}function o(D){i.current.isMouseDown=!1,Ot(D.target,n,e)||r()}function u(){i.current.isTouchEnd=!1,i.current.isTouchMove=!1}function a(){i.current.isTouchMove=!0}function I(D){i.current.isTouchEnd=!0,!i.current.isTouchMove&&!Ot(D.target,n,e,!1)&&r()}return e.addEventListener("mousedown",l),e.addEventListener("mouseup",o),e.addEventListener("touchstart",u),e.addEventListener("touchmove",a),e.addEventListener("touchend",I),function(){e.removeEventListener("mousedown",l),e.removeEventListener("mouseup",o),e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",a),e.removeEventListener("touchend",I)}},[e,r]),i.current}var Lt=function(){return Xe};function At(e,t,r,i){i===void 0&&(i={});var n=i.document,l=Ze();s.useEffect(function(){if(!(!e||l||!n)){var o=e(t);Et(o,n)}},r),s.useEffect(function(){return function(){Et.cancel(),xn(n)}},[n])}function Wt(e){var t=e.highlightedIndex,r=e.isOpen,i=e.itemRefs,n=e.getItemNodeFromIndex,l=e.menuElement,o=e.scrollIntoView,u=s.useRef(!0);return Dn(function(){t<0||!r||!Object.keys(i.current).length||(u.current===!1?u.current=!0:o(n(t),l))},[t]),u}function Se(e,t,r){var i;r===void 0&&(r=!0);var n=((i=e.items)==null?void 0:i.length)&&t>=0;return x({isOpen:!1,highlightedIndex:-1},n&&x({selectedItem:e.items[t],isOpen:ie(e,"isOpen"),highlightedIndex:ie(e,"highlightedIndex")},r&&{inputValue:e.itemToString(e.items[t])}))}function Ut(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}function Ze(){var e=Ee.useRef(!0);return Ee.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e.current}function Ke(e){var t=ie(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}function En(e){var t=ye(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}var ke={environment:c.shape({addEventListener:c.func.isRequired,removeEventListener:c.func.isRequired,document:c.shape({createElement:c.func.isRequired,getElementById:c.func.isRequired,activeElement:c.any.isRequired,body:c.any.isRequired}).isRequired,Node:c.func.isRequired}),itemToString:c.func,itemToKey:c.func,stateReducer:c.func},jt=x({},ke,{getA11yStatusMessage:c.func,highlightedIndex:c.number,defaultHighlightedIndex:c.number,initialHighlightedIndex:c.number,isOpen:c.bool,defaultIsOpen:c.bool,initialIsOpen:c.bool,selectedItem:c.any,initialSelectedItem:c.any,defaultSelectedItem:c.any,id:c.string,labelId:c.string,menuId:c.string,getItemId:c.func,toggleButtonId:c.string,onSelectedItemChange:c.func,onHighlightedIndexChange:c.func,onStateChange:c.func,onIsOpenChange:c.func,scrollIntoView:c.func});function _t(e,t,r){var i=t.type,n=t.props,l;switch(i){case r.ItemMouseMove:l={highlightedIndex:t.disabled?-1:t.index};break;case r.MenuMouseLeave:l={highlightedIndex:-1};break;case r.ToggleButtonClick:case r.FunctionToggleMenu:l={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:ge(n,e,0)};break;case r.FunctionOpenMenu:l={isOpen:!0,highlightedIndex:ge(n,e,0)};break;case r.FunctionCloseMenu:l={isOpen:!1};break;case r.FunctionSetHighlightedIndex:l={highlightedIndex:n.isItemDisabled(n.items[t.highlightedIndex],t.highlightedIndex)?-1:t.highlightedIndex};break;case r.FunctionSetInputValue:l={inputValue:t.inputValue};break;case r.FunctionReset:l={highlightedIndex:Ke(n),isOpen:ie(n,"isOpen"),selectedItem:ie(n,"selectedItem"),inputValue:ie(n,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return x({},e,l)}function Rn(e){for(var t=e.keysSoFar,r=e.highlightedIndex,i=e.items,n=e.itemToString,l=e.isItemDisabled,o=t.toLowerCase(),u=0;u<i.length;u++){var a=(u+r+(t.length<2?1:0))%i.length,I=i[a];if(I!==void 0&&n(I).toLowerCase().startsWith(o)&&!l(I,a))return a}return r}be(be({},jt),{items:c.array.isRequired,isItemDisabled:c.func});var Sn=be(be({},Me),{isItemDisabled:function(){return!1}}),Kn=Xe,Oe=0,et=1,tt=2,Te=3,nt=4,rt=5,it=6,ot=7,ut=8,lt=9,at=10,He=11,qt=12,Nt=13,st=14,zt=15,Gt=16,Xt=17,Yt=18,dt=19,Ne=20,Jt=21,Qt=Object.freeze({__proto__:null,FunctionCloseMenu:Xt,FunctionOpenMenu:Gt,FunctionReset:Jt,FunctionSelectItem:dt,FunctionSetHighlightedIndex:Yt,FunctionSetInputValue:Ne,FunctionToggleMenu:zt,ItemClick:st,ItemMouseMove:Nt,MenuMouseLeave:qt,ToggleButtonBlur:He,ToggleButtonClick:Oe,ToggleButtonKeyDownArrowDown:et,ToggleButtonKeyDownArrowUp:tt,ToggleButtonKeyDownCharacter:Te,ToggleButtonKeyDownEnd:it,ToggleButtonKeyDownEnter:ot,ToggleButtonKeyDownEscape:nt,ToggleButtonKeyDownHome:rt,ToggleButtonKeyDownPageDown:at,ToggleButtonKeyDownPageUp:lt,ToggleButtonKeyDownSpaceButton:ut});function Tn(e,t){var r,i=t.type,n=t.props,l=t.altKey,o;switch(i){case st:o={isOpen:ie(n,"isOpen"),highlightedIndex:Ke(n),selectedItem:n.items[t.index]};break;case Te:{var u=t.key,a=""+e.inputValue+u,I=!e.isOpen&&e.selectedItem?n.items.findIndex(function(E){return n.itemToKey(E)===n.itemToKey(e.selectedItem)}):e.highlightedIndex,D=Rn({keysSoFar:a,highlightedIndex:I,items:n.items,itemToString:n.itemToString,isItemDisabled:n.isItemDisabled});o={inputValue:a,highlightedIndex:D,isOpen:!0}}break;case et:{var z=e.isOpen?ae(e.highlightedIndex,1,n.items,n.isItemDisabled):l&&e.selectedItem==null?-1:ge(n,e,1);o={highlightedIndex:z,isOpen:!0}}break;case tt:if(e.isOpen&&l)o=Se(n,e.highlightedIndex,!1);else{var P=e.isOpen?ae(e.highlightedIndex,-1,n.items,n.isItemDisabled):ge(n,e,-1);o={highlightedIndex:P,isOpen:!0}}break;case ot:case ut:o=Se(n,e.highlightedIndex,!1);break;case rt:o={highlightedIndex:xe(0,!1,n.items,n.isItemDisabled),isOpen:!0};break;case it:o={highlightedIndex:xe(n.items.length-1,!0,n.items,n.isItemDisabled),isOpen:!0};break;case lt:o={highlightedIndex:ae(e.highlightedIndex,-10,n.items,n.isItemDisabled)};break;case at:o={highlightedIndex:ae(e.highlightedIndex,10,n.items,n.isItemDisabled)};break;case nt:o={isOpen:!1,highlightedIndex:-1};break;case He:o=x({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((r=n.items)==null?void 0:r.length)&&{selectedItem:n.items[e.highlightedIndex]});break;case dt:o={selectedItem:t.selectedItem};break;default:return _t(e,t,Qt)}return x({},e,o)}var Hn=["onClick"],$n=["onMouseLeave","refKey","ref"],Bn=["onBlur","onClick","onPress","onKeyDown","refKey","ref"],Pn=["item","index","onMouseMove","onClick","onMouseDown","onPress","refKey","disabled","ref"];Vn.stateChangeTypes=Qt;function Vn(e){e===void 0&&(e={}),Kn();var t=x({},Sn,e),r=t.scrollIntoView,i=t.environment,n=t.getA11yStatusMessage,l=On(Tn,t,Vt,Ut),o=l[0],u=l[1],a=o.isOpen,I=o.highlightedIndex,D=o.selectedItem,z=o.inputValue,P=s.useRef(null),E=s.useRef(null),y=s.useRef({}),B=s.useRef(null),C=$t(t),$=Qe({state:o,props:t}),M=s.useCallback(function(m){return y.current[C.getItemId(m)]},[C]);At(n,o,[a,I,D,z],i);var Q=Wt({menuElement:E.current,highlightedIndex:I,isOpen:a,itemRefs:y,scrollIntoView:r,getItemNodeFromIndex:M});s.useEffect(function(){return B.current=Ye(function(m){m({type:Ne,inputValue:""})},500),function(){B.current.cancel()}},[]),s.useEffect(function(){z&&B.current(u)},[u,z]),s.useEffect(function(){var m=ye(t,"isOpen");m&&P.current&&P.current.focus()},[]);var k=Ft(i,[P,E],s.useCallback(function(){$.current.state.isOpen&&u({type:He})},[u,$])),ne=Lt();s.useEffect(function(){a||(y.current={})},[a]);var Z=s.useMemo(function(){return{ArrowDown:function(v){v.preventDefault(),u({type:et,altKey:v.altKey})},ArrowUp:function(v){v.preventDefault(),u({type:tt,altKey:v.altKey})},Home:function(v){v.preventDefault(),u({type:rt})},End:function(v){v.preventDefault(),u({type:it})},Escape:function(){$.current.state.isOpen&&u({type:nt})},Enter:function(v){v.preventDefault(),u({type:$.current.state.isOpen?ot:Oe})},PageUp:function(v){$.current.state.isOpen&&(v.preventDefault(),u({type:lt}))},PageDown:function(v){$.current.state.isOpen&&(v.preventDefault(),u({type:at}))}," ":function(v){v.preventDefault();var h=$.current.state;if(!h.isOpen){u({type:Oe});return}h.inputValue?u({type:Te,key:" "}):u({type:ut})}}},[u,$]),ee=s.useCallback(function(){u({type:zt})},[u]),re=s.useCallback(function(){u({type:Xt})},[u]),oe=s.useCallback(function(){u({type:Gt})},[u]),he=s.useCallback(function(m){u({type:Yt,highlightedIndex:m})},[u]),ve=s.useCallback(function(m){u({type:dt,selectedItem:m})},[u]),me=s.useCallback(function(){u({type:Jt})},[u]),U=s.useCallback(function(m){u({type:Ne,inputValue:m})},[u]),j=s.useCallback(function(m){var v=m===void 0?{}:m,h=v.onClick,S=le(v,Hn),g=function(){var f;(f=P.current)==null||f.focus()};return x({id:C.labelId,htmlFor:C.toggleButtonId,onClick:W(h,g)},S)},[C]),se=s.useCallback(function(m,v){var h,S=m===void 0?{}:m,g=S.onMouseLeave,d=S.refKey,f=d===void 0?"ref":d,p=S.ref,K=le(S,$n),V=v===void 0?{}:v;V.suppressRefError;var T=function(){u({type:qt})};return x((h={},h[f]=fe(p,function(R){E.current=R}),h.id=C.menuId,h.role="listbox",h["aria-labelledby"]=K&&K["aria-label"]?void 0:""+C.labelId,h.onMouseLeave=W(g,T),h),K)},[u,ne,C]),J=s.useCallback(function(m,v){var h,S=m===void 0?{}:m,g=S.onBlur,d=S.onClick;S.onPress;var f=S.onKeyDown,p=S.refKey,K=p===void 0?"ref":p,V=S.ref,T=le(S,Bn),R=v===void 0?{}:v;R.suppressRefError;var O=$.current.state,F=function(){u({type:Oe})},L=function(){O.isOpen&&!k.isMouseDown&&u({type:He})},G=function(H){var q=Kt(H);q&&Z[q]?Z[q](H):kn(q)&&u({type:Te,key:q})},A=x((h={},h[K]=fe(V,function(_){P.current=_}),h["aria-activedescendant"]=O.isOpen&&O.highlightedIndex>-1?C.getItemId(O.highlightedIndex):"",h["aria-controls"]=C.menuId,h["aria-expanded"]=$.current.state.isOpen,h["aria-haspopup"]="listbox",h["aria-labelledby"]=T&&T["aria-label"]?void 0:""+C.labelId,h.id=C.toggleButtonId,h.role="combobox",h.tabIndex=0,h.onBlur=W(g,L),h),T);return T.disabled||(A.onClick=W(d,F),A.onKeyDown=W(f,G)),A},[u,C,$,k,ne,Z]),b=s.useCallback(function(m){var v,h=m===void 0?{}:m,S=h.item,g=h.index,d=h.onMouseMove,f=h.onClick,p=h.onMouseDown;h.onPress;var K=h.refKey,V=K===void 0?"ref":K,T=h.disabled,R=h.ref,O=le(h,Pn);T!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');var F=$.current,L=F.state,G=F.props,A=Bt(S,g,G.items,"Pass either item or index to getItemProps!"),_=A[0],H=A[1],q=G.isItemDisabled(_,H),pe=function(){k.isTouchEnd||H===L.highlightedIndex||(Q.current=!1,u({type:Nt,index:H,disabled:q}))},Ie=function(){u({type:st,index:H})},we=function(te){return te.preventDefault()},N=x((v={},v[V]=fe(R,function(X){X&&(y.current[C.getItemId(H)]=X)}),v["aria-disabled"]=q,v["aria-selected"]=_===L.selectedItem,v.id=C.getItemId(H),v.role="option",v),O);return q||(N.onClick=W(f,Ie)),N.onMouseMove=W(d,pe),N.onMouseDown=W(p,we),N},[$,C,k,Q,u]);return{getToggleButtonProps:J,getLabelProps:j,getMenuProps:se,getItemProps:b,toggleMenu:ee,openMenu:oe,closeMenu:re,setHighlightedIndex:he,selectItem:ve,reset:me,setInputValue:U,highlightedIndex:I,isOpen:a,selectedItem:D,inputValue:z}}var ct=0,ft=1,gt=2,ht=3,vt=4,mt=5,pt=6,It=7,yt=8,$e=9,bt=10,Zt=11,en=12,xt=13,tn=14,nn=15,rn=16,on=17,un=18,wt=19,ln=20,an=21,Ct=22,sn=Object.freeze({__proto__:null,ControlledPropUpdatedSelectedItem:Ct,FunctionCloseMenu:on,FunctionOpenMenu:rn,FunctionReset:an,FunctionSelectItem:wt,FunctionSetHighlightedIndex:un,FunctionSetInputValue:ln,FunctionToggleMenu:nn,InputBlur:$e,InputChange:yt,InputClick:bt,InputKeyDownArrowDown:ct,InputKeyDownArrowUp:ft,InputKeyDownEnd:vt,InputKeyDownEnter:It,InputKeyDownEscape:gt,InputKeyDownHome:ht,InputKeyDownPageDown:pt,InputKeyDownPageUp:mt,ItemClick:xt,ItemMouseMove:en,MenuMouseLeave:Zt,ToggleButtonClick:tn});function Fn(e){var t=Vt(e),r=t.selectedItem,i=t.inputValue;return i===""&&r&&e.defaultInputValue===void 0&&e.initialInputValue===void 0&&e.inputValue===void 0&&(i=e.itemToString(r)),x({},t,{inputValue:i})}x({},jt,{items:c.array.isRequired,isItemDisabled:c.func,inputValue:c.string,defaultInputValue:c.string,initialInputValue:c.string,inputId:c.string,onInputValueChange:c.func});function Ln(e,t,r,i){var n=s.useRef(),l=Pt(e,t,r,i),o=l[0],u=l[1],a=Ze();return s.useEffect(function(){if(St(t,"selectedItem")){if(!a){var I=t.itemToKey(t.selectedItem)!==t.itemToKey(n.current);I&&u({type:Ct,inputValue:t.itemToString(t.selectedItem)})}n.current=o.selectedItem===n.current?t.selectedItem:o.selectedItem}},[o.selectedItem,t.selectedItem]),[Re(o,t),u]}var An=x({},Me,{isItemDisabled:function(){return!1}});function Wn(e,t){var r,i=t.type,n=t.props,l=t.altKey,o;switch(i){case xt:o={isOpen:ie(n,"isOpen"),highlightedIndex:Ke(n),selectedItem:n.items[t.index],inputValue:n.itemToString(n.items[t.index])};break;case ct:e.isOpen?o={highlightedIndex:ae(e.highlightedIndex,1,n.items,n.isItemDisabled,!0)}:o={highlightedIndex:l&&e.selectedItem==null?-1:ge(n,e,1),isOpen:n.items.length>=0};break;case ft:e.isOpen?l?o=Se(n,e.highlightedIndex):o={highlightedIndex:ae(e.highlightedIndex,-1,n.items,n.isItemDisabled,!0)}:o={highlightedIndex:ge(n,e,-1),isOpen:n.items.length>=0};break;case It:o=Se(n,e.highlightedIndex);break;case gt:o=x({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case mt:o={highlightedIndex:ae(e.highlightedIndex,-10,n.items,n.isItemDisabled,!0)};break;case pt:o={highlightedIndex:ae(e.highlightedIndex,10,n.items,n.isItemDisabled,!0)};break;case ht:o={highlightedIndex:xe(0,!1,n.items,n.isItemDisabled)};break;case vt:o={highlightedIndex:xe(n.items.length-1,!0,n.items,n.isItemDisabled)};break;case $e:o=x({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((r=n.items)==null?void 0:r.length)&&t.selectItem&&{selectedItem:n.items[e.highlightedIndex],inputValue:n.itemToString(n.items[e.highlightedIndex])});break;case yt:o={isOpen:!0,highlightedIndex:Ke(n),inputValue:t.inputValue};break;case bt:o={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:ge(n,e,0)};break;case wt:o={selectedItem:t.selectedItem,inputValue:n.itemToString(t.selectedItem)};break;case Ct:o={inputValue:t.inputValue};break;default:return _t(e,t,sn)}return x({},e,o)}var Un=["onMouseLeave","refKey","ref"],jn=["item","index","refKey","ref","onMouseMove","onMouseDown","onClick","onPress","disabled"],_n=["onClick","onPress","refKey","ref"],qn=["onKeyDown","onChange","onInput","onBlur","onChangeText","onClick","refKey","ref"];Nn.stateChangeTypes=sn;function Nn(e){e===void 0&&(e={});var t=x({},An,e),r=t.items,i=t.scrollIntoView,n=t.environment,l=t.getA11yStatusMessage,o=Ln(Wn,t,Fn,Ut),u=o[0],a=o[1],I=u.isOpen,D=u.highlightedIndex,z=u.selectedItem,P=u.inputValue,E=s.useRef(null),y=s.useRef({}),B=s.useRef(null),C=s.useRef(null),$=Ze(),M=$t(t),Q=s.useRef(),k=Qe({state:u,props:t}),ne=s.useCallback(function(g){return y.current[M.getItemId(g)]},[M]);At(l,u,[I,D,z,P],n);var Z=Wt({menuElement:E.current,highlightedIndex:D,isOpen:I,itemRefs:y,scrollIntoView:i,getItemNodeFromIndex:ne});s.useEffect(function(){var g=ye(t,"isOpen");g&&B.current&&B.current.focus()},[]),s.useEffect(function(){$||(Q.current=r.length)});var ee=Ft(n,[C,E,B],s.useCallback(function(){k.current.state.isOpen&&a({type:$e,selectItem:!1})},[a,k])),re=Lt();s.useEffect(function(){I||(y.current={})},[I]),s.useEffect(function(){var g;!I||!(n!=null&&n.document)||!(B!=null&&(g=B.current)!=null&&g.focus)||n.document.activeElement!==B.current&&B.current.focus()},[I,n]);var oe=s.useMemo(function(){return{ArrowDown:function(d){d.preventDefault(),a({type:ct,altKey:d.altKey})},ArrowUp:function(d){d.preventDefault(),a({type:ft,altKey:d.altKey})},Home:function(d){k.current.state.isOpen&&(d.preventDefault(),a({type:ht}))},End:function(d){k.current.state.isOpen&&(d.preventDefault(),a({type:vt}))},Escape:function(d){var f=k.current.state;(f.isOpen||f.inputValue||f.selectedItem||f.highlightedIndex>-1)&&(d.preventDefault(),a({type:gt}))},Enter:function(d){var f=k.current.state;!f.isOpen||d.which===229||(d.preventDefault(),a({type:It}))},PageUp:function(d){k.current.state.isOpen&&(d.preventDefault(),a({type:mt}))},PageDown:function(d){k.current.state.isOpen&&(d.preventDefault(),a({type:pt}))}}},[a,k]),he=s.useCallback(function(g){return x({id:M.labelId,htmlFor:M.inputId},g)},[M]),ve=s.useCallback(function(g,d){var f,p=g===void 0?{}:g,K=p.onMouseLeave,V=p.refKey,T=V===void 0?"ref":V,R=p.ref,O=le(p,Un),F=d===void 0?{}:d;return F.suppressRefError,x((f={},f[T]=fe(R,function(L){E.current=L}),f.id=M.menuId,f.role="listbox",f["aria-labelledby"]=O&&O["aria-label"]?void 0:""+M.labelId,f.onMouseLeave=W(K,function(){a({type:Zt})}),f),O)},[a,re,M]),me=s.useCallback(function(g){var d,f,p=g===void 0?{}:g,K=p.item,V=p.index,T=p.refKey,R=T===void 0?"ref":T,O=p.ref,F=p.onMouseMove,L=p.onMouseDown,G=p.onClick;p.onPress;var A=p.disabled,_=le(p,jn);A!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');var H=k.current,q=H.props,pe=H.state,Ie=Bt(K,V,q.items,"Pass either item or index to getItemProps!"),we=Ie[0],N=Ie[1],X=q.isItemDisabled(we,N),te="onClick",de=G,ue=function(){ee.isTouchEnd||N===pe.highlightedIndex||(Z.current=!1,a({type:en,index:N,disabled:X}))},ce=function(){a({type:xt,index:N})},dn=function(cn){return cn.preventDefault()};return x((d={},d[R]=fe(O,function(Ce){Ce&&(y.current[M.getItemId(N)]=Ce)}),d["aria-disabled"]=X,d["aria-selected"]=N===pe.highlightedIndex,d.id=M.getItemId(N),d.role="option",d),!X&&(f={},f[te]=W(de,ce),f),{onMouseMove:W(F,ue),onMouseDown:W(L,dn)},_)},[a,M,k,ee,Z]),U=s.useCallback(function(g){var d,f=g===void 0?{}:g,p=f.onClick;f.onPress;var K=f.refKey,V=K===void 0?"ref":K,T=f.ref,R=le(f,_n),O=k.current.state,F=function(){a({type:tn})};return x((d={},d[V]=fe(T,function(L){C.current=L}),d["aria-controls"]=M.menuId,d["aria-expanded"]=O.isOpen,d.id=M.toggleButtonId,d.tabIndex=-1,d),!R.disabled&&x({},{onClick:W(p,F)}),R)},[a,k,M]),j=s.useCallback(function(g,d){var f,p=g===void 0?{}:g,K=p.onKeyDown,V=p.onChange,T=p.onInput,R=p.onBlur;p.onChangeText;var O=p.onClick,F=p.refKey,L=F===void 0?"ref":F,G=p.ref,A=le(p,qn),_=d===void 0?{}:d;_.suppressRefError;var H=k.current.state,q=function(ue){var ce=Kt(ue);ce&&oe[ce]&&oe[ce](ue)},pe=function(ue){a({type:yt,inputValue:ue.target.value})},Ie=function(ue){if(n!=null&&n.document&&H.isOpen&&!ee.isMouseDown){var ce=ue.relatedTarget===null&&n.document.activeElement!==n.document.body;a({type:$e,selectItem:!ce})}},we=function(){a({type:bt})},N="onChange",X={};if(!A.disabled){var te;X=(te={},te[N]=W(V,T,pe),te.onKeyDown=W(K,q),te.onBlur=W(R,Ie),te.onClick=W(O,we),te)}return x((f={},f[L]=fe(G,function(de){B.current=de}),f["aria-activedescendant"]=H.isOpen&&H.highlightedIndex>-1?M.getItemId(H.highlightedIndex):"",f["aria-autocomplete"]="list",f["aria-controls"]=M.menuId,f["aria-expanded"]=H.isOpen,f["aria-labelledby"]=A&&A["aria-label"]?void 0:M.labelId,f.autoComplete="off",f.id=M.inputId,f.role="combobox",f.value=H.inputValue,f),X,A)},[a,M,n,oe,k,ee,re]),se=s.useCallback(function(){a({type:nn})},[a]),J=s.useCallback(function(){a({type:on})},[a]),b=s.useCallback(function(){a({type:rn})},[a]),m=s.useCallback(function(g){a({type:un,highlightedIndex:g})},[a]),v=s.useCallback(function(g){a({type:wt,selectedItem:g})},[a]),h=s.useCallback(function(g){a({type:ln,inputValue:g})},[a]),S=s.useCallback(function(){a({type:an})},[a]);return{getItemProps:me,getLabelProps:he,getMenuProps:ve,getInputProps:j,getToggleButtonProps:U,toggleMenu:se,openMenu:b,closeMenu:J,setHighlightedIndex:m,setInputValue:h,selectItem:v,reset:S,highlightedIndex:D,isOpen:I,selectedItem:z,inputValue:P}}ke.stateReducer,ke.itemToKey,ke.environment,c.array,c.array,c.array,c.func,c.number,c.number,c.number,c.func,c.func,c.string,c.string;Me.itemToKey,Me.stateReducer,Me.environment;export{Nn as a,Vn as u};