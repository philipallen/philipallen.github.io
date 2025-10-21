import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as v}from"./index-CcKhGcwW.js";import{A as p}from"./index-CoGc3U6X.js";import{a,u as n,b as d}from"./index-5VPm3mt9.js";import{e as y}from"./index-CA_uD5kO.js";import{$ as E}from"./Button-DPtumZN7.js";import{$ as j,a as w}from"./Disclosure-Cqq4V_T6.js";import{T as C}from"./Typography-Fd9Ks9lL.js";const A=a(j)`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[d`
        display: grid;
        background: ${e.background[o]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`,i=a(E)`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[d`
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
`,R=a.div`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[d`
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

        ${i}[data-hovered] & {
          background: ${e.header.inner.backgroundColor.hover};
        }

        ${i}[data-pressed] & {
          background: ${e.header.inner.backgroundColor.active[o]};
        }
      `]}}
`,D=a.div`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[d`
        color: ${e.header.icon.color.base};
        transform: rotateX(${o?"180deg":"0deg"});

        svg {
          display: block;
          width: ${e.header.icon.width};
          height: ${e.header.icon.height};
        }

        ${i}[data-hovered] & {
          color: ${e.header.icon.color.hover};
        }

        ${i}[data-pressed] & {
          color: ${e.header.icon.color.active};
        }
      `]}}
`,I=a.div`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[d`
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
`,O=a(w)`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[o&&d`
          padding: ${e.content.padding};
        `]}}
`;function V(o){const{title:r,content:e,isOpen:$,initialOpen:g=!1,onChange:f,variant:s=p.DEFAULT_VARIANT,headingLevel:u=p.DEFAULT_HEADING_LEVEL,testID:l="accordion"}=o,{tokens:b}=n(),{accordion:h}=b,[x,m]=v.useState(g),c=$??x,k=f??m;return t.jsxs(A,{isExpanded:c,onExpandedChange:k,$variant:s,"data-testid":l,children:[t.jsxs(i,{slot:"trigger",$variant:s,"data-testid":`${l}-header`,children:[t.jsxs(R,{$variant:s,children:[t.jsx(C,{color:"inherit",component:`h${u}`,variant:h.header.text.typography.variant[s],fontFamily:h.header.text.typography.fontFamily,children:r}),t.jsx(D,{$isExpanded:c,children:t.jsx(y,{})})]}),t.jsx(I,{$isExpanded:c})]}),t.jsx(O,{$isExpanded:c,"data-testid":`${l}-content`,children:e})]})}export{V as A};
