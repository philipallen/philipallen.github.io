import{j as c}from"./jsx-runtime-Blucd9Qg.js";import{r as a}from"./index-CcKhGcwW.js";import{a as x,d as y}from"./FocusScope-BGa3S4Dp.js";import{O as R}from"./OverlayContext-BmgfW47V.js";import{u as p,l as u,d as f}from"./index-mZEjvCBW.js";import{n as I}from"./utils-CrCrZF7Z.js";import{a as V}from"./usePreventScroll-BIkMZHcC.js";let r=typeof document<"u"&&window.visualViewport;function H(){let i=I(),[t,e]=a.useState(()=>i?{width:0,height:0}:v());return a.useEffect(()=>{let n=()=>{r&&r.scale>1||e(d=>{let o=v();return o.width===d.width&&o.height===d.height?d:o})},s,l=d=>{r&&r.scale>1||x(d.target)&&(s=requestAnimationFrame(()=>{(!document.activeElement||!x(document.activeElement))&&e(o=>{let h={width:window.innerWidth,height:window.innerHeight};return h.width===o.width&&h.height===o.height?o:h})}))};return window.addEventListener("blur",l,!0),r?r.addEventListener("resize",n):window.addEventListener("resize",n),()=>{cancelAnimationFrame(s),window.removeEventListener("blur",l,!0),r?r.removeEventListener("resize",n):window.removeEventListener("resize",n)}},[]),t}function v(){return{width:r?r.width*r.scale:window.innerWidth,height:r?r.height*r.scale:window.innerHeight}}const L=f.dialog`
  ${()=>{const{tokens:i}=p(),{modal:t}=i;return u`
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
`,C=f.div`
  ${()=>{const{tokens:i}=p(),{modal:t}=i,e=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return u`
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
`,W=f(C)`
  ${({$tabletWidth:i})=>{const{tokens:t}=p(),{modal:e}=t,{width:n}=H(),s=n-parseInt(e.padding.tablet,10)*2;return u`
      width: ${e.width.mobile};
      min-width: ${e.minWidth.mobile-parseInt(e.padding.mobile,10)*2};
      max-width: ${e.maxWidth.mobile};
      border-top-left-radius: ${e.radius};
      border-top-right-radius: ${e.radius};
      background: ${e.backgroundColor};
      overflow: hidden;

      @media (min-width: ${e.breakpoints.tablet}) {
        width: ${i&&i<s?`${i}px`:e.width.tablet};
        min-width: ${e.minWidth.tablet};
        max-width: ${e.maxWidth.tablet};
        border-bottom-left-radius: ${e.radius};
        border-bottom-right-radius: ${e.radius};
      }
    `}}
`;function F(i,t){a.useEffect(()=>{const e=i.current;e&&(t&&!e.open?(e.showModal(),e.focus()):!t&&e.open&&e.close())},[t])}function z(i,t){a.useEffect(()=>{const e=i.current;function n(s){s.key==="Escape"&&(s.preventDefault(),t==null||t())}if(e)return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}},[t])}function A(){return/android|ipad|iphone/i.test(navigator.userAgent)}function X(i){const{isOpen:t,onRequestClose:e,children:n,testID:s="modal",tabletWidth:l,...d}=i,o=a.useRef(null),h=a.useRef(null),[m,k]=a.useState();function E(w){w&&k(w)}F(o,t),z(o,e),a.useEffect(()=>{if(!t)return;const w=requestAnimationFrame(()=>{const b=o.current,g=h.current;b&&document.activeElement===b?(b.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')??g??b).focus():g&&!(b!=null&&b.contains(document.activeElement))&&g.focus()});return()=>cancelAnimationFrame(w)},[t]);const j=w=>{w.stopPropagation()};V({isDisabled:!t});let $=c.jsx(L,{...d,ref:o,"aria-modal":!0,tabIndex:-1,"data-testid":s,onClick:e,children:c.jsxs(W,{ref:h,tabIndex:-1,onClick:j,$tabletWidth:l,children:[n,c.jsx("div",{ref:E})]})});return A()||($=c.jsx(y,{contain:t,restoreFocus:!0,children:$})),c.jsx(R,{portalElement:m,children:$})}const D=f.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,S=f.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,B=f(S)`
  ${({$visible:i})=>{const{tokens:t}=p(),{scrollShadowContainer:e}=t;return[u`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.shadow.color};
      `,i&&u`
          transform: translateY(0px);
        `]}}
`,M=f(S)`
  ${({$visible:i})=>{const{tokens:t}=p(),{scrollShadowContainer:e}=t;return[u`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.shadow.color};
      `,i&&u`
          transform: translateY(0px);
        `]}}
`,O=f.div`
  ${()=>{const{tokens:{scrollShadowContainer:i,scrollBar:{thumbColor:t,trackColor:e}}}=p();return u`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${t} ${e};

      &:focus-visible {
        outline-width: ${i.focusRing.width};
        outline-style: ${i.focusRing.style};
        outline-color: ${i.focusRing.color};
        outline-offset: ${i.focusRing.offset};
      }
    `}}
`;function P(i){const t=a.useRef(null),e=a.useRef(null),[n,s]=a.useState(!1),[l,d]=a.useState(!1);return a.useEffect(()=>{i==null||i({topShadowVisible:n,bottomShadowVisible:l})},[i,n,l]),a.useEffect(()=>{if(!t.current||!e.current)return;const o=new IntersectionObserver(([m])=>{m&&s(!m.isIntersecting)}),h=new IntersectionObserver(([m])=>{m&&d(!m.isIntersecting)});return o.observe(t.current),h.observe(e.current),()=>{o.disconnect(),h.disconnect()}},[]),{topShadowRef:t,bottomShadowRef:e,topShadowVisible:n,bottomShadowVisible:l}}function Z(i){const{tabIndex:t,onChange:e,children:n}=i,{topShadowRef:s,bottomShadowRef:l,topShadowVisible:d,bottomShadowVisible:o}=P(e);return c.jsxs(D,{children:[c.jsx(B,{$visible:d,"aria-hidden":!0}),c.jsxs(O,{tabIndex:t,children:[c.jsx("div",{ref:s}),n,c.jsx("div",{ref:l})]}),c.jsx(M,{$visible:o,"aria-hidden":!0})]})}export{C,X as M,Z as S};
