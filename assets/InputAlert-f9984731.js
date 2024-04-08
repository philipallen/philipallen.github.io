import{a as o,j as i,u as s,b as a}from"./index-1154a484.js";import{a as c}from"./index-8544f6ee.js";import{T as p}from"./Typography-c902fb8d.js";const l=o.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function m(t){const{alert:e,gap:r,children:n}=t;return i.jsxs(l,{$gap:r,children:[n,e&&e]})}const d=o.div`
  ${({$severity:t})=>{const{tokens:e}=s(),{inputAlert:r}=e;return a`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r.gap};
      color: ${r.color[t]};

      svg {
        width: ${r.icon.width};
        height: ${r.icon.height};
        color: ${r.icon.color[t]};
      }
    `}}
`,u=o.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:e}=t;return a`
      display: grid;
      place-content: center;
      height: ${e.iconWrapper.height};
    `}}
`;function x(t){const{severity:e,children:r,testID:n="input-alert"}=t;return i.jsxs(d,{role:"alert","aria-live":"polite",$severity:e,"data-testid":n,children:[i.jsx(u,{children:i.jsx(c,{"aria-hidden":"true"})}),i.jsx(p,{color:"inherit",children:r})]})}export{m as I,x as a};
