import{a as p,u as g,b,j as r}from"./index-e76b8df1.js";import{a as Z}from"./index-583b5bb5.js";import{R as j,r as f}from"./index-c013ead5.js";import{T as u}from"./Typography-ab363d23.js";import{b as v}from"./index-19b017fb.js";function V(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=V(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function ee(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=V(e))&&(a&&(a+=" "),a+=t);return a}const Y=typeof document<"u"?j.useLayoutEffect:()=>{};function te(e){const t=f.useRef(null);return Y(()=>{t.current=e},[e]),f.useCallback((...n)=>{const a=t.current;return a(...n)},[])}let S=new Map;function ne(e,t){if(e===t)return e;let n=S.get(e);if(n)return n(t),t;let a=S.get(t);return a?(a(e),e):t}function ae(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}function oe(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let a=e[n];for(let o in a){let i=t[o],s=a[o];typeof i=="function"&&typeof s=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?t[o]=ae(i,s):(o==="className"||o==="UNSAFE_className")&&typeof i=="string"&&typeof s=="string"?t[o]=ee(i,s):o==="id"&&i&&s?t.id=ne(i,s):t[o]=s!==void 0?s:i}}return t}function re(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function ie(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function se(){return ie(/^Mac/i)}function le(){return re(/Android/i)}let x=new Map,C=new Set;function P(){if(typeof window>"u")return;let e=n=>{let a=x.get(n.target);a||(a=new Set,x.set(n.target,a),n.target.addEventListener("transitioncancel",t)),a.add(n.propertyName)},t=n=>{let a=x.get(n.target);if(a&&(a.delete(n.propertyName),a.size===0&&(n.target.removeEventListener("transitioncancel",t),x.delete(n.target)),x.size===0)){for(let o of C)o();C.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?P():document.addEventListener("DOMContentLoaded",P));function ce(e){return e.mozInputSource===0&&e.isTrusted?!0:le()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}const de=j.createContext({register:()=>{}});de.displayName="PressResponderContext";class be{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function ue(e){let t=f.useRef({isFocused:!1,observer:null});Y(()=>{const a=t.current;return()=>{a.observer&&(a.observer.disconnect(),a.observer=null)}},[]);let n=te(a=>{e==null||e(a)});return f.useCallback(a=>{if(a.target instanceof HTMLButtonElement||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement||a.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=a.target,i=s=>{t.current.isFocused=!1,o.disabled&&n(new be("blur",s)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var s;(s=t.current.observer)===null||s===void 0||s.disconnect();let c=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:c})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:c}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let fe=new Set,R=!1,m=!1,I=!1;function F(e,t){for(let n of fe)n(e,t)}function pe(e){return!(e.metaKey||!se()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function D(e){m=!0,pe(e)&&F("keyboard",e)}function y(e){(e.type==="mousedown"||e.type==="pointerdown")&&(m=!0,F("pointer",e))}function ge(e){ce(e)&&(m=!0)}function he(e){e.target===window||e.target===document||(!m&&!I&&F("virtual",e),m=!1,I=!1)}function $e(){m=!1,I=!0}function W(){if(typeof window>"u"||R)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){m=!0,e.apply(this,arguments)},document.addEventListener("keydown",D,!0),document.addEventListener("keyup",D,!0),document.addEventListener("click",ge,!0),window.addEventListener("focus",he,!0),window.addEventListener("blur",$e,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",y,!0),document.addEventListener("pointermove",y,!0),document.addEventListener("pointerup",y,!0)):(document.addEventListener("mousedown",y,!0),document.addEventListener("mousemove",y,!0),document.addEventListener("mouseup",y,!0)),R=!0}typeof document<"u"&&(document.readyState!=="loading"?W():document.addEventListener("DOMContentLoaded",W));function ve(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:a,onFocusWithinChange:o}=e,i=f.useRef({isFocusWithin:!1}),s=f.useCallback(l=>{i.current.isFocusWithin&&!l.currentTarget.contains(l.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(l),o&&o(!1))},[n,o,i]),c=ue(s),h=f.useCallback(l=>{!i.current.isFocusWithin&&document.activeElement===l.target&&(a&&a(l),o&&o(!0),i.current.isFocusWithin=!0,c(l))},[a,o,c]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:h,onBlur:s}}}const A={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function me(e={}){let{style:t,isFocusable:n}=e,[a,o]=f.useState(!1),{focusWithinProps:i}=ve({isDisabled:!n,onFocusWithinChange:c=>o(c)}),s=f.useMemo(()=>a?t:t?{...A,...t}:A,[a]);return{visuallyHiddenProps:{...i,style:s}}}function ye(e){let{children:t,elementType:n="div",isFocusable:a,style:o,...i}=e,{visuallyHiddenProps:s}=me(e);return j.createElement(n,oe(i,s),t)}const we=p.div`
  display: inline-grid;
  grid-auto-flow: column;
`,Te=p.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,xe=p.div`
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
`,ke=p.div`
  ${({$withIcon:e,$isActive:t})=>{const{tokens:n}=g(),{tabs:a}=n;return[b`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        background: ${a.tab.backgroundColor.base};

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
`,Le=p.div`
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
`,Ee=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      color: ${t.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${t.tab.secondaryLabel.color.disabled};
      }
    `}}
`,Ie=p.div`
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
`,je=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      width: ${t.tab.separator.width};
      background-color: ${t.tab.separator.color};
      margin-top: ${t.tab.separator.marginTop};
    `}}
`;function q(e){return`${e}-panel`}function Fe(e,t,n){let a=n;const o=t.filter(l=>!l.isDisabled),i=o[0],s=o[o.length-1],c=o.find(l=>l.id===n);if(!c)return a;const h=o.indexOf(c);switch(e.key){case"ArrowLeft":{const l=o[h-1];a=l?l.id:s?s.id:n;break}case"ArrowRight":{const l=o[h+1];a=l?l.id:i?i.id:n;break}case"Home":{a=i?i.id:n;break}case"End":{a=s?s.id:n;break}}return a}function M(e){const{items:t,activeItemId:n,onChange:a,testID:o="tabs",...i}=e,{tokens:s}=g(),{tabs:c}=s,h=f.useRef(new Map);function l(d){const{id:$}=d.currentTarget;$!==n&&a($)}function J(d){var w;const $=Fe(d,t,n);(w=h.current.get($))==null||w.focus(),a($)}return r.jsx(we,{...i,role:"tablist","data-testid":o,children:t.map((d,$)=>{const w=!!d.icon,T=d.id===n,Q=$===t.length-1;return r.jsxs(f.Fragment,{children:[r.jsxs(Te,{"data-testid":`${o}-tab`,children:[r.jsx(ye,{children:r.jsx("button",{ref:X=>h.current.set(d.id,X),type:"button",role:"tab",id:d.id,onClick:l,onKeyDown:J,disabled:d.isDisabled,tabIndex:T?void 0:-1,"aria-label":d.label,"aria-selected":T,"aria-controls":q(d.id)})}),r.jsxs(ke,{$withIcon:w,$isActive:T,children:[r.jsxs("div",{children:[r.jsx(Le,{$isActive:T,children:r.jsx(u,{component:"span",fontFamily:c.tab.label.fontFamily,variant:c.tab.label.typographyVariant,color:"inherit",children:d.label})}),d.secondaryLabel&&r.jsx(Ee,{children:r.jsx(u,{component:"span",variant:c.tab.secondaryLabel.typographyVariant,color:"inherit",children:d.secondaryLabel})})]}),w&&r.jsx(Ie,{$isActive:T,children:d.icon})]}),r.jsx(xe,{})]}),!Q&&r.jsx(je,{})]},d.id)})})}const Se=p.div`
  ${()=>{const{tokens:e}=g(),{tabs:t}=e;return b`
      border-top-width: ${t.panel.strokeTop.width};
      border-top-style: ${t.panel.strokeTop.style};
      border-top-color: ${t.panel.strokeTop.color};
    `}}
`,Ce=p.div`
  ${({$withIcon:e,$isActive:t,$withPadding:n})=>{const{tokens:a}=g(),{tabs:o}=a;return[b`
        display: ${t?"block":"none"};
        background: ${o.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${o.panel.focusRing.width};
          outline-style: ${o.panel.focusRing.style};
          outline-color: ${o.panel.focusRing.color};
        }
      `,n&&b`
          padding-top: ${o.panel.padding.top};
          padding-bottom: ${o.panel.padding.bottom};
          padding-left: ${o.panel.padding.left.base};
          padding-right: ${o.panel.padding.right.base};
        `,n&&e&&b`
          padding-left: ${o.panel.padding.left.withIcon};
          padding-right: ${o.panel.padding.right.withIcon};
        `]}}
`;function Pe(e){const{items:t,activeItemId:n,withPadding:a=!0,testID:o="tab-panels"}=e;return r.jsx(Se,{"data-testid":o,children:t.map(i=>{const s=!!i.icon,c=i.id===n;return r.jsx(Ce,{role:"tabpanel",id:q(i.id),tabIndex:c?0:-1,$withIcon:s,$isActive:c,$withPadding:a,"aria-labelledby":i.id,children:i.panel},i.id)})})}const Re={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:r.jsx(u,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:r.jsx(u,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:r.jsx(u,{children:"Tab panel 03"})}]},De={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:r.jsx(u,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{})},{id:"tab-disabled-02",label:"Tab label 02",panel:r.jsx(u,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{})},{id:"tab-disabled-03",label:"Tab label 03",panel:r.jsx(u,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:r.jsx(u,{children:"Tab panel 04"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{})}]},We={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:r.jsx(u,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:r.jsx(u,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:r.jsx(u,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:r.jsx(v,{})}]},{useArgs:Ae}=__STORYBOOK_MODULE_CLIENT_API__,Me={title:"Navigation/Tabs",component:M,render:function(t){const[,n]=Ae();function a(o){n({activeItemId:o}),Z("onChange")(o)}return r.jsxs(r.Fragment,{children:[r.jsx(M,{...t,onChange:a}),r.jsx(Pe,{activeItemId:t.activeItemId,items:t.items})]})},argTypes:{activeItemId:{type:"string"}}},k={args:{...Re}},L={args:{...De}},E={args:{...We}};var _,B,H;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(U=E.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const _e=["Basic","Disabled","WithIcon"],ze=Object.freeze(Object.defineProperty({__proto__:null,Basic:k,Disabled:L,WithIcon:E,__namedExportsOrder:_e,default:Me},Symbol.toStringTag,{value:"Module"}));export{k as B,L as D,ze as T,E as W};
