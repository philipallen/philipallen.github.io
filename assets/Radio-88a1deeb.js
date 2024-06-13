import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as c}from"./index-c013ead5.js";import{I as b,a as $}from"./InputAlert-c56755e4.js";import{I as k}from"./InputLabelRight-4c4ccbf5.js";import{a as n,u as h,b as a}from"./index-f9091704.js";const d=n.div`
  ${({$hasError:t})=>{const{tokens:e}=h(),{radio:o}=e;return[a`
        position: relative;
        display: grid;
        place-items: center;
        width: ${o.width};
        height: ${o.height};
        background: ${o.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${o.stroke.width.base};
        outline-style: solid;
        outline-color: ${o.stroke.color.base};
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          outline-width: ${o.stroke.width.disabled};
          outline-color: ${o.stroke.color.disabled};
          cursor: not-allowed;
        }

        &:hover:has(input:not(:disabled)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled)
          )
          && {
          outline-width: ${o.stroke.width.hover};
          outline-color: ${o.stroke.color.hover};
        }
      `,t&&a`
          outline-width: ${o.stroke.width.error};
          outline-color: ${o.stroke.color.error};
        `]}}
`,m=n.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`,g=n.div`
  ${()=>{const{tokens:t}=h(),{radio:e}=t;return[a`
        display: none;
        width: ${e.icon.width};
        height: ${e.icon.height};
        background: ${e.icon.color.base};
        border-radius: 100%;

        ${d}:has(input:checked) && {
          display: block;
        }

        ${d}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${e.icon.color.hover};
        }

        ${d}:has(input:disabled:checked) {
          background: ${e.icon.color.disabled};
        }
      `]}}
`,l=c.forwardRef((t,e)=>{const{hasError:o,testID:i="radio",...s}=t;return r.jsxs(d,{$hasError:o,children:[r.jsx(m,{...s,ref:e,type:"radio","data-testid":i}),r.jsx(g,{})]})});l.displayName="RadioBase";l.__docgenInfo={description:"",methods:[],displayName:"RadioBase"};const p=c.forwardRef((t,e)=>{const{labelProps:o,alertProps:i,...s}=t,{testID:u="radio"}=s;return r.jsx(b,{alert:i?r.jsx($,{...i,testID:`${u}-alert`}):void 0,children:r.jsx(k,{...o,children:r.jsx(l,{...s,ref:e})})})});p.displayName="Radio";p.__docgenInfo={description:"",methods:[],displayName:"Radio"};export{p as R};
