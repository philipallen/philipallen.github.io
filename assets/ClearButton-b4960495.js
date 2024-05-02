import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as i,u as s,b as a}from"./index-2b4c4340.js";import{C as c}from"./index-b1e3628a.js";import{d as u}from"./commonProps-af166571.js";const l=i.div`
  ${()=>{const{tokens:o}=s(),{clearButton:t}=o;return a`
      width: ${t.width};
      height: ${t.height};
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;

      &:active {
        opacity: 0.5;
      }
    `}}
`,f=({onClick:o,...t})=>{const{tokens:r}=s(),{clearButton:n}=r;return e.jsx(l,{...u(t),role:"button",onClick:o,children:e.jsx(c,{width:16,height:16,color:n.color.base})})};export{f as C};
