import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as c}from"./index-DH5ua8nC.js";import{b,a as D}from"./index-BrtwDHqb.js";import{a as g,u as f,b as s}from"./index-CzvSJj6w.js";import{I as j,a as P,C as N}from"./index-BYwLR37K.js";import{c as A,d as E,o as O,f as q,s as S,e as U,g as L,h as M,i as W,j as G,k as z,l as H,b as V,u as I,F as J,a as K}from"./floating-ui.react-Bc49jMsR.js";import{u as Q}from"./OverlayContext-0eIRNS6h.js";import{T as X}from"./Typography-RMDmhaRB.js";function Y({initialOpen:e=!1,placement:o=b.DEFAULT_POSITION,offset:t=b.DEFAULT_OFFSET,maxWidth:n,open:r,onOpenChange:i}={}){const[d,m]=c.useState(e),h=!!i,u=r??d,$=i??m,y=c.useRef(null),l=A({placement:o,open:u,onOpenChange:$,whileElementsMounted:E,middleware:[O(t),q({padding:b.FLIP_PADDING}),S({padding:b.SHIFT_PADDING}),U({element:y,padding:b.ARROW_PADDING})]}),v=L(l.context,{handleClose:M(),enabled:r===void 0}),T=W(l.context,{enabled:r===void 0}),F=G(l.context),_=z(l.context,{role:"tooltip"}),C=H([v,T,F,_]);return c.useMemo(()=>({open:u,setOpen:$,isControlled:h,maxWidth:n,arrowRef:y,floatingData:l,interactionsData:C}),[u,$,h,n,y,l,C])}const w=c.createContext(null),x=()=>{const e=c.useContext(w);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function Z(e){const{children:o,...t}=e,n=Y(t);return a.jsx(w.Provider,{value:n,children:o})}Z.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"CoreTooltip.Position"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const p=g.button`
  ${({$isControlled:e,$variant:o})=>{const{tokens:t}=f(),{iconButton:n}=t;return[s`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${n.padding[o]};
      `,e&&s`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,oo=g.div`
  ${({$variant:e})=>{const{tokens:o}=f(),{iconButton:t}=o;return s`
      display: grid;
      place-items: center;
      padding: ${t.inner.padding[e]};
      border-radius: ${t.inner.radius[e]};
      background: ${t.inner.backgroundColor[e].base};

      ${p}:focus-visible && {
        outline-width: ${t.inner.focusRing.width};
        outline-style: ${t.inner.focusRing.style};
        outline-color: ${t.inner.focusRing.color};
        outline-offset: ${t.inner.focusRing.offset.default};
      }
    `}}
`,to=g(j)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:n}=f(),{iconButton:r,tooltipIconButton:i}=n;return[s`
        width: ${r.inner.icon.width[t]};
        height: ${r.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${i.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.icon.secondaryColor.base};
        }
      `,!e&&s`
          ${p}:hover &&,
          ${p}:focus-visible && {
            display: none;
          }
        `,!o&&s`
          ${p}:hover && {
            & [data-primary-color] {
              color: ${i.icon.primaryColor.hover};
            }
          }
        `,o&&s`
          display: none;
        `]}}
`,eo=g(P)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:n}=f(),{iconButton:r,tooltipIconButton:i}=n;return[s`
        display: none;
        width: ${r.inner.icon.width[t]};
        height: ${r.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${i.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.iconFilled.secondaryColor.base};
        }
      `,!e&&s`
          ${p}:hover &&,
          ${p}:focus-visible && {
            display: block;
          }
        `,o&&s`
          display: block;
        `,e&&o&&s`
          ${p}:hover && {
            & [data-primary-color] {
              color: ${i.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,B=c.forwardRef((e,o)=>{const{variant:t=D.DEFAULT_VARIANT,testID:n="tooltip-icon-button",...r}=e,{open:i,isControlled:d}=x();return a.jsx(p,{...r,ref:o,"aria-expanded":i?"true":void 0,$isControlled:d,$variant:t,type:"button","data-testid":n,children:a.jsxs(oo,{$variant:t,children:[a.jsx(to,{$isControlled:d,$isOpen:i,$variant:t}),a.jsx(eo,{$isControlled:d,$isOpen:i,$variant:t})]})})});B.displayName="TooltipIconButton";B.__docgenInfo={description:"",methods:[],displayName:"TooltipIconButton"};const no=g.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:t}=f(),{tooltip:n}=t;return[s`
        max-width: ${o?`${o}px`:n.maxWidth};
        border-radius: ${n.radius};
        padding-top: ${n.padding.top};
        padding-bottom: ${n.padding.bottom};
        padding-left: ${n.padding.left};
        padding-right: ${n.padding.right.default};
        background: ${n.backgroundColor};
        z-index: ${n.zIndex};
      `,e&&s`
          padding-right: ${n.padding.right.large};
        `]}}
`,io=g(V)`
  path {
    pointer-events: auto;
  }
`,ro=g.button`
  ${()=>{const{tokens:e}=f(),{tooltip:o}=e;return s`
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
`,R=c.forwardRef((e,o)=>{const{children:t,...n}=e,{tokens:r}=f(),{tooltip:i}=r,{portalElement:d}=Q(),{open:m,setOpen:h,isControlled:u,maxWidth:$,arrowRef:y,floatingData:l,interactionsData:v}=x(),T=I([l.refs.setFloating,o]);return m?a.jsx(J,{root:d,children:a.jsx(K,{context:l.context,disabled:!u,children:a.jsxs(no,{ref:T,style:l.floatingStyles,...v.getFloatingProps(n),$isControlled:u,$maxWidth:$,"aria-live":"assertive",children:[a.jsx(io,{ref:y,context:l.context,fill:i.backgroundColor,width:parseInt(i.arrow.width),height:parseInt(i.arrow.height)}),u&&a.jsx(ro,{onClick:()=>h(!1),"aria-label":"Close tooltip",children:a.jsx(N,{})}),a.jsx(X,{color:i.color,variant:i.typography.variant,fontFamily:i.typography.fontFamily,children:t})]})})}):null});R.displayName="TooltipContent";R.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};const k=c.forwardRef((e,o)=>{const{children:t,...n}=e,{open:r,floatingData:i,interactionsData:d}=x(),m=t.ref,h=I([i.refs.setReference,m,o]);return c.isValidElement(t)?c.cloneElement(t,d.getReferenceProps({ref:h,...n,...t.props,"data-state":r?"open":"closed"})):null});k.displayName="TooltipTrigger";k.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};export{Z as T,k as a,B as b,R as c};
