import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as l}from"./index-c013ead5.js";import{I as u,a as b}from"./InputAlert-a383ad59.js";import{I as $}from"./InputLabelRight-e5f8ae84.js";import{a as n,u as c,b as d}from"./index-2b4c4340.js";const a=n.div`
  ${({$hasError:e})=>{const{tokens:t}=c(),{radio:o}=t;return[d`
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
`,m=n.div`
  ${()=>{const{tokens:e}=c(),{radio:t}=e;return[d`
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
`,h=l.forwardRef((e,t)=>{const{hasError:o,testID:i="radio",...s}=e;return r.jsxs(a,{$hasError:o,children:[r.jsx(k,{...s,ref:t,type:"radio","data-testid":i}),r.jsx(m,{})]})});h.displayName="RadioBase";const w=l.forwardRef((e,t)=>{const{labelProps:o,alertProps:i,...s}=e,{testID:p="radio"}=s;return r.jsx(u,{alert:i?r.jsx(b,{...i,testID:`${p}-alert`}):void 0,children:r.jsx($,{...o,children:r.jsx(h,{...s,ref:t})})})});w.displayName="Radio";export{w as R};
