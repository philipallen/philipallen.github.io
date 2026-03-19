import{j as l}from"./jsx-runtime-Blucd9Qg.js";import{r as g}from"./index-CcKhGcwW.js";import{P as $}from"./index-eS8l-D1x.js";import{u as p,l as n,d as m}from"./index-C1QKVHyt.js";import{T as k}from"./Typography-BK_ZjFCe.js";const y=m(k)`
  ${()=>{const{tokens:{progressIndicator:r}}=p();return n`
      color: ${r.label.text.color};
      margin-bottom: ${r.label.marginBottom};
    `}}
`,x=m.div`
  ${()=>{const{tokens:r}=p(),{progressIndicator:e,breakpoint:o}=r;return[n`
        display: flex;
        gap: ${e.segments.gap.mobile};
        @media (min-width: ${o.tablet.min}) {
          gap: ${e.segments.gap.tablet};
        }
      `]}}
`,I=m.div`
  ${({$backgroundVariant:r,$isFilled:e,$isFirst:o,$isLast:a})=>{const{tokens:i}=p(),{progressIndicator:d,breakpoint:s}=i,{segment:t}=d.segments;return[n`
        flex: 1;
        border-radius: ${t.radius};
        height: ${t.height.mobile};

        @media (min-width: ${s.tablet.min}) {
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
`,T="progress";function f({totalSteps:r,currentStep:e,backgroundVariant:o=$.DEFAULT_VARIANT,testID:a=T}){const i=g.useMemo(()=>[...Array(r).keys()],[r]),d=g.useCallback((s,t)=>l.jsx(I,{"data-testid":`${a}-step-${s}`,$backgroundVariant:o,$isFirst:t===0,$isLast:t===i.length-1,$isFilled:s<e},s),[e,o,i,a]);return l.jsxs("div",{"data-testid":a,role:"group","aria-label":`Step ${e} of ${r}`,children:[l.jsxs(v,{testID:`${a}-label`,children:["Step ",e,"/",r]}),l.jsx(x,{"aria-hidden":!0,children:i.map(d)})]})}function v(r){const{tokens:e}=p(),o=window.matchMedia(`(min-width: ${e.breakpoint.tablet.min})`),[a,i]=g.useState(()=>o.matches);g.useEffect(()=>{function s(t){i(t.matches)}return o.addEventListener("change",s),()=>{o.removeEventListener("change",s)}},[]);const d=a?e.progressIndicator.label.text.typography.variant.tablet:e.progressIndicator.label.text.typography.variant.mobile;return l.jsx(y,{testID:r.testID,variant:d,fontFamily:e.progressIndicator.label.text.typography.fontFamily,"aria-hidden":!0,children:r.children})}f.displayName="ProgressIndicator";const R={title:"Components/Data Display/ProgressIndicator",component:f,argTypes:{currentStep:{control:"number"},totalSteps:{control:"number"},backgroundVariant:{control:"select",options:$.BACKGROUND_VARIANTS}},args:{backgroundVariant:"alt",currentStep:2,totalSteps:5}},c={};var b,u,h;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const j=["Basic"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,__namedExportsOrder:j,default:R},Symbol.toStringTag,{value:"Module"}));export{c as B,B as P};
