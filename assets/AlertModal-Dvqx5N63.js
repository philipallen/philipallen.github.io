import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{h as m}from"./index-EybPYVoN.js";import{u as p,i as n,a as g}from"./index-BpMil6Tx.js";import{f as E,g as T,W as B,E as L}from"./index-BVyJnF54.js";import{C as A,M as F,h as I,S}from"./ScrollShadowContainer-CfamslX2.js";import{r as f}from"./index-BVaTkfsr.js";import{T as _}from"./Typography-G_YOndja.js";import{B as C}from"./Button-BNYB35pn.js";import{L as D}from"./LinkButton-Co33k5qZ.js";const O=g(A)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,P=g.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{modal:o,alertModal:t}=a;return n`
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
`,U=g.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return n`
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
`,R=g.div`
  ${({$stickFooter:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return[n`
        color: ${o.body.color};

        padding-left: ${o.padding.mobile.left};
        padding-right: ${o.padding.mobile.right};

        @media (min-width: ${t.breakpoints.tablet}) {
          padding-left: ${o.padding.tablet.left};
          padding-right: ${o.padding.tablet.right};
        }
      `,e?n`
            padding-bottom: ${o.body.padding.withStickyFooter.bottom};
          `:n`
            padding-bottom: ${o.body.padding.default.bottom};
          `]}}
`,W=g.div`
  ${({$layout:e,$stickFooter:a})=>{const{tokens:o}=p(),{alertModal:t,modal:d}=o;return[n`
        gap: ${t.footer.gap};
      `,e==="inline"&&n`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&n`
          display: grid;
          grid-auto-flow: row;
        `,n`
        padding-left: ${t.padding.mobile.left};
        padding-right: ${t.padding.mobile.right};
        padding-bottom: ${t.padding.mobile.bottom};

        @media (min-width: ${d.breakpoints.tablet}) {
          padding-left: ${t.padding.tablet.left};
          padding-right: ${t.padding.tablet.right};
          padding-bottom: ${t.padding.tablet.bottom};
        }
      `,a&&n`
          padding-top: ${t.footer.sticky.padding.top};
          padding-bottom: ${t.footer.sticky.padding.bottom};
          @media (min-width: ${d.breakpoints.tablet}) {
            padding-top: ${t.footer.sticky.padding.top};
            padding-bottom: ${t.footer.sticky.padding.bottom};
          }
        `]}}
`;function H(){return!/android/i.test(navigator.userAgent)&&/safari/i.test(navigator.userAgent)&&("ontouchstart"in window||navigator.maxTouchPoints>0)}function $(){const{tokens:e}=p(),{modal:a}=e,o=window.matchMedia(`(min-width: ${a.breakpoints.tablet})`),[t,d]=f.useState(()=>o.matches);return f.useEffect(()=>{function l(r){d(r.matches)}return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]),{isMobile:!t}}function N(e,a,o){const{isMobile:t}=$(),d=(a||[]).map(s=>({...s,variant:"primary"})),l=(o||[]).map(s=>({...s,variant:"secondary"})),r=[];return t||e==="stacked"?r.push(...d.reverse(),...l.reverse()):r.push(...l,...d),{orderedButtonsProps:r}}function V(e){const{heading:a,headingLevel:o=m.DEFAULT_HEADING_LEVEL,severity:t=m.DEFAULT_SEVERITY,primaryButtonsProps:d,secondaryButtonsProps:l,footerLayout:r=m.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:s=!1,children:y,testID:k="alert-modal",...h}=e,{isOpen:v}=h,{tokens:w}=p(),{alertModal:b}=w,x={error:i.jsx(L,{}),warning:i.jsx(B,{}),success:i.jsx(T,{}),info:i.jsx(E,{})},{isMobile:M}=$(),{orderedButtonsProps:j}=N(r,d,l),u=i.jsx("div",{children:i.jsx(W,{$layout:M?"stacked":r,$stickFooter:s,children:j.map(c=>c.buttonType==="linkButton"?i.jsx(D,{...c},c.children):i.jsx(C,{...c},c.children))})});return i.jsx(F,{"aria-label":a,testID:k,...h,children:v&&i.jsxs(O,{children:[i.jsxs(P,{$severity:t,role:H()?"banner":void 0,children:[i.jsx(U,{$severity:t,"aria-hidden":!0,children:x[t]}),i.jsx(_,{component:`h${o}`,variant:b.heading.typography.variant,fontFamily:b.heading.typography.fontFamily,"aria-label":I()?`${a}, dialog`:a,children:a})]}),i.jsxs(S,{children:[i.jsx(R,{$stickFooter:s,children:y}),s?void 0:u]}),s?u:void 0]})})}V.displayName="AlertModal";export{V as A};
