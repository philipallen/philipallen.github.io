import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as y}from"./index-DH5ua8nC.js";import{c as a}from"./index-C3m9D1_L.js";import{T as s,a as T,b as f,c as g}from"./TooltipTrigger-B4AXIaMu.js";function x({children:n}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:n})}const O={title:"Components/Data Display/Tooltip",component:s,render:function(r){return e.jsx(x,{children:e.jsxs(s,{...r,children:[e.jsx(T,{children:e.jsx(f,{"aria-label":"Button label"})}),e.jsx(g,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:a.POSITIONS},maxWidth:{control:{type:"number"}}},args:{offset:a.DEFAULT_OFFSET,placement:a.DEFAULT_POSITION}},t={},o={render:function(r){const[l,p]=y.useState(!1);function j(){p(!l)}return e.jsx(x,{children:e.jsxs(s,{...r,open:l,onOpenChange:p,children:[e.jsx(T,{children:e.jsx(f,{onClick:j,"aria-label":"Button label"})}),e.jsx(g,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const b=["Basic","Popup"],R=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Popup:o,__namedExportsOrder:b,default:O},Symbol.toStringTag,{value:"Module"}));export{t as B,o as P,R as T};
