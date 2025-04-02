import{j as l}from"./jsx-runtime-BkBIjjFT.js";import{r as i}from"./index-KmaxkdDD.js";import{c as B,d as D,o as k,f as P,s as I,e as j,g as E,h as A,i as O,j as _,k as N,l as S,b as M,u as T,F as U,a as G}from"./floating-ui.react-DZDdj-Od.js";import{a as b,u as w,b as $}from"./index-DT8u_GqS.js";import{C as L}from"./index-qhhwF6MA.js";import{$ as z}from"./Button-lwQFUGeW.js";import{u as H}from"./OverlayContext-CQkNAI0D.js";import{T as W}from"./Typography-wg1R8lvT.js";import{h}from"./index-VIbBARS4.js";function V({initialOpen:e=!1,placement:o=h.DEFAULT_POSITION,offset:n=h.DEFAULT_OFFSET,maxWidth:t,open:c,onOpenChange:s}={}){const[p,u]=i.useState(e),d=!!s,a=c??p,g=s??u,f=i.useRef(null),r=B({placement:o,open:a,onOpenChange:g,whileElementsMounted:D,middleware:[k(n),P({padding:h.FLIP_PADDING}),I({padding:h.SHIFT_PADDING}),j({element:f,padding:h.ARROW_PADDING})]}),m=E(r.context,{handleClose:A(),enabled:c===void 0}),x=O(r.context,{enabled:c===void 0}),R=_(r.context),F=N(r.context,{role:"tooltip"}),v=S([m,x,R,F]);return i.useMemo(()=>({open:a,setOpen:g,isControlled:d,maxWidth:t,arrowRef:f,floatingData:r,interactionsData:v}),[a,g,d,t,f,r,v])}const C=i.createContext(null),y=()=>{const e=i.useContext(C);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function ao(e){const{children:o,...n}=e,t=V(n);return l.jsx(C.Provider,{value:t,children:o})}const q=b.div`
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
`,Q=i.forwardRef((e,o)=>{const{children:n,...t}=e,{tokens:c}=w(),{tooltip:s}=c,{portalElement:p}=H(),{open:u,setOpen:d,isControlled:a,maxWidth:g,arrowRef:f,floatingData:r,interactionsData:m}=y(),x=T([r.refs.setFloating,o]);return u?l.jsx(U,{root:p,children:l.jsx(G,{context:r.context,disabled:!a,children:l.jsxs(q,{ref:x,style:r.floatingStyles,...m.getFloatingProps(t),$isControlled:a,$maxWidth:g,role:a?"dialog":"tooltip",children:[l.jsx(J,{ref:f,context:r.context,fill:s.backgroundColor,width:parseInt(s.arrow.width),height:parseInt(s.arrow.height)}),l.jsx(W,{color:s.color,variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:n}),a&&l.jsx(K,{onPress:()=>d(!1),"aria-label":"Close tooltip",children:l.jsx(L,{})})]})})}):null});Q.displayName="TooltipContent";const X=i.forwardRef((e,o)=>{const{children:n,...t}=e,{open:c,floatingData:s,interactionsData:p}=y(),u=n.ref,d=T([s.refs.setReference,u,o]);return i.isValidElement(n)?i.cloneElement(n,p.getReferenceProps({ref:d,...t,...n.props,"data-state":c?"open":"closed"})):null});X.displayName="TooltipTrigger";export{ao as T,X as a,Q as b,y as u};
