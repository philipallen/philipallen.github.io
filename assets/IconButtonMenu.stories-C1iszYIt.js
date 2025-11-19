import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a as R}from"./index-Cf3axooF.js";import{I as b}from"./index-HXCmP3Qs.js";import{l as P,m as u}from"./index-jIEI4ct_.js";import{a as S,u as I,b as p,p as O}from"./index-5VPm3mt9.js";import{M as m,D as k}from"./Menu-DgWi9-av.js";import{T as E}from"./Typography-CWLzUOZE.js";import{I as C}from"./IconButton-BS-v3xrO.js";const N=S.div`
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
`,w=S.div`
  ${()=>{const{tokens:o}=I(),{iconButtonMenu:e}=o;return[p`
        display: grid;
        place-items: center;
        height: ${O(e.menu.item.content.iconWrapper.height)};

        svg {
          display: block;
          width: ${e.menu.item.content.icon.width};
          height: ${e.menu.item.content.icon.height};
        }
      `]}}
`,F={default:-4,default16:-4,default20:-4,default32:-2,contained:4},h={default:8,default16:8,default20:8,default32:6,contained:0};function t(o){const{variant:e=b.DEFAULT_VARIANT,popoverProps:i,testID:s="icon-button-menu",...l}=o;return n.jsx(m,{...l,popoverProps:{...i,offset:F[e],style:{marginLeft:h[e],marginRight:h[e]}},testID:s})}t.Trigger=m.Trigger;t.Content=m.Content;t.Item=function(e){const{icon:i,children:s,...l}=e,{tokens:_}=I(),{iconButtonMenu:g}=_;return n.jsx(m.Item,{...l,children:$=>n.jsxs(N,{$withIcon:i!==void 0,children:[i&&n.jsx(w,{"aria-hidden":"true",children:i}),n.jsx(E,{color:"inherit",variant:g.menu.item.content.text.typography.variant,fontFamily:g.menu.item.content.text.typography.fontFamily,children:typeof s=="function"?s($):s})]})})};function r(){R("Item clicked")()}const L={title:"Components/Navigation/IconButtonMenu",component:t,render:function(e){return n.jsxs(t,{...e,children:[n.jsx(t.Trigger,{children:n.jsx(C,{variant:e.variant,"aria-label":"Menu label",children:n.jsx(P,{})})}),n.jsxs(t.Content,{children:[n.jsx(t.Item,{onAction:r,children:"Item 01"}),n.jsx(t.Item,{onAction:r,children:"Item 02"}),n.jsx(t.Item,{onAction:r,children:"Item 03"}),n.jsx(t.Item,{onAction:r,children:"Item 04"}),n.jsx(t.Item,{onAction:r,children:"Item 05"}),n.jsx(t.Item,{onAction:r,children:"Item 06"}),n.jsx(t.Item,{onAction:r,children:"Item 07"}),n.jsx(t.Item,{onAction:r,children:"Item 08"}),n.jsx(t.Item,{onAction:r,children:"Item 09"})]})]})},argTypes:{variant:{control:{type:"select"},options:b.VARIANTS},popoverProps:{control:{disable:!0}}},args:{popoverProps:{containerPadding:0,placement:k}}},a={decorators:[o=>n.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:n.jsx(o,{})})]},c={decorators:[o=>n.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:n.jsx(o,{})})],render:function(e){return n.jsxs(t,{...e,children:[n.jsx(t.Trigger,{children:n.jsx(C,{variant:e.variant,"aria-label":"Menu label",children:n.jsx(P,{})})}),n.jsxs(t.Content,{children:[n.jsx(t.Item,{icon:n.jsx(u,{}),onAction:r,children:"Item 01"}),n.jsx(t.Item,{icon:n.jsx(u,{}),onAction:r,children:"Item 02"}),n.jsx(t.Item,{icon:n.jsx(u,{}),onAction:r,children:"Item 03"})]})]})}},d={decorators:[o=>n.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:n.jsx(o,{})})],args:{popoverProps:{containerPadding:0,placement:"bottom start"}}};var f,j,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var M,B,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const V=["Basic","WithIcons","PlacementLeft"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,PlacementLeft:d,WithIcons:c,__namedExportsOrder:V,default:L},Symbol.toStringTag,{value:"Module"}));export{a as B,K as I,d as P,c as W};
