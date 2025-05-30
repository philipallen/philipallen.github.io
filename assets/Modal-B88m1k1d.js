import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{r as a}from"./index-CcKhGcwW.js";import{a as x}from"./FocusScope-DImX_wcQ.js";import{O as v}from"./OverlayContext-DE6V0lcf.js";import{a as h,u as m,b as u}from"./index-COZsQx0K.js";import{m as k}from"./utils-BPOuYIA2.js";import{$ as E}from"./usePreventScroll-fHWX6szo.js";let n=typeof document<"u"&&window.visualViewport;function y(){let i=k(),[e,t]=a.useState(()=>i?{width:0,height:0}:b());return a.useEffect(()=>{let o=()=>{t(r=>{let d=b();return d.width===r.width&&d.height===r.height?r:d})};return n?n.addEventListener("resize",o):window.addEventListener("resize",o),()=>{n?n.removeEventListener("resize",o):window.removeEventListener("resize",o)}},[]),e}function b(){return{width:n&&(n==null?void 0:n.width)||window.innerWidth,height:n&&(n==null?void 0:n.height)||window.innerHeight}}const j=h.dialog`
  ${()=>{const{tokens:i}=m(),{modal:e}=i;return u`
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
`,H=h.div`
  ${()=>{const{tokens:i}=m(),{modal:e}=i,t=parseInt(e.maxHeight.tablet)+parseInt(e.padding.tablet)*2+"px";return u`
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
`,S=h(H)`
  ${({$tabletWidth:i})=>{const{tokens:e}=m(),{modal:t}=e,{width:o}=y(),r=o-parseInt(t.padding.tablet,10)*2;return u`
      width: ${t.width.mobile};
      min-width: ${t.minWidth.mobile};
      max-width: ${t.maxWidth.mobile};
      border-top-left-radius: ${t.radius};
      border-top-right-radius: ${t.radius};
      background: ${t.backgroundColor};
      overflow: hidden;

      @media (min-width: ${t.breakpoints.tablet}) {
        width: ${i&&i<r?`${i}px`:t.width.tablet};
        min-width: ${t.minWidth.tablet};
        max-width: ${t.maxWidth.tablet};
        border-bottom-left-radius: ${t.radius};
        border-bottom-right-radius: ${t.radius};
      }
    `}}
`;function z(i,e){a.useEffect(()=>{const t=i.current;t&&(e&&!t.open?t.showModal():!e&&t.open&&t.close())},[e])}function L(i,e){a.useEffect(()=>{const t=i.current;function o(r){r.key==="Escape"&&(r.preventDefault(),e==null||e())}if(t)return t.addEventListener("keydown",o),()=>{t.removeEventListener("keydown",o)}},[e])}function T(i){const{isOpen:e,onRequestClose:t,children:o,testID:r="modal",tabletWidth:d,...f}=i,c=a.useRef(null),[p,g]=a.useState();function $(l){l&&g(l)}z(c,e),L(c,t);const w=l=>{l.stopPropagation()};return E({isDisabled:!e}),s.jsx(v,{portalElement:p,children:s.jsx(x,{contain:e,restoreFocus:!0,children:s.jsx(j,{...f,ref:c,"aria-modal":!0,"data-testid":r,onClick:t,children:s.jsxs(S,{onClick:w,$tabletWidth:d,children:[o,s.jsx("div",{ref:$})]})})})})}export{H as C,T as M};
