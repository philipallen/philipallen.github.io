import{j as d}from"./jsx-runtime-sfY7k0Xq.js";import{r as s}from"./index-CcKhGcwW.js";import{c as S}from"./FocusScope-BJNVAOd7.js";import{O as k}from"./OverlayContext-DE6V0lcf.js";import{a as h,u as f,b as c}from"./index-Dwsyfx_g.js";import{n as E}from"./utils-mOq_cyPo.js";import{a as j}from"./usePreventScroll-CWak9jJX.js";let r=typeof document<"u"&&window.visualViewport;function y(){let o=E(),[e,t]=s.useState(()=>o?{width:0,height:0}:$());return s.useEffect(()=>{let i=()=>{t(n=>{let a=$();return a.width===n.width&&a.height===n.height?n:a})};return r?r.addEventListener("resize",i):window.addEventListener("resize",i),()=>{r?r.removeEventListener("resize",i):window.removeEventListener("resize",i)}},[]),e}function $(){return{width:r&&(r==null?void 0:r.width)||window.innerWidth,height:r&&(r==null?void 0:r.height)||window.innerHeight}}const R=h.dialog`
  ${()=>{const{tokens:o}=f(),{modal:e}=o;return c`
      display: none;
      align-items: end;
      justify-items: center;
      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;
      border: none;
      padding: 0;
      background: none;
      outline: none;

      &[open] {
        display: grid;
      }

      @media (min-width: ${e.breakpoints.tablet}) {
        align-items: center;
        max-width: calc(100vw - (${e.padding.tablet} * 2));
        max-height: calc(100vh - (${e.padding.tablet} * 2));
      }

      &::backdrop {
        background: ${e.backdrop.backgroundColor};
      }
    `}}
`,I=h.div`
  ${()=>{const{tokens:o}=f(),{modal:e}=o,t=parseInt(e.maxHeight.tablet)+parseInt(e.padding.tablet)*2+"px";return c`
      min-height: ${e.minHeight.mobile};
      max-height: ${e.maxHeight.mobile};
      overflow-wrap: anywhere;

      @media (min-width: ${e.breakpoints.tablet}) {
        min-height: ${e.minHeight.tablet};
        max-height: calc(100vh - (${e.padding.tablet} * 2));

        @media (min-height: ${t}) {
          max-height: ${e.maxHeight.tablet};
        }
      }
    `}}
`,V=h(I)`
  ${({$tabletWidth:o})=>{const{tokens:e}=f(),{modal:t}=e,{width:i}=y(),n=i-parseInt(t.padding.tablet,10)*2;return c`
      width: ${t.width.mobile};
      min-width: ${t.minWidth.mobile-parseInt(t.padding.mobile,10)*2};
      max-width: ${t.maxWidth.mobile};
      border-top-left-radius: ${t.radius};
      border-top-right-radius: ${t.radius};
      background: ${t.backgroundColor};
      overflow: hidden;

      @media (min-width: ${t.breakpoints.tablet}) {
        width: ${o&&o<n?`${o}px`:t.width.tablet};
        min-width: ${t.minWidth.tablet};
        max-width: ${t.maxWidth.tablet};
        border-bottom-left-radius: ${t.radius};
        border-bottom-right-radius: ${t.radius};
      }
    `}}
`;function C(o,e){s.useEffect(()=>{const t=o.current;t&&(e&&!t.open?(t.showModal(),t.focus()):!e&&t.open&&t.close())},[e])}function H(o,e){s.useEffect(()=>{const t=o.current;function i(n){n.key==="Escape"&&(n.preventDefault(),e==null||e())}if(t)return t.addEventListener("keydown",i),()=>{t.removeEventListener("keydown",i)}},[e])}function z(){return/android|ipad|iphone/i.test(navigator.userAgent)}function G(o){const{isOpen:e,onRequestClose:t,children:i,testID:n="modal",tabletWidth:a,...b}=o,l=s.useRef(null),[m,u]=s.useState();function x(w){w&&u(w)}C(l,e),H(l,t);const v=w=>{w.stopPropagation()};j({isDisabled:!e});let p=d.jsx(R,{...b,ref:l,"aria-modal":!0,"data-testid":n,onClick:t,children:d.jsxs(V,{onClick:v,$tabletWidth:a,children:[i,d.jsx("div",{ref:x})]})});return z()||(p=d.jsx(S,{contain:e,restoreFocus:!0,children:p})),d.jsx(k,{portalElement:m,children:p})}const L=h.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,g=h.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,W=h(g)`
  ${({$visible:o})=>{const{tokens:e}=f(),{scrollShadowContainer:t}=e;return[c`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,o&&c`
          transform: translateY(0px);
        `]}}
`,D=h(g)`
  ${({$visible:o})=>{const{tokens:e}=f(),{scrollShadowContainer:t}=e;return[c`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,o&&c`
          transform: translateY(0px);
        `]}}
`,M=h.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:e,trackColor:t}}}=f();return c`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${e} ${t};

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;function O(o){const e=s.useRef(null),t=s.useRef(null),[i,n]=s.useState(!1),[a,b]=s.useState(!1);return s.useEffect(()=>{o==null||o({topShadowVisible:i,bottomShadowVisible:a})},[o,i,a]),s.useEffect(()=>{if(!e.current||!t.current)return;const l=new IntersectionObserver(([u])=>{u&&n(!u.isIntersecting)}),m=new IntersectionObserver(([u])=>{u&&b(!u.isIntersecting)});return l.observe(e.current),m.observe(t.current),()=>{l.disconnect(),m.disconnect()}},[]),{topShadowRef:e,bottomShadowRef:t,topShadowVisible:i,bottomShadowVisible:a}}function J(o){const{tabIndex:e,onChange:t,children:i}=o,{topShadowRef:n,bottomShadowRef:a,topShadowVisible:b,bottomShadowVisible:l}=O(t);return d.jsxs(L,{children:[d.jsx(W,{$visible:b,"aria-hidden":!0}),d.jsxs(M,{tabIndex:e,children:[d.jsx("div",{ref:n}),i,d.jsx("div",{ref:a})]}),d.jsx(D,{$visible:l,"aria-hidden":!0})]})}export{I as C,G as M,J as S};
