import{f as A,a as I,b as w,d as F,c as N,e as O}from"./useFocusRing-CELWytXw.js";import{r as v,R as L}from"./index-DH5ua8nC.js";import{$ as y,b as C}from"./useFocusWithin-Dp0pJUJ1.js";import{$ as R}from"./useFocusable-B98p06UY.js";import{$ as S}from"./usePress-DAUyqWol.js";function V(t,e){let{elementType:i="button",isDisabled:d,onPress:n,onPressStart:s,onPressEnd:r,onPressUp:g,onPressChange:l,preventFocusOnPress:$,allowFocusWhenDisabled:m,onClick:f,href:h,target:P,rel:c,type:u="button"}=t,o;i==="button"?o={type:u,disabled:d}:o={role:"button",tabIndex:d?void 0:0,href:i==="a"&&!d?h:void 0,target:i==="a"?P:void 0,type:i==="input"?u:void 0,disabled:i==="input"?d:void 0,"aria-disabled":!d||i==="input"?void 0:d,rel:i==="a"?c:void 0};let{pressProps:b,isPressed:p}=S({onPressStart:s,onPressEnd:r,onPressChange:l,onPress:n,onPressUp:g,isDisabled:d,preventFocusOnPress:$,ref:e}),{focusableProps:x}=R(t,e);m&&(x.tabIndex=d?-1:x.tabIndex);let _=y(x,b,A(t,{labelable:!0}));return{isPressed:p,buttonProps:y(o,_,{"aria-haspopup":t["aria-haspopup"],"aria-expanded":t["aria-expanded"],"aria-controls":t["aria-controls"],"aria-pressed":t["aria-pressed"],onClick:D=>{f&&(f(D),console.warn("onClick is deprecated, please use onPress"))}})}}const T=7e3;let a=null;function E(t,e="assertive",i=T){a?a.announce(t,e,i):(a=new M,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?a.announce(t,e,i):setTimeout(()=>{a!=null&&a.isAttached()&&(a==null||a.announce(t,e,i))},100))}function q(t){a&&a.clear(t)}class M{isAttached(){var e;return(e=this.node)===null||e===void 0?void 0:e.isConnected}createLog(e){let i=document.createElement("div");return i.setAttribute("role","log"),i.setAttribute("aria-live",e),i.setAttribute("aria-relevant","additions"),i}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(e,i="assertive",d=T){var n,s;if(!this.node)return;let r=document.createElement("div");typeof e=="object"?(r.setAttribute("role","img"),r.setAttribute("aria-labelledby",e["aria-labelledby"])):r.textContent=e,i==="assertive"?(n=this.assertiveLog)===null||n===void 0||n.appendChild(r):(s=this.politeLog)===null||s===void 0||s.appendChild(r),e!==""&&setTimeout(()=>{r.remove()},d)}clear(e){this.node&&((!e||e==="assertive")&&this.assertiveLog&&(this.assertiveLog.innerHTML=""),(!e||e==="polite")&&this.politeLog&&(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}}const H=v.createContext(null),U=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),k=v.createContext({}),z=I(function(e,i){[e,i]=w(e,i,k),e=j(e);let d=e,{isPending:n}=d,{buttonProps:s,isPressed:r}=V(e,i),{focusProps:g,isFocused:l,isFocusVisible:$}=F(e),{hoverProps:m,isHovered:f}=N({...e,isDisabled:e.isDisabled||n}),h={isHovered:f,isPressed:(d.isPressed||r)&&!n,isFocused:l,isFocusVisible:$,isDisabled:e.isDisabled||!1,isPending:n??!1},P=O({...e,values:h,defaultClassName:"react-aria-Button"}),c=C(s.id),u=C(),o=s["aria-labelledby"];n&&(o?o=`${o} ${u}`:s["aria-label"]&&(o=`${c} ${u}`));let b=v.useRef(n);return v.useEffect(()=>{let p={"aria-labelledby":o||c};(!b.current&&l&&n||b.current&&l&&!n)&&E(p,"assertive"),b.current=n},[n,l,o,c]),L.createElement("button",{...A(e,{propNames:U}),...y(s,g,m),...P,type:s.type==="submit"&&n?"button":s.type,id:c,ref:i,"aria-labelledby":o,slot:e.slot||void 0,"aria-disabled":n?"true":s["aria-disabled"],"data-disabled":e.isDisabled||void 0,"data-pressed":h.isPressed||void 0,"data-hovered":f||void 0,"data-focused":l||void 0,"data-pending":n||void 0,"data-focus-visible":$||void 0},L.createElement(H.Provider,{value:{id:u}},P.children))});function j(t){return t.isPending&&(t.onPress=void 0,t.onPressStart=void 0,t.onPressEnd=void 0,t.onPressChange=void 0,t.onPressUp=void 0,t.onKeyDown=void 0,t.onKeyUp=void 0,t.onClick=void 0,t.href=void 0),t}export{z as $,k as a,q as b,E as c};
