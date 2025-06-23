import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{$ as x}from"./Button-DPtumZN7.js";import{T as o}from"./TooltipPopoverV2-BxyDT_bL.js";import{b as y,I as V}from"./InlineTooltipIconButtonV2-D83uos4r.js";import{T as j}from"./Typography-DgKGWs_f.js";import{L as b}from"./Link-C6PUhSDV.js";function I({children:r}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:r})}const R={title:"Components/Data Display/TooltipPopoverV2",component:o,decorators:[r=>e.jsx(I,{children:e.jsx(r,{})})],render:function(t){return e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(y,{"aria-label":"Button label"}),e.jsx(o.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},n={},a={render:function(t){return e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(y,{"aria-label":"Button label"}),e.jsx(o.Content,{maxWidth:500,children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},s={render:function(t){return e.jsxs(j,{variant:"bodyM",children:["Interest rate",e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(V,{typographyVariant:"bodyM","aria-label":"Button label"}),e.jsx(o.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})]})}},i={render:function(t){return e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(b,{component:x,isDashed:!0,children:"Interest rate"}),e.jsx(o.Content,{popoverProps:{offset:16},children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    return <TooltipPopoverV2 {...args}>
        <TooltipPopoverV2.Trigger>
          <TooltipIconButtonV2 aria-label="Button label" />

          <TooltipPopoverV2.Content maxWidth={500}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipPopoverV2.Content>
        </TooltipPopoverV2.Trigger>
      </TooltipPopoverV2>;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,m,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Typography variant="bodyM">
        Interest rate
        <TooltipPopoverV2 {...args}>
          <TooltipPopoverV2.Trigger>
            <InlineTooltipIconButtonV2 typographyVariant="bodyM" aria-label="Button label" />

            <TooltipPopoverV2.Content>
              APR stands for Annual Percentage Rate. It's the rate you will have
              to pay for the chosen loan amount.
            </TooltipPopoverV2.Content>
          </TooltipPopoverV2.Trigger>
        </TooltipPopoverV2>
      </Typography>;
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var P,f,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args) {
    return <TooltipPopoverV2 {...args}>
        <TooltipPopoverV2.Trigger>
          <Link component={Button} isDashed>
            Interest rate
          </Link>

          <TooltipPopoverV2.Content popoverProps={{
          offset: 16
        }}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipPopoverV2.Content>
        </TooltipPopoverV2.Trigger>
      </TooltipPopoverV2>;
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const A=["Basic","MaxWidth","Inline","LinkTrigger"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Inline:s,LinkTrigger:i,MaxWidth:a,__namedExportsOrder:A,default:R},Symbol.toStringTag,{value:"Module"}));export{n as B,s as I,i as L,a as M,_ as T};
