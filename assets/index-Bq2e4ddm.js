import{r as p}from"./index-DH5ua8nC.js";import{T as _,B as mo,a as P,b as q,I as vo,M as yo,L as J,c as L}from"./index-C3m9D1_L.js";import{a as i,u as d,b as n,p as $,h as wo}from"./index-C-LSVLXB.js";import{C as xo,A as Co,a as Io,M as Ro,T as K,I as To,b as Lo,c as jo,E as Bo,W as Ao,S as _o,d as Fo}from"./index-COlUQA8Q.js";import{j as l}from"./jsx-runtime-DQ32znRX.js";import{u as W,F as Do,a as Po,b as zo,c as So,o as Wo,f as Ho,s as No,d as Eo,e as Oo,g as Mo,h as Yo,i as Uo,j as Vo,k as Go}from"./floating-ui.react-C2UAdtMt.js";import{$ as Xo,a as Zo}from"./Button-qvF4wKtw.js";import{$ as qo}from"./utils-DMjC9_eM.js";import{i as Jo}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";import{$ as Ko}from"./VisuallyHidden-KFGkQyAi.js";i.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
        display: grid;
        background: ${t.background[e]};
        border-width: ${t.stroke.width};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color};
        border-radius: ${t.stroke.radius};
      `]}}
`;var F=i.button`
  ${()=>{const{tokens:e}=d(),{accordion:o}=e;return[n`
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
`;i.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
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

        ${F}:hover & {
          background: ${t.header.inner.backgroundColor.hover};
        }

        ${F}:active & {
          background: ${t.header.inner.backgroundColor.active[e]};
        }
      `]}}
`;i.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
        color: ${t.header.icon.color.base};
        transform: rotateX(${e?"180deg":"0deg"});

        svg {
          display: block;
          width: ${t.header.icon.width};
          height: ${t.header.icon.height};
        }

        ${F}:hover & {
          color: ${t.header.icon.color.hover};
        }

        ${F}:active & {
          color: ${t.header.icon.color.active};
        }
      `]}}
`;i.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
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
`;i.div`
  ${({hidden:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
        display: ${e?"none":"block"};
        padding: ${t.content.padding};
      `]}}
`;var Qo=i.p`
  ${({$variant:e,$fontFamily:o,$noWrap:t,$color:r})=>{const{tokens:a}=d(),{typography:s,fontFamily:c}=a,u=$(s.fontSize[e]),h=$(s.lineHeight[e]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||s.color[e]};
        font-size: ${u};
        line-height: ${h};
        font-family: ${s.fontFamily[e]};
      `,o&&n`
          font-family: ${c[o]};
        `,t&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,_.STANDARD_VARIANTS.includes(e)&&n`
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
            font-family: ${_.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function ot(e,o){const{variant:t,component:r,color:a,fontFamily:s,noWrap:c,testID:u,...h}=e;return l.jsx(Qo,{...h,ref:o,as:r,$variant:t,$color:a,$fontFamily:s,$noWrap:c,"data-testid":u})}var tt=p.forwardRef(ot),et={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},rt=p.forwardRef;function nt(e,o){const{variant:t=_.DEFAULT_VARIANT,component:r,...a}=e;return l.jsx(tt,{...a,ref:o,variant:t,component:r||et[t]})}var f=rt(nt),it=i.div`
  ${()=>{const{tokens:e}=d(),{accordionGroup:o}=e;return[n`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;i(it)`
  ${()=>{const{tokens:e}=d(),{accordionGroup:o}=e;return[n`
        gap: ${o.gap.nested};
      `]}}
`;i.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alert:t}=o;return n`
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
`;i.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alert:t}=o;return n`
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
`;i.div`
  overflow-wrap: anywhere;
`;i.dialog`
  ${()=>{const{tokens:e}=d(),{modal:o}=e;return n`
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
`;var H=i.div`
  ${()=>{const{tokens:e}=d(),{modal:o}=e,t=parseInt(o.maxHeight.tablet)+parseInt(o.padding.tablet)*2+"px";return n`
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
`;i(H)`
  ${()=>{const{tokens:e}=d(),{modal:o}=e;return n`
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
`;i(H)`
  ${({$severity:e})=>{const{tokens:o}=d(),{modal:t,alertModal:r}=o;return n`
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
`;i.div`
  display: grid;
  gap: 8px;
`;i.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alertModal:t}=o;return n`
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
`;i.div`
  ${()=>{const{tokens:e}=d(),{alertModal:o}=e;return n`
      color: ${o.body.color};
    `}}
`;i.div`
  ${({$layout:e})=>{const{tokens:o}=d(),{alertModal:t}=o;return[n`
        gap: ${t.footer.gap};
      `,e==="inline"&&n`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&n`
          display: grid;
          grid-auto-flow: row;
        `]}}
`;var at=p.createContext({portalElement:void 0});function dt(){return p.useContext(at)}var st=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,lt=i.span`
  ${({$isLoading:e})=>{const{tokens:o}=d(),{button:t}=o,r=$(t.topLayer.icon.width),a=$(t.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${e?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${a};
      }
    `}}
`,ct=i.div`
  ${({$isLoading:e})=>n`
      visibility: ${e?"hidden":"visible"};
      overflow: hidden;
    `}
`,ut=i.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,m=i.button`
  ${({$variant:e,$isLoading:o,$fullWidth:t})=>{const{tokens:r}=d(),{button:a}=r;return[n`
        all: unset;
        position: relative;
        display: grid;
        align-items: start;
        height: ${a.height};
        width: ${t?"100%":"auto"};
        min-width: ${a.minWidth};
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: ${a.opacity.disabled};
        }

        &[aria-disabled="true"] {
          cursor: not-allowed;
        }
      `,!o&&n`
          &:not(:disabled):focus-visible {
            border-radius: ${a.topLayer.stroke.radius};
            outline-width: ${a.focusRing.width};
            outline-style: ${a.focusRing.style};
            outline-color: ${a.focusRing.color[e]};
            outline-offset: ${a.focusRing.offset};
          }
        `]}}
`,pt=i.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=d(),{button:r}=t;return[n`
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

        ${m}:not(:disabled):hover && {
          color: ${r.topLayer.color[e].hover};
          background: ${r.topLayer.backgroundColor[e].hover};
          transform: translateY(${r.topLayer.translateY[e].hover});
        }

        ${m}:not(:disabled):active && {
          color: ${r.topLayer.color[e].active};
          background: ${r.topLayer.backgroundColor[e].active};
          transform: translateY(${r.topLayer.translateY[e].active});
        }
      `,e==="secondary"&&n`
          ${m}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[e].hover};
          }

          ${m}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[e].active};
          }
        `,o&&n`
          color: ${r.topLayer.color[e].active};
          border-color: ${r.topLayer.stroke.color[e].active};
          background: ${r.topLayer.backgroundColor[e].active};
          transform: translateY(${r.topLayer.translateY[e].active});

          ${m}:not(:disabled):hover && {
            color: ${r.topLayer.color[e].active};
            border-color: ${r.topLayer.stroke.color[e].active};
            background: ${r.topLayer.backgroundColor[e].active};
            transform: translateY(
              ${r.topLayer.translateY[e].active}
            );
          }

          ${m}:not(:disabled):active && {
            color: ${r.topLayer.color[e].active};
            border-color: ${r.topLayer.stroke.color[e].active};
            background: ${r.topLayer.backgroundColor[e].active};
            transform: translateY(
              ${r.topLayer.translateY[e].active}
            );
          }

          ${m}:not(:disabled):focus-visible && {
            border-radius: ${r.topLayer.stroke.radius};
            outline-width: ${r.focusRing.width};
            outline-style: ${r.focusRing.style};
            outline-color: ${r.focusRing.color[e]};
            outline-offset: ${r.focusRing.offset};
          }
        `]}}
`,ht=i.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=d(),{button:r}=t,{shadow:a}=r.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[e].base};
        box-shadow: 0px ${a.blur} ${a.offsetY} ${a.color};

        ${m}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[e].hover};
        }

        ${m}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;
        }
      `,o&&n`
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;

          ${m}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }

          ${m}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }
        `]}}
`,Q=p.forwardRef((e,o)=>{const{variant:t,children:r,testID:a,type:s,isLoading:c,fullWidth:u,...h}=e;return l.jsxs(m,{...h,ref:o,$variant:t,$isLoading:c,$fullWidth:u,"data-testid":a,type:s||"button",children:[l.jsx(ht,{$variant:t,$isLoading:c}),l.jsx(pt,{$variant:t,$isLoading:c,children:r})]})});Q.displayName="ButtonBase";var bt=Q,gt=wo`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,$t=i.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:e,$color:o})=>n`
    color: ${o};
    width: ${e};
    height: ${e};
  `}
`,ft=i.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:e})=>{const{tokens:{spinner:o}}=d();return n`
      border: ${e} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,z=i.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${gt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:e,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(e+1)}s;
    `}
`,oo=p.memo(e=>{const{testID:o="spinner"}=e,{tokens:{spinner:t}}=d();let r,a;if("variant"in e){const u=t.variants[e.variant];u&&([r,a]=[u.color,u.size])}"size"in e&&e.size?a=e.size:a||(a=t.variants.default.size),"color"in e&&e.color?r=e.color:r||(r=t.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(a)/parseInt(t.borderRatio))}px`};return l.jsxs($t,{$color:r,$size:a,"data-testid":o,children:[l.jsx(ft,{...c}),l.jsx(z,{$index:0,...c}),l.jsx(z,{$index:1,...c}),l.jsx(z,{$index:2,...c})]})});oo.displayName="Spinner";var kt=oo,mt=p.forwardRef((e,o)=>{const{text:t,variant:r="primary",startIcon:a,isLoading:s,testID:c="button",...u}=e,{tokens:h}=d(),{button:b}=h,g={"aria-disabled":s,"aria-label":s?"Loading":void 0};return l.jsx(bt,{...u,...g,ref:o,variant:r,isLoading:s,testID:c,children:l.jsxs(st,{children:[a&&l.jsx(lt,{$isLoading:s,children:a}),l.jsx(ct,{$isLoading:s,children:l.jsx(f,{variant:b.topLayer.text.typography.variant,fontFamily:b.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:t})}),s&&l.jsx(ut,{children:l.jsx(kt,{variant:mo.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});mt.displayName="Button";i.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{buttonTabs:t}=o;return[n`
        display: flex;
        gap: ${t.items.gap};
      `,e==="center"&&n`
          justify-content: center;
        `]}}
`;i.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{buttonTabs:t}=o;return n`
      display: ${e?"block":"none"};

      &:focus-visible {
        position: relative;
        z-index: 1;
        outline-width: ${t.panel.focusRing.width};
        outline-style: ${t.panel.focusRing.style};
        outline-color: ${t.panel.focusRing.color};
      }
    `}}
`;p.createContext({});var vt=i.label`
  ${({$size:e,$isActive:o,$fullWidth:t,$textAlign:r})=>{const{tokens:a}=d(),{buttonAlt:s}=a;return[n`
        display: inline-flex;
        align-items: center;
        border-width: ${s.stroke.width};
        border-style: ${s.stroke.style};
        border-color: ${s.stroke.color.base};
        border-radius: ${s.radius};
        min-width: ${s.minWidth};
        min-height: ${s.minHeight[e]};
        padding-top: ${s.padding.top};
        padding-left: ${s.padding.left};
        padding-right: ${s.padding.right};
        padding-bottom: ${s.padding.bottom};
        color: ${s.color.base};
        background: ${s.backgroundColor.base};
        cursor: pointer;

        &:has(:focus-visible) {
          outline-width: ${s.focusRing.width};
          outline-style: ${s.focusRing.style};
          outline-color: ${s.focusRing.color};
          outline-offset: ${s.focusRing.offset};
        }

        &:hover {
          color: ${s.color.hover};
          background: ${s.backgroundColor.hover};
        }
      `,o&&n`
          border-color: ${s.stroke.color.active};
          color: ${s.color.active};
          background: ${s.backgroundColor.active};

          &:hover {
            border-color: ${s.stroke.color.active};
            color: ${s.color.active};
            background: ${s.backgroundColor.active};
          }
        `,t&&n`
          width: 100%;
        `,r==="center"&&n`
          text-align: center;
          justify-content: center;
        `]}}
`,yt=p.forwardRef((e,o)=>{const{id:t,label:r,isActive:a,size:s=P.DEFAULT_SIZE,fullWidth:c=!1,textAlign:u=P.DEFAULT_TEXT_ALIGN,typographyVariant:h=P.DEFAULT_TYPOGRAPHY_VARIANT,testID:b="button-tabs-item",...g}=e,{tokens:y}=d(),{buttonAlt:k}=y;return l.jsxs(vt,{$size:s,$isActive:a,$fullWidth:c,$textAlign:u,"data-testid":b,children:[l.jsx(Ko,{children:l.jsx("button",{...g,ref:o,type:"button",role:"tab",id:t,tabIndex:a?void 0:-1,"aria-label":r,"aria-selected":a,"aria-controls":`${t}-panel`})}),l.jsx(f,{color:"inherit",variant:h,fontFamily:k.typography.fontFamily,children:r})]})});yt.displayName="ButtonTabsItem";var wt=i.div`
  ${({$gap:e="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${e};
  `}
`;function xt(e){const{alert:o,gap:t,children:r}=e;return l.jsxs(wt,{$gap:t,children:[r,o&&o]})}var N=xt,Ct=i.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{inlineAlert:t}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${t.gap};
      color: ${t.color[e]};

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
      }
    `}}
`,It=i.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{inlineAlert:t}=o,r=$(t.iconWrapper.height);return n`
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
`;function Rt(e){const{severity:o,children:t,testID:r="inline-alert"}=e,a={error:"alert",warning:"alert",success:"status",info:"status"},s={error:l.jsx(Bo,{"aria-hidden":"true"}),warning:l.jsx(Ao,{"aria-hidden":"true"}),success:l.jsx(_o,{"aria-hidden":"true"}),info:l.jsx(Fo,{"aria-hidden":"true"})};return l.jsxs(Ct,{role:a[o],$severity:o,"data-testid":r,children:[l.jsx(It,{$severity:o,children:s[o]}),l.jsx(f,{color:"inherit",children:t})]})}var E=Rt,Tt=i.label`
  ${()=>{const{tokens:e}=d(),{inputLabelRight:o}=e;return n`
      display: grid;
      align-items: center;
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
`,Lt=i.span`
  ${()=>{const{tokens:e}=d(),{inputLabelRight:o}=e;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function jt(e){const{label:o,children:t,...r}=e,{tokens:a}=d(),{inputLabelRight:s}=a;return l.jsxs(Tt,{...r,children:[l.jsx("span",{children:t}),o&&l.jsx(Lt,{children:l.jsx(f,{component:"span",color:"inherit",variant:s.label.typography.variant,fontFamily:s.label.typography.fontFamily,children:o})})]})}var to=jt,O=i.div`
  ${({$hasError:e})=>{const{tokens:o}=d(),{checkbox:t}=o;return[n`
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
      `,e&&n`
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
`,Bt=i.input`
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
`,At=i(Ro)`
  ${()=>{const{tokens:e}=d(),{checkbox:o}=e;return[n`
        display: none;

        ${O}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,_t=i(K)`
  ${()=>{const{tokens:e}=d(),{checkbox:o}=e;return[n`
        display: none;

        ${O}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function Ft(e,o){p.useEffect(()=>{e.current&&(e.current.indeterminate=!!o)},[o])}var eo=p.forwardRef((e,o)=>{const{hasError:t,isIndeterminate:r,testID:a="checkbox",...s}=e,c=p.useRef(null);Ft(c,r);const u=W([c,o]);function h(b){var g;b.target.indeterminate=!!r,(g=s.onChange)==null||g.call(s,b)}return l.jsxs(O,{$hasError:t,children:[l.jsx(Bt,{...s,ref:u,type:"checkbox",onChange:h,"data-testid":a}),l.jsx(At,{}),l.jsx(_t,{})]})});eo.displayName="CheckboxBase";var Dt=eo,Pt=p.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...a}=e,{testID:s="checkbox"}=a;return l.jsx(N,{alert:r?l.jsx(E,{...r,testID:`${s}-alert`}):void 0,children:l.jsx(to,{...t,children:l.jsx(Dt,{...a,ref:o})})})});Pt.displayName="Checkbox";i.fieldset`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;i(f).attrs({component:"legend"})`
  padding: 0;
`;var zt=i.ul`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;i(zt)`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;i.li`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var St=i.div`
  ${({$labelText:e})=>{const{tokens:o}=d(),{inputLabelTop:t}=o;return[n`
        width: 100%;
        display: grid;
      `,e&&n`
          gap: ${t.gap};
        `]}}
`;function Wt({initialOpen:e=!1,placement:o=L.DEFAULT_POSITION,offset:t=L.DEFAULT_OFFSET,maxWidth:r,open:a,onOpenChange:s}={}){const[c,u]=p.useState(e),h=!!s,b=a??c,g=s??u,y=p.useRef(null),k=zo({placement:o,open:b,onOpenChange:g,whileElementsMounted:So,middleware:[Wo(t),Ho({padding:L.FLIP_PADDING}),No({padding:L.SHIFT_PADDING}),Eo({element:y,padding:L.ARROW_PADDING})]}),T=Oo(k.context,{handleClose:Mo(),enabled:a===void 0}),I=Yo(k.context,{enabled:a===void 0}),j=Uo(k.context),D=Vo(k.context,{role:"tooltip"}),B=Go([T,I,j,D]);return p.useMemo(()=>({open:b,setOpen:g,isControlled:h,maxWidth:r,arrowRef:y,floatingData:k,interactionsData:B}),[b,g,h,r,y,k,B])}var ro=p.createContext(null),M=()=>{const e=p.useContext(ro);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};function Ht(e){const{children:o,...t}=e,r=Wt(t);return l.jsx(ro.Provider,{value:r,children:o})}var Nt=Ht,Et=i.div`
  ${({$variant:e,$typographyVariant:o})=>{const{tokens:t}=d(),{iconButton:r,typography:a,spacing:s}=t;return n`
      width: ${r.inner.icon.width[e]};
      height: ${$(a.lineHeight[o])};
      margin-left: ${s.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,x=i.button`
  ${({$isControlled:e,$variant:o})=>{const{tokens:t}=d(),{iconButton:r}=t;return[n`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${r.padding[o]};
      `,e&&n`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,Ot=i.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return n`
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
`,Mt=i(To)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:r}=d(),{iconButton:a,tooltipIconButton:s}=r;return[n`
        width: ${a.inner.icon.width[t]};
        height: ${a.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${s.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${s.icon.secondaryColor.base};
        }
      `,!e&&n`
          ${x}:hover &&,
          ${x}:focus-visible && {
            display: none;
          }
        `,!o&&n`
          ${x}:hover && {
            & [data-primary-color] {
              color: ${s.icon.primaryColor.hover};
            }
          }
        `,o&&n`
          display: none;
        `]}}
`,Yt=i(Lo)`
  ${({$isControlled:e,$isOpen:o,$variant:t})=>{const{tokens:r}=d(),{iconButton:a,tooltipIconButton:s}=r;return[n`
        display: none;
        width: ${a.inner.icon.width[t]};
        height: ${a.inner.icon.height[t]};

        & [data-primary-color] {
          color: ${s.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${s.iconFilled.secondaryColor.base};
        }
      `,!e&&n`
          ${x}:hover &&,
          ${x}:focus-visible && {
            display: block;
          }
        `,o&&n`
          display: block;
        `,e&&o&&n`
          ${x}:hover && {
            & [data-primary-color] {
              color: ${s.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,no=p.forwardRef((e,o)=>{const{variant:t=q.DEFAULT_VARIANT,testID:r="tooltip-icon-button",...a}=e,{open:s,isControlled:c}=M();return l.jsx(x,{...a,ref:o,$isControlled:c,$variant:t,"data-testid":r,children:l.jsxs(Ot,{$variant:t,children:[l.jsx(Mt,{$isControlled:c,$isOpen:s,$variant:t}),l.jsx(Yt,{$isControlled:c,$isOpen:s,$variant:t})]})})});no.displayName="TooltipIconButton";var io=no,Ut=p.forwardRef((e,o)=>{const{variant:t=q.DEFAULT_VARIANT,typographyVariant:r=_.DEFAULT_VARIANT,...a}=e;return l.jsx(Et,{$variant:t,$typographyVariant:r,children:l.jsx(io,{ref:o,variant:t,...a})})});io.displayName="InlineTooltipIconButton";var Vt=Ut,Gt=i.div`
  ${({$isControlled:e,$maxWidth:o})=>{const{tokens:t}=d(),{tooltip:r}=t;return[n`
        max-width: ${o?`${o}px`:r.maxWidth};
        border-radius: ${r.radius};
        padding-top: ${r.padding.top};
        padding-bottom: ${r.padding.bottom};
        padding-left: ${r.padding.left};
        padding-right: ${r.padding.right.default};
        background: ${r.backgroundColor};
        z-index: ${r.zIndex};
      `,e&&n`
          padding-right: ${r.padding.right.large};
        `]}}
`,Xt=i(Po)`
  pointer-events: auto !important;
`,Zt=i.button`
  ${()=>{const{tokens:e}=d(),{tooltip:o}=e;return n`
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
`,ao=p.forwardRef((e,o)=>{const{children:t,...r}=e,{tokens:a}=d(),{tooltip:s}=a,{portalElement:c}=dt(),{open:u,setOpen:h,isControlled:b,maxWidth:g,arrowRef:y,floatingData:k,interactionsData:T}=M(),I=W([k.refs.setFloating,o]);return u?l.jsx(Do,{root:c,children:l.jsxs(Gt,{ref:I,style:k.floatingStyles,...T.getFloatingProps(r),$isControlled:b,$maxWidth:g,children:[l.jsx(Xt,{ref:y,context:k.context,fill:s.backgroundColor,width:parseInt(s.arrow.width),height:parseInt(s.arrow.height)}),b&&l.jsx(Zt,{onClick:()=>h(!1),"aria-label":"Close tooltip",children:l.jsx(xo,{})}),l.jsx(f,{color:s.color,variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:t})]})}):null});ao.displayName="TooltipContent";var qt=ao,so=p.forwardRef((e,o)=>{const{children:t,...r}=e,{open:a,floatingData:s,interactionsData:c}=M(),u=t.ref,h=W([s.refs.setReference,u,o]);return p.isValidElement(t)?p.cloneElement(t,c.getReferenceProps({ref:h,...r,...t.props,"data-state":a?"open":"closed"})):null});so.displayName="TooltipTrigger";var Jt=so;function Kt(e){const{iconButtonProps:o,otherIconButtonProps:t,contentProps:r}=e,[a,s]=p.useState(!1);function c(){s(!a)}return l.jsxs(Nt,{open:a,onOpenChange:s,children:[l.jsx(Jt,{children:l.jsx(Vt,{...o,...t,onClick:c})}),l.jsx(qt,{...r})]})}var lo=Kt;function co(e){const{labelElement:o,labelText:t,labelHint:r,labelHintID:a,labelHintTooltipProps:s,children:c}=e,{tokens:u}=d(),{inputLabelTop:h}=u;return l.jsxs(St,{$labelText:t,children:[l.jsxs("div",{children:[o,r&&l.jsxs(f,{id:a,component:"div",color:h.labelHint.color.base,variant:h.labelHint.typography.variant,fontFamily:h.labelHint.typography.fontFamily,children:[r,s&&l.jsx(lo,{...s,otherIconButtonProps:{variant:"default20",typographyVariant:h.labelHint.typography.variant}})]})]}),l.jsx("div",{children:c})]})}co.Label=function(o){const{text:t,component:r="span"}=o,{tokens:a}=d(),{inputLabelTop:s}=a;return l.jsx(f,{component:r,color:s.label.color.base,variant:s.label.typography.variant,fontFamily:s.label.typography.fontFamily,children:t})};var G=co;function Qt(e){const{label:o,labelTooltipProps:t,labelHint:r,labelHintID:a,labelHintTooltipProps:s,children:c,...u}=e,{tokens:h}=d(),{inputLabelTop:b}=h;return l.jsx(G,{labelElement:l.jsxs("div",{children:[l.jsx("label",{...u,children:o&&l.jsx(G.Label,{text:o})}),t&&l.jsx(lo,{...t,otherIconButtonProps:{variant:"default",typographyVariant:b.label.typography.variant}})]}),labelText:o,labelHint:r,labelHintID:a,labelHintTooltipProps:s,children:c})}var uo=Qt,oe=i(uo)`
  ${()=>n`
      width: 100%;
    `}
`,te=i.div`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`,ee=i.input`
  ${()=>{const{tokens:e}=d(),{textInput:o,typography:t}=e,r=o.typography.variant,a=$(t.fontSize[r]),s=$(t.lineHeight[r]);return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${t.fontFamily[r]};
      font-size: ${a};
      line-height: ${s};

      &:read-only {
        color: ${o.color.readOnly};
      }
      &:disabled {
        color: ${o.color.disabled};
      }
    `}}
`,re=i(f)`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`,ne=i.div`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`,v=i.div`
  ${()=>{const{tokens:e}=d(),{outerField:o}=e;return n`
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
`,ie=i.div`
  ${({$hasError:e})=>{const{tokens:o}=d(),{outerField:t}=o;return[n`
        position: relative;
        width: 100%;
        background: ${t.backgroundColor};

        outline-color: ${t.stroke.color.base};
        outline-width: ${t.stroke.width.base};
        outline-offset: ${t.stroke.offset.base};
        outline-style: ${t.stroke.style};
        border-radius: ${t.radius};

        ${v}:has(input:not(:disabled):not(:read-only)):hover &&,
        ${v}:has(textarea:not(:disabled):not(:read-only)):hover && {
          outline-color: ${t.stroke.color.hover};
          outline-width: ${t.stroke.width.hover};
          outline-offset: ${t.stroke.offset.hover};
        }

        ${v}:has(input:read-only) &&,
        ${v}:has(textarea:read-only) && {
          outline-color: ${t.stroke.color.readOnly};
        }

        ${v}:has(input:focus:not(:read-only)) &&,
        ${v}:has(textarea:focus:not(:read-only)) && {
          outline-color: ${t.stroke.color.focus};
          outline-width: ${t.stroke.width.focus};
          outline-offset: ${t.stroke.offset.focus};
        }
      `,e&&n`
          &&,
          ${v}:has(input:read-only) &&,
          ${v}:has(input:disabled) &&,
          ${v}:has(textarea:read-only) &&,
          ${v}:has(textarea:disabled) && {
            outline-width: ${t.stroke.width.error};
            outline-color: ${t.stroke.color.error};
            outline-offset: ${t.stroke.offset.error};
          }
        `]}}
`;function ae(e){const{hasError:o,children:t}=e;return l.jsx(v,{children:l.jsx(ie,{$hasError:o,children:t})})}var de=ae,se=i(f)`
  ${()=>{const{tokens:e}=d(),{charactersCounter:o}=e;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function le(e){const{length:o,maxLength:t,testID:r}=e,{tokens:a}=d(),{charactersCounter:s}=a,c=Math.max(0,t-o);return l.jsx(se,{variant:s.typography.variant,fontFamily:s.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}var ce=p.memo(le),ue=p.forwardRef((e,o)=>{var U;const{id:t,hasError:r,prefix:a,icon:s,onChange:c,testID:u="input",labelProps:h,alertProps:b,...g}=e,y=p.useId(),k=p.useId(),{labelHint:T}=h,{maxLength:I}=g,{tokens:{textInput:j}}=d(),[D,B]=p.useState(((U=g.value||g.defaultValue)==null?void 0:U.length)||0),ko=p.useCallback(V=>{B(V.target.value.length),c==null||c(V)},[c]);return l.jsxs(N,{gap:g.maxLength?"4px":"8px",alert:b?l.jsx(E,{...b,testID:`${u}-alert`}):void 0,children:[l.jsx(oe,{...h,labelHintID:k,htmlFor:t||y,"data-testid":`${u}-label`,children:l.jsx(de,{hasError:r,children:l.jsxs(te,{children:[a?l.jsx(re,{variant:j.prefix.typography.variant,fontFamily:j.prefix.typography.fontFamily,testID:`${u}-prefix`,children:a}):void 0,l.jsx(ee,{...g,ref:o,id:t||y,onChange:ko,"aria-describedby":T?k:void 0,"data-testid":u}),s?l.jsx(ne,{"data-testid":`${u}-icon-wrapper`,children:s}):void 0]})})}),I?l.jsx(ce,{length:D,maxLength:I,testID:`${u}-characters-counter`}):void 0]})});ue.displayName="TextInput";i.div`
  ${()=>{const{tokens:e}=d(),{datePicker:o}=e;return n`
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
`;i.div`
  ${()=>{const{tokens:e}=d(),{datePicker:o}=e;return n`
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
`;var w=i.button`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return n`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${t.padding[e]};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    `}}
`,pe=i.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return[n`
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
      `,e==="contained"&&n`
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
`,po=p.forwardRef((e,o)=>{const{variant:t=vo.DEFAULT_VARIANT,children:r,testID:a="icon-button",...s}=e;return l.jsx(w,{...s,ref:o,$variant:t,"data-testid":a,children:l.jsx(pe,{$variant:t,children:r})})});po.displayName="IconButton";var he=po,be=p.forwardRef((e,o)=>{[e,o]=qo(e,o,Zo);const{buttonProps:t}=Xo(e,o);return l.jsxs(he,{...t,ref:o,children:[e.slot==="previous"&&l.jsx(Co,{}),e.slot==="next"&&l.jsx(Io,{})]})});be.displayName="DatePickerIconButton";i.div`
  ${({$padding:e})=>{const{tokens:o}=d(),{menu:t}=o;return n`
      padding: calc(1px * ${e});
      z-index: ${t.zIndex};
    `}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return n`
      display: grid;
      overflow: hidden;
      border-radius: ${o.radius};
      border-width: ${o.stroke.width};
      border-style: ${o.stroke.style};
      border-color: ${o.stroke.color};
      box-shadow: 0px 2px 2px ${o.shadow.outer.color};
    `}}
`;i.div`
  max-height: calc(1px * ${yo.MAX_LIST_HEIGHT});
`;i.ul`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.separator.width};
      background: ${o.separator.color};
      max-width: ${o.maxWidth};
    `}}
`;var X=i.li`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.option.padding};
        background: ${o.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return[n`
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

        ${X}:hover &&,
        ${X}:focus-visible && {
          background: ${o.option.inner.backgroundColor.hover};
          outline-color: ${o.option.inner.stroke.color.hover};
        }
      `]}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{menu:o}=e;return[n`
        svg {
          display: block;
          width: ${o.option.inner.icon.width};
          height: ${o.option.inner.icon.height};
        }
      `]}}
`;i.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;var ho=i.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`;i(ho)`
  ${({$visible:e})=>{const{tokens:o}=d(),{scrollShadowContainer:t}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`;i(ho)`
  ${({$visible:e})=>{const{tokens:o}=d(),{scrollShadowContainer:t}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`;i.div`
  ${()=>{const{tokens:{scrollShadowContainer:e,scrollBar:{thumbColor:o,trackColor:t}}}=d();return n`
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
`;var ge=i.a`
  ${({$display:e})=>{const{tokens:o}=d(),{link:t}=o;return n`
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
`,$e=p.forwardRef;function fe(e,o){const{display:t="inline",component:r="a",testID:a="link",...s}=e;return l.jsx(ge,{...s,ref:o,as:r,"data-testid":a,$display:t})}var bo=$e(fe),go=i(bo)``,ke=i(f)`
  ${({$isUnderlined:e})=>{const{tokens:o}=d(),{link:t}=o;return[n`
        background: ${t.backgroundColor.base};

        text-decoration-thickness: ${t.decoration.thickness.base};
        text-underline-offset: ${t.decoration.offset};

        &:hover {
          text-decoration-line: ${t.decoration.line.base};
          text-decoration-thickness: ${t.decoration.thickness.hover};
        }

        &:active {
          background: ${t.backgroundColor.active};
          text-decoration-line: ${t.decoration.line.base};
          text-decoration-thickness: ${t.decoration.thickness.active};
        }

        ${go}:focus-visible && {
          text-decoration-line: ${t.decoration.line.focus};
        }
      `,e&&n`
          text-decoration-line: ${t.decoration.line.base};
        `]}}
`,me=p.forwardRef((e,o)=>{const{isUnderlined:t=!0,variant:r=J.DEFAULT_VARIANT,children:a,...s}=e,{tokens:c}=d(),{link:u}=c;return l.jsx(go,{...s,ref:o,children:l.jsx(ke,{component:"span",color:"inherit",variant:r,fontFamily:u.typography.fontFamily,$isUnderlined:t,children:a})})});me.displayName="Link";var $o=i(bo)``,S=i.div`
  ${()=>{const{tokens:e}=d(),{link:o}=e;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,ve=i(f)`
  ${({$isUnderlined:e})=>{const{tokens:o}=d(),{link:t}=o;return[n`
        background: ${t.backgroundColor.base};

        text-decoration-thickness: ${t.decoration.thickness.base};
        text-underline-offset: ${t.decoration.offset};

        ${S}:hover && {
          text-decoration-line: ${t.decoration.line.base};
          text-decoration-thickness: ${t.decoration.thickness.hover};
        }

        ${S}:active && {
          background: ${t.backgroundColor.active};
          text-decoration-line: ${t.decoration.line.base};
          text-decoration-thickness: ${t.decoration.thickness.active};
        }

        ${$o}:focus-visible && {
          text-decoration-line: ${t.decoration.line.focus};
        }
      `,e&&n`
          text-decoration-line: ${t.decoration.line.base};
        `]}}
`,Z=i.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{link:t}=o,r=$(t.withIcon.size[e]);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${r};
        height: ${r};
      }
    `}}
`,ye=p.forwardRef((e,o)=>{const{isUnderlined:t=!0,variant:r=J.DEFAULT_VARIANT,startIcon:a,endIcon:s,children:c,testID:u="link",...h}=e,{tokens:b}=d(),{link:g}=b;return l.jsx($o,{...h,ref:o,display:"inline-flex",testID:u,children:l.jsxs(S,{children:[a&&l.jsx(Z,{$variant:r,"data-testid":`${u}-start-icon-wrapper`,children:a}),l.jsx(ve,{component:"span",color:"inherit",variant:r,fontFamily:g.typography.fontFamily,$isUnderlined:t,children:c}),s&&l.jsx(Z,{$variant:r,"data-testid":`${u}-end-icon-wrapper`,children:s})]})})});ye.displayName="LinkWithIcon";i.div`
  overflow: hidden;
`;i.div`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return n`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return n`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;i.li`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;i.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=d(),{multiSelect:r}=t;return[n`
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
      `,e&&n`
          background: ${r.menu.option.inner.backgroundColor.active};
        `,o&&n`
          background: ${r.menu.option.inner.backgroundColor.hover};
        `]}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[n`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;i.div`
  ${({$isOpen:e,$hasError:o,$isDisabled:t})=>{const{tokens:r}=d(),{select:a}=r;return[n`
        display: grid;
        background: ${a.button.backgroundColor.base};
        padding-top: ${a.button.paddingTop};
        padding-bottom: ${a.button.paddingBottom};
        padding-left: ${a.button.paddingLeft};
        padding-right: ${a.button.paddingRight};
        border-radius: ${a.button.stroke.radius};
        outline-width: ${a.button.stroke.width.base};
        outline-style: ${a.button.stroke.style};
        outline-color: ${a.button.stroke.color.base};
        outline-offset: ${a.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${a.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${a.button.stroke.width.hover};
          outline-color: ${a.button.stroke.color.hover};
          outline-offset: ${a.button.stroke.offset.hover};

          svg {
            color: ${a.button.icon.color.hover};
          }
        }
      `,o&&n`
          &,
          &:hover,
          &:focus {
            outline-width: ${a.button.stroke.width.error};
            outline-color: ${a.button.stroke.color.error};
            outline-offset: ${a.button.stroke.offset.error};
          }
        `,e&&n`
          &,
          &:hover,
          &:focus {
            outline-width: ${a.button.stroke.width.active};
            outline-color: ${a.button.stroke.color.active};
            outline-offset: ${a.button.stroke.offset.active};

            svg {
              color: ${a.button.icon.color.active};
            }
          }
        `,t&&n`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${a.button.stroke.width.disabled};
            outline-color: ${a.button.stroke.color.disabled};
            outline-offset: ${a.button.stroke.offset.disabled};

            svg {
              color: ${a.button.icon.color.disabled};
            }
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return n`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return n`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var we=i(jo)`
  rotate: 0deg;
`;i(we)`
  rotate: 180deg;
`;i.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{select:t}=o;return n`
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
`;i.ul`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.menu.separator.width};
      background: ${o.menu.separator.color};
    `}}
`;var A=i.div`
  ${({$hasError:e})=>{const{tokens:o}=d(),{radio:t}=o;return[n`
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
      `,e&&n`
          outline-width: ${t.stroke.width.error};
          outline-color: ${t.stroke.color.error};
        `]}}
`,xe=i.input`
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
`,Ce=i.div`
  ${()=>{const{tokens:e}=d(),{radio:o}=e;return[n`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${A}:has(input:checked) && {
          display: block;
        }

        ${A}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${A}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,fo=p.forwardRef((e,o)=>{const{hasError:t,testID:r="radio",...a}=e;return l.jsxs(A,{$hasError:t,children:[l.jsx(xe,{...a,ref:o,type:"radio","data-testid":r}),l.jsx(Ce,{})]})});fo.displayName="RadioBase";var Ie=fo,Re=p.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...a}=e,{testID:s="radio"}=a;return l.jsx(N,{alert:r?l.jsx(E,{...r,testID:`${s}-alert`}):void 0,children:l.jsx(to,{...t,children:l.jsx(Ie,{...a,ref:o})})})});Re.displayName="Radio";i.div`
  ${({$isDisabled:e,$hasSelectedItem:o})=>{const{tokens:t}=d(),{select:r}=t;return[n`
        overflow: hidden;
        color: ${r.button.placeholder.color.base};
      `,e&&n`
          color: ${r.button.placeholder.color.disabled};
        `,o&&n`
          color: ${r.button.text.color.base};
        `,e&&o&&n`
          color: ${r.button.text.color.disabled};
        `]}}
`;i.li`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;i.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=d(),{select:r}=t;return[n`
        display: grid;
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
      `,e&&n`
          background: ${r.menu.option.inner.backgroundColor.active};
          outline-color: ${r.menu.option.inner.stroke.color.active};
        `,o&&n`
          background: ${r.menu.option.inner.backgroundColor.hover};
          outline-color: ${r.menu.option.inner.stroke.color.hover};
        `]}}
`;i(K)`
  ${({$isSelected:e})=>{const{tokens:o}=d(),{select:t}=o;return[n`
        visibility: ${e?"visible":"hidden"};
        width: ${t.menu.option.inner.icon.width};
        height: ${t.menu.option.inner.icon.height};
      `]}}
`;i.div`
  ${()=>{const{tokens:{slider:e}}=d();return n`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${e.track.padding};
    `}}
`;i.div`
  ${()=>{const{tokens:{slider:e}}=d();return n`
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
`;i.div`
  ${()=>{const{tokens:{slider:e}}=d();return n`
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
`;i.div`
  ${({$notchAsPercent:e})=>{const{tokens:{slider:o}}=d();return n`
      width: ${e}%;
      border-right: ${o.notch.size} ${o.notch.color} solid;
    `}};
`;i(H)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;i.header`
  ${({$borderVisible:e})=>{const{tokens:o}=d(),{standardModal:t,modal:r}=o;return[n`
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
      `,e&&n`
          border-bottom-color: ${t.header.stroke.bottom.color};
        `]}}
`;i.div`
  ${({$headingVisible:e})=>{const{tokens:{modal:o,standardModal:{header:{padding:t}}}}=d(),r=`calc(${t.mobile.top} + ${t.mobile.bottom} + 100%)`,a=`calc(${t.mobile.top} + ${t.mobile.bottom} + 100%)`;return[n`
        overflow: hidden;
        transition: transform 0.35s;
        transform: translateY(${r});
        @media (min-width: ${o.breakpoints.tablet}) {
          transform: translateY(${a});
        }
      `,!e&&n`
          && {
            transform: translateY(0);
          }
        `]}}
`;i.div`
  margin: -6px;
  margin-top: -10px;
  margin-bottom: -11px;
`;i.div`
  ${()=>{const{tokens:e}=d(),{standardModal:o,modal:t}=e;return n`
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
`;i.footer`
  ${()=>{const{tokens:e}=d(),{standardModal:o}=e;return n`
      height: ${o.footer.height};
    `}}
`;var Te=i.table`
  ${({$layout:e})=>{const{tokens:o}=d(),{table:t}=o;return[n`
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
      `,e&&n`
          table-layout: ${e};
        `]}}
`;function R(e){const{layout:o,testID:t="table",...r}=e;return l.jsx(Te,{width:"100%",...r,$layout:o,"data-testid":t})}R.Thead=e=>{const{tokens:o}=d(),{table:t}=o;return l.jsx(f,{component:"thead",variant:t.head.typography.variant,fontFamily:t.head.typography.fontFamily,...e})};R.Tbody=e=>{const{tokens:o}=d(),{table:t}=o;return l.jsx(f,{component:"tbody",variant:t.body.typography.variant,fontFamily:t.body.typography.fontFamily,...e})};R.Tr=e=>l.jsx("tr",{...e});R.Th=e=>{const{align:o="right",...t}=e;return l.jsx("th",{align:o,...t})};R.Td=e=>{const{align:o="right",...t}=e;return l.jsx("td",{align:o,...t})};var We=R;i.div`
  font-size: 0;
`;i.div`
  ${({$tabsView:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[n`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!e||e==="mobile")&&n`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      display: grid;
      gap: ${o.desktop.container.gap};
    `}}
`;i.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`;i.label`
  position: relative;
  display: grid;
  text-wrap: nowrap;
  cursor: pointer;

  &:has(button:disabled) {
    cursor: not-allowed;
  }
`;i.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
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
`;i.div`
  ${({$withIcon:e,$isActive:o})=>{const{tokens:t}=d(),{tabs:r}=t;return[n`
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
      `,e&&n`
          padding-left: ${r.desktop.tab.padding.left.withIcon};
          padding-right: ${r.desktop.tab.padding.right.withIcon};
        `,o&&n`
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
`;i.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[n`
        color: ${t.desktop.tab.label.color.base};

        label:hover && {
          color: ${t.desktop.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.desktop.tab.label.color.disabled};
        }
      `,e&&n`
          color: ${t.desktop.tab.label.color.active};

          label:hover && {
            color: ${t.desktop.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.desktop.tab.label.color.disabled};
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      color: ${o.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`;i.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[n`
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
      `,e&&n`
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
`;i.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      width: ${o.desktop.tab.separator.width};
      background-color: ${o.desktop.tab.separator.color};
      margin-top: ${o.desktop.tab.separator.marginTop};
    `}}
`;i.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
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
`;i.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;i.div`
  ${({$withIcon:e,$isActive:o,$withPadding:t})=>{const{tokens:r}=d(),{tabs:a}=r;return[n`
        display: ${o?"block":"none"};
        background: ${a.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${a.panel.focusRing.width};
          outline-style: ${a.panel.focusRing.style};
          outline-color: ${a.panel.focusRing.color};
        }
      `,t&&n`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,t&&e&&n`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`;i(uo)`
  ${()=>n`
      width: 100%;
    `}
`;i.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:e})=>{const{tokens:o}=d(),{textArea:t,outerField:r}=o;return n`
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

      ${()=>(e==="TOP"||e==="BOTH")&&n`
          &::before {
            opacity: ${t.innerShadow.opacity.active};
          }
        `}

      ${()=>(e==="BOTTOM"||e==="BOTH")&&n`
        &::after {
          opacity: ${t.innerShadow.opacity.active};
      `}
    `}}
`;i(Jo)`
  ${()=>{const{tokens:e}=d(),{textArea:o,typography:t,scrollBar:r,outerField:a}=e,s=o.typography.variant,c=$(t.fontSize[s]),u=$(t.lineHeight[s]);return n`
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
      font-family: ${t.fontFamily[s]};
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
          border: 3.5px solid ${a.backgroundColor};
        }
      }
    `}}
`;var Y="0.4s",C=i.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width),r=$(o.size[e].height);return n`
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
`;i.input`
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
`;i.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width),r=o.thumb.size[e].margin;return[n`
        position: relative;
        width: ${o.thumb.size[e].width};
        height: ${o.thumb.size[e].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[e].height};
        margin: ${r};
        transition: transform ${Y};
        ${C}:has(input:checked) && {
          transform: translateX(calc(${t} - ${r} - ${r} - 100%));
        }

        ${C}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;i(f)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[e].padding};
        transition: opacity ${Y};

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
`;i(f)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[e].padding};
        transition: opacity ${Y};

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
`;i.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`;i.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width),r=$(o.size[e].height);return n`
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
`;i.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=$(o.size[e].width);return n`
      width: ${t};
      background-color: transparent;
    `}}
`;export{We as T,f as a};
