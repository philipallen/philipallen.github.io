import{j as r}from"./jsx-runtime-BkBIjjFT.js";import{a as n,u as i,b as o}from"./index-DT8u_GqS.js";import{$ as p}from"./Text-DsbvCy5R.js";import{I as c}from"./InlineAlert-Bkd1gNu1.js";const l=n.div`
  ${({$gap:s="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${s};
  `}
`;function g(s){const{alert:t,gap:e,children:a}=s;return r.jsxs(l,{$gap:e,children:[a,t&&t]})}const d=n(p)`
  ${()=>{const{tokens:s}=i(),{spacing:t}=s;return o`
      display: grid;
      gap: ${t.s4};
    `}}
`;function x(s){const{alerts:t}=s;return r.jsx(d,{elementType:"div",slot:"errorMessage",children:t.map(e=>r.jsx(c,{withRole:!1,...e},e.children))})}export{g as I,x as a};
