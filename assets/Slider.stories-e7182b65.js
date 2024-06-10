import{f as Ke}from"./index-6eef940f.js";import{j as C}from"./jsx-runtime-6eef64cc.js";import{r as m,R as j}from"./index-c013ead5.js";import{$ as Z,a as Ie,b as Ce,c as _,d as Ee,e as ve,f as ee,g as Le,h as Fe,i as He,j as je,k as Ae,l as q,m as Xe,n as $e,o as Te,p as te,q as ye,r as we,s as Pe,t as xe,u as ze,v as Ue,w as Ye}from"./Label-4ddae09e.js";import{a as re,u as De,b as Ve}from"./index-1940508f.js";import{S as Be}from"./index-7aafd469.js";import{a as le,b as A,$ as Ge}from"./VisuallyHidden-0c085a6b.js";import{I as ue}from"./InputLabelTopBase-1d86c809.js";function Me(e){let{onMoveStart:r,onMove:t,onMoveEnd:c}=e,o=m.useRef({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:u,removeGlobalListener:h}=Z(),g=le((l,w,$,i)=>{$===0&&i===0||(o.current.didMove||(o.current.didMove=!0,r==null||r({type:"movestart",pointerType:w,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey})),t==null||t({type:"move",pointerType:w,deltaX:$,deltaY:i,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))}),v=le((l,w)=>{Ie(),o.current.didMove&&(c==null||c({type:"moveend",pointerType:w,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))});return{moveProps:m.useMemo(()=>{let l={},w=()=>{Ce(),o.current.didMove=!1};if(typeof PointerEvent>"u"){let i=n=>{if(n.button===0){var f,b,p,P;g(n,"mouse",n.pageX-((p=(f=o.current.lastPosition)===null||f===void 0?void 0:f.pageX)!==null&&p!==void 0?p:0),n.pageY-((P=(b=o.current.lastPosition)===null||b===void 0?void 0:b.pageY)!==null&&P!==void 0?P:0)),o.current.lastPosition={pageX:n.pageX,pageY:n.pageY}}},x=n=>{n.button===0&&(v(n,"mouse"),h(window,"mousemove",i,!1),h(window,"mouseup",x,!1))};l.onMouseDown=n=>{n.button===0&&(w(),n.stopPropagation(),n.preventDefault(),o.current.lastPosition={pageX:n.pageX,pageY:n.pageY},u(window,"mousemove",i,!1),u(window,"mouseup",x,!1))};let s=n=>{let f=[...n.changedTouches].findIndex(({identifier:S})=>S===o.current.id);if(f>=0){var b,p;let{pageX:S,pageY:L}=n.changedTouches[f];var P,V;g(n,"touch",S-((P=(b=o.current.lastPosition)===null||b===void 0?void 0:b.pageX)!==null&&P!==void 0?P:0),L-((V=(p=o.current.lastPosition)===null||p===void 0?void 0:p.pageY)!==null&&V!==void 0?V:0)),o.current.lastPosition={pageX:S,pageY:L}}},T=n=>{[...n.changedTouches].findIndex(({identifier:b})=>b===o.current.id)>=0&&(v(n,"touch"),o.current.id=null,h(window,"touchmove",s),h(window,"touchend",T),h(window,"touchcancel",T))};l.onTouchStart=n=>{if(n.changedTouches.length===0||o.current.id!=null)return;let{pageX:f,pageY:b,identifier:p}=n.changedTouches[0];w(),n.stopPropagation(),n.preventDefault(),o.current.lastPosition={pageX:f,pageY:b},o.current.id=p,u(window,"touchmove",s,!1),u(window,"touchend",T,!1),u(window,"touchcancel",T,!1)}}else{let i=s=>{if(s.pointerId===o.current.id){var T,n;let p=s.pointerType||"mouse";var f,b;g(s,p,s.pageX-((f=(T=o.current.lastPosition)===null||T===void 0?void 0:T.pageX)!==null&&f!==void 0?f:0),s.pageY-((b=(n=o.current.lastPosition)===null||n===void 0?void 0:n.pageY)!==null&&b!==void 0?b:0)),o.current.lastPosition={pageX:s.pageX,pageY:s.pageY}}},x=s=>{if(s.pointerId===o.current.id){let T=s.pointerType||"mouse";v(s,T),o.current.id=null,h(window,"pointermove",i,!1),h(window,"pointerup",x,!1),h(window,"pointercancel",x,!1)}};l.onPointerDown=s=>{s.button===0&&o.current.id==null&&(w(),s.stopPropagation(),s.preventDefault(),o.current.lastPosition={pageX:s.pageX,pageY:s.pageY},o.current.id=s.pointerId,u(window,"pointermove",i,!1),u(window,"pointerup",x,!1),u(window,"pointercancel",x,!1))}}let $=(i,x,s)=>{w(),g(i,"keyboard",x,s),v(i,"keyboard")};return l.onKeyDown=i=>{switch(i.key){case"Left":case"ArrowLeft":i.preventDefault(),i.stopPropagation(),$(i,-1,0);break;case"Right":case"ArrowRight":i.preventDefault(),i.stopPropagation(),$(i,1,0);break;case"Up":case"ArrowUp":i.preventDefault(),i.stopPropagation(),$(i,0,-1);break;case"Down":case"ArrowDown":i.preventDefault(),i.stopPropagation(),$(i,0,1);break}},l},[o,u,h,g,v])}}function qe(e={}){let{locale:r}=_();return m.useMemo(()=>new Ee(r,e),[r,e])}const ne=new WeakMap;function Q(e,r){let t=ne.get(e);if(!t)throw new Error("Unknown slider state");return`${t.id}-${r}`}function Oe(e,r,t){let{labelProps:c,fieldProps:o}=ve(e),u=e.orientation==="vertical";var h;ne.set(r,{id:(h=c.id)!==null&&h!==void 0?h:o.id,"aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]});let{direction:g}=_(),{addGlobalListener:v,removeGlobalListener:D}=Z();const l=m.useRef(null),w=g==="rtl",$=m.useRef(null),{moveProps:i}=Me({onMoveStart(){$.current=null},onMove({deltaX:n,deltaY:f}){let{height:b,width:p}=t.current.getBoundingClientRect(),P=u?b:p;$.current==null&&($.current=r.getThumbPercent(l.current)*P);let V=u?f:n;if((u||w)&&(V=-V),$.current+=V,l.current!=null&&t.current){const S=ee($.current/P,0,1);r.setThumbPercent(l.current,S)}},onMoveEnd(){l.current!=null&&(r.setThumbDragging(l.current,!1),l.current=null)}});let x=m.useRef(void 0),s=(n,f,b,p)=>{if(t.current&&!e.isDisabled&&r.values.every((P,V)=>!r.isThumbDragging(V))){let{height:P,width:V,top:S,left:L}=t.current.getBoundingClientRect(),X=u?P:V,k=((u?p:b)-(u?S:L))/X;(g==="rtl"||u)&&(k=1-k);let E=r.getPercentValue(k),R,d=r.values.findIndex(K=>E-K<0);if(d===0)R=d;else if(d===-1)R=r.values.length-1;else{let K=r.values[d-1],I=r.values[d];Math.abs(K-E)<Math.abs(I-E)?R=d-1:R=d}R>=0&&r.isThumbEditable(R)?(n.preventDefault(),l.current=R,r.setFocusedThumb(R),x.current=f,r.setThumbDragging(l.current,!0),r.setThumbValue(R,E),v(window,"mouseup",T,!1),v(window,"touchend",T,!1),v(window,"pointerup",T,!1)):l.current=null}},T=n=>{var f,b;((b=n.pointerId)!==null&&b!==void 0?b:(f=n.changedTouches)===null||f===void 0?void 0:f[0].identifier)===x.current&&(l.current!=null&&(r.setThumbDragging(l.current,!1),l.current=null),D(window,"mouseup",T,!1),D(window,"touchend",T,!1),D(window,"pointerup",T,!1))};return"htmlFor"in c&&c.htmlFor&&(delete c.htmlFor,c.onClick=()=>{var n;(n=document.getElementById(Q(r,0)))===null||n===void 0||n.focus(),Le("keyboard")}),{labelProps:c,groupProps:{role:"group",...o},trackProps:A({onMouseDown(n){n.button!==0||n.altKey||n.ctrlKey||n.metaKey||s(n,void 0,n.clientX,n.clientY)},onPointerDown(n){n.pointerType==="mouse"&&(n.button!==0||n.altKey||n.ctrlKey||n.metaKey)||s(n,n.pointerId,n.clientX,n.clientY)},onTouchStart(n){s(n,n.changedTouches[0].identifier,n.changedTouches[0].clientX,n.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},i),outputProps:{htmlFor:r.values.map((n,f)=>Q(r,f)).join(" "),"aria-live":"off"}}}function Ne(e,r){let{index:t=0,isRequired:c,validationState:o,isInvalid:u,trackRef:h,inputRef:g,orientation:v=r.orientation,name:D}=e,l=e.isDisabled||r.isDisabled,w=v==="vertical",{direction:$}=_(),{addGlobalListener:i,removeGlobalListener:x}=Z(),s=ne.get(r);var T;const{labelProps:n,fieldProps:f}=ve({...e,id:Q(r,t),"aria-labelledby":`${s.id} ${(T=e["aria-labelledby"])!==null&&T!==void 0?T:""}`.trim()}),b=r.values[t],p=m.useCallback(()=>{g.current&&Fe(g.current)},[g]),P=r.focusedThumb===t;m.useEffect(()=>{P&&p()},[P,p]);let V=$==="rtl",S=m.useRef(null),{keyboardProps:L}=He({onKeyDown(d){let{getThumbMaxValue:K,getThumbMinValue:I,decrementThumb:H,incrementThumb:G,setThumbValue:a,setThumbDragging:y,pageSize:M}=r;if(!/^(PageUp|PageDown|Home|End)$/.test(d.key)){d.continuePropagation();return}switch(d.preventDefault(),y(t,!0),d.key){case"PageUp":G(t,M);break;case"PageDown":H(t,M);break;case"Home":a(t,I(t));break;case"End":a(t,K(t));break}y(t,!1)}}),{moveProps:X}=Me({onMoveStart(){S.current=null,r.setThumbDragging(t,!0)},onMove({deltaX:d,deltaY:K,pointerType:I,shiftKey:H}){const{getThumbPercent:G,setThumbPercent:a,decrementThumb:y,incrementThumb:M,step:U,pageSize:Y}=r;let{width:ke,height:Re}=h.current.getBoundingClientRect(),ie=w?Re:ke;if(S.current==null&&(S.current=G(t)*ie),I==="keyboard")d>0&&V||d<0&&!V||K>0?y(t,H?Y:U):M(t,H?Y:U);else{let J=w?K:d;(w||V)&&(J=-J),S.current+=J,a(t,ee(S.current/ie,0,1))}},onMoveEnd(){r.setThumbDragging(t,!1)}});r.setThumbEditable(t,!l);const{focusableProps:B}=je(A(e,{onFocus:()=>r.setFocusedThumb(t),onBlur:()=>r.setFocusedThumb(void 0)}),g);let F=m.useRef(void 0),z=d=>{p(),F.current=d,r.setThumbDragging(t,!0),i(window,"mouseup",k,!1),i(window,"touchend",k,!1),i(window,"pointerup",k,!1)},k=d=>{var K,I;((I=d.pointerId)!==null&&I!==void 0?I:(K=d.changedTouches)===null||K===void 0?void 0:K[0].identifier)===F.current&&(p(),r.setThumbDragging(t,!1),x(window,"mouseup",k,!1),x(window,"touchend",k,!1),x(window,"pointerup",k,!1))},E=r.getThumbPercent(t);(w||$==="rtl")&&(E=1-E);let R=l?{}:A(L,X,{onMouseDown:d=>{d.button!==0||d.altKey||d.ctrlKey||d.metaKey||z()},onPointerDown:d=>{d.button!==0||d.altKey||d.ctrlKey||d.metaKey||z(d.pointerId)},onTouchStart:d=>{z(d.changedTouches[0].identifier)}});return Ae(g,b,d=>{r.setThumbValue(t,d)}),{inputProps:A(B,f,{type:"range",tabIndex:l?void 0:0,min:r.getThumbMinValue(t),max:r.getThumbMaxValue(t),step:r.step,value:b,name:D,disabled:l,"aria-orientation":v,"aria-valuetext":r.getThumbValueLabel(t),"aria-required":c||void 0,"aria-invalid":u||o==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-describedby":[s["aria-describedby"],e["aria-describedby"]].filter(Boolean).join(" "),"aria-details":[s["aria-details"],e["aria-details"]].filter(Boolean).join(" "),onChange:d=>{r.setThumbValue(t,parseFloat(d.target.value))}}),thumbProps:{...R,style:{position:"absolute",[w?"top":"left"]:`${E*100}%`,transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:n,isDragging:r.isThumbDragging(t),isDisabled:l,isFocused:P}}const We=0,Je=100,Qe=1;function Ze(e){const{isDisabled:r=!1,minValue:t=We,maxValue:c=Je,numberFormatter:o,step:u=Qe,orientation:h="horizontal"}=e;let g=m.useMemo(()=>{let a=(c-t)/10;return a=q(a,0,a+u,u),Math.max(a,u)},[u,c,t]),v=m.useCallback(a=>a==null?void 0:a.map((y,M)=>{let U=M===0?t:y[M-1],Y=M===a.length-1?c:y[M+1];return q(y,U,Y,u)}),[t,c,u]),D=m.useMemo(()=>v(se(e.value)),[e.value]),l=m.useMemo(()=>{var a;return v((a=se(e.defaultValue))!==null&&a!==void 0?a:[t])},[e.defaultValue,t]),w=ce(e.value,e.defaultValue,e.onChange),$=ce(e.value,e.defaultValue,e.onChangeEnd);const[i,x]=Xe(D,l,w),[s,T]=m.useState(new Array(i.length).fill(!1)),n=m.useRef(new Array(i.length).fill(!0)),[f,b]=m.useState(void 0),p=m.useRef(i),P=m.useRef(s);let V=a=>{p.current=a,x(a)},S=a=>{P.current=a,T(a)};function L(a){return(a-t)/(c-t)}function X(a){return a===0?t:i[a-1]}function B(a){return a===i.length-1?c:i[a+1]}function F(a){return n.current[a]}function z(a,y){n.current[a]=y}function k(a,y){if(r||!F(a))return;const M=X(a),U=B(a);y=q(y,M,U,u);let Y=de(p.current,a,y);V(Y)}function E(a,y){if(r||!F(a))return;y&&(p.current=i);const M=P.current[a];P.current=de(P.current,a,y),S(P.current),$&&M&&!P.current.some(Boolean)&&$(p.current)}function R(a){return o.format(a)}function d(a,y){k(a,I(y))}function K(a){return Math.round((a-t)/u)*u+t}function I(a){const y=a*(c-t)+t;return ee(K(y),t,c)}function H(a,y=1){let M=Math.max(y,u);k(a,q(i[a]+M,t,c,u))}function G(a,y=1){let M=Math.max(y,u);k(a,q(i[a]-M,t,c,u))}return{values:i,getThumbValue:a=>i[a],setThumbValue:k,setThumbPercent:d,isThumbDragging:a=>s[a],setThumbDragging:E,focusedThumb:f,setFocusedThumb:b,getThumbPercent:a=>L(i[a]),getValuePercent:L,getThumbValueLabel:a=>R(i[a]),getFormattedValue:R,getThumbMinValue:X,getThumbMaxValue:B,getPercentValue:I,isThumbEditable:F,setThumbEditable:z,incrementThumb:H,decrementThumb:G,step:u,pageSize:g,orientation:h,isDisabled:r}}function de(e,r,t){return e[r]===t?e:[...e.slice(0,r),t,...e.slice(r+1)]}function se(e){if(e!=null)return Array.isArray(e)?e:[e]}function ce(e,r,t){return c=>{typeof e=="number"||typeof r=="number"?t==null||t(c[0]):t==null||t(c)}}const _e=m.createContext(null),ae=m.createContext(null),oe=m.createContext(null),et=m.createContext(null);function tt(e,r){[e,r]=$e(e,r,_e);let t=m.useRef(null),c=qe(e.formatOptions),o=Ze({...e,numberFormatter:c}),[u,h]=Te(),{groupProps:g,trackProps:v,labelProps:D,outputProps:l}=Oe({...e,label:h},o,t),w=te({...e,values:{orientation:o.orientation,isDisabled:o.isDisabled,state:o},defaultClassName:"react-aria-Slider"}),$=ye(e);return delete $.id,j.createElement(we,{values:[[ae,o],[oe,{...v,ref:t}],[et,l],[Pe,{...D,ref:u}]]},j.createElement("div",{...$,...g,...w,ref:r,slot:e.slot||void 0,"data-orientation":o.orientation,"data-disabled":o.isDisabled||void 0}))}const rt=m.forwardRef(tt);function nt(e,r){[e,r]=$e(e,r,oe);let t=m.useContext(ae),{onHoverStart:c,onHoverEnd:o,onHoverChange:u,...h}=e,{hoverProps:g,isHovered:v}=xe({onHoverStart:c,onHoverEnd:o,onHoverChange:u}),D=te({...e,defaultClassName:"react-aria-SliderTrack",values:{orientation:t.orientation,isDisabled:t.isDisabled,isHovered:v,state:t}});return j.createElement("div",{...A(h,g),...D,ref:r,"data-hovered":v||void 0,"data-orientation":t.orientation||void 0,"data-disabled":t.isDisabled||void 0})}const at=m.forwardRef(nt);function ot(e,r){let t=m.useContext(ae),{ref:c}=ze(oe),{index:o=0}=e,u=m.useRef(null),[h,g]=Te(),{thumbProps:v,inputProps:D,labelProps:l,isDragging:w,isFocused:$,isDisabled:i}=Ne({...e,index:o,trackRef:c,inputRef:u,label:g},t),{focusProps:x,isFocusVisible:s}=Ue(),{hoverProps:T,isHovered:n}=xe(e),f=te({...e,defaultClassName:"react-aria-SliderThumb",values:{state:t,isHovered:n,isDragging:w,isFocused:$,isFocusVisible:s,isDisabled:i}}),b=ye(e);return delete b.id,j.createElement("div",{...A(b,v,T),...f,ref:r,style:{...v.style,...f.style},"data-hovered":n||void 0,"data-dragging":w||void 0,"data-focused":$||void 0,"data-focus-visible":s||void 0,"data-disabled":i||void 0},j.createElement(Ge,null,j.createElement("input",{ref:u,...A(D,x)})),j.createElement(we,{values:[[Pe,{...l,ref:h}]]},f.children))}const it=m.forwardRef(ot),lt=re.div`
  width: 100%;
`,ut=re.div`
  ${()=>{const{tokens:{slider:e}}=De();return Ve`
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
`,dt=re.div`
  ${()=>{const{tokens:{slider:e}}=De();return Ve`
      padding: 0 ${e.track.padding} 0;
    `}}
`;function W(e){return C.jsx(ut,{children:C.jsx(rt,{...e})})}W.UI=()=>C.jsx(dt,{children:C.jsx(at,{children:C.jsx(it,{children:C.jsx(Be,{})})})});W.__docgenInfo={description:"",methods:[{name:"UI",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"SliderBase"};function Se(e){const{labelProps:{label:r,labelHint:t},defaultValue:c,onChange:o,testID:u="slider",...h}=e,g=m.useId(),v=D=>{if(o)try{const l=D[0];l&&o(l)}catch{o(D||0)}};return C.jsx(lt,{"data-testid":u,children:C.jsx(W,{...h,onChange:v,defaultValue:c||25,"aria-describedby":t?g:void 0,children:C.jsx(ue,{label:C.jsx(ue.Label,{text:r,component:Ye}),labelHint:t,labelHintID:g,children:C.jsx(W.UI,{})})})})}Se.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{labelProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  labelHint?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"labelHint",value:{name:"string",required:!1}}]}},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const st={title:"Components/Inputs/Slider",component:Se,argTypes:{defaultValue:{control:"number"}},args:{onChange:Ke()}},O={args:{defaultValue:30,labelProps:{label:"Label for Slider"}}},N={args:{defaultValue:30,labelProps:{label:"Label for Slider",labelHint:"Additional information"}}};var fe,be,me;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    labelProps: {
      label: "Label for Slider"
    }
  }
}`,...(me=(be=O.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var pe,he,ge;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    labelProps: {
      label: "Label for Slider",
      labelHint: "Additional information"
    }
  }
}`,...(ge=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const ct=["Basic","WithHint"],Tt=Object.freeze(Object.defineProperty({__proto__:null,Basic:O,WithHint:N,__namedExportsOrder:ct,default:st},Symbol.toStringTag,{value:"Module"}));export{O as B,Tt as S};
