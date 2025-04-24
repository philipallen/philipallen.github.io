import{j as i}from"./jsx-runtime-BkBIjjFT.js";import{r as h}from"./index-KmaxkdDD.js";import{h as m,a as c,b as l,u as b}from"./index-CFGjHfra.js";import{$ as u}from"./ProgressBar-D7cUUrB_.js";const f=m`
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
`,v=h.memo(r=>{const{testID:t="spinner",...$}=r,{tokens:{spinner:n}}=b();let o,e;if("variant"in r){const a=n.variants[r.variant];a&&([o,e]=[a.color,a.size])}"size"in r&&r.size?e=r.size:e||(e=n.variants.default.size),"color"in r&&r.color?o=r.color:o||(o=n.variants.default.color);const s={$borderWidth:`${Math.round(parseInt(e)/parseInt(n.borderRatio))}px`};return i.jsxs(x,{...$,isIndeterminate:!0,$color:o,$size:e,"data-testid":t,children:[i.jsx(p,{...s}),i.jsx(d,{$index:0,...s}),i.jsx(d,{$index:1,...s}),i.jsx(d,{$index:2,...s})]})});v.displayName="Spinner";export{v as S};
