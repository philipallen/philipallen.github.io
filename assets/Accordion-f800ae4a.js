import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as p}from"./index-c013ead5.js";import{A as O}from"./index-f5bdf07a.js";import{a as i,u as n,b as a}from"./index-f9091704.js";import{b as T}from"./index-b1778622.js";import{T as w}from"./Typography-401b61b3.js";const j=i.div`
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
`,A=i.div`
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
`,I=i.div`
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
`,q=i.div`
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
`,R=i.div`
  ${({hidden:r})=>{const{tokens:o}=n(),{accordion:e}=o;return[a`
        display: ${r?"none":"block"};
        padding: ${e.content.padding};
      `]}}
`;function D(r){const{title:o,content:e,isOpen:$,initialOpen:m=!1,onChange:f,variant:c=O.DEFAULT_VARIANT,headingLevel:b=3,testID:l="accordion"}=r,h=p.useId(),u=p.useId(),{tokens:v}=n(),{accordion:g}=v,[y,k]=p.useState(m),d=$??y,x=f??k;function C(){x(!d)}return t.jsxs(j,{$variant:c,"data-testid":l,children:[t.jsxs(s,{id:h,type:"button",onClick:C,"aria-expanded":d,"aria-controls":u,"data-testid":`${l}-header`,children:[t.jsxs(A,{$variant:c,children:[t.jsx(w,{color:"inherit",component:`h${b}`,variant:g.header.text.typography.variant[c],fontFamily:g.header.text.typography.fontFamily,noWrap:!0,children:o}),t.jsx(I,{$isOpen:d,children:t.jsx(T,{})})]}),t.jsx(q,{$isOpen:d})]}),t.jsx(R,{id:u,role:"region",hidden:!d,"aria-labelledby":h,"data-testid":`${l}-content`,children:e})]})}D.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"JSX.Element"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},initialOpen:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"CoreAccordion.Variant"},description:""},headingLevel:{required:!1,tsType:{name:"CoreAccordion.HeadingLevel"},description:""}}};export{D as A};
