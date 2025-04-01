import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{a as l,u as h,b as c}from"./index-DT8u_GqS.js";import{r}from"./index-KmaxkdDD.js";const p=l.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,b=l.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,S=l(b)`
  ${({$visible:o})=>{const{tokens:t}=h(),{scrollShadowContainer:s}=t;return[c`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${s.shadow.color};
      `,o&&c`
          transform: translateY(0px);
        `]}}
`,x=l(b)`
  ${({$visible:o})=>{const{tokens:t}=h(),{scrollShadowContainer:s}=t;return[c`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${s.shadow.color};
      `,o&&c`
          transform: translateY(0px);
        `]}}
`,m=l.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:t,trackColor:s}}}=h();return c`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${t} ${s};

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;function v(o){const t=r.useRef(null),s=r.useRef(null),[n,f]=r.useState(!1),[i,u]=r.useState(!1);return r.useEffect(()=>{o==null||o({topShadowVisible:n,bottomShadowVisible:i})},[o,n,i]),r.useEffect(()=>{if(!t.current||!s.current)return;const d=new IntersectionObserver(([a])=>{a&&f(!a.isIntersecting)}),w=new IntersectionObserver(([a])=>{a&&u(!a.isIntersecting)});return d.observe(t.current),w.observe(s.current),()=>{d.disconnect(),w.disconnect()}},[]),{topShadowRef:t,bottomShadowRef:s,topShadowVisible:n,bottomShadowVisible:i}}function V(o){const{tabIndex:t,onChange:s,children:n}=o,{topShadowRef:f,bottomShadowRef:i,topShadowVisible:u,bottomShadowVisible:d}=v(s);return e.jsxs(p,{children:[e.jsx(S,{$visible:u}),e.jsxs(m,{tabIndex:t,children:[e.jsx("div",{ref:f}),n,e.jsx("div",{ref:i})]}),e.jsx(x,{$visible:d})]})}export{V as S};
