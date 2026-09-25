import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BVaTkfsr.js";import{i as c,a as l,u as $,f as m}from"./index-BpMil6Tx.js";import{$ as u}from"./ProgressBar-tTLymDjc.js";const h=m`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,x=l(u)`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:r,$color:t})=>c`
    color: ${t};
    width: ${r};
    height: ${r};
  `}
`,p=l.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:r})=>{const{tokens:{spinner:t}}=$();return c`
      border: ${r} solid currentColor;
      opacity: ${t.backgroundOpacity};
    `}}
`,d=l.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${h} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:r,$borderWidth:t})=>c`
      border-width: ${t};
      border-style: solid;
      animation-delay: ${.15*(r+1)}s;
    `}
`,v=f.memo(r=>{const{testID:t="spinner",...b}=r,{tokens:{spinner:n}}=$();let i,e;if("variant"in r){const a=n.variants[r.variant];a&&([i,e]=[a.color,a.size])}"size"in r&&r.size?e=r.size:e||(e=n.variants.default.size),"color"in r&&r.color?i=r.color:i||(i=n.variants.default.color);const s={$borderWidth:`${Math.round(parseInt(e)/parseInt(n.borderRatio))}px`};return o.jsxs(x,{"aria-label":"Loading",...b,isIndeterminate:!0,$color:i,$size:e,"data-testid":t,children:[o.jsx(p,{...s}),o.jsx(d,{$index:0,...s}),o.jsx(d,{$index:1,...s}),o.jsx(d,{$index:2,...s})]})});v.displayName="Spinner";export{v as S};
