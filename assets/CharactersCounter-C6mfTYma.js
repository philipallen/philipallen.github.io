import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as e}from"./index-BVaTkfsr.js";import{u as s,i as h,a as p}from"./index-BpMil6Tx.js";import{T as f}from"./Typography-G_YOndja.js";const l=p(f)`
  ${()=>{const{tokens:r}=s(),{charactersCounter:t}=r;return h`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function g(r){const{length:t,maxLength:c,testID:i}=r,{tokens:m}=s(),{charactersCounter:o}=m,a=Math.max(0,c-t),n=e.useRef(!0);return e.useEffect(()=>{n.current=!1},[]),u.jsx(l,{variant:o.typography.variant,fontFamily:o.typography.fontFamily,testID:i,"aria-live":n.current?"off":"polite",children:`${a} character${a!==1?"s":""} remaining`})}const d=e.memo(g);export{d as C};
