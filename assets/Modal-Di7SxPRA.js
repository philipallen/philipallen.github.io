import{j as d}from"./jsx-runtime-DQ32znRX.js";import{r as o}from"./index-DH5ua8nC.js";import{O as w}from"./OverlayContext-0eIRNS6h.js";import{a as c,u as m,b as u}from"./index-C-LSVLXB.js";const x=c.dialog`
  ${()=>{const{tokens:n}=m(),{modal:e}=n;return u`
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
`,k=c.div`
  ${()=>{const{tokens:n}=m(),{modal:e}=n,t=parseInt(e.maxHeight.tablet)+parseInt(e.padding.tablet)*2+"px";return u`
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
`,v=c(k)`
  ${()=>{const{tokens:n}=m(),{modal:e}=n;return u`
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
`;function y(n,e){o.useEffect(()=>{const t=n.current;t&&(e&&!t.open?t.showModal():!e&&t.open&&t.close())},[e])}function E(n,e){o.useEffect(()=>{const t=n.current;function r(s){s.key==="Escape"&&(s.preventDefault(),e==null||e())}if(t)return t.addEventListener("keydown",r),()=>{t.removeEventListener("keydown",r)}},[e])}function j(n){const{isOpen:e,onRequestClose:t,children:r,testID:s="modal",focusOpenerElementOnClose:h=!0,...p}=n,l=o.useRef(null),[f,g]=o.useState();function b(i){i&&g(i)}y(l,e),E(l,t);const $=i=>{i.stopPropagation()},a=o.useRef(null);return o.useLayoutEffect(()=>{if(h)if(e){const i=document.activeElement;i&&i.focus&&(a.current=i)}else a.current&&a.current.focus(),a.current=null;else a.current=null},[h,e]),d.jsx(w,{portalElement:f,children:d.jsx(x,{...p,ref:l,"aria-modal":!0,"data-testid":s,onClick:t,children:d.jsxs(v,{onClick:$,children:[r,d.jsx("div",{ref:b})]})})})}j.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},focusOpenerElementOnClose:{required:!1,tsType:{name:"boolean"},description:""}}};export{k as C,j as M};
