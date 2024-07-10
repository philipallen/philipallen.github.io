import{j as o}from"./jsx-runtime-DQ32znRX.js";import{a as n,u as s,b as a,p}from"./index-CWEVnOcG.js";import{E as c}from"./index-ef8Z-xiF.js";import{T as d}from"./Typography-BayW6epx.js";const l=n.div`
  ${({$gap:r="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${r};
  `}
`;function u(r){const{alert:t,gap:e,children:i}=r;return o.jsxs(l,{$gap:e,children:[i,t&&t]})}u.__docgenInfo={description:"",methods:[],displayName:"InputWrapper",props:{alert:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const h=n.div`
  ${({$severity:r})=>{const{tokens:t}=s(),{inputAlert:e}=t;return a`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      color: ${e.color[r]};

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
      }
    `}}
`,g=n.div`
  ${({$severity:r})=>{const{tokens:t}=s(),{inputAlert:e}=t,i=p(e.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${i};

      & [data-primary-color] {
        color: ${e.icon.primaryColor[r]};
      }

      & [data-secondary-color] {
        color: ${e.icon.secondaryColor[r]};
      }
    `}}
`;function m(r){const{severity:t,children:e,testID:i="input-alert"}=r;return o.jsxs(h,{role:"alert","aria-live":"polite",$severity:t,"data-testid":i,children:[o.jsx(g,{$severity:t,children:o.jsx(c,{"aria-hidden":"true"})}),o.jsx(d,{color:"inherit",children:e})]})}m.__docgenInfo={description:"",methods:[],displayName:"InputAlert",props:{severity:{required:!0,tsType:{name:"CoreInputAlert.Severity"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};export{u as I,m as a};
