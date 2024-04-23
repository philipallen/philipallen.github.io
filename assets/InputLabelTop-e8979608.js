import{a as l,u as e,b as r,j as n}from"./index-e76b8df1.js";import{T as p}from"./Typography-ab363d23.js";const h=l.div`
  ${()=>{const{tokens:o}=e(),{inputLabelTop:t}=o;return r`
      width: 100%;
      display: grid;
      gap: ${t.gap};
    `}}
`,u=l.span`
  ${()=>{const{tokens:o}=e(),{inputLabelTop:t}=o;return r`
      color: ${t.label.color.base};
    `}}
`,m=l.div`
  ${()=>{const{tokens:o}=e(),{inputLabelTop:t}=o;return r`
      color: ${t.labelHint.color.base};
    `}}
`;function j(o){const{htmlFor:t,label:s,labelHint:i,children:c,...b}=o,{tokens:d}=e(),{inputLabelTop:a}=d;return n.jsxs(h,{children:[n.jsxs("div",{children:[n.jsx("label",{...b,htmlFor:t,children:s&&n.jsx(u,{children:n.jsx(p,{component:"span",color:"inherit",fontFamily:a.label.fontFamily,variant:a.label.typographyVariant,children:s})})}),i&&n.jsx(m,{children:n.jsx(p,{component:"span",color:"inherit",fontFamily:a.labelHint.fontFamily,variant:a.labelHint.typographyVariant,children:i})})]}),n.jsx("div",{children:c})]})}export{j as I};
