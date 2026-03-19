import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{r as $}from"./index-CcKhGcwW.js";import{l,d as c,u as b,m as f}from"./index-C1QKVHyt.js";import{$ as h}from"./ProgressBar-Cj3OymJH.js";const u=f`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,x=c(h)`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:r,$color:t})=>l`
    color: ${t};
    width: ${r};
    height: ${r};
  `}
`,p=c.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:r})=>{const{tokens:{spinner:t}}=b();return l`
      border: ${r} solid currentColor;
      opacity: ${t.backgroundOpacity};
    `}}
`,d=c.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${u} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:r,$borderWidth:t})=>l`
      border-width: ${t};
      border-style: solid;
      animation-delay: ${.15*(r+1)}s;
    `}
`,v=$.memo(r=>{const{testID:t="spinner",...m}=r,{tokens:{spinner:n}}=b();let i,e;if("variant"in r){const a=n.variants[r.variant];a&&([i,e]=[a.color,a.size])}"size"in r&&r.size?e=r.size:e||(e=n.variants.default.size),"color"in r&&r.color?i=r.color:i||(i=n.variants.default.color);const s={$borderWidth:`${Math.round(parseInt(e)/parseInt(n.borderRatio))}px`};return o.jsxs(x,{"aria-label":"Loading",...m,isIndeterminate:!0,$color:i,$size:e,"data-testid":t,children:[o.jsx(p,{...s}),o.jsx(d,{$index:0,...s}),o.jsx(d,{$index:1,...s}),o.jsx(d,{$index:2,...s})]})});v.displayName="Spinner";export{v as S};
