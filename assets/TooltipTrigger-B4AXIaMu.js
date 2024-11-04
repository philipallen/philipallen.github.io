import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as c}from"./index-DH5ua8nC.js";import{c as b,b as D}from"./index-C3m9D1_L.js";import{a as u,u as g,b as s}from"./index-C-LSVLXB.js";import{I as j,b as P,C as N}from"./index-COlUQA8Q.js";import{b as A,c as E,o as O,f as q,s as S,d as U,e as L,g as W,h as G,i as M,j as z,k as H,a as V,u as I,F as J}from"./floating-ui.react-C2UAdtMt.js";import{u as K}from"./OverlayContext-0eIRNS6h.js";import{T as Q}from"./Typography-DPnR7vBA.js";function X({initialOpen:e=!1,placement:o=b.DEFAULT_POSITION,offset:t=b.DEFAULT_OFFSET,maxWidth:n,open:r,onOpenChange:i}={}){const[d,m]=c.useState(e),f=!!i,h=r??d,$=i??m,y=c.useRef(null),l=A({placement:o,open:h,onOpenChange:$,whileElementsMounted:E,middleware:[O(t),q({padding:b.FLIP_PADDING}),S({padding:b.SHIFT_PADDING}),U({element:y,padding:b.ARROW_PADDING})]}),T=L(l.context,{handleClose:W(),enabled:r===void 0}),v=G(l.context,{enabled:r===void 0}),F=M(l.context),_=z(l.context,{role:"tooltip"}),x=H([T,v,F,_]);return c.useMemo(()=>({open:h,setOpen:$,isControlled:f,maxWidth:n,arrowRef:y,floatingData:l,interactionsData:x}),[h,$,f,n,y,l,x])}const w=c.createContext(null),C=()=>{const e=c.useContext(w);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function Y(e){const{children:o,...t}=e,n=X(t);return a.jsx(w.Provider,{value:n,children:o})}Y.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"CoreTooltip.Position"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const p=u.button`
  ${({$isControlled:e,$variant:o})=>{const{tokens:t}=g(),{iconButton:n}=t;return[s`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${n.padding[o]};
      `,e&&s`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,Z=u.div`
  ${({$variant:e})=>{const{tokens:o}=g(),{iconButton:t}=o;return s`
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
`,oo=u(j)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:n}=g(),{iconButton:r,tooltipIconButton:i}=n;return[s`
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
`,to=u(P)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:n}=g(),{iconButton:r,tooltipIconButton:i}=n;return[s`
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
`,B=c.forwardRef((e,o)=>{const{variant:t=D.DEFAULT_VARIANT,testID:n="tooltip-icon-button",...r}=e,{open:i,isControlled:d}=C();return a.jsx(p,{...r,ref:o,$isControlled:d,$variant:t,"data-testid":n,children:a.jsxs(Z,{$variant:t,children:[a.jsx(oo,{$isControlled:d,$isOpen:i,$variant:t}),a.jsx(to,{$isControlled:d,$isOpen:i,$variant:t})]})})});B.displayName="TooltipIconButton";B.__docgenInfo={description:"",methods:[],displayName:"TooltipIconButton"};const eo=u.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:t}=g(),{tooltip:n}=t;return[s`
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
`,no=u(V)`
  pointer-events: auto !important;
`,io=u.button`
  ${()=>{const{tokens:e}=g(),{tooltip:o}=e;return s`
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
`,R=c.forwardRef((e,o)=>{const{children:t,...n}=e,{tokens:r}=g(),{tooltip:i}=r,{portalElement:d}=K(),{open:m,setOpen:f,isControlled:h,maxWidth:$,arrowRef:y,floatingData:l,interactionsData:T}=C(),v=I([l.refs.setFloating,o]);return m?a.jsx(J,{root:d,children:a.jsxs(eo,{ref:v,style:l.floatingStyles,...T.getFloatingProps(n),$isControlled:h,$maxWidth:$,children:[a.jsx(no,{ref:y,context:l.context,fill:i.backgroundColor,width:parseInt(i.arrow.width),height:parseInt(i.arrow.height)}),h&&a.jsx(io,{onClick:()=>f(!1),"aria-label":"Close tooltip",children:a.jsx(N,{})}),a.jsx(Q,{color:i.color,variant:i.typography.variant,fontFamily:i.typography.fontFamily,children:t})]})}):null});R.displayName="TooltipContent";R.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};const k=c.forwardRef((e,o)=>{const{children:t,...n}=e,{open:r,floatingData:i,interactionsData:d}=C(),m=t.ref,f=I([i.refs.setReference,m,o]);return c.isValidElement(t)?c.cloneElement(t,d.getReferenceProps({ref:f,...n,...t.props,"data-state":r?"open":"closed"})):null});k.displayName="TooltipTrigger";k.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};export{Y as T,k as a,B as b,R as c};
