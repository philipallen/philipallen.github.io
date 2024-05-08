import{j as i}from"./jsx-runtime-6eef64cc.js";import{a as o,u as s,b as a,p}from"./index-2b4c4340.js";import{a as c}from"./index-b1e3628a.js";import{T as d}from"./Typography-45ec0b3f.js";const l=o.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function u(t){const{alert:r,gap:e,children:n}=t;return i.jsxs(l,{$gap:e,children:[n,r&&r]})}u.__docgenInfo={description:"",methods:[],displayName:"InputWrapper",props:{alert:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const h=o.div`
  ${({$severity:t})=>{const{tokens:r}=s(),{inputAlert:e}=r;return a`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      color: ${e.color[t]};

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
        color: ${e.icon.color[t]};
      }
    `}}
`,g=o.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:r}=t,e=p(r.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${e};
    `}}
`;function m(t){const{severity:r,children:e,testID:n="input-alert"}=t;return i.jsxs(h,{role:"alert","aria-live":"polite",$severity:r,"data-testid":n,children:[i.jsx(g,{children:i.jsx(c,{"aria-hidden":"true"})}),i.jsx(d,{color:"inherit",children:e})]})}m.__docgenInfo={description:"",methods:[],displayName:"InputAlert",props:{severity:{required:!0,tsType:{name:"CoreInputAlert.Severity"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};export{u as I,m as a};
