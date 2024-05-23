import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as l}from"./index-c013ead5.js";import{a as i,u as n,b as a}from"./index-912b60f4.js";import{a as O}from"./index-71d43b47.js";import{T as w}from"./Typography-a205704a.js";const j=i.div`
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
        text-decoration: ${o.header.text.decoration.base};
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
          text-decoration: ${o.header.text.decoration.hover};
        }

        &:active {
          color: ${o.header.text.color.active};
          text-decoration: ${o.header.text.decoration.active};
        }
      `]}}
`,T=i.div`
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
`;function A(r){const{title:o,content:e,isOpen:g,initialOpen:$=!1,onChange:m,variant:c="default",headingLevel:b=3,testID:f="accordion"}=r,p=l.useId(),h=l.useId(),{tokens:v}=n(),{accordion:u}=v,[y,k]=l.useState($),d=g??y,x=m??k;function C(){x(!d)}return t.jsxs(j,{$variant:c,"data-testid":f,children:[t.jsxs(s,{id:p,type:"button",onClick:C,"aria-expanded":d,"aria-controls":h,children:[t.jsxs(T,{$variant:c,children:[t.jsx(w,{color:"inherit",component:`h${b}`,fontFamily:u.header.text.fontFamily,variant:u.header.text.typographyVariant[c],noWrap:!0,children:o}),t.jsx(I,{$isOpen:d,children:t.jsx(O,{})})]}),t.jsx(q,{$isOpen:d})]}),t.jsx(R,{id:h,role:"region",hidden:!d,"aria-labelledby":p,children:e})]})}A.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"JSX.Element"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},initialOpen:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"CoreAccordion.Variant"},description:""},headingLevel:{required:!1,tsType:{name:"CoreAccordion.HeadingLevel"},description:""}}};export{A};
