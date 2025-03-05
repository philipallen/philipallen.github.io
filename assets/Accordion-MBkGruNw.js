import{j as t}from"./jsx-runtime-DQ32znRX.js";import{r as v}from"./index-DH5ua8nC.js";import{A as h}from"./index-BrtwDHqb.js";import{a,u as n,b as i}from"./index-CzvSJj6w.js";import{b as k}from"./index-BYwLR37K.js";import{$ as E}from"./Button-nmnqENox.js";import{$ as T,a as C}from"./Disclosure-CFwmEZX-.js";import{T as w}from"./Typography-RMDmhaRB.js";const A=a(T)`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[i`
        display: grid;
        background: ${e.background[o]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`,d=a(E)`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[i`
        all: unset;
        box-sizing: border-box;
        position: relative;
        display: grid;
        min-height: ${e.header.minHeight[o]};
        padding: ${e.header.padding};
        color: ${e.header.text.color.base};
        text-decoration: ${e.header.text.decoration.line.base};
        text-underline-offset: ${e.header.text.decoration.offset};
        cursor: pointer;

        &[data-focus-visible] {
          border-radius: ${e.header.focusRing.radius};
          outline-width: ${e.header.focusRing.width};
          outline-style: ${e.header.focusRing.style};
          outline-color: ${e.header.focusRing.color};
          outline-offset: ${e.header.focusRing.offset};
        }

        &[data-hovered] {
          color: ${e.header.text.color.hover};
          text-decoration: ${e.header.text.decoration.line.hover};
        }

        &[data-pressed] {
          color: ${e.header.text.color.active};
          text-decoration: ${e.header.text.decoration.line.active};
        }
      `]}}
`,j=a.div`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[i`
        display: grid;
        gap: ${e.header.inner.gap};
        align-items: center;
        grid-template-columns: 1fr auto;
        padding-top: ${e.header.inner.padding.top[o]};
        padding-left: ${e.header.inner.padding.left};
        padding-right: ${e.header.inner.padding.right};
        padding-bottom: ${e.header.inner.padding.bottom[o]};
        border-radius: ${e.header.inner.radius};
        background: ${e.header.inner.backgroundColor.base};

        ${d}[data-hovered] & {
          background: ${e.header.inner.backgroundColor.hover};
        }

        ${d}[data-pressed] & {
          background: ${e.header.inner.backgroundColor.active[o]};
        }
      `]}}
`,O=a.div`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[i`
        color: ${e.header.icon.color.base};
        transform: rotateX(${o?"180deg":"0deg"});

        svg {
          display: block;
          width: ${e.header.icon.width};
          height: ${e.header.icon.height};
        }

        ${d}[data-hovered] & {
          color: ${e.header.icon.color.hover};
        }

        ${d}[data-pressed] & {
          color: ${e.header.icon.color.active};
        }
      `]}}
`,q=a.div`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[i`
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        display: ${o?"block":"none"};
        height: ${e.separator.stroke.width};
        margin-left: ${e.separator.margin.left};
        margin-right: ${e.separator.margin.right};
        border-top-width: ${e.separator.stroke.width};
        border-top-style: ${e.separator.stroke.style};
        border-top-color: ${e.separator.stroke.color};
      `]}}
`,I=a(C)`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[o&&i`
          padding: ${e.content.padding};
        `]}}
`;function L(o){const{title:r,content:e,isOpen:$,initialOpen:g=!1,onChange:u,variant:s=h.DEFAULT_VARIANT,headingLevel:f=h.DEFAULT_HEADING_LEVEL,testID:p="accordion"}=o,{tokens:m}=n(),{accordion:l}=m,[b,x]=v.useState(g),c=$??b,y=u??x;return t.jsxs(A,{isExpanded:c,onExpandedChange:y,$variant:s,"data-testid":p,children:[t.jsxs(d,{slot:"trigger",$variant:s,"data-testid":`${p}-header`,children:[t.jsxs(j,{$variant:s,children:[t.jsx(w,{color:"inherit",component:`h${f}`,variant:l.header.text.typography.variant[s],fontFamily:l.header.text.typography.fontFamily,children:r}),t.jsx(O,{$isExpanded:c,children:t.jsx(k,{})})]}),t.jsx(q,{$isExpanded:c})]}),t.jsx(I,{$isExpanded:c,"data-testid":`${p}-content`,children:e})]})}L.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"JSX.Element"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},initialOpen:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"CoreAccordion.Variant"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""}}};export{L as A};
