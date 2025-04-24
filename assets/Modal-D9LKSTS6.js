import{j as s}from"./jsx-runtime-BkBIjjFT.js";import{r as o}from"./index-KmaxkdDD.js";import{O as x}from"./OverlayContext-CQkNAI0D.js";import{a as c,u as m,b as h}from"./index-CFGjHfra.js";import{$ as w}from"./usePreventScroll-B_jZxvVS.js";const k=c.dialog`
  ${()=>{const{tokens:i}=m(),{modal:t}=i;return h`
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
`,v=c.div`
  ${()=>{const{tokens:i}=m(),{modal:t}=i,e=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return h`
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
`,E=c(v)`
  ${()=>{const{tokens:i}=m(),{modal:t}=i;return h`
      width: ${t.width.mobile};
      min-width: ${t.minWidth.mobile};
      max-width: ${t.maxWidth.mobile};

      border-top-left-radius: ${t.radius};
      border-top-right-radius: ${t.radius};
      background: ${t.backgroundColor};
      overflow: hidden;

      @media (min-width: ${t.breakpoints.tablet}) {
        width: ${t.width.tablet};
        min-width: ${t.minWidth.tablet};
        max-width: ${t.maxWidth.tablet};
        border-bottom-left-radius: ${t.radius};
        border-bottom-right-radius: ${t.radius};
      }
    `}}
`;function y(i,t){o.useEffect(()=>{const e=i.current;e&&(t&&!e.open?e.showModal():!t&&e.open&&e.close())},[t])}function j(i,t){o.useEffect(()=>{const e=i.current;function r(d){d.key==="Escape"&&(d.preventDefault(),t==null||t())}if(e)return e.addEventListener("keydown",r),()=>{e.removeEventListener("keydown",r)}},[t])}function M(i){const{isOpen:t,onRequestClose:e,children:r,testID:d="modal",focusOpenerElementOnClose:u=!0,...f}=i,l=o.useRef(null),[b,g]=o.useState();function p(n){n&&g(n)}y(l,t),j(l,e);const $=n=>{n.stopPropagation()},a=o.useRef(null);return o.useLayoutEffect(()=>{if(u)if(t){const n=document.activeElement;n&&n.focus&&(a.current=n)}else a.current&&a.current.focus(),a.current=null;else a.current=null},[u,t]),w({isDisabled:!t}),s.jsx(x,{portalElement:b,children:s.jsx(k,{...f,ref:l,"aria-modal":!0,"data-testid":d,onClick:e,children:s.jsxs(E,{onClick:$,children:[r,s.jsx("div",{ref:p})]})})})}export{v as C,M};
