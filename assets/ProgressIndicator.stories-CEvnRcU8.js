import{j as c}from"./jsx-runtime-sfY7k0Xq.js";import{r as g}from"./index-CcKhGcwW.js";import{P as $}from"./index-CmedeESG.js";import{a as m,u as p,b as n}from"./index-D1OOBdzz.js";import{T as f}from"./Typography-DU98AY51.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_4KMkng.js";const k=m(f)`
  ${()=>{const{tokens:{progressIndicator:r}}=p();return n`
      color: ${r.label.text.color};
      margin-bottom: ${r.label.marginBottom};
    `}}
`,x=m.div`
  ${()=>{const{tokens:r}=p(),{progressIndicator:e,breakpoint:o}=r;return[n`
        display: flex;
        gap: ${e.segments.gap.mobile};
        @media (min-width: ${o.tablet}) {
          gap: ${e.segments.gap.tablet};
        }
      `]}}
`,y=m.div`
  ${({$backgroundVariant:r,$isFilled:e,$isFirst:o,$isLast:a})=>{const{tokens:i}=p(),{progressIndicator:d,breakpoint:s}=i,{segment:t}=d.segments;return[n`
        flex: 1;
        border-radius: ${t.radius};
        height: ${t.height.mobile};

        @media (min-width: ${s.tablet}) {
          height: ${t.height.tablet};
        }
      `,e?n`
            background-color: ${t.background.filled};
          `:r==="alt"?n`
            background-color: ${t.background.notFilledAlt};
          `:n`
            background-color: ${t.background.notFilled};
          `,o&&n`
          border-top-left-radius: ${t.borderTopLeftRadius.first};
          border-bottom-left-radius: ${t.borderBottomLeftRadius.first};
        `,a&&n`
          border-top-right-radius: ${t.borderTopRightRadius.last};
          border-bottom-right-radius: ${t.borderBottomRightRadius.last};
        `]}}
`,I="progress";function T({totalSteps:r,currentStep:e,backgroundVariant:o=$.DEFAULT_VARIANT,testID:a=I}){const i=g.useMemo(()=>[...Array(r).keys()],[r]),d=g.useCallback((s,t)=>c.jsx(y,{"data-testid":`${a}-step-${s}`,$backgroundVariant:o,$isFirst:t===0,$isLast:t===i.length-1,$isFilled:s<e},s),[e,i,a]);return c.jsxs("div",{"data-testid":a,role:"group","aria-label":`Step ${e} of ${r}`,children:[c.jsxs(R,{testID:`${a}-label`,children:["Step ",e,"/",r]}),c.jsx(x,{"aria-hidden":!0,children:i.map(d)})]})}function R(r){const{tokens:e}=p(),o=window.matchMedia(`(min-width: ${e.breakpoint.tablet})`),[a,i]=g.useState(()=>o.matches);g.useEffect(()=>{function s(t){i(t.matches)}return o.addEventListener("change",s),()=>{o.removeEventListener("change",s)}},[]);const d=a?e.progressIndicator.label.text.typography.variant.tablet:e.progressIndicator.label.text.typography.variant.mobile;return c.jsx(k,{testID:r.testID,variant:d,fontFamily:e.progressIndicator.label.text.typography.fontFamily,"aria-hidden":!0,children:r.children})}const D={title:"Components/Data Display/ProgressIndicator",component:T,argTypes:{currentStep:{control:"number"},totalSteps:{control:"number"},backgroundVariant:{control:"select",options:$.BACKGROUND_VARIANTS}},args:{backgroundVariant:"alt",currentStep:2,totalSteps:5}},l={};var b,u,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const M=["Basic"];export{l as Basic,M as __namedExportsOrder,D as default};
