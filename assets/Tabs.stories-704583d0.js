import{a as p,u as g,b,j as r}from"./index-e4c57c99.js";import{a as X}from"./index-583b5bb5.js";import{R as j,r as f}from"./index-c013ead5.js";import{T as u}from"./Typography-2bd14f01.js";import{b as $}from"./index-e1b96a7a.js";function V(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=V(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Z(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=V(e))&&(a&&(a+=" "),a+=t);return a}const Y=typeof document<"u"?j.useLayoutEffect:()=>{};function ee(e){const t=f.useRef(null);return Y(()=>{t.current=e},[e]),f.useCallback((...n)=>{const a=t.current;return a(...n)},[])}let S=new Map;function te(e,t){if(e===t)return e;let n=S.get(e);if(n)return n(t),t;let a=S.get(t);return a?(a(e),e):t}function ne(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}function ae(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let a=e[n];for(let o in a){let i=t[o],s=a[o];typeof i=="function"&&typeof s=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?t[o]=ne(i,s):(o==="className"||o==="UNSAFE_className")&&typeof i=="string"&&typeof s=="string"?t[o]=Z(i,s):o==="id"&&i&&s?t.id=te(i,s):t[o]=s!==void 0?s:i}}return t}function oe(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function re(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function ie(){return re(/^Mac/i)}function se(){return oe(/Android/i)}let x=new Map,C=new Set;function P(){if(typeof window>"u")return;let e=n=>{let a=x.get(n.target);a||(a=new Set,x.set(n.target,a),n.target.addEventListener("transitioncancel",t)),a.add(n.propertyName)},t=n=>{let a=x.get(n.target);if(a&&(a.delete(n.propertyName),a.size===0&&(n.target.removeEventListener("transitioncancel",t),x.delete(n.target)),x.size===0)){for(let o of C)o();C.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?P():document.addEventListener("DOMContentLoaded",P));function le(e){return e.mozInputSource===0&&e.isTrusted?!0:se()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}const ce=j.createContext({register:()=>{}});ce.displayName="PressResponderContext";class de{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function be(e){let t=f.useRef({isFocused:!1,observer:null});Y(()=>{const a=t.current;return()=>{a.observer&&(a.observer.disconnect(),a.observer=null)}},[]);let n=ee(a=>{e==null||e(a)});return f.useCallback(a=>{if(a.target instanceof HTMLButtonElement||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement||a.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=a.target,i=s=>{t.current.isFocused=!1,o.disabled&&n(new de("blur",s)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var s;(s=t.current.observer)===null||s===void 0||s.disconnect();let d=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:d})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:d}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let ue=new Set,D=!1,v=!1,I=!1;function F(e,t){for(let n of ue)n(e,t)}function fe(e){return!(e.metaKey||!ie()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function R(e){v=!0,fe(e)&&F("keyboard",e)}function y(e){(e.type==="mousedown"||e.type==="pointerdown")&&(v=!0,F("pointer",e))}function pe(e){le(e)&&(v=!0)}function ge(e){e.target===window||e.target===document||(!v&&!I&&F("virtual",e),v=!1,I=!1)}function he(){v=!1,I=!0}function W(){if(typeof window>"u"||D)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){v=!0,e.apply(this,arguments)},document.addEventListener("keydown",R,!0),document.addEventListener("keyup",R,!0),document.addEventListener("click",pe,!0),window.addEventListener("focus",ge,!0),window.addEventListener("blur",he,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",y,!0),document.addEventListener("pointermove",y,!0),document.addEventListener("pointerup",y,!0)):(document.addEventListener("mousedown",y,!0),document.addEventListener("mousemove",y,!0),document.addEventListener("mouseup",y,!0)),D=!0}typeof document<"u"&&(document.readyState!=="loading"?W():document.addEventListener("DOMContentLoaded",W));function $e(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:a,onFocusWithinChange:o}=e,i=f.useRef({isFocusWithin:!1}),s=f.useCallback(l=>{i.current.isFocusWithin&&!l.currentTarget.contains(l.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(l),o&&o(!1))},[n,o,i]),d=be(s),m=f.useCallback(l=>{!i.current.isFocusWithin&&document.activeElement===l.target&&(a&&a(l),o&&o(!0),i.current.isFocusWithin=!0,d(l))},[a,o,d]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:m,onBlur:s}}}const A={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function ve(e={}){let{style:t,isFocusable:n}=e,[a,o]=f.useState(!1),{focusWithinProps:i}=$e({isDisabled:!n,onFocusWithinChange:d=>o(d)}),s=f.useMemo(()=>a?t:t?{...A,...t}:A,[a]);return{visuallyHiddenProps:{...i,style:s}}}function me(e){let{children:t,elementType:n="div",isFocusable:a,style:o,...i}=e,{visuallyHiddenProps:s}=ve(e);return j.createElement(n,ae(i,s),t)}const ye=p.div`
  display: inline-grid;
  grid-auto-flow: column;
`,we=p.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,Te=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      display: none;
      border-top-left-radius: ${t.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${t.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${t.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${t.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${t.tab.focusRing.width};
        outline-style: ${t.tab.focusRing.style};
        outline-color: ${t.tab.focusRing.color};
        outline-offset: ${t.tab.focusRing.offset};
      }
    `}}
`,xe=p.div`
  ${({$withIcon:e,$isActive:t})=>{const{tokens:n}=g(),{tabs:a}=n;return[b`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        border-top-left-radius: ${a.tab.radius.topLeft};
        border-top-right-radius: ${a.tab.radius.topLeft};
        border-top-width: ${a.tab.strokeTop.width};
        border-top-style: ${a.tab.strokeTop.style};
        border-top-color: ${a.tab.strokeTop.color.base};

        padding-top: ${a.tab.padding.top};
        padding-bottom: ${a.tab.padding.bottom};
        padding-left: ${a.tab.padding.left.base};
        padding-right: ${a.tab.padding.right.base};

        label:hover && {
          background: ${a.tab.backgroundColor.hover};
        }

        label:has(button:active) && {
          outline-width: ${a.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${a.tab.activeRing.color};
          outline-offset: ${a.tab.activeRing.offset};
        }

        user-select: none;
      `,e&&b`
          padding-left: ${a.tab.padding.left.withIcon};
          padding-right: ${a.tab.padding.right.withIcon};
        `,t&&b`
          background: ${a.tab.backgroundColor.active};
          border-top-color: ${a.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${a.tab.backgroundColor.active};
          }
        `]}}
`,ke=p.div`
  ${({$isActive:e})=>{const{tokens:t}=g(),{tabs:n}=t;return[b`
        color: ${n.tab.label.color.base};

        label:hover && {
          color: ${n.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${n.tab.label.color.disabled};
        }
      `,e&&b`
          color: ${n.tab.label.color.active};

          label:hover && {
            color: ${n.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${n.tab.label.color.disabled};
          }
        `]}}
`,Le=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      color: ${t.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${t.tab.secondaryLabel.color.disabled};
      }
    `}}
`,Ee=p.div`
  ${({$isActive:e})=>{const{tokens:t}=g(),{tabs:n}=t;return[b`
        display: grid;
        place-items: center;

        svg {
          width: ${n.tab.icon.width};
          height: ${n.tab.icon.height};
          color: ${n.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${n.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${n.tab.icon.color.disabled};
          }
        }
      `,e&&b`
          svg {
            color: ${n.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${n.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${n.tab.icon.color.disabled};
            }
          }
        `]}}
`,Ie=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      width: ${t.tab.separator.width};
      background-color: ${t.tab.separator.color};
      margin-top: ${t.tab.separator.marginTop};
    `}}
`;function q(e){return`${e}-panel`}function je(e,t,n){let a=n;const o=t.filter(l=>!l.isDisabled),i=o[0],s=o[o.length-1],d=o.find(l=>l.id===n);if(!d)return a;const m=o.indexOf(d);switch(e.key){case"ArrowLeft":{const l=o[m-1];a=l?l.id:s?s.id:n;break}case"ArrowRight":{const l=o[m+1];a=l?l.id:i?i.id:n;break}case"Home":{a=i?i.id:n;break}case"End":{a=s?s.id:n;break}}return a}function M(e){const{items:t,activeItemId:n,onChange:a,testID:o="tabs"}=e,{tokens:i}=g(),{tabs:s}=i,d=f.useRef(new Map);function m(c){const{id:h}=c.currentTarget;h!==n&&a(h)}function l(c){var w;const h=je(c,t,n);(w=d.current.get(h))==null||w.focus(),a(h)}return r.jsx(ye,{role:"tablist","data-testid":o,children:t.map((c,h)=>{const w=!!c.icon,T=c.id===n,J=h===t.length-1;return r.jsxs(f.Fragment,{children:[r.jsxs(we,{"data-testid":`${o}-tab`,children:[r.jsx(me,{children:r.jsx("button",{ref:Q=>d.current.set(c.id,Q),type:"button",role:"tab",id:c.id,onClick:m,onKeyDown:l,disabled:c.isDisabled,tabIndex:T?void 0:-1,"aria-label":c.label,"aria-selected":T,"aria-controls":q(c.id)})}),r.jsxs(xe,{$withIcon:w,$isActive:T,children:[r.jsxs("div",{children:[r.jsx(ke,{$isActive:T,children:r.jsx(u,{component:"span",variant:s.tab.label.typographyVariant,fontFamily:s.tab.label.fontFamily,color:"inherit",children:c.label})}),c.secondaryLabel&&r.jsx(Le,{children:r.jsx(u,{component:"span",variant:s.tab.secondaryLabel.typographyVariant,color:"inherit",children:c.secondaryLabel})})]}),w&&r.jsx(Ee,{$isActive:T,children:c.icon})]}),r.jsx(Te,{})]}),!J&&r.jsx(Ie,{})]},c.id)})})}const Fe=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      border-top-width: ${t.panel.strokeTop.width};
      border-top-style: ${t.panel.strokeTop.style};
      border-top-color: ${t.panel.strokeTop.color};
    `}}
`,Se=p.div`
  ${({$withIcon:e,$isActive:t,$withPadding:n})=>{const{tokens:a}=g(),{tabs:o}=a;return[b`
        display: ${t?"block":"none"};
        background: ${o.panel.backgroundColor};
      `,n&&b`
          padding-top: ${o.panel.padding.top};
          padding-bottom: ${o.panel.padding.bottom};
          padding-left: ${o.panel.padding.left.base};
          padding-right: ${o.panel.padding.right.base};
        `,n&&e&&b`
          padding-left: ${o.panel.padding.left.withIcon};
          padding-right: ${o.panel.padding.right.withIcon};
        `]}}
`;function Ce(e){const{items:t,activeItemId:n,withPadding:a=!0,testID:o="tab-panels"}=e;return r.jsx(Fe,{"data-testid":o,children:t.map(i=>{const s=!!i.icon,d=i.id===n;return r.jsx(Se,{role:"tabpanel",id:q(i.id),$withIcon:s,$isActive:d,$withPadding:a,"aria-labelledby":i.id,children:i.panel},i.id)})})}const Pe={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:r.jsx(u,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:r.jsx(u,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:r.jsx(u,{children:"Tab panel 03"})}]},De={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:r.jsx(u,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:r.jsx($,{})},{id:"tab-disabled-02",label:"Tab label 02",panel:r.jsx(u,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:r.jsx($,{})},{id:"tab-disabled-03",label:"Tab label 03",panel:r.jsx(u,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:r.jsx($,{}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:r.jsx(u,{children:"Tab panel 04"}),secondaryLabel:"Secondary label",icon:r.jsx($,{})}]},Re={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:r.jsx(u,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:r.jsx($,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:r.jsx(u,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:r.jsx($,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:r.jsx(u,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:r.jsx($,{})}]},{useArgs:We}=__STORYBOOK_MODULE_CLIENT_API__,Ae={title:"Navigation/Tabs",component:M,render:function(t){const[,n]=We();function a(o){n({activeItemId:o}),X("onChange")(o)}return r.jsxs(r.Fragment,{children:[r.jsx(M,{...t,onChange:a}),r.jsx(Ce,{activeItemId:t.activeItemId,items:t.items})]})},argTypes:{activeItemId:{type:"string"}}},k={args:{...Pe}},L={args:{...De}},E={args:{...Re}};var _,B,H;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(H=(B=k.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var O,K,N;L.parameters={...L.parameters,docs:{...(O=L.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(N=(K=L.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var z,U,G;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(G=(U=E.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const Me=["Basic","Disabled","WithIcon"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Basic:k,Disabled:L,WithIcon:E,__namedExportsOrder:Me,default:Ae},Symbol.toStringTag,{value:"Module"}));export{k as B,L as D,Ne as T,E as W};
