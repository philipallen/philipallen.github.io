import{j as V}from"./jsx-runtime-DQ32znRX.js";import{f as Oe}from"./index-Cnk2rnxF.js";import{r as h,R as F}from"./index-DH5ua8nC.js";import{o as Q}from"./index-DKJt7waT.js";import{o as ze,M as Ne,P as We}from"./index-Bkh50RYL.js";import{a as ee,u as ne,b as te}from"./index-CtBUti8q.js";import{b as Ye,c as He,$ as Ce,g as Me,f as oe,h as Ie,e as Re,i as qe,d as Ge}from"./utils-DMjC9_eM.js";import{$ as Ee}from"./Label-DOSTzuh-.js";import{d as fe,$ as j}from"./useFocusWithin-DtMhJA8W.js";import{k as ie,r as Je,j as Qe,s as Ze,p as _e,q as Ae}from"./useFocusable-C8W1vPXm.js";import{$ as en}from"./useNumberFormatter-CCIOAssj.js";import{b as Le,$ as Ke,c as le,d as nn,e as Y,f as tn}from"./useLabel-B8zubuc2.js";import{$ as Be}from"./VisuallyHidden-KFGkQyAi.js";import{I as me}from"./IconButton-CQCemVia.js";function Fe(e){let{onMoveStart:t,onMove:n,onMoveEnd:d}=e,o=h.useRef({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:i,removeGlobalListener:f}=ie(),$=fe((u,g,v,l)=>{v===0&&l===0||(o.current.didMove||(o.current.didMove=!0,t==null||t({type:"movestart",pointerType:g,shiftKey:u.shiftKey,metaKey:u.metaKey,ctrlKey:u.ctrlKey,altKey:u.altKey})),n==null||n({type:"move",pointerType:g,deltaX:v,deltaY:l,shiftKey:u.shiftKey,metaKey:u.metaKey,ctrlKey:u.ctrlKey,altKey:u.altKey}))}),m=fe((u,g)=>{Ye(),o.current.didMove&&(d==null||d({type:"moveend",pointerType:g,shiftKey:u.shiftKey,metaKey:u.metaKey,ctrlKey:u.ctrlKey,altKey:u.altKey}))});return{moveProps:h.useMemo(()=>{let u={},g=()=>{He(),o.current.didMove=!1};if(typeof PointerEvent>"u"){let l=r=>{if(r.button===0){var b,p,y,P;$(r,"mouse",r.pageX-((y=(b=o.current.lastPosition)===null||b===void 0?void 0:b.pageX)!==null&&y!==void 0?y:0),r.pageY-((P=(p=o.current.lastPosition)===null||p===void 0?void 0:p.pageY)!==null&&P!==void 0?P:0)),o.current.lastPosition={pageX:r.pageX,pageY:r.pageY}}},x=r=>{r.button===0&&(m(r,"mouse"),f(window,"mousemove",l,!1),f(window,"mouseup",x,!1))};u.onMouseDown=r=>{r.button===0&&(g(),r.stopPropagation(),r.preventDefault(),o.current.lastPosition={pageX:r.pageX,pageY:r.pageY},i(window,"mousemove",l,!1),i(window,"mouseup",x,!1))};let s=r=>{let b=[...r.changedTouches].findIndex(({identifier:C})=>C===o.current.id);if(b>=0){var p,y;let{pageX:C,pageY:L}=r.changedTouches[b];var P,D;$(r,"touch",C-((P=(p=o.current.lastPosition)===null||p===void 0?void 0:p.pageX)!==null&&P!==void 0?P:0),L-((D=(y=o.current.lastPosition)===null||y===void 0?void 0:y.pageY)!==null&&D!==void 0?D:0)),o.current.lastPosition={pageX:C,pageY:L}}},w=r=>{[...r.changedTouches].findIndex(({identifier:p})=>p===o.current.id)>=0&&(m(r,"touch"),o.current.id=null,f(window,"touchmove",s),f(window,"touchend",w),f(window,"touchcancel",w))};u.onTouchStart=r=>{if(r.changedTouches.length===0||o.current.id!=null)return;let{pageX:b,pageY:p,identifier:y}=r.changedTouches[0];g(),r.stopPropagation(),r.preventDefault(),o.current.lastPosition={pageX:b,pageY:p},o.current.id=y,i(window,"touchmove",s,!1),i(window,"touchend",w,!1),i(window,"touchcancel",w,!1)}}else{let l=s=>{if(s.pointerId===o.current.id){var w,r;let y=s.pointerType||"mouse";var b,p;$(s,y,s.pageX-((b=(w=o.current.lastPosition)===null||w===void 0?void 0:w.pageX)!==null&&b!==void 0?b:0),s.pageY-((p=(r=o.current.lastPosition)===null||r===void 0?void 0:r.pageY)!==null&&p!==void 0?p:0)),o.current.lastPosition={pageX:s.pageX,pageY:s.pageY}}},x=s=>{if(s.pointerId===o.current.id){let w=s.pointerType||"mouse";m(s,w),o.current.id=null,f(window,"pointermove",l,!1),f(window,"pointerup",x,!1),f(window,"pointercancel",x,!1)}};u.onPointerDown=s=>{s.button===0&&o.current.id==null&&(g(),s.stopPropagation(),s.preventDefault(),o.current.lastPosition={pageX:s.pageX,pageY:s.pageY},o.current.id=s.pointerId,i(window,"pointermove",l,!1),i(window,"pointerup",x,!1),i(window,"pointercancel",x,!1))}}let v=(l,x,s)=>{g(),$(l,"keyboard",x,s),m(l,"keyboard")};return u.onKeyDown=l=>{switch(l.key){case"Left":case"ArrowLeft":l.preventDefault(),l.stopPropagation(),v(l,-1,0);break;case"Right":case"ArrowRight":l.preventDefault(),l.stopPropagation(),v(l,1,0);break;case"Up":case"ArrowUp":l.preventDefault(),l.stopPropagation(),v(l,0,-1);break;case"Down":case"ArrowDown":l.preventDefault(),l.stopPropagation(),v(l,0,1);break}},u},[o,i,f,$,m])}}const se=new WeakMap;function ae(e,t){let n=se.get(e);if(!n)throw new Error("Unknown slider state");return`${n.id}-${t}`}function rn(e,t,n){let{labelProps:d,fieldProps:o}=Le(e),i=e.orientation==="vertical";var f;se.set(t,{id:(f=d.id)!==null&&f!==void 0?f:o.id,"aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]});let{direction:$}=Ke(),{addGlobalListener:m,removeGlobalListener:S}=ie();const u=h.useRef(null),g=$==="rtl",v=h.useRef(null),{moveProps:l}=Fe({onMoveStart(){v.current=null},onMove({deltaX:r,deltaY:b}){let{height:p,width:y}=n.current.getBoundingClientRect(),P=i?p:y;v.current==null&&(v.current=t.getThumbPercent(u.current)*P);let D=i?b:r;if((i||g)&&(D=-D),v.current+=D,u.current!=null&&n.current){const C=le(v.current/P,0,1);t.setThumbPercent(u.current,C)}},onMoveEnd(){u.current!=null&&(t.setThumbDragging(u.current,!1),u.current=null)}});let x=h.useRef(void 0),s=(r,b,p,y)=>{if(n.current&&!e.isDisabled&&t.values.every((P,D)=>!t.isThumbDragging(D))){let{height:P,width:D,top:C,left:L}=n.current.getBoundingClientRect(),U=i?P:D,M=((i?y:p)-(i?C:L))/U;($==="rtl"||i)&&(M=1-M);let A=t.getPercentValue(M),I,c=t.values.findIndex(R=>A-R<0);if(c===0)I=c;else if(c===-1)I=t.values.length-1;else{let R=t.values[c-1],E=t.values[c];Math.abs(R-A)<Math.abs(E-A)?I=c-1:I=c}I>=0&&t.isThumbEditable(I)?(r.preventDefault(),u.current=I,t.setFocusedThumb(I),x.current=b,t.setThumbDragging(u.current,!0),t.setThumbValue(I,A),m(window,"mouseup",w,!1),m(window,"touchend",w,!1),m(window,"pointerup",w,!1)):u.current=null}},w=r=>{var b,p;((p=r.pointerId)!==null&&p!==void 0?p:(b=r.changedTouches)===null||b===void 0?void 0:b[0].identifier)===x.current&&(u.current!=null&&(t.setThumbDragging(u.current,!1),u.current=null),S(window,"mouseup",w,!1),S(window,"touchend",w,!1),S(window,"pointerup",w,!1))};return"htmlFor"in d&&d.htmlFor&&(delete d.htmlFor,d.onClick=()=>{var r;(r=document.getElementById(ae(t,0)))===null||r===void 0||r.focus(),Je("keyboard")}),{labelProps:d,groupProps:{role:"group",...o},trackProps:j({onMouseDown(r){r.button!==0||r.altKey||r.ctrlKey||r.metaKey||s(r,void 0,r.clientX,r.clientY)},onPointerDown(r){r.pointerType==="mouse"&&(r.button!==0||r.altKey||r.ctrlKey||r.metaKey)||s(r,r.pointerId,r.clientX,r.clientY)},onTouchStart(r){s(r,r.changedTouches[0].identifier,r.changedTouches[0].clientX,r.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},l),outputProps:{htmlFor:t.values.map((r,b)=>ae(t,b)).join(" "),"aria-live":"off"}}}function an(e,t){let{index:n=0,isRequired:d,validationState:o,isInvalid:i,trackRef:f,inputRef:$,orientation:m=t.orientation,name:S}=e,u=e.isDisabled||t.isDisabled,g=m==="vertical",{direction:v}=Ke(),{addGlobalListener:l,removeGlobalListener:x}=ie(),s=se.get(t);var w;const{labelProps:r,fieldProps:b}=Le({...e,id:ae(t,n),"aria-labelledby":`${s.id} ${(w=e["aria-labelledby"])!==null&&w!==void 0?w:""}`.trim()}),p=t.values[n],y=h.useCallback(()=>{$.current&&Qe($.current)},[$]),P=t.focusedThumb===n;h.useEffect(()=>{P&&y()},[P,y]);let D=v==="rtl",C=h.useRef(null),{keyboardProps:L}=Ze({onKeyDown(c){let{getThumbMaxValue:R,getThumbMinValue:E,decrementThumb:B,incrementThumb:W,setThumbValue:a,setThumbDragging:T,pageSize:k}=t;if(!/^(PageUp|PageDown|Home|End)$/.test(c.key)){c.continuePropagation();return}switch(c.preventDefault(),T(n,!0),c.key){case"PageUp":W(n,k);break;case"PageDown":B(n,k);break;case"Home":a(n,E(n));break;case"End":a(n,R(n));break}T(n,!1)}}),{moveProps:U}=Fe({onMoveStart(){C.current=null,t.setThumbDragging(n,!0)},onMove({deltaX:c,deltaY:R,pointerType:E,shiftKey:B}){const{getThumbPercent:W,setThumbPercent:a,decrementThumb:T,incrementThumb:k,step:O,pageSize:z}=t;let{width:Ue,height:Xe}=f.current.getBoundingClientRect(),ce=g?Xe:Ue;if(C.current==null&&(C.current=W(n)*ce),E==="keyboard")c>0&&D||c<0&&!D||R>0?T(n,B?z:O):k(n,B?z:O);else{let re=g?R:c;(g||D)&&(re=-re),C.current+=re,a(n,le(C.current/ce,0,1))}},onMoveEnd(){t.setThumbDragging(n,!1)}});t.setThumbEditable(n,!u);const{focusableProps:N}=_e(j(e,{onFocus:()=>t.setFocusedThumb(n),onBlur:()=>t.setFocusedThumb(void 0)}),$);let K=h.useRef(void 0),X=c=>{y(),K.current=c,t.setThumbDragging(n,!0),l(window,"mouseup",M,!1),l(window,"touchend",M,!1),l(window,"pointerup",M,!1)},M=c=>{var R,E;((E=c.pointerId)!==null&&E!==void 0?E:(R=c.changedTouches)===null||R===void 0?void 0:R[0].identifier)===K.current&&(y(),t.setThumbDragging(n,!1),x(window,"mouseup",M,!1),x(window,"touchend",M,!1),x(window,"pointerup",M,!1))},A=t.getThumbPercent(n);(g||v==="rtl")&&(A=1-A);let I=u?{}:j(L,U,{onMouseDown:c=>{c.button!==0||c.altKey||c.ctrlKey||c.metaKey||X()},onPointerDown:c=>{c.button!==0||c.altKey||c.ctrlKey||c.metaKey||X(c.pointerId)},onTouchStart:c=>{X(c.changedTouches[0].identifier)}});return nn($,p,c=>{t.setThumbValue(n,c)}),{inputProps:j(N,b,{type:"range",tabIndex:u?void 0:0,min:t.getThumbMinValue(n),max:t.getThumbMaxValue(n),step:t.step,value:p,name:S,disabled:u,"aria-orientation":m,"aria-valuetext":t.getThumbValueLabel(n),"aria-required":d||void 0,"aria-invalid":i||o==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-describedby":[s["aria-describedby"],e["aria-describedby"]].filter(Boolean).join(" "),"aria-details":[s["aria-details"],e["aria-details"]].filter(Boolean).join(" "),onChange:c=>{t.setThumbValue(n,parseFloat(c.target.value))}}),thumbProps:{...I,style:{position:"absolute",[g?"top":"left"]:`${A*100}%`,transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:r,isDragging:t.isThumbDragging(n),isDisabled:u,isFocused:P}}const on=0,ln=100,sn=1;function un(e){const{isDisabled:t=!1,minValue:n=on,maxValue:d=ln,numberFormatter:o,step:i=sn,orientation:f="horizontal"}=e;let $=h.useMemo(()=>{let a=(d-n)/10;return a=Y(a,0,a+i,i),Math.max(a,i)},[i,d,n]),m=h.useCallback(a=>a==null?void 0:a.map((T,k)=>{let O=k===0?n:T[k-1],z=k===a.length-1?d:T[k+1];return Y(T,O,z,i)}),[n,d,i]),S=h.useMemo(()=>m(pe(e.value)),[e.value]),u=h.useMemo(()=>{var a;return m((a=pe(e.defaultValue))!==null&&a!==void 0?a:[n])},[e.defaultValue,n]),g=he(e.value,e.defaultValue,e.onChange),v=he(e.value,e.defaultValue,e.onChangeEnd);const[l,x]=tn(S,u,g),[s,w]=h.useState(new Array(l.length).fill(!1)),r=h.useRef(new Array(l.length).fill(!0)),[b,p]=h.useState(void 0),y=h.useRef(l),P=h.useRef(s);let D=a=>{y.current=a,x(a)},C=a=>{P.current=a,w(a)};function L(a){return(a-n)/(d-n)}function U(a){return a===0?n:l[a-1]}function N(a){return a===l.length-1?d:l[a+1]}function K(a){return r.current[a]}function X(a,T){r.current[a]=T}function M(a,T){if(t||!K(a))return;const k=U(a),O=N(a);T=Y(T,k,O,i);let z=be(y.current,a,T);D(z)}function A(a,T){if(t||!K(a))return;T&&(y.current=l);const k=P.current[a];P.current=be(P.current,a,T),C(P.current),v&&k&&!P.current.some(Boolean)&&v(y.current)}function I(a){return o.format(a)}function c(a,T){M(a,E(T))}function R(a){return Math.round((a-n)/i)*i+n}function E(a){const T=a*(d-n)+n;return le(R(T),n,d)}function B(a,T=1){let k=Math.max(T,i);M(a,Y(l[a]+k,n,d,i))}function W(a,T=1){let k=Math.max(T,i);M(a,Y(l[a]-k,n,d,i))}return{values:l,getThumbValue:a=>l[a],setThumbValue:M,setThumbPercent:c,isThumbDragging:a=>s[a],setThumbDragging:A,focusedThumb:b,setFocusedThumb:p,getThumbPercent:a=>L(l[a]),getValuePercent:L,getThumbValueLabel:a=>I(l[a]),getFormattedValue:I,getThumbMinValue:U,getThumbMaxValue:N,getPercentValue:E,isThumbEditable:K,setThumbEditable:X,incrementThumb:B,decrementThumb:W,step:i,pageSize:$,orientation:f,isDisabled:t}}function be(e,t,n){return e[t]===n?e:[...e.slice(0,t),n,...e.slice(t+1)]}function pe(e){if(e!=null)return Array.isArray(e)?e:[e]}function he(e,t,n){return d=>{typeof e=="number"||typeof t=="number"?n==null||n(d[0]):n==null||n(d)}}const dn=h.createContext(null),ue=h.createContext(null),de=h.createContext(null),cn=h.createContext(null);function fn(e,t){[e,t]=Ce(e,t,dn);let n=h.useRef(null),d=en(e.formatOptions),o=un({...e,numberFormatter:d}),[i,f]=Me(),{groupProps:$,trackProps:m,labelProps:S,outputProps:u}=rn({...e,label:f},o,n),g=oe({...e,values:{orientation:o.orientation,isDisabled:o.isDisabled,state:o},defaultClassName:"react-aria-Slider"}),v=Ae(e);return delete v.id,F.createElement(Ie,{values:[[ue,o],[de,{...m,ref:n}],[cn,u],[Ee,{...S,ref:i}]]},F.createElement("div",{...v,...$,...g,ref:t,slot:e.slot||void 0,"data-orientation":o.orientation,"data-disabled":o.isDisabled||void 0}))}const mn=h.forwardRef(fn);function bn(e,t){[e,t]=Ce(e,t,de);let n=h.useContext(ue),{onHoverStart:d,onHoverEnd:o,onHoverChange:i,...f}=e,{hoverProps:$,isHovered:m}=Re({onHoverStart:d,onHoverEnd:o,onHoverChange:i}),S=oe({...e,defaultClassName:"react-aria-SliderTrack",values:{orientation:n.orientation,isDisabled:n.isDisabled,isHovered:m,state:n}});return F.createElement("div",{...j(f,$),...S,ref:t,"data-hovered":m||void 0,"data-orientation":n.orientation||void 0,"data-disabled":n.isDisabled||void 0})}const pn=h.forwardRef(bn);function hn(e,t){let n=h.useContext(ue),{ref:d}=qe(de),{index:o=0}=e,i=h.useRef(null),[f,$]=Me(),{thumbProps:m,inputProps:S,labelProps:u,isDragging:g,isFocused:v,isDisabled:l}=an({...e,index:o,trackRef:d,inputRef:i,label:$},n),{focusProps:x,isFocusVisible:s}=Ge(),{hoverProps:w,isHovered:r}=Re(e),b=oe({...e,defaultClassName:"react-aria-SliderThumb",values:{state:n,isHovered:r,isDragging:g,isFocused:v,isFocusVisible:s,isDisabled:l}}),p=Ae(e);return delete p.id,F.createElement("div",{...j(p,m,w),...b,ref:t,style:{...m.style,...b.style},"data-hovered":r||void 0,"data-dragging":g||void 0,"data-focused":v||void 0,"data-focus-visible":s||void 0,"data-disabled":l||void 0},F.createElement(Be,null,F.createElement("input",{ref:i,...j(S,x)})),F.createElement(Ie,{values:[[Ee,{...u,ref:f}]]},b.children))}const gn=h.forwardRef(hn),vn=ee.div`
  ${()=>{const{tokens:{slider:e}}=ne();return te`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${e.track.padding};
    `}}
`,$n=ee.div`
  ${()=>{const{tokens:{slider:e}}=ne();return te`
      width: 100%;

      .react-aria-Slider {
        display: grid;

        .react-aria-SliderTrack {
          position: relative;

          &:before {
            content: "";
            display: block;
            position: absolute;
          }
        }

        .react-aria-SliderThumb {
          width: ${e.thumb.size};
          height: ${e.thumb.size};
          border-radius: 50%;
          forced-color-adjust: none;

          &[data-focus-visible] {
            outline: ${e.thumb.focusRing.width} solid
              ${e.thumb.focusRing.color};
            outline-offset: ${e.thumb.focusRing.offset};
          }
        }

        &[data-orientation="horizontal"] {
          flex-direction: column;

          .react-aria-SliderTrack {
            height: ${e.thumb.size};
            width: 100%;

            &:before {
              height: ${e.track.size};
              width: 100%;
              top: 50%;
              transform: translateY(-50%);
              background: ${e.track.color};
              border-radius: ${e.track.size};
            }
          }

          .react-aria-SliderThumb {
            top: 50%;
            cursor: pointer;

            & [data-primary-color] {
              color: ${e.thumb.primaryColor.base};
            }

            & [data-secondary-color] {
              color: ${e.thumb.secondaryColor.base};
            }

            &:hover [data-primary-color] {
              color: ${e.thumb.primaryColor.hover};
            }

            &:hover [data-secondary-color] {
              color: ${e.thumb.secondaryColor.hover};
            }

            &:active [data-primary-color] {
              color: ${e.thumb.primaryColor.active};
            }

            &:active [data-secondary-color] {
              color: ${e.thumb.secondaryColor.active};
            }
          }
        }
      }
    `}}
`,yn=ee.div`
  ${()=>{const{tokens:{slider:e}}=ne();return te`
      height: ${e.thumb.size};
      width: 100%;
      display: flex;
      position: relative;

      &:before {
        height: ${e.track.size};
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    `}}
`,wn=ee.div`
  ${({$notchAsPercent:e})=>{const{tokens:{slider:t}}=ne();return te`
      width: ${e}%;
      border-right: ${t.notch.size} ${t.notch.color} solid;
    `}};
`,Tn=(e,t,n)=>{if(!n)return n;const d=t-e;let o=0;return n.map(i=>{const m=(i-e)/(d*.01)-o;return o+=m,m})};function Z(e){return V.jsx($n,{children:V.jsx(mn,{...e})})}function Pn(e){const{notches:t,minValue:n=Q.DEFAULT_MIN_VALUE,maxValue:d=Q.DEFAULT_MAX_VALUE}=e,o=Tn(n,d,t);return V.jsx(yn,{children:o==null?void 0:o.map((i,f)=>V.jsx(wn,{$notchAsPercent:i},f))})}Z.UI=e=>{const{notches:t}=e;return V.jsxs(pn,{children:[t&&t.length&&V.jsx(Pn,{...e}),V.jsx(gn,{children:V.jsx(ze,{})})]})};Z.__docgenInfo={description:"",methods:[{name:"UI",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`SliderProps & {
  notches?: number[];
}`,elements:[{name:"SliderProps"},{name:"signature",type:"object",raw:`{
  notches?: number[];
}`,signature:{properties:[{key:"notches",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}}]}}],alias:"SliderBaseProps"}}],returns:null}],displayName:"SliderBase",props:{notches:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};function _(e){const{id:t,onChange:n,decrementButtonProps:d,incrementButtonProps:o,testID:i="slider",...f}=e,{step:$=Q.DEFAULT_STEP,value:m,minValue:S=Q.DEFAULT_MIN_VALUE,maxValue:u=Q.DEFAULT_MAX_VALUE}=e,g=h.useId();function v(){if(m<=S)return;let s=m-$;s<S&&(s=S),n(s)}function l(){const s=m+$;s>u||n(s)}const x=h.useCallback(s=>{s instanceof Array?s[0]&&n(s[0]):n(s)},[n]);return V.jsxs("div",{"data-testid":i,children:[V.jsx(Z,{...f,id:t||g,onChange:x,children:V.jsxs(vn,{children:[V.jsx(me,{"aria-label":"Decrease value","aria-describedby":t||g,testID:`${i}-decrement-button`,...d,variant:"contained",onClick:v,children:V.jsx(Ne,{})}),V.jsx(Z.UI,{...f}),V.jsx(me,{"aria-label":"Increase value","aria-describedby":t||g,testID:`${i}-increment-button`,...o,variant:"contained",onClick:l,children:V.jsx(We,{})})]})}),V.jsx(Be,{"aria-live":"assertive",children:m})]})}_.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},decrementButtonProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"children",value:{name:"JSX.Element",required:!0}},{key:"variant",value:{name:"CoreIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"union",raw:'"variant" | "onClick" | "aria-describedby" | "children"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"aria-describedby"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  IconButtonProps,
  "variant" | "onClick" | "aria-describedby" | "children"
>`},description:""},incrementButtonProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"children",value:{name:"JSX.Element",required:!0}},{key:"variant",value:{name:"CoreIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"union",raw:'"variant" | "onClick" | "aria-describedby" | "children"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"aria-describedby"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  IconButtonProps,
  "variant" | "onClick" | "aria-describedby" | "children"
>`},description:""}}};const{useArgs:je}=__STORYBOOK_MODULE_PREVIEW_API__,xn={title:"Components/Inputs/Slider",component:_,render:function(t){const[{value:n},d]=je();function o(i){t.onChange(i),d({value:i})}return V.jsx(_,{...t,value:n,onChange:o})},argTypes:{step:{control:"number"},value:{control:"number"},decrementButtonProps:{control:{disable:!0}},incrementButtonProps:{control:{disable:!0}}},args:{onChange:Oe()}},H={args:{value:30,"aria-label":"Label for Slider"}},q={args:{value:2,minValue:1,maxValue:5,"aria-label":"Label for min / max Slider"}},G={args:{step:1e3,value:1e4,minValue:2e3,maxValue:64e3,notches:[15e3,25e3,58e3],"aria-label":"Label for 'notched' Slider"}},J={args:{step:499,value:1,minValue:1,maxValue:65e3,"aria-label":"Label for 'variable stepped' Slider"},render:e=>{const[,t]=je();function n(d){const o=d>=1?d:1,i=o<=2?1:0,f=o<=2?499:500;e.onChange(o),t({value:o}),t({step:f}),t({minValue:i})}return V.jsx(_,{...e,onChange:n})}};var ge,ve,$e;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    value: 30,
    "aria-label": "Label for Slider"
  }
}`,...($e=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:$e.source}}};var ye,we,Te;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    value: 2,
    minValue: 1,
    maxValue: 5,
    "aria-label": "Label for min / max Slider"
  }
}`,...(Te=(we=q.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Pe,xe,Ve;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    step: 1000,
    value: 10000,
    minValue: 2000,
    maxValue: 64000,
    notches: [15000, 25000, 58000],
    "aria-label": "Label for 'notched' Slider"
  }
}`,...(Ve=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var Se,De,ke;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    step: 499,
    value: 1,
    minValue: 1,
    maxValue: 65000,
    "aria-label": "Label for 'variable stepped' Slider"
  },
  render: args => {
    const [, updateArgs] = useArgs();
    function handleChange(newValue: number) {
      const newSafeValue = newValue >= 1 ? newValue : 1;
      const newSafeMinValue = newSafeValue <= 2 ? 1 : 0;
      const newSafeStep = newSafeValue <= 2 ? 499 : 500;
      args.onChange(newSafeValue);
      updateArgs({
        value: newSafeValue
      });
      updateArgs({
        step: newSafeStep
      });
      updateArgs({
        minValue: newSafeMinValue
      });
    }
    return <Slider {...args} onChange={handleChange} />;
  }
}`,...(ke=(De=J.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};const Vn=["Basic","WithMinAndMax","WithNotches","WithVariableSteps"],Un=Object.freeze(Object.defineProperty({__proto__:null,Basic:H,WithMinAndMax:q,WithNotches:G,WithVariableSteps:J,__namedExportsOrder:Vn,default:xn},Symbol.toStringTag,{value:"Module"}));export{H as B,Un as S,q as W,G as a,J as b};
