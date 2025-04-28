import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{r as d}from"./index-KmaxkdDD.js";import{$ as m}from"./Label-D5Kag7W1.js";import{$ as f}from"./Text-BN8FYGRk.js";import{a as h,u as c,b as u}from"./index-BMLrhZi-.js";import{T as e}from"./Typography-DSyO5F2j.js";import{I as s}from"./InputLabelTopTooltip-CgTuwKiF.js";const x=h.div`
  ${()=>{const{tokens:a}=c(),{inputLabelTop:r}=a;return u`
      width: 100%;
      display: grid;
      gap: ${r.gap};
    `}}
`,g=d.forwardRef((a,r)=>{const{label:n,labelTooltipProps:i,labelHint:p,labelHintTooltipProps:l,children:y}=a,{tokens:b}=c(),{inputLabelTop:o}=b;return t.jsxs(x,{ref:r,children:[(n||p)&&t.jsxs("div",{children:[n&&t.jsxs(e,{component:"div",color:o.label.color,variant:o.label.typography.variant,fontFamily:o.label.typography.fontFamily,children:[t.jsx(m,{children:n}),i&&t.jsx(s,{...i,otherIconButtonProps:{variant:"default",typographyVariant:o.label.typography.variant}})]}),p&&t.jsxs(e,{component:"div",color:o.labelHint.color,variant:o.labelHint.typography.variant,fontFamily:o.labelHint.typography.fontFamily,children:[t.jsx(f,{slot:"description",children:p}),l&&t.jsx(s,{...l,otherIconButtonProps:{variant:"default20",typographyVariant:o.labelHint.typography.variant}})]})]}),y]})});g.displayName="InputLabelTopV2";export{g as I};
