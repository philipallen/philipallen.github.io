import{j as t}from"./jsx-runtime-DQ32znRX.js";import{E as l,W as p,S as u,d as h}from"./index-BFYe-czB.js";import{a as i,u as s,b as a,p as g}from"./index-D3TaQYms.js";import{T as m}from"./Typography-squJd_7u.js";const y=i.div`
  ${({$severity:n})=>{const{tokens:r}=s(),{inlineAlert:e}=r;return a`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      color: ${e.color[n]};

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
      }
    `}}
`,f=i.div`
  ${({$severity:n})=>{const{tokens:r}=s(),{inlineAlert:e}=r,o=g(e.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${o};

      & [data-primary-color] {
        color: ${e.icon.primaryColor[n]};
      }

      & [data-secondary-color] {
        color: ${e.icon.secondaryColor[n]};
      }
    `}}
`;function I(n){const{severity:r,children:e,testID:o="inline-alert"}=n,c={error:"alert",warning:"alert",success:"status",info:"status"},d={error:t.jsx(l,{"aria-hidden":"true"}),warning:t.jsx(p,{"aria-hidden":"true"}),success:t.jsx(u,{"aria-hidden":"true"}),info:t.jsx(h,{"aria-hidden":"true"})};return t.jsxs(y,{role:c[r],$severity:r,"data-testid":o,children:[t.jsx(f,{$severity:r,children:d[r]}),t.jsx(m,{color:"inherit",children:e})]})}I.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{severity:{required:!0,tsType:{name:"AlertSeverity"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};export{I};
