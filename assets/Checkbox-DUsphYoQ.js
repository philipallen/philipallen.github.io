import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BVaTkfsr.js";import{T as h,M as k}from"./index-BVyJnF54.js";import{a as c,u,i as $}from"./index-BpMil6Tx.js";import{$ as b,a as w}from"./Checkbox-BQQwpE5p.js";import{I as g}from"./InputLabelRight-B4oFuhxp.js";const p=c(b)`
  display: contents;
`,o=c(w)`
  display: inline-grid;
`,v=c.div`
  ${()=>{const{tokens:r}=u(),{checkbox:e}=r;return $`
      position: relative;
      display: grid;
      place-items: center;
      width: ${e.width};
      height: ${e.height};
      border-radius: ${e.stroke.radius};
      outline-style: solid;
      outline-offset: -1px;
      cursor: pointer;

      ${o} && {
        background: ${e.backgroundColor.unchecked.base};
        outline-width: ${e.stroke.width.unchecked.base};
        outline-color: ${e.stroke.color.base};
      }

      ${o}[data-invalid] && {
        outline-width: ${e.stroke.width.unchecked.error};
        outline-color: ${e.stroke.color.error};
      }

      ${o}[data-hovered] && {
        background: ${e.backgroundColor.unchecked.hover};
        outline-width: ${e.stroke.width.unchecked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      .react-aria-ListBoxItem[data-hovered] ${o} &,
      .react-aria-ListBoxItem[data-focused] ${o} &,
      [role="option"][data-hovered] ${o} &,
      [role="option"][data-focused] ${o} & {
        background: ${e.backgroundColor.unchecked.hover};
        outline-width: ${e.stroke.width.unchecked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      ${o}[data-disabled] && {
        background: ${e.backgroundColor.unchecked.disabled};
        outline-width: ${e.stroke.width.unchecked.disabled};
        outline-color: ${e.stroke.color.disabled};
        cursor: not-allowed;
      }

      ${o}[data-selected] && {
        background: ${e.backgroundColor.checked.base};
        outline-width: ${e.stroke.width.checked.base};
        outline-color: ${e.stroke.color.base};
      }

      ${o}[data-selected][data-invalid] && {
        outline-width: ${e.stroke.width.checked.error};
        outline-color: ${e.stroke.color.error};
      }

      ${o}[data-selected][data-hovered] && {
        background: ${e.backgroundColor.checked.hover};
        outline-width: ${e.stroke.width.checked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      ${o}[data-selected][data-disabled] && {
        background: ${e.backgroundColor.checked.disabled};
        outline-width: ${e.stroke.width.checked.disabled};
        outline-color: ${e.stroke.color.disabled};
      }

      ${o}[data-indeterminate] && {
        background: ${e.backgroundColor.checked.base};
        outline-width: ${e.stroke.width.checked.base};
        outline-color: ${e.stroke.color.base};
      }

      ${o}[data-indeterminate][data-invalid] && {
        outline-width: ${e.stroke.width.checked.error};
        outline-color: ${e.stroke.color.error};
      }

      ${o}[data-indeterminate][data-hovered] && {
        background: ${e.backgroundColor.checked.hover};
        outline-width: ${e.stroke.width.checked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      ${o}[data-indeterminate][data-disabled] && {
        background: ${e.backgroundColor.checked.disabled};
        outline-width: ${e.stroke.width.checked.disabled};
        outline-color: ${e.stroke.color.disabled};
      }

      svg {
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};
        color: ${e.icon.color.base};
      }
    `}}
`,m=n.forwardRef((r,e)=>{const{labelProps:a,testID:d="checkbox",...s}=r;return t.jsx(p,{...s,children:t.jsx(o,{ref:e,"data-testid":d,children:({isSelected:l,isIndeterminate:i})=>t.jsx(g,{...a,children:t.jsxs(v,{children:[l&&!i&&t.jsx(h,{"data-testid":`${d}-selected-icon`}),i&&t.jsx(k,{"data-testid":`${d}-indeterminate-icon`})]})})})})});m.displayName="Checkbox";export{m as C};
