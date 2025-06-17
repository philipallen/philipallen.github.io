import{j as i}from"./jsx-runtime-sfY7k0Xq.js";import{r as m}from"./index-CcKhGcwW.js";import{a as h,u as n,b as p}from"./index-D1OOBdzz.js";import{T as u}from"./Typography-DU98AY51.js";const g=h(u)`
  ${()=>{const{tokens:r}=n(),{charactersCounter:t}=r;return p`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function l(r){const{length:t,maxLength:e,testID:s}=r,{tokens:c}=n(),{charactersCounter:o}=c,a=Math.max(0,e-t);return i.jsx(g,{variant:o.typography.variant,fontFamily:o.typography.fontFamily,testID:s,"aria-live":"polite",children:`${a} character${a!==1?"s":""} remaining`})}const $=m.memo(l);export{$ as C};
