import{r as p}from"./index-DH5ua8nC.js";import{T as P,B as Co,a as X,b as Q,I as Io,M as Ro,L as Z,c as L}from"./index-DKJt7waT.js";import{a,u as d,b as i,p as $,h as To}from"./index-CtBUti8q.js";import{C as Lo,A as jo,a as Bo,M as Ao,T as S,I as Do,b as Po,c as oo,E as _o,W as Fo,S as zo,d as So}from"./index-Bkh50RYL.js";import{j as s}from"./jsx-runtime-DQ32znRX.js";import{u as W,F as Wo,a as Ho,b as No,c as Eo,o as Oo,f as Mo,s as Yo,d as Vo,e as Uo,g as Go,h as Xo,i as qo,j as Jo,k as Ko}from"./floating-ui.react-C2UAdtMt.js";import{$ as Qo,a as Zo}from"./Button-qvF4wKtw.js";import{$ as ot}from"./utils-DMjC9_eM.js";import{i as tt}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";import{$ as et}from"./VisuallyHidden-KFGkQyAi.js";a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[i`
        display: grid;
        background: ${t.background[e]};
        border-width: ${t.stroke.width};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color};
        border-radius: ${t.stroke.radius};
      `]}}
`;var _=a.button`
  ${()=>{const{tokens:e}=d(),{accordion:o}=e;return[i`
        all: unset;
        position: relative;
        display: grid;
        padding: ${o.header.padding};
        color: ${o.header.text.color.base};
        text-decoration: ${o.header.text.decoration.line.base};
        text-underline-offset: ${o.header.text.decoration.offset};
        cursor: pointer;

        &:focus-visible {
          border-radius: ${o.header.focusRing.radius};
          outline-width: ${o.header.focusRing.width};
          outline-style: ${o.header.focusRing.style};
          outline-color: ${o.header.focusRing.color};
          outline-offset: ${o.header.focusRing.offset};
        }

        &:hover {
          color: ${o.header.text.color.hover};
          text-decoration: ${o.header.text.decoration.line.hover};
        }

        &:active {
          color: ${o.header.text.color.active};
          text-decoration: ${o.header.text.decoration.line.active};
        }
      `]}}
`;a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[i`
        display: grid;
        gap: ${t.header.inner.gap};
        align-items: center;
        grid-template-columns: 1fr auto;
        padding-top: ${t.header.inner.padding.top[e]};
        padding-left: ${t.header.inner.padding.left};
        padding-right: ${t.header.inner.padding.right};
        padding-bottom: ${t.header.inner.padding.bottom[e]};
        border-radius: ${t.header.inner.radius};
        background: ${t.header.inner.backgroundColor.base};

        ${_}:hover & {
          background: ${t.header.inner.backgroundColor.hover};
        }

        ${_}:active & {
          background: ${t.header.inner.backgroundColor.active[e]};
        }
      `]}}
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[i`
        color: ${t.header.icon.color.base};
        transform: rotateX(${e?"180deg":"0deg"});

        svg {
          display: block;
          width: ${t.header.icon.width};
          height: ${t.header.icon.height};
        }

        ${_}:hover & {
          color: ${t.header.icon.color.hover};
        }

        ${_}:active & {
          color: ${t.header.icon.color.active};
        }
      `]}}
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[i`
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        display: ${e?"block":"none"};
        height: ${t.separator.stroke.width};
        margin-left: ${t.separator.margin.left};
        margin-right: ${t.separator.margin.right};
        border-top-width: ${t.separator.stroke.width};
        border-top-style: ${t.separator.stroke.style};
        border-top-color: ${t.separator.stroke.color};
      `]}}
`;a.div`
  ${({hidden:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[i`
        display: ${e?"none":"block"};
        padding: ${t.content.padding};
      `]}}
`;var rt=a.p`
  ${({$variant:e,$fontFamily:o,$noWrap:t,$color:r})=>{const{tokens:n}=d(),{typography:l,fontFamily:c}=n,u=$(l.fontSize[e]),h=$(l.lineHeight[e]);return[i`
        margin: 0;
        font-weight: normal;
        color: ${r||l.color[e]};
        font-size: ${u};
        line-height: ${h};
        font-family: ${l.fontFamily[e]};
      `,o&&i`
          font-family: ${c[o]};
        `,t&&i`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,P.STANDARD_VARIANTS.includes(e)&&i`
          & strong,
          & b {
            font-family: ${c.OpenSansBold};

            & em,
            & i {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }

          & em,
          & i {
            font-family: ${P.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function nt(e,o){const{variant:t,component:r,color:n,fontFamily:l,noWrap:c,testID:u,...h}=e;return s.jsx(rt,{...h,ref:o,as:r,$variant:t,$color:n,$fontFamily:l,$noWrap:c,"data-testid":u})}var it=p.forwardRef(nt),at={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},dt=p.forwardRef;function st(e,o){const{variant:t=P.DEFAULT_VARIANT,component:r,...n}=e;return s.jsx(it,{...n,ref:o,variant:t,component:r||at[t]})}var f=dt(st),lt=a.div`
  ${()=>{const{tokens:e}=d(),{accordionGroup:o}=e;return[i`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;a(lt)`
  ${()=>{const{tokens:e}=d(),{accordionGroup:o}=e;return[i`
        gap: ${o.gap.nested};
      `]}}
`;a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alert:t}=o;return i`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${t.gap};
      border-radius: ${t.radius};
      border-top-width: ${t.stroke.width.top};
      border-left-width: ${t.stroke.width.left};
      border-right-width: ${t.stroke.width.right};
      border-bottom-width: ${t.stroke.width.bottom};
      border-style: ${t.stroke.style};
      border-color: ${t.stroke.color[e]};
      padding-top: ${t.padding.top};
      padding-left: ${t.padding.left};
      padding-right: ${t.padding.right};
      padding-bottom: ${t.padding.bottom};
      background-color: ${t.background[e]};
    `}}
`;a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alert:t}=o;return i`
      display: grid;
      place-items: center;
      height: ${$(t.iconWrapper.height)};

      svg {
        display: block;
        width: ${t.icon.width};
        height: ${t.icon.height};

        & [data-primary-color] {
          color: ${t.icon.primaryColor[e]};
        }

        & [data-secondary-color] {
          color: ${t.icon.secondaryColor[e]};
        }
      }
    `}}
`;a.div`
  overflow-wrap: anywhere;
`;a.dialog`
  ${()=>{const{tokens:e}=d(),{modal:o}=e;return i`
      display: none;
      align-items: end;
      justify-items: center;
      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;
      border: none;
      padding: 0;
      background: none;

      &[open] {
        display: grid;
      }

      @media (min-width: ${o.breakpoints.tablet}) {
        align-items: center;
        max-width: calc(100vw - (${o.padding.tablet} * 2));
        max-height: calc(100vh - (${o.padding.tablet} * 2));
      }

      &::backdrop {
        background: ${o.backdrop.backgroundColor};
      }
    `}}
`;var H=a.div`
  ${()=>{const{tokens:e}=d(),{modal:o}=e,t=parseInt(o.maxHeight.tablet)+parseInt(o.padding.tablet)*2+"px";return i`
      min-height: ${o.minHeight.mobile};
      max-height: ${o.maxHeight.mobile};
      overflow-wrap: anywhere;

      @media (min-width: ${o.breakpoints.tablet}) {
        min-height: ${o.minHeight.tablet};
        max-height: calc(100vh - (${o.padding.tablet} * 2));

        @media (min-height: ${t}) {
          max-height: ${o.maxHeight.tablet};
        }
      }
    `}}
`;a(H)`
  ${()=>{const{tokens:e}=d(),{modal:o}=e;return i`
      width: ${o.width.mobile};
      min-width: ${o.minWidth.mobile};
      max-width: ${o.maxWidth.mobile};

      border-top-left-radius: ${o.radius};
      border-top-right-radius: ${o.radius};
      background: ${o.backgroundColor};
      overflow: hidden;

      @media (min-width: ${o.breakpoints.tablet}) {
        width: ${o.width.tablet};
        min-width: ${o.minWidth.tablet};
        max-width: ${o.maxWidth.tablet};
        border-bottom-left-radius: ${o.radius};
        border-bottom-right-radius: ${o.radius};
      }
    `}}
`;a(H)`
  ${({$severity:e})=>{const{tokens:o}=d(),{modal:t,alertModal:r}=o;return i`
      display: grid;
      gap: ${r.gap};
      border-top-width: ${r.stroke.top.width};
      border-top-style: ${r.stroke.top.style};
      border-top-color: ${r.stroke.top.color[e]};
      padding-top: ${r.padding.mobile.top};
      padding-left: ${r.padding.mobile.left};
      padding-right: ${r.padding.mobile.right};
      padding-bottom: ${r.padding.mobile.bottom};
      overflow-y: auto;

      @media (min-width: ${t.breakpoints.tablet}) {
        padding-top: ${r.padding.tablet.top};
        padding-left: ${r.padding.tablet.left};
        padding-right: ${r.padding.tablet.right};
        padding-bottom: ${r.padding.tablet.bottom};
      }
    `}}
`;a.div`
  display: grid;
  gap: 8px;
`;a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alertModal:t,modal:r}=o;return i`
      svg {
        display: block;
        width: ${t.icon.width.mobile};
        height: ${t.icon.height.mobile};

        & [data-primary-color] {
          color: ${t.icon.primaryColor[e]};
        }

        & [data-secondary-color] {
          color: ${t.icon.secondaryColor[e]};
        }
      }

      @media (min-width: ${r.breakpoints.tablet}) {
        svg {
          width: ${t.icon.width.tablet};
          height: ${t.icon.height.tablet};
        }
      }
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{alertModal:o}=e;return i`
      color: ${o.body.color};
    `}}
`;a.div`
  ${({$layout:e})=>{const{tokens:o}=d(),{alertModal:t}=o;return[i`
        gap: ${t.footer.gap};
      `,e==="inline"&&i`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&i`
          display: grid;
          grid-auto-flow: row;
        `]}}
`;var ct=p.createContext({portalElement:void 0});function ut(){return p.useContext(ct)}var pt=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,ht=a.span`
  ${({$isLoading:e})=>{const{tokens:o}=d(),{button:t}=o,r=$(t.topLayer.icon.width),n=$(t.topLayer.icon.width);return i`
      display: flex;
      flex-shrink: 0;
      visibility: ${e?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${n};
      }
    `}}
`,bt=a.div`
  ${({$isLoading:e})=>i`
      visibility: ${e?"hidden":"visible"};
      overflow: hidden;
    `}
`,gt=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,v=a.button`
  ${({$variant:e,$isLoading:o,$fullWidth:t})=>{const{tokens:r}=d(),{button:n}=r;return[i`
        all: unset;
        position: relative;
        display: grid;
        align-items: start;
        height: ${n.height};
        width: ${t?"100%":"auto"};
        min-width: ${n.minWidth};
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: ${n.opacity.disabled};
        }

        &[aria-disabled="true"] {
          cursor: not-allowed;
        }
      `,!o&&i`
          &:not(:disabled):focus-visible {
            border-radius: ${n.topLayer.stroke.radius};
            outline-width: ${n.focusRing.width};
            outline-style: ${n.focusRing.style};
            outline-color: ${n.focusRing.color[e]};
            outline-offset: ${n.focusRing.offset};
          }
        `]}}
`,$t=a.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=d(),{button:r}=t;return[i`
        position: relative;
        overflow: hidden;
        color: ${r.topLayer.color[e].base};
        background: ${r.topLayer.backgroundColor[e].base};
        height: ${r.topLayer.height[e]};
        padding-left: ${r.topLayer.padding[e].left};
        padding-right: ${r.topLayer.padding[e].right};
        border-width: ${r.topLayer.stroke.width};
        border-style: ${r.topLayer.stroke.style};
        border-color: ${r.topLayer.stroke.color[e].base};
        border-radius: ${r.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${r.topLayer.animationDuration}ms;

        ${v}:not(:disabled):hover && {
          color: ${r.topLayer.color[e].hover};
          background: ${r.topLayer.backgroundColor[e].hover};
          transform: translateY(${r.topLayer.translateY[e].hover});
        }

        ${v}:not(:disabled):active && {
          color: ${r.topLayer.color[e].active};
          background: ${r.topLayer.backgroundColor[e].active};
          transform: translateY(${r.topLayer.translateY[e].active});
        }
      `,e==="secondary"&&i`
          ${v}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[e].hover};
          }

          ${v}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[e].active};
          }
        `,o&&i`
          color: ${r.topLayer.color[e].active};
          border-color: ${r.topLayer.stroke.color[e].active};
          background: ${r.topLayer.backgroundColor[e].active};
          transform: translateY(${r.topLayer.translateY[e].active});

          ${v}:not(:disabled):hover && {
            color: ${r.topLayer.color[e].active};
            border-color: ${r.topLayer.stroke.color[e].active};
            background: ${r.topLayer.backgroundColor[e].active};
            transform: translateY(
              ${r.topLayer.translateY[e].active}
            );
          }

          ${v}:not(:disabled):active && {
            color: ${r.topLayer.color[e].active};
            border-color: ${r.topLayer.stroke.color[e].active};
            background: ${r.topLayer.backgroundColor[e].active};
            transform: translateY(
              ${r.topLayer.translateY[e].active}
            );
          }

          ${v}:not(:disabled):focus-visible && {
            border-radius: ${r.topLayer.stroke.radius};
            outline-width: ${r.focusRing.width};
            outline-style: ${r.focusRing.style};
            outline-color: ${r.focusRing.color[e]};
            outline-offset: ${r.focusRing.offset};
          }
        `]}}
`,ft=a.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=d(),{button:r}=t,{shadow:n}=r.bottomLayer;return[i`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[e].base};
        box-shadow: 0px ${n.blur} ${n.offsetY} ${n.color};

        ${v}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[e].hover};
        }

        ${v}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;
        }
      `,o&&i`
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;

          ${v}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }

          ${v}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }
        `]}}
`,to=p.forwardRef((e,o)=>{const{variant:t,children:r,testID:n,type:l,isLoading:c,fullWidth:u,...h}=e;return s.jsxs(v,{...h,ref:o,$variant:t,$isLoading:c,$fullWidth:u,"data-testid":n,type:l||"button",children:[s.jsx(ft,{$variant:t,$isLoading:c}),s.jsx($t,{$variant:t,$isLoading:c,children:r})]})});to.displayName="ButtonBase";var kt=to,mt=To`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,vt=a.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:e,$color:o})=>i`
    color: ${o};
    width: ${e};
    height: ${e};
  `}
`,yt=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:e})=>{const{tokens:{spinner:o}}=d();return i`
      border: ${e} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,F=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${mt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:e,$borderWidth:o})=>i`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(e+1)}s;
    `}
`,eo=p.memo(e=>{const{testID:o="spinner"}=e,{tokens:{spinner:t}}=d();let r,n;if("variant"in e){const u=t.variants[e.variant];u&&([r,n]=[u.color,u.size])}"size"in e&&e.size?n=e.size:n||(n=t.variants.default.size),"color"in e&&e.color?r=e.color:r||(r=t.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(n)/parseInt(t.borderRatio))}px`};return s.jsxs(vt,{$color:r,$size:n,"data-testid":o,children:[s.jsx(yt,{...c}),s.jsx(F,{$index:0,...c}),s.jsx(F,{$index:1,...c}),s.jsx(F,{$index:2,...c})]})});eo.displayName="Spinner";var wt=eo,xt=p.forwardRef((e,o)=>{const{text:t,variant:r="primary",startIcon:n,isLoading:l,testID:c="button",...u}=e,{tokens:h}=d(),{button:b}=h,g={"aria-disabled":l,"aria-label":l?"Loading":void 0};return s.jsx(kt,{...u,...g,ref:o,variant:r,isLoading:l,testID:c,children:s.jsxs(pt,{children:[n&&s.jsx(ht,{$isLoading:l,children:n}),s.jsx(bt,{$isLoading:l,children:s.jsx(f,{variant:b.topLayer.text.typography.variant,fontFamily:b.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:t})}),l&&s.jsx(gt,{children:s.jsx(wt,{variant:Co.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});xt.displayName="Button";a.fieldset`
  ${({$variant:e})=>{const{tokens:o}=d(),{buttonGroup:t,breakpoint:r}=o;return[i`
        all: unset;
        display: flex;
        gap: ${t.items.gap};
        width: 100%;
        max-width: ${t.maxWidth[e]};
      `,e==="center"&&i`
          justify-content: center;
        `,e==="stacked"&&i`
          flex-direction: column;

          @media (min-width: ${r.mobile}) {
            display: inline-flex;
          }
        `]}}
`;a.label`
  ${({$hasError:e,$fullWidth:o,$textAlign:t})=>{const{tokens:r}=d(),{buttonAlt:n}=r;return[i`
        display: inline-flex;
        align-items: center;
        border-width: ${n.stroke.width.base};
        border-style: ${n.stroke.style};
        border-color: ${n.stroke.color.base};
        border-radius: ${n.radius};
        min-width: ${n.minWidth};
        min-height: ${n.minHeight.lg};
        padding-top: ${n.padding.top};
        padding-left: ${n.padding.left};
        padding-right: ${n.padding.right};
        padding-bottom: ${n.padding.bottom};
        color: ${n.color.base};
        background: ${n.backgroundColor.base};
        cursor: pointer;

        &:has(:focus-visible) {
          outline-width: ${n.focusRing.width};
          outline-style: ${n.focusRing.style};
          outline-color: ${n.focusRing.color};
          outline-offset: ${n.focusRing.offset};
        }

        &:hover {
          color: ${n.color.hover};
          background: ${n.backgroundColor.hover};
        }

        &:has(:checked) {
          border-color: ${n.stroke.color.active};
          color: ${n.color.active};
          background: ${n.backgroundColor.active};
        }
      `,o&&i`
          width: 100%;
        `,t==="center"&&i`
          text-align: center;
          justify-content: center;
        `,e&&i`
          border-width: ${n.stroke.width.error};
          border-color: ${n.stroke.color.error};
        `]}}
`;a(f)`
  word-break: break-word;
`;var Ct=a.div`
  ${({$gap:e="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${e};
  `}
`;function It(e){const{alert:o,gap:t,children:r}=e;return s.jsxs(Ct,{$gap:t,children:[r,o&&o]})}var N=It,Rt=a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{inlineAlert:t}=o;return i`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${t.gap};
      color: ${t.color[e]};

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
      }
    `}}
`,Tt=a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{inlineAlert:t}=o,r=$(t.iconWrapper.height);return i`
      display: grid;
      place-content: center;
      height: ${r};

      & [data-primary-color] {
        color: ${t.icon.primaryColor[e]};
      }

      & [data-secondary-color] {
        color: ${t.icon.secondaryColor[e]};
      }
    `}}
`;function Lt(e){const{severity:o,children:t,id:r,testID:n="inline-alert"}=e,l={error:"alert",warning:"alert",success:"status",info:"status"},c={error:s.jsx(_o,{"aria-hidden":"true"}),warning:s.jsx(Fo,{"aria-hidden":"true"}),success:s.jsx(zo,{"aria-hidden":"true"}),info:s.jsx(So,{"aria-hidden":"true"})};return s.jsxs(Rt,{id:r,role:l[o],$severity:o,"data-testid":n,children:[s.jsx(Tt,{$severity:o,children:c[o]}),s.jsx(f,{color:"inherit",children:t})]})}var E=Lt,jt=(...e)=>e.filter(o=>o).join()||void 0,O=(e,o,t)=>{var c;const r=o.alertProps&&o.alertProps.severity!=="error"?e:void 0,n=((c=o.alertProps)==null?void 0:c.severity)==="error"?e:void 0,l=o["aria-describedby"]||void 0;return{"aria-describedby":jt(r,l,t),"aria-invalid":n?"true":void 0,"aria-errormessage":n}};a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{buttonTabs:t}=o;return[i`
        display: flex;
        gap: ${t.items.gap};
      `,e==="center"&&i`
          justify-content: center;
        `]}}
`;a.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{buttonTabs:t}=o;return i`
      display: ${e?"block":"none"};

      &:focus-visible {
        position: relative;
        z-index: 1;
        outline-width: ${t.panel.focusRing.width};
        outline-style: ${t.panel.focusRing.style};
        outline-color: ${t.panel.focusRing.color};
      }
    `}}
`;p.createContext({});var Bt=a.label`
  ${({$isActive:e,$fullWidth:o,$textAlign:t})=>{const{tokens:r}=d(),{buttonAlt:n}=r;return[i`
        display: inline-flex;
        align-items: center;
        border-width: ${n.stroke.width.base};
        border-style: ${n.stroke.style};
        border-color: ${n.stroke.color.base};
        border-radius: ${n.radius};
        min-width: ${n.minWidth};
        min-height: ${n.minHeight.md};
        padding-top: ${n.padding.top};
        padding-left: ${n.padding.left};
        padding-right: ${n.padding.right};
        padding-bottom: ${n.padding.bottom};
        color: ${n.color.base};
        background: ${n.backgroundColor.base};
        cursor: pointer;

        &:has(:focus-visible) {
          outline-width: ${n.focusRing.width};
          outline-style: ${n.focusRing.style};
          outline-color: ${n.focusRing.color};
          outline-offset: ${n.focusRing.offset};
        }

        &:hover {
          color: ${n.color.hover};
          background: ${n.backgroundColor.hover};
        }
      `,e&&i`
          border-color: ${n.stroke.color.active};
          color: ${n.color.active};
          background: ${n.backgroundColor.active};

          &:hover {
            border-color: ${n.stroke.color.active};
            color: ${n.color.active};
            background: ${n.backgroundColor.active};
          }
        `,o&&i`
          width: 100%;
        `,t==="center"&&i`
          text-align: center;
          justify-content: center;
        `]}}
`,At=p.forwardRef((e,o)=>{const{id:t,label:r,isActive:n,fullWidth:l=!1,textAlign:c=X.DEFAULT_TEXT_ALIGN,typographyVariant:u=X.DEFAULT_TYPOGRAPHY_VARIANT,testID:h="button-tabs-item",...b}=e,{tokens:g}=d(),{buttonAlt:m}=g;return s.jsxs(Bt,{$isActive:n,$fullWidth:l,$textAlign:c,"data-testid":h,children:[s.jsx(et,{children:s.jsx("button",{...b,ref:o,type:"button",role:"tab",id:t,tabIndex:n?void 0:-1,"aria-label":r,"aria-selected":n,"aria-controls":`${t}-panel`})}),s.jsx(f,{color:"inherit",variant:u,fontFamily:m.typography.fontFamily,children:r})]})});At.displayName="ButtonTabsItem";var Dt=a.label`
  ${()=>{const{tokens:e}=d(),{inputLabelRight:o}=e;return i`
      display: grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      user-select: none;
      cursor: pointer;
      font-size: 0;

      &:has(:disabled) {
        cursor: not-allowed;
      }

      &:has(:focus-visible) {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
        border-radius: ${o.focusRing.radius};
      }
    `}}
`,Pt=a.div`
  ${()=>{const{tokens:e}=d(),{inputLabelRight:o}=e;return i`
      display: grid;
      place-items: center;
      height: ${$(o.inputWrapper.height)};
    `}}
`,_t=a.div`
  ${()=>{const{tokens:e}=d(),{inputLabelRight:o}=e;return i`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function Ft(e){const{label:o,children:t,...r}=e,{tokens:n}=d(),{inputLabelRight:l}=n;return s.jsxs(Dt,{...r,children:[s.jsx(Pt,{children:t}),o&&s.jsx(_t,{children:s.jsx(f,{component:"span",color:"inherit",variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:o})})]})}var ro=Ft,M=a.div`
  ${({$hasError:e})=>{const{tokens:o}=d(),{checkbox:t}=o;return[i`
        position: relative;
        display: grid;
        place-items: center;
        width: ${t.width};
        height: ${t.height};
        border-radius: ${t.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          cursor: not-allowed;
        }

        &:has(input:not(:checked)) {
          background: ${t.backgroundColor.unchecked.base};
          outline-width: ${t.stroke.width.unchecked.base};
          outline-color: ${t.stroke.color.base};
        }

        &:hover:has(input:not(:disabled, :checked, :indeterminate)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled, :checked, :indeterminate)
          )
          && {
          background: ${t.backgroundColor.unchecked.hover};
          outline-width: ${t.stroke.width.unchecked.hover};
          outline-color: ${t.stroke.color.hover};
        }

        &:has(input:not(:checked):disabled) {
          background: ${t.backgroundColor.unchecked.disabled};
          outline-width: ${t.stroke.width.unchecked.disabled};
          outline-color: ${t.stroke.color.disabled};
        }

        &:has(input:checked) {
          background: ${t.backgroundColor.checked.base};
          outline-width: ${t.stroke.width.checked.base};
          outline-color: ${t.stroke.color.base};
        }

        &:hover:has(input:not(:disabled):checked),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${t.backgroundColor.checked.hover};
          outline-width: ${t.stroke.width.checked.hover};
          outline-color: ${t.stroke.color.hover};
        }

        &:has(input:checked:disabled) {
          background: ${t.backgroundColor.checked.disabled};
          outline-width: ${t.stroke.width.checked.disabled};
          outline-color: ${t.stroke.color.disabled};
        }

        &:has(input:indeterminate) {
          background: ${t.backgroundColor.checked.base};
          outline-width: ${t.stroke.width.checked.base};
          outline-color: ${t.stroke.color.base};
        }

        &:hover:has(input:not(:disabled):indeterminate),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):indeterminate
          )
          && {
          background: ${t.backgroundColor.checked.hover};
          outline-width: ${t.stroke.width.checked.hover};
          outline-color: ${t.stroke.color.hover};
        }

        &:has(input:indeterminate:disabled) {
          background: ${t.backgroundColor.checked.disabled};
          outline-width: ${t.stroke.width.checked.disabled};
          outline-color: ${t.stroke.color.disabled};
        }
      `,e&&i`
          &:has(input:not(:checked)) {
            outline-width: ${t.stroke.width.unchecked.error};
            outline-color: ${t.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :checked, :indeterminate)),
          :is(label:hover, [role="option"][data-hovered]):has(
              input:not(:disabled, :checked, :indeterminate)
            )
            && {
            outline-width: ${t.stroke.width.unchecked.hover};
            outline-color: ${t.stroke.color.hover};
          }

          &:has(input:checked) {
            outline-width: ${t.stroke.width.checked.error};
            outline-color: ${t.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :indeterminate):checked),
          :is(label:hover, [role="option"][data-hovered]):has(
              input:not(:disabled, :indeterminate):checked
            )
            && {
            outline-width: ${t.stroke.width.checked.hover};
            outline-color: ${t.stroke.color.hover};
          }
        `]}}
`,zt=a.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`,St=a(Ao)`
  ${()=>{const{tokens:e}=d(),{checkbox:o}=e;return[i`
        display: none;

        ${M}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,Wt=a(S)`
  ${()=>{const{tokens:e}=d(),{checkbox:o}=e;return[i`
        display: none;

        ${M}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function Ht(e,o){p.useEffect(()=>{e.current&&(e.current.indeterminate=!!o)},[o])}var no=p.forwardRef((e,o)=>{const{hasError:t,isIndeterminate:r,testID:n="checkbox",...l}=e,c=p.useRef(null);Ht(c,r);const u=W([c,o]);function h(b){var g;b.target.indeterminate=!!r,(g=l.onChange)==null||g.call(l,b)}return s.jsxs(M,{$hasError:t,children:[s.jsx(zt,{...l,ref:u,type:"checkbox",onChange:h,"data-testid":n}),s.jsx(St,{}),s.jsx(Wt,{})]})});no.displayName="CheckboxBase";var Nt=no,Et=p.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...n}=e,{testID:l="checkbox"}=n,c=p.useId(),u=O(c,e);return s.jsx(N,{alert:r?s.jsx(E,{id:c,...r,testID:`${l}-alert`}):void 0,children:s.jsx(ro,{...t,children:s.jsx(Nt,{...n,...u,ref:o})})})});Et.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return i`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;a(f).attrs({component:"legend"})`
  padding: 0;
`;var Ot=a.ul`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return i`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(Ot)`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return i`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return i`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var Mt=a.div`
  ${({$labelText:e})=>{const{tokens:o}=d(),{inputLabelTop:t}=o;return[i`
        width: 100%;
        display: grid;
      `,e&&i`
          gap: ${t.gap};
        `]}}
`;function Yt({initialOpen:e=!1,placement:o=L.DEFAULT_POSITION,offset:t=L.DEFAULT_OFFSET,maxWidth:r,open:n,onOpenChange:l}={}){const[c,u]=p.useState(e),h=!!l,b=n??c,g=l??u,m=p.useRef(null),k=No({placement:o,open:b,onOpenChange:g,whileElementsMounted:Eo,middleware:[Oo(t),Mo({padding:L.FLIP_PADDING}),Yo({padding:L.SHIFT_PADDING}),Vo({element:m,padding:L.ARROW_PADDING})]}),I=Uo(k.context,{handleClose:Go(),enabled:n===void 0}),T=Xo(k.context,{enabled:n===void 0}),j=qo(k.context),B=Jo(k.context,{role:"tooltip"}),A=Ko([I,T,j,B]);return p.useMemo(()=>({open:b,setOpen:g,isControlled:h,maxWidth:r,arrowRef:m,floatingData:k,interactionsData:A}),[b,g,h,r,m,k,A])}var io=p.createContext(null),Y=()=>{const e=p.useContext(io);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function Vt(e){const{children:o,...t}=e,r=Yt(t);return s.jsx(io.Provider,{value:r,children:o})}var Ut=Vt,Gt=a.div`
  ${({$variant:e,$typographyVariant:o})=>{const{tokens:t}=d(),{iconButton:r,typography:n,spacing:l}=t;return i`
      width: ${r.inner.icon.width[e]};
      height: ${$(n.lineHeight[o])};
      margin-left: ${l.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,x=a.button`
  ${({$isControlled:e,$variant:o})=>{const{tokens:t}=d(),{iconButton:r}=t;return[i`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${r.padding[o]};
      `,e&&i`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,Xt=a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return i`
      display: grid;
      place-items: center;
      padding: ${t.inner.padding[e]};
      border-radius: ${t.inner.radius[e]};
      background: ${t.inner.backgroundColor[e].base};

      ${x}:focus-visible && {
        outline-width: ${t.inner.focusRing.width};
        outline-style: ${t.inner.focusRing.style};
        outline-color: ${t.inner.focusRing.color};
        outline-offset: ${t.inner.focusRing.offset.default};
      }
    `}}
`,qt=a(Do)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:r}=d(),{iconButton:n,tooltipIconButton:l}=r;return[i`
        width: ${n.inner.icon.width[t]};
        height: ${n.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${l.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${l.icon.secondaryColor.base};
        }
      `,!e&&i`
          ${x}:hover &&,
          ${x}:focus-visible && {
            display: none;
          }
        `,!o&&i`
          ${x}:hover && {
            & [data-primary-color] {
              color: ${l.icon.primaryColor.hover};
            }
          }
        `,o&&i`
          display: none;
        `]}}
`,Jt=a(Po)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:r}=d(),{iconButton:n,tooltipIconButton:l}=r;return[i`
        display: none;
        width: ${n.inner.icon.width[t]};
        height: ${n.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${l.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${l.iconFilled.secondaryColor.base};
        }
      `,!e&&i`
          ${x}:hover &&,
          ${x}:focus-visible && {
            display: block;
          }
        `,o&&i`
          display: block;
        `,e&&o&&i`
          ${x}:hover && {
            & [data-primary-color] {
              color: ${l.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,ao=p.forwardRef((e,o)=>{const{variant:t=Q.DEFAULT_VARIANT,testID:r="tooltip-icon-button",...n}=e,{open:l,isControlled:c}=Y();return s.jsx(x,{...n,ref:o,"aria-expanded":l?"true":void 0,$isControlled:c,$variant:t,"data-testid":r,children:s.jsxs(Xt,{$variant:t,children:[s.jsx(qt,{$isControlled:c,$isOpen:l,$variant:t}),s.jsx(Jt,{$isControlled:c,$isOpen:l,$variant:t})]})})});ao.displayName="TooltipIconButton";var so=ao,Kt=p.forwardRef((e,o)=>{const{variant:t=Q.DEFAULT_VARIANT,typographyVariant:r=P.DEFAULT_VARIANT,...n}=e;return s.jsx(Gt,{$variant:t,$typographyVariant:r,children:s.jsx(so,{ref:o,variant:t,...n})})});so.displayName="InlineTooltipIconButton";var Qt=Kt,Zt=a.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:t}=d(),{tooltip:r}=t;return[i`
        max-width: ${o?`${o}px`:r.maxWidth};
        border-radius: ${r.radius};
        padding-top: ${r.padding.top};
        padding-bottom: ${r.padding.bottom};
        padding-left: ${r.padding.left};
        padding-right: ${r.padding.right.default};
        background: ${r.backgroundColor};
        z-index: ${r.zIndex};
      `,e&&i`
          padding-right: ${r.padding.right.large};
        `]}}
`,oe=a(Ho)`
  pointer-events: auto !important;
`,te=a.button`
  ${()=>{const{tokens:e}=d(),{tooltip:o}=e;return i`
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
`,lo=p.forwardRef((e,o)=>{const{children:t,...r}=e,{tokens:n}=d(),{tooltip:l}=n,{portalElement:c}=ut(),{open:u,setOpen:h,isControlled:b,maxWidth:g,arrowRef:m,floatingData:k,interactionsData:I}=Y(),T=W([k.refs.setFloating,o]);return u?s.jsx(Wo,{root:c,children:s.jsxs(Zt,{ref:T,style:k.floatingStyles,...I.getFloatingProps(r),$isControlled:b,$maxWidth:g,children:[s.jsx(oe,{ref:m,context:k.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),b&&s.jsx(te,{onClick:()=>h(!1),"aria-label":"Close tooltip",children:s.jsx(Lo,{})}),s.jsx(f,{color:l.color,variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:t})]})}):null});lo.displayName="TooltipContent";var ee=lo,co=p.forwardRef((e,o)=>{const{children:t,...r}=e,{open:n,floatingData:l,interactionsData:c}=Y(),u=t.ref,h=W([l.refs.setReference,u,o]);return p.isValidElement(t)?p.cloneElement(t,c.getReferenceProps({ref:h,...r,...t.props,"data-state":n?"open":"closed"})):null});co.displayName="TooltipTrigger";var re=co;function ne(e){const{iconButtonProps:o,otherIconButtonProps:t,contentProps:r}=e,[n,l]=p.useState(!1);function c(){l(!n)}return s.jsxs(Ut,{open:n,onOpenChange:l,children:[s.jsx(re,{children:s.jsx(Qt,{...o,...t,onClick:c})}),s.jsx(ee,{...r})]})}var uo=ne;function po(e){const{labelElement:o,labelText:t,labelHint:r,labelHintID:n,labelHintTooltipProps:l,children:c}=e,{tokens:u}=d(),{inputLabelTop:h}=u;return s.jsxs(Mt,{$labelText:t,children:[s.jsxs("div",{children:[o,r&&s.jsxs(f,{id:n,component:"div",color:h.labelHint.color.base,variant:h.labelHint.typography.variant,fontFamily:h.labelHint.typography.fontFamily,children:[r,l&&s.jsx(uo,{...l,otherIconButtonProps:{variant:"default20",typographyVariant:h.labelHint.typography.variant}})]})]}),s.jsx("div",{children:c})]})}po.Label=function(o){const{text:t,component:r="span"}=o,{tokens:n}=d(),{inputLabelTop:l}=n;return s.jsx(f,{component:r,color:l.label.color.base,variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:t})};var q=po;function ie(e){const{label:o,labelTooltipProps:t,labelHint:r,labelHintID:n,labelHintTooltipProps:l,children:c,...u}=e,{tokens:h}=d(),{inputLabelTop:b}=h;return s.jsx(q,{labelElement:s.jsxs("div",{children:[s.jsx("label",{...u,children:o&&s.jsx(q.Label,{text:o})}),t&&s.jsx(uo,{...t,otherIconButtonProps:{variant:"default",typographyVariant:b.label.typography.variant}})]}),labelText:o,labelHint:r,labelHintID:n,labelHintTooltipProps:l,children:c})}var ho=ie,ae=a(ho)`
  ${()=>i`
      width: 100%;
    `}
`,de=a.div`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return i`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`,bo=a.input`
  ${()=>{const{tokens:e}=d(),{textInput:o,typography:t}=e,r=o.typography.variant,n=$(t.fontSize[r]),l=$(t.lineHeight[r]);return i`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${t.fontFamily[r]};
      font-size: ${n};
      line-height: ${l};

      &:read-only {
        color: ${o.color.readOnly};
      }
      &:disabled {
        color: ${o.color.disabled};
      }
    `}}
`,se=a(f)`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return i`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`,le=a.div`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return i`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`;a(bo)`
  &:disabled {
    cursor: not-allowed;
  }
`;a.li`
  ${({$withSeparator:e})=>{const{tokens:o}=d(),{select:t}=o;return[i`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `,e&&i`
          border-bottom-style: 2px;
          border-bottom-style: ${t.menu.separator.style};
          border-bottom-color: ${t.menu.separator.color};
        `]}}
`;a.div`
  ${({$withIcon:e,$isSelected:o,$isHighlighted:t})=>{const{tokens:r}=d(),{select:n}=r;return[i`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${n.menu.option.inner.gap};
        color: ${n.menu.option.inner.color.base};
        padding-top: ${n.menu.option.inner.paddingTop};
        padding-bottom: ${n.menu.option.inner.paddingBottom};
        padding-left: ${n.menu.option.inner.paddingLeft};
        padding-right: ${n.menu.option.inner.paddingRight};
        border-radius: ${n.menu.option.inner.radius};
        background: ${n.menu.option.inner.backgroundColor.base};
        outline-width: ${n.menu.option.inner.stroke.width};
        outline-style: ${n.menu.option.inner.stroke.style};
        outline-color: ${n.menu.option.inner.stroke.color.base};
        outline-offset: ${n.menu.option.inner.stroke.offset};
      `,e&&i`
          grid-template-columns: auto auto 1fr;
        `,o&&i`
          background: ${n.menu.option.inner.backgroundColor.active};
          outline-color: ${n.menu.option.inner.stroke.color.active};
        `,t&&i`
          background: ${n.menu.option.inner.backgroundColor.hover};
          outline-color: ${n.menu.option.inner.stroke.color.hover};
        `]}}
`;a(S)`
  ${({$isSelected:e})=>{const{tokens:o}=d(),{select:t}=o;return[i`
        visibility: ${e?"visible":"hidden"};
        width: ${t.menu.option.inner.icon.width};
        height: ${t.menu.option.inner.icon.height};
        color: ${t.menu.option.inner.icon.color};
      `]}}
`;a.div`
  display: grid;
  place-items: center;
  margin-right: 4px;
  min-width: 20px;
  max-width: 30px;
  height: 20px;

  svg {
    width: auto;
    height: 100%;
  }
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[i`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;a.div`
  ${({$isOpen:e,$hasError:o,$isDisabled:t})=>{const{tokens:r}=d(),{select:n}=r;return[i`
        display: grid;
        background: ${n.button.backgroundColor.base};
        padding-top: ${n.button.paddingTop};
        padding-bottom: ${n.button.paddingBottom};
        padding-left: ${n.button.paddingLeft};
        padding-right: ${n.button.paddingRight};
        border-radius: ${n.button.stroke.radius};
        outline-width: ${n.button.stroke.width.base};
        outline-style: ${n.button.stroke.style};
        outline-color: ${n.button.stroke.color.base};
        outline-offset: ${n.button.stroke.offset.base};

        svg {
          color: ${n.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${n.button.stroke.width.hover};
          outline-color: ${n.button.stroke.color.hover};
          outline-offset: ${n.button.stroke.offset.hover};

          svg {
            color: ${n.button.icon.color.hover};
          }
        }
      `,o&&i`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.error};
            outline-color: ${n.button.stroke.color.error};
            outline-offset: ${n.button.stroke.offset.error};
          }
        `,e&&i`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.active};
            outline-color: ${n.button.stroke.color.active};
            outline-offset: ${n.button.stroke.offset.active};

            svg {
              color: ${n.button.icon.color.active};
            }
          }
        `,t&&i`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.disabled};
            outline-color: ${n.button.stroke.color.disabled};
            outline-offset: ${n.button.stroke.offset.disabled};

            svg {
              color: ${n.button.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return i`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;a.button`
  all: unset;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return i`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var ce=a(oo)`
  rotate: 0deg;
`;a(ce)`
  rotate: 180deg;
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{select:t}=o;return i`
      display: ${e?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${t.menu.radius};
      border-width: ${t.menu.stroke.width};
      border-style: ${t.menu.stroke.style};
      border-color: ${t.menu.stroke.color};
      box-shadow: 0px 2px 2px ${t.menu.shadow.outer.color};
      z-index: ${t.menu.zIndex};
    `}}
`;a.ul`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return i`
      all: unset;
      display: grid;
      gap: ${o.menu.separator.width};
      background: ${o.menu.separator.color};
    `}}
`;a.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;var go=a.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`;a(go)`
  ${({$visible:e})=>{const{tokens:o}=d(),{scrollShadowContainer:t}=o;return[i`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,e&&i`
          transform: translateY(0px);
        `]}}
`;a(go)`
  ${({$visible:e})=>{const{tokens:o}=d(),{scrollShadowContainer:t}=o;return[i`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,e&&i`
          transform: translateY(0px);
        `]}}
`;a.div`
  ${()=>{const{tokens:{scrollShadowContainer:e,scrollBar:{thumbColor:o,trackColor:t}}}=d();return i`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${o} ${t};

      &:focus-visible {
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`;var y=a.div`
  ${()=>{const{tokens:e}=d(),{outerField:o}=e;return i`
      width: 100%;

      outline-color: ${o.focusRing.color};
      outline-width: ${o.focusRing.width.base};
      outline-style: ${o.focusRing.style};
      outline-offset: ${o.focusRing.offset.base};
      border-radius: ${o.radius};

      &:has(input:not(:read-only):focus),
      &:has(textarea:not(:read-only):focus) {
        outline-width: ${o.focusRing.width.focus};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,ue=a.div`
  ${({$hasError:e})=>{const{tokens:o}=d(),{outerField:t}=o;return[i`
        position: relative;
        width: 100%;
        background: ${t.backgroundColor};

        outline-color: ${t.stroke.color.base};
        outline-width: ${t.stroke.width.base};
        outline-offset: ${t.stroke.offset.base};
        outline-style: ${t.stroke.style};
        border-radius: ${t.radius};

        ${y}:has(input:not(:disabled):not(:read-only)):hover &&,
        ${y}:has(textarea:not(:disabled):not(:read-only)):hover && {
          outline-color: ${t.stroke.color.hover};
          outline-width: ${t.stroke.width.hover};
          outline-offset: ${t.stroke.offset.hover};
        }

        ${y}:has(input:read-only) &&,
        ${y}:has(textarea:read-only) && {
          outline-color: ${t.stroke.color.readOnly};
        }

        ${y}:has(input:focus:not(:read-only)) &&,
        ${y}:has(textarea:focus:not(:read-only)) && {
          outline-color: ${t.stroke.color.focus};
          outline-width: ${t.stroke.width.focus};
          outline-offset: ${t.stroke.offset.focus};
        }
      `,e&&i`
          &&,
          ${y}:has(input:read-only) &&,
          ${y}:has(input:disabled) &&,
          ${y}:has(textarea:read-only) &&,
          ${y}:has(textarea:disabled) && {
            outline-width: ${t.stroke.width.error};
            outline-color: ${t.stroke.color.error};
            outline-offset: ${t.stroke.offset.error};
          }
        `]}}
`;function pe(e){const{hasError:o,children:t}=e;return s.jsx(y,{children:s.jsx(ue,{$hasError:o,children:t})})}var he=pe,be=a(f)`
  ${()=>{const{tokens:e}=d(),{charactersCounter:o}=e;return i`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function ge(e){const{length:o,maxLength:t,testID:r}=e,{tokens:n}=d(),{charactersCounter:l}=n,c=Math.max(0,t-o);return s.jsx(be,{variant:l.typography.variant,fontFamily:l.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}var $e=p.memo(ge),fe=p.forwardRef((e,o)=>{var U;const{id:t,hasError:r,prefix:n,icon:l,onChange:c,testID:u="input",labelProps:h,alertProps:b,...g}=e,m=p.useId(),k=p.useId(),I=p.useId(),{labelHint:T}=h,{maxLength:j}=g,{tokens:{textInput:B}}=d(),[A,yo]=p.useState(((U=g.value||g.defaultValue)==null?void 0:U.length)||0),wo=O(I,e,T?k:void 0),xo=p.useCallback(G=>{yo(G.target.value.length),c==null||c(G)},[c]);return s.jsxs(N,{gap:g.maxLength?"4px":"8px",alert:b?s.jsx(E,{id:I,...b,testID:`${u}-alert`}):void 0,children:[s.jsx(ae,{...h,labelHintID:k,htmlFor:t||m,"data-testid":`${u}-label`,children:s.jsx(he,{hasError:r,children:s.jsxs(de,{children:[n?s.jsx(se,{variant:B.prefix.typography.variant,fontFamily:B.prefix.typography.fontFamily,testID:`${u}-prefix`,children:n}):void 0,s.jsx(bo,{...g,...wo,ref:o,id:t||m,onChange:xo,"data-testid":u}),l?s.jsx(le,{"data-testid":`${u}-icon-wrapper`,children:l}):void 0]})})}),j?s.jsx($e,{length:A,maxLength:j,testID:`${u}-characters-counter`}):void 0]})});fe.displayName="TextInput";a.div`
  ${()=>{const{tokens:e}=d(),{datePicker:o}=e;return i`
      width: 100%;

      .react-aria-Group {
        display: flex;
        align-items: center;
        gap: ${o.gap};
        min-height: ${o.input.minHeight};
        background: ${o.input.backgroundColor};
        padding-left: ${o.input.padding.left};
        padding-right: ${o.input.padding.right};
        border-radius: ${o.input.radius};
        outline-width: ${o.input.stroke.width.base};
        outline-style: ${o.input.stroke.style};
        outline-color: ${o.input.stroke.color.base};
        outline-offset: ${o.input.stroke.offset.base};
      }

      .react-aria-DatePicker {
        &[data-invalid] .react-aria-Group {
          outline-width: ${o.input.stroke.width.error};
          outline-color: ${o.input.stroke.color.error};
          outline-offset: ${o.input.stroke.offset.error};
        }

        &[data-focus-within] .react-aria-Group {
          outline-width: ${o.input.stroke.width.focus};
          outline-color: ${o.input.stroke.color.focus};
          outline-offset: ${o.input.stroke.offset.focus};
        }
      }

      .react-aria-DateInput {
        display: flex;
        flex: 1;
      }

      .react-aria-DateSegment {
        padding-top: ${o.input.segment.padding.top};
        padding-left: ${o.input.segment.padding.left};
        padding-right: ${o.input.segment.padding.right};
        padding-bottom: ${o.input.segment.padding.bottom};

        &[inputmode="numeric"] {
          border-radius: ${o.input.segment.radius};
          color: ${o.input.segment.color.base};
          caret-color: transparent;
          outline: none;

          &[data-placeholder] {
            text-transform: uppercase;
            color: ${o.input.segment.placeholderColor};
          }

          &[data-focused] {
            color: ${o.input.segment.color.focus};
            background: ${o.input.segment.backgroundColor.focus};
          }

          &[data-hovered] {
            color: ${o.input.segment.color.hover};
            background: ${o.input.segment.backgroundColor.hover};
          }
        }

        &[data-type="literal"] {
          color: ${o.input.segment.separatorColor};
        }
      }

      .react-aria-Button {
        all: unset;
        width: max-content;
        height: max-content;
        border-radius: ${o.input.button.radius};
        padding: ${o.input.button.padding};
        background: ${o.input.button.backgroundColor.base};
        cursor: pointer;

        svg {
          display: block;
          width: ${o.input.button.icon.width};
          height: ${o.input.button.icon.height};
          color: ${o.input.button.icon.color.base};
        }

        &[data-pressed],
        &[data-focused] {
          background: ${o.input.button.backgroundColor.focus};

          svg {
            color: ${o.input.button.icon.color.focus};
          }
        }

        &[data-hovered] {
          background: ${o.input.button.backgroundColor.hover};

          svg {
            color: ${o.input.button.icon.color.hover};
          }
        }
      }
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{datePicker:o}=e;return i`
      .react-aria-Calendar {
        display: grid;
        gap: ${o.calendar.gap};
        cursor: default;

        max-width: 100%;
        width: fit-content;
        padding: ${o.calendar.padding};
        background: ${o.calendar.backgroundColor};
        border-radius: ${o.calendar.radius};
        border-width: ${o.calendar.stroke.width};
        border-style: ${o.calendar.stroke.style};
        border-color: ${o.calendar.stroke.color};

        header {
          display: grid;
          place-items: center;
          grid-template-columns: auto 1fr auto;
          margin-left: ${o.calendar.header.margin.left};
          margin-right: ${o.calendar.header.margin.right};
        }

        .react-aria-Button {
          all: unset;
          width: max-content;
          height: max-content;
          border-radius: ${o.calendar.button.radius};
          padding-top: ${o.calendar.button.padding.top};
          padding-left: ${o.calendar.button.padding.left};
          padding-right: ${o.calendar.button.padding.right};
          padding-bottom: ${o.calendar.button.padding.bottom};
          background: ${o.calendar.button.backgroundColor.base};
          cursor: pointer;

          svg {
            display: block;
            width: ${o.calendar.button.icon.width};
            height: ${o.calendar.button.icon.height};
            color: ${o.calendar.button.icon.color.base};
          }

          &[data-hovered] {
            background: ${o.calendar.button.backgroundColor.hover};

            svg {
              color: ${o.calendar.button.icon.color.hover};
            }
          }

          &[data-pressed] {
            background: ${o.calendar.button.backgroundColor.focus};

            svg {
              color: ${o.calendar.button.icon.color.focus};
            }
          }

          &[data-focus-visible] {
            outline-width: ${o.calendar.button.focusRing.width};
            outline-style: ${o.calendar.button.focusRing.style};
            outline-color: ${o.calendar.button.focusRing.color};
            outline-offset: ${o.calendar.button.focusRing.offset};
          }
        }

        .react-aria-CalendarCell {
          display: grid;
          place-items: center;
          min-width: ${o.calendar.cell.minWidth};
          margin: ${o.calendar.cell.margin};
          color: ${o.calendar.cell.color.base};
          background: ${o.calendar.cell.backgroundColor.base};
          padding: ${o.calendar.cell.padding};
          border-radius: ${o.calendar.cell.radius};
          cursor: pointer;
          outline: none;

          &[data-unavailable] {
            color: ${o.calendar.cell.color.disabled};
            cursor: not-allowed;
          }

          &[data-outside-month] {
            display: none;
          }

          &[data-selected]:not([data-unavailable]) {
            color: ${o.calendar.cell.color.active};
            background: ${o.calendar.cell.backgroundColor.active};
          }

          &[data-hovered]:not([data-unavailable]) {
            color: ${o.calendar.cell.color.hover};
            background: ${o.calendar.cell.backgroundColor.hover};
          }

          &[data-pressed]:not([data-unavailable]) {
            color: ${o.calendar.cell.color.active};
            background: ${o.calendar.cell.backgroundColor.active};
          }

          &[data-focus-visible] {
            outline-width: ${o.calendar.cell.focusRing.width};
            outline-style: ${o.calendar.cell.focusRing.style};
            outline-color: ${o.calendar.cell.focusRing.color};
            outline-offset: ${o.calendar.cell.focusRing.offset};
          }
        }
      }

      z-index: ${o.calendar.zIndex};
    `}}
`;var w=a.button`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return i`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${t.padding[e]};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    `}}
`,ke=a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return[i`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${t.inner.padding[e]};
        border-radius: ${t.inner.radius[e]};
        background: ${t.inner.backgroundColor[e].base};
        opacity: ${t.inner.opacity.base};

        ${w}:disabled && {
          opacity: ${t.inner.opacity.disabled};
        }

        svg {
          display: block;
          width: ${t.inner.icon.width[e]};
          height: ${t.inner.icon.height[e]};
          color: ${t.inner.icon.color.base};
        }

        ${w}:not(:disabled):hover && {
          background: ${t.inner.backgroundColor[e].hover};

          svg {
            color: ${t.inner.icon.color.hover};
          }
        }

        ${w}:not(:disabled):active &&,
        ${w}:not(:disabled)[aria-pressed] &&,
        ${w}:not(:disabled)[aria-expanded] && {
          background: ${t.inner.backgroundColor[e].active};

          svg {
            color: ${t.inner.icon.color.active};
          }
        }

        ${w}:focus-visible && {
          outline-width: ${t.inner.focusRing.width};
          outline-style: ${t.inner.focusRing.style};
          outline-color: ${t.inner.focusRing.color};
          outline-offset: ${t.inner.focusRing.offset[e]};
        }
      `,e==="contained"&&i`
          &:after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: ${t.inner.radius[e]};
            outline-width: ${t.inner.stroke.contained.width};
            outline-style: ${t.inner.stroke.contained.style};
            outline-color: ${t.inner.stroke.contained.color.base};
            outline-offset: ${t.inner.stroke.contained.offset};
          }

          ${w}:not(:disabled):hover &:after {
            outline-color: ${t.inner.stroke.contained.color.hover};
          }

          ${w}:not(:disabled):active &:after {
            outline-color: ${t.inner.stroke.contained.color.active};
          }
        `]}}
`,$o=p.forwardRef((e,o)=>{const{variant:t=Io.DEFAULT_VARIANT,children:r,testID:n="icon-button",...l}=e;return s.jsx(w,{...l,ref:o,$variant:t,"data-testid":n,children:s.jsx(ke,{$variant:t,children:r})})});$o.displayName="IconButton";var me=$o,ve=p.forwardRef((e,o)=>{[e,o]=ot(e,o,Zo);const{buttonProps:t}=Qo(e,o);return s.jsxs(me,{...t,ref:o,children:[e.slot==="previous"&&s.jsx(jo,{}),e.slot==="next"&&s.jsx(Bo,{})]})});ve.displayName="DatePickerIconButton";a.div`
  ${({$padding:e})=>{const{tokens:o}=d(),{menu:t}=o;return i`
      padding: calc(1px * ${e});
      z-index: ${t.zIndex};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return i`
      display: grid;
      overflow: hidden;
      border-radius: ${o.radius};
      border-width: ${o.stroke.width};
      border-style: ${o.stroke.style};
      border-color: ${o.stroke.color};
      box-shadow: 0px 2px 2px ${o.shadow.outer.color};
    `}}
`;a.div`
  max-height: calc(1px * ${Ro.MAX_LIST_HEIGHT});
`;a.ul`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return i`
      all: unset;
      display: grid;
      gap: ${o.separator.width};
      background: ${o.separator.color};
      max-width: ${o.maxWidth};
    `}}
`;var J=a.li`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return[i`
        all: unset;
        display: grid;
        padding: ${o.option.padding};
        background: ${o.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return[i`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${o.option.inner.gap};
        color: ${o.option.inner.color.base};
        padding-top: ${o.option.inner.paddingTop};
        padding-bottom: ${o.option.inner.paddingBottom};
        padding-left: ${o.option.inner.paddingRight};
        padding-right: ${o.option.inner.paddingRight};
        border-radius: ${o.option.inner.radius};
        background: ${o.option.inner.backgroundColor.base};
        outline-width: ${o.option.inner.stroke.width};
        outline-style: ${o.option.inner.stroke.style};
        outline-color: ${o.option.inner.stroke.color.base};
        outline-offset: ${o.option.inner.stroke.offset};

        ${J}:hover &&,
        ${J}:focus-visible && {
          background: ${o.option.inner.backgroundColor.hover};
          outline-color: ${o.option.inner.stroke.color.hover};
        }
      `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return[i`
        svg {
          display: block;
          width: ${o.option.inner.icon.width};
          height: ${o.option.inner.icon.height};
        }
      `]}}
`;var ye=a.a`
  ${({$display:e})=>{const{tokens:o}=d(),{link:t}=o;return i`
      all: unset;
      display: ${e};
      color: ${t.color.base};
      cursor: pointer;

      &:hover {
        color: ${t.color.hover};
      }

      &:active {
        color: ${t.color.active};
      }

      &:focus-visible {
        outline-width: ${t.focusRing.width};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset};
        border-radius: ${t.focusRing.radius};
      }
    `}}
`,we=p.forwardRef;function xe(e,o){const{display:t="inline",component:r="a",testID:n="link",...l}=e;return s.jsx(ye,{...l,ref:o,as:r,"data-testid":n,$display:t})}var fo=we(xe),ko=a(fo)``,Ce=a(f)`
  ${({$isUnderlined:e,$isDashed:o})=>{const{tokens:t}=d(),{link:r}=t;return[i`
        background: ${r.backgroundColor.base};

        text-decoration-thickness: ${r.decoration.thickness.base};
        text-underline-offset: ${r.decoration.offset};

        &:hover {
          text-decoration-line: ${r.decoration.line.base};
          text-decoration-thickness: ${r.decoration.thickness.hover};
        }

        &:active {
          background: ${r.backgroundColor.active};
          text-decoration-line: ${r.decoration.line.base};
          text-decoration-thickness: ${r.decoration.thickness.active};
        }

        ${ko}:focus-visible && {
          text-decoration-line: ${r.decoration.line.focus};
        }
      `,e&&i`
          text-decoration-line: ${r.decoration.line.base};
          text-decoration-style: ${r.decoration.style.solid};
        `,e&&o&&i`
          text-decoration-style: ${r.decoration.style.dashed};
        `]}}
`,Ie=p.forwardRef((e,o)=>{const{isUnderlined:t=!0,isDashed:r=!1,variant:n=Z.DEFAULT_VARIANT,children:l,...c}=e,{tokens:u}=d(),{link:h}=u;return s.jsx(ko,{...c,ref:o,children:s.jsx(Ce,{component:"span",color:"inherit",variant:n,fontFamily:h.typography.fontFamily,$isUnderlined:t,$isDashed:r,children:l})})});Ie.displayName="Link";var mo=a(fo)``,z=a.div`
  ${()=>{const{tokens:e}=d(),{link:o}=e;return[i`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,Re=a(f)`
  ${({$isUnderlined:e,$isDashed:o})=>{const{tokens:t}=d(),{link:r}=t;return[i`
        background: ${r.backgroundColor.base};

        text-decoration-thickness: ${r.decoration.thickness.base};
        text-underline-offset: ${r.decoration.offset};

        ${z}:hover && {
          text-decoration-line: ${r.decoration.line.base};
          text-decoration-thickness: ${r.decoration.thickness.hover};
        }

        ${z}:active && {
          background: ${r.backgroundColor.active};
          text-decoration-line: ${r.decoration.line.base};
          text-decoration-thickness: ${r.decoration.thickness.active};
        }

        ${mo}:focus-visible && {
          text-decoration-line: ${r.decoration.line.focus};
        }
      `,e&&i`
          text-decoration-line: ${r.decoration.line.base};
          text-decoration-style: ${r.decoration.style.solid};
        `,e&&o&&i`
          text-decoration-style: ${r.decoration.style.dashed};
        `]}}
`,K=a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{link:t}=o,r=$(t.withIcon.size[e]);return i`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${r};
        height: ${r};
      }
    `}}
`,Te=p.forwardRef((e,o)=>{const{isUnderlined:t=!0,isDashed:r=!1,variant:n=Z.DEFAULT_VARIANT,startIcon:l,endIcon:c,children:u,testID:h="link",...b}=e,{tokens:g}=d(),{link:m}=g;return s.jsx(mo,{...b,ref:o,display:"inline-flex",testID:h,children:s.jsxs(z,{children:[l&&s.jsx(K,{$variant:n,"data-testid":`${h}-start-icon-wrapper`,children:l}),s.jsx(Re,{component:"span",color:"inherit",variant:n,fontFamily:m.typography.fontFamily,$isUnderlined:t,$isDashed:r,children:u}),c&&s.jsx(K,{$variant:n,"data-testid":`${h}-end-icon-wrapper`,children:c})]})})});Te.displayName="LinkWithIcon";a.div`
  overflow: hidden;
`;a.div`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return i`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return i`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;a.li`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return[i`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=d(),{multiSelect:r}=t;return[i`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${r.menu.option.inner.gap};
        color: ${r.menu.option.inner.color.base};
        padding-top: ${r.menu.option.inner.paddingTop};
        padding-bottom: ${r.menu.option.inner.paddingBottom};
        padding-left: ${r.menu.option.inner.paddingLeft};
        padding-right: ${r.menu.option.inner.paddingRight};
        border-radius: ${r.menu.option.inner.radius};
        background: ${r.menu.option.inner.backgroundColor.base};
      `,e&&i`
          background: ${r.menu.option.inner.backgroundColor.active};
        `,o&&i`
          background: ${r.menu.option.inner.backgroundColor.hover};
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[i`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;a.div`
  ${({$isOpen:e,$hasError:o,$isDisabled:t})=>{const{tokens:r}=d(),{select:n}=r;return[i`
        display: grid;
        background: ${n.button.backgroundColor.base};
        padding-top: ${n.button.paddingTop};
        padding-bottom: ${n.button.paddingBottom};
        padding-left: ${n.button.paddingLeft};
        padding-right: ${n.button.paddingRight};
        border-radius: ${n.button.stroke.radius};
        outline-width: ${n.button.stroke.width.base};
        outline-style: ${n.button.stroke.style};
        outline-color: ${n.button.stroke.color.base};
        outline-offset: ${n.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${n.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${n.button.stroke.width.hover};
          outline-color: ${n.button.stroke.color.hover};
          outline-offset: ${n.button.stroke.offset.hover};

          svg {
            color: ${n.button.icon.color.hover};
          }
        }
      `,o&&i`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.error};
            outline-color: ${n.button.stroke.color.error};
            outline-offset: ${n.button.stroke.offset.error};
          }
        `,e&&i`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.active};
            outline-color: ${n.button.stroke.color.active};
            outline-offset: ${n.button.stroke.offset.active};

            svg {
              color: ${n.button.icon.color.active};
            }
          }
        `,t&&i`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.disabled};
            outline-color: ${n.button.stroke.color.disabled};
            outline-offset: ${n.button.stroke.offset.disabled};

            svg {
              color: ${n.button.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return i`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return i`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var Le=a(oo)`
  rotate: 0deg;
`;a(Le)`
  rotate: 180deg;
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{select:t}=o;return i`
      display: ${e?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${t.menu.radius};
      border-width: ${t.menu.stroke.width};
      border-style: ${t.menu.stroke.style};
      border-color: ${t.menu.stroke.color};
      box-shadow: 0px 2px 2px ${t.menu.shadow.outer.color};
      z-index: ${t.menu.zIndex};
    `}}
`;a.ul`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return i`
      all: unset;
      display: grid;
      gap: ${o.menu.separator.width};
      background: ${o.menu.separator.color};
    `}}
`;var D=a.div`
  ${({$hasError:e})=>{const{tokens:o}=d(),{radio:t}=o;return[i`
        position: relative;
        display: grid;
        place-items: center;
        width: ${t.width};
        height: ${t.height};
        background: ${t.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${t.stroke.width.base};
        outline-style: solid;
        outline-color: ${t.stroke.color.base};
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          outline-width: ${t.stroke.width.disabled};
          outline-color: ${t.stroke.color.disabled};
          cursor: not-allowed;
        }

        &:hover:has(input:not(:disabled)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled)
          )
          && {
          outline-width: ${t.stroke.width.hover};
          outline-color: ${t.stroke.color.hover};
        }
      `,e&&i`
          outline-width: ${t.stroke.width.error};
          outline-color: ${t.stroke.color.error};
        `]}}
`,je=a.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`,Be=a.div`
  ${()=>{const{tokens:e}=d(),{radio:o}=e;return[i`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${D}:has(input:checked) && {
          display: block;
        }

        ${D}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${D}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,vo=p.forwardRef((e,o)=>{const{hasError:t,testID:r="radio",...n}=e;return s.jsxs(D,{$hasError:t,children:[s.jsx(je,{...n,ref:o,type:"radio","data-testid":r}),s.jsx(Be,{})]})});vo.displayName="RadioBase";var Ae=vo,De=p.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...n}=e,{testID:l="radio"}=n,c=p.useId(),u=O(c,e);return s.jsx(N,{alert:r?s.jsx(E,{id:c,...r,testID:`${l}-alert`}):void 0,children:s.jsx(ro,{...t,children:s.jsx(Ae,{...n,...u,ref:o})})})});De.displayName="Radio";a.div`
  ${({$isDisabled:e,$hasSelectedItem:o})=>{const{tokens:t}=d(),{select:r}=t;return[i`
        overflow: hidden;
        color: ${r.button.placeholder.color.base};
      `,e&&i`
          color: ${r.button.placeholder.color.disabled};
        `,o&&i`
          color: ${r.button.text.color.base};
        `,e&&o&&i`
          color: ${r.button.text.color.disabled};
        `]}}
`;a.li`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[i`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=d(),{select:r}=t;return[i`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${r.menu.option.inner.gap};
        color: ${r.menu.option.inner.color.base};
        padding-top: ${r.menu.option.inner.paddingTop};
        padding-bottom: ${r.menu.option.inner.paddingBottom};
        padding-left: ${r.menu.option.inner.paddingLeft};
        padding-right: ${r.menu.option.inner.paddingRight};
        border-radius: ${r.menu.option.inner.radius};
        background: ${r.menu.option.inner.backgroundColor.base};
        outline-width: ${r.menu.option.inner.stroke.width};
        outline-style: ${r.menu.option.inner.stroke.style};
        outline-color: ${r.menu.option.inner.stroke.color.base};
        outline-offset: ${r.menu.option.inner.stroke.offset};
      `,e&&i`
          background: ${r.menu.option.inner.backgroundColor.active};
          outline-color: ${r.menu.option.inner.stroke.color.active};
        `,o&&i`
          background: ${r.menu.option.inner.backgroundColor.hover};
          outline-color: ${r.menu.option.inner.stroke.color.hover};
        `]}}
`;a(S)`
  ${({$isSelected:e})=>{const{tokens:o}=d(),{select:t}=o;return[i`
        visibility: ${e?"visible":"hidden"};
        width: ${t.menu.option.inner.icon.width};
        height: ${t.menu.option.inner.icon.height};
        color: ${t.menu.option.inner.icon.color};
      `]}}
`;a.div`
  ${()=>{const{tokens:{slider:e}}=d();return i`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${e.track.padding};
    `}}
`;a.div`
  ${()=>{const{tokens:{slider:e}}=d();return i`
      width: 100%;

      .react-aria-Slider {
        display: grid;

        .react-aria-SliderTrack {
          position: relative;

          &:before {
            content: "";
            display: block;
            position: absolute;
          }
        }

        .react-aria-SliderThumb {
          width: ${e.thumb.size};
          height: ${e.thumb.size};
          border-radius: 50%;
          forced-color-adjust: none;

          &[data-focus-visible] {
            outline: ${e.thumb.focusRing.width} solid
              ${e.thumb.focusRing.color};
            outline-offset: ${e.thumb.focusRing.offset};
          }
        }

        &[data-orientation="horizontal"] {
          flex-direction: column;

          .react-aria-SliderTrack {
            height: ${e.thumb.size};
            width: 100%;

            &:before {
              height: ${e.track.size};
              width: 100%;
              top: 50%;
              transform: translateY(-50%);
              background: ${e.track.color};
              border-radius: ${e.track.size};
            }
          }

          .react-aria-SliderThumb {
            top: 50%;
            cursor: pointer;

            & [data-primary-color] {
              color: ${e.thumb.primaryColor.base};
            }

            & [data-secondary-color] {
              color: ${e.thumb.secondaryColor.base};
            }

            &:hover [data-primary-color] {
              color: ${e.thumb.primaryColor.hover};
            }

            &:hover [data-secondary-color] {
              color: ${e.thumb.secondaryColor.hover};
            }

            &:active [data-primary-color] {
              color: ${e.thumb.primaryColor.active};
            }

            &:active [data-secondary-color] {
              color: ${e.thumb.secondaryColor.active};
            }
          }
        }
      }
    `}}
`;a.div`
  ${()=>{const{tokens:{slider:e}}=d();return i`
      height: ${e.thumb.size};
      width: 100%;
      display: flex;
      position: relative;

      &:before {
        height: ${e.track.size};
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    `}}
`;a.div`
  ${({$notchAsPercent:e})=>{const{tokens:{slider:o}}=d();return i`
      width: ${e}%;
      border-right: ${o.notch.size} ${o.notch.color} solid;
    `}};
`;a(H)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;a.header`
  ${({$borderVisible:e})=>{const{tokens:o}=d(),{standardModal:t,modal:r}=o;return[i`
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        gap: ${t.header.gap};
        overflow: hidden;
        border-bottom-width: ${t.header.stroke.bottom.width};
        border-bottom-style: ${t.header.stroke.bottom.style};
        border-bottom-color: transparent;
        padding-top: ${t.header.padding.mobile.top};
        padding-left: ${t.header.padding.mobile.left};
        padding-right: ${t.header.padding.mobile.right};
        padding-bottom: ${t.header.padding.mobile.bottom};
        transition: border-bottom-color 0.15s;

        @media (min-width: ${r.breakpoints.tablet}) {
          padding-top: ${t.header.padding.tablet.top};
          padding-left: ${t.header.padding.tablet.left};
          padding-right: ${t.header.padding.tablet.right};
          padding-bottom: ${t.header.padding.tablet.bottom};
        }
      `,e&&i`
          border-bottom-color: ${t.header.stroke.bottom.color};
        `]}}
`;a.div`
  ${({$headingVisible:e})=>{const{tokens:{modal:o,standardModal:{header:{padding:t}}}}=d(),r=`calc(${t.mobile.top} + ${t.mobile.bottom} + 100%)`,n=`calc(${t.mobile.top} + ${t.mobile.bottom} + 100%)`;return[i`
        overflow: hidden;
        transition: transform 0.35s;
        transform: translateY(${r});
        @media (min-width: ${o.breakpoints.tablet}) {
          transform: translateY(${n});
        }
      `,!e&&i`
          && {
            transform: translateY(0);
          }
        `]}}
`;a.div`
  margin: -6px;
  margin-top: -10px;
  margin-bottom: -11px;
`;a.div`
  ${()=>{const{tokens:e}=d(),{standardModal:o,modal:t}=e;return i`
      display: grid;
      gap: ${o.content.gap};
      padding-top: ${o.content.padding.mobile.top};
      padding-left: ${o.content.padding.mobile.left};
      padding-right: ${o.content.padding.mobile.right};
      padding-bottom: ${o.content.padding.mobile.bottom};

      @media (min-width: ${t.breakpoints.tablet}) {
        padding-top: ${o.content.padding.tablet.top};
        padding-left: ${o.content.padding.tablet.left};
        padding-right: ${o.content.padding.tablet.right};
        padding-bottom: ${o.content.padding.tablet.bottom};
      }
    `}}
`;a.footer`
  ${()=>{const{tokens:e}=d(),{standardModal:o,modal:t}=e;return i`
      height: ${o.footer.height.mobile};
      @media (min-width: ${t.breakpoints.tablet}) {
        height: ${o.footer.height.tablet};
      }
    `}}
`;var Pe=a.table`
  ${({$layout:e})=>{const{tokens:o}=d(),{table:t}=o;return[i`
        border-collapse: collapse;
        border-bottom-width: ${t.stroke.bottom.width};
        border-bottom-style: ${t.stroke.bottom.style};
        border-bottom-color: ${t.stroke.bottom.color};

        & thead {
          background: ${t.head.backgroundColor};
          border-bottom-width: ${t.head.stroke.bottom.width};
          border-bottom-style: ${t.head.stroke.bottom.style};
          border-bottom-color: ${t.head.stroke.bottom.color};

          & tr {
            & th {
              text-wrap: balance;
              vertical-align: bottom;
              overflow-wrap: break-word;
              padding-top: ${t.head.cell.padding.top};
              padding-left: ${t.head.cell.padding.left.base};
              padding-right: ${t.head.cell.padding.right.base};
              padding-bottom: ${t.head.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${t.head.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${t.head.cell.padding.right.last};
            }
          }
        }

        & tbody {
          & tr {
            & th,
            & td {
              text-wrap: balance;
              overflow-wrap: break-word;
              padding-top: ${t.body.cell.padding.top};
              padding-left: ${t.body.cell.padding.left.base};
              padding-right: ${t.body.cell.padding.right.base};
              padding-bottom: ${t.body.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${t.body.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${t.body.cell.padding.right.last};
            }

            &:nth-of-type(odd) {
              background: ${t.body.row.backgroundColor.odd};
            }

            &:nth-of-type(even) {
              background: ${t.body.row.backgroundColor.even};
            }
          }
        }
      `,e&&i`
          table-layout: ${e};
        `]}}
`;function R(e){const{layout:o,testID:t="table",...r}=e;return s.jsx(Pe,{width:"100%",...r,$layout:o,"data-testid":t})}R.Thead=e=>{const{tokens:o}=d(),{table:t}=o;return s.jsx(f,{component:"thead",variant:t.head.typography.variant,fontFamily:t.head.typography.fontFamily,...e})};R.Tbody=e=>{const{tokens:o}=d(),{table:t}=o;return s.jsx(f,{component:"tbody",variant:t.body.typography.variant,fontFamily:t.body.typography.fontFamily,...e})};R.Tr=e=>s.jsx("tr",{...e});R.Th=e=>{const{align:o="right",...t}=e;return s.jsx("th",{align:o,...t})};R.Td=e=>{const{align:o="right",...t}=e;return s.jsx("td",{align:o,...t})};var Ve=R;a.div`
  font-size: 0;
`;a.div`
  ${({$tabsView:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[i`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!e||e==="mobile")&&i`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return i`
      display: grid;
      gap: ${o.desktop.container.gap};
    `}}
`;a.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`;a.label`
  position: relative;
  display: grid;
  text-wrap: nowrap;
  cursor: pointer;

  &:has(button:disabled) {
    cursor: not-allowed;
  }
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return i`
      display: none;
      border-top-left-radius: ${o.desktop.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${o.desktop.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${o.desktop.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${o.desktop.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${o.desktop.tab.focusRing.width};
        outline-style: ${o.desktop.tab.focusRing.style};
        outline-color: ${o.desktop.tab.focusRing.color};
        outline-offset: ${o.desktop.tab.focusRing.offset};
      }
    `}}
`;a.div`
  ${({$withIcon:e,$isActive:o})=>{const{tokens:t}=d(),{tabs:r}=t;return[i`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        background: ${r.desktop.tab.backgroundColor.base};

        border-top-left-radius: ${r.desktop.tab.radius.topLeft};
        border-top-right-radius: ${r.desktop.tab.radius.topLeft};
        border-top-width: ${r.desktop.tab.strokeTop.width};
        border-top-style: ${r.desktop.tab.strokeTop.style};
        border-top-color: ${r.desktop.tab.strokeTop.color.base};

        padding-top: ${r.desktop.tab.padding.top};
        padding-bottom: ${r.desktop.tab.padding.bottom};
        padding-left: ${r.desktop.tab.padding.left.base};
        padding-right: ${r.desktop.tab.padding.right.base};

        label:hover:not(:has(button:disabled)) && {
          background: ${r.desktop.tab.backgroundColor.hover};
        }

        label:has(button:active:not(:disabled)) && {
          outline-width: ${r.desktop.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${r.desktop.tab.activeRing.color};
          outline-offset: ${r.desktop.tab.activeRing.offset};
        }

        user-select: none;
      `,e&&i`
          padding-left: ${r.desktop.tab.padding.left.withIcon};
          padding-right: ${r.desktop.tab.padding.right.withIcon};
        `,o&&i`
          background: ${r.desktop.tab.backgroundColor.active};
          border-top-color: ${r.desktop.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${r.desktop.tab.backgroundColor.active};
          }
        `]}}
`;a.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[i`
        color: ${t.desktop.tab.label.color.base};

        label:hover && {
          color: ${t.desktop.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.desktop.tab.label.color.disabled};
        }
      `,e&&i`
          color: ${t.desktop.tab.label.color.active};

          label:hover && {
            color: ${t.desktop.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.desktop.tab.label.color.disabled};
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return i`
      color: ${o.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`;a.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[i`
        display: grid;
        place-items: center;

        svg {
          width: ${t.desktop.tab.icon.width};
          height: ${t.desktop.tab.icon.height};
          color: ${t.desktop.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${t.desktop.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${t.desktop.tab.icon.color.disabled};
          }
        }
      `,e&&i`
          svg {
            color: ${t.desktop.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${t.desktop.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${t.desktop.tab.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return i`
      width: ${o.desktop.tab.separator.width};
      background-color: ${o.desktop.tab.separator.color};
      margin-top: ${o.desktop.tab.separator.marginTop};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return i`
      background: ${o.mobile.backgroundColor};
      padding-top: ${o.mobile.padding.top};
      padding-left: ${o.mobile.padding.left};
      padding-right: ${o.mobile.padding.right};
      padding-bottom: ${o.mobile.padding.bottom};
      border-top-left-radius: ${o.mobile.radius.topLeft};
      border-top-right-radius: ${o.mobile.radius.topLeft};
      border-top-width: ${o.mobile.strokeTop.width};
      border-top-style: ${o.mobile.strokeTop.style};
      border-top-color: ${o.mobile.strokeTop.color};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return i`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;a.div`
  ${({$withIcon:e,$isActive:o,$withPadding:t})=>{const{tokens:r}=d(),{tabs:n}=r;return[i`
        display: ${o?"block":"none"};
        background: ${n.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${n.panel.focusRing.width};
          outline-style: ${n.panel.focusRing.style};
          outline-color: ${n.panel.focusRing.color};
        }
      `,t&&i`
          padding-top: ${n.panel.padding.top};
          padding-bottom: ${n.panel.padding.bottom};
          padding-left: ${n.panel.padding.left.base};
          padding-right: ${n.panel.padding.right.base};
        `,t&&e&&i`
          padding-left: ${n.panel.padding.left.withIcon};
          padding-right: ${n.panel.padding.right.withIcon};
        `]}}
`;a(ho)`
  ${()=>i`
      width: 100%;
    `}
`;a.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:e})=>{const{tokens:o}=d(),{textArea:t,outerField:r}=o;return i`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${t.innerShadow.height};
        pointer-events: none;
        opacity: ${t.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px inset;
        border-radius: ${r.radius} ${r.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px inset;
        border-radius: 0 0 ${r.radius} ${r.radius};
      }

      ${()=>(e==="TOP"||e==="BOTH")&&i`
          &::before {
            opacity: ${t.innerShadow.opacity.active};
          }
        `}

      ${()=>(e==="BOTTOM"||e==="BOTH")&&i`
        &::after {
          opacity: ${t.innerShadow.opacity.active};
      `}
    `}}
`;a(tt)`
  ${()=>{const{tokens:e}=d(),{textArea:o,typography:t,scrollBar:r,outerField:n}=e,l=o.typography.variant,c=$(t.fontSize[l]),u=$(t.lineHeight[l]);return i`
      all: unset;
      white-space: pre-wrap;
      word-wrap: break-word;

      width: 100%;
      resize: none;
      min-height: ${o.minHeight};
      height: 100%;
      padding: calc(${o.paddingVertical} - 2px)
        calc(${o.paddingHorizontal} - 2px);
      margin: 2px;

      color: ${o.color.base};
      font-family: ${t.fontFamily[l]};
      font-size: ${c};
      line-height: ${u};

      &:read-only {
        color: ${o.color.readOnly};
      }
      &:disabled {
        color: ${o.color.disabled};
      }

      scrollbar-color: ${r.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${r.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${r.thumbColor};
          border-radius: ${r.radius};
          border: 3.5px solid ${n.backgroundColor};
        }
      }
    `}}
`;var V="0.4s",C=a.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width),r=$(o.size[e].height);return i`
      position: relative;
      width: ${t};
      height: ${r};
      display: flex;
      align-items: center;
      border-radius: ${r};

      &:hover:has(input:not(:checked)) {
        background-color: ${o.backgroundColor.unchecked.hover};
      }

      &:hover:has(input:checked) {
        background-color: ${o.backgroundColor.checked.hover};
      }

      &:has(input:not(:checked)) {
        background-color: ${o.backgroundColor.unchecked.base};
      }

      &:has(input:checked) {
        background-color: ${o.backgroundColor.checked.base};
      }

      &:has(input:disabled:checked) {
        background-color: ${o.backgroundColor.checked.disabled};
      }

      &:has(input:disabled:not(:checked)) {
        background-color: ${o.backgroundColor.unchecked.disabled};
      }
    `}}
`;a.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;a.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width),r=o.thumb.size[e].margin;return[i`
        position: relative;
        width: ${o.thumb.size[e].width};
        height: ${o.thumb.size[e].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[e].height};
        margin: ${r};
        transition: transform ${V};
        ${C}:has(input:checked) && {
          transform: translateX(calc(${t} - ${r} - ${r} - 100%));
        }

        ${C}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a(f)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d();return[i`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[e].padding};
        transition: opacity ${V};

        ${C}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${C}:has(input:checked) && {
          opacity: 1;
        }

        ${C}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;a(f)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d();return[i`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[e].padding};
        transition: opacity ${V};

        ${C}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${C}:has(input:checked) && {
          opacity: 0;
        }

        ${C}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`;a.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`;a.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width),r=$(o.size[e].height);return i`
      cursor: pointer;
      width: ${t};

      outline-style: solid;
      border-radius: ${r};
      outline-offset: 0;
      outline-width: 0;

      &:has(input:disabled) {
        cursor: not-allowed;
      }

      &:has(input:not(:disabled)):hover {
        outline-color: ${o.focusRing.color};
        outline-width: ${o.focusRing.width};
        outline-offset: ${o.focusRing.offset};
      }

      &:has(input:focus) {
        outline-color: ${o.focusRing.color};
        outline-width: ${o.focusRing.width};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;a.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width);return i`
      width: ${t};
      background-color: transparent;
    `}}
`;export{Ve as T,f as a};
