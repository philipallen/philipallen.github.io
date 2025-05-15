import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{e as i,r as p}from"./index-KmaxkdDD.js";import{$ as m,a as x,b as h}from"./Menu-DLH8Q6W-.js";import{M as g}from"./index-BDdHs4nI.js";import{a as d,u,b as l}from"./index-BMLrhZi-.js";import{$ as k}from"./Dialog-7WXOo05O.js";import{u as I}from"./ScrollShadow.hooks-BtmOWN6N.js";import{u as E}from"./OverlayContext-CQkNAI0D.js";import{$ as T}from"./usePress-BpjTE7Om.js";import{c as M}from"./useFocusRing-sAzOUMLq.js";import{$ as v,c as w,f as C}from"./utils-HuDI8Qn7.js";const _=i.forwardRef(({children:e,...o},r)=>{r=v(r);let{pressProps:n}=T({...o,ref:r}),{focusableProps:c}=M(o,r),s=i.Children.only(e);p.useEffect(()=>{},[r]);let f=parseInt(i.version,10)<19?s.ref:s.props.ref;return i.cloneElement(s,{...w(n,c,s.props),ref:C(f,r)})}),y=d(k)`
  ${()=>{const{tokens:{menu:e,scrollBar:{thumbColor:o,trackColor:r}}}=u();return l`
      display: grid;
      grid-template-rows: 1fr;
      width: max-content;
      max-width: ${e.maxWidth};
      border-radius: ${e.radius};
      border-width: ${e.stroke.width};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color};
      box-shadow: 0px 2px 2px ${e.shadow.outer.color};
      background: ${e.backgroundColor.base};
      scrollbar-color: ${o} ${r};
      z-index: ${e.zIndex};
      overflow: hidden;
    `}}
`,S=d(m)`
  ${()=>{const e=I();return l`
      outline: none;
      overflow-y: auto;

      ${e}
    `}}
`,a=d(x)`
  ${()=>{const{tokens:e}=u(),{menu:o}=e;return l`
      display: grid;
      min-height: ${o.option.minHeight};
      padding: ${o.option.padding};
      background: ${o.option.backgroundColor.base};
      border-bottom-width: ${o.separator.width};
      border-bottom-style: ${o.separator.style};
      border-bottom-color: ${o.separator.color};
      cursor: pointer;
      outline: none;

      &:last-of-type {
        border-bottom-color: transparent;
      }
    `}}
`,j=d.div`
  ${()=>{const{tokens:e}=u(),{menu:o}=e;return l`
      display: grid;
      align-items: center;
      color: ${o.option.inner.color.base};
      border-radius: ${o.option.inner.radius};
      background: ${o.option.inner.backgroundColor.base};
      outline-width: ${o.option.inner.stroke.width};
      outline-style: ${o.option.inner.stroke.style};
      outline-color: ${o.option.inner.stroke.color.base};
      outline-offset: ${o.option.inner.stroke.offset};
      overflow: hidden;

      ${a}[data-hovered] &,
      ${a}[data-focus-visible] & {
        background: ${o.option.inner.backgroundColor.hover};
        outline-color: ${o.option.inner.stroke.color.hover};
      }

      ${a}[data-pressed] & {
        background: ${o.option.inner.backgroundColor.active};
        outline-color: ${o.option.inner.stroke.color.active};
      }
    `}}
`,J="bottom end",H=6,L=2,P=48,V=P*H,D=L+V,b=p.createContext({}),A=e=>{const{children:o,...r}=e;return t.jsx(b.Provider,{value:r,children:o})};function $(e){const{children:o,testID:r="menu",...n}=e;return t.jsx(A,{...n,testID:r,children:t.jsx(h,{children:o})})}$.Trigger=function(o){return t.jsx(_,{...o})};$.Content=function(o){const{children:r}=o,{popoverProps:n,testID:c}=p.useContext(b),{portalElement:s}=E();return t.jsx(y,{offset:g.DEFAULT_OFFSET,maxHeight:D,...n,UNSTABLE_portalContainer:s,children:t.jsx(S,{"data-testid":c,children:r})})};$.Item=function(o){const{children:r,...n}=o;return t.jsx(a,{...n,children:c=>t.jsx(j,{children:typeof r=="function"?r(c):r})})};export{J as D,$ as M};
