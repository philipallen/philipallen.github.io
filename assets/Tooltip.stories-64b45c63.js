import{j as t,a as F,u as O,b as _}from"./index-e76b8df1.js";import{r as s}from"./index-c013ead5.js";import{c as h}from"./index-f9a152de.js";import{b as M,c as U,s as W,d as z,e as N,f as L,g as H,h as V,o as q,i as G,j as J,k as K,u as C,F as Q,a as X}from"./floating-ui.react-b73a43d5.js";import{B as b}from"./Button-b7c80ca3.js";import{T as I}from"./Typography-ab363d23.js";function Y({initialOpen:o=!1,placement:e=h.DEFAULT_POSITION,open:n,onOpenChange:r}={}){const[d,l]=s.useState(o),c=n??d,p=r??l,a=s.useRef(null),i=M({placement:e,open:c,onOpenChange:p,whileElementsMounted:V,middleware:[q(16),G({padding:5}),J({padding:5}),K({element:a})]}),g=U(i.context,{handleClose:W(),enabled:n===void 0}),A=z(i.context,{enabled:n===void 0}),B=N(i.context),E=L(i.context,{role:"tooltip"}),x=H([g,A,B,E]);return s.useMemo(()=>({open:c,setOpen:p,arrowRef:a,floatingData:i,interactionsData:x}),[c,p,a,i,x])}const S=s.createContext(null),v=()=>{const o=s.useContext(S);if(!o)throw new Error("Tooltip components must be wrapped in <Tooltip />");return o};function m(o){const{children:e,...n}=o,r=Y(n);return t.jsx(S.Provider,{value:r,children:e})}const D=s.forwardRef((o,e)=>{const{children:n,...r}=o,{open:d,floatingData:l,interactionsData:c}=v(),p=n.ref,a=C([l.refs.setReference,p,e]);return s.isValidElement(n)?s.cloneElement(n,c.getReferenceProps({ref:a,...r,...n.props,"data-state":d?"open":"closed"})):null}),Z=F.div`
  ${()=>{const{tokens:o}=O(),{tooltip:e}=o;return _`
      max-width: ${e.maxWidth};
      border-radius: ${e.radius};
      padding-top: ${e.padding.top};
      padding-bottom: ${e.padding.bottom};
      padding-left: ${e.padding.left};
      padding-right: ${e.padding.right};
      background: ${e.backgroundColor};
      color: ${e.color};
      z-index: ${e.zIndex};
    `}}
`,$=s.forwardRef((o,e)=>{const{children:n,...r}=o,{tokens:d}=O(),{tooltip:l}=d,{open:c,arrowRef:p,floatingData:a,interactionsData:i}=v(),g=C([a.refs.setFloating,e]);return c?t.jsx(Q,{children:t.jsxs(Z,{ref:g,style:a.floatingStyles,...i.getFloatingProps(r),children:[t.jsx(X,{ref:p,context:a.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),n]})}):null});function k({children:o}){return t.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:o})}const ee={title:"DataDisplay/Tooltip",component:m,render:function(e){return t.jsx(k,{children:t.jsxs(m,{...e,children:[t.jsx(D,{children:t.jsx(b,{text:"Button"})}),t.jsx($,{children:t.jsx(I,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{placement:{control:{type:"select"},options:h.POSITIONS}},args:{placement:h.DEFAULT_POSITION}},u={},f={render:function(e){const[n,r]=s.useState(!1);return t.jsx(k,{children:t.jsxs(m,{...e,open:n,onOpenChange:r,children:[t.jsx(D,{children:t.jsx(b,{text:"Button",onClick:()=>r(!n)})}),t.jsx($,{children:t.jsx(I,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var T,j,y;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(y=(j=u.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var R,w,P;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <Wrapper>
        <Tooltip {...args} open={open} onOpenChange={setOpen}>
          <TooltipTrigger>
            <Button text="Button" onClick={() => setOpen(!open)} />
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
}`,...(P=(w=f.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const te=["Basic","Popup"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,Popup:f,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{u as B,f as P,le as T};
