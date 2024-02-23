import{a,u as h,b as c,j as n}from"./index-d88b625c.js";import{r as s}from"./index-c013ead5.js";import{I as m,a as g}from"./InputAlert-b04b3764.js";import{I as w}from"./InputLabelRight-51b32efb.js";import{u as v}from"./floating-ui.react-c559d281.js";import{M as f,T as x}from"./index-b2e7e546.js";const l=a.div`
  ${({$hasError:t})=>{const{tokens:o}=h(),{checkbox:e}=o;return[c`
        position: relative;
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        border-radius: ${e.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled),
        label:has(input:disabled) && {
          cursor: not-allowed;
        }

        &:has(input:not(:checked)),
        label:has(input:not(:checked)) && {
          background: ${e.backgroundColor.unchecked.base};
          outline-width: ${e.stroke.width.unchecked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled, :checked, :indeterminate)),
        label:hover:has(input:not(:disabled, :checked, :indeterminate)) && {
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

        &:hover:has(input:not(:disabled):checked),
        label:hover:has(input:not(:disabled):checked) && {
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

        &:hover:has(input:not(:disabled):indeterminate),
        label:hover:has(input:not(:disabled):indeterminate) && {
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
      `,t&&c`
          &:has(input:not(:checked)),
          label:has(input:not(:checked)) && {
            outline-width: ${e.stroke.width.unchecked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :checked, :indeterminate)),
          label:hover:has(input:not(:disabled, :checked, :indeterminate)) && {
            outline-width: ${e.stroke.width.unchecked.hover};
            outline-color: ${e.stroke.color.hover};
          }

          &:has(input:checked),
          label:has(input:checked) && {
            outline-width: ${e.stroke.width.checked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :indeterminate):checked),
          label:hover:has(input:not(:disabled, :indeterminate):checked) && {
            outline-width: ${e.stroke.width.checked.hover};
            outline-color: ${e.stroke.color.hover};
          }
        `]}}
`,C=a.input`
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
`,I=a(f)`
  ${()=>{const{tokens:t}=h(),{checkbox:o}=t;return[c`
        display: none;

        ${l}:has(input:indeterminate) &&,
        label:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,j=a(x)`
  ${()=>{const{tokens:t}=h(),{checkbox:o}=t;return[c`
        display: none;

        ${l}:has(input:not(:indeterminate):checked) &&,
        label:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function y(t,o){s.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}const R=s.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:d="checkbox",...i}=t,u=s.useRef(null);y(u,r);const p=v([u,o]);function $(k){var b;k.target.indeterminate=!!r,(b=i.onChange)==null||b.call(i,k)}return n.jsxs(l,{$hasError:e,children:[n.jsx(C,{...i,ref:p,type:"checkbox",onChange:$,"data-testid":d}),n.jsx(I,{}),n.jsx(j,{})]})}),_=s.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...d}=t,{testID:i="checkbox"}=d;return n.jsx(m,{alert:r?n.jsx(g,{...r,testID:`${i}-alert`}):void 0,children:n.jsx(w,{...e,children:n.jsx(R,{...d,ref:o})})})});export{_ as C};
