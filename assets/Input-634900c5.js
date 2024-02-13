import{a as g,u as R,b,j as i}from"./index-144fe590.js";import{r as c}from"./index-c013ead5.js";import{C as v}from"./ClearButton-99a2bda0.js";import{F as O}from"./FormElementContainer-6766b468.js";const j=g.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,E=g.input`
  ${({$error:d,$hasStartAdornment:e,$hasEndAdornment:t,$hasClearButton:l})=>{const{tokens:r}=R(),{input:o,adornment:n,clearButton:s}=r;return[b`
        height: ${o.height};
        width: 100%;
        padding-left: ${o.paddingLeft};
        padding-right: ${o.paddingRight};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        background-color: ${o.backgroundColor.base};
        color: ${o.color.base};

        border-style: ${o.stroke.style};
        border-width: ${o.stroke.width};
        border-color: ${o.stroke.color.base};

        padding-left: ${e?`calc(${n.width.small} + ${o.paddingLeft})`:o.paddingLeft};
        padding-right: ${t?`calc(${n.width.small} + ${o.paddingRight})`:l?s.width:o.paddingRight};
        outline: none;
        transition: border-color "0.25s"; // TODO candidate for design tokens?

        &:not(:disabled):read-only {
          border-color: ${o.stroke.color.readOnly};
        }

        &:disabled {
          background-color: ${o.backgroundColor.disabled};
          opacity: 0.7; // TODO candidate for design tokens?
          color: ${o.color.disabled};
          border-color: ${o.stroke.color.base};
          cursor: default;
        }

        &:not(:disabled):focus,
        &:not(:disabled):active {
          border-color: ${o.stroke.color.focus};
        }

        &::placeholder {
          color: ${o.color.placeholder};
        }
      `,d&&b`
          border-color: ${o.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${o.stroke.color.error};
          }
        `]}}
`,B=c.forwardRef(({hasClearButton:d=!0,startAdornment:e,endAdornment:t,isError:l,errorText:r,onChange:o,labelId:n,labelText:s,labelTestId:$,testID:h,...u},m)=>{const{disabled:k,readOnly:y,value:x="",id:C}=u,a=c.useRef(null),p=d&&!(k||y)&&!!x;c.useImperativeHandle(m,()=>a.current);const I=()=>{typeof o=="function"&&o(""),a.current&&a.current.focus()},w=f=>{typeof o=="function"&&o(f.target.value,f)};return i.jsx(O,{labelId:n,labelText:s,labelTestId:$,errorText:r,elementId:C,children:i.jsxs(j,{children:[e,i.jsx(E,{...u,$hasClearButton:p,$hasStartAdornment:!!e,$hasEndAdornment:!!t,ref:a,$error:l||!!r,onChange:w,"data-testid":h}),p&&!t?i.jsx(v,{testID:"input-clear-button",onClick:I}):null,t]})})});B.displayName="Input";export{B as I};
