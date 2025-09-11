import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{a as i,u as a,b as o}from"./index-BVzVw2jm.js";import{$ as p}from"./Text-DC2Lycci.js";import{I as c}from"./InlineAlert-DnhGumf8.js";const l=i.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function $(t){const{alert:n,gap:s,children:e}=t;return r.jsxs(l,{$gap:s,children:[e,n&&n]})}const u=i(p)`
  ${()=>{const{tokens:t}=a(),{spacing:n}=t;return o`
      display: grid;
      gap: ${n.s4};
    `}}
`;function x(t){const{slot:n="errorMessage",alerts:s}=t;return(s==null?void 0:s.length)===0?null:r.jsx(u,{elementType:"div",slot:n,children:s.map(e=>r.jsx(c,{withRole:!1,...e},e.children))})}export{$ as I,x as a};
