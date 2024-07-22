import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{e as T}from"./index-DCR-OBjd.js";import{b as W,c as M,s as z,d as L,e as H,f as V,g as G,h as J,o as K,i as Q,j as X,k as Y,u as D,F as Z,a as oo}from"./floating-ui.react-BezaurJz.js";import{a as h,u as f,b as i}from"./index-BW2nVlX_.js";import{I as eo,c as to,C as no}from"./index-ef8Z-xiF.js";import{T as S}from"./Typography-DLg3KiKL.js";function ro({initialOpen:t=!1,placement:o=T.DEFAULT_POSITION,offset:e=T.DEFAULT_OFFSET,open:r,onOpenChange:s}={}){const[a,m]=l.useState(t),g=!!s,c=r??a,y=s??m,u=l.useRef(null),d=W({placement:o,open:c,onOpenChange:y,whileElementsMounted:J,middleware:[K(e),Q({padding:5}),X({padding:5}),Y({element:u})]}),w=M(d.context,{handleClose:z(),enabled:r===void 0}),A=L(d.context,{enabled:r===void 0}),q=H(d.context),U=V(d.context,{role:"tooltip"}),R=G([w,A,q,U]);return l.useMemo(()=>({open:c,setOpen:y,isControlled:g,arrowRef:u,floatingData:d,interactionsData:R}),[c,y,g,u,d,R])}const E=l.createContext(null),B=()=>{const t=l.useContext(E);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function x(t){const{children:o,...e}=t,r=ro(e);return n.jsx(E.Provider,{value:r,children:o})}x.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"CoreTooltip.Position"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const C=l.forwardRef((t,o)=>{const{children:e,...r}=t,{open:s,floatingData:a,interactionsData:m}=B(),g=e.ref,c=D([a.refs.setReference,g,o]);return l.isValidElement(e)?l.cloneElement(e,m.getReferenceProps({ref:c,...r,...e.props,"data-state":s?"open":"closed"})):null});C.displayName="TooltipTrigger";C.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const p=h.button`
  ${({$isControlled:t})=>{const{tokens:o}=f(),{iconButton:e}=o;return[i`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${e.padding.default};
      `,t&&i`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,so=h.div`
  ${()=>{const{tokens:t}=f(),{iconButton:o}=t;return i`
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
`,io=h(eo)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=f(),{iconButton:r,tooltipIconButton:s}=e;return[i`
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
`,ao=h(to)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=f(),{iconButton:r,tooltipIconButton:s}=e;return[i`
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
`,v=l.forwardRef((t,o)=>{const{testID:e="tooltip-icon-button",...r}=t,{open:s,isControlled:a}=B();return n.jsx(p,{...r,ref:o,$isControlled:a,"data-testid":e,children:n.jsxs(so,{children:[n.jsx(io,{$isOpen:s,$isControlled:a}),n.jsx(ao,{$isOpen:s,$isControlled:a})]})})});v.displayName="TooltipIconButton";v.__docgenInfo={description:"",methods:[],displayName:"TooltipIconButton"};const lo=h.div`
  ${({$isControlled:t})=>{const{tokens:o}=f(),{tooltip:e}=o;return[i`
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
`,co=h.button`
  ${()=>{const{tokens:t}=f(),{tooltip:o}=t;return i`
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
`,I=l.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:s}=f(),{tooltip:a}=s,{open:m,setOpen:g,isControlled:c,arrowRef:y,floatingData:u,interactionsData:d}=B(),w=D([u.refs.setFloating,o]);return m?n.jsx(Z,{children:n.jsxs(lo,{ref:w,style:u.floatingStyles,...d.getFloatingProps(r),$isControlled:c,children:[n.jsx(oo,{ref:y,context:u.context,fill:a.backgroundColor,width:parseInt(a.arrow.width),height:parseInt(a.arrow.height)}),c&&n.jsx(co,{onClick:()=>g(!1),"aria-label":"Close tooltip",children:n.jsx(no,{})}),e]})}):null});I.displayName="TooltipContent";I.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};function N({children:t}){return n.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:t})}const po={title:"Components/Data Display/Tooltip",component:x,render:function(o){return n.jsx(N,{children:n.jsxs(x,{...o,children:[n.jsx(C,{children:n.jsx(v,{"aria-label":"Button label"})}),n.jsx(I,{children:n.jsx(S,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:T.POSITIONS}},args:{offset:6,placement:T.DEFAULT_POSITION}},$={},b={render:function(o){const[e,r]=l.useState(!1);return n.jsx(N,{children:n.jsxs(x,{...o,open:e,onOpenChange:r,children:[n.jsx(C,{children:n.jsx(v,{"aria-label":"Button label",onClick:()=>r(!e)})}),n.jsx(I,{children:n.jsx(S,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var j,k,P;$.parameters={...$.parameters,docs:{...(j=$.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(P=(k=$.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var O,_,F;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const uo=["Basic","Popup"],To=Object.freeze(Object.defineProperty({__proto__:null,Basic:$,Popup:b,__namedExportsOrder:uo,default:po},Symbol.toStringTag,{value:"Module"}));export{$ as B,b as P,To as T};
