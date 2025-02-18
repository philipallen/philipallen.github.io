import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as o}from"./index-DH5ua8nC.js";import{O as w}from"./OverlayContext-0eIRNS6h.js";import{a as c,u as m,b as u}from"./index-CzvSJj6w.js";import{$ as x}from"./usePreventScroll-D4ZFMROl.js";const k=c.dialog`
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
`,v=c.div`
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
`,y=c(v)`
  ${()=>{const{tokens:i}=m(),{modal:e}=i;return u`
      width: ${e.width.mobile};
      min-width: ${e.minWidth.mobile};
      max-width: ${e.maxWidth.mobile};

      border-top-left-radius: ${e.radius};
      border-top-right-radius: ${e.radius};
      background: ${e.backgroundColor};
      overflow: hidden;

      @media (min-width: ${e.breakpoints.tablet}) {
        width: ${e.width.tablet};
        min-width: ${e.minWidth.tablet};
        max-width: ${e.maxWidth.tablet};
        border-bottom-left-radius: ${e.radius};
        border-bottom-right-radius: ${e.radius};
      }
    `}}
`;function E(i,e){o.useEffect(()=>{const t=i.current;t&&(e&&!t.open?t.showModal():!e&&t.open&&t.close())},[e])}function j(i,e){o.useEffect(()=>{const t=i.current;function r(d){d.key==="Escape"&&(d.preventDefault(),e==null||e())}if(t)return t.addEventListener("keydown",r),()=>{t.removeEventListener("keydown",r)}},[e])}function C(i){const{isOpen:e,onRequestClose:t,children:r,testID:d="modal",focusOpenerElementOnClose:h=!0,...p}=i,l=o.useRef(null),[f,b]=o.useState();function g(n){n&&b(n)}E(l,e),j(l,t);const $=n=>{n.stopPropagation()},a=o.useRef(null);return o.useLayoutEffect(()=>{if(h)if(e){const n=document.activeElement;n&&n.focus&&(a.current=n)}else a.current&&a.current.focus(),a.current=null;else a.current=null},[h,e]),x({isDisabled:!e}),s.jsx(w,{portalElement:f,children:s.jsx(k,{...p,ref:l,"aria-modal":!0,"data-testid":d,onClick:t,children:s.jsxs(y,{onClick:$,children:[r,s.jsx("div",{ref:g})]})})})}C.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},focusOpenerElementOnClose:{required:!1,tsType:{name:"boolean"},description:""}}};export{v as C,C as M};
