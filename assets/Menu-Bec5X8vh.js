import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BVaTkfsr.js";import{$ as m}from"./Pressable-CAX-Hbak.js";import{$ as b,d as x,e as f,g as h,f as g}from"./Dialog-DeeZ7kT2.js";import{M as k}from"./index-EybPYVoN.js";import{u as l,i as a,a as d}from"./index-BpMil6Tx.js";import{u as M}from"./ScrollShadow.hooks-IrBnYoiS.js";import{u as I}from"./OverlayContext-cry3RCsh.js";const T=d(b)`
  ${()=>{const{tokens:{menu:e,scrollBar:{thumbColor:o,trackColor:r}}}=l();return a`
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
`,v=d(x)`
  ${()=>{const e=M();return a`
      outline: none;
      overflow-y: auto;

      ${e}
    `}}
`,i=d(f)`
  ${()=>{const{tokens:e}=l(),{menu:o}=e;return a`
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
`,w=d.div`
  ${()=>{const{tokens:e}=l(),{menu:o,select:r}=e;return a`
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

      ${i}[data-hovered] &,
      ${i}[data-focus-visible] & {
        background: ${o.option.inner.backgroundColor.hover};
        outline-color: ${o.option.inner.stroke.color.hover};
      }

      ${i}[data-pressed] & {
        background: ${o.option.inner.backgroundColor.active};
        outline-color: ${o.option.inner.stroke.color.active};
      }

      ${i}[data-disabled] & {
        cursor: not-allowed;
        color: ${r.menu.option.inner.color.disabled};
      }
    `}}
`,B="bottom end",y=6,C=2,E=48,_=E*y,S=C+_,$=p.createContext({}),j=e=>{const{children:o,...r}=e;return t.jsx($.Provider,{value:r,children:o})};function n(e){const{children:o,testID:r="menu",...s}=e;return t.jsx(j,{...s,testID:r,children:t.jsx(h,{children:o})})}n.Trigger=function(o){return t.jsx(m,{...o})};n.Content=function(o){const{children:r}=o,{popoverProps:s,testID:c}=p.useContext($),{portalElement:u}=I();return t.jsx(g,{getContainer:u&&(()=>u),children:t.jsx(T,{offset:k.DEFAULT_OFFSET,maxHeight:S,...s,children:t.jsx(v,{"data-testid":c,children:r})})})};n.Item=function(o){const{children:r,...s}=o;return t.jsx(i,{...s,children:c=>t.jsx(w,{children:typeof r=="function"?r(c):r})})};n.displayName="Menu";n.Trigger.displayName="Menu.Trigger";n.Content.displayName="Menu.Content";n.Item.displayName="Menu.Item";export{B as D,n as M};
