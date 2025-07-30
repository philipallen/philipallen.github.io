import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as c}from"./index-CcKhGcwW.js";import{r as H}from"./index-uaANFLeC.js";import{c as T,e as A,g as D,F as _,a as O,d as P,o as z,s as R}from"./floating-ui.react-DD7SKzjW.js";import{$ as U}from"./Collection-Bn5P0R-H.js";import{M as l}from"./index-WLaP1tkh.js";import{a as s,u as a,b as d}from"./index-BHlkTKmU.js";import{e as G,f as W}from"./Dialog-CLGWj2OB.js";import{u as X}from"./OverlayContext-DE6V0lcf.js";import{S as N}from"./ScrollShadowContainer-CKmEiZsq.js";const V=s.div`
  ${({$padding:t})=>{const{tokens:o}=a(),{menu:p}=o;return d`
      padding: calc(1px * ${t});
      z-index: ${p.zIndex};
    `}}
`,q=s.div`
  ${()=>{const{tokens:t}=a(),{menu:o}=t;return d`
      display: grid;
      overflow: hidden;
      border-radius: ${o.radius};
      border-width: ${o.stroke.width};
      border-style: ${o.stroke.style};
      border-color: ${o.stroke.color};
      box-shadow: 0px 2px 2px ${o.shadow.outer.color};
    `}}
`,B=s(G)`
  ${()=>{const{tokens:t}=a(),{menu:o}=t;return d`
      display: grid;
      gap: ${o.separator.width};
      background: ${o.separator.color};
      max-width: ${o.maxWidth};
    `}}
`,i=s(W)`
  ${()=>{const{tokens:t}=a(),{menu:o}=t;return[d`
        display: grid;
        min-height: ${o.option.minHeight};
        padding: ${o.option.padding};
        background: ${o.option.backgroundColor.base};
        cursor: pointer;
        outline: none;
      `]}}
`,J=s.div`
  ${()=>{const{tokens:t}=a(),{menu:o}=t;return[d`
        display: grid;
        align-items: center;
        color: ${o.option.inner.color.base};
        padding-top: ${o.option.inner.padding.top};
        padding-left: ${o.option.inner.padding.left};
        padding-right: ${o.option.inner.padding.right};
        padding-bottom: ${o.option.inner.padding.bottom};
        border-radius: ${o.option.inner.radius};
        background: ${o.option.inner.backgroundColor.base};
        outline-width: ${o.option.inner.stroke.width};
        outline-style: ${o.option.inner.stroke.style};
        outline-color: ${o.option.inner.stroke.color.base};
        outline-offset: ${o.option.inner.stroke.offset};
        overflow: hidden;

        ${i}[data-selected] & {
          background: ${o.option.inner.backgroundColor.selected};
          outline-color: ${o.option.inner.stroke.color.selected};
        }

        ${i}[data-hovered] &,
        ${i}[data-focus-visible] & {
          background: ${o.option.inner.backgroundColor.hover};
          outline-color: ${o.option.inner.stroke.color.hover};
        }

        ${i}[data-pressed] & {
          background: ${o.option.inner.backgroundColor.active};
          outline-color: ${o.option.inner.stroke.color.active};
        }
      `]}}
`;function so(t){const{items:o,offset:p=l.DEFAULT_OFFSET,padding:x,placement:k=l.DEFAULT_PLACEMENT,renderListItemContent:v,children:I,testID:$="menu",...y}=t,[r,u]=c.useState(!1),[g,C]=c.useState(),j=c.useId(),m=c.useId(),{refs:f,floatingStyles:w,context:h}=T({placement:k,open:r,onOpenChange:u,whileElementsMounted:P,middleware:[z(p),R({padding:16,apply({availableHeight:n}){H.flushSync(()=>C(n))}})]}),{portalElement:E}=X(),F=A(h),{getReferenceProps:M,getFloatingProps:L}=D([F]);function S(n){n.onClick(),u(!1)}let b=l.MAX_LIST_HEIGHT;return g&&g<l.MAX_LIST_HEIGHT&&(b=g),e.jsxs(e.Fragment,{children:[I({ref:f.setReference,id:j,onClick:()=>{u(!r)},"aria-controls":r?m:void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,...M()}),r&&e.jsx(_,{root:E,children:e.jsx(O,{context:h,children:e.jsx(V,{ref:f.setFloating,id:m,$padding:x,style:w,"data-testid":$,...L(),children:e.jsx(q,{children:e.jsx("div",{style:{maxHeight:b},children:e.jsx(N,{children:e.jsx(B,{...y,children:e.jsx(U,{items:o,children:n=>e.jsx(i,{onAction:()=>{S(n)},"data-testid":`${$}-item-${n.id}`,children:e.jsx(J,{children:v(n)})})})})})})})})})})]})}export{so as M};
