import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{d as p,u as l,l as m}from"./index-C1QKVHyt.js";import{$ as u}from"./Text-CoyfJyUy.js";import{I as g}from"./InlineAlert-DvLMoUMA.js";import{r as b}from"./index-CcKhGcwW.js";import{$ as x}from"./Label-GNbXzScb.js";import{T as d}from"./Typography-BK_ZjFCe.js";import{T as s}from"./TooltipPopover-BEG4305A.js";import{I as j}from"./InlineTooltipIconButton-CWSg2rTo.js";const $=p.div`
  ${({$gap:o="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${o};
  `}
`;function A(o){const{alert:n,gap:r,children:a}=o;return t.jsxs($,{$gap:r,children:[a,n&&n]})}const T=p(u)`
  ${()=>{const{tokens:o}=l(),{spacing:n}=o;return m`
      display: grid;
      gap: ${n.s4};
    `}}
`;function E(o){const{slot:n="errorMessage",alerts:r}=o;return(r==null?void 0:r.length)===0?null:t.jsx(T,{elementType:"div",slot:n,children:r.map(a=>t.jsx(g,{withRole:!1,...a},a.children))})}const v=p.div`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:n}=o;return m`
      width: 100%;
      display: grid;
      gap: ${n.gap};
    `}}
`;function f(o){const{iconButtonProps:n,otherIconButtonProps:r,contentProps:a}=o;return t.jsx(s,{children:t.jsxs(s.Trigger,{children:[t.jsx(j,{...n,...r}),t.jsx(s.Content,{...a})]})})}const I=b.forwardRef((o,n)=>{const{label:r,labelTooltipProps:a,labelHint:i,labelHintTooltipProps:c,children:h}=o,{tokens:y}=l(),{inputLabelTop:e}=y;return t.jsxs(v,{ref:n,children:[(r||i)&&t.jsxs("div",{children:[r&&t.jsxs(d,{component:"div",color:e.label.color,variant:e.label.typography.variant,fontFamily:e.label.typography.fontFamily,children:[t.jsx(x,{children:r}),a&&t.jsx(f,{...a,otherIconButtonProps:{variant:"default",typographyVariant:e.label.typography.variant}})]}),i&&t.jsxs(d,{component:"div",color:e.labelHint.color,variant:e.labelHint.typography.variant,fontFamily:e.labelHint.typography.fontFamily,children:[t.jsx(u,{slot:"description",children:i}),c&&t.jsx(f,{...c,otherIconButtonProps:{variant:"default20",typographyVariant:e.labelHint.typography.variant}})]})]}),h]})});I.displayName="InputLabelTop";export{A as I,I as a,E as b};
