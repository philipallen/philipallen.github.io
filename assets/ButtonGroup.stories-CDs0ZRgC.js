import{f as _}from"./index-Cnk2rnxF.js";import{a as c,l as p}from"./index-C3m9D1_L.js";import{j as i}from"./jsx-runtime-DQ32znRX.js";import{a as $,u as m,b as s}from"./index-C-LSVLXB.js";import{r as v}from"./index-DH5ua8nC.js";import{T as B}from"./Typography-DPnR7vBA.js";import{$ as I}from"./VisuallyHidden-KFGkQyAi.js";const R=$.fieldset`
  ${({$variant:o})=>{const{tokens:e}=m(),{buttonGroup:r,breakpoint:n}=e;return[s`
        all: unset;
        display: flex;
        gap: ${r.items.gap};
        max-width: ${r.maxWidth[o]};
      `,o==="center"&&s`
          justify-content: center;
        `,o==="stacked"&&s`
          flex-direction: column;

          @media (min-width: ${n.mobile}) {
            display: inline-flex;
          }
        `]}}
`,G=$.label`
  ${({$size:o,$fullWidth:e,$textAlign:r})=>{const{tokens:n}=m(),{buttonAlt:t}=n;return[s`
        display: inline-flex;
        align-items: center;
        border-width: ${t.stroke.width};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color.base};
        border-radius: ${t.radius};
        min-width: ${t.minWidth};
        min-height: ${t.minHeight[o]};
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

        &:has(:checked) {
          border-color: ${t.stroke.color.active};
          color: ${t.color.active};
          background: ${t.backgroundColor.active};
        }
      `,e&&s`
          width: 100%;
        `,r==="center"&&s`
          text-align: center;
          justify-content: center;
        `]}}
`,g=v.forwardRef((o,e)=>{const{label:r,size:n=c.DEFAULT_SIZE,fullWidth:t=!1,textAlign:d=c.DEFAULT_TEXT_ALIGN,typographyVariant:u=c.DEFAULT_TYPOGRAPHY_VARIANT,testID:a="button-group-item",...x}=o,{tokens:k}=m(),{buttonAlt:T}=k;return i.jsxs(G,{$size:n,$fullWidth:t,$textAlign:d,"data-testid":`${a}-item`,children:[i.jsx(I,{children:i.jsx("input",{...x,ref:e,type:"radio","aria-label":r})}),i.jsx(B,{color:"inherit",variant:u,fontFamily:T.typography.fontFamily,style:{wordBreak:"break-word"},children:r})]})});g.displayName="ButtonGroupItem";g.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem"};function A(o){const{variant:e=p.DEFAULT_VARIANT,name:r,items:n,onChange:t,typographyVariant:d,testID:u="button-group"}=o;return i.jsx(R,{$variant:e,"data-testid":u,children:n.map(a=>i.jsx(g,{label:a.label,size:"lg",fullWidth:["stretch","stacked"].includes(e),textAlign:e==="stacked"?"left":"center",typographyVariant:d,name:r,value:a.value,checked:a.checked,onChange:t,testID:u},a.value))})}A.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};const b={name:"button-group-name",items:[{label:"Button label 01",value:"button-group-item-01"},{label:"Button label 02",value:"button-group-item-02"},{label:"Button label 03",value:"button-group-item-03"},{label:"Button label 04",value:"button-group-item-04"}]},j={title:"Components/Navigation/ButtonGroup",component:A,argTypes:{variant:{control:{type:"select"},options:p.VARIANTS},name:{control:{type:"text"}},items:{control:{disable:!0}},typographyVariant:{control:{type:"select"},options:c.TYPOGRAPHY_VARIANTS}},args:{variant:p.DEFAULT_VARIANT,name:b.name,items:b.items,onChange:_(),typographyVariant:c.DEFAULT_TYPOGRAPHY_VARIANT}},l={};var f,h,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const w=["Basic"],L=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{L as B,l as a};
