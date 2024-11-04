import{j as n}from"./jsx-runtime-DQ32znRX.js";import{a as C}from"./chunk-WFFRPTHA-LPjJ2Zra.js";import{a as p,m as I}from"./index-C3m9D1_L.js";import{r as h}from"./index-DH5ua8nC.js";import{a as y,u as T,b as c}from"./index-C-LSVLXB.js";import{T as u}from"./Typography-DPnR7vBA.js";import{$ as D}from"./VisuallyHidden-KFGkQyAi.js";import{g as E}from"./Tabs.utils-MQt-APGj.js";const w=y.div`
  ${({$variant:s})=>{const{tokens:o}=T(),{buttonTabs:e}=o;return[c`
        display: flex;
        gap: ${e.items.gap};
      `,s==="center"&&c`
          justify-content: center;
        `]}}
`,N=y.div`
  ${({$isActive:s})=>{const{tokens:o}=T(),{buttonTabs:e}=o;return c`
      display: ${s?"block":"none"};

      &:focus-visible {
        position: relative;
        z-index: 1;
        outline-width: ${e.panel.focusRing.width};
        outline-style: ${e.panel.focusRing.style};
        outline-color: ${e.panel.focusRing.color};
      }
    `}}
`,R=h.createContext({}),B=s=>{const{children:o,...e}=s;return n.jsx(R.Provider,{value:e,children:o})};function P(){return h.useContext(R)}B.__docgenInfo={description:"",methods:[],displayName:"ButtonTabsProvider"};const V=y.label`
  ${({$size:s,$isActive:o,$fullWidth:e,$textAlign:r})=>{const{tokens:a}=T(),{buttonAlt:t}=a;return[c`
        display: inline-flex;
        align-items: center;
        border-width: ${t.stroke.width};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color.base};
        border-radius: ${t.radius};
        min-width: ${t.minWidth};
        min-height: ${t.minHeight[s]};
        padding-top: ${t.padding.top};
        padding-left: ${t.padding.left};
        padding-right: ${t.padding.right};
        padding-bottom: ${t.padding.bottom};
        color: ${t.color.base};
        background: ${t.backgroundColor.base};
        cursor: pointer;

        &:has(:focus-visible) {
          outline-width: ${t.focusRing.width};
          outline-style: ${t.focusRing.style};
          outline-color: ${t.focusRing.color};
          outline-offset: ${t.focusRing.offset};
        }

        &:hover {
          color: ${t.color.hover};
          background: ${t.backgroundColor.hover};
        }
      `,o&&c`
          border-color: ${t.stroke.color.active};
          color: ${t.color.active};
          background: ${t.backgroundColor.active};

          &:hover {
            border-color: ${t.stroke.color.active};
            color: ${t.color.active};
            background: ${t.backgroundColor.active};
          }
        `,e&&c`
          width: 100%;
        `,r==="center"&&c`
          text-align: center;
          justify-content: center;
        `]}}
`,x=h.forwardRef((s,o)=>{const{id:e,label:r,isActive:a,size:t=p.DEFAULT_SIZE,fullWidth:m=!1,textAlign:g=p.DEFAULT_TEXT_ALIGN,typographyVariant:$=p.DEFAULT_TYPOGRAPHY_VARIANT,testID:v="button-tabs-item",...i}=s,{tokens:l}=T(),{buttonAlt:f}=l;return n.jsxs(V,{$size:t,$isActive:a,$fullWidth:m,$textAlign:g,"data-testid":v,children:[n.jsx(D,{children:n.jsx("button",{...i,ref:o,type:"button",role:"tab",id:e,tabIndex:a?void 0:-1,"aria-label":r,"aria-selected":a,"aria-controls":`${e}-panel`})}),n.jsx(u,{color:"inherit",variant:$,fontFamily:f.typography.fontFamily,children:r})]})});x.displayName="ButtonTabsItem";x.__docgenInfo={description:"",methods:[],displayName:"ButtonTabsItem"};function d(s){const{testID:o="button-tabs",...e}=s;return n.jsx(B,{...e,testID:o})}d.Items=function(){const{variant:o=I.DEFAULT_VARIANT,items:e,activeItemId:r,onChange:a,typographyVariant:t,testID:m}=P(),g=h.useRef(new Map);function $(i){const{id:l}=i.currentTarget;l!==r&&a(l)}function v(i){var f;const l=E(i,e,r);(f=g.current.get(l))==null||f.focus(),a(l)}return n.jsx(w,{role:"tablist",$variant:o,"data-testid":`${m}-items`,children:e.map(i=>n.jsx(x,{ref:l=>g.current.set(i.id,l),id:i.id,label:i.label,isActive:i.id===r,size:"md",fullWidth:o==="stretch",textAlign:"center",typographyVariant:t,onClick:$,onKeyDown:v,testID:m},i.id))})};d.Panels=function(){const{items:o,activeItemId:e,testID:r}=P();return n.jsx("div",{"data-testid":`${r}-panels`,children:o.map(a=>{const t=a.id===e;return n.jsx(N,{role:"tabpanel",id:`${a.id}-panel`,tabIndex:t?0:-1,$isActive:t,"aria-labelledby":a.id,"data-testid":`${r}-panel-${a.id}`,children:a.panel},a.id)})})};d.__docgenInfo={description:"",methods:[{name:"Items",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"ButtonTabs"};const A={activeItemId:"button-tab-01",items:[{id:"button-tab-01",label:"Tab label 01",panel:n.jsx(u,{children:"Tab panel 01"})},{id:"button-tab-02",label:"Tab label 02",panel:n.jsx(u,{children:"Tab panel 02"})},{id:"button-tab-03",label:"Tab label 03",panel:n.jsx(u,{children:"Tab panel 03"})},{id:"button-tab-04",label:"Tab label 04",panel:n.jsx(u,{children:"Tab panel 04"})}]},{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Components/Navigation/ButtonTabs",component:d,render:function(o){const[,e]=O();function r(a){e({activeItemId:a}),C("onChange")()}return n.jsx(d,{...o,onChange:r,children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(d.Items,{}),n.jsx(d.Panels,{})]})})},argTypes:{variant:{control:{type:"select"},options:I.VARIANTS},items:{control:{disable:!0}},activeItemId:{control:{type:"text"}},typographyVariant:{control:{type:"select"},options:p.TYPOGRAPHY_VARIANTS}},args:{variant:I.DEFAULT_VARIANT,items:A.items,activeItemId:A.activeItemId,typographyVariant:p.DEFAULT_TYPOGRAPHY_VARIANT}},b={};var _,j,k;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const L=["Basic"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{M as B,b as a};
