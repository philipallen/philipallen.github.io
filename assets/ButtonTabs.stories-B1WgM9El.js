import{j as n}from"./jsx-runtime-DQ32znRX.js";import{a as C}from"./chunk-WFFRPTHA-LPjJ2Zra.js";import{a as g,m as I}from"./index-DKJt7waT.js";import{r as i}from"./index-DH5ua8nC.js";import{g as D,a as w}from"./Tabs.utils-1Cl19AkY.js";import{a as v,u as h,b as d}from"./index-CtBUti8q.js";import{T as B}from"./Typography-v4_88_aK.js";import{$ as N}from"./VisuallyHidden-KFGkQyAi.js";import{B as V}from"./Button-ClpVcpa0.js";const F=v.div`
  ${({$variant:s})=>{const{tokens:e}=h(),{buttonTabs:o}=e;return[d`
        display: flex;
        gap: ${o.items.gap};
      `,s==="center"&&d`
          justify-content: center;
        `]}}
`,O=v.div`
  ${({$isActive:s})=>{const{tokens:e}=h(),{buttonTabs:o}=e;return d`
      display: ${s?"block":"none"};

      &:focus-visible {
        position: relative;
        z-index: 1;
        outline-width: ${o.panel.focusRing.width};
        outline-style: ${o.panel.focusRing.style};
        outline-color: ${o.panel.focusRing.color};
      }
    `}}
`,P=i.createContext({}),E=s=>{const{children:e,...o}=s;return n.jsx(P.Provider,{value:o,children:e})};function y(){return i.useContext(P)}E.__docgenInfo={description:"",methods:[],displayName:"ButtonTabsProvider"};const S=v.label`
  ${({$isActive:s,$fullWidth:e,$textAlign:o})=>{const{tokens:a}=h(),{buttonAlt:t}=a;return[d`
        display: inline-flex;
        align-items: center;
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
      `,s&&d`
          border-color: ${t.stroke.color.active};
          color: ${t.color.active};
          background: ${t.backgroundColor.active};

          &:hover {
            border-color: ${t.stroke.color.active};
            color: ${t.color.active};
            background: ${t.backgroundColor.active};
          }
        `,e&&d`
          width: 100%;
        `,o==="center"&&d`
          text-align: center;
          justify-content: center;
        `]}}
`,x=i.forwardRef((s,e)=>{const{id:o,label:a,isActive:t,fullWidth:c=!1,textAlign:p=g.DEFAULT_TEXT_ALIGN,typographyVariant:b=g.DEFAULT_TYPOGRAPHY_VARIANT,testID:m="button-tabs-item",...$}=s,{tokens:T}=h(),{buttonAlt:r}=T;return n.jsxs(S,{$isActive:t,$fullWidth:c,$textAlign:p,"data-testid":m,children:[n.jsx(N,{children:n.jsx("button",{...$,ref:e,type:"button",role:"tab",id:o,tabIndex:t?void 0:-1,"aria-label":a,"aria-selected":t,"aria-controls":`${o}-panel`})}),n.jsx(B,{color:"inherit",variant:b,fontFamily:r.typography.fontFamily,children:a})]})});x.displayName="ButtonTabsItem";x.__docgenInfo={description:"",methods:[],displayName:"ButtonTabsItem"};function u(s){const{testID:e="button-tabs",...o}=s;return n.jsx(E,{...o,testID:e})}u.Items=function(){const{variant:e=I.DEFAULT_VARIANT,items:o,activeItemId:a,onChange:t,typographyVariant:c,testID:p}=y(),b=i.useRef(new Map);function m(r){const{id:l}=r.currentTarget;l!==a&&t(l)}function $(r){var A;const l=w(r,o,a);(A=b.current.get(l))==null||A.focus(),t(l)}const T=i.useMemo(()=>o.map(({id:r})=>r).join(" "),[o]);return n.jsx(F,{role:"tablist",$variant:e,"data-testid":`${p}-items`,"aria-owns":T,children:o.map(r=>n.jsx(x,{ref:l=>b.current.set(r.id,l),id:r.id,label:r.label,isActive:r.id===a,fullWidth:e==="stretch",textAlign:"center",typographyVariant:c,onClick:m,onKeyDown:$,testID:`${p}-item-${r.id}`},r.id))})};u.Panels=function(){const{items:e,testID:o}=y();return n.jsx("div",{"data-testid":`${o}-panels`,children:e.map(a=>n.jsx(L,{item:a},a.id))})};function L(s){const{item:e}=s,{activeItemId:o,testID:a}=y(),t=e.id===o,c=i.useRef(null),[p,b]=i.useState(!1);return i.useEffect(()=>{if(c.current){const m=D(c.current);b(m.length>0)}},[e.panel]),n.jsx(O,{ref:c,role:"tabpanel",id:`${e.id}-panel`,tabIndex:t&&!p?0:-1,$isActive:t,"aria-labelledby":e.id,"data-testid":`${a}-panel-${e.id}`,children:e.panel},e.id)}u.__docgenInfo={description:"",methods:[{name:"Items",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"ButtonTabs"};const _={activeItemId:"button-tab-01",items:[{id:"button-tab-01",label:"Tab label 01",panel:n.jsx(B,{children:"Tab panel 01"})},{id:"button-tab-02",label:"Tab label 02",panel:n.jsx(V,{text:"Tab panel 02"})}]},{useArgs:U}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:"Components/Navigation/ButtonTabs",component:u,render:function(e){const[,o]=U();function a(t){o({activeItemId:t}),C("onChange")()}return n.jsx(u,{...e,onChange:a,children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(u.Items,{}),n.jsx(u.Panels,{})]})})},argTypes:{variant:{control:{type:"select"},options:I.VARIANTS},items:{control:{disable:!0}},activeItemId:{control:{type:"text"}},typographyVariant:{control:{type:"select"},options:g.TYPOGRAPHY_VARIANTS}},args:{variant:I.DEFAULT_VARIANT,items:_.items,activeItemId:_.activeItemId,typographyVariant:g.DEFAULT_TYPOGRAPHY_VARIANT}},f={};var j,k,R;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(R=(k=f.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const H=["Basic"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,__namedExportsOrder:H,default:Y},Symbol.toStringTag,{value:"Module"}));export{Z as B,f as a};
