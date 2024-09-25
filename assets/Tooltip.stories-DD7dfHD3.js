import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{h as d}from"./index-DgS1v8YF.js";import{b as W,c as L,o as M,f as z,s as G,d as H,e as V,g as J,h as K,i as Q,j as X,k as Y,u as A,a as Z,F as oo}from"./floating-ui.react-BdiZBOmZ.js";import{a as f,u as g,b as i}from"./index-D3TaQYms.js";import{I as eo,c as to,C as no}from"./index-BFYe-czB.js";import{u as ro}from"./OverlayContext-0eIRNS6h.js";import{T as S}from"./Typography-squJd_7u.js";function so({initialOpen:t=!1,placement:o=d.DEFAULT_POSITION,offset:e=d.DEFAULT_OFFSET,open:r,onOpenChange:s}={}){const[a,y]=l.useState(t),h=!!s,u=r??a,m=s??y,$=l.useRef(null),c=W({placement:o,open:u,onOpenChange:m,whileElementsMounted:L,middleware:[M(e),z({padding:d.FLIP_PADDING}),G({padding:d.SHIFT_PADDING}),H({element:$,padding:d.ARROW_PADDING})]}),w=V(c.context,{handleClose:J(),enabled:r===void 0}),R=K(c.context,{enabled:r===void 0}),q=Q(c.context),U=X(c.context,{role:"tooltip"}),j=Y([w,R,q,U]);return l.useMemo(()=>({open:u,setOpen:m,isControlled:h,arrowRef:$,floatingData:c,interactionsData:j}),[u,m,h,$,c,j])}const E=l.createContext(null),B=()=>{const t=l.useContext(E);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function x(t){const{children:o,...e}=t,r=so(e);return n.jsx(E.Provider,{value:r,children:o})}x.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"CoreTooltip.Position"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const C=l.forwardRef((t,o)=>{const{children:e,...r}=t,{open:s,floatingData:a,interactionsData:y}=B(),h=e.ref,u=A([a.refs.setReference,h,o]);return l.isValidElement(e)?l.cloneElement(e,y.getReferenceProps({ref:u,...r,...e.props,"data-state":s?"open":"closed"})):null});C.displayName="TooltipTrigger";C.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const p=f.button`
  ${({$isControlled:t})=>{const{tokens:o}=g(),{iconButton:e}=o;return[i`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${e.padding.default};
      `,t&&i`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,io=f.div`
  ${()=>{const{tokens:t}=g(),{iconButton:o}=t;return i`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding.default};
      border-radius: ${o.inner.radius.default};
      background: ${o.inner.backgroundColor.default.base};

      ${p}:focus-visible && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,ao=f(eo)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=g(),{iconButton:r,tooltipIconButton:s}=e;return[i`
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${s.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${s.icon.secondaryColor.base};
        }
      `,!t&&i`
          ${p}:hover &&,
          ${p}:focus-visible && {
            display: none;
          }
        `,!o&&i`
          ${p}:hover && {
            & [data-primary-color] {
              color: ${s.icon.primaryColor.hover};
            }
          }
        `,o&&i`
          display: none;
        `]}}
`,lo=f(to)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=g(),{iconButton:r,tooltipIconButton:s}=e;return[i`
        display: none;
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${s.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${s.iconFilled.secondaryColor.base};
        }
      `,!t&&i`
          ${p}:hover &&,
          ${p}:focus-visible && {
            display: block;
          }
        `,o&&i`
          display: block;
        `,t&&o&&i`
          ${p}:hover && {
            & [data-primary-color] {
              color: ${s.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,I=l.forwardRef((t,o)=>{const{testID:e="tooltip-icon-button",...r}=t,{open:s,isControlled:a}=B();return n.jsx(p,{...r,ref:o,$isControlled:a,"data-testid":e,children:n.jsxs(io,{children:[n.jsx(ao,{$isOpen:s,$isControlled:a}),n.jsx(lo,{$isOpen:s,$isControlled:a})]})})});I.displayName="TooltipIconButton";I.__docgenInfo={description:"",methods:[],displayName:"TooltipIconButton"};const co=f.div`
  ${({$isControlled:t})=>{const{tokens:o}=g(),{tooltip:e}=o;return[i`
        max-width: ${e.maxWidth};
        border-radius: ${e.radius};
        padding-top: ${e.padding.top};
        padding-bottom: ${e.padding.bottom};
        padding-left: ${e.padding.left};
        padding-right: ${e.padding.right.default};
        background: ${e.backgroundColor};
        color: ${e.color};
        z-index: ${e.zIndex};
      `,t&&i`
          padding-right: ${e.padding.right.large};
        `]}}
`,po=f(Z)`
  pointer-events: auto !important;
`,uo=f.button`
  ${()=>{const{tokens:t}=g(),{tooltip:o}=t;return i`
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

      &:hover {
        svg {
          color: ${o.closeButton.icon.color.hover};
          background: ${o.closeButton.icon.backgroundColor.hover};
        }
      }

      &:active {
        svg {
          color: ${o.closeButton.icon.color.active};
          background: ${o.closeButton.icon.backgroundColor.active};
        }
      }

      &:focus-visible {
        svg {
          outline-width: ${o.closeButton.icon.focusRing.width};
          outline-style: ${o.closeButton.icon.focusRing.style};
          outline-color: ${o.closeButton.icon.focusRing.color};
        }
      }
    `}}
`,v=l.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:s}=g(),{tooltip:a}=s,{portalElement:y}=ro(),{open:h,setOpen:u,isControlled:m,arrowRef:$,floatingData:c,interactionsData:w}=B(),R=A([c.refs.setFloating,o]);return h?n.jsx(oo,{root:y,children:n.jsxs(co,{ref:R,style:c.floatingStyles,...w.getFloatingProps(r),$isControlled:m,children:[n.jsx(po,{ref:$,context:c.context,fill:a.backgroundColor,width:parseInt(a.arrow.width),height:parseInt(a.arrow.height)}),m&&n.jsx(uo,{onClick:()=>u(!1),"aria-label":"Close tooltip",children:n.jsx(no,{})}),e]})}):null});v.displayName="TooltipContent";v.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};function N({children:t}){return n.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:t})}const fo={title:"Components/Data Display/Tooltip",component:x,render:function(o){return n.jsx(N,{children:n.jsxs(x,{...o,children:[n.jsx(C,{children:n.jsx(I,{"aria-label":"Button label"})}),n.jsx(v,{children:n.jsx(S,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:d.POSITIONS}},args:{offset:d.DEFAULT_OFFSET,placement:d.DEFAULT_POSITION}},b={},T={render:function(o){const[e,r]=l.useState(!1);return n.jsx(N,{children:n.jsxs(x,{...o,open:e,onOpenChange:r,children:[n.jsx(C,{children:n.jsx(I,{"aria-label":"Button label",onClick:()=>r(!e)})}),n.jsx(v,{children:n.jsx(S,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var k,P,_;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(_=(P=b.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var O,F,D;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <Wrapper>
        <Tooltip {...args} open={open} onOpenChange={setOpen}>
          <TooltipTrigger>
            <TooltipIconButton aria-label="Button label" onClick={() => setOpen(!open)} />
          </TooltipTrigger>

          <TooltipContent>
            <Typography color="inherit">
              APR stands for Annual Percentage Rate. It's the rate you will have
              to pay for the chosen loan amount.
            </Typography>
          </TooltipContent>
        </Tooltip>
      </Wrapper>;
  }
}`,...(D=(F=T.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const go=["Basic","Popup"],Io=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Popup:T,__namedExportsOrder:go,default:fo},Symbol.toStringTag,{value:"Module"}));export{b as B,T as P,Io as T};
