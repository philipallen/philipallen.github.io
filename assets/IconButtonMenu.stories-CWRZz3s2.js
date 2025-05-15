import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{I as d,m as u,M as S}from"./index-BDdHs4nI.js";import{q as M,r as c}from"./index-By1nkff0.js";import{a as A,u as l,b as m,p as B}from"./index-BMLrhZi-.js";import{M as b}from"./Menu-Cfq1qPs6.js";import{T as $}from"./Typography-Bt5r6amG.js";import{I as E}from"./IconButton-BCxVbG4_.js";const N=A.div`
  ${({$withIcon:e})=>{const{tokens:n}=l(),{iconButtonMenu:o}=n;return[m`
        display: grid;
        gap: ${o.menu.item.content.gap};
        padding-top: ${o.menu.item.content.padding.top};
        padding-left: ${o.menu.item.content.padding.left};
        padding-right: ${o.menu.item.content.padding.right};
        padding-bottom: ${o.menu.item.content.padding.bottom};
        overflow-wrap: anywhere;
      `,e&&m`
          grid-template-columns: auto 1fr;
        `]}}
`,D=A.div`
  ${()=>{const{tokens:e}=l(),{iconButtonMenu:n}=e;return[m`
        display: grid;
        place-items: center;
        height: ${B(n.menu.item.content.iconWrapper.height)};

        svg {
          display: block;
          width: ${n.menu.item.content.icon.width};
          height: ${n.menu.item.content.icon.height};
        }
      `]}}
`;function g(e){const{variant:n=d.DEFAULT_VARIANT,testID:o="icon-button-menu",...T}=e,{tokens:_}=l(),{iconButtonMenu:p}=_;return t.jsx(b,{...T,offset:u.VARIANT_OFFSET[n],padding:u.VARIANT_PADDING[n],renderListItemContent:a=>t.jsxs(N,{$withIcon:a.icon!==void 0,children:[a.icon&&t.jsx(D,{"aria-hidden":"true",children:a.icon}),t.jsx($,{color:"inherit",variant:p.menu.item.content.text.typography.variant,fontFamily:p.menu.item.content.text.typography.fontFamily,children:a.text})]}),testID:o})}const F={title:"Components/Navigation/IconButtonMenu",component:g,render:function(n){return t.jsx(g,{...n,children:o=>t.jsx(E,{variant:n.variant,"aria-label":"Burger menu",...o,children:t.jsx(M,{})})})},argTypes:{variant:{control:{type:"select"},options:d.VARIANTS},placement:{control:{disable:!0}}},args:{variant:d.DEFAULT_VARIANT,placement:S.DEFAULT_PLACEMENT,items:[{id:"item-01",text:"Item 01",onClick:()=>{}},{id:"item-02",text:"Item 02",onClick:()=>{}},{id:"item-03",text:"Item 03",onClick:()=>{}},{id:"item-04",text:"Item 04",onClick:()=>{}},{id:"item-05",text:"Item 05",onClick:()=>{}},{id:"item-06",text:"Item 06",onClick:()=>{}},{id:"item-07",text:"Item 07",onClick:()=>{}},{id:"item-08",text:"Item 08",onClick:()=>{}},{id:"item-09",text:"Item 09",onClick:()=>{}}]}},i={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(e,{})})]},r={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(e,{})})],args:{items:[{id:"item-01",icon:t.jsx(c,{}),text:"Item 01",onClick:()=>{}},{id:"item-02",icon:t.jsx(c,{}),text:"Item 02",onClick:()=>{}},{id:"item-03",icon:t.jsx(c,{}),text:"Item 03",onClick:()=>{}}]}},s={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:t.jsx(e,{})})],args:{placement:"bottom-start"}};var I,h,x;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>]
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,f,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
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
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,v,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "start",
    height: 360
  }}>
        <Story />
      </div>],
  args: {
    placement: "bottom-start"
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const L=["Basic","WithIcons","PlacementLeft"],z=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,PlacementLeft:s,WithIcons:r,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{i as B,z as I,s as P,r as W};
