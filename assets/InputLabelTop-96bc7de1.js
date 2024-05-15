import{j as n}from"./jsx-runtime-6eef64cc.js";import{a as i,u as r,b as a}from"./index-4d2d77c0.js";import{T as p}from"./Typography-30fd340f.js";const u=i.div`
  ${()=>{const{tokens:e}=r(),{inputLabelTop:t}=e;return a`
      width: 100%;
      display: grid;
      gap: ${t.gap};
    `}}
`,h=i.span`
  ${()=>{const{tokens:e}=r(),{inputLabelTop:t}=e;return a`
      color: ${t.label.color.base};
    `}}
`,y=i.div`
  ${()=>{const{tokens:e}=r(),{inputLabelTop:t}=e;return a`
      color: ${t.labelHint.color.base};
    `}}
`;function T(e){const{htmlFor:t,label:s,labelHint:l,labelHintID:c,children:d,...b}=e,{tokens:m}=r(),{inputLabelTop:o}=m;return n.jsxs(u,{children:[n.jsxs("div",{children:[n.jsx("label",{...b,htmlFor:t,children:s&&n.jsx(h,{children:n.jsx(p,{component:"span",color:"inherit",fontFamily:o.label.fontFamily,variant:o.label.typographyVariant,children:s})})}),l&&n.jsx(y,{children:n.jsx(p,{id:c,component:"span",color:"inherit",fontFamily:o.labelHint.fontFamily,variant:o.labelHint.typographyVariant,children:l})})]}),n.jsx("div",{children:d})]})}T.__docgenInfo={description:"",methods:[],displayName:"InputLabelTop",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelHint:{required:!1,tsType:{name:"string"},description:""},labelHintID:{required:!1,tsType:{name:"string"},description:""}}};export{T as I};
