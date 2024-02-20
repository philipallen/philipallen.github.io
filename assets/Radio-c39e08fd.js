import{a as n,u as l,b as d,j as r}from"./index-e4c57c99.js";import{r as c}from"./index-c013ead5.js";import{I as u,a as p}from"./InputAlert-d02adbdb.js";import{I as b}from"./InputLabelRight-109ec1df.js";const a=n.div`
  ${({$hasError:t})=>{const{tokens:e}=l(),{radio:o}=e;return[d`
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

        &:hover,
        label:hover && {
          outline-width: ${o.stroke.width.hover};
          outline-color: ${o.stroke.color.hover};
        }

        &:has(input:disabled),
        label:has(input:disabled) && {
          outline-width: ${o.stroke.width.disabled};
          outline-color: ${o.stroke.color.disabled};
        }
      `,t&&d`
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
  ${()=>{const{tokens:t}=l(),{radio:e}=t;return[d`
        display: none;
        width: ${e.icon.width};
        height: ${e.icon.height};
        background: ${e.icon.color.base};
        border-radius: 100%;

        ${a}:has(input:checked) &&,
        label:has(input:checked) && {
          display: block;
        }

        ${a}:hover:has(input:checked) &&,
        label:hover:has(input:checked) && {
          background: ${e.icon.color.hover};
        }

        ${a}:has(input:checked:disabled) &&,
        label:has(input:checked:disabled) && {
          background: ${e.icon.color.disabled};
        }
      `]}}
`,g=c.forwardRef((t,e)=>{const{hasError:o,testID:i="radio",...s}=t;return r.jsxs(a,{$hasError:o,children:[r.jsx(k,{...s,ref:e,type:"radio","data-testid":i}),r.jsx($,{})]})}),v=c.forwardRef((t,e)=>{const{labelProps:o,alertProps:i,...s}=t,{testID:h="radio"}=s;return r.jsx(u,{alert:i?r.jsx(p,{...i,testID:`${h}-alert`}):void 0,children:r.jsx(b,{...o,children:r.jsx(g,{...s,ref:e})})})});export{v as R};
