import{j as t}from"./jsx-runtime-DQ32znRX.js";import{r as p}from"./index-DH5ua8nC.js";import{A as $}from"./index-C3m9D1_L.js";import{a as i,u as n,b as a}from"./index-C-LSVLXB.js";import{c as T}from"./index-COlUQA8Q.js";import{T as w}from"./Typography-DPnR7vBA.js";const A=i.div`
  ${({$variant:r})=>{const{tokens:o}=n(),{accordion:e}=o;return[a`
        display: grid;
        background: ${e.background[r]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`,s=i.button`
  ${()=>{const{tokens:r}=n(),{accordion:o}=r;return[a`
        all: unset;
        position: relative;
        display: grid;
        padding: ${o.header.padding};
        color: ${o.header.text.color.base};
        text-decoration: ${o.header.text.decoration.line.base};
        text-underline-offset: ${o.header.text.decoration.offset};
        cursor: pointer;

        &:focus-visible {
          border-radius: ${o.header.focusRing.radius};
          outline-width: ${o.header.focusRing.width};
          outline-style: ${o.header.focusRing.style};
          outline-color: ${o.header.focusRing.color};
          outline-offset: ${o.header.focusRing.offset};
        }

        &:hover {
          color: ${o.header.text.color.hover};
          text-decoration: ${o.header.text.decoration.line.hover};
        }

        &:active {
          color: ${o.header.text.color.active};
          text-decoration: ${o.header.text.decoration.line.active};
        }
      `]}}
`,I=i.div`
  ${({$variant:r})=>{const{tokens:o}=n(),{accordion:e}=o;return[a`
        display: grid;
        gap: ${e.header.inner.gap};
        align-items: center;
        grid-template-columns: 1fr auto;
        padding-top: ${e.header.inner.padding.top[r]};
        padding-left: ${e.header.inner.padding.left};
        padding-right: ${e.header.inner.padding.right};
        padding-bottom: ${e.header.inner.padding.bottom[r]};
        border-radius: ${e.header.inner.radius};
        background: ${e.header.inner.backgroundColor.base};

        ${s}:hover & {
          background: ${e.header.inner.backgroundColor.hover};
        }

        ${s}:active & {
          background: ${e.header.inner.backgroundColor.active[r]};
        }
      `]}}
`,j=i.div`
  ${({$isOpen:r})=>{const{tokens:o}=n(),{accordion:e}=o;return[a`
        color: ${e.header.icon.color.base};
        transform: rotateX(${r?"180deg":"0deg"});

        svg {
          display: block;
          width: ${e.header.icon.width};
          height: ${e.header.icon.height};
        }

        ${s}:hover & {
          color: ${e.header.icon.color.hover};
        }

        ${s}:active & {
          color: ${e.header.icon.color.active};
        }
      `]}}
`,D=i.div`
  ${({$isOpen:r})=>{const{tokens:o}=n(),{accordion:e}=o;return[a`
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        display: ${r?"block":"none"};
        height: ${e.separator.stroke.width};
        margin-left: ${e.separator.margin.left};
        margin-right: ${e.separator.margin.right};
        border-top-width: ${e.separator.stroke.width};
        border-top-style: ${e.separator.stroke.style};
        border-top-color: ${e.separator.stroke.color};
      `]}}
`,E=i.div`
  ${({hidden:r})=>{const{tokens:o}=n(),{accordion:e}=o;return[a`
        display: ${r?"none":"block"};
        padding: ${e.content.padding};
      `]}}
`;function q(r){const{title:o,content:e,isOpen:m,initialOpen:f=!1,onChange:b,variant:c=$.DEFAULT_VARIANT,headingLevel:v=$.DEFAULT_HEADING_LEVEL,testID:l="accordion"}=r,h=p.useId(),u=p.useId(),{tokens:y}=n(),{accordion:g}=y,[k,x]=p.useState(f),d=m??k,C=b??x;function O(){C(!d)}return t.jsxs(A,{$variant:c,"data-testid":l,children:[t.jsxs(s,{id:h,type:"button",onClick:O,"aria-expanded":d,"aria-controls":u,"data-testid":`${l}-header`,children:[t.jsxs(I,{$variant:c,children:[t.jsx(w,{color:"inherit",component:`h${v}`,variant:g.header.text.typography.variant[c],fontFamily:g.header.text.typography.fontFamily,noWrap:!0,children:o}),t.jsx(j,{$isOpen:d,children:t.jsx(T,{})})]}),t.jsx(D,{$isOpen:d})]}),t.jsx(E,{id:u,role:"region",hidden:!d,"aria-labelledby":h,"data-testid":`${l}-content`,children:e})]})}q.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"JSX.Element"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},initialOpen:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"CoreAccordion.Variant"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""}}};export{q as A};
