import{j as t}from"./jsx-runtime-DQ32znRX.js";import{M as u,I as h,i as T}from"./index-DKJt7waT.js";import{g as X,h as f}from"./index-Bkh50RYL.js";import{r as x}from"./index-DH5ua8nC.js";import{b as z,i as H,k as J,l as G,c as K,o as Q}from"./floating-ui.react-C2UAdtMt.js";import{a as i,u as a,b as s}from"./index-CtBUti8q.js";import{S as Y}from"./ScrollShadowContainer-F3QY9P2s.js";import{T as Z}from"./Typography-v4_88_aK.js";import{I as ee}from"./IconButton-CQCemVia.js";const te=i.div`
  ${({$padding:n})=>{const{tokens:e}=a(),{menu:o}=e;return s`
      padding: calc(1px * ${n});
      z-index: ${o.zIndex};
    `}}
`,ne=i.div`
  ${()=>{const{tokens:n}=a(),{menu:e}=n;return s`
      display: grid;
      overflow: hidden;
      border-radius: ${e.radius};
      border-width: ${e.stroke.width};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color};
      box-shadow: 0px 2px 2px ${e.shadow.outer.color};
    `}}
`,oe=i.div`
  max-height: calc(1px * ${u.MAX_LIST_HEIGHT});
`,re=i.ul`
  ${()=>{const{tokens:n}=a(),{menu:e}=n;return s`
      all: unset;
      display: grid;
      gap: ${e.separator.width};
      background: ${e.separator.color};
      max-width: ${e.maxWidth};
    `}}
`,I=i.li`
  ${()=>{const{tokens:n}=a(),{menu:e}=n;return[s`
        all: unset;
        display: grid;
        padding: ${e.option.padding};
        background: ${e.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,ie=i.div`
  ${()=>{const{tokens:n}=a(),{menu:e}=n;return[s`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${e.option.inner.gap};
        color: ${e.option.inner.color.base};
        padding-top: ${e.option.inner.paddingTop};
        padding-bottom: ${e.option.inner.paddingBottom};
        padding-left: ${e.option.inner.paddingRight};
        padding-right: ${e.option.inner.paddingRight};
        border-radius: ${e.option.inner.radius};
        background: ${e.option.inner.backgroundColor.base};
        outline-width: ${e.option.inner.stroke.width};
        outline-style: ${e.option.inner.stroke.style};
        outline-color: ${e.option.inner.stroke.color.base};
        outline-offset: ${e.option.inner.stroke.offset};

        ${I}:hover &&,
        ${I}:focus-visible && {
          background: ${e.option.inner.backgroundColor.hover};
          outline-color: ${e.option.inner.stroke.color.hover};
        }
      `]}}
`,ae=i.div`
  ${()=>{const{tokens:n}=a(),{menu:e}=n;return[s`
        svg {
          display: block;
          width: ${e.option.inner.icon.width};
          height: ${e.option.inner.icon.height};
        }
      `]}}
`;function D(n){const{items:e,offset:o=u.DEFAULT_OFFSET,padding:g,placement:R=u.DEFAULT_PLACEMENT,children:B,testID:k="menu"}=n,[d,m]=x.useState(!1),{tokens:N}=a(),{menu:v}=N,q=x.useId(),C=x.useId(),{refs:b,floatingStyles:W,context:$}=z({placement:R,open:d,onOpenChange:m,whileElementsMounted:K,middleware:[Q(o)]}),O=H($),{getReferenceProps:V,getFloatingProps:U}=J([O]);return t.jsxs(t.Fragment,{children:[B({ref:b.setReference,id:q,onClick:()=>{m(!d)},"aria-controls":d?C:void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,...V()}),d&&t.jsx(G,{context:$,children:t.jsx(te,{ref:b.setFloating,id:C,$padding:g,style:W,"data-testid":k,...U(),children:t.jsx(ne,{children:t.jsx(oe,{children:t.jsx(Y,{children:t.jsx(re,{role:"menu",children:e.map(r=>t.jsx(I,{role:"menuitem",tabIndex:0,onClick:()=>{r.onClick(),m(!1)},onKeyDown:j=>{["Space","Enter"].includes(j.code)&&(j.preventDefault(),r.onClick(),m(!1))},"data-testid":`${k}-item`,children:t.jsxs(ie,{children:[r.icon&&t.jsx(ae,{"aria-hidden":"true",children:r.icon}),t.jsx(Z,{color:"inherit",title:r.text,variant:v.option.inner.text.typography.variant,fontFamily:v.option.inner.text.typography.fontFamily,noWrap:!0,children:r.text})]})},r.id))})})})})})})]})}D.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"MenuItem[]"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},padding:{required:!1,tsType:{name:"number"},description:""},placement:{required:!1,tsType:{name:"CoreMenu.Placement"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(referenceProps: ReferenceProps) => JSX.Element",signature:{arguments:[{type:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"ref" | "id" | "onClick" | "aria-controls" | "aria-haspopup" | "aria-expanded"',elements:[{name:"literal",value:'"ref"'},{name:"literal",value:'"id"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"aria-controls"'},{name:"literal",value:'"aria-haspopup"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Pick<
  ComponentPropsWithRef<"button">,
  "ref" | "id" | "onClick" | "aria-controls" | "aria-haspopup" | "aria-expanded"
>`},name:"referenceProps"}],return:{name:"JSX.Element"}}},description:""}}};function y(n){const{variant:e=h.DEFAULT_VARIANT,testID:o="icon-button-menu",...g}=n;return t.jsx(D,{...g,offset:T.VARIANT_OFFSET[e],padding:T.VARIANT_PADDING[e],testID:o})}y.__docgenInfo={description:"",methods:[],displayName:"IconButtonMenu",props:{variant:{required:!1,tsType:{name:"CoreIconButton.Variant"},description:""}}};const se={title:"Components/Navigation/IconButtonMenu",component:y,decorators:[n=>t.jsx("div",{style:{display:"grid",height:350},children:t.jsx(n,{})})],render:function(e){return t.jsx(y,{...e,children:o=>t.jsx("div",{children:t.jsx(ee,{variant:e.variant,"aria-label":"Burger menu",...o,children:t.jsx(X,{})})})})},argTypes:{variant:{control:{type:"select"},options:h.VARIANTS},placement:{control:{disable:!0}},items:{control:{disable:!0}}},args:{variant:h.DEFAULT_VARIANT,placement:u.DEFAULT_PLACEMENT,items:[{id:"item-01",text:"Item 01",onClick:()=>{}},{id:"item-02",text:"Item 02",onClick:()=>{}},{id:"item-03",text:"Item 03",onClick:()=>{}},{id:"item-04",text:"Item 04",onClick:()=>{}},{id:"item-05",text:"Item 05",onClick:()=>{}},{id:"item-06",text:"Item 06",onClick:()=>{}},{id:"item-07",text:"Item 07",onClick:()=>{}},{id:"item-08",text:"Item 08",onClick:()=>{}},{id:"item-09",text:"Item 09",onClick:()=>{}}]}},c={decorators:[n=>t.jsx("div",{style:{display:"grid",justifyItems:"right"},children:t.jsx(n,{})})]},l={decorators:[n=>t.jsx("div",{style:{display:"grid",justifyItems:"right"},children:t.jsx(n,{})})],args:{items:[{id:"item-01",icon:t.jsx(f,{}),text:"Item 01",onClick:()=>{}},{id:"item-02",icon:t.jsx(f,{}),text:"Item 02",onClick:()=>{}},{id:"item-03",icon:t.jsx(f,{}),text:"Item 03",onClick:()=>{}}]}},p={argTypes:{placement:{control:{disable:!0}}},args:{placement:"bottom-start"}};var A,S,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    justifyItems: "right"
  }}>
        <Story />
      </div>]
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,E,M;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    justifyItems: "right"
  }}>
        <Story />
      </div>],
  args: {
    items: [{
      id: "item-01",
      icon: <AddCardIcon />,
      text: "Item 01",
      onClick: () => {}
    }, {
      id: "item-02",
      icon: <AddCardIcon />,
      text: "Item 02",
      onClick: () => {}
    }, {
      id: "item-03",
      icon: <AddCardIcon />,
      text: "Item 03",
      onClick: () => {}
    }]
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,F,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    placement: {
      control: {
        disable: true
      }
    }
  },
  args: {
    placement: "bottom-start"
  }
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const de=["Basic","WithIcons","PlacementLeft"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,PlacementLeft:p,WithIcons:l,__namedExportsOrder:de,default:se},Symbol.toStringTag,{value:"Module"}));export{c as B,Ie as I,p as P,l as W};
