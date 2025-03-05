import{$ as oe,a as D,b as z}from"./textSelection-Bw2skZTh.js";import{r as w,R as se}from"./index-DH5ua8nC.js";import{a as le}from"./chain-Crd5RmWG.js";import{u as M,v as ue,o as L,w as V,g as F,j as fe}from"./useFocusRing-CELWytXw.js";import{c as C,$ as Q}from"./useFocusWithin-Dp0pJUJ1.js";import{c as ce,d as B,e as de,f as ge}from"./platform-kF5l1-53.js";const pe=w.createContext({isNative:!0,open:ye,useHref:t=>t});function ve(){return w.useContext(pe)}function _(t,n,i=!0){var s,u;let{metaKey:g,ctrlKey:d,altKey:P,shiftKey:v}=n;ce()&&(!((u=window.event)===null||u===void 0||(s=u.type)===null||s===void 0)&&s.startsWith("key"))&&t.target==="_blank"&&(B()?g=!0:d=!0);let m=de()&&B()&&!ge()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:g,ctrlKey:d,altKey:P,shiftKey:v}):new MouseEvent("click",{metaKey:g,ctrlKey:d,altKey:P,shiftKey:v,bubbles:!0,cancelable:!0});_.isOpening=i,M(t),t.dispatchEvent(m),_.isOpening=!1}_.isOpening=!1;function Te(t,n){if(t instanceof HTMLAnchorElement)n(t);else if(t.hasAttribute("data-href")){let i=document.createElement("a");i.href=t.getAttribute("data-href"),t.hasAttribute("data-target")&&(i.target=t.getAttribute("data-target")),t.hasAttribute("data-rel")&&(i.rel=t.getAttribute("data-rel")),t.hasAttribute("data-download")&&(i.download=t.getAttribute("data-download")),t.hasAttribute("data-ping")&&(i.ping=t.getAttribute("data-ping")),t.hasAttribute("data-referrer-policy")&&(i.referrerPolicy=t.getAttribute("data-referrer-policy")),t.appendChild(i),n(i),t.removeChild(i)}}function ye(t,n){Te(t,i=>_(i,n))}function Ie(t){let n=ve();var i;const s=n.useHref((i=t==null?void 0:t.href)!==null&&i!==void 0?i:"");return{href:t!=null&&t.href?s:void 0,target:t==null?void 0:t.target,rel:t==null?void 0:t.rel,download:t==null?void 0:t.download,ping:t==null?void 0:t.ping,referrerPolicy:t==null?void 0:t.referrerPolicy}}const Z=se.createContext({register:()=>{}});Z.displayName="PressResponderContext";function Pe(t,n){return n.get?n.get.call(t):n.value}function ee(t,n,i){if(!n.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return n.get(t)}function $e(t,n){var i=ee(t,n,"get");return Pe(t,i)}function he(t,n){if(n.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function be(t,n,i){he(t,n),n.set(t,i)}function Ee(t,n,i){if(n.set)n.set.call(t,i);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=i}}function W(t,n,i){var s=ee(t,n,"set");return Ee(t,s,i),i}function me(t){let n=w.useContext(Z);if(n){let{register:i,...s}=n;t=Q(s,t),i()}return fe(n,t.ref),t}var X=new WeakMap;class Y{continuePropagation(){W(this,X,!1)}get shouldStopPropagation(){return $e(this,X)}constructor(n,i,s,u){be(this,X,{writable:!0,value:void 0}),W(this,X,!0);var g;let d=(g=u==null?void 0:u.target)!==null&&g!==void 0?g:s.currentTarget;const P=d==null?void 0:d.getBoundingClientRect();let v,m=0,T,A=null;s.clientX!=null&&s.clientY!=null&&(T=s.clientX,A=s.clientY),P&&(T!=null&&A!=null?(v=T-P.left,m=A-P.top):(v=P.width/2,m=P.height/2)),this.type=n,this.pointerType=i,this.target=s.currentTarget,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.x=v,this.y=m}}const j=Symbol("linkClicked");function De(t){let{onPress:n,onPressChange:i,onPressStart:s,onPressEnd:u,onPressUp:g,isDisabled:d,isPressed:P,preventFocusOnPress:v,shouldCancelOnPointerExit:m,allowTextSelectionOnPress:T,ref:A,...ne}=me(t),[ae,N]=w.useState(!1),S=w.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:K,removeAllGlobalListeners:k}=oe(),$=C((e,l)=>{let y=S.current;if(d||y.didFirePressStart)return!1;let o=!0;if(y.isTriggeringEvent=!0,s){let f=new Y("pressstart",l,e);s(f),o=f.shouldStopPropagation}return i&&i(!0),y.isTriggeringEvent=!1,y.didFirePressStart=!0,N(!0),o}),p=C((e,l,y=!0)=>{let o=S.current;if(!o.didFirePressStart)return!1;o.ignoreClickAfterPress=!0,o.didFirePressStart=!1,o.isTriggeringEvent=!0;let f=!0;if(u){let r=new Y("pressend",l,e);u(r),f=r.shouldStopPropagation}if(i&&i(!1),N(!1),n&&y&&!d){let r=new Y("press",l,e);n(r),f&&(f=r.shouldStopPropagation)}return o.isTriggeringEvent=!1,f}),O=C((e,l)=>{let y=S.current;if(d)return!1;if(g){y.isTriggeringEvent=!0;let o=new Y("pressup",l,e);return g(o),y.isTriggeringEvent=!1,o.shouldStopPropagation}return!0}),x=C(e=>{let l=S.current;l.isPressed&&l.target&&(l.isOverTarget&&l.pointerType!=null&&p(b(l.target,e),l.pointerType,!1),l.isPressed=!1,l.isOverTarget=!1,l.activePointerId=null,l.pointerType=null,k(),T||D(l.target))}),I=C(e=>{m&&x(e)}),ie=w.useMemo(()=>{let e=S.current,l={onKeyDown(o){if(R(o.nativeEvent,o.currentTarget)&&o.currentTarget.contains(o.target)){var f;J(o.target,o.key)&&o.preventDefault();let r=!0;if(!e.isPressed&&!o.repeat){e.target=o.currentTarget,e.isPressed=!0,r=$(o,"keyboard");let a=o.currentTarget,c=h=>{R(h,a)&&!h.repeat&&a.contains(h.target)&&e.target&&O(b(e.target,h),"keyboard")};K(L(o.currentTarget),"keyup",le(c,y),!0)}r&&o.stopPropagation(),o.metaKey&&B()&&((f=e.metaKeyEvents)===null||f===void 0||f.set(o.key,o.nativeEvent))}else o.key==="Meta"&&(e.metaKeyEvents=new Map)},onClick(o){if(!(o&&!o.currentTarget.contains(o.target))&&o&&o.button===0&&!e.isTriggeringEvent&&!_.isOpening){let f=!0;if(d&&o.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType==="virtual"||V(o.nativeEvent))){!d&&!v&&M(o.currentTarget);let r=$(o,"virtual"),a=O(o,"virtual"),c=p(o,"virtual");f=r&&a&&c}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,f&&o.stopPropagation()}}},y=o=>{var f;if(e.isPressed&&e.target&&R(o,e.target)){var r;J(o.target,o.key)&&o.preventDefault();let c=o.target;p(b(e.target,o),"keyboard",e.target.contains(c)),k(),o.key!=="Enter"&&G(e.target)&&e.target.contains(c)&&!o[j]&&(o[j]=!0,_(e.target,o,!1)),e.isPressed=!1,(r=e.metaKeyEvents)===null||r===void 0||r.delete(o.key)}else if(o.key==="Meta"&&(!((f=e.metaKeyEvents)===null||f===void 0)&&f.size)){var a;let c=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let h of c.values())(a=e.target)===null||a===void 0||a.dispatchEvent(new KeyboardEvent("keyup",h))}};if(typeof PointerEvent<"u"){l.onPointerDown=a=>{if(a.button!==0||!a.currentTarget.contains(a.target))return;if(ue(a.nativeEvent)){e.pointerType="virtual";return}H(a.currentTarget)&&a.preventDefault(),e.pointerType=a.pointerType;let c=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=a.pointerId,e.target=a.currentTarget,!d&&!v&&M(a.currentTarget),T||z(e.target),c=$(a,e.pointerType);let h=a.target;"releasePointerCapture"in h&&h.releasePointerCapture(a.pointerId),K(L(a.currentTarget),"pointerup",o,!1),K(L(a.currentTarget),"pointercancel",r,!1)}c&&a.stopPropagation()},l.onMouseDown=a=>{a.currentTarget.contains(a.target)&&a.button===0&&(H(a.currentTarget)&&a.preventDefault(),a.stopPropagation())},l.onPointerUp=a=>{!a.currentTarget.contains(a.target)||e.pointerType==="virtual"||a.button===0&&O(a,e.pointerType||a.pointerType)},l.onPointerEnter=a=>{a.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,$(b(e.target,a),e.pointerType))},l.onPointerLeave=a=>{a.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,p(b(e.target,a),e.pointerType,!1),I(a))};let o=a=>{a.pointerId===e.activePointerId&&e.isPressed&&a.button===0&&e.target&&(e.target.contains(a.target)&&e.pointerType!=null?p(b(e.target,a),e.pointerType):e.isOverTarget&&e.pointerType!=null&&p(b(e.target,a),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,k(),T||D(e.target),"ontouchend"in e.target&&a.pointerType!=="mouse"&&K(e.target,"touchend",f,{once:!0}))},f=a=>{te(a.currentTarget)&&a.preventDefault()},r=a=>{x(a)};l.onDragStart=a=>{a.currentTarget.contains(a.target)&&x(a)}}else{l.onMouseDown=r=>{if(r.button!==0||!r.currentTarget.contains(r.target))return;if(H(r.currentTarget)&&r.preventDefault(),e.ignoreEmulatedMouseEvents){r.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=r.currentTarget,e.pointerType=V(r.nativeEvent)?"virtual":"mouse",!d&&!v&&M(r.currentTarget),$(r,e.pointerType)&&r.stopPropagation(),K(L(r.currentTarget),"mouseup",o,!1)},l.onMouseEnter=r=>{if(!r.currentTarget.contains(r.target))return;let a=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&e.pointerType!=null&&(e.isOverTarget=!0,a=$(r,e.pointerType)),a&&r.stopPropagation()},l.onMouseLeave=r=>{if(!r.currentTarget.contains(r.target))return;let a=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&e.pointerType!=null&&(e.isOverTarget=!1,a=p(r,e.pointerType,!1),I(r)),a&&r.stopPropagation()},l.onMouseUp=r=>{r.currentTarget.contains(r.target)&&!e.ignoreEmulatedMouseEvents&&r.button===0&&O(r,e.pointerType||"mouse")};let o=r=>{if(r.button===0){if(e.isPressed=!1,k(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}e.target&&U(r,e.target)&&e.pointerType!=null?p(b(e.target,r),e.pointerType):e.target&&e.isOverTarget&&e.pointerType!=null&&p(b(e.target,r),e.pointerType,!1),e.isOverTarget=!1}};l.onTouchStart=r=>{if(!r.currentTarget.contains(r.target))return;let a=Ke(r.nativeEvent);if(!a)return;e.activePointerId=a.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=r.currentTarget,e.pointerType="touch",!d&&!v&&M(r.currentTarget),T||z(e.target),$(E(e.target,r),e.pointerType)&&r.stopPropagation(),K(F(r.currentTarget),"scroll",f,!0)},l.onTouchMove=r=>{if(!r.currentTarget.contains(r.target))return;if(!e.isPressed){r.stopPropagation();return}let a=q(r.nativeEvent,e.activePointerId),c=!0;a&&U(a,r.currentTarget)?!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,c=$(E(e.target,r),e.pointerType)):e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,c=p(E(e.target,r),e.pointerType,!1),I(E(e.target,r))),c&&r.stopPropagation()},l.onTouchEnd=r=>{if(!r.currentTarget.contains(r.target))return;if(!e.isPressed){r.stopPropagation();return}let a=q(r.nativeEvent,e.activePointerId),c=!0;a&&U(a,r.currentTarget)&&e.pointerType!=null?(O(E(e.target,r),e.pointerType),c=p(E(e.target,r),e.pointerType)):e.isOverTarget&&e.pointerType!=null&&(c=p(E(e.target,r),e.pointerType,!1)),c&&r.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!T&&D(e.target),k()},l.onTouchCancel=r=>{r.currentTarget.contains(r.target)&&(r.stopPropagation(),e.isPressed&&x(E(e.target,r)))};let f=r=>{e.isPressed&&r.target.contains(e.target)&&x({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};l.onDragStart=r=>{r.currentTarget.contains(r.target)&&x(r)}}return l},[K,d,v,k,T,x,I,p,$,O]);return w.useEffect(()=>()=>{var e;T||D((e=S.current.target)!==null&&e!==void 0?e:void 0)},[T]),{isPressed:P||ae,pressProps:Q(ne,ie)}}function G(t){return t.tagName==="A"&&t.hasAttribute("href")}function R(t,n){const{key:i,code:s}=t,u=n,g=u.getAttribute("role");return(i==="Enter"||i===" "||i==="Spacebar"||s==="Space")&&!(u instanceof F(u).HTMLInputElement&&!re(u,i)||u instanceof F(u).HTMLTextAreaElement||u.isContentEditable)&&!((g==="link"||!g&&G(u))&&i!=="Enter")}function Ke(t){const{targetTouches:n}=t;return n.length>0?n[0]:null}function q(t,n){const i=t.changedTouches;for(let s=0;s<i.length;s++){const u=i[s];if(u.identifier===n)return u}return null}function E(t,n){let i=0,s=0;return n.targetTouches&&n.targetTouches.length===1&&(i=n.targetTouches[0].clientX,s=n.targetTouches[0].clientY),{currentTarget:t,shiftKey:n.shiftKey,ctrlKey:n.ctrlKey,metaKey:n.metaKey,altKey:n.altKey,clientX:i,clientY:s}}function b(t,n){let i=n.clientX,s=n.clientY;return{currentTarget:t,shiftKey:n.shiftKey,ctrlKey:n.ctrlKey,metaKey:n.metaKey,altKey:n.altKey,clientX:i,clientY:s}}function xe(t){let n=0,i=0;return t.width!==void 0?n=t.width/2:t.radiusX!==void 0&&(n=t.radiusX),t.height!==void 0?i=t.height/2:t.radiusY!==void 0&&(i=t.radiusY),{top:t.clientY-i,right:t.clientX+n,bottom:t.clientY+i,left:t.clientX-n}}function we(t,n){return!(t.left>n.right||n.left>t.right||t.top>n.bottom||n.top>t.bottom)}function U(t,n){let i=n.getBoundingClientRect(),s=xe(t);return we(i,s)}function H(t){return!(t instanceof HTMLElement)||!t.hasAttribute("draggable")}function te(t){return t instanceof HTMLInputElement?!1:t instanceof HTMLButtonElement?t.type!=="submit"&&t.type!=="reset":!G(t)}function J(t,n){return t instanceof HTMLInputElement?!re(t,n):te(t)}const Se=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function re(t,n){return t.type==="checkbox"||t.type==="radio"?n===" ":Se.has(t.type)}export{De as $,be as _,Ie as a,ve as b,_ as c,Z as d};
