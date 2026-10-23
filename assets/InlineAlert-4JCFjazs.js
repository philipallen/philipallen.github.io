import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{f as p,g as h,W as u,E as g}from"./index-BVyJnF54.js";import{u as n,i as a,a as s,p as m}from"./index-BpMil6Tx.js";import{T as f}from"./Typography-G_YOndja.js";const y=s.div`
  ${({$severity:t})=>{const{tokens:e}=n(),{inlineAlert:r}=e;return a`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r.gap};
      color: ${r.color[t]};

      svg {
        width: ${r.icon.width};
        height: ${r.icon.height};
      }
    `}}
`,I=s.div`
  ${({$severity:t})=>{const{tokens:e}=n(),{inlineAlert:r}=e,i=m(r.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${i};

      & [data-primary-color] {
        color: ${r.icon.primaryColor[t]};
      }

      & [data-secondary-color] {
        color: ${r.icon.secondaryColor[t]};
      }
    `}}
`;function x(t){const{severity:e,children:r,id:i,withRole:c=!0,testID:l="inline-alert"}=t,d={error:o.jsx(g,{"aria-hidden":"true"}),warning:o.jsx(u,{"aria-hidden":"true"}),success:o.jsx(h,{"aria-hidden":"true"}),info:o.jsx(p,{"aria-hidden":"true"})};return o.jsxs(y,{id:i,role:c?"alert":void 0,$severity:e,"data-testid":l,children:[o.jsx(I,{$severity:e,children:d[e]}),o.jsx(f,{color:"inherit",children:r})]})}x.displayName="InlineAlert";export{x as I};
