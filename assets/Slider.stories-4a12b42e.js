import{f as Ke}from"./index-6eef940f.js";import{j as C}from"./jsx-runtime-6eef64cc.js";import{r as m,R as j}from"./index-c013ead5.js";import{$ as ge,a as Ie}from"./Label-124a500a.js";import{a as Z,u as ve,b as $e}from"./index-f9091704.js";import{S as Ce}from"./index-b1778622.js";import{b as Ee,c as Le,$ as Te,d as ye,e as _,f as we,g as Pe,h as Fe,i as He}from"./utils-2b6b33fd.js";import{d as ie,$ as A}from"./useFocusWithin-94824ed6.js";import{f as ee,g as je,h as Ae,i as Xe,j as ze,k as xe}from"./useFocusable-a553ba2f.js";import{$ as Ue}from"./useNumberFormatter-0a8e56f3.js";import{b as q,c as Ye,d as te,e as De,$ as Ve,f as Be}from"./useLabel-5fa0df63.js";import{$ as Ge}from"./VisuallyHidden-02ab3b0d.js";import{I as le}from"./InputLabelTopBase-8a8a9bd8.js";const qe=0,Oe=100,Ne=1;function We(e){const{isDisabled:n=!1,minValue:t=qe,maxValue:c=Oe,numberFormatter:o,step:u=Ne,orientation:h="horizontal"}=e;let g=m.useMemo(()=>{let a=(c-t)/10;return a=q(a,0,a+u,u),Math.max(a,u)},[u,c,t]),v=m.useCallback(a=>a==null?void 0:a.map((y,S)=>{let U=S===0?t:y[S-1],Y=S===a.length-1?c:y[S+1];return q(y,U,Y,u)}),[t,c,u]),D=m.useMemo(()=>v(de(e.value)),[e.value]),l=m.useMemo(()=>{var a;return v((a=de(e.defaultValue))!==null&&a!==void 0?a:[t])},[e.defaultValue,t]),w=se(e.value,e.defaultValue,e.onChange),$=se(e.value,e.defaultValue,e.onChangeEnd);const[i,x]=Ye(D,l,w),[s,T]=m.useState(new Array(i.length).fill(!1)),r=m.useRef(new Array(i.length).fill(!0)),[f,b]=m.useState(void 0),p=m.useRef(i),P=m.useRef(s);let V=a=>{p.current=a,x(a)},M=a=>{P.current=a,T(a)};function L(a){return(a-t)/(c-t)}function X(a){return a===0?t:i[a-1]}function B(a){return a===i.length-1?c:i[a+1]}function F(a){return r.current[a]}function z(a,y){r.current[a]=y}function k(a,y){if(n||!F(a))return;const S=X(a),U=B(a);y=q(y,S,U,u);let Y=ue(p.current,a,y);V(Y)}function E(a,y){if(n||!F(a))return;y&&(p.current=i);const S=P.current[a];P.current=ue(P.current,a,y),M(P.current),$&&S&&!P.current.some(Boolean)&&$(p.current)}function R(a){return o.format(a)}function d(a,y){k(a,I(y))}function K(a){return Math.round((a-t)/u)*u+t}function I(a){const y=a*(c-t)+t;return te(K(y),t,c)}function H(a,y=1){let S=Math.max(y,u);k(a,q(i[a]+S,t,c,u))}function G(a,y=1){let S=Math.max(y,u);k(a,q(i[a]-S,t,c,u))}return{values:i,getThumbValue:a=>i[a],setThumbValue:k,setThumbPercent:d,isThumbDragging:a=>s[a],setThumbDragging:E,focusedThumb:f,setFocusedThumb:b,getThumbPercent:a=>L(i[a]),getValuePercent:L,getThumbValueLabel:a=>R(i[a]),getFormattedValue:R,getThumbMinValue:X,getThumbMaxValue:B,getPercentValue:I,isThumbEditable:F,setThumbEditable:z,incrementThumb:H,decrementThumb:G,step:u,pageSize:g,orientation:h,isDisabled:n}}function ue(e,n,t){return e[n]===t?e:[...e.slice(0,n),t,...e.slice(n+1)]}function de(e){if(e!=null)return Array.isArray(e)?e:[e]}function se(e,n,t){return c=>{typeof e=="number"||typeof n=="number"?t==null||t(c[0]):t==null||t(c)}}function Se(e){let{onMoveStart:n,onMove:t,onMoveEnd:c}=e,o=m.useRef({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:u,removeGlobalListener:h}=ee(),g=ie((l,w,$,i)=>{$===0&&i===0||(o.current.didMove||(o.current.didMove=!0,n==null||n({type:"movestart",pointerType:w,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey})),t==null||t({type:"move",pointerType:w,deltaX:$,deltaY:i,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))}),v=ie((l,w)=>{Ee(),o.current.didMove&&(c==null||c({type:"moveend",pointerType:w,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))});return{moveProps:m.useMemo(()=>{let l={},w=()=>{Le(),o.current.didMove=!1};if(typeof PointerEvent>"u"){let i=r=>{if(r.button===0){var f,b,p,P;g(r,"mouse",r.pageX-((p=(f=o.current.lastPosition)===null||f===void 0?void 0:f.pageX)!==null&&p!==void 0?p:0),r.pageY-((P=(b=o.current.lastPosition)===null||b===void 0?void 0:b.pageY)!==null&&P!==void 0?P:0)),o.current.lastPosition={pageX:r.pageX,pageY:r.pageY}}},x=r=>{r.button===0&&(v(r,"mouse"),h(window,"mousemove",i,!1),h(window,"mouseup",x,!1))};l.onMouseDown=r=>{r.button===0&&(w(),r.stopPropagation(),r.preventDefault(),o.current.lastPosition={pageX:r.pageX,pageY:r.pageY},u(window,"mousemove",i,!1),u(window,"mouseup",x,!1))};let s=r=>{let f=[...r.changedTouches].findIndex(({identifier:M})=>M===o.current.id);if(f>=0){var b,p;let{pageX:M,pageY:L}=r.changedTouches[f];var P,V;g(r,"touch",M-((P=(b=o.current.lastPosition)===null||b===void 0?void 0:b.pageX)!==null&&P!==void 0?P:0),L-((V=(p=o.current.lastPosition)===null||p===void 0?void 0:p.pageY)!==null&&V!==void 0?V:0)),o.current.lastPosition={pageX:M,pageY:L}}},T=r=>{[...r.changedTouches].findIndex(({identifier:b})=>b===o.current.id)>=0&&(v(r,"touch"),o.current.id=null,h(window,"touchmove",s),h(window,"touchend",T),h(window,"touchcancel",T))};l.onTouchStart=r=>{if(r.changedTouches.length===0||o.current.id!=null)return;let{pageX:f,pageY:b,identifier:p}=r.changedTouches[0];w(),r.stopPropagation(),r.preventDefault(),o.current.lastPosition={pageX:f,pageY:b},o.current.id=p,u(window,"touchmove",s,!1),u(window,"touchend",T,!1),u(window,"touchcancel",T,!1)}}else{let i=s=>{if(s.pointerId===o.current.id){var T,r;let p=s.pointerType||"mouse";var f,b;g(s,p,s.pageX-((f=(T=o.current.lastPosition)===null||T===void 0?void 0:T.pageX)!==null&&f!==void 0?f:0),s.pageY-((b=(r=o.current.lastPosition)===null||r===void 0?void 0:r.pageY)!==null&&b!==void 0?b:0)),o.current.lastPosition={pageX:s.pageX,pageY:s.pageY}}},x=s=>{if(s.pointerId===o.current.id){let T=s.pointerType||"mouse";v(s,T),o.current.id=null,h(window,"pointermove",i,!1),h(window,"pointerup",x,!1),h(window,"pointercancel",x,!1)}};l.onPointerDown=s=>{s.button===0&&o.current.id==null&&(w(),s.stopPropagation(),s.preventDefault(),o.current.lastPosition={pageX:s.pageX,pageY:s.pageY},o.current.id=s.pointerId,u(window,"pointermove",i,!1),u(window,"pointerup",x,!1),u(window,"pointercancel",x,!1))}}let $=(i,x,s)=>{w(),g(i,"keyboard",x,s),v(i,"keyboard")};return l.onKeyDown=i=>{switch(i.key){case"Left":case"ArrowLeft":i.preventDefault(),i.stopPropagation(),$(i,-1,0);break;case"Right":case"ArrowRight":i.preventDefault(),i.stopPropagation(),$(i,1,0);break;case"Up":case"ArrowUp":i.preventDefault(),i.stopPropagation(),$(i,0,-1);break;case"Down":case"ArrowDown":i.preventDefault(),i.stopPropagation(),$(i,0,1);break}},l},[o,u,h,g,v])}}const re=new WeakMap;function Q(e,n){let t=re.get(e);if(!t)throw new Error("Unknown slider state");return`${t.id}-${n}`}function Je(e,n,t){let{labelProps:c,fieldProps:o}=De(e),u=e.orientation==="vertical";var h;re.set(n,{id:(h=c.id)!==null&&h!==void 0?h:o.id,"aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]});let{direction:g}=Ve(),{addGlobalListener:v,removeGlobalListener:D}=ee();const l=m.useRef(null),w=g==="rtl",$=m.useRef(null),{moveProps:i}=Se({onMoveStart(){$.current=null},onMove({deltaX:r,deltaY:f}){let{height:b,width:p}=t.current.getBoundingClientRect(),P=u?b:p;$.current==null&&($.current=n.getThumbPercent(l.current)*P);let V=u?f:r;if((u||w)&&(V=-V),$.current+=V,l.current!=null&&t.current){const M=te($.current/P,0,1);n.setThumbPercent(l.current,M)}},onMoveEnd(){l.current!=null&&(n.setThumbDragging(l.current,!1),l.current=null)}});let x=m.useRef(void 0),s=(r,f,b,p)=>{if(t.current&&!e.isDisabled&&n.values.every((P,V)=>!n.isThumbDragging(V))){let{height:P,width:V,top:M,left:L}=t.current.getBoundingClientRect(),X=u?P:V,k=((u?p:b)-(u?M:L))/X;(g==="rtl"||u)&&(k=1-k);let E=n.getPercentValue(k),R,d=n.values.findIndex(K=>E-K<0);if(d===0)R=d;else if(d===-1)R=n.values.length-1;else{let K=n.values[d-1],I=n.values[d];Math.abs(K-E)<Math.abs(I-E)?R=d-1:R=d}R>=0&&n.isThumbEditable(R)?(r.preventDefault(),l.current=R,n.setFocusedThumb(R),x.current=f,n.setThumbDragging(l.current,!0),n.setThumbValue(R,E),v(window,"mouseup",T,!1),v(window,"touchend",T,!1),v(window,"pointerup",T,!1)):l.current=null}},T=r=>{var f,b;((b=r.pointerId)!==null&&b!==void 0?b:(f=r.changedTouches)===null||f===void 0?void 0:f[0].identifier)===x.current&&(l.current!=null&&(n.setThumbDragging(l.current,!1),l.current=null),D(window,"mouseup",T,!1),D(window,"touchend",T,!1),D(window,"pointerup",T,!1))};return"htmlFor"in c&&c.htmlFor&&(delete c.htmlFor,c.onClick=()=>{var r;(r=document.getElementById(Q(n,0)))===null||r===void 0||r.focus(),je("keyboard")}),{labelProps:c,groupProps:{role:"group",...o},trackProps:A({onMouseDown(r){r.button!==0||r.altKey||r.ctrlKey||r.metaKey||s(r,void 0,r.clientX,r.clientY)},onPointerDown(r){r.pointerType==="mouse"&&(r.button!==0||r.altKey||r.ctrlKey||r.metaKey)||s(r,r.pointerId,r.clientX,r.clientY)},onTouchStart(r){s(r,r.changedTouches[0].identifier,r.changedTouches[0].clientX,r.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},i),outputProps:{htmlFor:n.values.map((r,f)=>Q(n,f)).join(" "),"aria-live":"off"}}}function Qe(e,n){let{index:t=0,isRequired:c,validationState:o,isInvalid:u,trackRef:h,inputRef:g,orientation:v=n.orientation,name:D}=e,l=e.isDisabled||n.isDisabled,w=v==="vertical",{direction:$}=Ve(),{addGlobalListener:i,removeGlobalListener:x}=ee(),s=re.get(n);var T;const{labelProps:r,fieldProps:f}=De({...e,id:Q(n,t),"aria-labelledby":`${s.id} ${(T=e["aria-labelledby"])!==null&&T!==void 0?T:""}`.trim()}),b=n.values[t],p=m.useCallback(()=>{g.current&&Ae(g.current)},[g]),P=n.focusedThumb===t;m.useEffect(()=>{P&&p()},[P,p]);let V=$==="rtl",M=m.useRef(null),{keyboardProps:L}=Xe({onKeyDown(d){let{getThumbMaxValue:K,getThumbMinValue:I,decrementThumb:H,incrementThumb:G,setThumbValue:a,setThumbDragging:y,pageSize:S}=n;if(!/^(PageUp|PageDown|Home|End)$/.test(d.key)){d.continuePropagation();return}switch(d.preventDefault(),y(t,!0),d.key){case"PageUp":G(t,S);break;case"PageDown":H(t,S);break;case"Home":a(t,I(t));break;case"End":a(t,K(t));break}y(t,!1)}}),{moveProps:X}=Se({onMoveStart(){M.current=null,n.setThumbDragging(t,!0)},onMove({deltaX:d,deltaY:K,pointerType:I,shiftKey:H}){const{getThumbPercent:G,setThumbPercent:a,decrementThumb:y,incrementThumb:S,step:U,pageSize:Y}=n;let{width:ke,height:Re}=h.current.getBoundingClientRect(),oe=w?Re:ke;if(M.current==null&&(M.current=G(t)*oe),I==="keyboard")d>0&&V||d<0&&!V||K>0?y(t,H?Y:U):S(t,H?Y:U);else{let J=w?K:d;(w||V)&&(J=-J),M.current+=J,a(t,te(M.current/oe,0,1))}},onMoveEnd(){n.setThumbDragging(t,!1)}});n.setThumbEditable(t,!l);const{focusableProps:B}=ze(A(e,{onFocus:()=>n.setFocusedThumb(t),onBlur:()=>n.setFocusedThumb(void 0)}),g);let F=m.useRef(void 0),z=d=>{p(),F.current=d,n.setThumbDragging(t,!0),i(window,"mouseup",k,!1),i(window,"touchend",k,!1),i(window,"pointerup",k,!1)},k=d=>{var K,I;((I=d.pointerId)!==null&&I!==void 0?I:(K=d.changedTouches)===null||K===void 0?void 0:K[0].identifier)===F.current&&(p(),n.setThumbDragging(t,!1),x(window,"mouseup",k,!1),x(window,"touchend",k,!1),x(window,"pointerup",k,!1))},E=n.getThumbPercent(t);(w||$==="rtl")&&(E=1-E);let R=l?{}:A(L,X,{onMouseDown:d=>{d.button!==0||d.altKey||d.ctrlKey||d.metaKey||z()},onPointerDown:d=>{d.button!==0||d.altKey||d.ctrlKey||d.metaKey||z(d.pointerId)},onTouchStart:d=>{z(d.changedTouches[0].identifier)}});return Be(g,b,d=>{n.setThumbValue(t,d)}),{inputProps:A(B,f,{type:"range",tabIndex:l?void 0:0,min:n.getThumbMinValue(t),max:n.getThumbMaxValue(t),step:n.step,value:b,name:D,disabled:l,"aria-orientation":v,"aria-valuetext":n.getThumbValueLabel(t),"aria-required":c||void 0,"aria-invalid":u||o==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-describedby":[s["aria-describedby"],e["aria-describedby"]].filter(Boolean).join(" "),"aria-details":[s["aria-details"],e["aria-details"]].filter(Boolean).join(" "),onChange:d=>{n.setThumbValue(t,parseFloat(d.target.value))}}),thumbProps:{...R,style:{position:"absolute",[w?"top":"left"]:`${E*100}%`,transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:r,isDragging:n.isThumbDragging(t),isDisabled:l,isFocused:P}}const Ze=m.createContext(null),ne=m.createContext(null),ae=m.createContext(null),_e=m.createContext(null);function et(e,n){[e,n]=Te(e,n,Ze);let t=m.useRef(null),c=Ue(e.formatOptions),o=We({...e,numberFormatter:c}),[u,h]=ye(),{groupProps:g,trackProps:v,labelProps:D,outputProps:l}=Je({...e,label:h},o,t),w=_({...e,values:{orientation:o.orientation,isDisabled:o.isDisabled,state:o},defaultClassName:"react-aria-Slider"}),$=xe(e);return delete $.id,j.createElement(we,{values:[[ne,o],[ae,{...v,ref:t}],[_e,l],[ge,{...D,ref:u}]]},j.createElement("div",{...$,...g,...w,ref:n,slot:e.slot||void 0,"data-orientation":o.orientation,"data-disabled":o.isDisabled||void 0}))}const tt=m.forwardRef(et);function rt(e,n){[e,n]=Te(e,n,ae);let t=m.useContext(ne),{onHoverStart:c,onHoverEnd:o,onHoverChange:u,...h}=e,{hoverProps:g,isHovered:v}=Pe({onHoverStart:c,onHoverEnd:o,onHoverChange:u}),D=_({...e,defaultClassName:"react-aria-SliderTrack",values:{orientation:t.orientation,isDisabled:t.isDisabled,isHovered:v,state:t}});return j.createElement("div",{...A(h,g),...D,ref:n,"data-hovered":v||void 0,"data-orientation":t.orientation||void 0,"data-disabled":t.isDisabled||void 0})}const nt=m.forwardRef(rt);function at(e,n){let t=m.useContext(ne),{ref:c}=Fe(ae),{index:o=0}=e,u=m.useRef(null),[h,g]=ye(),{thumbProps:v,inputProps:D,labelProps:l,isDragging:w,isFocused:$,isDisabled:i}=Qe({...e,index:o,trackRef:c,inputRef:u,label:g},t),{focusProps:x,isFocusVisible:s}=He(),{hoverProps:T,isHovered:r}=Pe(e),f=_({...e,defaultClassName:"react-aria-SliderThumb",values:{state:t,isHovered:r,isDragging:w,isFocused:$,isFocusVisible:s,isDisabled:i}}),b=xe(e);return delete b.id,j.createElement("div",{...A(b,v,T),...f,ref:n,style:{...v.style,...f.style},"data-hovered":r||void 0,"data-dragging":w||void 0,"data-focused":$||void 0,"data-focus-visible":s||void 0,"data-disabled":i||void 0},j.createElement(Ge,null,j.createElement("input",{ref:u,...A(D,x)})),j.createElement(we,{values:[[ge,{...l,ref:h}]]},f.children))}const ot=m.forwardRef(at),it=Z.div`
  width: 100%;
`,lt=Z.div`
  ${()=>{const{tokens:{slider:e}}=ve();return $e`
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
`,ut=Z.div`
  ${()=>{const{tokens:{slider:e}}=ve();return $e`
      padding: 0 ${e.track.padding} 0;
    `}}
`;function W(e){return C.jsx(lt,{children:C.jsx(tt,{...e})})}W.UI=()=>C.jsx(ut,{children:C.jsx(nt,{children:C.jsx(ot,{children:C.jsx(Ce,{})})})});W.__docgenInfo={description:"",methods:[{name:"UI",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"SliderBase"};function Me(e){const{labelProps:{label:n,labelHint:t},defaultValue:c,onChange:o,testID:u="slider",...h}=e,g=m.useId(),v=D=>{if(o)try{const l=D[0];l&&o(l)}catch{o(D||0)}};return C.jsx(it,{"data-testid":u,children:C.jsx(W,{...h,onChange:v,defaultValue:c||25,"aria-describedby":t?g:void 0,children:C.jsx(le,{label:C.jsx(le.Label,{text:n,component:Ie}),labelHint:t,labelHintID:g,children:C.jsx(W.UI,{})})})})}Me.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{labelProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  labelHint?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"labelHint",value:{name:"string",required:!1}}]}},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const dt={title:"Components/Inputs/Slider",component:Me,argTypes:{defaultValue:{control:"number"}},args:{onChange:Ke()}},O={args:{defaultValue:30,labelProps:{label:"Label for Slider"}}},N={args:{defaultValue:30,labelProps:{label:"Label for Slider",labelHint:"Additional information"}}};var ce,fe,be;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    labelProps: {
      label: "Label for Slider"
    }
  }
}`,...(be=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var me,pe,he;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    labelProps: {
      label: "Label for Slider",
      labelHint: "Additional information"
    }
  }
}`,...(he=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const st=["Basic","WithHint"],xt=Object.freeze(Object.defineProperty({__proto__:null,Basic:O,WithHint:N,__namedExportsOrder:st,default:dt},Symbol.toStringTag,{value:"Module"}));export{O as B,xt as S};
