import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{a as l,u as h,b as c}from"./index-DmICCP6d.js";import{r}from"./index-CcKhGcwW.js";const p=l.div`
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
  ${({$visible:o})=>{const{tokens:t}=h(),{scrollShadowContainer:e}=t;return[c`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.shadow.color};
      `,o&&c`
          transform: translateY(0px);
        `]}}
`,x=l(b)`
  ${({$visible:o})=>{const{tokens:t}=h(),{scrollShadowContainer:e}=t;return[c`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.shadow.color};
      `,o&&c`
          transform: translateY(0px);
        `]}}
`,m=l.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:t,trackColor:e}}}=h();return c`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${t} ${e};

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;function v(o){const t=r.useRef(null),e=r.useRef(null),[n,u]=r.useState(!1),[i,f]=r.useState(!1);return r.useEffect(()=>{o==null||o({topShadowVisible:n,bottomShadowVisible:i})},[o,n,i]),r.useEffect(()=>{if(!t.current||!e.current)return;const d=new IntersectionObserver(([a])=>{a&&u(!a.isIntersecting)}),w=new IntersectionObserver(([a])=>{a&&f(!a.isIntersecting)});return d.observe(t.current),w.observe(e.current),()=>{d.disconnect(),w.disconnect()}},[]),{topShadowRef:t,bottomShadowRef:e,topShadowVisible:n,bottomShadowVisible:i}}function V(o){const{tabIndex:t,onChange:e,children:n}=o,{topShadowRef:u,bottomShadowRef:i,topShadowVisible:f,bottomShadowVisible:d}=v(e);return s.jsxs(p,{children:[s.jsx(S,{$visible:f,"aria-hidden":!0}),s.jsxs(m,{tabIndex:t,children:[s.jsx("div",{ref:u}),n,s.jsx("div",{ref:i})]}),s.jsx(x,{$visible:d,"aria-hidden":!0})]})}export{V as S};
