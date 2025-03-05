import{j as o}from"./jsx-runtime-DQ32znRX.js";import{a as j}from"./chunk-WFFRPTHA-LPjJ2Zra.js";import{k as b,l as f}from"./index-BrtwDHqb.js";import{r as m}from"./index-DH5ua8nC.js";import{$ as k,a as A,b as B,c as R}from"./Tabs-Bg99tFfy.js";import{$ as v}from"./Collection-HyIYbscu.js";import{a as $,u as l,b as d}from"./index-CzvSJj6w.js";import{T as I}from"./Typography-RMDmhaRB.js";import{B as P}from"./Button-Bah0dgkQ.js";const C=$(k)`
  ${({$variant:n})=>{const{tokens:e}=l(),{buttonTabs:t}=e;return[d`
        display: flex;
        gap: ${t.items.gap};
      `,n==="center"&&d`
          justify-content: center;
        `]}}
`,V=$(A)`
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
`,E=$(B)`
  ${()=>{const{tokens:n}=l(),{buttonTabs:e}=n;return d`
      &[data-focus-visible] {
        outline-width: ${e.panel.focusRing.width};
        outline-style: ${e.panel.focusRing.style};
        outline-color: ${e.panel.focusRing.color};
      }
    `}}
`,g=m.createContext({}),_=n=>{const{children:e,...t}=n;return o.jsx(g.Provider,{value:t,children:e})};_.__docgenInfo={description:"",methods:[],displayName:"ButtonTabsProvider"};function s(n){const{children:e,testID:t="button-tabs",...a}=n,{activeItemId:r,onChange:u}=a;function p(i){u(i)}return o.jsx(_,{...a,testID:t,children:o.jsx(R,{selectedKey:r,onSelectionChange:p,"data-testid":t,children:e})})}s.Items=function(){const{variant:e=b.DEFAULT_VARIANT,items:t,typographyVariant:a,testID:r}=m.useContext(g),{tokens:u}=l(),{buttonAlt:p}=u;return o.jsx(C,{$variant:e,"data-testid":`${r}-items`,children:o.jsx(v,{items:t,children:i=>o.jsx(V,{id:i.id,$fullWidth:e==="stretch","data-testid":`${r}-item-${i.id}`,children:o.jsx(I,{color:"inherit",variant:a,component:"span",fontFamily:p.typography.fontFamily,children:i.label})})},`${e}-${a}`)})};s.Panels=function(){const{items:e,testID:t}=m.useContext(g);return o.jsx("div",{"data-testid":`${t}-panels`,children:o.jsx(v,{items:e,children:a=>o.jsx(E,{id:a.id,"data-testid":`${t}-panel-${a.id}`,children:a.panel},a.id)})})};s.__docgenInfo={description:"",methods:[{name:"Items",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"ButtonTabs"};const h={activeItemId:"button-tab-01",items:[{id:"button-tab-01",label:"Tab label 01",panel:o.jsx(I,{children:"Tab panel 01"})},{id:"button-tab-02",label:"Tab label 02",panel:o.jsx(P,{text:"Tab panel 02"})}]},{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Components/Navigation/ButtonTabs",component:s,render:function(e){const[,t]=O();function a(r){t({activeItemId:r}),j("onChange")()}return o.jsx(s,{...e,onChange:a,children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(s.Items,{}),o.jsx(s.Panels,{})]})})},argTypes:{variant:{control:{type:"select"},options:b.VARIANTS},typographyVariant:{control:{type:"select"},options:f.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}},activeItemId:{control:{type:"text"}}},args:{variant:b.DEFAULT_VARIANT,typographyVariant:f.DEFAULT_TYPOGRAPHY_VARIANT,items:h.items,activeItemId:h.activeItemId}},c={};var x,T,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const w=["Basic"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{K as B,c as a};
