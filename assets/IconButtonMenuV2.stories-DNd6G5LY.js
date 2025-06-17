import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a as $}from"./index-Cf3axooF.js";import{I as T}from"./index-CmedeESG.js";import{q as b,r as l}from"./index-Al28d7yc.js";import{a as P,u as I,b as p,p as R}from"./index-D1OOBdzz.js";import{M as m,D as O}from"./MenuV2-CSsAzcSo.js";import{T as k}from"./Typography-DU98AY51.js";import{I as S}from"./IconButtonV2-0C_KITBC.js";const E=P.div`
  ${({$withIcon:o})=>{const{tokens:e}=I(),{iconButtonMenu:i}=e;return[p`
        display: grid;
        gap: ${i.menu.item.content.gap};
        padding-top: ${i.menu.item.content.padding.top};
        padding-left: ${i.menu.item.content.padding.left};
        padding-right: ${i.menu.item.content.padding.right};
        padding-bottom: ${i.menu.item.content.padding.bottom};
        overflow-wrap: anywhere;
      `,o&&p`
          grid-template-columns: auto 1fr;
        `]}}
`,N=P.div`
  ${()=>{const{tokens:o}=I(),{iconButtonMenu:e}=o;return[p`
        display: grid;
        place-items: center;
        height: ${R(e.menu.item.content.iconWrapper.height)};

        svg {
          display: block;
          width: ${e.menu.item.content.icon.width};
          height: ${e.menu.item.content.icon.height};
        }
      `]}}
`,w={default:-4,default16:-4,default20:-4,default32:-2,contained:4},h={default:8,default16:8,default20:8,default32:6,contained:0};function t(o){const{variant:e=T.DEFAULT_VARIANT,popoverProps:i,testID:s="icon-button-menu",...u}=o;return n.jsx(m,{...u,popoverProps:{...i,offset:w[e],style:{marginLeft:h[e],marginRight:h[e]}},testID:s})}t.Trigger=m.Trigger;t.Content=m.Content;t.Item=function(e){const{icon:i,children:s,...u}=e,{tokens:C}=I(),{iconButtonMenu:g}=C;return n.jsx(m.Item,{...u,children:_=>n.jsxs(E,{$withIcon:i!==void 0,children:[i&&n.jsx(N,{"aria-hidden":"true",children:i}),n.jsx(k,{color:"inherit",variant:g.menu.item.content.text.typography.variant,fontFamily:g.menu.item.content.text.typography.fontFamily,children:typeof s=="function"?s(_):s})]})})};function r(){$("Item clicked")()}const F={title:"Components/Navigation/IconButtonMenuV2",component:t,render:function(e){return n.jsxs(t,{...e,children:[n.jsx(t.Trigger,{children:n.jsx(S,{variant:e.variant,"aria-label":"Menu label",children:n.jsx(b,{})})}),n.jsxs(t.Content,{children:[n.jsx(t.Item,{onAction:r,children:"Item 01"}),n.jsx(t.Item,{onAction:r,children:"Item 02"}),n.jsx(t.Item,{onAction:r,children:"Item 03"}),n.jsx(t.Item,{onAction:r,children:"Item 04"}),n.jsx(t.Item,{onAction:r,children:"Item 05"}),n.jsx(t.Item,{onAction:r,children:"Item 06"}),n.jsx(t.Item,{onAction:r,children:"Item 07"}),n.jsx(t.Item,{onAction:r,children:"Item 08"}),n.jsx(t.Item,{onAction:r,children:"Item 09"})]})]})},argTypes:{variant:{control:{type:"select"},options:T.VARIANTS},popoverProps:{control:{disable:!0}}},args:{popoverProps:{containerPadding:0,placement:O}}},a={decorators:[o=>n.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:n.jsx(o,{})})]},c={decorators:[o=>n.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:n.jsx(o,{})})],render:function(e){return n.jsxs(t,{...e,children:[n.jsx(t.Trigger,{children:n.jsx(S,{variant:e.variant,"aria-label":"Menu label",children:n.jsx(b,{})})}),n.jsxs(t.Content,{children:[n.jsx(t.Item,{icon:n.jsx(l,{}),onAction:r,children:"Item 01"}),n.jsx(t.Item,{icon:n.jsx(l,{}),onAction:r,children:"Item 02"}),n.jsx(t.Item,{icon:n.jsx(l,{}),onAction:r,children:"Item 03"})]})]})}},d={decorators:[o=>n.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:n.jsx(o,{})})],args:{popoverProps:{containerPadding:0,placement:"bottom start"}}};var f,j,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>]
}`,...(x=(j=a.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var y,A,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>],
  render: function Render(args) {
    return <IconButtonMenuV2 {...args}>
        <IconButtonMenuV2.Trigger>
          <IconButtonV2 variant={args.variant} aria-label="Menu label">
            <MoreVerticalIcon />
          </IconButtonV2>
        </IconButtonMenuV2.Trigger>

        <IconButtonMenuV2.Content>
          <IconButtonMenuV2.Item icon={<AddCardIcon />} onAction={handleOnAction}>
            Item 01
          </IconButtonMenuV2.Item>
          <IconButtonMenuV2.Item icon={<AddCardIcon />} onAction={handleOnAction}>
            Item 02
          </IconButtonMenuV2.Item>
          <IconButtonMenuV2.Item icon={<AddCardIcon />} onAction={handleOnAction}>
            Item 03
          </IconButtonMenuV2.Item>
        </IconButtonMenuV2.Content>
      </IconButtonMenuV2>;
  }
}`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var M,B,V;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const L=["Basic","WithIcons","PlacementLeft"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,PlacementLeft:d,WithIcons:c,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{a as B,K as I,d as P,c as W};
