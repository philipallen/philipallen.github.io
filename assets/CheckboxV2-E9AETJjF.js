import{j as o}from"./jsx-runtime-DQ32znRX.js";import{r as s}from"./index-DH5ua8nC.js";import{$ as n}from"./Checkbox-BGx8Jbfn.js";import{T as h,M as k}from"./index-BYwLR37K.js";import{a as b,u,b as $}from"./index-CzvSJj6w.js";import{I as w}from"./InputLabelRightV2-CeAo3NfK.js";const g=b.div`
  ${()=>{const{tokens:t}=u(),{checkbox:e}=t;return $`
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
`,a=s.forwardRef((t,e)=>{const{labelProps:c,testID:r="checkbox",...l}=t;return o.jsx(n,{...l,ref:e,"data-testid":r,children:({isSelected:i,isIndeterminate:d})=>o.jsx(w,{...c,children:o.jsxs(g,{children:[i&&!d&&o.jsx(h,{"data-testid":`${r}-selected-icon`}),d&&o.jsx(k,{"data-testid":`${r}-indeterminate-icon`})]})})})});a.displayName="CheckboxV2";a.__docgenInfo={description:"",methods:[],displayName:"CheckboxV2"};export{a as C};
