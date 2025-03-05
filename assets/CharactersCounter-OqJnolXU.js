import{j as m}from"./jsx-runtime-DQ32znRX.js";import{r as p}from"./index-DH5ua8nC.js";import{a as u,u as n,b as h}from"./index-CzvSJj6w.js";import{T as g}from"./Typography-RMDmhaRB.js";const l=u(g)`
  ${()=>{const{tokens:r}=n(),{charactersCounter:t}=r;return h`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function a(r){const{length:t,maxLength:s,testID:i}=r,{tokens:c}=n(),{charactersCounter:e}=c,o=Math.max(0,s-t);return m.jsx(l,{variant:e.typography.variant,fontFamily:e.typography.fontFamily,testID:i,"aria-live":"polite",children:`${o} character${o!==1?"s":""} remaining`})}const f=p.memo(a);a.__docgenInfo={description:"",methods:[],displayName:"CharactersCounter",props:{length:{required:!0,tsType:{name:"number"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""}}};export{f as C};
