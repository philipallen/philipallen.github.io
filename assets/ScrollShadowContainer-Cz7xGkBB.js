import{j as s}from"./jsx-runtime-DQ32znRX.js";import{a as c,u as b,b as l}from"./index-D3TaQYms.js";import{r as n}from"./index-DH5ua8nC.js";const w=c.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,p=c.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,m=c(p)`
  ${({$visible:o})=>{const{tokens:e}=b(),{scrollShadowContainer:t}=e;return[l`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,o&&l`
          transform: translateY(0px);
        `]}}
`,S=c(p)`
  ${({$visible:o})=>{const{tokens:e}=b(),{scrollShadowContainer:t}=e;return[l`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,o&&l`
          transform: translateY(0px);
        `]}}
`,x=c.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:e,trackColor:t}}}=b();return l`
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
`;function v(o){const e=n.useRef(null),t=n.useRef(null),[r,d]=n.useState(!1),[i,u]=n.useState(!1);return n.useEffect(()=>{o==null||o({topShadowVisible:r,bottomShadowVisible:i})},[o,r,i]),n.useEffect(()=>{if(!e.current||!t.current)return;const h=new IntersectionObserver(([a])=>{a&&d(!a.isIntersecting)}),f=new IntersectionObserver(([a])=>{a&&u(!a.isIntersecting)});return h.observe(e.current),f.observe(t.current),()=>{h.disconnect(),f.disconnect()}},[]),{topShadowRef:e,bottomShadowRef:t,topShadowVisible:r,bottomShadowVisible:i}}function g(o){const{onChange:e,children:t}=o,{topShadowRef:r,bottomShadowRef:d,topShadowVisible:i,bottomShadowVisible:u}=v(e);return s.jsxs(w,{children:[s.jsx(m,{$visible:i}),s.jsxs(x,{tabIndex:0,children:[s.jsx("div",{ref:r}),t,s.jsx("div",{ref:d})]}),s.jsx(S,{$visible:u})]})}g.__docgenInfo={description:"",methods:[],displayName:"ScrollShadowContainer",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(state: {
  topShadowVisible: boolean;
  bottomShadowVisible: boolean;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  topShadowVisible: boolean;
  bottomShadowVisible: boolean;
}`,signature:{properties:[{key:"topShadowVisible",value:{name:"boolean",required:!0}},{key:"bottomShadowVisible",value:{name:"boolean",required:!0}}]}},name:"state"}],return:{name:"void"}}},description:""}}};export{g as S};
