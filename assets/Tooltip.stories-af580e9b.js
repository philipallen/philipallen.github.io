import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as s}from"./index-c013ead5.js";import{c as h}from"./index-f9a152de.js";import{b as F,c as _,s as N,d as M,e as U,f as W,g as z,h as L,o as H,i as V,j as q,k as G,u as b,F as J,a as K}from"./floating-ui.react-06582175.js";import{a as Q,u as I,b as X}from"./index-2b4c4340.js";import{B as S}from"./Button-5cb0e456.js";import{T as v}from"./Typography-2ed3318f.js";function Y({initialOpen:o=!1,placement:e=h.DEFAULT_POSITION,open:n,onOpenChange:r}={}){const[d,l]=s.useState(o),p=n??d,c=r??l,a=s.useRef(null),i=F({placement:e,open:p,onOpenChange:c,whileElementsMounted:L,middleware:[H(16),V({padding:5}),q({padding:5}),G({element:a})]}),f=_(i.context,{handleClose:N(),enabled:n===void 0}),A=M(i.context,{enabled:n===void 0}),B=U(i.context),E=W(i.context,{role:"tooltip"}),y=z([f,A,B,E]);return s.useMemo(()=>({open:p,setOpen:c,arrowRef:a,floatingData:i,interactionsData:y}),[p,c,a,i,y])}const D=s.createContext(null),$=()=>{const o=s.useContext(D);if(!o)throw new Error("Tooltip components must be wrapped in <Tooltip />");return o};function m(o){const{children:e,...n}=o,r=Y(n);return t.jsx(D.Provider,{value:r,children:e})}const x=s.forwardRef((o,e)=>{const{children:n,...r}=o,{open:d,floatingData:l,interactionsData:p}=$(),c=n.ref,a=b([l.refs.setReference,c,e]);return s.isValidElement(n)?s.cloneElement(n,p.getReferenceProps({ref:a,...r,...n.props,"data-state":d?"open":"closed"})):null});x.displayName="TooltipTrigger";const Z=Q.div`
  ${()=>{const{tokens:o}=I(),{tooltip:e}=o;return X`
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
`,T=s.forwardRef((o,e)=>{const{children:n,...r}=o,{tokens:d}=I(),{tooltip:l}=d,{open:p,arrowRef:c,floatingData:a,interactionsData:i}=$(),f=b([a.refs.setFloating,e]);return p?t.jsx(J,{children:t.jsxs(Z,{ref:f,style:a.floatingStyles,...i.getFloatingProps(r),children:[t.jsx(K,{ref:c,context:a.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),n]})}):null});T.displayName="TooltipContent";function k({children:o}){return t.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:o})}const ee={title:"DataDisplay/Tooltip",component:m,render:function(e){return t.jsx(k,{children:t.jsxs(m,{...e,children:[t.jsx(x,{children:t.jsx(S,{text:"Button"})}),t.jsx(T,{children:t.jsx(v,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{placement:{control:{type:"select"},options:h.POSITIONS}},args:{placement:h.DEFAULT_POSITION}},u={},g={render:function(e){const[n,r]=s.useState(!1);return t.jsx(k,{children:t.jsxs(m,{...e,open:n,onOpenChange:r,children:[t.jsx(x,{children:t.jsx(S,{text:"Button",onClick:()=>r(!n)})}),t.jsx(T,{children:t.jsx(v,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var j,R,w;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(w=(R=u.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var P,C,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(C=g.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const te=["Basic","Popup"],pe=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,Popup:g,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{u as B,g as P,pe as T};
