import{j as t}from"./jsx-runtime-DQ32znRX.js";import{I as d,h as g,M as B}from"./index-BrtwDHqb.js";import{i as M,j as c}from"./index-BYwLR37K.js";import{a as A,u as p,b as m,p as S}from"./index-CzvSJj6w.js";import{M as b}from"./Menu-FujS_JP9.js";import{T as $}from"./Typography-RMDmhaRB.js";import{I as N}from"./IconButton-BeRO6QHM.js";const E=A.div`
  ${({$withIcon:e})=>{const{tokens:n}=p(),{iconButtonMenu:o}=n;return[m`
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
  ${()=>{const{tokens:e}=p(),{iconButtonMenu:n}=e;return[m`
        display: grid;
        place-items: center;
        height: ${S(n.menu.item.content.iconWrapper.height)};

        svg {
          display: block;
          width: ${n.menu.item.content.icon.width};
          height: ${n.menu.item.content.icon.height};
        }
      `]}}
`;function l(e){const{variant:n=d.DEFAULT_VARIANT,testID:o="icon-button-menu",..._}=e,{tokens:T}=p(),{iconButtonMenu:u}=T;return t.jsx(b,{..._,offset:g.VARIANT_OFFSET[n],padding:g.VARIANT_PADDING[n],renderListItemContent:i=>t.jsxs(E,{$withIcon:i.icon!==void 0,children:[i.icon&&t.jsx(D,{"aria-hidden":"true",children:i.icon}),t.jsx($,{color:"inherit",title:i.text,variant:u.menu.item.content.text.typography.variant,fontFamily:u.menu.item.content.text.typography.fontFamily,children:i.text})]}),testID:o})}l.__docgenInfo={description:"",methods:[],displayName:"IconButtonMenu",props:{variant:{required:!1,tsType:{name:"CoreIconButton.Variant"},description:""}}};const F={title:"Components/Navigation/IconButtonMenu",component:l,render:function(n){return t.jsx(l,{...n,children:o=>t.jsx(N,{variant:n.variant,"aria-label":"Burger menu",...o,children:t.jsx(M,{})})})},argTypes:{variant:{control:{type:"select"},options:d.VARIANTS},placement:{control:{disable:!0}}},args:{variant:d.DEFAULT_VARIANT,placement:B.DEFAULT_PLACEMENT,items:[{id:"item-01",text:"Item 01",onClick:()=>{}},{id:"item-02",text:"Item 02",onClick:()=>{}},{id:"item-03",text:"Item 03",onClick:()=>{}},{id:"item-04",text:"Item 04",onClick:()=>{}},{id:"item-05",text:"Item 05",onClick:()=>{}},{id:"item-06",text:"Item 06",onClick:()=>{}},{id:"item-07",text:"Item 07",onClick:()=>{}},{id:"item-08",text:"Item 08",onClick:()=>{}},{id:"item-09",text:"Item 09",onClick:()=>{}}]}},r={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(e,{})})]},s={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(e,{})})],args:{items:[{id:"item-01",icon:t.jsx(c,{}),text:"Item 01",onClick:()=>{}},{id:"item-02",icon:t.jsx(c,{}),text:"Item 02",onClick:()=>{}},{id:"item-03",icon:t.jsx(c,{}),text:"Item 03",onClick:()=>{}}]}},a={decorators:[e=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:t.jsx(e,{})})],args:{placement:"bottom-start"}};var I,h,x;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>]
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,f,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
