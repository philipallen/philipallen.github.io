import{R as p,r as s}from"./index-c013ead5.js";function F(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=F(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function T(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=F(e))&&(r&&(r+=" "),r+=t);return r}const L=typeof document<"u"?p.useLayoutEffect:()=>{};function x(e){const t=s.useRef(null);return L(()=>{t.current=e},[e]),s.useCallback((...n)=>{const r=t.current;return r(...n)},[])}let v=new Map;function S(e,t){if(e===t)return e;let n=v.get(e);if(n)return n(t),t;let r=v.get(t);return r?(r(e),e):t}function W(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}function C(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let o in r){let i=t[o],a=r[o];typeof i=="function"&&typeof a=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?t[o]=W(i,a):(o==="className"||o==="UNSAFE_className")&&typeof i=="string"&&typeof a=="string"?t[o]=T(i,a):o==="id"&&i&&a?t.id=S(i,a):t[o]=a!==void 0?a:i}}return t}function k(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function M(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function D(){return M(/^Mac/i)}function H(){return k(/Android/i)}let f=new Map,g=new Set;function h(){if(typeof window>"u")return;let e=n=>{let r=f.get(n.target);r||(r=new Set,f.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{let r=f.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),f.delete(n.target)),f.size===0)){for(let o of g)o();g.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?h():document.addEventListener("DOMContentLoaded",h));function A(e){return e.mozInputSource===0&&e.isTrusted?!0:H()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}const B=p.createContext({register:()=>{}});B.displayName="PressResponderContext";class N{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function R(e){let t=s.useRef({isFocused:!1,observer:null});L(()=>{const r=t.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let n=x(r=>{e==null||e(r)});return s.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=r.target,i=a=>{t.current.isFocused=!1,o.disabled&&n(new N("blur",a)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var a;(a=t.current.observer)===null||a===void 0||a.disconnect();let u=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:u})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:u}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let K=new Set,m=!1,d=!1,b=!1;function $(e,t){for(let n of K)n(e,t)}function I(e){return!(e.metaKey||!D()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function y(e){d=!0,I(e)&&$("keyboard",e)}function l(e){(e.type==="mousedown"||e.type==="pointerdown")&&(d=!0,$("pointer",e))}function z(e){A(e)&&(d=!0)}function G(e){e.target===window||e.target===document||(!d&&!b&&$("virtual",e),d=!1,b=!1)}function O(){d=!1,b=!0}function w(){if(typeof window>"u"||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){d=!0,e.apply(this,arguments)},document.addEventListener("keydown",y,!0),document.addEventListener("keyup",y,!0),document.addEventListener("click",z,!0),window.addEventListener("focus",G,!0),window.addEventListener("blur",O,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",l,!0),document.addEventListener("pointermove",l,!0),document.addEventListener("pointerup",l,!0)):(document.addEventListener("mousedown",l,!0),document.addEventListener("mousemove",l,!0),document.addEventListener("mouseup",l,!0)),m=!0}typeof document<"u"&&(document.readyState!=="loading"?w():document.addEventListener("DOMContentLoaded",w));function U(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,i=s.useRef({isFocusWithin:!1}),a=s.useCallback(c=>{i.current.isFocusWithin&&!c.currentTarget.contains(c.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(c),o&&o(!1))},[n,o,i]),u=R(a),P=s.useCallback(c=>{!i.current.isFocusWithin&&document.activeElement===c.target&&(r&&r(c),o&&o(!0),i.current.isFocusWithin=!0,u(c))},[r,o,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:P,onBlur:a}}}const E={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function j(e={}){let{style:t,isFocusable:n}=e,[r,o]=s.useState(!1),{focusWithinProps:i}=U({isDisabled:!n,onFocusWithinChange:u=>o(u)}),a=s.useMemo(()=>r?t:t?{...E,...t}:E,[r]);return{visuallyHiddenProps:{...i,style:a}}}function _(e){let{children:t,elementType:n="div",isFocusable:r,style:o,...i}=e,{visuallyHiddenProps:a}=j(e);return p.createElement(n,C(i,a),t)}export{_ as $};