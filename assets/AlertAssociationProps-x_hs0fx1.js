import{j as n}from"./jsx-runtime-DQ32znRX.js";import{a as d}from"./index-CtBUti8q.js";const p=d.div`
  ${({$gap:e="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${e};
  `}
`;function c(e){const{alert:r,gap:i,children:s}=e;return n.jsxs(p,{$gap:i,children:[s,r&&r]})}c.__docgenInfo={description:"",methods:[],displayName:"InputWrapper",props:{alert:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const l=(...e)=>e.filter(r=>r).join()||void 0,f=(e,r,i)=>{var a;const s=r.alertProps&&r.alertProps.severity!=="error"?e:void 0,t=((a=r.alertProps)==null?void 0:a.severity)==="error"?e:void 0,o=r["aria-describedby"]||void 0;return{"aria-describedby":l(s,o,i),"aria-invalid":t?"true":void 0,"aria-errormessage":t}};export{c as I,f as b};
