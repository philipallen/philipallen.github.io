import{j as i}from"./jsx-runtime-6eef64cc.js";import{a as o,u as s,b as p,p as d}from"./index-912b60f4.js";import{E as l}from"./index-5cf7436a.js";import{T as u}from"./Typography-7961d08c.js";const h=o.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function g(t){const{alert:e,gap:r,children:n}=t;return i.jsxs(h,{$gap:r,children:[n,e&&e]})}g.__docgenInfo={description:"",methods:[],displayName:"InputWrapper",props:{alert:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const m=o.div`
  ${({$severity:t})=>{const{tokens:e}=s(),{inputAlert:r}=e;return p`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r.gap};
      color: ${r.color[t]};

      svg {
        width: ${r.icon.width};
        height: ${r.icon.height};
      }
    `}}
`,y=o.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:e}=t,r=d(e.iconWrapper.height);return p`
      display: grid;
      place-content: center;
      height: ${r};
    `}}
`;function f(t){const{severity:e,children:r,testID:n="input-alert"}=t,{tokens:c}=s(),{inputAlert:a}=c;return i.jsxs(m,{role:"alert","aria-live":"polite",$severity:e,"data-testid":n,children:[i.jsx(y,{children:i.jsx(l,{primaryColor:a.icon.primaryColor[e],secondaryColor:a.icon.secondaryColor[e],"aria-hidden":"true"})}),i.jsx(u,{color:"inherit",children:r})]})}f.__docgenInfo={description:"",methods:[],displayName:"InputAlert",props:{severity:{required:!0,tsType:{name:"CoreInputAlert.Severity"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};export{g as I,f as a};
