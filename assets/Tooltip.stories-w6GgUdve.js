import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{$ as A}from"./Button-BTZi05NT.js";import{T as t}from"./Tooltip-K1SlcGO-.js";import{I as P,c as R}from"./InlineTooltipIconButton-Dfa_dq-z.js";import{T as B}from"./Typography-G_YOndja.js";import{L as v}from"./Link-BhQAOrgP.js";function C({children:r}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:r})}const W={title:"Components/Data Display/Tooltip",component:t,decorators:[r=>e.jsx(C,{children:e.jsx(r,{})})],render:function(o){const{children:c,...l}=o;return e.jsx(t,{...l,children:e.jsxs(t.Trigger,{children:[e.jsx(R,{"aria-label":"Button label"}),e.jsx(t.Content,{children:c})]})})},args:{children:`APR stands for Annual Percentage Rate. It's the rate you will have
  to pay for the chosen loan amount.`}},n={},a={render:function(o){const{children:c,maxWidth:l,...b}=o;return e.jsx(t,{...b,children:e.jsxs(t.Trigger,{children:[e.jsx(R,{"aria-label":"Button label"}),e.jsx(t.Content,{maxWidth:l,children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})},args:{maxWidth:500}},s={render:function(o){return e.jsxs(B,{variant:"bodyM",children:["Interest rate",e.jsx(t,{...o,children:e.jsxs(t.Trigger,{children:[e.jsx(P,{typographyVariant:"bodyM","aria-label":"Button label"}),e.jsx(t.Content,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})]})}},i={render:function(o){return e.jsx(t,{...o,children:e.jsxs(t.Trigger,{children:[e.jsx(v,{component:A,isDashed:!0,children:"Interest rate"}),e.jsx(t.Content,{tooltipProps:{offset:16},children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,g,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      children,
      maxWidth,
      ...restArgs
    } = args;
    return <Tooltip {...restArgs}>
        <Tooltip.Trigger>
          <TooltipIconButton aria-label="Button label" />

          <Tooltip.Content maxWidth={maxWidth}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </Tooltip.Content>
        </Tooltip.Trigger>
      </Tooltip>;
  },
  args: {
    maxWidth: 500
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var T,f,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Typography variant="bodyM">
        Interest rate
        <Tooltip {...args}>
          <Tooltip.Trigger>
            <InlineTooltipIconButton typographyVariant="bodyM" aria-label="Button label" />

            <Tooltip.Content>
              APR stands for Annual Percentage Rate. It's the rate you will have
              to pay for the chosen loan amount.
            </Tooltip.Content>
          </Tooltip.Trigger>
        </Tooltip>
      </Typography>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,j,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Tooltip {...args}>
        <Tooltip.Trigger>
          <Link component={Button} isDashed>
            Interest rate
          </Link>

          <Tooltip.Content tooltipProps={{
          offset: 16
        }}>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </Tooltip.Content>
        </Tooltip.Trigger>
      </Tooltip>;
  }
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const w=["Basic","MaxWidth","Inline","LinkTrigger"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Inline:s,LinkTrigger:i,MaxWidth:a,__namedExportsOrder:w,default:W},Symbol.toStringTag,{value:"Module"}));export{n as B,s as I,i as L,a as M,$ as T};
