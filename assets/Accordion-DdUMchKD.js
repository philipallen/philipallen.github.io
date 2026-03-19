import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{r as v}from"./index-CcKhGcwW.js";import{A as p}from"./index-eS8l-D1x.js";import{u as n,l as a,d}from"./index-C1QKVHyt.js";import{C as y}from"./index-B_KGh3jf.js";import{$ as E}from"./Button-T8IefSzn.js";import{$ as C,a as j}from"./Disclosure-DomN6hwn.js";import{T as w}from"./Typography-BK_ZjFCe.js";const A=d(C)`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[a`
        display: grid;
        background: ${e.background[o]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`,i=d(E)`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[a`
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
`,R=d.div`
  ${({$variant:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[a`
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
`,D=d.div`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[a`
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
`,I=d.div`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[a`
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
`,O=d(j)`
  ${({$isExpanded:o})=>{const{tokens:r}=n(),{accordion:e}=r;return[o&&a`
          padding: ${e.content.padding};
        `]}}
`;function T(o){const{title:r,content:e,isOpen:$,initialOpen:g=!1,onChange:f,variant:s=p.DEFAULT_VARIANT,headingLevel:u=p.DEFAULT_HEADING_LEVEL,testID:l="accordion"}=o,{tokens:b}=n(),{accordion:h}=b,[x,m]=v.useState(g),c=$??x,k=f??m;return t.jsxs(A,{isExpanded:c,onExpandedChange:k,$variant:s,"data-testid":l,children:[t.jsxs(i,{slot:"trigger",$variant:s,"data-testid":`${l}-header`,children:[t.jsxs(R,{$variant:s,children:[t.jsx(w,{color:"inherit",component:`h${u}`,variant:h.header.text.typography.variant[s],fontFamily:h.header.text.typography.fontFamily,children:r}),t.jsx(D,{$isExpanded:c,children:t.jsx(y,{})})]}),t.jsx(I,{$isExpanded:c})]}),t.jsx(O,{$isExpanded:c,"data-testid":`${l}-content`,children:e})]})}T.displayName="Accordion";export{T as A};
