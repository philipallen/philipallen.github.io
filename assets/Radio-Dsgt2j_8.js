import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as d}from"./index-CcKhGcwW.js";import{I as $,a as k}from"./InputAlerts-D2s279dZ.js";import{I as m}from"./InputLabelRight-t4wEOW5-.js";import{a as l,u as h,b as n}from"./index-BHlkTKmU.js";import{b as w}from"./AlertAssociationProps-CEhVpbTc.js";const a=l.div`
  ${({$hasError:r})=>{const{tokens:t}=h(),{radio:o}=t;return[n`
        position: relative;
        display: grid;
        place-items: center;
        width: ${o.width};
        height: ${o.height};
        background: ${o.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${o.stroke.width.base};
        outline-style: ${o.stroke.style.base};
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
      `,r&&n`
          outline-width: ${o.stroke.width.error};
          outline-color: ${o.stroke.color.error};
        `]}}
`,g=l.input`
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
`,x=l.div`
  ${()=>{const{tokens:r}=h(),{radio:t}=r;return[n`
        display: none;
        width: ${t.icon.width};
        height: ${t.icon.height};
        background: ${t.icon.color.base};
        border-radius: 100%;

        ${a}:has(input:checked) && {
          display: block;
        }

        ${a}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${t.icon.color.hover};
        }

        ${a}:has(input:disabled:checked) {
          background: ${t.icon.color.disabled};
        }
      `]}}
`,u=d.forwardRef((r,t)=>{const{hasError:o,testID:i="radio",...s}=r;return e.jsxs(a,{$hasError:o,children:[e.jsx(g,{...s,ref:t,type:"radio","data-testid":i}),e.jsx(x,{})]})});u.displayName="RadioBase";const f=d.forwardRef((r,t)=>{const{labelProps:o,alertProps:i,...s}=r,{testID:p="radio"}=s,c=d.useId(),b=w(c,r);return e.jsx($,{alert:i&&e.jsx("div",{id:c,"data-testid":`${p}-alerts`,children:e.jsx(k,{alerts:Array.isArray(i)?i:[i]})}),children:e.jsx(m,{...o,children:e.jsx(u,{...s,...b,ref:t})})})});f.displayName="Radio";export{f as R};
