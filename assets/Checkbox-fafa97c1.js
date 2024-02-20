import{a as s,u as a,b as d,j as n}from"./index-e4c57c99.js";import{r as h}from"./index-c013ead5.js";import{I as m,a as g}from"./InputAlert-d02adbdb.js";import{I as w}from"./InputLabelRight-109ec1df.js";import{u as v}from"./floating-ui.react-c559d281.js";import{M as f,T as x}from"./index-e1b96a7a.js";const l=s.div`
  ${({$hasError:t})=>{const{tokens:o}=a(),{checkbox:e}=o;return[d`
        position: relative;
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        border-radius: ${e.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;

        &:has(input:not(:checked)),
        label:has(input:not(:checked)) && {
          background: ${e.backgroundColor.unchecked.base};
          outline-width: ${e.stroke.width.unchecked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:checked):not(:indeterminate)),
        label:hover:has(input:not(:checked):not(:indeterminate)) && {
          background: ${e.backgroundColor.unchecked.hover};
          outline-width: ${e.stroke.width.unchecked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:not(:checked):disabled),
        label:has(input:not(:checked):disabled) && {
          background: ${e.backgroundColor.unchecked.disabled};
          outline-width: ${e.stroke.width.unchecked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:checked),
        label:has(input:checked) && {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:checked),
        label:hover:has(input:checked) && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:checked:disabled),
        label:has(input:checked:disabled) && {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:indeterminate),
        label:has(input:indeterminate) && {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:indeterminate),
        label:hover:has(input:indeterminate) && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:indeterminate:disabled),
        label:has(input:indeterminate:disabled) && {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }
      `,t&&d`
          &:has(input:not(:checked)),
          label:has(input:not(:checked)) && {
            outline-width: ${e.stroke.width.unchecked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:checked):not(:indeterminate)),
          label:hover:has(input:not(:checked):not(:indeterminate)) && {
            outline-width: ${e.stroke.width.unchecked.hover};
            outline-color: ${e.stroke.color.hover};
          }

          &:has(input:checked),
          label:has(input:checked) && {
            outline-width: ${e.stroke.width.checked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:checked:not(:indeterminate)),
          label:hover:has(input:checked:not(:indeterminate)) && {
            outline-width: ${e.stroke.width.checked.hover};
            outline-color: ${e.stroke.color.hover};
          }
        `]}}
`,C=s.input`
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
`,I=s(f)`
  ${()=>{const{tokens:t}=a(),{checkbox:o}=t;return[d`
        display: none;

        ${l}:has(input:indeterminate) &&,
        label:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,j=s(x)`
  ${()=>{const{tokens:t}=a(),{checkbox:o}=t;return[d`
        display: none;

        ${l}:has(input:checked:not(:indeterminate)) &&,
        label:has(input:checked:not(:indeterminate)) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function y(t,o){h.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}const R=h.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:i,testID:c="checkbox",...r}=t,u=h.useRef(null);y(u,i);const p=v([u,o]);function $(k){var b;k.target.indeterminate=!!i,(b=r.onChange)==null||b.call(r,k)}return n.jsxs(l,{$hasError:e,children:[n.jsx(C,{...r,ref:p,type:"checkbox",onChange:$,"data-testid":c}),n.jsx(I,{}),n.jsx(j,{})]})}),_=h.forwardRef((t,o)=>{const{labelProps:e,alertProps:i,...c}=t,{testID:r="checkbox"}=c;return n.jsx(m,{alert:i?n.jsx(g,{...i,testID:`${r}-alert`}):void 0,children:n.jsx(w,{...e,children:n.jsx(R,{...c,ref:o})})})});export{_ as C};
