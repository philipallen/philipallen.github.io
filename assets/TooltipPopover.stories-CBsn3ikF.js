import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{$ as I}from"./Button-BTZi05NT.js";import{T as o}from"./TooltipPopover-86MHtmRj.js";import{I as j,c as A}from"./InlineTooltipIconButton-Dfa_dq-z.js";import{T as b}from"./Typography-G_YOndja.js";import{L as w}from"./Link-BhQAOrgP.js";function B({children:t}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:t})}const C={title:"Components/Data Display/TooltipPopover",component:o,decorators:[t=>e.jsx(B,{children:e.jsx(t,{})})],render:function(r){const{children:i,...p}=r;return e.jsx(o,{...p,children:e.jsxs(o.Trigger,{children:[e.jsx(A,{"aria-label":"Button label"}),e.jsx(o.Content,{children:i})]})})},args:{children:`APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. 
  APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount. `}},n={},a={render:function(r){const{children:i,maxWidth:p,...x}=r;return e.jsx(o,{...x,children:e.jsxs(o.Trigger,{children:[e.jsx(A,{"aria-label":"Button label"}),e.jsx(o.Content,{maxWidth:p,children:i})]})})},args:{maxWidth:500}},s={render:function(r){return e.jsxs(b,{variant:"bodyM",children:["Interest rate",e.jsx(o,{...r,children:e.jsxs(o.Trigger,{children:[e.jsx(j,{typographyVariant:"bodyM","aria-label":"Button label"}),e.jsx(o.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})]})}},l={render:function(r){return e.jsx(o,{...r,children:e.jsxs(o.Trigger,{children:[e.jsx(w,{component:I,isDashed:!0,children:"Interest rate"}),e.jsx(o.Content,{popoverProps:{offset:16},children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var c,h,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var d,g,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      children,
      maxWidth,
      ...restArgs
    } = args;
    return <TooltipPopover {...restArgs}>
        <TooltipPopover.Trigger>
          <TooltipIconButton aria-label="Button label" />

          <TooltipPopover.Content maxWidth={maxWidth}>
            {children}
          </TooltipPopover.Content>
        </TooltipPopover.Trigger>
      </TooltipPopover>;
  },
  args: {
    maxWidth: 500
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,P,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var T,v,R;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const W=["Basic","MaxWidth","Inline","LinkTrigger"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Inline:s,LinkTrigger:l,MaxWidth:a,__namedExportsOrder:W,default:C},Symbol.toStringTag,{value:"Module"}));export{n as B,s as I,l as L,a as M,$ as T};
