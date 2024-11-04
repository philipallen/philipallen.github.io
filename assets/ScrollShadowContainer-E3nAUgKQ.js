import{j as s}from"./jsx-runtime-DQ32znRX.js";import{a as c,u as p,b as l}from"./index-C-LSVLXB.js";import{r as n}from"./index-DH5ua8nC.js";const w=c.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,h=c.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,m=c(h)`
  ${({$visible:o})=>{const{tokens:e}=p(),{scrollShadowContainer:t}=e;return[l`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,o&&l`
          transform: translateY(0px);
        `]}}
`,S=c(h)`
  ${({$visible:o})=>{const{tokens:e}=p(),{scrollShadowContainer:t}=e;return[l`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,o&&l`
          transform: translateY(0px);
        `]}}
`,x=c.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:e,trackColor:t}}}=p();return l`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${e} ${t};

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;function v(o){const e=n.useRef(null),t=n.useRef(null),[r,u]=n.useState(!1),[i,b]=n.useState(!1);return n.useEffect(()=>{o==null||o({topShadowVisible:r,bottomShadowVisible:i})},[o,r,i]),n.useEffect(()=>{if(!e.current||!t.current)return;const d=new IntersectionObserver(([a])=>{a&&u(!a.isIntersecting)}),f=new IntersectionObserver(([a])=>{a&&b(!a.isIntersecting)});return d.observe(e.current),f.observe(t.current),()=>{d.disconnect(),f.disconnect()}},[]),{topShadowRef:e,bottomShadowRef:t,topShadowVisible:r,bottomShadowVisible:i}}function g(o){const{tabIndex:e,onChange:t,children:r}=o,{topShadowRef:u,bottomShadowRef:i,topShadowVisible:b,bottomShadowVisible:d}=v(t);return s.jsxs(w,{children:[s.jsx(m,{$visible:b}),s.jsxs(x,{tabIndex:e,children:[s.jsx("div",{ref:u}),r,s.jsx("div",{ref:i})]}),s.jsx(S,{$visible:d})]})}g.__docgenInfo={description:"",methods:[],displayName:"ScrollShadowContainer",props:{tabIndex:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(state: {
  topShadowVisible: boolean;
  bottomShadowVisible: boolean;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  topShadowVisible: boolean;
  bottomShadowVisible: boolean;
}`,signature:{properties:[{key:"topShadowVisible",value:{name:"boolean",required:!0}},{key:"bottomShadowVisible",value:{name:"boolean",required:!0}}]}},name:"state"}],return:{name:"void"}}},description:""}}};export{g as S};
