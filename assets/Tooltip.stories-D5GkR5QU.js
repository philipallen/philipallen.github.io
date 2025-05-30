import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as P}from"./index-CcKhGcwW.js";import{b as A,a as g}from"./index-CssHJ6ns.js";import{u as O,T as h,a as y,b as T}from"./TooltipTrigger-BTZCWnoM.js";import{a as f,u as m,b as a}from"./index-COZsQx0K.js";import{I as w,d as _}from"./index-Cng6hRot.js";import{L as S}from"./Link-Cu9Dfk3e.js";const l=f.button`
  ${({$isControlled:e,$variant:n})=>{const{tokens:o}=m(),{iconButton:s}=o;return[a`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${s.padding[n]};
      `,e&&a`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,F=f.div`
  ${({$variant:e})=>{const{tokens:n}=m(),{iconButton:o}=n;return a`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding[e]};
      border-radius: ${o.inner.radius[e]};
      background: ${o.inner.backgroundColor[e].base};

      ${l}:focus-visible && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,L=f(w)`
  ${({$isControlled:e,$isOpen:n,$variant:o})=>{const{tokens:s}=m(),{iconButton:i,tooltipIconButton:r}=s;return[a`
        width: ${i.inner.icon.width[o]};
        height: ${i.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${r.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${r.icon.secondaryColor.base};
        }
      `,!e&&a`
          ${l}:hover &&,
          ${l}:focus-visible && {
            display: none;
          }
        `,!n&&a`
          ${l}:hover && {
            & [data-primary-color] {
              color: ${r.icon.primaryColor.hover};
            }

            & [data-secondary-color] {
              color: ${r.icon.secondaryColor.hover};
            }
          }
        `,n&&a`
          display: none;
        `]}}
`,D=f(_)`
  ${({$isControlled:e,$isOpen:n,$variant:o})=>{const{tokens:s}=m(),{iconButton:i,tooltipIconButton:r}=s;return[a`
        display: none;
        width: ${i.inner.icon.width[o]};
        height: ${i.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${r.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${r.iconFilled.secondaryColor.base};
        }
      `,!e&&a`
          ${l}:hover &&,
          ${l}:focus-visible && {
            display: block;
          }
        `,n&&a`
          display: block;
        `,e&&n&&a`
          ${l}:hover && {
            & [data-primary-color] {
              color: ${r.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,b=P.forwardRef((e,n)=>{const{variant:o=A.DEFAULT_VARIANT,testID:s="tooltip-icon-button",...i}=e,{open:r,isControlled:u}=O();return t.jsx(l,{...i,ref:n,"aria-expanded":u?r:void 0,$isControlled:u,$variant:o,type:"button","data-testid":s,children:t.jsxs(F,{$variant:o,children:[t.jsx(L,{$isControlled:u,$isOpen:r,$variant:o}),t.jsx(D,{$isControlled:u,$isOpen:r,$variant:o})]})})});b.displayName="TooltipIconButton";function E({children:e}){return t.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:e})}const N={title:"Components/Data Display/Tooltip",component:h,decorators:[e=>t.jsx(E,{children:t.jsx(e,{})})],render:function(n){return t.jsxs(h,{...n,children:[t.jsx(y,{children:t.jsx(b,{"aria-label":"Button label"})}),t.jsx(T,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:g.POSITIONS},maxWidth:{control:{type:"number"}}},args:{offset:g.DEFAULT_OFFSET,placement:g.DEFAULT_POSITION}},c={},d={render:function(n){const[o,s]=P.useState(!1);function i(){s(!o)}return t.jsxs(h,{...n,open:o,onOpenChange:s,children:[t.jsx(y,{children:t.jsx(b,{onClick:i,"aria-label":"Button label"})}),t.jsx(T,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})}},p={render:function(n){return t.jsxs(h,{...n,offset:16,children:[t.jsx(y,{children:t.jsx(S,{component:"button",isDashed:!0,children:"Interest rate"})}),t.jsx(T,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})}};var $,x,I;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var C,j,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    function handleClick() {
      setOpen(!open);
    }
    return <Tooltip {...args} open={open} onOpenChange={setOpen}>
        <TooltipTrigger>
          <TooltipIconButton onClick={handleClick} aria-label="Button label" />
        </TooltipTrigger>

        <TooltipContent>
          APR stands for Annual Percentage Rate. It's the rate you will have to
          pay for the chosen loan amount.
        </TooltipContent>
      </Tooltip>;
  }
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var R,k,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Tooltip {...args} offset={16}>
        <TooltipTrigger>
          <Link component="button" isDashed>
            Interest rate
          </Link>
        </TooltipTrigger>

        <TooltipContent>
          APR stands for Annual Percentage Rate. It's the rate you will have to
          pay for the chosen loan amount.
        </TooltipContent>
      </Tooltip>;
  }
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const U=["Basic","Popup","LinkTrigger"],J=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,LinkTrigger:p,Popup:d,__namedExportsOrder:U,default:N},Symbol.toStringTag,{value:"Module"}));export{c as B,p as L,d as P,J as T};
