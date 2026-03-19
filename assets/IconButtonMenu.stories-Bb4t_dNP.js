import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{a as k}from"./index-B-lxVbXh.js";import{I as N}from"./index-eS8l-D1x.js";import{l as $,m as I}from"./index-B_KGh3jf.js";import{u as y,l as h,d as R,p as E}from"./index-C1QKVHyt.js";import{M as g,D as w}from"./Menu-WWN8FuWi.js";import{T as F}from"./Typography-BK_ZjFCe.js";import{I as D}from"./IconButton-52dBxF5j.js";const L=R.div`
  ${({$withIcon:o})=>{const{tokens:n}=y(),{iconButtonMenu:r}=n;return[h`
        display: grid;
        gap: ${r.menu.item.content.gap};
        padding-top: ${r.menu.item.content.padding.top};
        padding-left: ${r.menu.item.content.padding.left};
        padding-right: ${r.menu.item.content.padding.right};
        padding-bottom: ${r.menu.item.content.padding.bottom};
        overflow-wrap: anywhere;
      `,o&&h`
          grid-template-columns: auto 1fr;
        `]}}
`,V=R.div`
  ${()=>{const{tokens:o}=y(),{iconButtonMenu:n}=o;return[h`
        display: grid;
        place-items: center;
        height: ${E(n.menu.item.content.iconWrapper.height)};

        svg {
          display: block;
          width: ${n.menu.item.content.icon.width};
          height: ${n.menu.item.content.icon.height};
        }
      `]}}
`,W={default:-4,default16:-4,default20:-4,default32:-2,contained:4},f={default:8,default16:8,default20:8,default32:6,contained:0};function e(o){const{variant:n=N.DEFAULT_VARIANT,popoverProps:r,testID:i="icon-button-menu",...s}=o;return t.jsx(g,{...s,popoverProps:{...r,offset:W[n],style:{marginLeft:f[n],marginRight:f[n]}},testID:i})}e.Trigger=g.Trigger;e.Content=g.Content;e.Item=function(n){const{icon:r,children:i,...s}=n,{tokens:a}=y(),{iconButtonMenu:u}=a;return t.jsx(g.Item,{...s,children:O=>t.jsxs(L,{$withIcon:r!==void 0,children:[r&&t.jsx(V,{"aria-hidden":"true",children:r}),t.jsx(F,{color:"inherit",variant:u.menu.item.content.text.typography.variant,fontFamily:u.menu.item.content.text.typography.fontFamily,children:typeof i=="function"?i(O):i})]})})};e.displayName="IconButtonMenu";e.Trigger.displayName="IconButtonMenu.Trigger";e.Content.displayName="IconButtonMenu.Content";e.Item.displayName="IconButtonMenu.Item";function p(){k("Item clicked")()}const K={title:"Components/Navigation/IconButtonMenu",component:e,render:function(n){const{disabledKeys:r=[],...i}=n,s=[{id:"item-01"},{id:"item-02"},{id:"item-03"},{id:"item-04"},{id:"item-05"},{id:"item-06"},{id:"item-07"},{id:"item-08"},{id:"item-09"}];return t.jsxs(e,{...n,children:[t.jsx(e.Trigger,{children:t.jsx(D,{variant:n.variant,"aria-label":"Menu label",children:t.jsx($,{})})}),t.jsx(e.Content,{children:s.map(a=>{const u=r?r.includes(a.id):!1;return t.jsxs(e.Item,{isDisabled:u,onAction:p,children:["Item ",a.id.split("-")[1]]},a.id)})})]})},argTypes:{variant:{control:{type:"select"},options:N.VARIANTS},popoverProps:{control:{disable:!0}}},args:{popoverProps:{containerPadding:0,placement:w}}},c={decorators:[o=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(o,{})})]},d={decorators:[o=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:t.jsx(o,{})})],render:function(n){return t.jsxs(e,{...n,children:[t.jsx(e.Trigger,{children:t.jsx(D,{variant:n.variant,"aria-label":"Menu label",children:t.jsx($,{})})}),t.jsxs(e.Content,{children:[t.jsx(e.Item,{icon:t.jsx(I,{}),onAction:p,children:"Item 01"}),t.jsx(e.Item,{icon:t.jsx(I,{}),onAction:p,children:"Item 02"}),t.jsx(e.Item,{icon:t.jsx(I,{}),onAction:p,children:"Item 03"})]})]})}},m={decorators:[o=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:t.jsx(o,{})})],args:{popoverProps:{containerPadding:0,placement:"bottom start"}}},l={decorators:[o=>t.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:t.jsx(o,{})})],args:{popoverProps:{containerPadding:0,placement:"bottom start"},disabledKeys:["item-02","item-04"]}};var j,v,x;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>]
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var M,B,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>],
  render: function Render(args) {
    return <IconButtonMenu {...args}>
        <IconButtonMenu.Trigger>
          <IconButton variant={args.variant} aria-label="Menu label">
            <MoreVerticalIcon />
          </IconButton>
        </IconButtonMenu.Trigger>

        <IconButtonMenu.Content>
          <IconButtonMenu.Item icon={<AddCardIcon />} onAction={handleOnAction}>
            Item 01
          </IconButtonMenu.Item>
          <IconButtonMenu.Item icon={<AddCardIcon />} onAction={handleOnAction}>
            Item 02
          </IconButtonMenu.Item>
          <IconButtonMenu.Item icon={<AddCardIcon />} onAction={handleOnAction}>
            Item 03
          </IconButtonMenu.Item>
        </IconButtonMenu.Content>
      </IconButtonMenu>;
  }
}`,...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var b,T,P;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "start",
    height: 360
  }}>
        <Story />
      </div>],
  args: {
    popoverProps: {
      containerPadding: 0,
      placement: "bottom start"
    }
  }
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var S,C,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "start",
    height: 360
  }}>
        <Story />
      </div>],
  args: {
    popoverProps: {
      containerPadding: 0,
      placement: "bottom start"
    },
    disabledKeys: ["item-02", "item-04"]
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const z=["Basic","WithIcons","PlacementLeft","DisabledItems"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,DisabledItems:l,PlacementLeft:m,WithIcons:d,__namedExportsOrder:z,default:K},Symbol.toStringTag,{value:"Module"}));export{c as B,l as D,Z as I,m as P,d as W};
