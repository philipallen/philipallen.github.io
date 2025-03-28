import{e as re,c as $e,j as at,m as st,a as me,b as ve,i as ct,k as oe}from"./utils-l5KLAjAw.js";import{r as v,e as P}from"./index-KmaxkdDD.js";import{a as dt}from"./Button-D3muM46r.js";import{a as ut}from"./RSPContexts-DVGGaWhm.js";import{g as ft,p as Q,c as te,E as pt}from"./useHover-DDDaVluF.js";import{$ as z}from"./chain-Z-ySmOka.js";import{r as $t,h as mt}from"./index-CVhlOzZO.js";import{a as vt}from"./useOverlayTriggerState-BVShW717.js";import{$ as be}from"./context-CQmu07jL.js";import{e as bt}from"./platform-kF5l1-53.js";import{a as V}from"./number-Q_rDNm0P.js";import{b as gt,a as xt}from"./FocusScope-um4QTQqo.js";import{a as ht}from"./useFocusRing-BBh_VJBv.js";import{$ as Et}from"./usePreventScroll-De5YQ1AI.js";import{$ as Ct}from"./useLabels-BOZ2JF2m.js";import{$ as Pt}from"./useLocalizedStringFormatter-CNu4t9Cv.js";import{$ as wt}from"./VisuallyHidden-Cl-nnxjw.js";import{d as yt}from"./usePress-D8-PWMl6.js";function Rt(){return typeof window.ResizeObserver<"u"}function le(t){const{ref:e,box:l,onResize:r}=t;v.useEffect(()=>{let o=e==null?void 0:e.current;if(o)if(Rt()){const n=new window.ResizeObserver(c=>{c.length&&r()});return n.observe(o,{box:l}),()=>{o&&n.unobserve(o)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,e,l])}function Lt(t,e=!0){let[l,r]=v.useState(!0),o=l&&e;return z(()=>{if(o&&t.current&&"getAnimations"in t.current)for(let n of t.current.getAnimations())n instanceof CSSTransition&&n.cancel()},[t,o]),ge(t,o,v.useCallback(()=>r(!1),[])),o}function St(t,e){let[l,r]=v.useState(e?"open":"closed");switch(l){case"open":e||r("exiting");break;case"closed":case"exiting":e&&r("open");break}let o=l==="exiting";return ge(t,o,v.useCallback(()=>{r(n=>n==="exiting"?"closed":n)},[])),o}function ge(t,e,l){z(()=>{if(e&&t.current){if(!("getAnimations"in t.current)){l();return}let r=t.current.getAnimations();if(r.length===0){l();return}let o=!1;return Promise.all(r.map(n=>n.finished)).then(()=>{o||$t.flushSync(()=>{l()})}).catch(()=>{}),()=>{o=!0}}},[t,e,l])}function Tt({children:t}){let e=v.useMemo(()=>({register:()=>{}}),[]);return P.createElement(yt.Provider,{value:e},t)}function Dt(t){let{ref:e,onInteractOutside:l,isDisabled:r,onInteractOutsideStart:o}=t,n=v.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),c=re(a=>{l&&Z(a,e)&&(o&&o(a),n.current.isPointerDown=!0)}),i=re(a=>{l&&l(a)});v.useEffect(()=>{let a=n.current;if(r)return;const d=e.current,s=ft(d);if(typeof PointerEvent<"u"){let $=p=>{a.isPointerDown&&Z(p,e)&&i(p),a.isPointerDown=!1};return s.addEventListener("pointerdown",c,!0),s.addEventListener("pointerup",$,!0),()=>{s.removeEventListener("pointerdown",c,!0),s.removeEventListener("pointerup",$,!0)}}else{let $=f=>{a.ignoreEmulatedMouseEvents?a.ignoreEmulatedMouseEvents=!1:a.isPointerDown&&Z(f,e)&&i(f),a.isPointerDown=!1},p=f=>{a.ignoreEmulatedMouseEvents=!0,a.isPointerDown&&Z(f,e)&&i(f),a.isPointerDown=!1};return s.addEventListener("mousedown",c,!0),s.addEventListener("mouseup",$,!0),s.addEventListener("touchstart",c,!0),s.addEventListener("touchend",p,!0),()=>{s.removeEventListener("mousedown",c,!0),s.removeEventListener("mouseup",$,!0),s.removeEventListener("touchstart",c,!0),s.removeEventListener("touchend",p,!0)}}},[e,r,c,i])}function Z(t,e){if(t.button>0)return!1;if(t.target){const l=t.target.ownerDocument;if(!l||!l.documentElement.contains(t.target)||t.target.closest("[data-react-aria-top-layer]"))return!1}return e.current?!t.composedPath().includes(e.current):!1}const k={top:"top",bottom:"top",left:"left",right:"left"},Y={top:"bottom",bottom:"top",left:"right",right:"left"},Ot={top:"left",left:"top"},ee={top:"height",left:"width"},xe={width:"totalWidth",height:"totalHeight"},G={};let R=typeof document<"u"?window.visualViewport:null;function ne(t){let e=0,l=0,r=0,o=0,n=0,c=0,i={};var a;let d=((a=R==null?void 0:R.scale)!==null&&a!==void 0?a:1)>1;if(t.tagName==="BODY"){let u=document.documentElement;r=u.clientWidth,o=u.clientHeight;var s;e=(s=R==null?void 0:R.width)!==null&&s!==void 0?s:r;var $;l=($=R==null?void 0:R.height)!==null&&$!==void 0?$:o,i.top=u.scrollTop||t.scrollTop,i.left=u.scrollLeft||t.scrollLeft,R&&(n=R.offsetTop,c=R.offsetLeft)}else({width:e,height:l,top:n,left:c}=U(t)),i.top=t.scrollTop,i.left=t.scrollLeft,r=e,o=l;if(bt()&&(t.tagName==="BODY"||t.tagName==="HTML")&&d){i.top=0,i.left=0;var p;n=(p=R==null?void 0:R.pageTop)!==null&&p!==void 0?p:0;var f;c=(f=R==null?void 0:R.pageLeft)!==null&&f!==void 0?f:0}return{width:e,height:l,totalWidth:r,totalHeight:o,scroll:i,top:n,left:c}}function It(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function ie(t,e,l,r,o,n,c){var i;let a=(i=o.scroll[t])!==null&&i!==void 0?i:0,d=r[ee[t]],s=r.scroll[k[t]]+n,$=d+r.scroll[k[t]]-n,p=e-a+c[t]-r[k[t]],f=e-a+l+c[t]-r[k[t]];return p<s?s-p:f>$?Math.max($-f,s-p):0}function Nt(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function ae(t){if(G[t])return G[t];let[e,l]=t.split(" "),r=k[e]||"right",o=Ot[r];k[l]||(l="center");let n=ee[r],c=ee[o];return G[t]={placement:e,crossPlacement:l,axis:r,crossAxis:o,size:n,crossSize:c},G[t]}function q(t,e,l,r,o,n,c,i,a,d){let{placement:s,crossPlacement:$,axis:p,crossAxis:f,size:u,crossSize:b}=r,m={};var g;m[f]=(g=t[f])!==null&&g!==void 0?g:0;var x,E,S,w;$==="center"?m[f]+=(((x=t[b])!==null&&x!==void 0?x:0)-((E=l[b])!==null&&E!==void 0?E:0))/2:$!==f&&(m[f]+=((S=t[b])!==null&&S!==void 0?S:0)-((w=l[b])!==null&&w!==void 0?w:0)),m[f]+=n;const h=t[f]-l[b]+a+d,T=t[f]+t[b]-a-d;if(m[f]=V(m[f],h,T),s===p){const A=i?c[u]:e[xe[u]];m[Y[p]]=Math.floor(A-t[p]+o)}else m[p]=Math.floor(t[p]+t[u]+o);return m}function Mt(t,e,l,r,o,n,c,i){const a=r?l.height:e[xe.height];var d;let s=t.top!=null?l.top+t.top:l.top+(a-((d=t.bottom)!==null&&d!==void 0?d:0)-c);var $,p,f,u,b,m;let g=i!=="top"?Math.max(0,e.height+e.top+(($=e.scroll.top)!==null&&$!==void 0?$:0)-s-(((p=o.top)!==null&&p!==void 0?p:0)+((f=o.bottom)!==null&&f!==void 0?f:0)+n)):Math.max(0,s+c-(e.top+((u=e.scroll.top)!==null&&u!==void 0?u:0))-(((b=o.top)!==null&&b!==void 0?b:0)+((m=o.bottom)!==null&&m!==void 0?m:0)+n));return Math.min(e.height-n*2,g)}function se(t,e,l,r,o,n){let{placement:c,axis:i,size:a}=n;var d,s;if(c===i)return Math.max(0,l[i]-t[i]-((d=t.scroll[i])!==null&&d!==void 0?d:0)+e[i]-((s=r[i])!==null&&s!==void 0?s:0)-r[Y[i]]-o);var $;return Math.max(0,t[a]+t[i]+t.scroll[i]-e[i]-l[i]-l[a]-(($=r[i])!==null&&$!==void 0?$:0)-r[Y[i]]-o)}function At(t,e,l,r,o,n,c,i,a,d,s,$,p,f,u,b){let m=ae(t),{size:g,crossAxis:x,crossSize:E,placement:S,crossPlacement:w}=m,h=q(e,i,l,m,s,$,d,p,u,b),T=s,A=se(i,d,e,o,n+s,m);if(c&&r[g]>A){let X=ae(`${Y[S]} ${w}`),it=q(e,i,l,X,s,$,d,p,u,b);se(i,d,e,o,n+s,X)>A&&(m=X,h=it,T=s)}let N="bottom";m.axis==="top"?m.placement==="top"?N="top":m.placement==="bottom"&&(N="bottom"):m.crossAxis==="top"&&(m.crossPlacement==="top"?N="bottom":m.crossPlacement==="bottom"&&(N="top"));let y=ie(x,h[x],l[E],i,a,n,d);h[x]+=y;let D=Mt(h,i,d,p,o,n,l.height,N);f&&f<D&&(D=f),l.height=Math.min(l.height,D),h=q(e,i,l,m,T,$,d,p,u,b),y=ie(x,h[x],l[E],i,a,n,d),h[x]+=y;let I={},_=e[x]+.5*e[E]-h[x]-o[k[x]];const M=u/2+b;var B,K,H,L;const W=k[x]==="left"?((B=o.left)!==null&&B!==void 0?B:0)+((K=o.right)!==null&&K!==void 0?K:0):((H=o.top)!==null&&H!==void 0?H:0)+((L=o.bottom)!==null&&L!==void 0?L:0),J=l[E]-W-u/2-b,ot=e[x]+u/2-(h[x]+o[k[x]]),lt=e[x]+e[E]-u/2-(h[x]+o[k[x]]),nt=V(_,ot,lt);return I[x]=V(nt,M,J),{position:h,maxHeight:D,arrowOffsetLeft:I.left,arrowOffsetTop:I.top,placement:m.placement}}function Ht(t){let{placement:e,targetNode:l,overlayNode:r,scrollNode:o,padding:n,shouldFlip:c,boundaryElement:i,offset:a,crossOffset:d,maxHeight:s,arrowSize:$=0,arrowBoundaryOffset:p=0}=t,f=r instanceof HTMLElement?Ft(r):document.documentElement,u=f===document.documentElement;const b=window.getComputedStyle(f).position;let m=!!b&&b!=="static",g=u?U(l):ce(l,f);if(!u){let{marginTop:I,marginLeft:_}=window.getComputedStyle(l);g.top+=parseInt(I,10)||0,g.left+=parseInt(_,10)||0}let x=U(r),E=Nt(r);var S,w;x.width+=((S=E.left)!==null&&S!==void 0?S:0)+((w=E.right)!==null&&w!==void 0?w:0);var h,T;x.height+=((h=E.top)!==null&&h!==void 0?h:0)+((T=E.bottom)!==null&&T!==void 0?T:0);let A=It(o),N=ne(i),y=ne(f),D=i.tagName==="BODY"?U(f):ce(f,i);return f.tagName==="HTML"&&i.tagName==="BODY"&&(y.scroll.top=0,y.scroll.left=0),At(e,g,x,A,E,n,c,N,y,D,a,d,m,s,$,p)}function U(t){let{top:e,left:l,width:r,height:o}=t.getBoundingClientRect(),{scrollTop:n,scrollLeft:c,clientTop:i,clientLeft:a}=document.documentElement;return{top:e+n-i,left:l+c-a,width:r,height:o}}function ce(t,e){let l=window.getComputedStyle(t),r;if(l.position==="fixed"){let{top:o,left:n,width:c,height:i}=t.getBoundingClientRect();r={top:o,left:n,width:c,height:i}}else{r=U(t);let o=U(e),n=window.getComputedStyle(e);o.top+=(parseInt(n.borderTopWidth,10)||0)-e.scrollTop,o.left+=(parseInt(n.borderLeftWidth,10)||0)-e.scrollLeft,r.top-=o.top,r.left-=o.left}return r.top-=parseInt(l.marginTop,10)||0,r.left-=parseInt(l.marginLeft,10)||0,r}function Ft(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!de(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!de(e);)e=e.parentElement;return e||document.documentElement}function de(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}const kt=new WeakMap;function zt(t){let{triggerRef:e,isOpen:l,onClose:r}=t;v.useEffect(()=>{if(!l||r===null)return;let o=n=>{let c=n.target;if(!e.current||c instanceof Node&&!c.contains(e.current)||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)return;let i=r||kt.get(e.current);i&&i()};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[l,r,e])}let C=typeof document<"u"?window.visualViewport:null;function _t(t){let{direction:e}=be(),{arrowSize:l=0,targetRef:r,overlayRef:o,scrollRef:n=o,placement:c="bottom",containerPadding:i=12,shouldFlip:a=!0,boundaryElement:d=typeof document<"u"?document.body:null,offset:s=0,crossOffset:$=0,shouldUpdatePosition:p=!0,isOpen:f=!0,onClose:u,maxHeight:b,arrowBoundaryOffset:m=0}=t,[g,x]=v.useState(null),E=[p,c,o.current,r.current,n.current,i,a,d,s,$,f,e,b,m,l],S=v.useRef(C==null?void 0:C.scale);v.useEffect(()=>{f&&(S.current=C==null?void 0:C.scale)},[f]);let w=v.useCallback(()=>{if(p===!1||!f||!o.current||!r.current||!d||(C==null?void 0:C.scale)!==S.current)return;let y=null;if(n.current&&n.current.contains(document.activeElement)){var D;let L=(D=document.activeElement)===null||D===void 0?void 0:D.getBoundingClientRect(),W=n.current.getBoundingClientRect();var I;if(y={type:"top",offset:((I=L==null?void 0:L.top)!==null&&I!==void 0?I:0)-W.top},y.offset>W.height/2){y.type="bottom";var _;y.offset=((_=L==null?void 0:L.bottom)!==null&&_!==void 0?_:0)-W.bottom}}let M=o.current;if(!b&&o.current){var B;M.style.top="0px",M.style.bottom="";var K;M.style.maxHeight=((K=(B=window.visualViewport)===null||B===void 0?void 0:B.height)!==null&&K!==void 0?K:window.innerHeight)+"px"}let H=Ht({placement:Kt(c,e),overlayNode:o.current,targetNode:r.current,scrollNode:n.current||o.current,padding:i,shouldFlip:a,boundaryElement:d,offset:s,crossOffset:$,maxHeight:b,arrowSize:l,arrowBoundaryOffset:m});if(H.position){if(M.style.top="",M.style.bottom="",M.style.left="",M.style.right="",Object.keys(H.position).forEach(L=>M.style[L]=H.position[L]+"px"),M.style.maxHeight=H.maxHeight!=null?H.maxHeight+"px":"",y&&document.activeElement&&n.current){let L=document.activeElement.getBoundingClientRect(),W=n.current.getBoundingClientRect(),J=L[y.type]-W[y.type];n.current.scrollTop+=J-y.offset}x(H)}},E);z(w,E),Bt(w),le({ref:o,onResize:w}),le({ref:r,onResize:w});let h=v.useRef(!1);z(()=>{let y,D=()=>{h.current=!0,clearTimeout(y),y=setTimeout(()=>{h.current=!1},500),w()},I=()=>{h.current&&D()};return C==null||C.addEventListener("resize",D),C==null||C.addEventListener("scroll",I),()=>{C==null||C.removeEventListener("resize",D),C==null||C.removeEventListener("scroll",I)}},[w]);let T=v.useCallback(()=>{h.current||u==null||u()},[u,h]);zt({triggerRef:r,isOpen:f,onClose:u&&T});var A,N;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...g==null?void 0:g.position,maxHeight:(A=g==null?void 0:g.maxHeight)!==null&&A!==void 0?A:"100vh"}},placement:(N=g==null?void 0:g.placement)!==null&&N!==void 0?N:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:g==null?void 0:g.arrowOffsetLeft,top:g==null?void 0:g.arrowOffsetTop}},updatePosition:w}}function Bt(t){z(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function Kt(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}const F=[];function Wt(t,e){let{onClose:l,shouldCloseOnBlur:r,isOpen:o,isDismissable:n=!1,isKeyboardDismissDisabled:c=!1,shouldCloseOnInteractOutside:i}=t;v.useEffect(()=>{if(o&&!F.includes(e))return F.push(e),()=>{let u=F.indexOf(e);u>=0&&F.splice(u,1)}},[o,e]);let a=()=>{F[F.length-1]===e&&l&&l()},d=u=>{(!i||i(u.target))&&F[F.length-1]===e&&(u.stopPropagation(),u.preventDefault())},s=u=>{(!i||i(u.target))&&(F[F.length-1]===e&&(u.stopPropagation(),u.preventDefault()),a())},$=u=>{u.key==="Escape"&&!c&&!u.nativeEvent.isComposing&&(u.stopPropagation(),u.preventDefault(),a())};Dt({ref:e,onInteractOutside:n&&o?s:void 0,onInteractOutsideStart:d});let{focusWithinProps:p}=ht({isDisabled:!r,onBlurWithin:u=>{!u.relatedTarget||gt(u.relatedTarget)||(!i||i(u.relatedTarget))&&(l==null||l())}}),f=u=>{u.target===u.currentTarget&&u.preventDefault()};return{overlayProps:{onKeyDown:$,...p},underlayProps:{onPointerDown:f}}}var he={};he={dismiss:"تجاهل"};var Ee={};Ee={dismiss:"Отхвърляне"};var Ce={};Ce={dismiss:"Odstranit"};var Pe={};Pe={dismiss:"Luk"};var we={};we={dismiss:"Schließen"};var ye={};ye={dismiss:"Απόρριψη"};var Re={};Re={dismiss:"Dismiss"};var Le={};Le={dismiss:"Descartar"};var Se={};Se={dismiss:"Lõpeta"};var Te={};Te={dismiss:"Hylkää"};var De={};De={dismiss:"Rejeter"};var Oe={};Oe={dismiss:"התעלם"};var Ie={};Ie={dismiss:"Odbaci"};var Ne={};Ne={dismiss:"Elutasítás"};var Me={};Me={dismiss:"Ignora"};var Ae={};Ae={dismiss:"閉じる"};var He={};He={dismiss:"무시"};var Fe={};Fe={dismiss:"Atmesti"};var ke={};ke={dismiss:"Nerādīt"};var ze={};ze={dismiss:"Lukk"};var _e={};_e={dismiss:"Negeren"};var Be={};Be={dismiss:"Zignoruj"};var Ke={};Ke={dismiss:"Descartar"};var We={};We={dismiss:"Dispensar"};var Ue={};Ue={dismiss:"Revocare"};var je={};je={dismiss:"Пропустить"};var Ze={};Ze={dismiss:"Zrušiť"};var Ge={};Ge={dismiss:"Opusti"};var Ye={};Ye={dismiss:"Odbaci"};var Je={};Je={dismiss:"Avvisa"};var Xe={};Xe={dismiss:"Kapat"};var qe={};qe={dismiss:"Скасувати"};var Qe={};Qe={dismiss:"取消"};var Ve={};Ve={dismiss:"關閉"};var et={};et={"ar-AE":he,"bg-BG":Ee,"cs-CZ":Ce,"da-DK":Pe,"de-DE":we,"el-GR":ye,"en-US":Re,"es-ES":Le,"et-EE":Se,"fi-FI":Te,"fr-FR":De,"he-IL":Oe,"hr-HR":Ie,"hu-HU":Ne,"it-IT":Me,"ja-JP":Ae,"ko-KR":He,"lt-LT":Fe,"lv-LV":ke,"nb-NO":ze,"nl-NL":_e,"pl-PL":Be,"pt-BR":Ke,"pt-PT":We,"ro-RO":Ue,"ru-RU":je,"sk-SK":Ze,"sl-SI":Ge,"sr-SP":Ye,"sv-SE":Je,"tr-TR":Xe,"uk-UA":qe,"zh-CN":Qe,"zh-TW":Ve};function Ut(t){return t&&t.__esModule?t.default:t}function ue(t){let{onDismiss:e,...l}=t,r=Pt(Ut(et),"@react-aria/overlays"),o=Ct(l,r.format("dismiss")),n=()=>{e&&e()};return P.createElement(wt,null,P.createElement("button",{...o,tabIndex:-1,onClick:n,style:{width:1,height:1}}))}let j=new WeakMap,O=[];function jt(t,e=document.body){let l=new Set(t),r=new Set,o=a=>{for(let p of a.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))l.add(p);let d=p=>{if(l.has(p)||p.parentElement&&r.has(p.parentElement)&&p.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let f of l)if(p.contains(f))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},s=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:d}),$=d(a);if($===NodeFilter.FILTER_ACCEPT&&n(a),$!==NodeFilter.FILTER_REJECT){let p=s.nextNode();for(;p!=null;)n(p),p=s.nextNode()}},n=a=>{var d;let s=(d=j.get(a))!==null&&d!==void 0?d:0;a.getAttribute("aria-hidden")==="true"&&s===0||(s===0&&a.setAttribute("aria-hidden","true"),r.add(a),j.set(a,s+1))};O.length&&O[O.length-1].disconnect(),o(e);let c=new MutationObserver(a=>{for(let d of a)if(!(d.type!=="childList"||d.addedNodes.length===0)&&![...l,...r].some(s=>s.contains(d.target))){for(let s of d.removedNodes)s instanceof Element&&(l.delete(s),r.delete(s));for(let s of d.addedNodes)(s instanceof HTMLElement||s instanceof SVGElement)&&(s.dataset.liveAnnouncer==="true"||s.dataset.reactAriaTopLayer==="true")?l.add(s):s instanceof Element&&o(s)}});c.observe(e,{childList:!0,subtree:!0});let i={visibleNodes:l,hiddenNodes:r,observe(){c.observe(e,{childList:!0,subtree:!0})},disconnect(){c.disconnect()}};return O.push(i),()=>{c.disconnect();for(let a of r){let d=j.get(a);d!=null&&(d===1?(a.removeAttribute("aria-hidden"),j.delete(a)):j.set(a,d-1))}i===O[O.length-1]?(O.pop(),O.length&&O[O.length-1].observe()):O.splice(O.indexOf(i),1)}}function Zt(t){let e=O[O.length-1];if(e&&!e.visibleNodes.has(t))return e.visibleNodes.add(t),()=>{e.visibleNodes.delete(t)}}function Gt(t,e){let{triggerRef:l,popoverRef:r,groupRef:o,isNonModal:n,isKeyboardDismissDisabled:c,shouldCloseOnInteractOutside:i,...a}=t,d=a.trigger==="SubmenuTrigger",{overlayProps:s,underlayProps:$}=Wt({isOpen:e.isOpen,onClose:e.close,shouldCloseOnBlur:!0,isDismissable:!n||d,isKeyboardDismissDisabled:c,shouldCloseOnInteractOutside:i},o??r),{overlayProps:p,arrowProps:f,placement:u}=_t({...a,targetRef:l,overlayRef:r,isOpen:e.isOpen,onClose:n?e.close:null});return Et({isDisabled:n||!e.isOpen}),z(()=>{if(e.isOpen&&r.current){var b,m;return n?Zt((b=o==null?void 0:o.current)!==null&&b!==void 0?b:r.current):jt([(m=o==null?void 0:o.current)!==null&&m!==void 0?m:r.current])}},[n,e.isOpen,r,o]),{popoverProps:$e(s,p),arrowProps:f,underlayProps:$,placement:u}}const Yt=v.createContext({});function Jt(){var t;return(t=v.useContext(Yt))!==null&&t!==void 0?t:{}}const tt=P.createContext(null);function fe(t){let e=at(),{portalContainer:l=e?null:document.body,isExiting:r}=t,[o,n]=v.useState(!1),c=v.useMemo(()=>({contain:o,setContain:n}),[o,n]),{getContainer:i}=Jt();if(!t.portalContainer&&i&&(l=i()),!l)return null;let a=t.children;return t.disableFocusManagement||(a=P.createElement(xt,{restoreFocus:!0,contain:(t.shouldContainFocus||o)&&!r},a)),a=P.createElement(tt.Provider,{value:c},P.createElement(Tt,null,a)),mt.createPortal(a,l)}function Xt(){let t=v.useContext(tt),e=t==null?void 0:t.setContain;z(()=>{e==null||e(!0)},[e])}function qt(t,e){let{role:l="dialog"}=t,r=st();r=t["aria-label"]?void 0:r;let o=v.useRef(!1);return v.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){Q(e.current);let n=setTimeout(()=>{document.activeElement===e.current&&(o.current=!0,e.current&&(e.current.blur(),Q(e.current)),o.current=!1)},500);return()=>{clearTimeout(n)}}},[e]),Xt(),{dialogProps:{...te(t,{labelable:!0}),role:l,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||r,onBlur:n=>{o.current&&n.stopPropagation()}},titleProps:{id:r}}}const Qt=v.createContext({placement:"bottom"}),Vt=v.createContext(null),pe=v.createContext(null),Er=v.forwardRef(function(e,l){[e,l]=me(e,l,Vt);let r=v.useContext(rt),o=vt(e),n=e.isOpen!=null||e.defaultOpen!=null||!r?o:r,c=St(l,n.isOpen)||e.isExiting||!1,i=pt(),{direction:a}=be();if(i){let d=e.children;return typeof d=="function"&&(d=d({trigger:e.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),P.createElement(P.Fragment,null,d)}return n&&!n.isOpen&&!c?null:P.createElement(er,{...e,triggerRef:e.triggerRef,state:n,popoverRef:l,isExiting:c,dir:a})});function er({state:t,isExiting:e,UNSTABLE_portalContainer:l,...r}){let o=v.useRef(null),[n,c]=v.useState(0),i=v.useRef(null),a=v.useContext(pe),d=a&&r.trigger==="SubmenuTrigger";z(()=>{o.current&&t.isOpen&&c(o.current.getBoundingClientRect().width)},[t.isOpen,o]);var s;let{popoverProps:$,underlayProps:p,arrowProps:f,placement:u}=Gt({...r,offset:(s=r.offset)!==null&&s!==void 0?s:8,arrowSize:n,groupRef:d?a:i},t),b=r.popoverRef,m=Lt(b,!!u)||r.isEntering||!1,g=ve({...r,defaultClassName:"react-aria-Popover",values:{trigger:r.trigger||null,placement:u,isEntering:m,isExiting:e}}),x=!r.isNonModal||r.trigger==="SubmenuTrigger",[E,S]=v.useState(!1);z(()=>{b.current&&S(x&&!b.current.querySelector("[role=dialog]"))},[b,x]),v.useEffect(()=>{E&&b.current&&!b.current.contains(document.activeElement)&&Q(b.current)},[E,b]);let w={...$.style,...g.style},h=P.createElement("div",{...$e(te(r),$),...g,role:E?"dialog":void 0,tabIndex:E?-1:void 0,"aria-label":r["aria-label"],"aria-labelledby":r["aria-labelledby"],ref:b,slot:r.slot||void 0,style:w,dir:r.dir,"data-trigger":r.trigger,"data-placement":u,"data-entering":m||void 0,"data-exiting":e||void 0},!r.isNonModal&&P.createElement(ue,{onDismiss:t.close}),P.createElement(Qt.Provider,{value:{...f,placement:u,ref:o}},g.children),P.createElement(ue,{onDismiss:t.close}));if(!d)return P.createElement(fe,{...r,shouldContainFocus:E,isExiting:e,portalContainer:l},!r.isNonModal&&t.isOpen&&P.createElement("div",{"data-testid":"underlay",...p,style:{position:"fixed",inset:0}}),P.createElement("div",{ref:i,style:{display:"contents"}},P.createElement(pe.Provider,{value:i},h)));var T;return P.createElement(fe,{...r,shouldContainFocus:E,isExiting:e,portalContainer:(T=l??(a==null?void 0:a.current))!==null&&T!==void 0?T:void 0},h)}const tr=v.createContext(null),rt=v.createContext(null),Cr=v.forwardRef(function(e,l){let r=e["aria-labelledby"];[e,l]=me(e,l,tr);let{dialogProps:o,titleProps:n}=qt({...e,"aria-labelledby":r},l),c=v.useContext(rt);!o["aria-label"]&&!o["aria-labelledby"]&&(e["aria-labelledby"]?o["aria-labelledby"]=e["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));let i=ve({defaultClassName:"react-aria-Dialog",className:e.className,style:e.style,children:e.children,values:{close:(c==null?void 0:c.close)||(()=>{})}});return P.createElement("section",{...te(e),...o,...i,ref:l,slot:e.slot||void 0},P.createElement(ct,{values:[[ut,{slots:{[oe]:{},title:{...n,level:2}}}],[dt,{slots:{[oe]:{},close:{onPress:()=>c==null?void 0:c.close()}}}]]},i.children))});export{Er as $,Cr as a,jt as b,le as c,rt as d,Vt as e,kt as f,tr as g};
