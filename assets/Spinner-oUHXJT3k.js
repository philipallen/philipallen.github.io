import{j as o}from"./jsx-runtime-BkBIjjFT.js";import{h as b,a as c,b as l,u as h}from"./index-DT8u_GqS.js";import{r as u}from"./index-KmaxkdDD.js";const $=b`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,m=c.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:t,$color:r})=>l`
    color: ${r};
    width: ${t};
    height: ${t};
  `}
`,f=c.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:t})=>{const{tokens:{spinner:r}}=h();return l`
      border: ${t} solid currentColor;
      opacity: ${r.backgroundOpacity};
    `}}
`,d=c.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${$} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:t,$borderWidth:r})=>l`
      border-width: ${r};
      border-style: solid;
      animation-delay: ${.15*(t+1)}s;
    `}
`,x=u.memo(t=>{const{testID:r="spinner"}=t,{tokens:{spinner:n}}=h();let e,i;if("variant"in t){const a=n.variants[t.variant];a&&([e,i]=[a.color,a.size])}"size"in t&&t.size?i=t.size:i||(i=n.variants.default.size),"color"in t&&t.color?e=t.color:e||(e=n.variants.default.color);const s={$borderWidth:`${Math.round(parseInt(i)/parseInt(n.borderRatio))}px`};return o.jsxs(m,{$color:e,$size:i,"data-testid":r,children:[o.jsx(f,{...s}),o.jsx(d,{$index:0,...s}),o.jsx(d,{$index:1,...s}),o.jsx(d,{$index:2,...s})]})});x.displayName="Spinner";export{x as S};
