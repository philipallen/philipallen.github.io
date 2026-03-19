import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{a as R}from"./index-B-lxVbXh.js";import{g as m,d as T}from"./index-eS8l-D1x.js";import{r as $}from"./index-CcKhGcwW.js";import{$ as C,a as D,b as P,c as S}from"./Tabs-DTe0fQSB.js";import{$ as B}from"./SelectionIndicator-bB52Ah1e.js";import{u as b,l as c,d as g}from"./index-C1QKVHyt.js";import{T as h}from"./Typography-BK_ZjFCe.js";import{B as _}from"./Button-CbZ__EIw.js";const V=g(C)`
  ${({$variant:a})=>{const{tokens:e}=b(),{buttonTabs:t}=e;return[c`
        display: flex;
        gap: ${t.items.gap};
      `,a==="center"&&c`
          justify-content: center;
        `]}}
`,w=g(D)`
  ${({$fullWidth:a})=>{const{tokens:e}=b(),{buttonAlt:t}=e;return[c`
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
      `,a&&c`
          width: 100%;
        `]}}
`,E=g(P)`
  ${()=>{const{tokens:a}=b(),{buttonTabs:e}=a;return c`
      &[data-focus-visible] {
        outline-width: ${e.panel.focusRing.width};
        outline-style: ${e.panel.focusRing.style};
        outline-color: ${e.panel.focusRing.color};
      }
    `}}
`,f=$.createContext({}),N=a=>{const{children:e,...t}=a;return o.jsx(f.Provider,{value:t,children:e})};function s(a){const{children:e,testID:t="button-tabs",...n}=a,{activeItemId:r,onChange:u}=n;function p(i){u(i)}return o.jsx(N,{...n,testID:t,children:o.jsx(S,{selectedKey:r,onSelectionChange:p,"data-testid":t,children:e})})}s.Items=function(){const{variant:e=m.DEFAULT_VARIANT,items:t,typographyVariant:n,testID:r}=$.useContext(f),{tokens:u}=b(),{buttonAlt:p}=u;return o.jsx(V,{$variant:e,"data-testid":`${r}-items`,children:o.jsx(B,{items:t,children:i=>o.jsx(w,{id:i.id,isDisabled:i.isDisabled,$fullWidth:e==="stretch","data-testid":`${r}-item-${i.id}`,children:o.jsx(h,{color:"inherit",variant:n,component:"span",fontFamily:p.typography.fontFamily,children:i.label})})},`${e}-${n}`)})};s.Panels=function(){const{items:e,testID:t}=$.useContext(f);return o.jsx("div",{"data-testid":`${t}-panels`,children:o.jsx(B,{items:e,children:n=>o.jsx(E,{id:n.id,"data-testid":`${t}-panel-${n.id}`,children:n.panel},n.id)})})};s.displayName="ButtonTabs";s.Panels.displayName="ButtonTabs.Panels";s.Items.displayName="ButtonTabs.Items";const x={activeItemId:"button-tab-01",items:[{id:"button-tab-01",label:"Tab label 01",panel:o.jsx(h,{children:"Tab panel 01"})},{id:"button-tab-02",label:"Tab label 02",panel:o.jsx(_,{children:"Tab panel 02"})}]},O={activeItemId:"button-tab-disabled-01",items:[{id:"button-tab-disabled-01",label:"Tab label 01",panel:o.jsx(h,{children:"Tab panel 01"})},{id:"button-tab-disabled-02",label:"Tab label 02",panel:o.jsx(_,{children:"Tab panel 02"}),isDisabled:!0}]},{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Components/Navigation/ButtonTabs",component:s,render:function(e){const[,t]=L();function n(r){t({activeItemId:r}),R("onChange")()}return o.jsx(s,{...e,onChange:n,children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(s.Items,{}),o.jsx(s.Panels,{})]})})},argTypes:{variant:{control:{type:"select"},options:m.VARIANTS},typographyVariant:{control:{type:"select"},options:T.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}},activeItemId:{control:{type:"text"}}},args:{variant:m.DEFAULT_VARIANT,typographyVariant:T.DEFAULT_TYPOGRAPHY_VARIANT,items:x.items,activeItemId:x.activeItemId}},d={},l={args:{...O}};var y,v,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(I=(v=d.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,k,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...mockButtonTabsDisabled
  }
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Y=["Basic","DisabledItems"],Q=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,DisabledItems:l,__namedExportsOrder:Y,default:F},Symbol.toStringTag,{value:"Module"}));export{Q as B,l as D,d as a};
