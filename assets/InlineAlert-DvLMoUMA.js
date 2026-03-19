import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{f as p,g as h,W as u,E as g}from"./index-B_KGh3jf.js";import{u as i,l as a,d as s,p as m}from"./index-C1QKVHyt.js";import{T as f}from"./Typography-BK_ZjFCe.js";const y=s.div`
  ${({$severity:t})=>{const{tokens:e}=i(),{inlineAlert:r}=e;return a`
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
  ${({$severity:t})=>{const{tokens:e}=i(),{inlineAlert:r}=e,n=m(r.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${n};

      & [data-primary-color] {
        color: ${r.icon.primaryColor[t]};
      }

      & [data-secondary-color] {
        color: ${r.icon.secondaryColor[t]};
      }
    `}}
`;function x(t){const{severity:e,children:r,id:n,withRole:c=!0,testID:l="inline-alert"}=t,d={error:o.jsx(g,{"aria-hidden":"true"}),warning:o.jsx(u,{"aria-hidden":"true"}),success:o.jsx(h,{"aria-hidden":"true"}),info:o.jsx(p,{"aria-hidden":"true"})};return o.jsxs(y,{id:n,role:c?"alert":void 0,$severity:e,"data-testid":l,children:[o.jsx(I,{$severity:e,children:d[e]}),o.jsx(f,{color:"inherit",children:r})]})}x.displayName="InlineAlert";export{x as I};
