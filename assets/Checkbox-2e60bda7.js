import{a,u as h,b as d,j as r}from"./index-144fe590.js";import{r as s}from"./index-c013ead5.js";import{I as $,a as p}from"./InputAlert-5ca9be79.js";import{m as w}from"./index-1225df13.js";import{M as g,T as m}from"./index-ad927c2b.js";import{I as x}from"./InputLabelRight-c2ddfda4.js";import{$ as f}from"./import-9a74973a.js";const v=a.div`
  ${({$hasError:t})=>{const{tokens:o}=h(),{checkbox:e}=o;return[d`
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        border-radius: ${e.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;

        label:has(input:not(:checked)) && {
          background: ${e.backgroundColor.unchecked.base};
          outline-width: ${e.stroke.width.unchecked.base};
          outline-color: ${e.stroke.color.base};
        }

        label:hover:has(input:not(:checked):not(:indeterminate)) && {
          background: ${e.backgroundColor.unchecked.hover};
          outline-width: ${e.stroke.width.unchecked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        label:has(input:not(:checked):disabled) && {
          background: ${e.backgroundColor.unchecked.disabled};
          outline-width: ${e.stroke.width.unchecked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        label:has(input:checked) && {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        label:hover:has(input:checked) && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        label:has(input:checked:disabled) && {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        label:has(input:indeterminate) && {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        label:hover:has(input:indeterminate) && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        label:has(input:indeterminate:disabled) && {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }
      `,t&&d`
          label:has(input:not(:checked)) && {
            outline-width: ${e.stroke.width.unchecked.error};
            outline-color: ${e.stroke.color.error};
          }

          label:hover:has(input:not(:checked):not(:indeterminate)) && {
            outline-width: ${e.stroke.width.unchecked.hover};
            outline-color: ${e.stroke.color.hover};
          }

          label:has(input:checked) && {
            outline-width: ${e.stroke.width.checked.error};
            outline-color: ${e.stroke.color.error};
          }

          label:hover:has(input:checked:not(:indeterminate)) && {
            outline-width: ${e.stroke.width.checked.hover};
            outline-color: ${e.stroke.color.hover};
          }
        `]}}
`,C=a(g)`
  ${()=>{const{tokens:t}=h(),{checkbox:o}=t;return[d`
        display: none;

        label:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,I=a(m)`
  ${()=>{const{tokens:t}=h(),{checkbox:o}=t;return[d`
        display: none;

        label:has(input:checked:not(:indeterminate)) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function j(t,o){s.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}const y=s.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:c,labelProps:n,testID:l="checkbox",...i}=t,k=s.useRef(null);return j(k,c),r.jsxs(x,{...n,children:[r.jsx(f,{children:r.jsx("input",{...i,ref:w([k,o]),type:"checkbox",onChange:u=>{var b;u.target.indeterminate=!!c,(b=i.onChange)==null||b.call(i,u)},"data-testid":l})}),r.jsxs(v,{$hasError:e,children:[r.jsx(C,{}),r.jsx(I,{})]})]})}),_=s.forwardRef((t,o)=>{const{labelProps:e,alertProps:c,...n}=t,{testID:l="checkbox"}=n;return r.jsx($,{alert:c?r.jsx(p,{...c,testID:`${l}-alert`}):void 0,children:r.jsx(y,{...n,ref:o,labelProps:e})})});export{_ as C};
