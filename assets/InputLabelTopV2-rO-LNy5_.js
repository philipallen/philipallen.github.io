import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{a as b}from"./Label-uyz5dJOn.js";import{$ as d}from"./Text-DsbvCy5R.js";import{a as f,u as s,b as h}from"./index-ByEiyUmp.js";import{T as p}from"./Typography-C-GpEjPp.js";import{I as e}from"./InputLabelTopTooltip-D8DIL0uV.js";const m=f.div`
  ${()=>{const{tokens:r}=s(),{inputLabelTop:a}=r;return h`
      width: 100%;
      display: grid;
      gap: ${a.gap};
    `}}
`;function $(r){const{label:a,labelTooltipProps:i,labelHint:n,labelHintTooltipProps:l,children:c}=r,{tokens:y}=s(),{inputLabelTop:o}=y;return t.jsxs(m,{children:[(a||n)&&t.jsxs("div",{children:[a&&t.jsxs(p,{component:"div",color:o.label.color,variant:o.label.typography.variant,fontFamily:o.label.typography.fontFamily,children:[t.jsx(b,{children:a}),i&&t.jsx(e,{...i,otherIconButtonProps:{variant:"default",typographyVariant:o.label.typography.variant}})]}),n&&t.jsxs(p,{component:"div",color:o.labelHint.color,variant:o.labelHint.typography.variant,fontFamily:o.labelHint.typography.fontFamily,children:[t.jsx(d,{slot:"description",children:n}),l&&t.jsx(e,{...l,otherIconButtonProps:{variant:"default20",typographyVariant:o.labelHint.typography.variant}})]})]}),c]})}export{$ as I};
