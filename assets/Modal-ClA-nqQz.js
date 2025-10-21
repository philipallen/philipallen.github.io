import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{r as a}from"./index-CcKhGcwW.js";import{a as v}from"./FocusScope-DImX_wcQ.js";import{O as k}from"./OverlayContext-DE6V0lcf.js";import{a as m,u,b}from"./index-5VPm3mt9.js";import{m as E}from"./utils-BPOuYIA2.js";import{$ as y}from"./usePreventScroll-XlKO3Wry.js";let n=typeof document<"u"&&window.visualViewport;function j(){let i=E(),[t,e]=a.useState(()=>i?{width:0,height:0}:f());return a.useEffect(()=>{let o=()=>{e(r=>{let d=f();return d.width===r.width&&d.height===r.height?r:d})};return n?n.addEventListener("resize",o):window.addEventListener("resize",o),()=>{n?n.removeEventListener("resize",o):window.removeEventListener("resize",o)}},[]),t}function f(){return{width:n&&(n==null?void 0:n.width)||window.innerWidth,height:n&&(n==null?void 0:n.height)||window.innerHeight}}const H=m.dialog`
  ${()=>{const{tokens:i}=u(),{modal:t}=i;return b`
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
`,S=m.div`
  ${()=>{const{tokens:i}=u(),{modal:t}=i,e=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return b`
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
`,z=m(S)`
  ${({$tabletWidth:i})=>{const{tokens:t}=u(),{modal:e}=t,{width:o}=j(),r=o-parseInt(e.padding.tablet,10)*2;return b`
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
`;function L(i,t){a.useEffect(()=>{const e=i.current;e&&(t&&!e.open?(e.showModal(),e.focus()):!t&&e.open&&e.close())},[t])}function W(i,t){a.useEffect(()=>{const e=i.current;function o(r){r.key==="Escape"&&(r.preventDefault(),t==null||t())}if(e)return e.addEventListener("keydown",o),()=>{e.removeEventListener("keydown",o)}},[t])}function D(){return/android|ipad|iphone/i.test(navigator.userAgent)}function B(i){const{isOpen:t,onRequestClose:e,children:o,testID:r="modal",tabletWidth:d,...p}=i,c=a.useRef(null),[g,$]=a.useState();function w(l){l&&$(l)}L(c,t),W(c,e);const x=l=>{l.stopPropagation()};y({isDisabled:!t});let h=s.jsx(H,{...p,ref:c,"aria-modal":!0,"data-testid":r,onClick:e,children:s.jsxs(z,{onClick:x,$tabletWidth:d,children:[o,s.jsx("div",{ref:w})]})});return D()||(h=s.jsx(v,{contain:t,restoreFocus:!0,children:h})),s.jsx(k,{portalElement:g,children:h})}export{S as C,B as M};
