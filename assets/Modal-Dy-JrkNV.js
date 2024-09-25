import{v}from"./v4-CQkTLCs1.js";import{j as l}from"./jsx-runtime-DQ32znRX.js";import{r as d}from"./index-DH5ua8nC.js";import{O as $}from"./OverlayContext-0eIRNS6h.js";import{a as g,u as f,b}from"./index-D3TaQYms.js";const{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:R}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var D="storybook/actions",k=`${D}/action-event`,j={depth:10,clearOnStoryChange:!0,limit:50},O=(n,t)=>{let e=Object.getPrototypeOf(n);return!e||t(e)?e:O(e,t)},I=n=>!!(typeof n=="object"&&n&&O(n,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof n.persist=="function"),S=n=>{if(I(n)){let t=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),i=e==null?void 0:e.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(i.constructor.prototype)}),t}return n},P=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?v():Date.now().toString(36)+Math.random().toString(36).substring(2);function U(n,t={}){let e={...j,...t},i=function(...o){var a,E;if(t.implicit){let y=(a="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:a.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(y){let s=!((E=window==null?void 0:window.FEATURES)!=null&&E.disallowImplicitActionsInRenderV8),w=new R({phase:y.phase,name:n,deprecated:s});if(s)console.warn(w);else throw w}}let m=x.getChannel(),p=P(),r=5,c=o.map(S),u=o.length>1?c:c[0],h={id:p,count:0,data:{name:n,args:u},options:{...e,maxDepth:r+(e.depth||3),allowFunction:e.allowFunction||!1}};m.emit(k,h)};return i.isAction=!0,i}const T=g.dialog`
  ${()=>{const{tokens:n}=f(),{modal:t}=n;return b`
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

      @media (min-width: ${t.breakpoints.tablet}) {
        align-items: center;
        max-width: calc(100vw - (${t.padding.tablet} * 2));
        max-height: calc(100vh - (${t.padding.tablet} * 2));
      }

      &::backdrop {
        background: ${t.backdrop.backgroundColor};
      }
    `}}
`,A=g.div`
  ${()=>{const{tokens:n}=f(),{modal:t}=n,e=parseInt(t.maxHeight.tablet)+parseInt(t.padding.tablet)*2+"px";return b`
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
`,L=g(A)`
  ${()=>{const{tokens:n}=f(),{modal:t}=n;return b`
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
`;function M(n,t){d.useEffect(()=>{const e=n.current;e&&(t&&!e.open?e.showModal():!t&&e.open&&e.close())},[t])}function W(n,t){d.useEffect(()=>{const e=n.current;function i(){t==null||t()}if(e)return e.addEventListener("close",i),()=>{e.removeEventListener("close",i)}},[t])}function B(n,t){d.useEffect(()=>{const e=n.current;function i(o){o.key==="Escape"&&o.preventDefault()}if(e&&!t)return e.addEventListener("keydown",i),()=>{e.removeEventListener("keydown",i)}},[t])}function V(n){const{isOpen:t,onRequestClose:e,isEscDismissible:i=!0,children:o,testID:m="modal",...p}=n,r=d.useRef(null),[c,u]=d.useState();function h(a){a&&u(a)}return M(r,t),W(r,e),B(r,i),l.jsx($,{portalElement:c,children:l.jsx(T,{...p,ref:r,"aria-modal":!0,"data-testid":m,children:l.jsxs(L,{children:[o,l.jsx("div",{ref:h})]})})})}V.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isEscDismissible:{required:!1,tsType:{name:"boolean"},description:""}}};export{A as C,V as M,U as a};
