import{j as o}from"./jsx-runtime-6eef64cc.js";import{r as s}from"./index-c013ead5.js";import{c as x}from"./index-f15beae1.js";import{b as E,c as F,s as N,d as q,e as M,f as U,g as W,h as z,o as L,i as H,j as V,k as G,u as b,F as J,a as K}from"./floating-ui.react-06582175.js";import{a as Q,u as I,b as X}from"./index-40766bf6.js";import{B as _}from"./Button-2f99bd4c.js";import{T as v}from"./Typography-ff2e0ce1.js";function Y({initialOpen:t=!1,placement:e=x.DEFAULT_POSITION,open:n,onOpenChange:r}={}){const[d,p]=s.useState(t),l=n??d,c=r??p,a=s.useRef(null),i=E({placement:e,open:l,onOpenChange:c,whileElementsMounted:z,middleware:[L(16),H({padding:5}),V({padding:5}),G({element:a})]}),T=F(i.context,{handleClose:N(),enabled:n===void 0}),k=q(i.context,{enabled:n===void 0}),A=M(i.context),B=U(i.context,{role:"tooltip"}),y=W([T,k,A,B]);return s.useMemo(()=>({open:l,setOpen:c,arrowRef:a,floatingData:i,interactionsData:y}),[l,c,a,i,y])}const S=s.createContext(null),D=()=>{const t=s.useContext(S);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function f(t){const{children:e,...n}=t,r=Y(n);return o.jsx(S.Provider,{value:r,children:e})}f.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"CoreTooltip.Position"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const m=s.forwardRef((t,e)=>{const{children:n,...r}=t,{open:d,floatingData:p,interactionsData:l}=D(),c=n.ref,a=b([p.refs.setReference,c,e]);return s.isValidElement(n)?s.cloneElement(n,l.getReferenceProps({ref:a,...r,...n.props,"data-state":d?"open":"closed"})):null});m.displayName="TooltipTrigger";m.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const Z=Q.div`
  ${()=>{const{tokens:t}=I(),{tooltip:e}=t;return X`
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
`,h=s.forwardRef((t,e)=>{const{children:n,...r}=t,{tokens:d}=I(),{tooltip:p}=d,{open:l,arrowRef:c,floatingData:a,interactionsData:i}=D(),T=b([a.refs.setFloating,e]);return l?o.jsx(J,{children:o.jsxs(Z,{ref:T,style:a.floatingStyles,...i.getFloatingProps(r),children:[o.jsx(K,{ref:c,context:a.context,fill:p.backgroundColor,width:parseInt(p.arrow.width),height:parseInt(p.arrow.height)}),n]})}):null});h.displayName="TooltipContent";h.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};function $({children:t}){return o.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%",height:350},children:t})}const ee={title:"Components/DataDisplay/Tooltip",component:f,render:function(e){return o.jsx($,{children:o.jsxs(f,{...e,children:[o.jsx(m,{children:o.jsx(_,{text:"Button"})}),o.jsx(h,{children:o.jsx(v,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})},argTypes:{placement:{control:{type:"select"},options:x.POSITIONS}},args:{placement:x.DEFAULT_POSITION}},u={},g={render:function(e){const[n,r]=s.useState(!1);return o.jsx($,{children:o.jsxs(f,{...e,open:n,onOpenChange:r,children:[o.jsx(m,{children:o.jsx(_,{text:"Button",onClick:()=>r(!n)})}),o.jsx(h,{children:o.jsx(v,{color:"inherit",children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."})})]})})}};var R,j,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var w,P,O;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(P=g.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const oe=["Basic","Popup"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,Popup:g,__namedExportsOrder:oe,default:ee},Symbol.toStringTag,{value:"Module"}));export{u as B,g as P,le as T};
