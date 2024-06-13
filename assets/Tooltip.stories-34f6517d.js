import{j as o}from"./jsx-runtime-6eef64cc.js";import{r as s}from"./index-c013ead5.js";import{d as g}from"./index-f5bdf07a.js";import{e as O}from"./index-b1778622.js";import{b as N,c as q,s as U,d as L,e as M,f as W,g as z,h as H,o as V,i as G,j as J,k as K,u as P,F as Q,a as X}from"./floating-ui.react-06582175.js";import{a as Y,u as _,b as Z}from"./index-f9091704.js";import{I as F}from"./IconButton-3c54b736.js";import{T as S}from"./Typography-401b61b3.js";function ee({initialOpen:t=!1,placement:e=g.DEFAULT_POSITION,offset:n=g.DEFAULT_OFFSET,open:r,onOpenChange:c}={}){const[l,d]=s.useState(t),p=r??l,a=c??d,u=s.useRef(null),i=N({placement:e,open:p,onOpenChange:a,whileElementsMounted:H,middleware:[V(n),G({padding:5}),J({padding:5}),K({element:u})]}),A=q(i.context,{handleClose:U(),enabled:r===void 0}),$=L(i.context,{enabled:r===void 0}),k=M(i.context),B=W(i.context,{role:"tooltip"}),y=z([A,$,k,B]);return s.useMemo(()=>({open:p,setOpen:a,arrowRef:u,floatingData:i,interactionsData:y}),[p,a,u,i,y])}const v=s.createContext(null),D=()=>{const t=s.useContext(v);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function h(t){const{children:e,...n}=t,r=ee(n);return o.jsx(v.Provider,{value:r,children:e})}h.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"CoreTooltip.Position"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const T=s.forwardRef((t,e)=>{const{children:n,...r}=t,{open:c,floatingData:l,interactionsData:d}=D(),p=n.ref,a=P([l.refs.setReference,p,e]);return s.isValidElement(n)?s.cloneElement(n,d.getReferenceProps({ref:a,...r,...n.props,"data-state":c?"open":"closed"})):null});T.displayName="TooltipTrigger";T.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const oe=Y.div`
  ${()=>{const{tokens:t}=_(),{tooltip:e}=t;return Z`
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
`,x=s.forwardRef((t,e)=>{const{children:n,...r}=t,{tokens:c}=_(),{tooltip:l}=c,{open:d,arrowRef:p,floatingData:a,interactionsData:u}=D(),i=P([a.refs.setFloating,e]);return d?o.jsx(Q,{children:o.jsxs(oe,{ref:i,style:a.floatingStyles,...u.getFloatingProps(r),children:[o.jsx(X,{ref:p,context:a.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),n]})}):null});x.displayName="TooltipContent";x.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};function E({children:t}){return o.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:t})}const te={title:"Components/DataDisplay/Tooltip",component:h,render:function(e){return o.jsx(E,{children:o.jsxs(h,{...e,children:[o.jsx(T,{children:o.jsx(F,{"aria-label":"Button label",children:o.jsx(O,{secondaryColor:"white"})})}),o.jsx(x,{children:o.jsx(S,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{offset:{control:{type:"number"}},placement:{control:{type:"select"},options:g.POSITIONS}},args:{offset:g.DEFAULT_OFFSET,placement:g.DEFAULT_POSITION}},f={},m={render:function(e){const[n,r]=s.useState(!1);return o.jsx(E,{children:o.jsxs(h,{...e,open:n,onOpenChange:r,children:[o.jsx(T,{children:o.jsx(F,{"aria-label":"Button label",onClick:()=>r(!n),children:o.jsx(O,{secondaryColor:"white"})})}),o.jsx(x,{children:o.jsx(S,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var b,C,I;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(I=(C=f.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var j,w,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <Wrapper>
        <Tooltip {...args} open={open} onOpenChange={setOpen}>
          <TooltipTrigger>
            <IconButton aria-label="Button label" onClick={() => setOpen(!open)}>
              <InfoIcon secondaryColor="white" />
            </IconButton>
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
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const ne=["Basic","Popup"],ue=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,Popup:m,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{f as B,m as P,ue as T};
