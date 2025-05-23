import{c as re,b as Q}from"./useNumberFormatter-0Jg9Jb_k.js";import{j as z,$ as ct,c as oe,d as ne,m as dt,o as ut,a as ge,b as xe,i as ft,n as ie}from"./utils-HuDI8Qn7.js";import{r as p,e as C}from"./index-KmaxkdDD.js";import{a as $t}from"./Button-rO-PiLt4.js";import{a as pt}from"./RSPContexts-DVGGaWhm.js";import{$ as le}from"./filterDOMProps-CeZl_uWj.js";import{r as mt,$ as vt}from"./index-Ccpfuzew.js";import{z as bt,h as gt,b as xt,i as V}from"./useFocusRing-sAzOUMLq.js";import{d as ht,f as Et}from"./Label-B4tzsfJl.js";import{$ as Ct}from"./useControlledState-TGcPotj3.js";import{d as Pt}from"./platform-COItUIJl.js";import{c as wt,a as yt}from"./FocusScope-U4VFcwgb.js";import{$ as Rt}from"./usePreventScroll-DWL7LN1d.js";import{$ as St}from"./useLocalizedStringFormatter-C08OsfvQ.js";import{$ as Ot}from"./VisuallyHidden-B1KWtvNn.js";import{d as ee}from"./usePress-BpjTE7Om.js";function Lt(){return typeof window.ResizeObserver<"u"}function ae(t){const{ref:e,box:l,onResize:r}=t;p.useEffect(()=>{let o=e==null?void 0:e.current;if(o)if(Lt()){const n=new window.ResizeObserver(u=>{u.length&&r()});return n.observe(o,{box:l}),()=>{o&&n.unobserve(o)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,e,l])}function Tt(t,e=!0){let[l,r]=p.useState(!0),o=l&&e;return z(()=>{if(o&&t.current&&"getAnimations"in t.current)for(let n of t.current.getAnimations())n instanceof CSSTransition&&n.cancel()},[t,o]),he(t,o,p.useCallback(()=>r(!1),[])),o}function It(t,e){let[l,r]=p.useState(e?"open":"closed");switch(l){case"open":e||r("exiting");break;case"closed":case"exiting":e&&r("open");break}let o=l==="exiting";return he(t,o,p.useCallback(()=>{r(n=>n==="exiting"?"closed":n)},[])),o}function he(t,e,l){z(()=>{if(e&&t.current){if(!("getAnimations"in t.current)){l();return}let r=t.current.getAnimations();if(r.length===0){l();return}let o=!1;return Promise.all(r.map(n=>n.finished)).then(()=>{o||mt.flushSync(()=>{l()})}).catch(()=>{}),()=>{o=!0}}},[t,e,l])}const Pr=C.forwardRef(({children:t,...e},l)=>{let r=p.useRef(!1),o=p.useContext(ee);l=ct(l||(o==null?void 0:o.ref));let n=oe(o||{},{...e,ref:l,register(){r.current=!0,o&&o.register()}});return bt(o,l),p.useEffect(()=>{r.current||(r.current=!0)},[]),C.createElement(ee.Provider,{value:n},t)});function Dt({children:t}){let e=p.useMemo(()=>({register:()=>{}}),[]);return C.createElement(ee.Provider,{value:e},t)}function Nt(t){let{ref:e,onInteractOutside:l,isDisabled:r,onInteractOutsideStart:o}=t,n=p.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),u=ne(a=>{l&&se(a,e)&&(o&&o(a),n.current.isPointerDown=!0)}),i=ne(a=>{l&&l(a)});p.useEffect(()=>{let a=n.current;if(r)return;const c=e.current,s=gt(c);if(typeof PointerEvent<"u"){let m=f=>{a.isPointerDown&&se(f,e)&&i(f),a.isPointerDown=!1};return s.addEventListener("pointerdown",u,!0),s.addEventListener("pointerup",m,!0),()=>{s.removeEventListener("pointerdown",u,!0),s.removeEventListener("pointerup",m,!0)}}},[e,r,u,i])}function se(t,e){if(t.button>0)return!1;if(t.target){const l=t.target.ownerDocument;if(!l||!l.documentElement.contains(t.target)||t.target.closest("[data-react-aria-top-layer]"))return!1}return e.current?!t.composedPath().includes(e.current):!1}let X=new Map;function wr(t){let{locale:e}=re(),l=e+(t?Object.entries(t).sort((o,n)=>o[0]<n[0]?-1:1).join():"");if(X.has(l))return X.get(l);let r=new Intl.Collator(e,t);return X.set(l,r),r}const F={top:"top",bottom:"top",left:"left",right:"left"},G={top:"bottom",bottom:"top",left:"right",right:"left"},At={top:"left",left:"top"},te={top:"height",left:"width"},Ee={width:"totalWidth",height:"totalHeight"},Z={};let R=typeof document<"u"?window.visualViewport:null;function ce(t){let e=0,l=0,r=0,o=0,n=0,u=0,i={};var a;let c=((a=R==null?void 0:R.scale)!==null&&a!==void 0?a:1)>1;if(t.tagName==="BODY"){let d=document.documentElement;r=d.clientWidth,o=d.clientHeight;var s;e=(s=R==null?void 0:R.width)!==null&&s!==void 0?s:r;var m;l=(m=R==null?void 0:R.height)!==null&&m!==void 0?m:o,i.top=d.scrollTop||t.scrollTop,i.left=d.scrollLeft||t.scrollLeft,R&&(n=R.offsetTop,u=R.offsetLeft)}else({width:e,height:l,top:n,left:u}=j(t)),i.top=t.scrollTop,i.left=t.scrollLeft,r=e,o=l;if(Pt()&&(t.tagName==="BODY"||t.tagName==="HTML")&&c){i.top=0,i.left=0;var f;n=(f=R==null?void 0:R.pageTop)!==null&&f!==void 0?f:0;var $;u=($=R==null?void 0:R.pageLeft)!==null&&$!==void 0?$:0}return{width:e,height:l,totalWidth:r,totalHeight:o,scroll:i,top:n,left:u}}function Mt(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function de(t,e,l,r,o,n,u){var i;let a=(i=o.scroll[t])!==null&&i!==void 0?i:0,c=r[te[t]],s=r.scroll[F[t]]+n,m=c+r.scroll[F[t]]-n,f=e-a+u[t]-r[F[t]],$=e-a+l+u[t]-r[F[t]];return f<s?s-f:$>m?Math.max(m-$,s-f):0}function Ht(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function ue(t){if(Z[t])return Z[t];let[e,l]=t.split(" "),r=F[e]||"right",o=At[r];F[l]||(l="center");let n=te[r],u=te[o];return Z[t]={placement:e,crossPlacement:l,axis:r,crossAxis:o,size:n,crossSize:u},Z[t]}function q(t,e,l,r,o,n,u,i,a,c){let{placement:s,crossPlacement:m,axis:f,crossAxis:$,size:d,crossSize:b}=r,v={};var g;v[$]=(g=t[$])!==null&&g!==void 0?g:0;var x,E,O,w;m==="center"?v[$]+=(((x=t[b])!==null&&x!==void 0?x:0)-((E=l[b])!==null&&E!==void 0?E:0))/2:m!==$&&(v[$]+=((O=t[b])!==null&&O!==void 0?O:0)-((w=l[b])!==null&&w!==void 0?w:0)),v[$]+=n;const h=t[$]-l[b]+a+c,L=t[$]+t[b]-a-c;if(v[$]=Q(v[$],h,L),s===f){const M=i?u[d]:e[Ee[d]];v[G[f]]=Math.floor(M-t[f]+o)}else v[f]=Math.floor(t[f]+t[d]+o);return v}function kt(t,e,l,r,o,n,u,i){const a=r?l.height:e[Ee.height];var c;let s=t.top!=null?l.top+t.top:l.top+(a-((c=t.bottom)!==null&&c!==void 0?c:0)-u);var m,f,$,d,b,v;let g=i!=="top"?Math.max(0,e.height+e.top+((m=e.scroll.top)!==null&&m!==void 0?m:0)-s-(((f=o.top)!==null&&f!==void 0?f:0)+(($=o.bottom)!==null&&$!==void 0?$:0)+n)):Math.max(0,s+u-(e.top+((d=e.scroll.top)!==null&&d!==void 0?d:0))-(((b=o.top)!==null&&b!==void 0?b:0)+((v=o.bottom)!==null&&v!==void 0?v:0)+n));return Math.min(e.height-n*2,g)}function fe(t,e,l,r,o,n){let{placement:u,axis:i,size:a}=n;var c,s;if(u===i)return Math.max(0,l[i]-t[i]-((c=t.scroll[i])!==null&&c!==void 0?c:0)+e[i]-((s=r[i])!==null&&s!==void 0?s:0)-r[G[i]]-o);var m;return Math.max(0,t[a]+t[i]+t.scroll[i]-e[i]-l[i]-l[a]-((m=r[i])!==null&&m!==void 0?m:0)-r[G[i]]-o)}function Ft(t,e,l,r,o,n,u,i,a,c,s,m,f,$,d,b){let v=ue(t),{size:g,crossAxis:x,crossSize:E,placement:O,crossPlacement:w}=v,h=q(e,i,l,v,s,m,c,f,d,b),L=s,M=fe(i,c,e,o,n+s,v);if(u&&r[g]>M){let J=ue(`${G[O]} ${w}`),st=q(e,i,l,J,s,m,c,f,d,b);fe(i,c,e,o,n+s,J)>M&&(v=J,h=st,L=s)}let N="bottom";v.axis==="top"?v.placement==="top"?N="top":v.placement==="bottom"&&(N="bottom"):v.crossAxis==="top"&&(v.crossPlacement==="top"?N="bottom":v.crossPlacement==="bottom"&&(N="top"));let y=de(x,h[x],l[E],i,a,n,c);h[x]+=y;let T=kt(h,i,c,f,o,n,l.height,N);$&&$<T&&(T=$),l.height=Math.min(l.height,T),h=q(e,i,l,v,L,m,c,f,d,b),y=de(x,h[x],l[E],i,a,n,c),h[x]+=y;let D={},_=e[x]+.5*e[E]-h[x]-o[F[x]];const A=d/2+b;var B,K,H,S;const W=F[x]==="left"?((B=o.left)!==null&&B!==void 0?B:0)+((K=o.right)!==null&&K!==void 0?K:0):((H=o.top)!==null&&H!==void 0?H:0)+((S=o.bottom)!==null&&S!==void 0?S:0),Y=l[E]-W-d/2-b,nt=e[x]+d/2-(h[x]+o[F[x]]),it=e[x]+e[E]-d/2-(h[x]+o[F[x]]),at=Q(_,nt,it);return D[x]=Q(at,A,Y),{position:h,maxHeight:T,arrowOffsetLeft:D.left,arrowOffsetTop:D.top,placement:v.placement}}function zt(t){let{placement:e,targetNode:l,overlayNode:r,scrollNode:o,padding:n,shouldFlip:u,boundaryElement:i,offset:a,crossOffset:c,maxHeight:s,arrowSize:m=0,arrowBoundaryOffset:f=0}=t,$=r instanceof HTMLElement?_t(r):document.documentElement,d=$===document.documentElement;const b=window.getComputedStyle($).position;let v=!!b&&b!=="static",g=d?j(l):$e(l,$);if(!d){let{marginTop:D,marginLeft:_}=window.getComputedStyle(l);g.top+=parseInt(D,10)||0,g.left+=parseInt(_,10)||0}let x=j(r),E=Ht(r);var O,w;x.width+=((O=E.left)!==null&&O!==void 0?O:0)+((w=E.right)!==null&&w!==void 0?w:0);var h,L;x.height+=((h=E.top)!==null&&h!==void 0?h:0)+((L=E.bottom)!==null&&L!==void 0?L:0);let M=Mt(o),N=ce(i),y=ce($),T=i.tagName==="BODY"?j($):$e($,i);return $.tagName==="HTML"&&i.tagName==="BODY"&&(y.scroll.top=0,y.scroll.left=0),Ft(e,g,x,M,E,n,u,N,y,T,a,c,v,s,m,f)}function j(t){let{top:e,left:l,width:r,height:o}=t.getBoundingClientRect(),{scrollTop:n,scrollLeft:u,clientTop:i,clientLeft:a}=document.documentElement;return{top:e+n-i,left:l+u-a,width:r,height:o}}function $e(t,e){let l=window.getComputedStyle(t),r;if(l.position==="fixed"){let{top:o,left:n,width:u,height:i}=t.getBoundingClientRect();r={top:o,left:n,width:u,height:i}}else{r=j(t);let o=j(e),n=window.getComputedStyle(e);o.top+=(parseInt(n.borderTopWidth,10)||0)-e.scrollTop,o.left+=(parseInt(n.borderLeftWidth,10)||0)-e.scrollLeft,r.top-=o.top,r.left-=o.left}return r.top-=parseInt(l.marginTop,10)||0,r.left-=parseInt(l.marginLeft,10)||0,r}function _t(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!pe(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!pe(e);)e=e.parentElement;return e||document.documentElement}function pe(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}const Bt=new WeakMap;function Kt(t){let{triggerRef:e,isOpen:l,onClose:r}=t;p.useEffect(()=>{if(!l||r===null)return;let o=n=>{let u=n.target;if(!e.current||u instanceof Node&&!u.contains(e.current)||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)return;let i=r||Bt.get(e.current);i&&i()};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[l,r,e])}let P=typeof document<"u"?window.visualViewport:null;function Wt(t){let{direction:e}=re(),{arrowSize:l=0,targetRef:r,overlayRef:o,scrollRef:n=o,placement:u="bottom",containerPadding:i=12,shouldFlip:a=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:s=0,crossOffset:m=0,shouldUpdatePosition:f=!0,isOpen:$=!0,onClose:d,maxHeight:b,arrowBoundaryOffset:v=0}=t,[g,x]=p.useState(null),E=[f,u,o.current,r.current,n.current,i,a,c,s,m,$,e,b,v,l],O=p.useRef(P==null?void 0:P.scale);p.useEffect(()=>{$&&(O.current=P==null?void 0:P.scale)},[$]);let w=p.useCallback(()=>{if(f===!1||!$||!o.current||!r.current||!c||(P==null?void 0:P.scale)!==O.current)return;let y=null;if(n.current&&n.current.contains(document.activeElement)){var T;let S=(T=document.activeElement)===null||T===void 0?void 0:T.getBoundingClientRect(),W=n.current.getBoundingClientRect();var D;if(y={type:"top",offset:((D=S==null?void 0:S.top)!==null&&D!==void 0?D:0)-W.top},y.offset>W.height/2){y.type="bottom";var _;y.offset=((_=S==null?void 0:S.bottom)!==null&&_!==void 0?_:0)-W.bottom}}let A=o.current;if(!b&&o.current){var B;A.style.top="0px",A.style.bottom="";var K;A.style.maxHeight=((K=(B=window.visualViewport)===null||B===void 0?void 0:B.height)!==null&&K!==void 0?K:window.innerHeight)+"px"}let H=zt({placement:Ut(u,e),overlayNode:o.current,targetNode:r.current,scrollNode:n.current||o.current,padding:i,shouldFlip:a,boundaryElement:c,offset:s,crossOffset:m,maxHeight:b,arrowSize:l,arrowBoundaryOffset:v});if(H.position){if(A.style.top="",A.style.bottom="",A.style.left="",A.style.right="",Object.keys(H.position).forEach(S=>A.style[S]=H.position[S]+"px"),A.style.maxHeight=H.maxHeight!=null?H.maxHeight+"px":"",y&&document.activeElement&&n.current){let S=document.activeElement.getBoundingClientRect(),W=n.current.getBoundingClientRect(),Y=S[y.type]-W[y.type];n.current.scrollTop+=Y-y.offset}x(H)}},E);z(w,E),jt(w),ae({ref:o,onResize:w}),ae({ref:r,onResize:w});let h=p.useRef(!1);z(()=>{let y,T=()=>{h.current=!0,clearTimeout(y),y=setTimeout(()=>{h.current=!1},500),w()},D=()=>{h.current&&T()};return P==null||P.addEventListener("resize",T),P==null||P.addEventListener("scroll",D),()=>{P==null||P.removeEventListener("resize",T),P==null||P.removeEventListener("scroll",D)}},[w]);let L=p.useCallback(()=>{h.current||d==null||d()},[d,h]);Kt({triggerRef:r,isOpen:$,onClose:d&&L});var M,N;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...g==null?void 0:g.position,maxHeight:(M=g==null?void 0:g.maxHeight)!==null&&M!==void 0?M:"100vh"}},placement:(N=g==null?void 0:g.placement)!==null&&N!==void 0?N:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:g==null?void 0:g.arrowOffsetLeft,top:g==null?void 0:g.arrowOffsetTop}},updatePosition:w}}function jt(t){z(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function Ut(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}const k=[];function Zt(t,e){let{onClose:l,shouldCloseOnBlur:r,isOpen:o,isDismissable:n=!1,isKeyboardDismissDisabled:u=!1,shouldCloseOnInteractOutside:i}=t;p.useEffect(()=>{if(o&&!k.includes(e))return k.push(e),()=>{let d=k.indexOf(e);d>=0&&k.splice(d,1)}},[o,e]);let a=()=>{k[k.length-1]===e&&l&&l()},c=d=>{(!i||i(d.target))&&k[k.length-1]===e&&(d.stopPropagation(),d.preventDefault())},s=d=>{(!i||i(d.target))&&(k[k.length-1]===e&&(d.stopPropagation(),d.preventDefault()),a())},m=d=>{d.key==="Escape"&&!u&&!d.nativeEvent.isComposing&&(d.stopPropagation(),d.preventDefault(),a())};Nt({ref:e,onInteractOutside:n&&o?s:void 0,onInteractOutsideStart:c});let{focusWithinProps:f}=xt({isDisabled:!r,onBlurWithin:d=>{!d.relatedTarget||wt(d.relatedTarget)||(!i||i(d.relatedTarget))&&(l==null||l())}}),$=d=>{d.target===d.currentTarget&&d.preventDefault()};return{overlayProps:{onKeyDown:m,...f},underlayProps:{onPointerDown:$}}}const Gt=p.createContext({});function Yt(){var t;return(t=p.useContext(Gt))!==null&&t!==void 0?t:{}}var Ce={};Ce={dismiss:"تجاهل"};var Pe={};Pe={dismiss:"Отхвърляне"};var we={};we={dismiss:"Odstranit"};var ye={};ye={dismiss:"Luk"};var Re={};Re={dismiss:"Schließen"};var Se={};Se={dismiss:"Απόρριψη"};var Oe={};Oe={dismiss:"Dismiss"};var Le={};Le={dismiss:"Descartar"};var Te={};Te={dismiss:"Lõpeta"};var Ie={};Ie={dismiss:"Hylkää"};var De={};De={dismiss:"Rejeter"};var Ne={};Ne={dismiss:"התעלם"};var Ae={};Ae={dismiss:"Odbaci"};var Me={};Me={dismiss:"Elutasítás"};var He={};He={dismiss:"Ignora"};var ke={};ke={dismiss:"閉じる"};var Fe={};Fe={dismiss:"무시"};var ze={};ze={dismiss:"Atmesti"};var _e={};_e={dismiss:"Nerādīt"};var Be={};Be={dismiss:"Lukk"};var Ke={};Ke={dismiss:"Negeren"};var We={};We={dismiss:"Zignoruj"};var je={};je={dismiss:"Descartar"};var Ue={};Ue={dismiss:"Dispensar"};var Ze={};Ze={dismiss:"Revocare"};var Ge={};Ge={dismiss:"Пропустить"};var Ye={};Ye={dismiss:"Zrušiť"};var Je={};Je={dismiss:"Opusti"};var Xe={};Xe={dismiss:"Odbaci"};var qe={};qe={dismiss:"Avvisa"};var Qe={};Qe={dismiss:"Kapat"};var Ve={};Ve={dismiss:"Скасувати"};var et={};et={dismiss:"取消"};var tt={};tt={dismiss:"關閉"};var rt={};rt={"ar-AE":Ce,"bg-BG":Pe,"cs-CZ":we,"da-DK":ye,"de-DE":Re,"el-GR":Se,"en-US":Oe,"es-ES":Le,"et-EE":Te,"fi-FI":Ie,"fr-FR":De,"he-IL":Ne,"hr-HR":Ae,"hu-HU":Me,"it-IT":He,"ja-JP":ke,"ko-KR":Fe,"lt-LT":ze,"lv-LV":_e,"nb-NO":Be,"nl-NL":Ke,"pl-PL":We,"pt-BR":je,"pt-PT":Ue,"ro-RO":Ze,"ru-RU":Ge,"sk-SK":Ye,"sl-SI":Je,"sr-SP":Xe,"sv-SE":qe,"tr-TR":Qe,"uk-UA":Ve,"zh-CN":et,"zh-TW":tt};function Jt(t){return t&&t.__esModule?t.default:t}function me(t){let{onDismiss:e,...l}=t,r=St(Jt(rt),"@react-aria/overlays"),o=ht(l,r.format("dismiss")),n=()=>{e&&e()};return C.createElement(Ot,null,C.createElement("button",{...o,tabIndex:-1,onClick:n,style:{width:1,height:1}}))}let U=new WeakMap,I=[];function Xt(t,e=document.body){let l=new Set(t),r=new Set,o=a=>{for(let f of a.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))l.add(f);let c=f=>{if(l.has(f)||f.parentElement&&r.has(f.parentElement)&&f.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let $ of l)if(f.contains($))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},s=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),m=c(a);if(m===NodeFilter.FILTER_ACCEPT&&n(a),m!==NodeFilter.FILTER_REJECT){let f=s.nextNode();for(;f!=null;)n(f),f=s.nextNode()}},n=a=>{var c;let s=(c=U.get(a))!==null&&c!==void 0?c:0;a.getAttribute("aria-hidden")==="true"&&s===0||(s===0&&a.setAttribute("aria-hidden","true"),r.add(a),U.set(a,s+1))};I.length&&I[I.length-1].disconnect(),o(e);let u=new MutationObserver(a=>{for(let c of a)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...l,...r].some(s=>s.contains(c.target))){for(let s of c.removedNodes)s instanceof Element&&(l.delete(s),r.delete(s));for(let s of c.addedNodes)(s instanceof HTMLElement||s instanceof SVGElement)&&(s.dataset.liveAnnouncer==="true"||s.dataset.reactAriaTopLayer==="true")?l.add(s):s instanceof Element&&o(s)}});u.observe(e,{childList:!0,subtree:!0});let i={visibleNodes:l,hiddenNodes:r,observe(){u.observe(e,{childList:!0,subtree:!0})},disconnect(){u.disconnect()}};return I.push(i),()=>{u.disconnect();for(let a of r){let c=U.get(a);c!=null&&(c===1?(a.removeAttribute("aria-hidden"),U.delete(a)):U.set(a,c-1))}i===I[I.length-1]?(I.pop(),I.length&&I[I.length-1].observe()):I.splice(I.indexOf(i),1)}}function qt(t){let e=I[I.length-1];if(e&&!e.visibleNodes.has(t))return e.visibleNodes.add(t),()=>{e.visibleNodes.delete(t)}}function Qt(t,e){let{triggerRef:l,popoverRef:r,groupRef:o,isNonModal:n,isKeyboardDismissDisabled:u,shouldCloseOnInteractOutside:i,...a}=t,c=a.trigger==="SubmenuTrigger",{overlayProps:s,underlayProps:m}=Zt({isOpen:e.isOpen,onClose:e.close,shouldCloseOnBlur:!0,isDismissable:!n||c,isKeyboardDismissDisabled:u,shouldCloseOnInteractOutside:i},o??r),{overlayProps:f,arrowProps:$,placement:d}=Wt({...a,targetRef:l,overlayRef:r,isOpen:e.isOpen,onClose:n&&!c?e.close:null});return Rt({isDisabled:n||!e.isOpen}),z(()=>{if(e.isOpen&&r.current){var b,v;return n?qt((b=o==null?void 0:o.current)!==null&&b!==void 0?b:r.current):Xt([(v=o==null?void 0:o.current)!==null&&v!==void 0?v:r.current])}},[n,e.isOpen,r,o]),{popoverProps:oe(s,f),arrowProps:$,underlayProps:m,placement:d}}const ot=C.createContext(null);function ve(t){let e=dt(),{portalContainer:l=e?null:document.body,isExiting:r}=t,[o,n]=p.useState(!1),u=p.useMemo(()=>({contain:o,setContain:n}),[o,n]),{getContainer:i}=Yt();if(!t.portalContainer&&i&&(l=i()),!l)return null;let a=t.children;return t.disableFocusManagement||(a=C.createElement(yt,{restoreFocus:!0,contain:(t.shouldContainFocus||o)&&!r},a)),a=C.createElement(ot.Provider,{value:u},C.createElement(Dt,null,a)),vt.createPortal(a,l)}function Vt(){let t=p.useContext(ot),e=t==null?void 0:t.setContain;z(()=>{e==null||e(!0)},[e])}function er(t,e){let{role:l="dialog"}=t,r=ut();r=t["aria-label"]?void 0:r;let o=p.useRef(!1);return p.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){V(e.current);let n=setTimeout(()=>{document.activeElement===e.current&&(o.current=!0,e.current&&(e.current.blur(),V(e.current)),o.current=!1)},500);return()=>{clearTimeout(n)}}},[e]),Vt(),{dialogProps:{...le(t,{labelable:!0}),role:l,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||r,onBlur:n=>{o.current&&n.stopPropagation()}},titleProps:{id:r}}}function tr(t){let[e,l]=Ct(t.isOpen,t.defaultOpen||!1,t.onOpenChange);const r=p.useCallback(()=>{l(!0)},[l]),o=p.useCallback(()=>{l(!1)},[l]),n=p.useCallback(()=>{l(!e)},[l,e]);return{isOpen:e,setOpen:l,open:r,close:o,toggle:n}}const rr=p.createContext({placement:"bottom"}),or=p.createContext(null),be=p.createContext(null),yr=p.forwardRef(function(e,l){[e,l]=ge(e,l,or);let r=p.useContext(lt),o=tr(e),n=e.isOpen!=null||e.defaultOpen!=null||!r?o:r,u=It(l,n.isOpen)||e.isExiting||!1,i=Et(),{direction:a}=re();if(i){let c=e.children;return typeof c=="function"&&(c=c({trigger:e.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),C.createElement(C.Fragment,null,c)}return n&&!n.isOpen&&!u?null:C.createElement(lr,{...e,triggerRef:e.triggerRef,state:n,popoverRef:l,isExiting:u,dir:a})});function lr({state:t,isExiting:e,UNSTABLE_portalContainer:l,...r}){let o=p.useRef(null),[n,u]=p.useState(0),i=p.useRef(null),a=p.useContext(be),c=a&&r.trigger==="SubmenuTrigger";z(()=>{o.current&&t.isOpen&&u(o.current.getBoundingClientRect().width)},[t.isOpen,o]);var s;let{popoverProps:m,underlayProps:f,arrowProps:$,placement:d}=Qt({...r,offset:(s=r.offset)!==null&&s!==void 0?s:8,arrowSize:n,groupRef:c?a:i},t),b=r.popoverRef,v=Tt(b,!!d)||r.isEntering||!1,g=xe({...r,defaultClassName:"react-aria-Popover",values:{trigger:r.trigger||null,placement:d,isEntering:v,isExiting:e}}),x=!r.isNonModal||r.trigger==="SubmenuTrigger",[E,O]=p.useState(!1);z(()=>{b.current&&O(x&&!b.current.querySelector("[role=dialog]"))},[b,x]),p.useEffect(()=>{E&&b.current&&!b.current.contains(document.activeElement)&&V(b.current)},[E,b]);let w={...m.style,...g.style},h=C.createElement("div",{...oe(le(r),m),...g,role:E?"dialog":void 0,tabIndex:E?-1:void 0,"aria-label":r["aria-label"],"aria-labelledby":r["aria-labelledby"],ref:b,slot:r.slot||void 0,style:w,dir:r.dir,"data-trigger":r.trigger,"data-placement":d,"data-entering":v||void 0,"data-exiting":e||void 0},!r.isNonModal&&C.createElement(me,{onDismiss:t.close}),C.createElement(rr.Provider,{value:{...$,placement:d,ref:o}},g.children),C.createElement(me,{onDismiss:t.close}));if(!c)return C.createElement(ve,{...r,shouldContainFocus:E,isExiting:e,portalContainer:l},!r.isNonModal&&t.isOpen&&C.createElement("div",{"data-testid":"underlay",...f,style:{position:"fixed",inset:0}}),C.createElement("div",{ref:i,style:{display:"contents"}},C.createElement(be.Provider,{value:i},h)));var L;return C.createElement(ve,{...r,shouldContainFocus:E,isExiting:e,portalContainer:(L=l??(a==null?void 0:a.current))!==null&&L!==void 0?L:void 0},h)}const nr=p.createContext(null),lt=p.createContext(null),Rr=p.forwardRef(function(e,l){let r=e["aria-labelledby"];[e,l]=ge(e,l,nr);let{dialogProps:o,titleProps:n}=er({...e,"aria-labelledby":r},l),u=p.useContext(lt);!o["aria-label"]&&!o["aria-labelledby"]&&e["aria-labelledby"]&&(o["aria-labelledby"]=e["aria-labelledby"]);let i=xe({defaultClassName:"react-aria-Dialog",className:e.className,style:e.style,children:e.children,values:{close:(u==null?void 0:u.close)||(()=>{})}});return C.createElement("section",{...le(e),...o,...i,ref:l,slot:e.slot||void 0},C.createElement(ft,{values:[[pt,{slots:{[ie]:{},title:{...n,level:2}}}],[$t,{slots:{[ie]:{},close:{onPress:()=>u==null?void 0:u.close()}}}]]},i.children))});export{yr as $,Rr as a,wr as b,tr as c,ae as d,lt as e,or as f,Pr as g,Xt as h,Bt as i,nr as j};
