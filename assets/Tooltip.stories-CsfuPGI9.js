import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as c}from"./index-CcKhGcwW.js";import{a as u,b as G}from"./index-WLaP1tkh.js";import{c as H,d as V,o as q,f as J,h as K,i as Q,j as X,k as Y,l as Z,e as oo,m as to,g as eo,u as U,b as no,F as ro,a as so}from"./floating-ui.react-DD7SKzjW.js";import{a as h,u as f,b as i}from"./index-BHlkTKmU.js";import{C as ao,I as io,d as lo}from"./index-hDdRnVWP.js";import{$ as co}from"./Button-DPtumZN7.js";import{u as po}from"./OverlayContext-DE6V0lcf.js";import{T as uo}from"./Typography-BeL7-j70.js";import{L as go}from"./Link-CvLns040.js";function ho({initialOpen:e=!1,placement:o=u.DEFAULT_POSITION,offset:t=u.DEFAULT_OFFSET,maxWidth:n,open:a,onOpenChange:s}={}){const[d,$]=c.useState(e),m=!!s,p=a??d,y=s??$,b=c.useRef(null),l=H({placement:o,open:p,onOpenChange:y,whileElementsMounted:V,middleware:[q(t),J({padding:u.FLIP_PADDING}),K({padding:u.SHIFT_PADDING}),Q({element:b,padding:u.ARROW_PADDING})]}),w=X(l.context,{handleClose:Y(),enabled:a===void 0}),k=Z(l.context,{enabled:a===void 0}),W=oo(l.context),z=to(l.context,{role:"tooltip"}),P=eo([w,k,W,z]);return c.useMemo(()=>({open:p,setOpen:y,isControlled:m,maxWidth:n,arrowRef:b,floatingData:l,interactionsData:P}),[p,y,m,n,b,l,P])}const M=c.createContext(null),B=()=>{const e=c.useContext(M);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function v(e){const{children:o,...t}=e,n=ho(t);return r.jsx(M.Provider,{value:n,children:o})}const I=c.forwardRef((e,o)=>{const{children:t,...n}=e,{open:a,floatingData:s,interactionsData:d}=B(),$=t.ref,m=U([s.refs.setReference,$,o]);return c.isValidElement(t)?c.cloneElement(t,d.getReferenceProps({ref:m,...n,...t.props,"data-state":a?"open":"closed"})):null});I.displayName="TooltipTrigger";const fo=h.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:t}=f(),{tooltip:n}=t;return[i`
        max-width: ${o?`${o}px`:n.maxWidth};
        border-radius: ${n.radius};
        padding-top: ${n.padding.top};
        padding-bottom: ${n.padding.bottom};
        padding-left: ${n.padding.left};
        padding-right: ${n.padding.right.default};
        background: ${n.backgroundColor};
        z-index: ${n.zIndex};
      `,e&&i`
          padding-right: ${n.padding.right.large};
        `]}}
`,mo=h(no)`
  path {
    pointer-events: auto;
  }
`,$o=h(co)`
  ${()=>{const{tokens:e}=f(),{tooltip:o}=e;return i`
      all: unset;
      position: absolute;
      top: 0;
      right: 0;
      display: grid;
      place-items: center;
      width: ${o.closeButton.width};
      height: ${o.closeButton.height};
      cursor: pointer;

      svg {
        display: block;
        width: ${o.closeButton.icon.width};
        height: ${o.closeButton.icon.height};
        color: ${o.closeButton.icon.color.base};
        background: ${o.closeButton.icon.backgroundColor.base};
        border-radius: ${o.closeButton.icon.radius};
      }

      &[data-hovered] {
        svg {
          color: ${o.closeButton.icon.color.hover};
          background: ${o.closeButton.icon.backgroundColor.hover};
        }
      }

      &[data-pressed] {
        svg {
          color: ${o.closeButton.icon.color.active};
          background: ${o.closeButton.icon.backgroundColor.active};
        }
      }

      &[data-focus-visible] {
        svg {
          outline-width: ${o.closeButton.icon.focusRing.width};
          outline-style: ${o.closeButton.icon.focusRing.style};
          outline-color: ${o.closeButton.icon.focusRing.color};
        }
      }
    `}}
`,R=c.forwardRef((e,o)=>{const{children:t,...n}=e,{tokens:a}=f(),{tooltip:s}=a,{portalElement:d}=po(),{open:$,setOpen:m,isControlled:p,maxWidth:y,arrowRef:b,floatingData:l,interactionsData:w}=B(),k=U([l.refs.setFloating,o]);return $?r.jsx(ro,{root:d,children:r.jsx(so,{context:l.context,disabled:!p,children:r.jsxs(fo,{ref:k,style:l.floatingStyles,...w.getFloatingProps(n),$isControlled:p,$maxWidth:y,role:p?"dialog":"tooltip",children:[r.jsx(mo,{ref:b,context:l.context,fill:s.backgroundColor,width:parseInt(s.arrow.width),height:parseInt(s.arrow.height)}),r.jsx(uo,{color:s.color,variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:t}),p&&r.jsx($o,{onPress:()=>m(!1),"aria-label":"Close tooltip",children:r.jsx(ao,{})})]})})}):null});R.displayName="TooltipContent";const g=h.button`
  ${({$isControlled:e,$variant:o})=>{const{tokens:t}=f(),{iconButton:n}=t;return[i`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${n.padding[o]};
      `,e&&i`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,yo=h.div`
  ${({$variant:e})=>{const{tokens:o}=f(),{iconButton:t}=o;return i`
      display: grid;
      place-items: center;
      padding: ${t.inner.padding[e]};
      border-radius: ${t.inner.radius[e]};
      background: ${t.inner.backgroundColor[e].base};

      ${g}:focus-visible && {
        outline-width: ${t.inner.focusRing.width};
        outline-style: ${t.inner.focusRing.style};
        outline-color: ${t.inner.focusRing.color};
        outline-offset: ${t.inner.focusRing.offset.default};
      }
    `}}
`,bo=h(io)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:n}=f(),{iconButton:a,tooltipIconButton:s}=n;return[i`
        width: ${a.inner.icon.width[t]};
        height: ${a.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${s.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${s.icon.secondaryColor.base};
        }
      `,!e&&i`
          ${g}:hover &&,
          ${g}:focus-visible && {
            display: none;
          }
        `,!o&&i`
          ${g}:hover && {
            & [data-primary-color] {
              color: ${s.icon.primaryColor.hover};
            }

            & [data-secondary-color] {
              color: ${s.icon.secondaryColor.hover};
            }
          }
        `,o&&i`
          display: none;
        `]}}
`,xo=h(lo)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:n}=f(),{iconButton:a,tooltipIconButton:s}=n;return[i`
        display: none;
        width: ${a.inner.icon.width[t]};
        height: ${a.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${s.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${s.iconFilled.secondaryColor.base};
        }
      `,!e&&i`
          ${g}:hover &&,
          ${g}:focus-visible && {
            display: block;
          }
        `,o&&i`
          display: block;
        `,e&&o&&i`
          ${g}:hover && {
            & [data-primary-color] {
              color: ${s.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,j=c.forwardRef((e,o)=>{const{variant:t=G.DEFAULT_VARIANT,testID:n="tooltip-icon-button",...a}=e,{open:s,isControlled:d}=B();return r.jsx(g,{...a,ref:o,"aria-expanded":d?s:void 0,$isControlled:d,$variant:t,type:"button","data-testid":n,children:r.jsxs(yo,{$variant:t,children:[r.jsx(bo,{$isControlled:d,$isOpen:s,$variant:t}),r.jsx(xo,{$isControlled:d,$isOpen:s,$variant:t})]})})});j.displayName="TooltipIconButton";function To({children:e}){return r.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:e})}const Co={title:"Components/Data Display/Tooltip",component:v,decorators:[e=>r.jsx(To,{children:r.jsx(e,{})})],render:function(o){return r.jsxs(v,{...o,children:[r.jsx(I,{children:r.jsx(j,{"aria-label":"Button label"})}),r.jsx(R,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:u.POSITIONS},maxWidth:{control:{type:"number"}}},args:{offset:u.DEFAULT_OFFSET,placement:u.DEFAULT_POSITION}},x={},T={render:function(o){const[t,n]=c.useState(!1);function a(){n(!t)}return r.jsxs(v,{...o,open:t,onOpenChange:n,children:[r.jsx(I,{children:r.jsx(j,{onClick:a,"aria-label":"Button label"})}),r.jsx(R,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})}},C={render:function(o){return r.jsxs(v,{...o,offset:16,children:[r.jsx(I,{children:r.jsx(go,{component:"button",isDashed:!0,children:"Interest rate"})}),r.jsx(R,{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})]})}};var F,D,A;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(A=(D=x.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var O,_,S;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(S=(_=T.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var E,L,N;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(L=C.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const vo=["Basic","Popup","LinkTrigger"],Oo=Object.freeze(Object.defineProperty({__proto__:null,Basic:x,LinkTrigger:C,Popup:T,__namedExportsOrder:vo,default:Co},Symbol.toStringTag,{value:"Module"}));export{x as B,C as L,T as P,Oo as T};
