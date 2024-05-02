import{j as n}from"./jsx-runtime-6eef64cc.js";import{a as e,u as l,b as r}from"./index-2b4c4340.js";import{T as p}from"./Typography-2ed3318f.js";const m=e.div`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:t}=o;return r`
      width: 100%;
      display: grid;
      gap: ${t.gap};
    `}}
`,u=e.span`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:t}=o;return r`
      color: ${t.label.color.base};
    `}}
`,x=e.div`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:t}=o;return r`
      color: ${t.labelHint.color.base};
    `}}
`;function T(o){const{htmlFor:t,label:i,labelHint:s,labelHintID:c,children:b,...d}=o,{tokens:h}=l(),{inputLabelTop:a}=h;return n.jsxs(m,{children:[n.jsxs("div",{children:[n.jsx("label",{...d,htmlFor:t,children:i&&n.jsx(u,{children:n.jsx(p,{component:"span",color:"inherit",fontFamily:a.label.fontFamily,variant:a.label.typographyVariant,children:i})})}),s&&n.jsx(x,{children:n.jsx(p,{id:c,component:"span",color:"inherit",fontFamily:a.labelHint.fontFamily,variant:a.labelHint.typographyVariant,children:s})})]}),n.jsx("div",{children:b})]})}export{T as I};
