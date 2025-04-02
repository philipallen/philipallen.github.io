import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{I as d,m as u,M as S}from"./index-DYe-GrfV.js";import{q as M,r as c}from"./index-BwV_lsCf.js";import{a as A,u as l,b as m,p as B}from"./index-ByEiyUmp.js";import{M as b}from"./Menu-Ikzm_syj.js";import{T as $}from"./Typography-C-GpEjPp.js";import{I as E}from"./IconButton-Dt5IJhSf.js";const N=A.div`
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
`;function g(e){const{variant:n=d.DEFAULT_VARIANT,testID:o="icon-button-menu",...T}=e,{tokens:_}=l(),{iconButtonMenu:p}=_;return t.jsx(b,{...T,offset:u.VARIANT_OFFSET[n],padding:u.VARIANT_PADDING[n],renderListItemContent:i=>t.jsxs(N,{$withIcon:i.icon!==void 0,children:[i.icon&&t.jsx(D,{"aria-hidden":"true",children:i.icon}),t.jsx($,{color:"inherit",title:i.text,variant:p.menu.item.content.text.typography.variant,fontFamily:p.menu.item.content.text.typography.fontFamily,children:i.text})]}),testID:o})}const F={title:"Components/Navigation/IconButtonMenu",component:g,render:function(n){return t.jsx(g,{...n,children:o=>t.jsx(E,{variant:n.variant,"aria-label":"Burger menu",...o,children:t.jsx(M,{})})})},argTypes:{variant:{control:{type:"select"},options:d.VARIANTS},placement:{control:{disable:!0}}},args:{variant:d.DEFAULT_VARIANT,placement:S.DEFAULT_PLACEMENT,items:[{id:"item-01",text:"Item 01",onClick:()=>{}},{id:"item-02",text:"Item 02",onClick:()=>{}},{id:"item-03",text:"Item 03",onClick:()=>{}},{id:"item-04",text:"Item 04",onClick:()=>{}},{id:"item-05",text:"Item 05",onClick:()=>{}},{id:"item-06",text:"Item 06",onClick:()=>{}},{id:"item-07",text:"Item 07",onClick:()=>{}},{id:"item-08",text:"Item 08",onClick:()=>{}},{id:"item-09",text:"Item 09",onClick:()=>{}}]}},r={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(e,{})})]},s={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(e,{})})],args:{items:[{id:"item-01",icon:t.jsx(c,{}),text:"Item 01",onClick:()=>{}},{id:"item-02",icon:t.jsx(c,{}),text:"Item 02",onClick:()=>{}},{id:"item-03",icon:t.jsx(c,{}),text:"Item 03",onClick:()=>{}}]}},a={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:t.jsx(e,{})})],args:{placement:"bottom-start"}};var I,x,h;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>]
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,f,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,v,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const L=["Basic","WithIcons","PlacementLeft"],U=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,PlacementLeft:a,WithIcons:s,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{r as B,U as I,a as P,s as W};
