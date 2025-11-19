import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{e as i,r as $}from"./index-CcKhGcwW.js";import{b as m,e as x,f as h,a as g,o as k}from"./Dialog-BBveVv4I.js";import{M as I}from"./index-HXCmP3Qs.js";import{a,u,b as l}from"./index-5VPm3mt9.js";import{u as E}from"./ScrollShadow.hooks-cpOhD3p1.js";import{u as M}from"./OverlayContext-DE6V0lcf.js";import{e as T,c as v}from"./useFocusRing-UK40PMEA.js";import{$ as w,d as C,g as y}from"./utils-2-3EihAd.js";const _=i.forwardRef(({children:e,...o},r)=>{r=w(r);let{pressProps:n}=T({...o,ref:r}),{focusableProps:c}=v(o,r),s=i.Children.only(e);$.useEffect(()=>{},[r,o.isDisabled]);let f=parseInt(i.version,10)<19?s.ref:s.props.ref;return i.cloneElement(s,{...C(n,c,s.props),ref:y(f,r)})}),S=a(m)`
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
`,j=a(x)`
  ${()=>{const e=E();return l`
      outline: none;
      overflow-y: auto;

      ${e}
    `}}
`,d=a(h)`
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
`,H=a.div`
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

      ${d}[data-hovered] &,
      ${d}[data-focus-visible] & {
        background: ${o.option.inner.backgroundColor.hover};
        outline-color: ${o.option.inner.stroke.color.hover};
      }

      ${d}[data-pressed] & {
        background: ${o.option.inner.backgroundColor.active};
        outline-color: ${o.option.inner.stroke.color.active};
      }
    `}}
`,q="bottom end",L=6,P=2,D=48,A=D*L,R=P+A,b=$.createContext({}),F=e=>{const{children:o,...r}=e;return t.jsx(b.Provider,{value:r,children:o})};function p(e){const{children:o,testID:r="menu",...n}=e;return t.jsx(F,{...n,testID:r,children:t.jsx(k,{children:o})})}p.Trigger=function(o){return t.jsx(_,{...o})};p.Content=function(o){const{children:r}=o,{popoverProps:n,testID:c}=$.useContext(b),{portalElement:s}=M();return t.jsx(g,{getContainer:s&&(()=>s),children:t.jsx(S,{offset:I.DEFAULT_OFFSET,maxHeight:R,...n,children:t.jsx(j,{"data-testid":c,children:r})})})};p.Item=function(o){const{children:r,...n}=o;return t.jsx(d,{...n,children:c=>t.jsx(H,{children:typeof r=="function"?r(c):r})})};export{q as D,p as M};
