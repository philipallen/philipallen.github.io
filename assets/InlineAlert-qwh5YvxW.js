import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{E as h,W as p,g as u,h as g}from"./index-Cng6hRot.js";import{a as i,u as a,b as s,p as m}from"./index-D1OOBdzz.js";import{T as f}from"./Typography-BoEAGT7d.js";const x=i.div`
  ${({$severity:t})=>{const{tokens:e}=a(),{inlineAlert:r}=e;return s`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r.gap};
      color: ${r.color[t]};

      svg {
        width: ${r.icon.width};
        height: ${r.icon.height};
      }
    `}}
`,y=i.div`
  ${({$severity:t})=>{const{tokens:e}=a(),{inlineAlert:r}=e,n=m(r.iconWrapper.height);return s`
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
`;function k(t){const{severity:e,children:r,id:n,withRole:c=!0,testID:l="inline-alert"}=t,d={error:o.jsx(h,{"aria-hidden":"true"}),warning:o.jsx(p,{"aria-hidden":"true"}),success:o.jsx(u,{"aria-hidden":"true"}),info:o.jsx(g,{"aria-hidden":"true"})};return o.jsxs(x,{id:n,role:c?"alert":void 0,$severity:e,"data-testid":l,children:[o.jsx(y,{$severity:e,children:d[e]}),o.jsx(f,{color:"inherit",children:r})]})}export{k as I};
