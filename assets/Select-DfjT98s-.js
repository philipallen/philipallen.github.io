import{j as n}from"./jsx-runtime-BkBIjjFT.js";import{r as u}from"./index-KmaxkdDD.js";import{a as F}from"./downshift.esm-BNKeM0Z8.js";import{a as l,u as s,b as r,p as R}from"./index-ByEiyUmp.js";import{e as _}from"./index-DYe-GrfV.js";import{f as E}from"./index-DG677SqA.js";import{T as M}from"./index-BwV_lsCf.js";import{M as z}from"./Select.constants-D58dHOlB.js";import{I as G,a as O}from"./InputAlerts-LVMe8NNK.js";import{I as X}from"./InputLabelTop-CRYqdOgJ.js";import{S as q}from"./SelectBase-BWVbi4Jh.js";import{T as v}from"./Typography-C-GpEjPp.js";import{b as J}from"./AlertAssociationProps-CEhVpbTc.js";const K=l.div`
  ${({$isDisabled:o,$hasSelectedItem:t})=>{const{tokens:a}=s(),{select:e}=a;return[r`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,o&&r`
          color: ${e.button.placeholder.color.disabled};
        `,t&&r`
          color: ${e.button.text.color.base};
        `,o&&t&&r`
          color: ${e.button.text.color.disabled};
        `]}}
`,N=l.li`
  ${()=>{const{tokens:o}=s(),{select:t}=o;return[r`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${t.menu.option.minHeight};
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,Q=l.div`
  ${({$isSelected:o,$isHighlighted:t})=>{const{tokens:a}=s(),{select:e}=a;return[r`
        display: grid;
        align-items: center;
        color: ${e.menu.option.inner.color.base};
        padding-top: ${e.menu.option.inner.padding.top};
        padding-left: ${e.menu.option.inner.padding.left};
        padding-right: ${e.menu.option.inner.padding.right};
        padding-bottom: ${e.menu.option.inner.padding.bottom};
        border-radius: ${e.menu.option.inner.radius};
        background: ${e.menu.option.inner.backgroundColor.base};
        outline-width: ${e.menu.option.inner.stroke.width};
        outline-style: ${e.menu.option.inner.stroke.style};
        outline-color: ${e.menu.option.inner.stroke.color.base};
        outline-offset: ${e.menu.option.inner.stroke.offset};

        &:active {
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        }
      `,o&&r`
          background: ${e.menu.option.inner.backgroundColor.selected};
          outline-color: ${e.menu.option.inner.stroke.color.selected};
        `,t&&r`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,U=l.div`
  ${()=>{const{tokens:o}=s(),{select:t}=o;return[r`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${t.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,V=l.div`
  ${()=>{const{tokens:o}=s(),{select:t}=o;return[r`
        display: grid;
        place-items: center;
        width: ${t.menu.option.inner.tickIconWrapper.width};
        height: ${R(t.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,Y=l(M)`
  ${()=>{const{tokens:o}=s(),{select:t}=o;return[r`
        width: ${t.menu.option.inner.tickIcon.width};
        height: ${t.menu.option.inner.tickIcon.height};
        color: ${t.menu.option.inner.tickIcon.color};
      `]}}
`;function Z(o,t){const{labelProps:a,placeholder:e="Select",selectedItem:c,onChange:m,alertProps:p,testID:g="select",...h}=o,{isDisabled:S,items:j}=h,{tokens:T}=s(),{select:d}=T,b=u.useRef(c),C=u.useCallback(({selectedItem:i})=>{b.current!==i&&(b.current=i,m(i))},[m]),{getLabelProps:w,getToggleButtonProps:L,getMenuProps:P,isOpen:A,getItemProps:H,highlightedIndex:B}=F({items:j,selectedItem:c,itemToString:_.itemToString,onSelectedItemChange:C}),$=u.useId(),{labelHint:W}=a,f=W?$:void 0,k=u.useId(),D=J(k,o,f);return n.jsx("div",{ref:t,children:n.jsx(G,{alert:p&&n.jsx("div",{id:k,"data-testid":`${g}-alerts`,children:n.jsx(O,{alerts:Array.isArray(p)?p:[p]})}),children:n.jsx(X,{...a,...w(),labelHintID:$,children:n.jsx(q,{...h,toggleButtonProps:{"aria-describedby":f},getToggleButtonProps:L,getMenuProps:P,isOpen:A,renderButtonContent:()=>n.jsx(K,{$isDisabled:S,$hasSelectedItem:!!c,children:n.jsx(v,{component:"div",color:"inherit",variant:d.button.text.typography.variant,fontFamily:d.button.text.typography.fontFamily,noWrap:!0,children:c?c.title:e})}),renderListItem:(i,I)=>{const x=c===i,y=B===I;return n.jsx(N,{...H({item:i,index:I}),"data-hovered":y||void 0,children:n.jsx(Q,{$isSelected:x,$isHighlighted:y,children:n.jsxs(U,{children:[n.jsx(V,{children:x&&n.jsx(Y,{"aria-hidden":"true"})}),n.jsx(v,{component:"div",color:"inherit",title:i.title,variant:d.menu.option.inner.text.typography.variant,fontFamily:d.menu.option.inner.text.typography.fontFamily,children:i.title})]})})},i.id)},maxListHeight:z,testID:g,alertAssociationProps:D})})})})}const me=E(Z);export{me as S};
