import{j as i}from"./jsx-runtime-6eef64cc.js";import{a as o,u as s,b as a,p}from"./index-2b4c4340.js";import{a as c}from"./index-b1e3628a.js";import{T as l}from"./Typography-2ed3318f.js";const d=o.div`
  ${({$gap:r="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${r};
  `}
`;function x(r){const{alert:e,gap:t,children:n}=r;return i.jsxs(d,{$gap:t,children:[n,e&&e]})}const h=o.div`
  ${({$severity:r})=>{const{tokens:e}=s(),{inputAlert:t}=e;return a`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${t.gap};
      color: ${t.color[r]};

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
        color: ${t.icon.color[r]};
      }
    `}}
`,u=o.div`
  ${()=>{const{tokens:r}=s(),{inputAlert:e}=r,t=p(e.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${t};
    `}}
`;function j(r){const{severity:e,children:t,testID:n="input-alert"}=r;return i.jsxs(h,{role:"alert","aria-live":"polite",$severity:e,"data-testid":n,children:[i.jsx(u,{children:i.jsx(c,{"aria-hidden":"true"})}),i.jsx(l,{color:"inherit",children:t})]})}export{x as I,j as a};
