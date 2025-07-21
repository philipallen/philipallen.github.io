import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{a as R}from"./index-Cf3axooF.js";import{p as $,h as x}from"./index-WLaP1tkh.js";import{r as m}from"./index-CcKhGcwW.js";import{$ as C,a as D,b as P,c as S}from"./Tabs-jx_MHFSE.js";import{$ as _}from"./Collection-DeW_zP-L.js";import{a as g,u as b,b as l}from"./index-BHlkTKmU.js";import{T as h}from"./Typography-BTmT2kbZ.js";import{B}from"./Button-Ctq0oru7.js";const V=g(C)`
  ${({$variant:a})=>{const{tokens:e}=b(),{buttonTabs:t}=e;return[l`
        display: flex;
        gap: ${t.items.gap};
      `,a==="center"&&l`
          justify-content: center;
        `]}}
`,w=g(D)`
  ${({$fullWidth:a})=>{const{tokens:e}=b(),{buttonAlt:t}=e;return[l`
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

        &[data-disabled] {
          border-color: ${t.stroke.color.disabled};
          color: ${t.color.disabled};
          background: ${t.backgroundColor.disabled};
          cursor: not-allowed;
        }
      `,a&&l`
          width: 100%;
        `]}}
`,E=g(P)`
  ${()=>{const{tokens:a}=b(),{buttonTabs:e}=a;return l`
      &[data-focus-visible] {
        outline-width: ${e.panel.focusRing.width};
        outline-style: ${e.panel.focusRing.style};
        outline-color: ${e.panel.focusRing.color};
      }
    `}}
`,f=m.createContext({}),O=a=>{const{children:e,...t}=a;return o.jsx(f.Provider,{value:t,children:e})};function i(a){const{children:e,testID:t="button-tabs",...n}=a,{activeItemId:s,onChange:u}=n;function p(r){u(r)}return o.jsx(O,{...n,testID:t,children:o.jsx(S,{selectedKey:s,onSelectionChange:p,"data-testid":t,children:e})})}i.Items=function(){const{variant:e=$.DEFAULT_VARIANT,items:t,typographyVariant:n,testID:s}=m.useContext(f),{tokens:u}=b(),{buttonAlt:p}=u;return o.jsx(V,{$variant:e,"data-testid":`${s}-items`,children:o.jsx(_,{items:t,children:r=>o.jsx(w,{id:r.id,isDisabled:r.isDisabled,$fullWidth:e==="stretch","data-testid":`${s}-item-${r.id}`,children:o.jsx(h,{color:"inherit",variant:n,component:"span",fontFamily:p.typography.fontFamily,children:r.label})})},`${e}-${n}`)})};i.Panels=function(){const{items:e,testID:t}=m.useContext(f);return o.jsx("div",{"data-testid":`${t}-panels`,children:o.jsx(_,{items:e,children:n=>o.jsx(E,{id:n.id,"data-testid":`${t}-panel-${n.id}`,children:n.panel},n.id)})})};const T={activeItemId:"button-tab-01",items:[{id:"button-tab-01",label:"Tab label 01",panel:o.jsx(h,{children:"Tab panel 01"})},{id:"button-tab-02",label:"Tab label 02",panel:o.jsx(B,{text:"Tab panel 02"})}]},L={activeItemId:"button-tab-disabled-01",items:[{id:"button-tab-disabled-01",label:"Tab label 01",panel:o.jsx(h,{children:"Tab panel 01"})},{id:"button-tab-disabled-02",label:"Tab label 02",panel:o.jsx(B,{text:"Tab panel 02"}),isDisabled:!0}]},{useArgs:N}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Components/Navigation/ButtonTabs",component:i,render:function(e){const[,t]=N();function n(s){t({activeItemId:s}),R("onChange")()}return o.jsx(i,{...e,onChange:n,children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(i.Items,{}),o.jsx(i.Panels,{})]})})},argTypes:{variant:{control:{type:"select"},options:$.VARIANTS},typographyVariant:{control:{type:"select"},options:x.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}},activeItemId:{control:{type:"text"}}},args:{variant:$.DEFAULT_VARIANT,typographyVariant:x.DEFAULT_TYPOGRAPHY_VARIANT,items:T.items,activeItemId:T.activeItemId}},c={},d={args:{...L}};var v,y,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var j,k,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...mockButtonTabsDisabled
  }
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Y=["Basic","DisabledItems"],Q=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,DisabledItems:d,__namedExportsOrder:Y,default:F},Symbol.toStringTag,{value:"Module"}));export{Q as B,d as D,c as a};
