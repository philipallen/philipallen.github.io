import{j as o}from"./jsx-runtime-6eef64cc.js";import{h as g,a as u,b as m,u as h,g as $}from"./index-2b4c4340.js";import{a as v}from"./index-aa3a2926.js";import{r as x}from"./index-c013ead5.js";const y=g`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,j=u.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:e,$color:t})=>m`
    color: ${t};
    width: ${e};
    height: ${e};
  `}
`,S=u.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:e})=>{const{tokens:{spinner:t}}=h();return m`
      border: ${e} solid currentColor;
      opacity: ${t.backgroundOpacity};
    `}}
`,d=u.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${y} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:e,$borderWidth:t})=>m`
      border-width: ${t};
      border-style: solid;
      animation-delay: ${.15*(e+1)}s;
    `}
`,l=x.memo(e=>{const{testID:t="spinner"}=e,{tokens:{spinner:s}}=h();let i,r;if("variant"in e){const c=s.variants[e.variant];c&&([i,r]=[c.color,c.size])}"size"in e&&e.size?r=e.size:r||(r=s.variants.default.size),"color"in e&&e.color?i=e.color:i||(i=s.variants.default.color);const a={$borderWidth:`${Math.round(parseInt(r)/parseInt(s.borderRatio))}px`};return o.jsxs(j,{$color:i,$size:r,"data-testid":t,children:[o.jsx(S,{...a}),o.jsx(d,{$index:0,...a}),o.jsx(d,{$index:1,...a}),o.jsx(d,{$index:2,...a})]})});l.displayName="Spinner";const{light:{color:z,spinner:k}}=$("boi"),O={title:"DataDisplay/Spinner",component:l,render:e=>o.jsx(l,{...e}),argTypes:{color:v(z),size:{type:"number",defaultValue:108},variant:{control:{type:"select"},options:Object.keys(k.variants)}},args:{variant:"default"}},n={args:{}};var p,b,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const T=["Basic"],E=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{n as B,E as S};