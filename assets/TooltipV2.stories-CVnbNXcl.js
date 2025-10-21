import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{$ as j}from"./Button-DPtumZN7.js";import{T as t}from"./TooltipV2-DxFf706c.js";import{b as V,I as b}from"./InlineTooltipIconButtonV2-BiNcN6aL.js";import{T as I}from"./Typography-Fd9Ks9lL.js";import{L as R}from"./Link-D12mKWvT.js";function P({children:o}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:o})}const A={title:"Components/Data Display/TooltipV2",component:t,decorators:[o=>e.jsx(P,{children:e.jsx(o,{})})],render:function(r){return e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(V,{"aria-label":"Button label"}),e.jsx(t.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},n={},a={render:function(r){return e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(V,{"aria-label":"Button label"}),e.jsx(t.Content,{maxWidth:500,children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},s={render:function(r){return e.jsxs(I,{variant:"bodyM",children:["Interest rate",e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(b,{typographyVariant:"bodyM","aria-label":"Button label"}),e.jsx(t.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})]})}},i={render:function(r){return e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(R,{component:j,isDashed:!0,children:"Interest rate"}),e.jsx(t.Content,{tooltipProps:{offset:16},children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    return <TooltipV2 {...args}>
        <TooltipV2.Trigger>
          <TooltipIconButtonV2 aria-label="Button label" />

          <TooltipV2.Content maxWidth={500}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipV2.Content>
        </TooltipV2.Trigger>
      </TooltipV2>;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,m,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Typography variant="bodyM">
        Interest rate
        <TooltipV2 {...args}>
          <TooltipV2.Trigger>
            <InlineTooltipIconButtonV2 typographyVariant="bodyM" aria-label="Button label" />

            <TooltipV2.Content>
              APR stands for Annual Percentage Rate. It's the rate you will have
              to pay for the chosen loan amount.
            </TooltipV2.Content>
          </TooltipV2.Trigger>
        </TooltipV2>
      </Typography>;
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var f,y,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render(args) {
    return <TooltipV2 {...args}>
        <TooltipV2.Trigger>
          <Link component={Button} isDashed>
            Interest rate
          </Link>

          <TooltipV2.Content tooltipProps={{
          offset: 16
        }}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipV2.Content>
        </TooltipV2.Trigger>
      </TooltipV2>;
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const B=["Basic","MaxWidth","Inline","LinkTrigger"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Inline:s,LinkTrigger:i,MaxWidth:a,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{n as B,s as I,i as L,a as M,_ as T};
