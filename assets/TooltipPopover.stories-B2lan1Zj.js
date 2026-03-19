import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{$ as x}from"./Button-T8IefSzn.js";import{T as o}from"./TooltipPopover-BEG4305A.js";import{b as y,I as j}from"./InlineTooltipIconButton-CWSg2rTo.js";import{T as b}from"./Typography-BK_ZjFCe.js";import{L as I}from"./Link-CX-dsSMp.js";function R({children:r}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:r})}const A={title:"Components/Data Display/TooltipPopover",component:o,decorators:[r=>e.jsx(R,{children:e.jsx(r,{})})],render:function(t){return e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(y,{"aria-label":"Button label"}),e.jsx(o.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},n={},a={render:function(t){return e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(y,{"aria-label":"Button label"}),e.jsx(o.Content,{maxWidth:500,children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},s={render:function(t){return e.jsxs(b,{variant:"bodyM",children:["Interest rate",e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(j,{typographyVariant:"bodyM","aria-label":"Button label"}),e.jsx(o.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})]})}},i={render:function(t){return e.jsx(o,{...t,children:e.jsxs(o.Trigger,{children:[e.jsx(I,{component:x,isDashed:!0,children:"Interest rate"}),e.jsx(o.Content,{popoverProps:{offset:16},children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    return <TooltipPopover {...args}>
        <TooltipPopover.Trigger>
          <TooltipIconButton aria-label="Button label" />

          <TooltipPopover.Content maxWidth={500}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipPopover.Content>
        </TooltipPopover.Trigger>
      </TooltipPopover>;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,m,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Typography variant="bodyM">
        Interest rate
        <TooltipPopover {...args}>
          <TooltipPopover.Trigger>
            <InlineTooltipIconButton typographyVariant="bodyM" aria-label="Button label" />

            <TooltipPopover.Content>
              APR stands for Annual Percentage Rate. It's the rate you will have
              to pay for the chosen loan amount.
            </TooltipPopover.Content>
          </TooltipPopover.Trigger>
        </TooltipPopover>
      </Typography>;
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var P,f,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args) {
    return <TooltipPopover {...args}>
        <TooltipPopover.Trigger>
          <Link component={Button} isDashed>
            Interest rate
          </Link>

          <TooltipPopover.Content popoverProps={{
          offset: 16
        }}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipPopover.Content>
        </TooltipPopover.Trigger>
      </TooltipPopover>;
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const B=["Basic","MaxWidth","Inline","LinkTrigger"],k=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Inline:s,LinkTrigger:i,MaxWidth:a,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{n as B,s as I,i as L,a as M,k as T};
