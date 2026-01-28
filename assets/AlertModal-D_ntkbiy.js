import{j as d}from"./jsx-runtime-Blucd9Qg.js";import{h as g}from"./index-Cs4xJi_A.js";import{u as p,l as i,d as c}from"./index-B5pQ5BfA.js";import{f as E,g as B,W as F,E as L}from"./index-B_KGh3jf.js";import{C as T,M as I,S as _}from"./ScrollShadowContainer-CaS-ryUs.js";import{r as f}from"./index-CcKhGcwW.js";import{T as A}from"./Typography-TwrAENUo.js";import{B as S}from"./Button-uG_7Cu-8.js";const P=c(T)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,C=c.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{modal:o,alertModal:t}=a;return i`
      display: grid;
      border-top-width: ${t.stroke.top.width};
      border-top-style: ${t.stroke.top.style};
      border-top-color: ${t.stroke.top.color[e]};
      padding-top: ${t.padding.mobile.top};
      padding-left: ${t.padding.mobile.left};
      padding-right: ${t.padding.mobile.right};

      padding-bottom: ${t.header.padding.bottom};
      gap: ${t.header.gap};

      @media (min-width: ${o.breakpoints.tablet}) {
        padding-top: ${t.padding.tablet.top};
        padding-left: ${t.padding.tablet.left};
        padding-right: ${t.padding.tablet.right};
      }
    `}}
`,D=c.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return i`
      svg {
        display: block;
        width: ${o.icon.width.mobile};
        height: ${o.icon.height.mobile};

        & [data-primary-color] {
          color: ${o.icon.primaryColor[e]};
        }

        & [data-secondary-color] {
          color: ${o.icon.secondaryColor[e]};
        }
      }

      @media (min-width: ${t.breakpoints.tablet}) {
        svg {
          width: ${o.icon.width.tablet};
          height: ${o.icon.height.tablet};
        }
      }
    `}}
`,O=c.div`
  ${({$stickFooter:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return[i`
        color: ${o.body.color};

        padding-left: ${o.padding.mobile.left};
        padding-right: ${o.padding.mobile.right};

        @media (min-width: ${t.breakpoints.tablet}) {
          padding-left: ${o.padding.tablet.left};
          padding-right: ${o.padding.tablet.right};
        }
      `,e?i`
            padding-bottom: ${o.body.padding.withStickyFooter.bottom};
          `:i`
            padding-bottom: ${o.body.padding.default.bottom};
          `]}}
`,U=c.div`
  ${({$layout:e,$stickFooter:a})=>{const{tokens:o}=p(),{alertModal:t,modal:n}=o;return[i`
        gap: ${t.footer.gap};
      `,e==="inline"&&i`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&i`
          display: grid;
          grid-auto-flow: row;
        `,i`
        padding-left: ${t.padding.mobile.left};
        padding-right: ${t.padding.mobile.right};
        padding-bottom: ${t.padding.mobile.bottom};

        @media (min-width: ${n.breakpoints.tablet}) {
          padding-left: ${t.padding.tablet.left};
          padding-right: ${t.padding.tablet.right};
          padding-bottom: ${t.padding.tablet.bottom};
        }
      `,a&&i`
          padding-top: ${t.footer.sticky.padding.top};
          padding-bottom: ${t.footer.sticky.padding.bottom};
          @media (min-width: ${n.breakpoints.tablet}) {
            padding-top: ${t.footer.sticky.padding.top};
            padding-bottom: ${t.footer.sticky.padding.bottom};
          }
        `]}}
`;function u(){const{tokens:e}=p(),{modal:a}=e,o=window.matchMedia(`(min-width: ${a.breakpoints.tablet})`),[t,n]=f.useState(()=>o.matches);return f.useEffect(()=>{function l(r){n(r.matches)}return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]),{isMobile:!t}}function R(e,a,o){const{isMobile:t}=u(),n=(a||[]).map(s=>({...s,variant:"primary"})),l=(o||[]).map(s=>({...s,variant:"secondary"})),r=[];return t||e==="stacked"?r.push(...n.reverse(),...l.reverse()):r.push(...l,...n),{orderedButtonsProps:r}}function W(e){const{heading:a,headingLevel:o=g.DEFAULT_HEADING_LEVEL,severity:t=g.DEFAULT_SEVERITY,primaryButtonsProps:n,secondaryButtonsProps:l,footerLayout:r=g.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:s=!1,children:y,testID:k="alert-modal",...m}=e,{isOpen:v}=m,{tokens:w}=p(),{alertModal:h}=w,M={error:d.jsx(L,{}),warning:d.jsx(F,{}),success:d.jsx(B,{}),info:d.jsx(E,{})},{isMobile:x}=u(),{orderedButtonsProps:j}=R(r,n,l),b=d.jsx("div",{children:d.jsx(U,{$layout:x?"stacked":r,$stickFooter:s,children:j.map($=>d.jsx(S,{...$},$.children))})});return d.jsx(I,{"aria-label":a,testID:k,...m,children:v&&d.jsxs(P,{children:[d.jsxs(C,{$severity:t,children:[d.jsx(D,{$severity:t,children:M[t]}),d.jsx(A,{component:`h${o}`,variant:h.heading.typography.variant,fontFamily:h.heading.typography.fontFamily,children:a})]}),d.jsxs(_,{children:[d.jsx(O,{$stickFooter:s,children:y}),s?void 0:b]}),s?b:void 0]})})}W.displayName="AlertModal";export{W as A};
