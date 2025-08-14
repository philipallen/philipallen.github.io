import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{a as m,u as y,b as p}from"./index-DmICCP6d.js";import{T as e}from"./Typography-DLKMW7tv.js";import{I as s}from"./InputLabelTopTooltip-Cc4U6UHH.js";const u=m.div`
  ${({$label:l})=>{const{tokens:o}=y(),{inputLabelTop:n}=o;return[p`
        width: 100%;
        display: grid;
      `,l&&p`
          gap: ${n.gap};
        `]}}
`;function j(l){const{label:o,labelTooltipProps:n,labelHint:r,labelHintID:c,labelHintTooltipProps:i,children:b,...h}=l,{tokens:d}=y(),{inputLabelTop:t}=d;return a.jsxs(u,{$label:o,children:[a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx("label",{...h,children:o&&a.jsx(e,{component:"span",color:t.label.color,variant:t.label.typography.variant,fontFamily:t.label.typography.fontFamily,children:o})}),n&&a.jsx(s,{...n,otherIconButtonProps:{variant:"default",typographyVariant:t.label.typography.variant}})]}),r&&a.jsxs(e,{id:c,component:"div",color:t.labelHint.color,variant:t.labelHint.typography.variant,fontFamily:t.labelHint.typography.fontFamily,children:[r,i&&a.jsx(s,{...i,otherIconButtonProps:{variant:"default20",typographyVariant:t.labelHint.typography.variant}})]})]}),a.jsx("div",{children:b})]})}export{j as I};
