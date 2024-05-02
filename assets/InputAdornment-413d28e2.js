import{j as a}from"./jsx-runtime-6eef64cc.js";import{a as i,u as l,b as r}from"./index-2b4c4340.js";import{d}from"./commonProps-af166571.js";const s="1px",m=i.div`
  ${({position:t})=>{const{tokens:o}=l(),{adornment:e,input:n}=o;return[r`
        width: ${e.width.small};
        color: ${e.color.base};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        position: absolute;
        right: ${t==="end"?"0":"auto"};
        height: calc(100% - 1rem);
        display: flex;
        align-items: center;
        justify-content: center;

        ${t==="start"&&r`
          border-right: ${s} solid ${n.stroke.color.base};
        `}
        ${t==="end"&&r`
          border-left: ${s} solid ${n.stroke.color.base};
        `};
      `]}}
`,$=({children:t,position:o="start",...e})=>a.jsx(m,{...d(e),position:o,children:t});export{$ as I};
