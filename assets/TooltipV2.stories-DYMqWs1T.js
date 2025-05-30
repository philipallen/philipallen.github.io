import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{$ as B}from"./Button-DPtumZN7.js";import{b as $}from"./Tooltip-DVGpamPK.js";import{u as D}from"./index-COZsQx0K.js";import{b as L,D as w,a as M,A as E,C as S,T as b,I as _}from"./InlineTooltipIconButtonV2-D1UsDYLr.js";import{u as k}from"./OverlayContext-DE6V0lcf.js";import{T as I}from"./Typography-cxmeyP_c.js";import{a as W}from"./Dialog-D7L8ikGJ.js";import{L as F}from"./Link-Cu9Dfk3e.js";function t({children:o}){return o}t.Trigger=function(r){return e.jsx($,{delay:0,closeDelay:100,...r})};t.Content=function(r){const{tooltipProps:R,maxWidth:A,children:P,testID:C="tooltip"}=r,{tokens:v}=D(),{tooltip:l}=v,{portalElement:c}=k();return e.jsx(W,{getContainer:c&&(()=>c),children:e.jsxs(L,{offset:w,placement:M,...R,"data-testid":C,children:[e.jsx(E,{}),e.jsx(S,{$maxWidth:A,children:e.jsx(I,{color:l.color,variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:P})})]})})};function O({children:o}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:o})}const U={title:"Components/Data Display/TooltipV2",component:t,decorators:[o=>e.jsx(O,{children:e.jsx(o,{})})],render:function(r){return e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(b,{"aria-label":"Button label"}),e.jsx(t.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},n={},a={render:function(r){return e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(b,{"aria-label":"Button label"}),e.jsx(t.Content,{maxWidth:500,children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},s={render:function(r){return e.jsxs(I,{variant:"bodyM",children:["Interest rate",e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(_,{typographyVariant:"bodyM","aria-label":"Button label"}),e.jsx(t.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})]})}},i={render:function(r){return e.jsx(t,{...r,children:e.jsxs(t.Trigger,{children:[e.jsx(F,{component:B,isDashed:!0,children:"Interest rate"}),e.jsx(t.Content,{tooltipProps:{offset:16},children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,g,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var T,f,y;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,j,V;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const z=["Basic","MaxWidth","Inline","LinkTrigger"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Inline:s,LinkTrigger:i,MaxWidth:a,__namedExportsOrder:z,default:U},Symbol.toStringTag,{value:"Module"}));export{n as B,s as I,i as L,a as M,Z as T};
