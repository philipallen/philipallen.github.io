import{_ as pe}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as S}from"./extends-98964cd2.js";import{P as a}from"./index-2baff29e.js";import{r as d,R as Me}from"./index-c013ead5.js";import{a as j,u as _,b as E,j as K}from"./index-e76b8df1.js";import{c as Ht}from"./index-19b017fb.js";import{b as Lt,h as At,o as Pt,i as Kt,l as Vt}from"./floating-ui.react-b73a43d5.js";var m={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=Symbol.for("react.element"),qe=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),De=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),He=Symbol.for("react.context"),Ft=Symbol.for("react.server_context"),Le=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),jt=Symbol.for("react.offscreen"),ct;ct=Symbol.for("react.module.reference");function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ue:switch(e=e.type,e){case Te:case De:case Oe:case Ae:case Pe:return e;default:switch(e=e&&e.$$typeof,e){case Ft:case He:case Le:case Ve:case Ke:case Be:return e;default:return t}}case qe:return t}}}m.ContextConsumer=He;m.ContextProvider=Be;m.Element=Ue;m.ForwardRef=Le;m.Fragment=Te;m.Lazy=Ve;m.Memo=Ke;m.Portal=qe;m.Profiler=De;m.StrictMode=Oe;m.Suspense=Ae;m.SuspenseList=Pe;m.isAsyncMode=function(){return!1};m.isConcurrentMode=function(){return!1};m.isContextConsumer=function(e){return V(e)===He};m.isContextProvider=function(e){return V(e)===Be};m.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ue};m.isForwardRef=function(e){return V(e)===Le};m.isFragment=function(e){return V(e)===Te};m.isLazy=function(e){return V(e)===Ve};m.isMemo=function(e){return V(e)===Ke};m.isPortal=function(e){return V(e)===qe};m.isProfiler=function(e){return V(e)===De};m.isStrictMode=function(e){return V(e)===Oe};m.isSuspense=function(e){return V(e)===Ae};m.isSuspenseList=function(e){return V(e)===Pe};m.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Te||e===De||e===Oe||e===Ae||e===Pe||e===jt||typeof e=="object"&&e!==null&&(e.$$typeof===Ve||e.$$typeof===Ke||e.$$typeof===Be||e.$$typeof===He||e.$$typeof===Le||e.$$typeof===ct||e.getModuleId!==void 0)};m.typeOf=V;const it=e=>typeof e=="object"&&e!=null&&e.nodeType===1,ut=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Fe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return ut(n.overflowY,t)||ut(n.overflowX,t)||(o=>{const r=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(o);return!!r&&(r.clientHeight<o.scrollHeight||r.clientWidth<o.scrollWidth)})(e)}return!1},xe=(e,t,n,o,r,i,u,s)=>i<e&&u>t||i>e&&u<t?0:i<=e&&s<=n||u>=t&&s>=n?i-e-o:u>t&&s<n||i<e&&s>n?u-t+r:0,Wt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Nt=(e,t)=>{var n,o,r,i;if(typeof document>"u")return[];const{scrollMode:u,block:s,inline:f,boundary:p,skipOverflowHiddenElements:l}=t,w=typeof p=="function"?p:q=>q!==p;if(!it(e))throw new TypeError("Invalid target");const I=document.scrollingElement||document.documentElement,$=[];let v=e;for(;it(v)&&w(v);){if(v=Wt(v),v===I){$.push(v);break}v!=null&&v===document.body&&Fe(v)&&!Fe(document.documentElement)||v!=null&&Fe(v,l)&&$.push(v)}const C=(o=(n=window.visualViewport)==null?void 0:n.width)!=null?o:innerWidth,T=(i=(r=window.visualViewport)==null?void 0:r.height)!=null?i:innerHeight,{scrollX:H,scrollY:F}=window,{height:y,width:U,top:ne,right:k,bottom:ae,left:Q}=e.getBoundingClientRect(),{top:Z,right:de,bottom:re,left:Ie}=(q=>{const b=window.getComputedStyle(q);return{top:parseFloat(b.scrollMarginTop)||0,right:parseFloat(b.scrollMarginRight)||0,bottom:parseFloat(b.scrollMarginBottom)||0,left:parseFloat(b.scrollMarginLeft)||0}})(e);let O=s==="start"||s==="nearest"?ne-Z:s==="end"?ae+re:ne+y/2-Z+re,D=f==="center"?Q+U/2-Ie+de:f==="end"?k+de:Q-Ie;const ce=[];for(let q=0;q<$.length;q++){const b=$[q],{height:oe,width:ie,top:ue,right:fe,bottom:ge,left:h}=b.getBoundingClientRect();if(u==="if-needed"&&ne>=0&&Q>=0&&ae<=T&&k<=C&&ne>=ue&&ae<=ge&&Q>=h&&k<=fe)return ce;const g=getComputedStyle(b),c=parseInt(g.borderLeftWidth,10),x=parseInt(g.borderTopWidth,10),L=parseInt(g.borderRightWidth,10),A=parseInt(g.borderBottomWidth,10);let M=0,R=0;const B="offsetWidth"in b?b.offsetWidth-b.clientWidth-c-L:0,W="offsetHeight"in b?b.offsetHeight-b.clientHeight-x-A:0,P="offsetWidth"in b?b.offsetWidth===0?0:ie/b.offsetWidth:0,N="offsetHeight"in b?b.offsetHeight===0?0:oe/b.offsetHeight:0;if(I===b)M=s==="start"?O:s==="end"?O-T:s==="nearest"?xe(F,F+T,T,x,A,F+O,F+O+y,y):O-T/2,R=f==="start"?D:f==="center"?D-C/2:f==="end"?D-C:xe(H,H+C,C,c,L,H+D,H+D+U,U),M=Math.max(0,M+F),R=Math.max(0,R+H);else{M=s==="start"?O-ue-x:s==="end"?O-ge+A+W:s==="nearest"?xe(ue,ge,oe,x,A+W,O,O+y,y):O-(ue+oe/2)+W/2,R=f==="start"?D-h-c:f==="center"?D-(h+ie/2)+B/2:f==="end"?D-fe+L+B:xe(h,fe,ie,c,L+B,D,D+U,U);const{scrollLeft:z,scrollTop:ee}=b;M=N===0?0:Math.max(0,Math.min(ee+M/N,b.scrollHeight-oe/N+W)),R=P===0?0:Math.max(0,Math.min(z+R/P,b.scrollWidth-ie/P+B)),O+=ee-M,D+=z-R}ce.push({el:b,top:M,left:R})}return ce};var le=function(){return le=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},le.apply(this,arguments)};var Ut=0;function ft(){}function qt(e,t){if(e){var n=Nt(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(o){var r=o.el,i=o.top,u=o.left;r.scrollTop=i,r.scrollLeft=u})}}function st(e,t,n){var o=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return o}function ze(e,t){var n;function o(){n&&clearTimeout(n)}function r(){for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s];o(),n=setTimeout(function(){n=null,e.apply(void 0,u)},t)}return r.cancel=o,r}function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){for(var r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];return t.some(function(s){return s&&s.apply(void 0,[o].concat(i)),o.preventDownshiftDefault||o.hasOwnProperty("nativeEvent")&&o.nativeEvent.preventDownshiftDefault})}}function je(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){t.forEach(function(r){typeof r=="function"?r(o):r&&(r.current=o)})}}function zt(){return String(Ut++)}function Gt(e){var t=e.isOpen,n=e.resultCount,o=e.previousResultCount;return t?n?n!==o?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function We(e,t){return!e||!t?e:Object.keys(e).reduce(function(n,o){return n[o]=Yt(t,o)?t[o]:e[o],n},{})}function Yt(e,t){return e[t]!==void 0}function Xt(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function Se(e,t,n,o,r){r===void 0&&(r=!1);var i=n.length;if(i===0)return-1;var u=i-1;(typeof e!="number"||e<0||e>u)&&(e=t>0?-1:u+1);var s=e+t;s<0?s=r?u:0:s>u&&(s=r?0:u);var f=Ce(s,t<0,n,o,r);return f===-1?e>=i?-1:e:f}function Ce(e,t,n,o,r){r===void 0&&(r=!1);var i=n.length;if(t){for(var u=e;u>=0;u--)if(!o(n[u],u))return u}else for(var s=e;s<i;s++)if(!o(n[s],s))return s;return r?Ce(t?i-1:0,t,n,o):-1}function lt(e,t,n,o){return o===void 0&&(o=!0),n&&t.some(function(r){return r&&(st(r,e,n)||o&&st(r,n.document.activeElement,n))})}var _t=ze(function(e){gt(e).textContent=""},500);function gt(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function Jt(e,t){if(!(!e||!t)){var n=gt(t);n.textContent=e,_t(t)}}var Qt=["highlightedIndex","items","environment"],ht={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function Zt(e,t,n){var o=e.props,r=e.type,i={};Object.keys(t).forEach(function(u){en(u,e,t,n),n[u]!==t[u]&&(i[u]=n[u])}),o.onStateChange&&Object.keys(i).length&&o.onStateChange(S({type:r},i))}function en(e,t,n,o){var r=t.props,i=t.type,u="on"+Ge(e)+"Change";r[u]&&o[e]!==void 0&&o[e]!==n[e]&&r[u](S({type:i},o))}function tn(e,t){return t.changes}function nn(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var rn=ze(function(e,t){Jt(e(),t)},200),on=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect,un="useId"in Me?function(t){var n=t.id,o=t.labelId,r=t.menuId,i=t.getItemId,u=t.toggleButtonId,s=t.inputId,f="downshift-"+Me.useId();n||(n=f);var p=d.useRef({labelId:o||n+"-label",menuId:r||n+"-menu",getItemId:i||function(l){return n+"-item-"+l},toggleButtonId:u||n+"-toggle-button",inputId:s||n+"-input"});return p.current}:function(t){var n=t.id,o=n===void 0?"downshift-"+zt():n,r=t.labelId,i=t.menuId,u=t.getItemId,s=t.toggleButtonId,f=t.inputId,p=d.useRef({labelId:r||o+"-label",menuId:i||o+"-menu",getItemId:u||function(l){return o+"-item-"+l},toggleButtonId:s||o+"-toggle-button",inputId:f||o+"-input"});return p.current};function sn(e,t,n,o){var r,i;if(e===void 0){if(t===void 0)throw new Error(o);r=n[t],i=t}else i=t===void 0?n.indexOf(e):t,r=e;return[r,i]}function ln(e){return e?String(e):""}function an(e){return/^\S{1}$/.test(e)}function Ge(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function pt(e){var t=d.useRef(e);return t.current=e,t}function dn(e,t,n,o){var r=d.useRef(),i=d.useRef(),u=d.useCallback(function($,v){i.current=v,$=We($,v.props);var C=e($,v),T=v.props.stateReducer($,S({},v,{changes:C}));return T},[e]),s=d.useReducer(u,t,n),f=s[0],p=s[1],l=pt(t),w=d.useCallback(function($){return p(S({props:l.current},$))},[l]),I=i.current;return d.useEffect(function(){var $=We(r.current,I==null?void 0:I.props),v=I&&r.current&&!o($,f);v&&Zt(I,$,f),r.current=f},[f,I,o]),[f,w]}function cn(e,t,n,o){var r=dn(e,t,n,o),i=r[0],u=r[1];return[We(i,t),u]}var ve={itemToString:ln,stateReducer:tn,getA11ySelectionMessage:nn,scrollIntoView:qt,environment:typeof window>"u"?void 0:window};function X(e,t,n){n===void 0&&(n=ht);var o=e["default"+Ge(t)];return o!==void 0?o:n[t]}function me(e,t,n){n===void 0&&(n=ht);var o=e[t];if(o!==void 0)return o;var r=e["initial"+Ge(t)];return r!==void 0?r:X(e,t,n)}function fn(e){var t=me(e,"selectedItem"),n=me(e,"isOpen"),o=me(e,"highlightedIndex"),r=me(e,"inputValue");return{highlightedIndex:o<0&&t&&n?e.items.indexOf(t):o,isOpen:n,selectedItem:t,inputValue:r}}function ke(e,t,n){var o=e.items,r=e.initialHighlightedIndex,i=e.defaultHighlightedIndex,u=t.selectedItem,s=t.highlightedIndex;return o.length===0?-1:r!==void 0&&s===r?r:i!==void 0?i:u?o.indexOf(u):n===0?-1:n<0?o.length-1:0}function gn(e,t,n,o){var r=d.useRef({isMouseDown:!1,isTouchMove:!1,isTouchEnd:!1});return d.useEffect(function(){if(n){var i=function(){r.current.isTouchEnd=!1,r.current.isMouseDown=!0},u=function(w){r.current.isMouseDown=!1,e&&!lt(w.target,t.map(function(I){return I.current}),n)&&o()},s=function(){r.current.isTouchEnd=!1,r.current.isTouchMove=!1},f=function(){r.current.isTouchMove=!0},p=function(w){r.current.isTouchEnd=!0,e&&!r.current.isTouchMove&&!lt(w.target,t.map(function(I){return I.current}),n,!1)&&o()};return n.addEventListener("mousedown",i),n.addEventListener("mouseup",u),n.addEventListener("touchstart",s),n.addEventListener("touchmove",f),n.addEventListener("touchend",p),function(){n.removeEventListener("mousedown",i),n.removeEventListener("mouseup",u),n.removeEventListener("touchstart",s),n.removeEventListener("touchmove",f),n.removeEventListener("touchend",p)}}},[e,n]),r}var hn=function(){return ft};function at(e,t,n){var o=n.highlightedIndex,r=n.items,i=n.environment,u=pe(n,Qt),s=mt();d.useEffect(function(){s||!(i!=null&&i.document)||rn(function(){return e(S({highlightedIndex:o,highlightedItem:r[o],resultCount:r.length},u))},i.document)},t)}function pn(e){var t=e.highlightedIndex,n=e.isOpen,o=e.itemRefs,r=e.getItemNodeFromIndex,i=e.menuElement,u=e.scrollIntoView,s=d.useRef(!0);return on(function(){t<0||!n||!Object.keys(o.current).length||(s.current===!1?s.current=!0:u(r(t),i))},[t]),s}function dt(e,t,n){var o;n===void 0&&(n=!0);var r=((o=e.items)==null?void 0:o.length)&&t>=0;return S({isOpen:!1,highlightedIndex:-1},r&&S({selectedItem:e.items[t],isOpen:X(e,"isOpen"),highlightedIndex:X(e,"highlightedIndex")},n&&{inputValue:e.itemToString(e.items[t])}))}function mn(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}function mt(){var e=Me.useRef(!0);return Me.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e.current}var vt={environment:a.shape({addEventListener:a.func.isRequired,removeEventListener:a.func.isRequired,document:a.shape({createElement:a.func.isRequired,getElementById:a.func.isRequired,activeElement:a.any.isRequired,body:a.any.isRequired}).isRequired,Node:a.func.isRequired}),itemToString:a.func,stateReducer:a.func},It=S({},vt,{getA11yStatusMessage:a.func,highlightedIndex:a.number,defaultHighlightedIndex:a.number,initialHighlightedIndex:a.number,isOpen:a.bool,defaultIsOpen:a.bool,initialIsOpen:a.bool,selectedItem:a.any,initialSelectedItem:a.any,defaultSelectedItem:a.any,id:a.string,labelId:a.string,menuId:a.string,getItemId:a.func,toggleButtonId:a.string,onSelectedItemChange:a.func,onHighlightedIndexChange:a.func,onStateChange:a.func,onIsOpenChange:a.func,scrollIntoView:a.func});function vn(e,t,n){var o=t.type,r=t.props,i;switch(o){case n.ItemMouseMove:i={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:i={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:i={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:ke(r,e,0)};break;case n.FunctionOpenMenu:i={isOpen:!0,highlightedIndex:ke(r,e,0)};break;case n.FunctionCloseMenu:i={isOpen:!1};break;case n.FunctionSetHighlightedIndex:i={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:i={inputValue:t.inputValue};break;case n.FunctionReset:i={highlightedIndex:X(r,"highlightedIndex"),isOpen:X(r,"isOpen"),selectedItem:X(r,"selectedItem"),inputValue:X(r,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return S({},e,i)}function In(e){for(var t=e.keysSoFar,n=e.highlightedIndex,o=e.items,r=e.itemToString,i=e.isItemDisabled,u=t.toLowerCase(),s=0;s<o.length;s++){var f=(s+n+(t.length<2?1:0))%o.length,p=o[f];if(p!==void 0&&r(p).toLowerCase().startsWith(u)&&!i(p,f))return f}return n}le(le({},It),{items:a.array.isRequired,isItemDisabled:a.func,getA11ySelectionMessage:a.func});function bn(e){var t=e.isOpen,n=e.resultCount,o=e.previousResultCount;return t?n?n!==o?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}var yn=le(le({},ve),{getA11yStatusMessage:bn,isItemDisabled:function(){return!1}}),wn=ft,$e=0,Ye=1,Xe=2,Re=3,_e=4,Je=5,Qe=6,Ze=7,et=8,tt=9,nt=10,Ee=11,bt=12,yt=13,rt=14,wt=15,xt=16,St=17,$t=18,ot=19,Ne=20,Mt=21,Ct=Object.freeze({__proto__:null,ToggleButtonClick:$e,ToggleButtonKeyDownArrowDown:Ye,ToggleButtonKeyDownArrowUp:Xe,ToggleButtonKeyDownCharacter:Re,ToggleButtonKeyDownEscape:_e,ToggleButtonKeyDownHome:Je,ToggleButtonKeyDownEnd:Qe,ToggleButtonKeyDownEnter:Ze,ToggleButtonKeyDownSpaceButton:et,ToggleButtonKeyDownPageUp:tt,ToggleButtonKeyDownPageDown:nt,ToggleButtonBlur:Ee,MenuMouseLeave:bt,ItemMouseMove:yt,ItemClick:rt,FunctionToggleMenu:wt,FunctionOpenMenu:xt,FunctionCloseMenu:St,FunctionSetHighlightedIndex:$t,FunctionSelectItem:ot,FunctionSetInputValue:Ne,FunctionReset:Mt});function xn(e,t){var n,o=t.type,r=t.props,i=t.altKey,u;switch(o){case rt:u={isOpen:X(r,"isOpen"),highlightedIndex:X(r,"highlightedIndex"),selectedItem:r.items[t.index]};break;case Re:{var s=t.key,f=""+e.inputValue+s,p=!e.isOpen&&e.selectedItem?r.items.indexOf(e.selectedItem):e.highlightedIndex,l=In({keysSoFar:f,highlightedIndex:p,items:r.items,itemToString:r.itemToString,isItemDisabled:r.isItemDisabled});u={inputValue:f,highlightedIndex:l,isOpen:!0}}break;case Ye:{var w=e.isOpen?Se(e.highlightedIndex,1,r.items,r.isItemDisabled):i&&e.selectedItem==null?-1:ke(r,e,1);u={highlightedIndex:w,isOpen:!0}}break;case Xe:if(e.isOpen&&i)u=dt(r,e.highlightedIndex,!1);else{var I=e.isOpen?Se(e.highlightedIndex,-1,r.items,r.isItemDisabled):ke(r,e,-1);u={highlightedIndex:I,isOpen:!0}}break;case Ze:case et:u=dt(r,e.highlightedIndex,!1);break;case Je:u={highlightedIndex:Ce(0,!1,r.items,r.isItemDisabled),isOpen:!0};break;case Qe:u={highlightedIndex:Ce(r.items.length-1,!0,r.items,r.isItemDisabled),isOpen:!0};break;case tt:u={highlightedIndex:Se(e.highlightedIndex,-10,r.items,r.isItemDisabled)};break;case nt:u={highlightedIndex:Se(e.highlightedIndex,10,r.items,r.isItemDisabled)};break;case _e:u={isOpen:!1,highlightedIndex:-1};break;case Ee:u=S({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((n=r.items)==null?void 0:n.length)&&{selectedItem:r.items[e.highlightedIndex]});break;case ot:u={selectedItem:t.selectedItem};break;default:return vn(e,t,Ct)}return S({},e,u)}var Sn=["onClick"],$n=["onMouseLeave","refKey","ref"],Mn=["onBlur","onClick","onPress","onKeyDown","refKey","ref"],Cn=["item","index","onMouseMove","onClick","onMouseDown","onPress","refKey","disabled","ref"];kn.stateChangeTypes=Ct;function kn(e){e===void 0&&(e={}),wn();var t=S({},yn,e),n=t.items,o=t.scrollIntoView,r=t.environment,i=t.itemToString,u=t.getA11ySelectionMessage,s=t.getA11yStatusMessage,f=cn(xn,t,fn,mn),p=f[0],l=f[1],w=p.isOpen,I=p.highlightedIndex,$=p.selectedItem,v=p.inputValue,C=d.useRef(null),T=d.useRef(null),H=d.useRef({}),F=d.useRef(null),y=un(t),U=d.useRef(),ne=mt(),k=pt({state:p,props:t}),ae=d.useCallback(function(h){return H.current[y.getItemId(h)]},[y]);at(s,[w,I,v,n],S({previousResultCount:U.current,items:n,environment:r,itemToString:i},p)),at(u,[$],S({previousResultCount:U.current,items:n,environment:r,itemToString:i},p));var Q=pn({menuElement:T.current,highlightedIndex:I,isOpen:w,itemRefs:H,scrollIntoView:o,getItemNodeFromIndex:ae});d.useEffect(function(){return F.current=ze(function(h){h({type:Ne,inputValue:""})},500),function(){F.current.cancel()}},[]),d.useEffect(function(){v&&F.current(l)},[l,v]),d.useEffect(function(){ne||(U.current=n.length)}),d.useEffect(function(){var h=me(t,"isOpen");h&&C.current&&C.current.focus()},[]);var Z=gn(w,[T,C],r,function(){l({type:Ee})}),de=hn();d.useEffect(function(){w||(H.current={})},[w]);var re=d.useMemo(function(){return{ArrowDown:function(g){g.preventDefault(),l({type:Ye,altKey:g.altKey})},ArrowUp:function(g){g.preventDefault(),l({type:Xe,altKey:g.altKey})},Home:function(g){g.preventDefault(),l({type:Je})},End:function(g){g.preventDefault(),l({type:Qe})},Escape:function(){k.current.state.isOpen&&l({type:_e})},Enter:function(g){g.preventDefault(),l({type:k.current.state.isOpen?Ze:$e})},PageUp:function(g){k.current.state.isOpen&&(g.preventDefault(),l({type:tt}))},PageDown:function(g){k.current.state.isOpen&&(g.preventDefault(),l({type:nt}))}," ":function(g){g.preventDefault();var c=k.current.state;if(!c.isOpen){l({type:$e});return}c.inputValue?l({type:Re,key:" "}):l({type:et})}}},[l,k]),Ie=d.useCallback(function(){l({type:wt})},[l]),O=d.useCallback(function(){l({type:St})},[l]),D=d.useCallback(function(){l({type:xt})},[l]),ce=d.useCallback(function(h){l({type:$t,highlightedIndex:h})},[l]),q=d.useCallback(function(h){l({type:ot,selectedItem:h})},[l]),b=d.useCallback(function(){l({type:Mt})},[l]),oe=d.useCallback(function(h){l({type:Ne,inputValue:h})},[l]),ie=d.useCallback(function(h){var g=h===void 0?{}:h,c=g.onClick,x=pe(g,Sn),L=function(){var M;(M=C.current)==null||M.focus()};return S({id:y.labelId,htmlFor:y.toggleButtonId,onClick:J(c,L)},x)},[y]),ue=d.useCallback(function(h,g){var c,x=h===void 0?{}:h,L=x.onMouseLeave,A=x.refKey,M=A===void 0?"ref":A,R=x.ref,B=pe(x,$n),W=g===void 0?{}:g;W.suppressRefError;var P=function(){l({type:bt})};return S((c={},c[M]=je(R,function(N){T.current=N}),c.id=y.menuId,c.role="listbox",c["aria-labelledby"]=B&&B["aria-label"]?void 0:""+y.labelId,c.onMouseLeave=J(L,P),c),B)},[l,de,y]),fe=d.useCallback(function(h,g){var c,x=h===void 0?{}:h,L=x.onBlur,A=x.onClick;x.onPress;var M=x.onKeyDown,R=x.refKey,B=R===void 0?"ref":R,W=x.ref,P=pe(x,Mn),N=g===void 0?{}:g;N.suppressRefError;var z=k.current.state,ee=function(){l({type:$e})},be=function(){z.isOpen&&!Z.current.isMouseDown&&l({type:Ee})},ye=function(G){var Y=Xt(G);Y&&re[Y]?re[Y](G):an(Y)&&l({type:Re,key:Y})},se=S((c={},c[B]=je(W,function(te){C.current=te}),c["aria-activedescendant"]=z.isOpen&&z.highlightedIndex>-1?y.getItemId(z.highlightedIndex):"",c["aria-controls"]=y.menuId,c["aria-expanded"]=k.current.state.isOpen,c["aria-haspopup"]="listbox",c["aria-labelledby"]=P&&P["aria-label"]?void 0:""+y.labelId,c.id=y.toggleButtonId,c.role="combobox",c.tabIndex=0,c.onBlur=J(L,be),c),P);return P.disabled||(se.onClick=J(A,ee),se.onKeyDown=J(M,ye)),se},[k,y,de,l,Z,re]),ge=d.useCallback(function(h){var g,c=h===void 0?{}:h,x=c.item,L=c.index,A=c.onMouseMove,M=c.onClick,R=c.onMouseDown;c.onPress;var B=c.refKey,W=B===void 0?"ref":B,P=c.disabled,N=c.ref,z=pe(c,Cn);P!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');var ee=k.current,be=ee.state,ye=ee.props,se=sn(x,L,ye.items,"Pass either item or index to getItemProps!"),te=se[0],G=se[1],Y=ye.isItemDisabled(te,G),Tt=function(){Z.current.isTouchEnd||G===be.highlightedIndex||(Q.current=!1,l({type:yt,index:G,disabled:Y}))},Ot=function(){l({type:rt,index:G})},Dt=function(Bt){return Bt.preventDefault()},we=S((g={},g[W]=je(N,function(he){he&&(H.current[y.getItemId(G)]=he)}),g["aria-disabled"]=Y,g["aria-selected"]=""+(te===be.selectedItem),g.id=y.getItemId(G),g.role="option",g),z);return Y||(we.onClick=J(M,Ot)),we.onMouseMove=J(A,Tt),we.onMouseDown=J(R,Dt),we},[k,y,Z,Q,l]);return{getToggleButtonProps:fe,getLabelProps:ie,getMenuProps:ue,getItemProps:ge,toggleMenu:Ie,openMenu:D,closeMenu:O,setHighlightedIndex:ce,selectItem:q,reset:b,setInputValue:oe,highlightedIndex:I,isOpen:w,selectedItem:$,inputValue:v}}S({},It,{items:a.array.isRequired,isItemDisabled:a.func,selectedItemChanged:a.func,getA11ySelectionMessage:a.func,inputValue:a.string,defaultInputValue:a.string,initialInputValue:a.string,inputId:a.string,onInputValueChange:a.func});S({},ve,{selectedItemChanged:function(t,n){return t!==n},getA11yStatusMessage:Gt,isItemDisabled:function(){return!1}});function Rn(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}S({},vt,{selectedItems:a.array,initialSelectedItems:a.array,defaultSelectedItems:a.array,getA11yRemovalMessage:a.func,activeIndex:a.number,initialActiveIndex:a.number,defaultActiveIndex:a.number,onActiveIndexChange:a.func,onSelectedItemsChange:a.func,keyNavigationNext:a.string,keyNavigationPrevious:a.string});ve.itemToString,ve.stateReducer,ve.environment;const kt=6,En=48,Tn=1,On=En*kt,Dn=Tn*kt-1,Jn=On+Dn,Bn=j.div`
  ${()=>{const{tokens:e}=_(),{select:t}=e;return[E`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,Hn=j.div`
  ${({$isOpen:e,$hasError:t,$isDisabled:n})=>{const{tokens:o}=_(),{select:r}=o;return[E`
        display: grid;
        background: ${r.button.backgroundColor.base};
        padding-top: ${r.button.paddingTop};
        padding-bottom: ${r.button.paddingBottom};
        padding-left: ${r.button.paddingLeft};
        padding-right: ${r.button.paddingRight};
        border-radius: ${r.button.stroke.radius};
        outline-width: ${r.button.stroke.width.base};
        outline-style: ${r.button.stroke.style};
        outline-color: ${r.button.stroke.color.base};
        outline-offset: ${r.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${r.button.icon.color.base};
        }

        &:hover {
          outline-width: ${r.button.stroke.width.hover};
          outline-color: ${r.button.stroke.color.hover};
          outline-offset: ${r.button.stroke.offset.hover};

          svg {
            color: ${r.button.icon.color.hover};
          }
        }
      `,t&&E`
          &,
          &:hover {
            outline-width: ${r.button.stroke.width.error};
            outline-color: ${r.button.stroke.color.error};
            outline-offset: ${r.button.stroke.offset.error};
          }
        `,e&&E`
          &,
          &:hover {
            outline-width: ${r.button.stroke.width.active};
            outline-color: ${r.button.stroke.color.active};
            outline-offset: ${r.button.stroke.offset.active};

            svg {
              color: ${r.button.icon.color.active};
            }
          }
        `,n&&E`
          cursor: not-allowed;

          &,
          &:hover {
            outline-width: ${r.button.stroke.width.disabled};
            outline-color: ${r.button.stroke.color.disabled};
            outline-offset: ${r.button.stroke.offset.disabled};

            svg {
              color: ${r.button.icon.color.disabled};
            }
          }
        `]}}
`,Ln=j.div`
  ${()=>{const{tokens:e}=_(),{select:t}=e;return E`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,An=j.div`
  ${()=>{const{tokens:e}=_(),{select:t}=e;return E`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,Rt=j(Ht)`
  rotate: 0deg;
`,Pn=j(Rt)`
  rotate: 180deg;
`,Kn=j.div`
  ${({$isOpen:e})=>{const{tokens:t}=_(),{select:n}=t;return E`
      display: ${e?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${n.menu.radius};
      border-width: ${n.menu.stroke.width};
      border-style: ${n.menu.stroke.style};
      border-color: ${n.menu.stroke.color};
      box-shadow: 0px 2px 2px ${n.menu.shadow.outer.color};
      z-index: ${n.menu.zIndex};
    `}}
`,Et=j.div`
  ${()=>E`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`,Vn=j(Et)`
  ${({$visible:e})=>{const{tokens:t}=_(),{select:n}=t;return[E`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${n.menu.shadow.inner.color};
      `,e&&E`
          transform: translateY(0px);
        `]}}
`,Fn=j(Et)`
  ${({$visible:e})=>{const{tokens:t}=_(),{select:n}=t;return[E`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${n.menu.shadow.inner.color};
      `,e&&E`
          transform: translateY(0px);
        `]}}
`,jn=j.ul`
  ${()=>{const{tokens:e}=_(),{select:t}=e,{menu:{scrollBar:{thumbColor:n,trackColor:o,radius:r}}}=t;return E`
      all: unset;
      display: grid;
      scrollbar-color: ${n} ${o};
      background: ${t.menu.separator.color};
      gap: ${t.menu.separator.width};
      overflow-y: auto;

      @supports not (scrollbar-color: ${n} ${o}) {
        &::-webkit-scrollbar {
          background: ${o};
        }

        &::-webkit-scrollbar-thumb {
          background: ${n};
          border: 4px solid ${o};
          border-radius: ${r};
        }
      }
    `}}
`;function Wn(e){const{offsetValue:t}=e,{refs:n,floatingStyles:o}=Lt({placement:"bottom-start",whileElementsMounted:At,middleware:[Pt(t),Kt({padding:16}),Vt({apply({rects:r,elements:i}){Object.assign(i.floating.style,{minWidth:`${r.reference.width}px`})}})]});return{refs:n,floatingStyles:o}}function Nn(e){const{isOpen:t}=e,n={threshold:1},o=d.useRef(null),r=d.useRef(null),[i,u]=d.useState(!1),[s,f]=d.useState(!1);function p(l,w){if(!(l.length<2)){if(w===0)return o;if(l.length===w+1)return r}}return d.useEffect(()=>{if(!t||!o.current||!r.current)return;const l=new IntersectionObserver(([I])=>{I&&u(!I.isIntersecting)},n),w=new IntersectionObserver(([I])=>{I&&f(!I.isIntersecting)},n);return l.observe(o.current),w.observe(r.current),()=>{l.disconnect(),w.disconnect()}},[t]),{getListItemRef:p,showTopShadow:i,showBottomShadow:s}}function Qn(e){const{items:t,getToggleButtonProps:n,getMenuProps:o,isOpen:r,renderButtonContent:i,renderListItem:u,hasError:s,isDisabled:f,maxListHeight:p,testID:l="select"}=e,{tokens:w}=_(),{select:I}=w,{refs:$,floatingStyles:v}=Wn({offsetValue:parseInt(I.gap,10)}),{getListItemRef:C,showTopShadow:T,showBottomShadow:H}=Nn({isOpen:r});return K.jsxs(K.Fragment,{children:[K.jsx(Bn,{children:K.jsx(Hn,{...n({ref:$.setReference,disabled:f}),$isOpen:r,$hasError:s,$isDisabled:f,"data-testid":l,children:K.jsxs(Ln,{children:[i(),K.jsx(An,{children:r?K.jsx(Pn,{"aria-hidden":"true"}):K.jsx(Rt,{"aria-hidden":"true"})})]})})}),K.jsxs(Kn,{...o({ref:$.setFloating}),style:v,$isOpen:r,children:[K.jsx(Vn,{$visible:T}),K.jsx(jn,{style:{maxHeight:p},children:r&&t.map((F,y)=>u(C(t,y),F,y))}),K.jsx(Fn,{$visible:H})]})]})}const Zn=Array.from({length:15},(e,t)=>{const n=`${t+1}`.padStart(2,"0");return{id:`item-${n}`,title:`Item ${n}`,value:n}});export{Jn as M,Qn as S,Zn as m,kn as u};
