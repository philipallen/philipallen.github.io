import{a as i,u as s,b as a,j as e}from"./index-e4c57c99.js";import{C as c}from"./index-e1b96a7a.js";import{d as u}from"./commonProps-af166571.js";const l=i.div`
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
`,d=({onClick:o,...t})=>{const{tokens:n}=s(),{clearButton:r}=n;return e.jsx(l,{...u(t),role:"button",onClick:o,children:e.jsx(c,{width:16,height:16,color:r.color.base})})};export{d as C};