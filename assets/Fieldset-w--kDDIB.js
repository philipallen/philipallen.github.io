import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as h}from"./index-KmaxkdDD.js";import{a as p,u as d,b as x}from"./index-DT8u_GqS.js";import{T as g}from"./Typography-Ck-NcY7i.js";import{I as l}from"./InputLabelTopTooltip-UYqEh9dj.js";const u=p.fieldset`
  ${()=>{const{tokens:o}=d(),{fieldset:n}=o;return x`
      all: unset;
      box-sizing: border-box;
      width: 100%;
      display: grid;
      gap: ${n.gap};
    `}}
`,v=p(g).attrs({component:"legend"})`
  display: flex;
  align-items: center;
  padding: 0;
`,j=h.forwardRef((o,n)=>{const{legend:a,legendTooltipProps:i,legendHint:r,legendHintTooltipProps:s,ariaAlertAssociationProps:y,testID:c="fieldset",children:m}=o,{tokens:f}=d(),{fieldset:t}=f;return e.jsxs(u,{ref:n,"data-testid":c,...y,children:[a&&e.jsxs(v,{color:t.legend.color,variant:t.legend.typography.variant,fontFamily:t.legend.typography.fontFamily,children:[a,i&&e.jsx(l,{...i,otherIconButtonProps:{variant:"default",typographyVariant:t.legendHint.typography.variant}})]}),a&&!r&&e.jsx("div",{}),r&&e.jsx("div",{children:e.jsxs(g,{component:"span",color:t.legendHint.color,variant:t.legendHint.typography.variant,fontFamily:t.legendHint.typography.fontFamily,children:[r,s&&e.jsx(l,{...s,otherIconButtonProps:{variant:"default20",typographyVariant:t.legendHint.typography.variant}})]})}),m]})});j.displayName="Fieldset";export{j as F};
