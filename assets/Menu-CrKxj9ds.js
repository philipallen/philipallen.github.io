import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as p}from"./index-CcKhGcwW.js";import{c as b,g as m,h,b as x,d as f}from"./Dialog-CYmhaE2o.js";import{M as g}from"./index-ChacPRz0.js";import{a as c,u as l,b as a}from"./index-Dwsyfx_g.js";import{u as k}from"./ScrollShadow.hooks-ggsIV_6p.js";import{u as M}from"./OverlayContext-DE6V0lcf.js";import{$ as I}from"./Pressable-eToF6ols.js";const T=c(b)`
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
`,v=c(m)`
  ${()=>{const e=k();return a`
      outline: none;
      overflow-y: auto;

      ${e}
    `}}
`,i=c(h)`
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
`,y=c.div`
  ${()=>{const{tokens:e}=l(),{menu:o}=e;return a`
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
    `}}
`,B="bottom end",C=6,E=2,w=48,_=w*C,S=E+_,$=p.createContext({}),j=e=>{const{children:o,...r}=e;return t.jsx($.Provider,{value:r,children:o})};function n(e){const{children:o,testID:r="menu",...s}=e;return t.jsx(j,{...s,testID:r,children:t.jsx(f,{children:o})})}n.Trigger=function(o){return t.jsx(I,{...o})};n.Content=function(o){const{children:r}=o,{popoverProps:s,testID:d}=p.useContext($),{portalElement:u}=M();return t.jsx(x,{getContainer:u&&(()=>u),children:t.jsx(T,{offset:g.DEFAULT_OFFSET,maxHeight:S,...s,children:t.jsx(v,{"data-testid":d,children:r})})})};n.Item=function(o){const{children:r,...s}=o;return t.jsx(i,{...s,children:d=>t.jsx(y,{children:typeof r=="function"?r(d):r})})};n.displayName="Menu";n.Trigger.displayName="Menu.Trigger";n.Content.displayName="Menu.Content";n.Item.displayName="Menu.Item";export{B as D,n as M};
