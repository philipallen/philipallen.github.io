import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{h as g}from"./index-t7j5zUOh.js";import{u as p,l as d,d as c}from"./index-8wM7OKQ9.js";import{f as E,g as A,W as B,E as F}from"./index-B_KGh3jf.js";import{C as L,M as T,S as I}from"./ScrollShadowContainer-BJihmPc2.js";import{r as f}from"./index-CcKhGcwW.js";import{T as _}from"./Typography-0nEi_BJ1.js";import{B as S}from"./Button-aAz7k4Xt.js";const P=c(L)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,C=c.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{modal:o,alertModal:t}=a;return d`
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
  ${({$severity:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return d`
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
  ${({$stickFooter:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return[d`
        color: ${o.body.color};

        padding-left: ${o.padding.mobile.left};
        padding-right: ${o.padding.mobile.right};

        @media (min-width: ${t.breakpoints.tablet}) {
          padding-left: ${o.padding.tablet.left};
          padding-right: ${o.padding.tablet.right};
        }
      `,e?d`
            padding-bottom: ${o.body.padding.withStickyFooter.bottom};
          `:d`
            padding-bottom: ${o.body.padding.default.bottom};
          `]}}
`,U=c.div`
  ${({$layout:e,$stickFooter:a})=>{const{tokens:o}=p(),{alertModal:t,modal:n}=o;return[d`
        gap: ${t.footer.gap};
      `,e==="inline"&&d`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&d`
          display: grid;
          grid-auto-flow: row;
        `,d`
        padding-left: ${t.padding.mobile.left};
        padding-right: ${t.padding.mobile.right};
        padding-bottom: ${t.padding.mobile.bottom};

        @media (min-width: ${n.breakpoints.tablet}) {
          padding-left: ${t.padding.tablet.left};
          padding-right: ${t.padding.tablet.right};
          padding-bottom: ${t.padding.tablet.bottom};
        }
      `,a&&d`
          padding-top: ${t.footer.sticky.padding.top};
          padding-bottom: ${t.footer.sticky.padding.bottom};
          @media (min-width: ${n.breakpoints.tablet}) {
            padding-top: ${t.footer.sticky.padding.top};
            padding-bottom: ${t.footer.sticky.padding.bottom};
          }
        `]}}
`;function R(){return/ipad|iphone/i.test(navigator.userAgent)}function $(){const{tokens:e}=p(),{modal:a}=e,o=window.matchMedia(`(min-width: ${a.breakpoints.tablet})`),[t,n]=f.useState(()=>o.matches);return f.useEffect(()=>{function l(r){n(r.matches)}return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]),{isMobile:!t}}function W(e,a,o){const{isMobile:t}=$(),n=(a||[]).map(s=>({...s,variant:"primary"})),l=(o||[]).map(s=>({...s,variant:"secondary"})),r=[];return t||e==="stacked"?r.push(...n.reverse(),...l.reverse()):r.push(...l,...n),{orderedButtonsProps:r}}function H(e){const{heading:a,headingLevel:o=g.DEFAULT_HEADING_LEVEL,severity:t=g.DEFAULT_SEVERITY,primaryButtonsProps:n,secondaryButtonsProps:l,footerLayout:r=g.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:s=!1,children:y,testID:k="alert-modal",...m}=e,{isOpen:v}=m,{tokens:w}=p(),{alertModal:h}=w,M={error:i.jsx(F,{}),warning:i.jsx(B,{}),success:i.jsx(A,{}),info:i.jsx(E,{})},{isMobile:x}=$(),{orderedButtonsProps:j}=W(r,n,l),b=i.jsx("div",{children:i.jsx(U,{$layout:x?"stacked":r,$stickFooter:s,children:j.map(u=>i.jsx(S,{...u},u.children))})});return i.jsx(T,{"aria-label":a,testID:k,...m,children:v&&i.jsxs(P,{children:[i.jsxs(C,{$severity:t,role:R()?"banner":void 0,children:[i.jsx(D,{$severity:t,"aria-hidden":!0,children:M[t]}),i.jsx(_,{component:`h${o}`,variant:h.heading.typography.variant,fontFamily:h.heading.typography.fontFamily,children:a})]}),i.jsxs(I,{children:[i.jsx(O,{$stickFooter:s,children:y}),s?void 0:b]}),s?b:void 0]})})}H.displayName="AlertModal";export{H as A};
