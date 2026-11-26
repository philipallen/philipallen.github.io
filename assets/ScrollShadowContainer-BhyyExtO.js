import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BVaTkfsr.js";import{e as E}from"./FocusScope-BGzDYkwk.js";import{a as y}from"./usePreventScroll-DTukBpkF.js";import{O as j}from"./OverlayContext-cry3RCsh.js";import{u as m,i as a,a as l}from"./index-BRwMcuml.js";import{$ as R}from"./useViewportSize-CzMOswiL.js";const I=l.dialog`
  ${()=>{const{tokens:e}=m(),{modal:t}=e;return a`
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

      @media (min-width: ${t.breakpoints.tablet}) {
        align-items: center;
        max-width: calc(100vw - (${t.padding.tablet} * 2));
        max-height: calc(100vh - (${t.padding.tablet} * 2));
      }

      &::backdrop {
        background: ${t.backdrop.backgroundColor};
      }
    `}}
`,V=l.div`
  ${()=>{const{tokens:e}=m(),{modal:t}=e,o=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return a`
      min-height: ${t.minHeight.mobile};
      max-height: ${t.maxHeight.mobile};
      overflow-wrap: anywhere;

      @media (min-width: ${t.breakpoints.tablet}) {
        min-height: ${t.minHeight.tablet};
        max-height: calc(100vh - (${t.padding.tablet} * 2));

        @media (min-height: ${o}) {
          max-height: ${t.maxHeight.tablet};
        }
      }
    `}}
`,H=l(V)`
  ${({$viewportWidth:e,$tabletWidth:t})=>{const{tokens:o}=m(),{modal:n}=o,r=e-parseInt(n.padding.tablet,10)*2;return a`
      width: ${n.width.mobile};
      min-width: ${n.minWidth.mobile-parseInt(n.padding.mobile,10)*2};
      max-width: ${n.maxWidth.mobile};
      border-top-left-radius: ${n.radius};
      border-top-right-radius: ${n.radius};
      background: ${n.backgroundColor};
      overflow: hidden;

      @media (min-width: ${n.breakpoints.tablet}) {
        width: ${t&&t<r?`${t}px`:n.width.tablet};
        min-width: ${n.minWidth.tablet};
        max-width: ${n.maxWidth.tablet};
        border-bottom-left-radius: ${n.radius};
        border-bottom-right-radius: ${n.radius};
      }
    `}}
`,C=i.forwardRef((e,t)=>{const{width:o}=R();return s.jsx(H,{...e,ref:t,$viewportWidth:o})});function W(e,t){i.useEffect(()=>{const o=e.current;o&&(t&&!o.open?(o.showModal(),o.focus()):!t&&o.open&&o.close())},[t])}function D(e,t){i.useEffect(()=>{const o=e.current;function n(r){r.key==="Escape"&&(r.preventDefault(),t==null||t())}if(o)return o.addEventListener("keydown",n),()=>{o.removeEventListener("keydown",n)}},[t])}function g(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function Q(e){const{isOpen:t,onRequestClose:o,children:n,testID:r="modal",tabletWidth:d,...p}=e,c=i.useRef(null),u=i.useRef(null),[h,v]=i.useState();function S(b){b&&v(b)}W(c,t),D(c,o),i.useEffect(()=>{if(!t||g())return;const b=requestAnimationFrame(()=>{const f=c.current,x=u.current;f&&document.activeElement===f?(f.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')??x??f).focus():x&&!(f!=null&&f.contains(document.activeElement))&&x.focus()});return()=>cancelAnimationFrame(b)},[t]);const k=b=>{b.stopPropagation()};y({isDisabled:!t});let w=s.jsx(I,{...p,ref:c,closedby:"none","aria-modal":!0,tabIndex:-1,"data-testid":r,onClick:o,children:s.jsxs(C,{ref:u,tabIndex:-1,onClick:k,$tabletWidth:d,children:[n,s.jsx("div",{ref:S})]})});return g()||(w=s.jsx(E,{contain:t,restoreFocus:!0,children:w})),s.jsx(j,{portalElement:h,children:w})}function O(){const e=i.useRef(null),[t,o]=i.useState(!0);return i.useEffect(()=>{if(!e.current)return;const n=new IntersectionObserver(([r])=>{r&&o(r.isIntersecting)});return n.observe(e.current),()=>{n.disconnect()}},[]),{headingRef:e,headingVisible:t}}function U(e){const{children:t}=e,[o,n]=i.useState(!1),{headingRef:r,headingVisible:d}=O();return t({headingRef:r,headingVisible:d,borderVisible:o,setBorderVisible:n})}const P=l.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,$=l.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,T=l($)`
  ${({$visible:e,$appearDelay:t})=>{const{tokens:o}=m(),{scrollShadowContainer:n}=o;return[a`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${n.shadow.color};
      `,e&&a`
          transform: translateY(0px);
        `,t&&a`
          @media (prefers-reduced-motion: reduce) {
            transition: none;
          }
        `,e&&t&&a`
          transition-delay: ${t};

          @media (prefers-reduced-motion: reduce) {
            transition-delay: 0s;
          }
        `]}}
`,B=l($)`
  ${({$visible:e})=>{const{tokens:t}=m(),{scrollShadowContainer:o}=t;return[a`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${o.shadow.color};
      `,e&&a`
          transform: translateY(0px);
        `]}}
`,F=l.div`
  ${()=>{const{tokens:{scrollShadowContainer:e,scrollBar:{thumbColor:t,trackColor:o}}}=m();return a`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${t} ${o};

      &:focus-visible {
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`;function M(e){const t=i.useRef(null),o=i.useRef(null),[n,r]=i.useState(!1),[d,p]=i.useState(!1);return i.useEffect(()=>{e==null||e({topShadowVisible:n,bottomShadowVisible:d})},[e,n,d]),i.useEffect(()=>{if(!t.current||!o.current)return;const c=new IntersectionObserver(([h])=>{h&&r(!h.isIntersecting)}),u=new IntersectionObserver(([h])=>{h&&p(!h.isIntersecting)});return c.observe(t.current),u.observe(o.current),()=>{c.disconnect(),u.disconnect()}},[]),{topShadowRef:t,bottomShadowRef:o,topShadowVisible:n,bottomShadowVisible:d}}function X(e){const{tabIndex:t,onChange:o,topShadowDelay:n,children:r}=e,{topShadowRef:d,bottomShadowRef:p,topShadowVisible:c,bottomShadowVisible:u}=M(o);return s.jsxs(P,{children:[s.jsx(T,{$visible:c,$appearDelay:n,"aria-hidden":!0}),s.jsxs(F,{tabIndex:t,children:[s.jsx("div",{ref:d}),r,s.jsx("div",{ref:p})]}),s.jsx(B,{$visible:u,"aria-hidden":!0})]})}export{V as C,Q as M,X as S,U as a,g as h};
