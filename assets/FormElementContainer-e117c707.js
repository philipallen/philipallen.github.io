import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as r,u as s,b as l}from"./index-2b4c4340.js";import{T as p}from"./Typography-2ed3318f.js";import{d as c}from"./commonProps-af166571.js";const h=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,x=r.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:n}=t;return[l`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${n.maxWidth};
      `]}}
`,f=r.div`
  ${()=>{const{tokens:t}=s(),{fontFamily:n,themeColor:o}=t;return[l`
        font-family: ${n.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${o.ragRed};
        width: 100%;
      `]}}
`,E=({elementId:t,labelId:n,labelText:o,errorText:i,children:a,labelTestId:m,...d})=>e.jsxs(h,{...c(d),children:[o?e.jsx(p,{id:n,component:"label",htmlFor:t,testID:m,children:o}):null,e.jsxs(x,{children:[a,i?e.jsx(f,{children:i}):null]})]});export{E as F};
