import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as d}from"./index-DH5ua8nC.js";import{r as F}from"./index-D9uilScg.js";import{c as L,j as A,l as H,F as _,a as D,d as R,o as q,m as O}from"./floating-ui.react-Bc49jMsR.js";import{$ as X}from"./Collection-C4H3d3-i.js";import{M as l}from"./index-1pQtRAy1.js";import{a as i,u as a,b as s}from"./index-CzvSJj6w.js";import{$ as W,a as J}from"./Menu-BdTmE47p.js";import{u as z}from"./OverlayContext-0eIRNS6h.js";import{S as U}from"./ScrollShadowContainer-5PBttQuR.js";const G=i.div`
  ${({$padding:t})=>{const{tokens:e}=a(),{menu:p}=e;return s`
      padding: calc(1px * ${t});
      z-index: ${p.zIndex};
    `}}
`,N=i.div`
  ${()=>{const{tokens:t}=a(),{menu:e}=t;return s`
      display: grid;
      overflow: hidden;
      border-radius: ${e.radius};
      border-width: ${e.stroke.width};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color};
      box-shadow: 0px 2px 2px ${e.shadow.outer.color};
    `}}
`,V=i(W)`
  ${()=>{const{tokens:t}=a(),{menu:e}=t;return s`
      display: grid;
      gap: ${e.separator.width};
      background: ${e.separator.color};
      max-width: ${e.maxWidth};
    `}}
`,m=i(J)`
  ${()=>{const{tokens:t}=a(),{menu:e}=t;return[s`
        display: grid;
        min-height: ${e.option.minHeight};
        padding: ${e.option.padding};
        background: ${e.option.backgroundColor.base};
        cursor: pointer;
        outline: none;
      `]}}
`,B=i.div`
  ${()=>{const{tokens:t}=a(),{menu:e}=t;return[s`
        display: grid;
        align-items: center;
        color: ${e.option.inner.color.base};
        padding-top: ${e.option.inner.padding.top};
        padding-left: ${e.option.inner.padding.left};
        padding-right: ${e.option.inner.padding.right};
        padding-bottom: ${e.option.inner.padding.bottom};
        border-radius: ${e.option.inner.radius};
        background: ${e.option.inner.backgroundColor.base};
        outline-width: ${e.option.inner.stroke.width};
        outline-style: ${e.option.inner.stroke.style};
        outline-color: ${e.option.inner.stroke.color.base};
        outline-offset: ${e.option.inner.stroke.offset};
        overflow: hidden;

        ${m}[data-hovered="true"] &&,
        ${m}[data-focus-visible="true"] && {
          background: ${e.option.inner.backgroundColor.hover};
          outline-color: ${e.option.inner.stroke.color.hover};
        }
      `]}}
`;function K(t){const{items:e,offset:p=l.DEFAULT_OFFSET,padding:b,placement:k=l.DEFAULT_PLACEMENT,renderListItemContent:y,children:v,testID:f="menu",...C}=t,[r,c]=d.useState(!1),[u,w]=d.useState(),T=d.useId(),g=d.useId(),{refs:h,floatingStyles:I,context:$}=L({placement:k,open:r,onOpenChange:c,whileElementsMounted:R,middleware:[q(p),O({padding:16,apply({availableHeight:o}){F.flushSync(()=>w(o))}})]}),{portalElement:E}=z(),j=A($),{getReferenceProps:M,getFloatingProps:P}=H([j]);function S(o){o.onClick(),c(!1)}let x=l.MAX_LIST_HEIGHT;return u&&u<l.MAX_LIST_HEIGHT&&(x=u),n.jsxs(n.Fragment,{children:[v({ref:h.setReference,id:T,onClick:()=>{c(!r)},"aria-controls":r?g:void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,...M()}),r&&n.jsx(_,{root:E,children:n.jsx(D,{context:$,children:n.jsx(G,{ref:h.setFloating,id:g,$padding:b,style:I,"data-testid":f,...P(),children:n.jsx(N,{children:n.jsx("div",{style:{maxHeight:x},children:n.jsx(U,{children:n.jsx(V,{...C,children:n.jsx(X,{items:e,children:o=>n.jsx(m,{onAction:()=>{S(o)},"data-testid":`${f}-item-${o.id}`,children:n.jsx(B,{children:y(o)})})})})})})})})})})]})}K.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},padding:{required:!1,tsType:{name:"number"},description:""},placement:{required:!1,tsType:{name:"CoreMenu.Placement"},description:""},renderListItemContent:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"JSX.Element"}}},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(referenceProps: ReferenceProps) => JSX.Element",signature:{arguments:[{type:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"ref" | "id" | "onClick" | "aria-controls" | "aria-haspopup" | "aria-expanded"',elements:[{name:"literal",value:'"ref"'},{name:"literal",value:'"id"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"aria-controls"'},{name:"literal",value:'"aria-haspopup"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Pick<
  ComponentPropsWithRef<"button">,
  "ref" | "id" | "onClick" | "aria-controls" | "aria-haspopup" | "aria-expanded"
>`},name:"referenceProps"}],return:{name:"JSX.Element"}}},description:""}}};export{K as M};
