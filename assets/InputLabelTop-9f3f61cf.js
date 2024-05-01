import{a as e,u as l,b as r,j as n}from"./index-74fe31d7.js";import{T as p}from"./Typography-5c86d7b4.js";const u=e.div`
  ${()=>{const{tokens:t}=l(),{inputLabelTop:o}=t;return r`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,m=e.span`
  ${()=>{const{tokens:t}=l(),{inputLabelTop:o}=t;return r`
      color: ${o.label.color.base};
    `}}
`,x=e.div`
  ${()=>{const{tokens:t}=l(),{inputLabelTop:o}=t;return r`
      color: ${o.labelHint.color.base};
    `}}
`;function T(t){const{htmlFor:o,label:i,labelHint:s,labelHintID:c,children:b,...d}=t,{tokens:h}=l(),{inputLabelTop:a}=h;return n.jsxs(u,{children:[n.jsxs("div",{children:[n.jsx("label",{...d,htmlFor:o,children:i&&n.jsx(m,{children:n.jsx(p,{component:"span",color:"inherit",fontFamily:a.label.fontFamily,variant:a.label.typographyVariant,children:i})})}),s&&n.jsx(x,{children:n.jsx(p,{id:c,component:"span",color:"inherit",fontFamily:a.labelHint.fontFamily,variant:a.labelHint.typographyVariant,children:s})})]}),n.jsx("div",{children:b})]})}export{T as I};
