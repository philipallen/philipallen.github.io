import{a as r,u as s,b as l,j as e}from"./index-74fe31d7.js";import{T as c}from"./Typography-5c86d7b4.js";import{d as p}from"./commonProps-af166571.js";const h=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,x=r.div`
  ${()=>{const{tokens:n}=s(),{formElementContainer:t}=n;return[l`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${t.maxWidth};
      `]}}
`,f=r.div`
  ${()=>{const{tokens:n}=s(),{fontFamily:t,themeColor:o}=n;return[l`
        font-family: ${t.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${o.ragRed};
        width: 100%;
      `]}}
`,C=({elementId:n,labelId:t,labelText:o,errorText:i,children:a,labelTestId:m,...d})=>e.jsxs(h,{...p(d),children:[o?e.jsx(c,{id:t,component:"label",htmlFor:n,testID:m,children:o}):null,e.jsxs(x,{children:[a,i?e.jsx(f,{children:i}):null]})]});export{C as F};
