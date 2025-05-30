import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{r as p}from"./index-CcKhGcwW.js";import{a as E}from"./downshift.esm-CA7rj1sz.js";import{a as l,u as a,b as r,p as F}from"./index-COZsQx0K.js";import{f as R}from"./index-CssHJ6ns.js";import{f as _}from"./index-CG-U_esM.js";import{T as M}from"./index-Cng6hRot.js";import{M as z}from"./Select.constants-D58dHOlB.js";import{I as G,a as O}from"./InputAlerts-Bp_UC4fJ.js";import{I as X}from"./InputLabelTop-BP-wkIQl.js";import{S as q}from"./SelectBase-CpM_sRkz.js";import{T as v}from"./Typography-cxmeyP_c.js";import{b as J}from"./AlertAssociationProps-CEhVpbTc.js";const K=l.div`
  ${({$isDisabled:o,$hasSelectedItem:t})=>{const{tokens:c}=a(),{select:e}=c;return[r`
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
  ${()=>{const{tokens:o}=a(),{select:t}=o;return[r`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${t.menu.option.minHeight};
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,Q=l.div`
  ${({$isSelected:o,$isHighlighted:t})=>{const{tokens:c}=a(),{select:e}=c;return[r`
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
  ${()=>{const{tokens:o}=a(),{select:t}=o;return[r`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${t.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,V=l.div`
  ${()=>{const{tokens:o}=a(),{select:t}=o;return[r`
        display: grid;
        place-items: center;
        width: ${t.menu.option.inner.tickIconWrapper.width};
        height: ${F(t.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,Y=l(M)`
  ${()=>{const{tokens:o}=a(),{select:t}=o;return[r`
        width: ${t.menu.option.inner.tickIcon.width};
        height: ${t.menu.option.inner.tickIcon.height};
        color: ${t.menu.option.inner.tickIcon.color};
      `]}}
`;function Z(o,t){const{labelProps:c,placeholder:e="Select",selectedItem:s,onChange:g,alertProps:d,testID:h="select",...b}=o,{isDisabled:S,items:j}=b,{tokens:T}=a(),{select:u}=T,m=p.useRef(s);p.useEffect(()=>{m.current=s},[s]);const C=p.useCallback(({selectedItem:i})=>{m.current!==i&&(m.current=i,g(i))},[g]),{getLabelProps:w,getToggleButtonProps:L,getMenuProps:P,isOpen:A,getItemProps:H,highlightedIndex:B}=E({items:j,selectedItem:s,itemToString:R.itemToString,onSelectedItemChange:C}),$=p.useId(),{labelHint:W}=c,f=W?$:void 0,k=p.useId(),D=J(k,o,f);return n.jsx("div",{ref:t,children:n.jsx(G,{alert:d&&n.jsx("div",{id:k,"data-testid":`${h}-alerts`,children:n.jsx(O,{alerts:Array.isArray(d)?d:[d]})}),children:n.jsx(X,{...c,...w(),labelHintID:$,children:n.jsx(q,{...b,toggleButtonProps:{"aria-describedby":f},getToggleButtonProps:L,getMenuProps:P,isOpen:A,renderButtonContent:()=>n.jsx(K,{$isDisabled:S,$hasSelectedItem:!!s,children:n.jsx(v,{component:"div",color:"inherit",variant:u.button.text.typography.variant,fontFamily:u.button.text.typography.fontFamily,noWrap:!0,children:s?s.title:e})}),renderListItem:(i,I)=>{const x=s===i,y=B===I;return n.jsx(N,{...H({item:i,index:I}),"data-hovered":y||void 0,tabIndex:-1,children:n.jsx(Q,{$isSelected:x,$isHighlighted:y,children:n.jsxs(U,{children:[n.jsx(V,{children:x&&n.jsx(Y,{"aria-hidden":"true"})}),n.jsx(v,{component:"div",color:"inherit",title:i.title,variant:u.menu.option.inner.text.typography.variant,fontFamily:u.menu.option.inner.text.typography.fontFamily,children:i.title})]})})},i.id)},maxListHeight:z,testID:h,alertAssociationProps:D})})})})}const me=_(Z);export{me as S};
