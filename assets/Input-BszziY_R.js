import{j as d}from"./jsx-runtime-DQ32znRX.js";import{r as c}from"./index-DH5ua8nC.js";import{a as g,u as R,b}from"./index-BSpjoQIR.js";import{C as O}from"./ClearButton-DboufH4Z.js";import{F as j}from"./FormElementContainer-D8TmTf_D.js";const E=g.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,B=g.input`
  ${({$error:l,$hasStartAdornment:t,$hasEndAdornment:e,$hasClearButton:i})=>{const{tokens:r}=R(),{input:o,adornment:a,clearButton:s}=r;return[b`
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

        padding-left: ${t?`calc(${a.width.small} + ${o.paddingLeft})`:o.paddingLeft};
        padding-right: ${e?`calc(${a.width.small} + ${o.paddingRight})`:i?s.width:o.paddingRight};
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
      `,l&&b`
          border-color: ${o.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${o.stroke.color.error};
          }
        `]}}
`,$=c.forwardRef(({hasClearButton:l=!0,startAdornment:t,endAdornment:e,isError:i,errorText:r,onChange:o,labelId:a,labelText:s,labelTestId:h,testID:m,...u},k)=>{const{disabled:y,readOnly:I,value:x="",id:C}=u,n=c.useRef(null),p=l&&!(y||I)&&!!x;c.useImperativeHandle(k,()=>n.current);const v=()=>{typeof o=="function"&&o(""),n.current&&n.current.focus()},w=f=>{typeof o=="function"&&o(f.target.value,f)};return d.jsx(j,{labelId:a,labelText:s,labelTestId:h,errorText:r,elementId:C,children:d.jsxs(E,{children:[t,d.jsx(B,{...u,$hasClearButton:p,$hasStartAdornment:!!t,$hasEndAdornment:!!e,ref:n,$error:i||!!r,onChange:w,"data-testid":m}),p&&!e?d.jsx(O,{testID:"input-clear-button",onClick:v}):null,e]})})});$.displayName="Input";$.__docgenInfo={description:"",methods:[],displayName:"Input",props:{hasClearButton:{defaultValue:{value:"true",computed:!1},required:!1}}};export{$ as I};
