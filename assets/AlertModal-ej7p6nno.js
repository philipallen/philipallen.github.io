import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BVaTkfsr.js";import{h as u}from"./index-CllsIOLz.js";import{u as p,i as n,a as c,p as L}from"./index-sM1fMec-.js";import{f as S,g as F,W as R,E as C}from"./index-BVyJnF54.js";import{C as O,M as N,a as P,S as U,h as W}from"./ScrollShadowContainer-w4m4qM1P.js";import{T as v}from"./Typography-D83ERmMI.js";import{B as Y}from"./Button-BRD9zwmn.js";import{L as V}from"./LinkButton-DTQSWS7K.js";const z=c(O)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,h="0.35s",x="0.1s",G="0.15s",q=c.div`
  ${({$scrolled:a})=>{const{tokens:e}=p(),{alertModal:o}=e;return[n`
        overflow: hidden;
        border-bottom-width: ${o.compactHeader.stroke.bottom.width};
        border-bottom-style: ${o.compactHeader.stroke.bottom.style};
        border-bottom-color: transparent;
        transition: border-bottom-color ${G};

        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      `,a&&n`
          border-bottom-color: ${o.compactHeader.stroke.bottom.color};
          transition-delay: ${x};

          @media (prefers-reduced-motion: reduce) {
            transition-delay: 0s;
          }
        `]}}
`,J=c.div`
  ${({$severity:a,$scrolled:e})=>{const{tokens:o}=p(),{alertModal:t,modal:d}=o,{stroke:s,padding:r,header:l,compactHeader:g}=t;return[n`
        box-sizing: border-box;
        display: grid;
        grid-template-columns: ${g.icon.width} minmax(0, 1fr);
        align-items: center;
        gap: ${l.gap};
        border-top-width: ${s.top.width};
        border-top-style: ${s.top.style};
        border-top-color: ${s.top.color[a]};
        padding-top: ${r.mobile.top};
        padding-bottom: ${l.gap};
        padding-left: ${r.mobile.left};
        padding-right: ${r.mobile.right};
        transition: border-top-width ${h},
          padding-top ${h},
          padding-bottom ${h};

        @media (min-width: ${d.breakpoints.tablet}) {
          padding-top: ${r.tablet.top};
          padding-left: ${r.tablet.left};
          padding-right: ${r.tablet.right};
        }

        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      `,e&&n`
          border-top-width: 0;
          padding-top: ${g.padding.top};
          padding-bottom: ${g.padding.bottom};

          @media (min-width: ${d.breakpoints.tablet}) {
            padding-top: ${g.padding.top};
          }
        `]}}
`,K=c.div`
  ${({$headingVisible:a})=>{const{tokens:e}=p(),{alertModal:o}=e,{header:t,compactHeader:d}=o,s=`max(${t.gap}, ${d.padding.bottom})`;return[n`
        align-self: stretch;
        min-height: ${L(d.heading.minHeight)};
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: center;
        transition: transform ${h};
        transform: translateY(calc(100% + ${s}));

        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      `,!a&&n`
          && {
            transform: translateY(0);
          }
        `]}}
`,Q=c.div`
  ${()=>{const{tokens:a}=p(),{alertModal:e,modal:o}=a;return n`
      padding-left: ${e.padding.mobile.left};
      padding-right: ${e.padding.mobile.right};
      padding-bottom: ${e.header.padding.bottom};

      @media (min-width: ${o.breakpoints.tablet}) {
        padding-left: ${e.padding.tablet.left};
        padding-right: ${e.padding.tablet.right};
      }
    `}}
`;function X(a,e){return n`
    & [data-primary-color] {
      color: ${a};
    }

    & [data-secondary-color] {
      color: ${e};
    }
  `}const Z=c.div`
  ${({$severity:a,$scrolled:e})=>{const{tokens:o}=p(),{alertModal:t,modal:d}=o;return[n`
        svg {
          display: block;
          width: ${t.icon.width.mobile};
          height: ${t.icon.height.mobile};
          transition: width ${h},
            height ${h};

          ${X(t.icon.primaryColor[a],t.icon.secondaryColor[a])}
        }

        @media (min-width: ${d.breakpoints.tablet}) {
          svg {
            width: ${t.icon.width.tablet};
            height: ${t.icon.height.tablet};
          }
        }

        @media (prefers-reduced-motion: reduce) {
          svg {
            transition: none;
          }
        }
      `,e&&n`
          svg {
            width: ${t.compactHeader.icon.width};
            height: ${t.compactHeader.icon.height};
          }
        `]}}
`,tt=c.div`
  ${({$stickFooter:a})=>{const{tokens:e}=p(),{alertModal:o,modal:t}=e;return[n`
        color: ${o.body.color};

        padding-left: ${o.padding.mobile.left};
        padding-right: ${o.padding.mobile.right};

        @media (min-width: ${t.breakpoints.tablet}) {
          padding-left: ${o.padding.tablet.left};
          padding-right: ${o.padding.tablet.right};
        }
      `,a?n`
            padding-bottom: ${o.body.padding.withStickyFooter.bottom};
          `:n`
            padding-bottom: ${o.body.padding.default.bottom};
          `]}}
`,ot=c.div`
  ${({$layout:a,$stickFooter:e})=>{const{tokens:o}=p(),{alertModal:t,modal:d}=o;return[n`
        gap: ${t.footer.gap};
      `,a==="inline"&&n`
          display: inline-grid;
          grid-auto-flow: column;
        `,a==="stacked"&&n`
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
      `,e&&n`
          padding-top: ${t.footer.sticky.padding.top};
          padding-bottom: ${t.footer.sticky.padding.bottom};
          @media (min-width: ${d.breakpoints.tablet}) {
            padding-top: ${t.footer.sticky.padding.top};
            padding-bottom: ${t.footer.sticky.padding.bottom};
          }
        `]}}
`;function M(){const{tokens:a}=p(),{modal:e}=a,o=window.matchMedia(`(min-width: ${e.breakpoints.tablet})`),[t,d]=f.useState(()=>o.matches);return f.useEffect(()=>{function s(r){d(r.matches)}return o.addEventListener("change",s),()=>{o.removeEventListener("change",s)}},[]),{isMobile:!t}}function et(a,e,o){const{isMobile:t}=M(),d=(e||[]).map(l=>({...l,variant:"primary"})),s=(o||[]).map(l=>({...l,variant:"secondary"})),r=[];return t||a==="stacked"?r.push(...d.reverse(),...s.reverse()):r.push(...s,...d),{orderedButtonsProps:r}}function at(a){const{heading:e,headingLevel:o=u.DEFAULT_HEADING_LEVEL,severity:t=u.DEFAULT_SEVERITY,primaryButtonsProps:d,secondaryButtonsProps:s,footerLayout:r=u.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:l=!1,children:g,testID:E="alert-modal",...y}=a,{isOpen:I}=y,{tokens:j}=p(),{alertModal:b}=j,T={error:i.jsx(C,{}),warning:i.jsx(R,{}),success:i.jsx(F,{}),info:i.jsx(S,{})},k=f.useId(),{isMobile:H}=M(),{orderedButtonsProps:A}=et(r,d,s),w=i.jsx("div",{children:i.jsx(ot,{$layout:H?"stacked":r,$stickFooter:l,children:A.map(m=>m.buttonType==="linkButton"?i.jsx(V,{...m},m.children):i.jsx(Y,{...m},m.children))})});return i.jsx(N,{"aria-labelledby":k,testID:E,...y,children:I&&i.jsx(P,{children:({headingRef:m,headingVisible:D,borderVisible:$,setBorderVisible:_})=>i.jsxs(z,{children:[i.jsx(q,{$scrolled:$,children:i.jsxs(J,{$severity:t,$scrolled:$,children:[i.jsx(Z,{$severity:t,$scrolled:$,"aria-hidden":!0,children:T[t]}),i.jsx(K,{$headingVisible:D,inert:!0,children:i.jsx(v,{noWrap:!0,component:"p",variant:b.compactHeader.heading.typography.variant,fontFamily:b.compactHeader.heading.typography.fontFamily,children:e})})]})}),i.jsxs(U,{topShadowDelay:x,onChange:({topShadowVisible:B})=>{_(B)},children:[i.jsx(Q,{children:i.jsx(v,{ref:m,id:k,component:`h${o}`,variant:b.heading.typography.variant,fontFamily:b.heading.typography.fontFamily,"aria-label":W()?`${e}, dialog`:e,children:e})}),i.jsx(tt,{$stickFooter:l,children:g}),l?void 0:w]}),l?w:void 0]})})})}at.displayName="AlertModal";export{at as A};
