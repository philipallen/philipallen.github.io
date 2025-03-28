import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as A}from"./index-KmaxkdDD.js";import{a as O,h as g}from"./index-DYe-GrfV.js";import{u as w,T as u,a as y,b as T}from"./TooltipTrigger-9BknpwOm.js";import{a as h,u as f,b as a}from"./index-ByEiyUmp.js";import{I as _,d as S}from"./index-BwV_lsCf.js";import{L as F}from"./Link-BUS7dyou.js";const l=h.button`
  ${({$isControlled:t,$variant:n})=>{const{tokens:o}=f(),{iconButton:s}=o;return[a`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${s.padding[n]};
      `,t&&a`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,L=h.div`
  ${({$variant:t})=>{const{tokens:n}=f(),{iconButton:o}=n;return a`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding[t]};
      border-radius: ${o.inner.radius[t]};
      background: ${o.inner.backgroundColor[t].base};

      ${l}:focus-visible && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,D=h(_)`
  ${({$isControlled:t,$isOpen:n,$variant:o})=>{const{tokens:s}=f(),{iconButton:i,tooltipIconButton:r}=s;return[a`
        width: ${i.inner.icon.width[o]};
        height: ${i.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${r.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${r.icon.secondaryColor.base};
        }
      `,!t&&a`
          ${l}:hover &&,
          ${l}:focus-visible && {
            display: none;
          }
        `,!n&&a`
          ${l}:hover && {
            & [data-primary-color] {
              color: ${r.icon.primaryColor.hover};
            }
          }
        `,n&&a`
          display: none;
        `]}}
`,E=h(S)`
  ${({$isControlled:t,$isOpen:n,$variant:o})=>{const{tokens:s}=f(),{iconButton:i,tooltipIconButton:r}=s;return[a`
        display: none;
        width: ${i.inner.icon.width[o]};
        height: ${i.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${r.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${r.iconFilled.secondaryColor.base};
        }
      `,!t&&a`
          ${l}:hover &&,
          ${l}:focus-visible && {
            display: block;
          }
        `,n&&a`
          display: block;
        `,t&&n&&a`
          ${l}:hover && {
            & [data-primary-color] {
              color: ${r.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,b=A.forwardRef((t,n)=>{const{variant:o=O.DEFAULT_VARIANT,testID:s="tooltip-icon-button",...i}=t,{open:r,isControlled:m}=w();return e.jsx(l,{...i,ref:n,"aria-expanded":r?"true":void 0,$isControlled:m,$variant:o,type:"button","data-testid":s,children:e.jsxs(L,{$variant:o,children:[e.jsx(D,{$isControlled:m,$isOpen:r,$variant:o}),e.jsx(E,{$isControlled:m,$isOpen:r,$variant:o})]})})});b.displayName="TooltipIconButton";function $({children:t}){return e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:t})}const W={title:"Components/Data Display/Tooltip",component:u,render:function(n){return e.jsx($,{children:e.jsxs(u,{...n,children:[e.jsx(y,{children:e.jsx(b,{"aria-label":"Button label"})}),e.jsx(T,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:g.POSITIONS},maxWidth:{control:{type:"number"}}},args:{offset:g.DEFAULT_OFFSET,placement:g.DEFAULT_POSITION}},c={},p={render:function(n){const[o,s]=A.useState(!1);function i(){s(!o)}return e.jsx($,{children:e.jsxs(u,{...n,open:o,onOpenChange:s,children:[e.jsx(y,{children:e.jsx(b,{onClick:i,"aria-label":"Button label"})}),e.jsx(T,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}},d={render:function(n){return e.jsx($,{children:e.jsxs(u,{...n,offset:16,children:[e.jsx(y,{children:e.jsx(F,{component:"button",isDashed:!0,children:"Interest rate"})}),e.jsx(T,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})})}};var x,I,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,R,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(R=p.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var k,B,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const N=["Basic","Popup","LinkTrigger"],J=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,LinkTrigger:d,Popup:p,__namedExportsOrder:N,default:W},Symbol.toStringTag,{value:"Module"}));export{c as B,d as L,p as P,J as T};
