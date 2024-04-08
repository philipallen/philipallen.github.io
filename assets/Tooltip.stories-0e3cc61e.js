import{j as t,a as E,u as O,b as F}from"./index-1154a484.js";import{r as s}from"./index-c013ead5.js";import{h as P,i as M}from"./index-f91edb4f.js";import{b as W,c as L,d as U,e as N,f as z,g as H,h as V,o as q,i as G,s as J,j as K,u as C,F as Q,a as X}from"./floating-ui.react-9ca6c674.js";import{B as b}from"./Button-4fc6ac81.js";import{T as I}from"./Typography-c902fb8d.js";function Y({initialOpen:o=!1,placement:e=P,open:n,onOpenChange:r}={}){const[d,c]=s.useState(o),l=n??d,p=r??c,a=s.useRef(null),i=W({placement:e,open:l,onOpenChange:p,whileElementsMounted:V,middleware:[q(16),G({padding:5}),J({padding:5}),K({element:a})]}),g=L(i.context,{enabled:n===void 0}),$=U(i.context,{enabled:n===void 0}),k=N(i.context),A=z(i.context,{role:"tooltip"}),m=H([g,$,k,A]);return s.useMemo(()=>({open:l,setOpen:p,arrowRef:a,floatingData:i,interactionsData:m}),[l,p,a,i,m])}const v=s.createContext(null),S=()=>{const o=s.useContext(v);if(!o)throw new Error("Tooltip components must be wrapped in <Tooltip />");return o};function h(o){const{children:e,...n}=o,r=Y(n);return t.jsx(v.Provider,{value:r,children:e})}const D=s.forwardRef((o,e)=>{const{children:n,...r}=o,{open:d,floatingData:c,interactionsData:l}=S(),p=n.ref,a=C([c.refs.setReference,p,e]);return s.isValidElement(n)?s.cloneElement(n,l.getReferenceProps({ref:a,...r,...n.props,"data-state":d?"open":"closed"})):null}),Z=E.div`
  ${()=>{const{tokens:o}=O(),{tooltip:e}=o;return F`
      max-width: ${e.maxWidth};
      border-radius: ${e.radius};
      padding-top: ${e.padding.top};
      padding-bottom: ${e.padding.bottom};
      padding-left: ${e.padding.left};
      padding-right: ${e.padding.right};
      background: ${e.backgroundColor};
      color: ${e.color};
    `}}
`,B=s.forwardRef((o,e)=>{const{children:n,...r}=o,{tokens:d}=O(),{tooltip:c}=d,{open:l,arrowRef:p,floatingData:a,interactionsData:i}=S(),g=C([a.refs.setFloating,e]);return l?t.jsx(Q,{children:t.jsxs(Z,{ref:g,style:a.floatingStyles,...i.getFloatingProps(r),children:[t.jsx(X,{ref:p,context:a.context,fill:c.backgroundColor,width:parseInt(c.arrow.width),height:parseInt(c.arrow.height)}),n]})}):null});function _({children:o}){return t.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:o})}const ee={title:"DataDisplay/Tooltip",component:h,render:function(e){return t.jsx(_,{children:t.jsxs(h,{...e,children:[t.jsx(D,{children:t.jsx(b,{text:"Button"})}),t.jsx(B,{children:t.jsx(I,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{placement:{control:{type:"select"},options:M}},args:{placement:P}},u={},f={render:function(e){const[n,r]=s.useState(!1);return t.jsx(_,{children:t.jsxs(h,{...e,open:n,onOpenChange:r,children:[t.jsx(D,{children:t.jsx(b,{text:"Button",onClick:()=>r(!n)})}),t.jsx(B,{children:t.jsx(I,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var x,T,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var R,y,w;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(y=f.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const te=["Basic","Popup"],ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,Popup:f,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{u as B,f as P,ce as T};
