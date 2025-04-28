import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as c}from"./index-KmaxkdDD.js";import{r as H}from"./index-Ccpfuzew.js";import{c as T,j as A,l as D,F as _,a as O,d as P,o as z,m as R}from"./floating-ui.react-CUiYS8XL.js";import{$ as U}from"./Collection-BJBX1VXz.js";import{M as l}from"./index-BDdHs4nI.js";import{a as s,u as a,b as d}from"./index-BMLrhZi-.js";import{$ as G,a as W}from"./Menu-B4rPCnWw.js";import{u as X}from"./OverlayContext-CQkNAI0D.js";import{S as N}from"./ScrollShadowContainer-4UgAKf34.js";const V=s.div`
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
`;function so(t){const{items:o,offset:p=l.DEFAULT_OFFSET,padding:x,placement:k=l.DEFAULT_PLACEMENT,renderListItemContent:v,children:I,testID:g="menu",...j}=t,[r,u]=c.useState(!1),[$,y]=c.useState(),C=c.useId(),m=c.useId(),{refs:f,floatingStyles:w,context:h}=T({placement:k,open:r,onOpenChange:u,whileElementsMounted:P,middleware:[z(p),R({padding:16,apply({availableHeight:n}){H.flushSync(()=>y(n))}})]}),{portalElement:E}=X(),F=A(h),{getReferenceProps:M,getFloatingProps:L}=D([F]);function S(n){n.onClick(),u(!1)}let b=l.MAX_LIST_HEIGHT;return $&&$<l.MAX_LIST_HEIGHT&&(b=$),e.jsxs(e.Fragment,{children:[I({ref:f.setReference,id:C,onClick:()=>{u(!r)},"aria-controls":r?m:void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,...M()}),r&&e.jsx(_,{root:E,children:e.jsx(O,{context:h,children:e.jsx(V,{ref:f.setFloating,id:m,$padding:x,style:w,"data-testid":g,...L(),children:e.jsx(q,{children:e.jsx("div",{style:{maxHeight:b},children:e.jsx(N,{children:e.jsx(B,{...j,children:e.jsx(U,{items:o,children:n=>e.jsx(i,{onAction:()=>{S(n)},"data-testid":`${g}-item-${n.id}`,children:e.jsx(J,{children:v(n)})})})})})})})})})})]})}export{so as M};
