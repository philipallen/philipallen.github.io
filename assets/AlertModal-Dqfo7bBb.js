import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{h as g}from"./index-eS8l-D1x.js";import{u as p,l as d,d as c}from"./index-C1QKVHyt.js";import{f as E,g as T,W as A,E as B}from"./index-B_KGh3jf.js";import{C as F,M as I,S as L}from"./ScrollShadowContainer-DNxf8I7n.js";import{r as f}from"./index-CcKhGcwW.js";import{T as S}from"./Typography-BK_ZjFCe.js";import{B as _}from"./Button-CbZ__EIw.js";const P=c(F)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,C=c.div`
  ${({$severity:a})=>{const{tokens:e}=p(),{modal:o,alertModal:t}=e;return d`
      display: grid;
      border-top-width: ${t.stroke.top.width};
      border-top-style: ${t.stroke.top.style};
      border-top-color: ${t.stroke.top.color[a]};
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
  ${({$severity:a})=>{const{tokens:e}=p(),{alertModal:o,modal:t}=e;return d`
      svg {
        display: block;
        width: ${o.icon.width.mobile};
        height: ${o.icon.height.mobile};

        & [data-primary-color] {
          color: ${o.icon.primaryColor[a]};
        }

        & [data-secondary-color] {
          color: ${o.icon.secondaryColor[a]};
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
  ${({$stickFooter:a})=>{const{tokens:e}=p(),{alertModal:o,modal:t}=e;return[d`
        color: ${o.body.color};

        padding-left: ${o.padding.mobile.left};
        padding-right: ${o.padding.mobile.right};

        @media (min-width: ${t.breakpoints.tablet}) {
          padding-left: ${o.padding.tablet.left};
          padding-right: ${o.padding.tablet.right};
        }
      `,a?d`
            padding-bottom: ${o.body.padding.withStickyFooter.bottom};
          `:d`
            padding-bottom: ${o.body.padding.default.bottom};
          `]}}
`,U=c.div`
  ${({$layout:a,$stickFooter:e})=>{const{tokens:o}=p(),{alertModal:t,modal:n}=o;return[d`
        gap: ${t.footer.gap};
      `,a==="inline"&&d`
          display: inline-grid;
          grid-auto-flow: column;
        `,a==="stacked"&&d`
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
      `,e&&d`
          padding-top: ${t.footer.sticky.padding.top};
          padding-bottom: ${t.footer.sticky.padding.bottom};
          @media (min-width: ${n.breakpoints.tablet}) {
            padding-top: ${t.footer.sticky.padding.top};
            padding-bottom: ${t.footer.sticky.padding.bottom};
          }
        `]}}
`;function R(){return!/android/i.test(navigator.userAgent)&&/safari/i.test(navigator.userAgent)&&("ontouchstart"in window||navigator.maxTouchPoints>0)}function $(){const{tokens:a}=p(),{modal:e}=a,o=window.matchMedia(`(min-width: ${e.breakpoints.tablet})`),[t,n]=f.useState(()=>o.matches);return f.useEffect(()=>{function l(r){n(r.matches)}return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]),{isMobile:!t}}function W(a,e,o){const{isMobile:t}=$(),n=(e||[]).map(s=>({...s,variant:"primary"})),l=(o||[]).map(s=>({...s,variant:"secondary"})),r=[];return t||a==="stacked"?r.push(...n.reverse(),...l.reverse()):r.push(...l,...n),{orderedButtonsProps:r}}function H(a){const{heading:e,headingLevel:o=g.DEFAULT_HEADING_LEVEL,severity:t=g.DEFAULT_SEVERITY,primaryButtonsProps:n,secondaryButtonsProps:l,footerLayout:r=g.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:s=!1,children:y,testID:k="alert-modal",...m}=a,{isOpen:v}=m,{tokens:w}=p(),{alertModal:h}=w,x={error:i.jsx(B,{}),warning:i.jsx(A,{}),success:i.jsx(T,{}),info:i.jsx(E,{})},{isMobile:M}=$(),{orderedButtonsProps:j}=W(r,n,l),b=i.jsx("div",{children:i.jsx(U,{$layout:M?"stacked":r,$stickFooter:s,children:j.map(u=>i.jsx(_,{...u},u.children))})});return i.jsx(I,{"aria-label":e,testID:k,...m,children:v&&i.jsxs(P,{children:[i.jsxs(C,{$severity:t,role:R()?"banner":void 0,children:[i.jsx(D,{$severity:t,"aria-hidden":!0,children:x[t]}),i.jsx(S,{component:`h${o}`,variant:h.heading.typography.variant,fontFamily:h.heading.typography.fontFamily,children:e})]}),i.jsxs(L,{children:[i.jsx(O,{$stickFooter:s,children:y}),s?void 0:b]}),s?b:void 0]})})}H.displayName="AlertModal";export{H as A};
