import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{r as h}from"./index-CcKhGcwW.js";import{h as m,a as c,b as l,u as b}from"./index-5VPm3mt9.js";import{$ as u}from"./ProgressBar-OTHehGJ9.js";const f=m`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,x=c(u)`
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
  animation: ${f} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:r,$borderWidth:t})=>l`
      border-width: ${t};
      border-style: solid;
      animation-delay: ${.15*(r+1)}s;
    `}
`,v=h.memo(r=>{const{testID:t="spinner",...$}=r,{tokens:{spinner:n}}=b();let i,e;if("variant"in r){const s=n.variants[r.variant];s&&([i,e]=[s.color,s.size])}"size"in r&&r.size?e=r.size:e||(e=n.variants.default.size),"color"in r&&r.color?i=r.color:i||(i=n.variants.default.color);const a={$borderWidth:`${Math.round(parseInt(e)/parseInt(n.borderRatio))}px`};return o.jsxs(x,{"aria-label":"Loading",...$,isIndeterminate:!0,$color:i,$size:e,"data-testid":t,children:[o.jsx(p,{...a}),o.jsx(d,{$index:0,...a}),o.jsx(d,{$index:1,...a}),o.jsx(d,{$index:2,...a})]})});v.displayName="Spinner";export{v as S};
