import{j as l}from"./jsx-runtime-sfY7k0Xq.js";import{r as a}from"./index-CcKhGcwW.js";import{c as B,d as D,o as k,f as P,e as I,g as j,h as E,i as A,j as O,k as _,l as N,m as S,b as M,u as v,F as U,a as G}from"./floating-ui.react-CtreYAAZ.js";import{a as b,u as w,b as $}from"./index-COZsQx0K.js";import{C as L}from"./index-Cng6hRot.js";import{$ as z}from"./Button-DPtumZN7.js";import{u as H}from"./OverlayContext-DE6V0lcf.js";import{T as W}from"./Typography-cxmeyP_c.js";import{a as h}from"./index-CssHJ6ns.js";function V({initialOpen:e=!1,placement:o=h.DEFAULT_POSITION,offset:n=h.DEFAULT_OFFSET,maxWidth:t,open:c,onOpenChange:s}={}){const[p,u]=a.useState(e),d=!!s,i=c??p,g=s??u,f=a.useRef(null),r=B({placement:o,open:i,onOpenChange:g,whileElementsMounted:D,middleware:[k(n),P({padding:h.FLIP_PADDING}),I({padding:h.SHIFT_PADDING}),j({element:f,padding:h.ARROW_PADDING})]}),m=E(r.context,{handleClose:A(),enabled:c===void 0}),x=O(r.context,{enabled:c===void 0}),R=_(r.context),F=N(r.context,{role:"tooltip"}),T=S([m,x,R,F]);return a.useMemo(()=>({open:i,setOpen:g,isControlled:d,maxWidth:t,arrowRef:f,floatingData:r,interactionsData:T}),[i,g,d,t,f,r,T])}const C=a.createContext(null),y=()=>{const e=a.useContext(C);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function io(e){const{children:o,...n}=e,t=V(n);return l.jsx(C.Provider,{value:t,children:o})}const q=b.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:n}=w(),{tooltip:t}=n;return[$`
        max-width: ${o?`${o}px`:t.maxWidth};
        border-radius: ${t.radius};
        padding-top: ${t.padding.top};
        padding-bottom: ${t.padding.bottom};
        padding-left: ${t.padding.left};
        padding-right: ${t.padding.right.default};
        background: ${t.backgroundColor};
        z-index: ${t.zIndex};
      `,e&&$`
          padding-right: ${t.padding.right.large};
        `]}}
`,J=b(M)`
  path {
    pointer-events: auto;
  }
`,K=b(z)`
  ${()=>{const{tokens:e}=w(),{tooltip:o}=e;return $`
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
`,Q=a.forwardRef((e,o)=>{const{children:n,...t}=e,{tokens:c}=w(),{tooltip:s}=c,{portalElement:p}=H(),{open:u,setOpen:d,isControlled:i,maxWidth:g,arrowRef:f,floatingData:r,interactionsData:m}=y(),x=v([r.refs.setFloating,o]);return u?l.jsx(U,{root:p,children:l.jsx(G,{context:r.context,disabled:!i,children:l.jsxs(q,{ref:x,style:r.floatingStyles,...m.getFloatingProps(t),$isControlled:i,$maxWidth:g,role:i?"dialog":"tooltip",children:[l.jsx(J,{ref:f,context:r.context,fill:s.backgroundColor,width:parseInt(s.arrow.width),height:parseInt(s.arrow.height)}),l.jsx(W,{color:s.color,variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:n}),i&&l.jsx(K,{onPress:()=>d(!1),"aria-label":"Close tooltip",children:l.jsx(L,{})})]})})}):null});Q.displayName="TooltipContent";const X=a.forwardRef((e,o)=>{const{children:n,...t}=e,{open:c,floatingData:s,interactionsData:p}=y(),u=n.ref,d=v([s.refs.setReference,u,o]);return a.isValidElement(n)?a.cloneElement(n,p.getReferenceProps({ref:d,...t,...n.props,"data-state":c?"open":"closed"})):null});X.displayName="TooltipTrigger";export{io as T,X as a,Q as b,y as u};
