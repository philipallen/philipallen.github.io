import{v as b}from"./v4-CQkTLCs1.js";import{j as y}from"./jsx-runtime-DQ32znRX.js";import{r as s}from"./index-DH5ua8nC.js";import{u as w}from"./floating-ui.react-BezaurJz.js";import{a as v,u as R,b as D}from"./index-jNFq1OWt.js";const{addons:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:S}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var x="storybook/actions",I=`${x}/action-event`,j={depth:10,clearOnStoryChange:!0,limit:50},E=(o,t)=>{let e=Object.getPrototypeOf(o);return!e||t(e)?e:E(e,t)},$=o=>!!(typeof o=="object"&&o&&E(o,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof o.persist=="function"),A=o=>{if($(o)){let t=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),n=e==null?void 0:e.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(n.constructor.prototype)}),t}return o},L=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function U(o,t={}){let e={...j,...t},n=function(...r){var u,m;if(t.implicit){let f=(u="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(f){let a=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),g=new S({phase:f.phase,name:o,deprecated:a});if(a)console.warn(g);else throw g}}let d=k.getChannel(),c=L(),l=5,i=r.map(A),p=r.length>1?i:i[0],O={id:c,count:0,data:{name:o,args:p},options:{...e,maxDepth:l+(e.depth||3),allowFunction:e.allowFunction||!1}};d.emit(I,O)};return n.isAction=!0,n}const P=v.dialog`
  ${()=>{const{tokens:o}=R(),{modal:t}=o;return D`
      border: unset;
      padding: unset;
      overflow: hidden;
      border-radius: ${t.radius};
      background: ${t.backgroundColor};

      &::backdrop {
        background: ${t.backdrop.backgroundColor};
      }

      @media (min-width: ${t.desktop.minWidth}) {
        max-width: ${t.desktop.maxWidth};
        max-height: ${t.desktop.maxHeight};
      }

      @media (max-width: ${t.desktop.minWidth}) {
        width: 100%;
        min-width: ${t.mobile.minWidth};
        max-width: none;
        min-height: ${t.mobile.minHeight};
        max-height: 90%;
        margin-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}}
`;function M(o,t){s.useEffect(()=>{const e=o.current;e&&(t&&!e.open?e.showModal():!t&&e.open&&e.close())},[t])}function T(o,t){s.useEffect(()=>{const e=o.current;function n(){t==null||t()}if(e)return e.addEventListener("close",n),()=>{e.removeEventListener("close",n)}},[t])}function W(o,t){s.useEffect(()=>{const e=o.current;function n(r){r.key==="Escape"&&r.preventDefault()}if(e&&!t)return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}},[t])}const _=s.forwardRef((o,t)=>{const{isOpen:e,onRequestClose:n,isEscDismissible:r=!0,children:d,testID:c="modal",...l}=o,i=s.useRef(null),p=w([i,t]);return M(i,e),T(i,n),W(i,r),y.jsx(P,{...l,ref:p,"data-testid":c,children:d})});_.displayName="Modal";_.__docgenInfo={description:"",methods:[],displayName:"Modal"};export{_ as M,U as a};
