import{a as n,u as l,b as d,j as r}from"./index-d88b625c.js";import{r as c}from"./index-c013ead5.js";import{I as u,a as p}from"./InputAlert-b04b3764.js";import{I as b}from"./InputLabelRight-51b32efb.js";const a=n.div`
  ${({$hasError:e})=>{const{tokens:t}=l(),{radio:o}=t;return[d`
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

        &:has(input:disabled),
        label:has(input:disabled) && {
          outline-width: ${o.stroke.width.disabled};
          outline-color: ${o.stroke.color.disabled};
          cursor: not-allowed;
        }

        &:hover:has(input:not(:disabled)),
        label:hover:has(input:not(:disabled)) && {
          outline-width: ${o.stroke.width.hover};
          outline-color: ${o.stroke.color.hover};
        }
      `,e&&d`
          outline-width: ${o.stroke.width.error};
          outline-color: ${o.stroke.color.error};
        `]}}
`,k=n.input`
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
`,$=n.div`
  ${()=>{const{tokens:e}=l(),{radio:t}=e;return[d`
        display: none;
        width: ${t.icon.width};
        height: ${t.icon.height};
        background: ${t.icon.color.base};
        border-radius: 100%;

        ${a}:has(input:checked) &&,
        label:has(input:checked) && {
          display: block;
        }

        ${a}:hover:has(input:not(:disabled):checked) &&,
        label:hover:has(input:not(:disabled):checked) && {
          background: ${t.icon.color.hover};
        }

        ${a}:has(input:disabled:checked) &&,
        label:has(input:disabled:checked) && {
          background: ${t.icon.color.disabled};
        }
      `]}}
`,w=c.forwardRef((e,t)=>{const{hasError:o,testID:i="radio",...s}=e;return r.jsxs(a,{$hasError:o,children:[r.jsx(k,{...s,ref:t,type:"radio","data-testid":i}),r.jsx($,{})]})}),v=c.forwardRef((e,t)=>{const{labelProps:o,alertProps:i,...s}=e,{testID:h="radio"}=s;return r.jsx(u,{alert:i?r.jsx(p,{...i,testID:`${h}-alert`}):void 0,children:r.jsx(b,{...o,children:r.jsx(w,{...s,ref:t})})})});export{v as R};
