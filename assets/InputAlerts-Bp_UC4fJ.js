import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a,u as i,b as o}from"./index-COZsQx0K.js";import{$ as p}from"./Text-DC2Lycci.js";import{I as c}from"./InlineAlert-CL4wcdpH.js";const l=a.div`
  ${({$gap:s="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${s};
  `}
`;function g(s){const{alert:t,gap:r,children:e}=s;return n.jsxs(l,{$gap:r,children:[e,t&&t]})}const d=a(p)`
  ${()=>{const{tokens:s}=i(),{spacing:t}=s;return o`
      display: grid;
      gap: ${t.s4};
    `}}
`;function x(s){const{slot:t="errorMessage",alerts:r}=s;return n.jsx(d,{elementType:"div",slot:t,children:r.map(e=>n.jsx(c,{withRole:!1,...e},e.children))})}export{g as I,x as a};
