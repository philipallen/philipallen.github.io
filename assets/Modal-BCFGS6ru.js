import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{r as a}from"./index-CcKhGcwW.js";import{a as x}from"./FocusScope-DImX_wcQ.js";import{O as v}from"./OverlayContext-DE6V0lcf.js";import{a as h,u as m,b as u}from"./index-BHlkTKmU.js";import{m as k}from"./utils-BPOuYIA2.js";import{$ as E}from"./usePreventScroll-XlKO3Wry.js";let n=typeof document<"u"&&window.visualViewport;function y(){let i=k(),[t,e]=a.useState(()=>i?{width:0,height:0}:b());return a.useEffect(()=>{let o=()=>{e(r=>{let d=b();return d.width===r.width&&d.height===r.height?r:d})};return n?n.addEventListener("resize",o):window.addEventListener("resize",o),()=>{n?n.removeEventListener("resize",o):window.removeEventListener("resize",o)}},[]),t}function b(){return{width:n&&(n==null?void 0:n.width)||window.innerWidth,height:n&&(n==null?void 0:n.height)||window.innerHeight}}const j=h.dialog`
  ${()=>{const{tokens:i}=m(),{modal:t}=i;return u`
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
`,H=h.div`
  ${()=>{const{tokens:i}=m(),{modal:t}=i,e=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return u`
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
`,S=h(H)`
  ${({$tabletWidth:i})=>{const{tokens:t}=m(),{modal:e}=t,{width:o}=y(),r=o-parseInt(e.padding.tablet,10)*2;return u`
      width: ${e.width.mobile};
      min-width: ${e.minWidth.mobile-parseInt(e.padding.mobile,10)*2};
      max-width: ${e.maxWidth.mobile};
      border-top-left-radius: ${e.radius};
      border-top-right-radius: ${e.radius};
      background: ${e.backgroundColor};
      overflow: hidden;

      @media (min-width: ${e.breakpoints.tablet}) {
        width: ${i&&i<r?`${i}px`:e.width.tablet};
        min-width: ${e.minWidth.tablet};
        max-width: ${e.maxWidth.tablet};
        border-bottom-left-radius: ${e.radius};
        border-bottom-right-radius: ${e.radius};
      }
    `}}
`;function z(i,t){a.useEffect(()=>{const e=i.current;e&&(t&&!e.open?e.showModal():!t&&e.open&&e.close())},[t])}function L(i,t){a.useEffect(()=>{const e=i.current;function o(r){r.key==="Escape"&&(r.preventDefault(),t==null||t())}if(e)return e.addEventListener("keydown",o),()=>{e.removeEventListener("keydown",o)}},[t])}function T(i){const{isOpen:t,onRequestClose:e,children:o,testID:r="modal",tabletWidth:d,...f}=i,c=a.useRef(null),[p,g]=a.useState();function $(l){l&&g(l)}z(c,t),L(c,e);const w=l=>{l.stopPropagation()};return E({isDisabled:!t}),s.jsx(v,{portalElement:p,children:s.jsx(x,{contain:t,restoreFocus:!0,children:s.jsx(j,{...f,ref:c,"aria-modal":!0,"data-testid":r,onClick:e,children:s.jsxs(S,{onClick:w,$tabletWidth:d,children:[o,s.jsx("div",{ref:$})]})})})})}export{H as C,T as M};
