import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{r as m}from"./index-CcKhGcwW.js";import{u as n,l as h,d as p}from"./index-C1QKVHyt.js";import{T as l}from"./Typography-BK_ZjFCe.js";const u=p(l)`
  ${()=>{const{tokens:r}=n(),{charactersCounter:t}=r;return h`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function g(r){const{length:t,maxLength:e,testID:s}=r,{tokens:c}=n(),{charactersCounter:o}=c,a=Math.max(0,e-t);return i.jsx(u,{variant:o.typography.variant,fontFamily:o.typography.fontFamily,testID:s,"aria-live":"polite",children:`${a} character${a!==1?"s":""} remaining`})}const $=m.memo(g);export{$ as C};
