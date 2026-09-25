import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BVaTkfsr.js";import{d as E}from"./FocusScope-lZmE84T1.js";import{$ as j}from"./usePreventScroll-CCxqn7Ri.js";import{O as y}from"./OverlayContext-cry3RCsh.js";import{u as m,i as d,a as c}from"./index-BpMil6Tx.js";import{$ as I}from"./useViewportSize-BRd7oIjb.js";const R=c.dialog`
  ${()=>{const{tokens:o}=m(),{modal:t}=o;return d`
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
`,C=c.div`
  ${()=>{const{tokens:o}=m(),{modal:t}=o,e=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return d`
      min-height: ${t.minHeight.mobile};
      max-height: ${t.maxHeight.mobile};
      overflow-wrap: anywhere;

      @media (min-width: ${t.breakpoints.tablet}) {
        min-height: ${t.minHeight.tablet};
        max-height: calc(100vh - (${t.padding.tablet} * 2));

        @media (min-height: ${e}) {
          max-height: ${t.maxHeight.tablet};
        }
      }
    `}}
`,W=c(C)`
  ${({$viewportWidth:o,$tabletWidth:t})=>{const{tokens:e}=m(),{modal:n}=e,a=o-parseInt(n.padding.tablet,10)*2;return d`
      width: ${n.width.mobile};
      min-width: ${n.minWidth.mobile-parseInt(n.padding.mobile,10)*2};
      max-width: ${n.maxWidth.mobile};
      border-top-left-radius: ${n.radius};
      border-top-right-radius: ${n.radius};
      background: ${n.backgroundColor};
      overflow: hidden;

      @media (min-width: ${n.breakpoints.tablet}) {
        width: ${t&&t<a?`${t}px`:n.width.tablet};
        min-width: ${n.minWidth.tablet};
        max-width: ${n.maxWidth.tablet};
        border-bottom-left-radius: ${n.radius};
        border-bottom-right-radius: ${n.radius};
      }
    `}}
`,D=i.forwardRef((o,t)=>{const{width:e}=I();return r.jsx(W,{...o,ref:t,$viewportWidth:e})});function H(o,t){i.useEffect(()=>{const e=o.current;e&&(t&&!e.open?(e.showModal(),e.focus()):!t&&e.open&&e.close())},[t])}function V(o,t){i.useEffect(()=>{const e=o.current;function n(a){a.key==="Escape"&&(a.preventDefault(),t==null||t())}if(e)return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}},[t])}function $(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function N(o){const{isOpen:t,onRequestClose:e,children:n,testID:a="modal",tabletWidth:l,...b}=o,s=i.useRef(null),p=i.useRef(null),[h,v]=i.useState();function S(f){f&&v(f)}H(s,t),V(s,e),i.useEffect(()=>{if(!t||$())return;const f=requestAnimationFrame(()=>{const u=s.current,x=p.current;u&&document.activeElement===u?(u.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')??x??u).focus():x&&!(u!=null&&u.contains(document.activeElement))&&x.focus()});return()=>cancelAnimationFrame(f)},[t]);const k=f=>{f.stopPropagation()};j({isDisabled:!t});let w=r.jsx(R,{...b,ref:s,closedby:"none","aria-modal":!0,tabIndex:-1,"data-testid":a,onClick:e,children:r.jsxs(D,{ref:p,tabIndex:-1,onClick:k,$tabletWidth:l,children:[n,r.jsx("div",{ref:S})]})});return $()||(w=r.jsx(E,{contain:t,restoreFocus:!0,children:w})),r.jsx(y,{portalElement:h,children:w})}const P=c.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,g=c.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,T=c(g)`
  ${({$visible:o})=>{const{tokens:t}=m(),{scrollShadowContainer:e}=t;return[d`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.shadow.color};
      `,o&&d`
          transform: translateY(0px);
        `]}}
`,F=c(g)`
  ${({$visible:o})=>{const{tokens:t}=m(),{scrollShadowContainer:e}=t;return[d`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.shadow.color};
      `,o&&d`
          transform: translateY(0px);
        `]}}
`,O=c.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:t,trackColor:e}}}=m();return d`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${t} ${e};

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;function B(o){const t=i.useRef(null),e=i.useRef(null),[n,a]=i.useState(!1),[l,b]=i.useState(!1);return i.useEffect(()=>{o==null||o({topShadowVisible:n,bottomShadowVisible:l})},[o,n,l]),i.useEffect(()=>{if(!t.current||!e.current)return;const s=new IntersectionObserver(([h])=>{h&&a(!h.isIntersecting)}),p=new IntersectionObserver(([h])=>{h&&b(!h.isIntersecting)});return s.observe(t.current),p.observe(e.current),()=>{s.disconnect(),p.disconnect()}},[]),{topShadowRef:t,bottomShadowRef:e,topShadowVisible:n,bottomShadowVisible:l}}function Q(o){const{tabIndex:t,onChange:e,children:n}=o,{topShadowRef:a,bottomShadowRef:l,topShadowVisible:b,bottomShadowVisible:s}=B(e);return r.jsxs(P,{children:[r.jsx(T,{$visible:b,"aria-hidden":!0}),r.jsxs(O,{tabIndex:t,children:[r.jsx("div",{ref:a}),n,r.jsx("div",{ref:l})]}),r.jsx(F,{$visible:s,"aria-hidden":!0})]})}export{C,N as M,Q as S,$ as h};
