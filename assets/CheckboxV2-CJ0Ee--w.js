import{j as o}from"./jsx-runtime-BkBIjjFT.js";import{r as i}from"./index-KmaxkdDD.js";import{$ as s}from"./Checkbox-CUjyyXsn.js";import{T as n,M as h}from"./index-BwV_lsCf.js";import{a as k,u,b}from"./index-ByEiyUmp.js";import{I as $}from"./InputLabelRightV2-CaTh_alq.js";const w=k.div`
  ${()=>{const{tokens:t}=u(),{checkbox:e}=t;return b`
      position: relative;
      display: grid;
      place-items: center;
      width: ${e.width};
      height: ${e.height};
      border-radius: ${e.stroke.radius};
      outline-style: solid;
      outline-offset: -1px;
      cursor: pointer;

      label && {
        background: ${e.backgroundColor.unchecked.base};
        outline-width: ${e.stroke.width.unchecked.base};
        outline-color: ${e.stroke.color.base};
      }

      label[data-invalid] && {
        outline-width: ${e.stroke.width.unchecked.error};
        outline-color: ${e.stroke.color.error};
      }

      label[data-hovered] && {
        background: ${e.backgroundColor.unchecked.hover};
        outline-width: ${e.stroke.width.unchecked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      label[data-disabled] && {
        background: ${e.backgroundColor.unchecked.disabled};
        outline-width: ${e.stroke.width.unchecked.disabled};
        outline-color: ${e.stroke.color.disabled};
        cursor: not-allowed;
      }

      label[data-selected] && {
        background: ${e.backgroundColor.checked.base};
        outline-width: ${e.stroke.width.checked.base};
        outline-color: ${e.stroke.color.base};
      }

      label[data-selected][data-invalid] && {
        outline-width: ${e.stroke.width.checked.error};
        outline-color: ${e.stroke.color.error};
      }

      label[data-selected][data-hovered] && {
        background: ${e.backgroundColor.checked.hover};
        outline-width: ${e.stroke.width.checked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      label[data-selected][data-disabled] && {
        background: ${e.backgroundColor.checked.disabled};
        outline-width: ${e.stroke.width.checked.disabled};
        outline-color: ${e.stroke.color.disabled};
      }

      label[data-indeterminate] && {
        background: ${e.backgroundColor.checked.base};
        outline-width: ${e.stroke.width.checked.base};
        outline-color: ${e.stroke.color.base};
      }
      label[data-indeterminate][data-invalid] && {
        outline-width: ${e.stroke.width.checked.error};
        outline-color: ${e.stroke.color.error};
      }

      label[data-indeterminate][data-hovered] && {
        background: ${e.backgroundColor.checked.hover};
        outline-width: ${e.stroke.width.checked.hover};
        outline-color: ${e.stroke.color.hover};
      }

      label[data-indeterminate][data-disabled] && {
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
`,g=i.forwardRef((t,e)=>{const{labelProps:a,testID:r="checkbox",...l}=t;return o.jsx(s,{...l,ref:e,"data-testid":r,children:({isSelected:c,isIndeterminate:d})=>o.jsx($,{...a,children:o.jsxs(w,{children:[c&&!d&&o.jsx(n,{"data-testid":`${r}-selected-icon`}),d&&o.jsx(h,{"data-testid":`${r}-indeterminate-icon`})]})})})});g.displayName="CheckboxV2";export{g as C};
