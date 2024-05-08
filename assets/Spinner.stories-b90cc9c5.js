import{j as o}from"./jsx-runtime-6eef64cc.js";import{h as g,a as m,b as p,u as h,g as $}from"./index-2b4c4340.js";import{a as v}from"./index-aa3a2926.js";import{r as x}from"./index-c013ead5.js";const y=g`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,j=m.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:e,$color:t})=>p`
    color: ${t};
    width: ${e};
    height: ${e};
  `}
`,S=m.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:e})=>{const{tokens:{spinner:t}}=h();return p`
      border: ${e} solid currentColor;
      opacity: ${t.backgroundOpacity};
    `}}
`,l=m.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${y} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:e,$borderWidth:t})=>p`
      border-width: ${t};
      border-style: solid;
      animation-delay: ${.15*(e+1)}s;
    `}
`,d=x.memo(e=>{const{testID:t="spinner"}=e,{tokens:{spinner:s}}=h();let n,r;if("variant"in e){const c=s.variants[e.variant];c&&([n,r]=[c.color,c.size])}"size"in e&&e.size?r=e.size:r||(r=s.variants.default.size),"color"in e&&e.color?n=e.color:n||(n=s.variants.default.color);const a={$borderWidth:`${Math.round(parseInt(r)/parseInt(s.borderRatio))}px`};return o.jsxs(j,{$color:n,$size:r,"data-testid":t,children:[o.jsx(S,{...a}),o.jsx(l,{$index:0,...a}),o.jsx(l,{$index:1,...a}),o.jsx(l,{$index:2,...a})]})});d.displayName="Spinner";d.__docgenInfo={description:"",methods:[],displayName:"Spinner"};const{light:{color:z,spinner:_}}=$("boi"),k={title:"Components/DataDisplay/Spinner",component:d,render:e=>o.jsx(d,{...e}),argTypes:{color:v(z),size:{type:"number",defaultValue:108},variant:{control:{type:"select"},options:Object.keys(_.variants)}},args:{variant:"default"}},i={args:{}};var u,b,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const C=["Basic"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{i as B,B as S};
