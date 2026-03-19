import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{a as x}from"./index-B-lxVbXh.js";import{D as I,M as s}from"./Menu-WWN8FuWi.js";function P(){x("Item clicked")()}const S={title:"Components/Navigation/Menu",component:s,render:function(j){const{disabledKeys:a=[],...b}=j,v=[{id:"item-01"},{id:"item-02"},{id:"item-03"},{id:"item-04"},{id:"item-05"},{id:"item-06"},{id:"item-07"},{id:"item-08"},{id:"item-09"}];return e.jsxs(s,{...b,children:[e.jsx(s.Trigger,{children:e.jsx("button",{style:{width:48,height:48},"aria-label":"Menu label",children:"Menu"})}),e.jsx(s.Content,{children:v.map(o=>{const f=a?a.includes(o.id):!1;return e.jsx(s.Item,{isDisabled:f,onAction:P,children:e.jsx("div",{style:{width:200,height:40,background:"lime"}})},o.id)})})]})},argTypes:{popoverProps:{control:{disable:!0}}},args:{popoverProps:{containerPadding:0,placement:I}}},r={decorators:[t=>e.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"end",height:360},children:e.jsx(t,{})})]},n={decorators:[t=>e.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:e.jsx(t,{})})],args:{popoverProps:{containerPadding:0,placement:"bottom start"}}},i={decorators:[t=>e.jsx("div",{style:{display:"grid",alignItems:"start",justifyItems:"start",height:360},children:e.jsx(t,{})})],args:{popoverProps:{containerPadding:0,placement:"bottom start"},disabledKeys:["item-02","item-04"]}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    alignItems: "start",
    justifyItems: "end",
    height: 360
  }}>
        <Story />
      </div>]
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const M=["Basic","PlacementLeft","DisabledItems"],E=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,DisabledItems:i,PlacementLeft:n,__namedExportsOrder:M,default:S},Symbol.toStringTag,{value:"Module"}));export{r as B,i as D,E as M,n as P};
