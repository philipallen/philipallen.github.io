import{j as l}from"./jsx-runtime-BkBIjjFT.js";import{r as i}from"./index-KmaxkdDD.js";import{c as k,d as B,o as D,f as I,s as P,e as j,g as E,h as A,i as O,j as _,k as N,l as S,b as M,u as C,F as U,a as G}from"./floating-ui.react-DZDdj-Od.js";import{a as $,u as w,b}from"./index-ByEiyUmp.js";import{C as L}from"./index-BwV_lsCf.js";import{u as z}from"./OverlayContext-CQkNAI0D.js";import{T as H}from"./Typography-C-GpEjPp.js";import{h}from"./index-DYe-GrfV.js";function W({initialOpen:e=!1,placement:o=h.DEFAULT_POSITION,offset:n=h.DEFAULT_OFFSET,maxWidth:t,open:c,onOpenChange:s}={}){const[u,p]=i.useState(e),d=!!s,a=c??u,g=s??p,f=i.useRef(null),r=k({placement:o,open:a,onOpenChange:g,whileElementsMounted:B,middleware:[D(n),I({padding:h.FLIP_PADDING}),P({padding:h.SHIFT_PADDING}),j({element:f,padding:h.ARROW_PADDING})]}),m=E(r.context,{handleClose:A(),enabled:c===void 0}),x=O(r.context,{enabled:c===void 0}),R=_(r.context),F=N(r.context,{role:"tooltip"}),v=S([m,x,R,F]);return i.useMemo(()=>({open:a,setOpen:g,isControlled:d,maxWidth:t,arrowRef:f,floatingData:r,interactionsData:v}),[a,g,d,t,f,r,v])}const T=i.createContext(null),y=()=>{const e=i.useContext(T);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function ro(e){const{children:o,...n}=e,t=W(n);return l.jsx(T.Provider,{value:t,children:o})}const V=$.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:n}=w(),{tooltip:t}=n;return[b`
        max-width: ${o?`${o}px`:t.maxWidth};
        border-radius: ${t.radius};
        padding-top: ${t.padding.top};
        padding-bottom: ${t.padding.bottom};
        padding-left: ${t.padding.left};
        padding-right: ${t.padding.right.default};
        background: ${t.backgroundColor};
        z-index: ${t.zIndex};
      `,e&&b`
          padding-right: ${t.padding.right.large};
        `]}}
`,q=$(M)`
  path {
    pointer-events: auto;
  }
`,J=$.button`
  ${()=>{const{tokens:e}=w(),{tooltip:o}=e;return b`
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
`,K=i.forwardRef((e,o)=>{const{children:n,...t}=e,{tokens:c}=w(),{tooltip:s}=c,{portalElement:u}=z(),{open:p,setOpen:d,isControlled:a,maxWidth:g,arrowRef:f,floatingData:r,interactionsData:m}=y(),x=C([r.refs.setFloating,o]);return p?l.jsx(U,{root:u,children:l.jsx(G,{context:r.context,disabled:!a,children:l.jsxs(V,{ref:x,style:r.floatingStyles,...m.getFloatingProps(t),$isControlled:a,$maxWidth:g,role:a?"dialog":"tooltip",children:[l.jsx(q,{ref:f,context:r.context,fill:s.backgroundColor,width:parseInt(s.arrow.width),height:parseInt(s.arrow.height)}),a&&l.jsx(J,{onClick:()=>d(!1),"aria-label":"Close tooltip",children:l.jsx(L,{})}),l.jsx(H,{color:s.color,variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:n})]})})}):null});K.displayName="TooltipContent";const Q=i.forwardRef((e,o)=>{const{children:n,...t}=e,{open:c,floatingData:s,interactionsData:u}=y(),p=n.ref,d=C([s.refs.setReference,p,o]);return i.isValidElement(n)?i.cloneElement(n,u.getReferenceProps({ref:d,...t,...n.props,"data-state":c?"open":"closed"})):null});Q.displayName="TooltipTrigger";export{ro as T,Q as a,K as b,y as u};
