import{j as t}from"./jsx-runtime-DQ32znRX.js";import{E as p,W as u,d as h,e as g}from"./index-BYwLR37K.js";import{a as o,u as s,b as a,p as m}from"./index-CzvSJj6w.js";import{T as y}from"./Typography-RMDmhaRB.js";const f=o.div`
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
`,I=o.div`
  ${({$severity:n})=>{const{tokens:r}=s(),{inlineAlert:e}=r,i=m(e.iconWrapper.height);return a`
      display: grid;
      place-content: center;
      height: ${i};

      & [data-primary-color] {
        color: ${e.icon.primaryColor[n]};
      }

      & [data-secondary-color] {
        color: ${e.icon.secondaryColor[n]};
      }
    `}}
`;function x(n){const{severity:r,children:e,id:i,testID:c="inline-alert"}=n,d={error:"alert",warning:"alert",success:"status",info:"status"},l={error:t.jsx(p,{"aria-hidden":"true"}),warning:t.jsx(u,{"aria-hidden":"true"}),success:t.jsx(h,{"aria-hidden":"true"}),info:t.jsx(g,{"aria-hidden":"true"})};return t.jsxs(f,{id:i,role:d[r],$severity:r,"data-testid":c,children:[t.jsx(I,{$severity:r,children:l[r]}),t.jsx(y,{color:"inherit",children:e})]})}x.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{severity:{required:!0,tsType:{name:"AlertSeverity"},description:""},children:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};export{x as I};
