import{a as n,u as l,b as d,j as e}from"./index-144fe590.js";import{r as c}from"./index-c013ead5.js";import{I as h,a as u}from"./InputAlert-5ca9be79.js";import{I as p}from"./InputLabelRight-c2ddfda4.js";import{$ as b}from"./import-9a74973a.js";const $=n.div`
  ${({$hasError:t})=>{const{tokens:r}=l(),{radio:o}=r;return[d`
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

        label:hover && {
          outline-width: ${o.stroke.width.hover};
          outline-color: ${o.stroke.color.hover};
        }

        label:has(input:disabled) && {
          outline-width: ${o.stroke.width.disabled};
          outline-color: ${o.stroke.color.disabled};
        }
      `,t&&d`
          outline-width: ${o.stroke.width.error};
          outline-color: ${o.stroke.color.error};
        `]}}
`,k=n.div`
  ${()=>{const{tokens:t}=l(),{radio:r}=t;return[d`
        display: none;
        width: ${r.icon.width};
        height: ${r.icon.height};
        background: ${r.icon.color.base};
        border-radius: 100%;

        label:has(input:checked) && {
          display: block;
        }

        label:hover:has(input:checked) && {
          background: ${r.icon.color.hover};
        }

        label:has(input:checked:disabled) && {
          background: ${r.icon.color.disabled};
        }
      `]}}
`,w=c.forwardRef((t,r)=>{const{hasError:o,labelProps:s,testID:i="radio",...a}=t;return e.jsxs(p,{...s,children:[e.jsx(b,{children:e.jsx("input",{...a,ref:r,type:"radio","data-testid":i})}),e.jsx($,{$hasError:o,children:e.jsx(k,{})})]})}),I=c.forwardRef((t,r)=>{const{labelProps:o,alertProps:s,...i}=t,{testID:a="radio"}=i;return e.jsx(h,{alert:s?e.jsx(u,{...s,testID:`${a}-alert`}):void 0,children:e.jsx(w,{...i,ref:r,labelProps:o})})});export{I as R};
