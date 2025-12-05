import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{a as p,u as l,b as f}from"./index-Dwsyfx_g.js";import{$ as m}from"./Text-D9_Nw8NF.js";import{I as b}from"./InlineAlert-c1kHcf2e.js";import{r as g}from"./index-CcKhGcwW.js";import{$ as x}from"./Label-8khcU0p_.js";import{T as d}from"./Typography-Ck2BLUk-.js";import{T as s}from"./TooltipPopover-egWX8Nuw.js";import{I as j}from"./InlineTooltipIconButton-D5bVAli8.js";const $=p.div`
  ${({$gap:o="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${o};
  `}
`;function A(o){const{alert:n,gap:r,children:a}=o;return t.jsxs($,{$gap:r,children:[a,n&&n]})}const T=p(m)`
  ${()=>{const{tokens:o}=l(),{spacing:n}=o;return f`
      display: grid;
      gap: ${n.s4};
    `}}
`;function E(o){const{slot:n="errorMessage",alerts:r}=o;return(r==null?void 0:r.length)===0?null:t.jsx(T,{elementType:"div",slot:n,children:r.map(a=>t.jsx(b,{withRole:!1,...a},a.children))})}const v=p.div`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:n}=o;return f`
      width: 100%;
      display: grid;
      gap: ${n.gap};
    `}}
`;function u(o){const{iconButtonProps:n,otherIconButtonProps:r,contentProps:a}=o;return t.jsx(s,{children:t.jsxs(s.Trigger,{children:[t.jsx(j,{...n,...r}),t.jsx(s.Content,{...a})]})})}const I=g.forwardRef((o,n)=>{const{label:r,labelTooltipProps:a,labelHint:i,labelHintTooltipProps:c,children:h}=o,{tokens:y}=l(),{inputLabelTop:e}=y;return t.jsxs(v,{ref:n,children:[(r||i)&&t.jsxs("div",{children:[r&&t.jsxs(d,{component:"div",color:e.label.color,variant:e.label.typography.variant,fontFamily:e.label.typography.fontFamily,children:[t.jsx(x,{children:r}),a&&t.jsx(u,{...a,otherIconButtonProps:{variant:"default",typographyVariant:e.label.typography.variant}})]}),i&&t.jsxs(d,{component:"div",color:e.labelHint.color,variant:e.labelHint.typography.variant,fontFamily:e.labelHint.typography.fontFamily,children:[t.jsx(m,{slot:"description",children:i}),c&&t.jsx(u,{...c,otherIconButtonProps:{variant:"default20",typographyVariant:e.labelHint.typography.variant}})]})]}),h]})});I.displayName="InputLabelTop";export{A as I,E as a,I as b};
