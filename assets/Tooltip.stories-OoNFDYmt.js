import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as I}from"./index-DH5ua8nC.js";import{b as l}from"./index-BrtwDHqb.js";import{T as s,a as i,b as R,c as p}from"./TooltipTrigger-CwjP98Rl.js";import{L as O}from"./Link-BS-Euur6.js";function c({children:a}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:a})}const C={title:"Components/Data Display/Tooltip",component:s,render:function(n){return e.jsx(c,{children:e.jsxs(s,{...n,children:[e.jsx(i,{children:e.jsx(R,{"aria-label":"Button label"})}),e.jsx(p,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:l.POSITIONS},maxWidth:{control:{type:"number"}}},args:{offset:l.DEFAULT_OFFSET,placement:l.DEFAULT_POSITION}},t={},o={render:function(n){const[u,d]=I.useState(!1);function b(){d(!u)}return e.jsx(c,{children:e.jsxs(s,{...n,open:u,onOpenChange:d,children:[e.jsx(i,{children:e.jsx(R,{onClick:b,"aria-label":"Button label"})}),e.jsx(p,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},r={render:function(n){return e.jsx(c,{children:e.jsxs(s,{...n,offset:16,children:[e.jsx(i,{children:e.jsx(O,{component:"button",isDashed:!0,children:"Interest rate"})}),e.jsx(p,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var h,m,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var T,g,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    function handleClick() {
      setOpen(!open);
    }
    return <Wrapper>
        <Tooltip {...args} open={open} onOpenChange={setOpen}>
          <TooltipTrigger>
            <TooltipIconButton onClick={handleClick} aria-label="Button label" />
          </TooltipTrigger>

          <TooltipContent>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipContent>
        </Tooltip>
      </Wrapper>;
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var j,y,P;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Wrapper>
        <Tooltip {...args} offset={16}>
          <TooltipTrigger>
            <Link component="button" isDashed>
              Interest rate
            </Link>
          </TooltipTrigger>

          <TooltipContent>
            APR stands for Annual Percentage Rate. It's the rate you will have
            to pay for the chosen loan amount.
          </TooltipContent>
        </Tooltip>
      </Wrapper>;
  }
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const A=["Basic","Popup","LinkTrigger"],v=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,LinkTrigger:r,Popup:o,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{t as B,r as L,o as P,v as T};
