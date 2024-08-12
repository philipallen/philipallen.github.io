import{j as t}from"./jsx-runtime-DQ32znRX.js";import{E as d,W as p,S as u,I as h}from"./index-M-g1GIMf.js";import{a as i,u as s,b as a,p as g}from"./index-jNFq1OWt.js";import{T as m}from"./Typography-D5AcRl6x.js";const y=i.div`
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
`;function I(n){const{severity:r,children:e,testID:o="inline-alert"}=n,c={error:"alert",warning:"alert",success:"status",info:"status"},l={error:t.jsx(d,{"aria-hidden":"true"}),warning:t.jsx(p,{"aria-hidden":"true"}),success:t.jsx(u,{"aria-hidden":"true"}),info:t.jsx(h,{"aria-hidden":"true"})};return t.jsxs(y,{role:c[r],$severity:r,"data-testid":o,children:[t.jsx(f,{$severity:r,children:l[r]}),t.jsx(m,{color:"inherit",children:e})]})}I.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{severity:{required:!0,tsType:{name:"AlertSeverity"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};export{I};
