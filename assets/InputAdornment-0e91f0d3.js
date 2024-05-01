import{a,u as i,b as r,j as l}from"./index-74fe31d7.js";import{d}from"./commonProps-af166571.js";const s="1px",c=a.div`
  ${({position:t})=>{const{tokens:o}=i(),{adornment:e,input:n}=o;return[r`
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
`,p=({children:t,position:o="start",...e})=>l.jsx(c,{...d(e),position:o,children:t});export{p as I};
