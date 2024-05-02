import{R as M,r as d}from"./index-c013ead5.js";const te={prefix:String(Math.round(Math.random()*1e10)),current:0},Ie=M.createContext(te),Je=M.createContext(!1);let Qe=!!(typeof window<"u"&&window.document&&window.document.createElement),se=new WeakMap;function Ze(e=!1){let t=d.useContext(Ie),r=d.useRef(null);if(r.current===null&&!e){var n,i;let u=(i=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(n=i.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(u){let a=se.get(u);a==null?se.set(u,{id:t.current,state:u.memoizedState}):u.memoizedState!==a.state&&(t.current=a.id,se.delete(u))}r.current=++t.current}return r.current}function _e(e){let t=d.useContext(Ie);t===te&&!Qe&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=Ze(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function et(e){let t=M.useId(),[r]=d.useState(it()),n=r?"react-aria":`react-aria${te.prefix}`;return e||`${n}-${t}`}const tt=typeof M.useId=="function"?et:_e;function rt(){return!1}function nt(){return!0}function ot(e){return()=>{}}function it(){return typeof M.useSyncExternalStore=="function"?M.useSyncExternalStore(ot,rt,nt):d.useContext(Je)}function Fe(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Fe(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function at(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Fe(e))&&(n&&(n+=" "),n+=t);return n}const F=typeof document<"u"?M.useLayoutEffect:()=>{};function w(e){const t=d.useRef(null);return F(()=>{t.current=e},[e]),d.useCallback((...r)=>{const n=t.current;return n==null?void 0:n(...r)},[])}function st(e){let[t,r]=d.useState(e),n=d.useRef(null),i=w(()=>{if(!n.current)return;let a=n.current.next();if(a.done){n.current=null;return}t===a.value?i():r(a.value)});F(()=>{n.current&&i()});let u=w(a=>{n.current=a(t),i()});return[t,u]}let ut=!!(typeof window<"u"&&window.document&&window.document.createElement),re=new Map;function We(e){let[t,r]=d.useState(e),n=d.useRef(null),i=tt(t),u=d.useCallback(a=>{n.current=a},[]);return ut&&re.set(i,u),F(()=>{let a=i;return()=>{re.delete(a)}},[i]),d.useEffect(()=>{let a=n.current;a&&(n.current=null,r(a))}),i}function lt(e,t){if(e===t)return e;let r=re.get(e);if(r)return r(t),t;let n=re.get(t);return n?(n(e),e):t}function Vt(e=[]){let t=We(),[r,n]=st(t),i=d.useCallback(()=>{n(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,n]);return F(i,[t,i,...e]),r}function Ae(...e){return(...t)=>{for(let r of e)typeof r=="function"&&r(...t)}}const S=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},k=e=>e&&"window"in e&&e.window===e?e:S(e).defaultView||window;function me(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let i in n){let u=t[i],a=n[i];typeof u=="function"&&typeof a=="function"&&i[0]==="o"&&i[1]==="n"&&i.charCodeAt(2)>=65&&i.charCodeAt(2)<=90?t[i]=Ae(u,a):(i==="className"||i==="UNSAFE_className")&&typeof u=="string"&&typeof a=="string"?t[i]=at(u,a):i==="id"&&u&&a?t.id=lt(u,a):t[i]=a!==void 0?a:u}}return t}function Jt(...e){return e.length===1?e[0]:t=>{for(let r of e)typeof r=="function"?r(t):r!=null&&(r.current=t)}}const ft=new Set(["id"]),ct=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),dt=new Set(["href","target","rel","download","ping","referrerPolicy"]),pt=/^(data-.*)$/;function Qt(e,t={}){let{labelable:r,isLink:n,propNames:i}=t,u={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(ft.has(a)||r&&ct.has(a)||n&&dt.has(a)||i!=null&&i.has(a)||pt.test(a))&&(u[a]=e[a]);return u}function z(e){if(vt())e.focus({preventScroll:!0});else{let t=bt(e);e.focus(),$t(t)}}let V=null;function vt(){if(V==null){V=!1;try{document.createElement("div").focus({get preventScroll(){return V=!0,!0}})}catch{}}return V}function bt(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}function $t(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}function ie(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(r=>e.test(r.brand)))||e.test(window.navigator.userAgent)}function he(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function X(){return he(/^Mac/i)}function gt(){return he(/^iPhone/i)}function Re(){return he(/^iPad/i)||X()&&navigator.maxTouchPoints>1}function Ue(){return gt()||Re()}function yt(){return ie(/AppleWebKit/i)&&!mt()}function mt(){return ie(/Chrome/i)}function Be(){return ie(/Android/i)}function ht(){return ie(/Firefox/i)}function Y(e,t,r=!0){var n,i;let{metaKey:u,ctrlKey:a,altKey:p,shiftKey:c}=t;ht()&&(!((i=window.event)===null||i===void 0||(n=i.type)===null||n===void 0)&&n.startsWith("key"))&&e.target==="_blank"&&(X()?u=!0:a=!0);let g=yt()&&X()&&!Re()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:u,ctrlKey:a,altKey:p,shiftKey:c}):new MouseEvent("click",{metaKey:u,ctrlKey:a,altKey:p,shiftKey:c,bubbles:!0,cancelable:!0});Y.isOpening=r,z(e),e.dispatchEvent(g),Y.isOpening=!1}Y.isOpening=!1;let G=new Map,de=new Set;function Pe(){if(typeof window>"u")return;function e(n){return"propertyName"in n}let t=n=>{if(!e(n)||!n.target)return;let i=G.get(n.target);i||(i=new Set,G.set(n.target,i),n.target.addEventListener("transitioncancel",r,{once:!0})),i.add(n.propertyName)},r=n=>{if(!e(n)||!n.target)return;let i=G.get(n.target);if(i&&(i.delete(n.propertyName),i.size===0&&(n.target.removeEventListener("transitioncancel",r),G.delete(n.target)),G.size===0)){for(let u of de)u();de.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",r)}typeof document<"u"&&(document.readyState!=="loading"?Pe():document.addEventListener("DOMContentLoaded",Pe));function Et(e){requestAnimationFrame(()=>{G.size===0?e():de.add(e)})}function Tt(){let e=d.useRef(new Map),t=d.useCallback((i,u,a,p)=>{let c=p!=null&&p.once?(...g)=>{e.current.delete(a),a(...g)}:a;e.current.set(a,{type:u,eventTarget:i,fn:c,options:p}),i.addEventListener(u,a,p)},[]),r=d.useCallback((i,u,a,p)=>{var c;let g=((c=e.current.get(a))===null||c===void 0?void 0:c.fn)||a;i.removeEventListener(u,g,p),e.current.delete(a)},[]),n=d.useCallback(()=>{e.current.forEach((i,u)=>{r(i.eventTarget,i.type,u,i.options)})},[r]);return d.useEffect(()=>n,[n]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:n}}function Zt(e,t){let{id:r,"aria-label":n,"aria-labelledby":i}=e;return r=We(r),i&&n?i=[...new Set([r,...i.trim().split(/\s+/)])].join(" "):i&&(i=i.trim().split(/\s+/).join(" ")),!n&&!i&&t&&(n=t),{id:r,"aria-label":n,"aria-labelledby":i}}function _t(e){const t=d.useRef(null);return d.useMemo(()=>({get current(){return t.current},set current(r){t.current=r,typeof e=="function"?e(r):e&&(e.current=r)}}),[e])}function er(e,t){const r=d.useRef(!0),n=d.useRef(null);d.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),d.useEffect(()=>{r.current?r.current=!1:(!n.current||t.some((i,u)=>!Object.is(i,n[u])))&&e(),n.current=t},t)}function Pt(){return typeof window.ResizeObserver<"u"}function tr(e){const{ref:t,onResize:r}=e;d.useEffect(()=>{let n=t==null?void 0:t.current;if(n)if(Pt()){const i=new window.ResizeObserver(u=>{u.length&&r()});return i.observe(n),()=>{n&&i.unobserve(n)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,t])}function wt(e,t){F(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function we(e,t){let r=e;for(Se(r,t)&&(r=r.parentElement);r&&!Se(r,t);)r=r.parentElement;return r||document.scrollingElement||document.documentElement}function Se(e,t){let r=window.getComputedStyle(e),n=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return n&&t&&(n=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),n}let St=0;const ue=new Map;function rr(e){let[t,r]=d.useState();return F(()=>{if(!e)return;let n=ue.get(e);if(n)r(n.element.id);else{let i=`react-aria-description-${St++}`;r(i);let u=document.createElement("div");u.id=i,u.style.display="none",u.textContent=e,document.body.appendChild(u),n={refCount:0,element:u},ue.set(e,n)}return n.refCount++,()=>{n&&--n.refCount===0&&(n.element.remove(),ue.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function nr(e,t,r,n){let i=w(r),u=r==null;d.useEffect(()=>{if(u||!e.current)return;let a=e.current;return a.addEventListener(t,i,n),()=>{a.removeEventListener(t,i,n)}},[e,t,n,u,i])}function xt(e,t){let r=xe(e,t,"left"),n=xe(e,t,"top"),i=t.offsetWidth,u=t.offsetHeight,a=e.scrollLeft,p=e.scrollTop,{borderTopWidth:c,borderLeftWidth:g}=getComputedStyle(e),$=e.scrollLeft+parseInt(g,10),E=e.scrollTop+parseInt(c,10),h=$+e.clientWidth,b=E+e.clientHeight;r<=a?a=r-parseInt(g,10):r+i>h&&(a+=r+i-h),n<=E?p=n-parseInt(c,10):n+u>b&&(p+=n+u-b),e.scrollLeft=a,e.scrollTop=p}function xe(e,t,r){const n=r==="left"?"offsetLeft":"offsetTop";let i=0;for(;t.offsetParent&&(i+=t[n],t.offsetParent!==e);){if(t.offsetParent.contains(e)){i-=e[n];break}t=t.offsetParent}return i}function or(e,t){if(document.contains(e)){let a=document.scrollingElement||document.documentElement;if(window.getComputedStyle(a).overflow==="hidden"){let c=we(e);for(;e&&c&&e!==a&&c!==a;)xt(c,e),e=c,c=we(e)}else{var r;let{left:c,top:g}=e.getBoundingClientRect();e==null||(r=e.scrollIntoView)===null||r===void 0||r.call(e,{block:"nearest"});let{left:$,top:E}=e.getBoundingClientRect();if(Math.abs(c-$)>1||Math.abs(g-E)>1){var n,i,u;t==null||(i=t.containingElement)===null||i===void 0||(n=i.scrollIntoView)===null||n===void 0||n.call(i,{block:"center",inline:"center"}),(u=e.scrollIntoView)===null||u===void 0||u.call(e,{block:"nearest"})}}}}function pe(e){return e.mozInputSource===0&&e.isTrusted?!0:Be()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Lt(e){return!Be()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function ir(e,t){let r=d.useRef(null);return e&&r.current&&t(e,r.current)&&(e=r.current),r.current=e,e}function ar(e,t,r){let n=d.useRef(t),i=w(()=>{r&&r(n.current)});d.useEffect(()=>{var u;let a=e==null||(u=e.current)===null||u===void 0?void 0:u.form;return a==null||a.addEventListener("reset",i),()=>{a==null||a.removeEventListener("reset",i)}},[e,i])}function Mt(e,t){return t.get?t.get.call(e):t.value}function Ge(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function kt(e,t){var r=Ge(e,t,"get");return Mt(e,r)}function Ct(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Kt(e,t,r){Ct(e,t),t.set(e,r)}function Ht(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function Le(e,t,r){var n=Ge(e,t,"set");return Ht(e,n,r),r}let j="default",ve="",ee=new WeakMap;function Me(e){if(Ue()){if(j==="default"){const t=S(e);ve=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}j="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(ee.set(e,e.style.userSelect),e.style.userSelect="none")}function J(e){if(Ue()){if(j!=="disabled")return;j="restoring",setTimeout(()=>{Et(()=>{if(j==="restoring"){const t=S(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=ve||""),ve="",j="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&ee.has(e)){let t=ee.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),ee.delete(e)}}const Ee=M.createContext({register:()=>{}});Ee.displayName="PressResponderContext";function Dt(e){let t=d.useContext(Ee);if(t){let{register:r,...n}=t;e=me(n,e),r()}return wt(t,e.ref),e}var Q=new WeakMap;class Z{continuePropagation(){Le(this,Q,!1)}get shouldStopPropagation(){return kt(this,Q)}constructor(t,r,n){Kt(this,Q,{writable:!0,value:void 0}),Le(this,Q,!0),this.type=t,this.pointerType=r,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const ke=Symbol("linkClicked");function sr(e){let{onPress:t,onPressChange:r,onPressStart:n,onPressEnd:i,onPressUp:u,isDisabled:a,isPressed:p,preventFocusOnPress:c,shouldCancelOnPointerExit:g,allowTextSelectionOnPress:$,ref:E,...h}=Dt(e),[b,C]=d.useState(!1),x=d.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:D,removeAllGlobalListeners:A}=Tt(),K=w((o,v)=>{let L=x.current;if(a||L.didFirePressStart)return!1;let f=!0;if(L.isTriggeringEvent=!0,n){let y=new Z("pressstart",v,o);n(y),f=y.shouldStopPropagation}return r&&r(!0),L.isTriggeringEvent=!1,L.didFirePressStart=!0,C(!0),f}),T=w((o,v,L=!0)=>{let f=x.current;if(!f.didFirePressStart)return!1;f.ignoreClickAfterPress=!0,f.didFirePressStart=!1,f.isTriggeringEvent=!0;let y=!0;if(i){let s=new Z("pressend",v,o);i(s),y=s.shouldStopPropagation}if(r&&r(!1),C(!1),t&&L&&!a){let s=new Z("press",v,o);t(s),y&&(y=s.shouldStopPropagation)}return f.isTriggeringEvent=!1,y}),R=w((o,v)=>{let L=x.current;if(a)return!1;if(u){L.isTriggeringEvent=!0;let f=new Z("pressup",v,o);return u(f),L.isTriggeringEvent=!1,f.shouldStopPropagation}return!0}),O=w(o=>{let v=x.current;v.isPressed&&v.target&&(v.isOverTarget&&v.pointerType!=null&&T(H(v.target,o),v.pointerType,!1),v.isPressed=!1,v.isOverTarget=!1,v.activePointerId=null,v.pointerType=null,A(),$||J(v.target))}),q=w(o=>{g&&O(o)}),Ve=d.useMemo(()=>{let o=x.current,v={onKeyDown(f){if(le(f.nativeEvent,f.currentTarget)&&f.currentTarget.contains(f.target)){var y;Ke(f.target,f.key)&&f.preventDefault();let s=!0;if(!o.isPressed&&!f.repeat){o.target=f.currentTarget,o.isPressed=!0,s=K(f,"keyboard");let l=f.currentTarget,m=U=>{le(U,l)&&!U.repeat&&l.contains(U.target)&&o.target&&R(H(o.target,U),"keyboard")};D(S(f.currentTarget),"keyup",Ae(m,L),!0)}s&&f.stopPropagation(),f.metaKey&&X()&&((y=o.metaKeyEvents)===null||y===void 0||y.set(f.key,f.nativeEvent))}else f.key==="Meta"&&(o.metaKeyEvents=new Map)},onClick(f){if(!(f&&!f.currentTarget.contains(f.target))&&f&&f.button===0&&!o.isTriggeringEvent&&!Y.isOpening){let y=!0;if(a&&f.preventDefault(),!o.ignoreClickAfterPress&&!o.ignoreEmulatedMouseEvents&&!o.isPressed&&(o.pointerType==="virtual"||pe(f.nativeEvent))){!a&&!c&&z(f.currentTarget);let s=K(f,"virtual"),l=R(f,"virtual"),m=T(f,"virtual");y=s&&l&&m}o.ignoreEmulatedMouseEvents=!1,o.ignoreClickAfterPress=!1,y&&f.stopPropagation()}}},L=f=>{var y;if(o.isPressed&&o.target&&le(f,o.target)){var s;Ke(f.target,f.key)&&f.preventDefault();let m=f.target;T(H(o.target,f),"keyboard",o.target.contains(m)),A(),f.key!=="Enter"&&Te(o.target)&&o.target.contains(m)&&!f[ke]&&(f[ke]=!0,Y(o.target,f,!1)),o.isPressed=!1,(s=o.metaKeyEvents)===null||s===void 0||s.delete(f.key)}else if(f.key==="Meta"&&(!((y=o.metaKeyEvents)===null||y===void 0)&&y.size)){var l;let m=o.metaKeyEvents;o.metaKeyEvents=void 0;for(let U of m.values())(l=o.target)===null||l===void 0||l.dispatchEvent(new KeyboardEvent("keyup",U))}};if(typeof PointerEvent<"u"){v.onPointerDown=l=>{if(l.button!==0||!l.currentTarget.contains(l.target))return;if(Lt(l.nativeEvent)){o.pointerType="virtual";return}fe(l.currentTarget)&&l.preventDefault(),o.pointerType=l.pointerType;let m=!0;o.isPressed||(o.isPressed=!0,o.isOverTarget=!0,o.activePointerId=l.pointerId,o.target=l.currentTarget,!a&&!c&&z(l.currentTarget),$||Me(o.target),m=K(l,o.pointerType),D(S(l.currentTarget),"pointermove",f,!1),D(S(l.currentTarget),"pointerup",y,!1),D(S(l.currentTarget),"pointercancel",s,!1)),m&&l.stopPropagation()},v.onMouseDown=l=>{l.currentTarget.contains(l.target)&&l.button===0&&(fe(l.currentTarget)&&l.preventDefault(),l.stopPropagation())},v.onPointerUp=l=>{!l.currentTarget.contains(l.target)||o.pointerType==="virtual"||l.button===0&&B(l,l.currentTarget)&&R(l,o.pointerType||l.pointerType)};let f=l=>{l.pointerId===o.activePointerId&&(o.target&&B(l,o.target)?!o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!0,K(H(o.target,l),o.pointerType)):o.target&&o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!1,T(H(o.target,l),o.pointerType,!1),q(l)))},y=l=>{l.pointerId===o.activePointerId&&o.isPressed&&l.button===0&&o.target&&(B(l,o.target)&&o.pointerType!=null?T(H(o.target,l),o.pointerType):o.isOverTarget&&o.pointerType!=null&&T(H(o.target,l),o.pointerType,!1),o.isPressed=!1,o.isOverTarget=!1,o.activePointerId=null,o.pointerType=null,A(),$||J(o.target))},s=l=>{O(l)};v.onDragStart=l=>{l.currentTarget.contains(l.target)&&O(l)}}else{v.onMouseDown=s=>{if(s.button!==0||!s.currentTarget.contains(s.target))return;if(fe(s.currentTarget)&&s.preventDefault(),o.ignoreEmulatedMouseEvents){s.stopPropagation();return}o.isPressed=!0,o.isOverTarget=!0,o.target=s.currentTarget,o.pointerType=pe(s.nativeEvent)?"virtual":"mouse",!a&&!c&&z(s.currentTarget),K(s,o.pointerType)&&s.stopPropagation(),D(S(s.currentTarget),"mouseup",f,!1)},v.onMouseEnter=s=>{if(!s.currentTarget.contains(s.target))return;let l=!0;o.isPressed&&!o.ignoreEmulatedMouseEvents&&o.pointerType!=null&&(o.isOverTarget=!0,l=K(s,o.pointerType)),l&&s.stopPropagation()},v.onMouseLeave=s=>{if(!s.currentTarget.contains(s.target))return;let l=!0;o.isPressed&&!o.ignoreEmulatedMouseEvents&&o.pointerType!=null&&(o.isOverTarget=!1,l=T(s,o.pointerType,!1),q(s)),l&&s.stopPropagation()},v.onMouseUp=s=>{s.currentTarget.contains(s.target)&&!o.ignoreEmulatedMouseEvents&&s.button===0&&R(s,o.pointerType||"mouse")};let f=s=>{if(s.button===0){if(o.isPressed=!1,A(),o.ignoreEmulatedMouseEvents){o.ignoreEmulatedMouseEvents=!1;return}o.target&&B(s,o.target)&&o.pointerType!=null?T(H(o.target,s),o.pointerType):o.target&&o.isOverTarget&&o.pointerType!=null&&T(H(o.target,s),o.pointerType,!1),o.isOverTarget=!1}};v.onTouchStart=s=>{if(!s.currentTarget.contains(s.target))return;let l=Ot(s.nativeEvent);if(!l)return;o.activePointerId=l.identifier,o.ignoreEmulatedMouseEvents=!0,o.isOverTarget=!0,o.isPressed=!0,o.target=s.currentTarget,o.pointerType="touch",!a&&!c&&z(s.currentTarget),$||Me(o.target),K(s,o.pointerType)&&s.stopPropagation(),D(k(s.currentTarget),"scroll",y,!0)},v.onTouchMove=s=>{if(!s.currentTarget.contains(s.target))return;if(!o.isPressed){s.stopPropagation();return}let l=Ce(s.nativeEvent,o.activePointerId),m=!0;l&&B(l,s.currentTarget)?!o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!0,m=K(s,o.pointerType)):o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!1,m=T(s,o.pointerType,!1),q(s)),m&&s.stopPropagation()},v.onTouchEnd=s=>{if(!s.currentTarget.contains(s.target))return;if(!o.isPressed){s.stopPropagation();return}let l=Ce(s.nativeEvent,o.activePointerId),m=!0;l&&B(l,s.currentTarget)&&o.pointerType!=null?(R(s,o.pointerType),m=T(s,o.pointerType)):o.isOverTarget&&o.pointerType!=null&&(m=T(s,o.pointerType,!1)),m&&s.stopPropagation(),o.isPressed=!1,o.activePointerId=null,o.isOverTarget=!1,o.ignoreEmulatedMouseEvents=!0,o.target&&!$&&J(o.target),A()},v.onTouchCancel=s=>{s.currentTarget.contains(s.target)&&(s.stopPropagation(),o.isPressed&&O(s))};let y=s=>{o.isPressed&&s.target.contains(o.target)&&O({currentTarget:o.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};v.onDragStart=s=>{s.currentTarget.contains(s.target)&&O(s)}}return v},[D,a,c,A,$,O,q,T,K,R]);return d.useEffect(()=>()=>{var o;$||J((o=x.current.target)!==null&&o!==void 0?o:void 0)},[$]),{isPressed:p||b,pressProps:me(h,Ve)}}function Te(e){return e.tagName==="A"&&e.hasAttribute("href")}function le(e,t){const{key:r,code:n}=e,i=t,u=i.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||n==="Space")&&!(i instanceof k(i).HTMLInputElement&&!je(i,r)||i instanceof k(i).HTMLTextAreaElement||i.isContentEditable)&&!((u==="link"||!u&&Te(i))&&r!=="Enter")}function Ot(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function Ce(e,t){const r=e.changedTouches;for(let n=0;n<r.length;n++){const i=r[n];if(i.identifier===t)return i}return null}function H(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function It(e){let t=0,r=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?r=e.height/2:e.radiusY!==void 0&&(r=e.radiusY),{top:e.clientY-r,right:e.clientX+t,bottom:e.clientY+r,left:e.clientX-t}}function Ft(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function B(e,t){let r=t.getBoundingClientRect(),n=It(e);return Ft(r,n)}function fe(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function Ke(e,t){return e instanceof HTMLInputElement?!je(e,t):e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!Te(e)}const Wt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function je(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":Wt.has(e.type)}function ur({children:e}){let t=d.useMemo(()=>({register:()=>{}}),[]);return M.createElement(Ee.Provider,{value:t},e)}class At{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=t}}function ze(e){let t=d.useRef({isFocused:!1,observer:null});F(()=>{const n=t.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]);let r=w(n=>{e==null||e(n)});return d.useCallback(n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){t.current.isFocused=!0;let i=n.target,u=a=>{t.current.isFocused=!1,i.disabled&&r(new At("blur",a)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};i.addEventListener("focusout",u,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&i.disabled){var a;(a=t.current.observer)===null||a===void 0||a.disconnect();let p=i===document.activeElement?null:document.activeElement;i.dispatchEvent(new FocusEvent("blur",{relatedTarget:p})),i.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:p}))}}),t.current.observer.observe(i,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function lr(e){let{isDisabled:t,onFocus:r,onBlur:n,onFocusChange:i}=e;const u=d.useCallback(c=>{if(c.target===c.currentTarget)return n&&n(c),i&&i(!1),!0},[n,i]),a=ze(u),p=d.useCallback(c=>{c.target===c.currentTarget&&document.activeElement===c.target&&(r&&r(c),i&&i(!0),a(c))},[i,r,a]);return{focusProps:{onFocus:!t&&(r||i||n)?p:void 0,onBlur:!t&&(n||i)?u:void 0}}}let W=null,be=new Set,N=new Map,I=!1,$e=!1;const Rt={Tab:!0,Escape:!0};function ae(e,t){for(let r of be)r(e,t)}function Ut(e){return!(e.metaKey||!X()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ne(e){I=!0,Ut(e)&&(W="keyboard",ae("keyboard",e))}function P(e){W="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(I=!0,ae("pointer",e))}function Ne(e){pe(e)&&(I=!0,W="virtual")}function Xe(e){e.target===window||e.target===document||(!I&&!$e&&(W="virtual",ae("virtual",e)),I=!1,$e=!1)}function Ye(){I=!1,$e=!0}function ge(e){if(typeof window>"u"||N.get(k(e)))return;const t=k(e),r=S(e);let n=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){I=!0,n.apply(this,arguments)},r.addEventListener("keydown",ne,!0),r.addEventListener("keyup",ne,!0),r.addEventListener("click",Ne,!0),t.addEventListener("focus",Xe,!0),t.addEventListener("blur",Ye,!1),typeof PointerEvent<"u"?(r.addEventListener("pointerdown",P,!0),r.addEventListener("pointermove",P,!0),r.addEventListener("pointerup",P,!0)):(r.addEventListener("mousedown",P,!0),r.addEventListener("mousemove",P,!0),r.addEventListener("mouseup",P,!0)),t.addEventListener("beforeunload",()=>{qe(e)},{once:!0}),N.set(t,{focus:n})}const qe=(e,t)=>{const r=k(e),n=S(e);t&&n.removeEventListener("DOMContentLoaded",t),N.has(r)&&(r.HTMLElement.prototype.focus=N.get(r).focus,n.removeEventListener("keydown",ne,!0),n.removeEventListener("keyup",ne,!0),n.removeEventListener("click",Ne,!0),r.removeEventListener("focus",Xe,!0),r.removeEventListener("blur",Ye,!1),typeof PointerEvent<"u"?(n.removeEventListener("pointerdown",P,!0),n.removeEventListener("pointermove",P,!0),n.removeEventListener("pointerup",P,!0)):(n.removeEventListener("mousedown",P,!0),n.removeEventListener("mousemove",P,!0),n.removeEventListener("mouseup",P,!0)),N.delete(r))};function Bt(e){const t=S(e);let r;return t.readyState!=="loading"?ge(e):(r=()=>{ge(e)},t.addEventListener("DOMContentLoaded",r)),()=>qe(e,r)}typeof document<"u"&&Bt();function Gt(){return W!=="pointer"}function fr(){return W}function cr(e){W=e,ae(e,null)}const jt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function zt(e,t,r){var n;const i=typeof window<"u"?k(r==null?void 0:r.target).HTMLInputElement:HTMLInputElement,u=typeof window<"u"?k(r==null?void 0:r.target).HTMLTextAreaElement:HTMLTextAreaElement,a=typeof window<"u"?k(r==null?void 0:r.target).HTMLElement:HTMLElement,p=typeof window<"u"?k(r==null?void 0:r.target).KeyboardEvent:KeyboardEvent;return e=e||(r==null?void 0:r.target)instanceof i&&!jt.has(r==null||(n=r.target)===null||n===void 0?void 0:n.type)||(r==null?void 0:r.target)instanceof u||(r==null?void 0:r.target)instanceof a&&(r==null?void 0:r.target.isContentEditable),!(e&&t==="keyboard"&&r instanceof p&&!Rt[r.key])}function dr(e,t,r){ge(),d.useEffect(()=>{let n=(i,u)=>{zt(!!(r!=null&&r.isTextInput),i,u)&&e(Gt())};return be.add(n),()=>{be.delete(n)}},t)}function Nt(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:i}=e,u=d.useRef({isFocusWithin:!1}),a=d.useCallback(g=>{u.current.isFocusWithin&&!g.currentTarget.contains(g.relatedTarget)&&(u.current.isFocusWithin=!1,r&&r(g),i&&i(!1))},[r,i,u]),p=ze(a),c=d.useCallback(g=>{!u.current.isFocusWithin&&document.activeElement===g.target&&(n&&n(g),i&&i(!0),u.current.isFocusWithin=!0,p(g))},[n,i,p]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:a}}}let oe=!1,ce=0;function ye(){oe=!0,setTimeout(()=>{oe=!1},50)}function He(e){e.pointerType==="touch"&&ye()}function Xt(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",He):document.addEventListener("touchend",ye),ce++,()=>{ce--,!(ce>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",He):document.removeEventListener("touchend",ye))}}function pr(e){let{onHoverStart:t,onHoverChange:r,onHoverEnd:n,isDisabled:i}=e,[u,a]=d.useState(!1),p=d.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;d.useEffect(Xt,[]);let{hoverProps:c,triggerHoverEnd:g}=d.useMemo(()=>{let $=(b,C)=>{if(p.pointerType=C,i||C==="touch"||p.isHovered||!b.currentTarget.contains(b.target))return;p.isHovered=!0;let x=b.currentTarget;p.target=x,t&&t({type:"hoverstart",target:x,pointerType:C}),r&&r(!0),a(!0)},E=(b,C)=>{if(p.pointerType="",p.target=null,C==="touch"||!p.isHovered)return;p.isHovered=!1;let x=b.currentTarget;n&&n({type:"hoverend",target:x,pointerType:C}),r&&r(!1),a(!1)},h={};return typeof PointerEvent<"u"?(h.onPointerEnter=b=>{oe&&b.pointerType==="mouse"||$(b,b.pointerType)},h.onPointerLeave=b=>{!i&&b.currentTarget.contains(b.target)&&E(b,b.pointerType)}):(h.onTouchStart=()=>{p.ignoreEmulatedMouseEvents=!0},h.onMouseEnter=b=>{!p.ignoreEmulatedMouseEvents&&!oe&&$(b,"mouse"),p.ignoreEmulatedMouseEvents=!1},h.onMouseLeave=b=>{!i&&b.currentTarget.contains(b.target)&&E(b,"mouse")}),{hoverProps:h,triggerHoverEnd:E}},[t,r,n,i,p]);return d.useEffect(()=>{i&&g({currentTarget:p.target},p.pointerType)},[i]),{hoverProps:c,isHovered:u}}function vr(e){let{ref:t,onInteractOutside:r,isDisabled:n,onInteractOutsideStart:i}=e,u=d.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=w(c=>{r&&_(c,t)&&(i&&i(c),u.current.isPointerDown=!0)}),p=w(c=>{r&&r(c)});d.useEffect(()=>{let c=u.current;if(n)return;const g=t.current,$=S(g);if(typeof PointerEvent<"u"){let E=h=>{c.isPointerDown&&_(h,t)&&p(h),c.isPointerDown=!1};return $.addEventListener("pointerdown",a,!0),$.addEventListener("pointerup",E,!0),()=>{$.removeEventListener("pointerdown",a,!0),$.removeEventListener("pointerup",E,!0)}}else{let E=b=>{c.ignoreEmulatedMouseEvents?c.ignoreEmulatedMouseEvents=!1:c.isPointerDown&&_(b,t)&&p(b),c.isPointerDown=!1},h=b=>{c.ignoreEmulatedMouseEvents=!0,c.isPointerDown&&_(b,t)&&p(b),c.isPointerDown=!1};return $.addEventListener("mousedown",a,!0),$.addEventListener("mouseup",E,!0),$.addEventListener("touchstart",a,!0),$.addEventListener("touchend",h,!0),()=>{$.removeEventListener("mousedown",a,!0),$.removeEventListener("mouseup",E,!0),$.removeEventListener("touchstart",a,!0),$.removeEventListener("touchend",h,!0)}}},[t,n,a,p])}function _(e,t){if(e.button>0)return!1;if(e.target){const r=e.target.ownerDocument;if(!r||!r.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}function De(e){if(!e)return;let t=!0;return r=>{let n={...r,preventDefault(){r.preventDefault()},isDefaultPrevented(){return r.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(n),t&&r.stopPropagation()}}function br(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:De(e.onKeyDown),onKeyUp:De(e.onKeyUp)}}}const Oe={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function Yt(e={}){let{style:t,isFocusable:r}=e,[n,i]=d.useState(!1),{focusWithinProps:u}=Nt({isDisabled:!r,onFocusWithinChange:p=>i(p)}),a=d.useMemo(()=>n?t:t?{...Oe,...t}:Oe,[n]);return{visuallyHiddenProps:{...u,style:a}}}function $r(e){let{children:t,elementType:r="div",isFocusable:n,style:i,...u}=e,{visuallyHiddenProps:a}=Yt(e);return M.createElement(r,me(u,a),t)}export{$r as $,ur as A,tr as B,vr as C,Ue as D,Ae as E,yt as F,Tt as G,ar as H,nr as I,X as J,pr as K,_t as L,Jt as M,Kt as _,Gt as a,dr as b,lr as c,Nt as d,S as e,fr as f,Et as g,z as h,br as i,me as j,F as k,wt as l,k as m,it as n,ir as o,sr as p,Qt as q,Zt as r,rr as s,or as t,we as u,er as v,Vt as w,w as x,cr as y,We as z};