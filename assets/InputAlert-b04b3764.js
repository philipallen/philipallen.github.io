import{a as i,j as e,u as s,b as a}from"./index-d88b625c.js";import{a as c}from"./index-b2e7e546.js";import{T as p}from"./Typography-06318a9b.js";const l=i.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function m(t){const{alert:n,gap:r,children:o}=t;return e.jsxs(l,{$gap:r,children:[o,n&&n]})}const d=i.div`
  ${({$severity:t})=>{const{tokens:n}=s(),{inputAlert:r}=n;return a`
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
`,u=i.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:n}=t;return a`
      display: grid;
      place-content: center;
      height: ${n.iconWrapper.height};
    `}}
`;function x(t){const{severity:n,children:r,testID:o="input-alert"}=t;return e.jsxs(d,{role:"alert",$severity:n,"data-testid":o,children:[e.jsx(u,{children:e.jsx(c,{})}),e.jsx(p,{color:"inherit",children:r})]})}export{m as I,x as a};
