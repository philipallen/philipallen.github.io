import{j as o}from"./jsx-runtime-BkBIjjFT.js";import{a as I}from"./chunk-WFFRPTHA-LPjJ2Zra.js";import{o as b,g as h}from"./index-VIbBARS4.js";import{r as $}from"./index-KmaxkdDD.js";import{$ as A,a as _,b as k,c as R}from"./Tabs-BsPeZygm.js";import{$ as v}from"./Collection-EYIO8LIo.js";import{a as g,u as l,b as d}from"./index-DT8u_GqS.js";import{T as j}from"./Typography-Ck-NcY7i.js";import{B}from"./Button-SvV_jFev.js";const C=g(A)`
  ${({$variant:n})=>{const{tokens:e}=l(),{buttonTabs:t}=e;return[d`
        display: flex;
        gap: ${t.items.gap};
      `,n==="center"&&d`
          justify-content: center;
        `]}}
`,P=g(_)`
  ${({$fullWidth:n})=>{const{tokens:e}=l(),{buttonAlt:t}=e;return[d`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-width: ${t.stroke.width.base};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color.base};
        border-radius: ${t.radius};
        min-width: ${t.minWidth};
        min-height: ${t.minHeight.md};
        padding-top: ${t.padding.top};
        padding-left: ${t.padding.left};
        padding-right: ${t.padding.right};
        padding-bottom: ${t.padding.bottom};
        color: ${t.color.base};
        background: ${t.backgroundColor.base};
        cursor: pointer;
        outline: none;

        &[data-focus-visible] {
          outline-width: ${t.focusRing.width};
          outline-style: ${t.focusRing.style};
          outline-color: ${t.focusRing.color};
          outline-offset: ${t.focusRing.offset};
        }

        &[data-hovered] {
          color: ${t.color.hover};
          background: ${t.backgroundColor.hover};
        }

        &[data-selected] {
          border-color: ${t.stroke.color.active};
          color: ${t.color.active};
          background: ${t.backgroundColor.active};

          &[data-hovered] {
            border-color: ${t.stroke.color.active};
            color: ${t.color.active};
            background: ${t.backgroundColor.active};
          }
        }
      `,n&&d`
          width: 100%;
        `]}}
`,V=g(k)`
  ${()=>{const{tokens:n}=l(),{buttonTabs:e}=n;return d`
      &[data-focus-visible] {
        outline-width: ${e.panel.focusRing.width};
        outline-style: ${e.panel.focusRing.style};
        outline-color: ${e.panel.focusRing.color};
      }
    `}}
`,m=$.createContext({}),E=n=>{const{children:e,...t}=n;return o.jsx(m.Provider,{value:t,children:e})};function s(n){const{children:e,testID:t="button-tabs",...a}=n,{activeItemId:r,onChange:u}=a;function p(i){u(i)}return o.jsx(E,{...a,testID:t,children:o.jsx(R,{selectedKey:r,onSelectionChange:p,"data-testid":t,children:e})})}s.Items=function(){const{variant:e=b.DEFAULT_VARIANT,items:t,typographyVariant:a,testID:r}=$.useContext(m),{tokens:u}=l(),{buttonAlt:p}=u;return o.jsx(C,{$variant:e,"data-testid":`${r}-items`,children:o.jsx(v,{items:t,children:i=>o.jsx(P,{id:i.id,$fullWidth:e==="stretch","data-testid":`${r}-item-${i.id}`,children:o.jsx(j,{color:"inherit",variant:a,component:"span",fontFamily:p.typography.fontFamily,children:i.label})})},`${e}-${a}`)})};s.Panels=function(){const{items:e,testID:t}=$.useContext(m);return o.jsx("div",{"data-testid":`${t}-panels`,children:o.jsx(v,{items:e,children:a=>o.jsx(V,{id:a.id,"data-testid":`${t}-panel-${a.id}`,children:a.panel},a.id)})})};const f={activeItemId:"button-tab-01",items:[{id:"button-tab-01",label:"Tab label 01",panel:o.jsx(j,{children:"Tab panel 01"})},{id:"button-tab-02",label:"Tab label 02",panel:o.jsx(B,{text:"Tab panel 02"})}]},{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Components/Navigation/ButtonTabs",component:s,render:function(e){const[,t]=O();function a(r){t({activeItemId:r}),I("onChange")()}return o.jsx(s,{...e,onChange:a,children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(s.Items,{}),o.jsx(s.Panels,{})]})})},argTypes:{variant:{control:{type:"select"},options:b.VARIANTS},typographyVariant:{control:{type:"select"},options:h.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}},activeItemId:{control:{type:"text"}}},args:{variant:b.DEFAULT_VARIANT,typographyVariant:h.DEFAULT_TYPOGRAPHY_VARIANT,items:f.items,activeItemId:f.activeItemId}},c={};var x,T,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const w=["Basic"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{K as B,c as a};
