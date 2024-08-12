import{r as u}from"./index-DH5ua8nC.js";import{T as G,B as mo,I as yo}from"./index-BGt6MgUo.js";import{a,u as s,b as n,p as $,h as wo}from"./index-jNFq1OWt.js";import{A as xo,a as Co,C as O,E as K,W as J,S as Q,I as Z,M as Ro,T as q,b as Io,c as jo,d as Lo}from"./index-M-g1GIMf.js";import{j as d}from"./jsx-runtime-DQ32znRX.js";import{u as W,F as To,a as Bo}from"./floating-ui.react-BezaurJz.js";import{$ as So,a as Do}from"./Button-D-U0fkv9.js";import{$ as Fo}from"./utils-DMjC9_eM.js";import{i as Eo}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";a.div`
  ${({$variant:e})=>{const{tokens:o}=s(),{accordion:t}=o;return[n`
        display: grid;
        background: ${t.background[e]};
        border-width: ${t.stroke.width};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color};
        border-radius: ${t.stroke.radius};
      `]}}
`;var z=a.button`
  ${()=>{const{tokens:e}=s(),{accordion:o}=e;return[n`
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
  ${({$variant:e})=>{const{tokens:o}=s(),{accordion:t}=o;return[n`
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

        ${z}:hover & {
          background: ${t.header.inner.backgroundColor.hover};
        }

        ${z}:active & {
          background: ${t.header.inner.backgroundColor.active[e]};
        }
      `]}}
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=s(),{accordion:t}=o;return[n`
        color: ${t.header.icon.color.base};
        transform: rotateX(${e?"180deg":"0deg"});

        svg {
          display: block;
          width: ${t.header.icon.width};
          height: ${t.header.icon.height};
        }

        ${z}:hover & {
          color: ${t.header.icon.color.hover};
        }

        ${z}:active & {
          color: ${t.header.icon.color.active};
        }
      `]}}
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=s(),{accordion:t}=o;return[n`
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
  ${({hidden:e})=>{const{tokens:o}=s(),{accordion:t}=o;return[n`
        display: ${e?"none":"block"};
        padding: ${t.content.padding};
      `]}}
`;var zo=a.p`
  ${({$variant:e,$fontFamily:o,$noWrap:t,$color:r})=>{const{tokens:i}=s(),{typography:l,fontFamily:c}=i,p=$(l.fontSize[e]),h=$(l.lineHeight[e]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||l.color[e]};
        font-size: ${p};
        line-height: ${h};
        font-family: ${l.fontFamily[e]};
      `,o&&n`
          font-family: ${c[o]};
        `,t&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,G.STANDARD_VARIANTS.includes(e)&&n`
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
            font-family: ${G.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function Wo(e,o){const{variant:t,component:r,color:i,fontFamily:l,noWrap:c,testID:p,...h}=e;return d.jsx(zo,{...h,ref:o,as:r,$variant:t,$color:i,$fontFamily:l,$noWrap:c,"data-testid":p})}var _o=u.forwardRef(Wo),Po={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},Oo=u.forwardRef;function Ao(e,o){const{variant:t="bodyM",component:r,...i}=e;return d.jsx(_o,{...i,ref:o,variant:t,component:r||Po[t]})}var f=Oo(Ao),Mo=a.div`
  ${()=>{const{tokens:e}=s(),{accordionGroup:o}=e;return[n`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;a(Mo)`
  ${()=>{const{tokens:e}=s(),{accordionGroup:o}=e;return[n`
        gap: ${o.gap.nested};
      `]}}
`;a.div`
  ${({$severity:e})=>{const{tokens:o}=s(),{alert:t}=o;return n`
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
  ${({$severity:e})=>{const{tokens:o}=s(),{alert:t}=o;return n`
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
`;var Ho=a.div`
  ${({$severity:e})=>{const{tokens:o}=s(),{modal:t,alertModal:r}=o;return n`
      display: grid;
      gap: ${r.gap};
      border-top-width: ${r.stroke.top.width};
      border-top-style: ${r.stroke.top.style};
      border-top-color: ${r.stroke.top.color[e]};

      @media (min-width: ${t.desktop.minWidth}) {
        padding-top: ${r.padding.desktop.top};
        padding-left: ${r.padding.desktop.left};
        padding-right: ${r.padding.desktop.right};
        padding-bottom: ${r.padding.desktop.bottom};
      }

      @media (max-width: ${t.desktop.minWidth}) {
        padding-top: ${r.padding.mobile.top};
        padding-left: ${r.padding.mobile.left};
        padding-right: ${r.padding.mobile.right};
        padding-bottom: ${r.padding.mobile.bottom};
      }
    `}}
`,No=a.div`
  display: grid;
  gap: 8px;
`,Yo=a.div`
  ${({$severity:e})=>{const{tokens:o}=s(),{alertModal:t}=o;return n`
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
`,Vo=a.div`
  ${()=>{const{tokens:e}=s(),{alertModal:o}=e;return n`
      color: ${o.body.color};
    `}}
`,Go=a.div`
  ${({$layout:e})=>{const{tokens:o}=s(),{alertModal:t}=o;return[n`
        gap: ${t.footer.gap};
      `,e==="inline"&&n`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&n`
          display: grid;
          grid-auto-flow: row;
        `]}}
`,Uo="info",Xo=2,Ko="inline",Jo=a.dialog`
  ${()=>{const{tokens:e}=s(),{modal:o}=e;return n`
      border: unset;
      padding: unset;
      overflow: hidden;
      border-radius: ${o.radius};
      background: ${o.backgroundColor};

      &::backdrop {
        background: ${o.backdrop.backgroundColor};
      }

      @media (min-width: ${o.desktop.minWidth}) {
        max-width: ${o.desktop.maxWidth};
        max-height: ${o.desktop.maxHeight};
      }

      @media (max-width: ${o.desktop.minWidth}) {
        width: 100%;
        min-width: ${o.mobile.minWidth};
        max-width: none;
        min-height: ${o.mobile.minHeight};
        max-height: 90%;
        margin-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}}
`;function Qo(e,o){u.useEffect(()=>{const t=e.current;t&&(o&&!t.open?t.showModal():!o&&t.open&&t.close())},[o])}function Zo(e,o){u.useEffect(()=>{const t=e.current;function r(){o==null||o()}if(t)return t.addEventListener("close",r),()=>{t.removeEventListener("close",r)}},[o])}function qo(e,o){u.useEffect(()=>{const t=e.current;function r(i){i.key==="Escape"&&i.preventDefault()}if(t&&!o)return t.addEventListener("keydown",r),()=>{t.removeEventListener("keydown",r)}},[o])}var oo=u.forwardRef((e,o)=>{const{isOpen:t,onRequestClose:r,isEscDismissible:i=!0,children:l,testID:c="modal",...p}=e,h=u.useRef(null),b=W([h,o]);return Qo(h,t),Zo(h,r),qo(h,i),d.jsx(Jo,{...p,ref:b,"data-testid":c,children:l})});oo.displayName="Modal";var to=oo,ot=u.forwardRef((e,o)=>{const{heading:t,headingLevel:r=Xo,severity:i=Uo,footer:l,footerLayout:c=Ko,children:p,testID:h="alert-modal",...b}=e,{tokens:g}=s(),{alertModal:k}=g,m=u.useId(),R={error:d.jsx(K,{}),warning:d.jsx(J,{}),success:d.jsx(Q,{}),info:d.jsx(Z,{})};return d.jsx(to,{...b,ref:o,isEscDismissible:!1,"aria-labelledby":m,testID:h,children:d.jsxs(Ho,{$severity:i,children:[d.jsxs(No,{children:[d.jsx(Yo,{$severity:i,children:R[i]}),d.jsx(f,{id:m,component:`h${r}`,variant:k.heading.typography.variant,fontFamily:k.heading.typography.fontFamily,children:t}),d.jsx(Vo,{children:p})]}),d.jsx("div",{children:d.jsx(Go,{$layout:c,children:l})})]})})});ot.displayName="AlertModal";var tt=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,et=a.span`
  ${({$isLoading:e})=>{const{tokens:o}=s(),{button:t}=o,r=$(t.topLayer.icon.width),i=$(t.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${e?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${i};
      }
    `}}
`,rt=a.div`
  ${({$isLoading:e})=>n`
      visibility: ${e?"hidden":"visible"};
      overflow: hidden;
    `}
`,nt=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,v=a.button`
  ${({$variant:e,$isLoading:o,$fullWidth:t})=>{const{tokens:r}=s(),{button:i}=r;return[n`
        all: unset;
        position: relative;
        display: grid;
        align-items: start;
        height: ${i.height};
        width: ${t?"100%":"auto"};
        min-width: ${i.minWidth};
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: ${i.opacity.disabled};
        }

        &[aria-disabled="true"] {
          cursor: not-allowed;
        }
      `,!o&&n`
          &:not(:disabled):focus-visible {
            border-radius: ${i.topLayer.stroke.radius};
            outline-width: ${i.focusRing.width};
            outline-style: ${i.focusRing.style};
            outline-color: ${i.focusRing.color[e]};
            outline-offset: ${i.focusRing.offset};
          }
        `]}}
`,it=a.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=s(),{button:r}=t;return[n`
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
      `,e==="secondary"&&n`
          ${v}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[e].hover};
          }

          ${v}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[e].active};
          }
        `,o&&n`
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
`,at=a.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=s(),{button:r}=t,{shadow:i}=r.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[e].base};
        box-shadow: 0px ${i.blur} ${i.offsetY} ${i.color};

        ${v}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[e].hover};
        }

        ${v}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;
        }
      `,o&&n`
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;

          ${v}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }

          ${v}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }
        `]}}
`,eo=u.forwardRef((e,o)=>{const{variant:t,children:r,testID:i,type:l,isLoading:c,fullWidth:p,...h}=e;return d.jsxs(v,{...h,ref:o,$variant:t,$isLoading:c,$fullWidth:p,"data-testid":i,type:l||"button",children:[d.jsx(at,{$variant:t,$isLoading:c}),d.jsx(it,{$variant:t,$isLoading:c,children:r})]})});eo.displayName="ButtonBase";var dt=eo,st=wo`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,lt=a.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:e,$color:o})=>n`
    color: ${o};
    width: ${e};
    height: ${e};
  `}
`,ct=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:e})=>{const{tokens:{spinner:o}}=s();return n`
      border: ${e} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,_=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${st} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:e,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(e+1)}s;
    `}
`,ro=u.memo(e=>{const{testID:o="spinner"}=e,{tokens:{spinner:t}}=s();let r,i;if("variant"in e){const p=t.variants[e.variant];p&&([r,i]=[p.color,p.size])}"size"in e&&e.size?i=e.size:i||(i=t.variants.default.size),"color"in e&&e.color?r=e.color:r||(r=t.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(i)/parseInt(t.borderRatio))}px`};return d.jsxs(lt,{$color:r,$size:i,"data-testid":o,children:[d.jsx(ct,{...c}),d.jsx(_,{$index:0,...c}),d.jsx(_,{$index:1,...c}),d.jsx(_,{$index:2,...c})]})});ro.displayName="Spinner";var ut=ro,pt=u.forwardRef((e,o)=>{const{text:t,variant:r="primary",startIcon:i,isLoading:l,testID:c="button",...p}=e,{tokens:h}=s(),{button:b}=h,g={"aria-disabled":l,"aria-label":l?"Loading":void 0};return d.jsx(dt,{...p,...g,ref:o,variant:r,isLoading:l,testID:c,children:d.jsxs(tt,{children:[i&&d.jsx(et,{$isLoading:l,children:i}),d.jsx(rt,{$isLoading:l,children:d.jsx(f,{variant:b.topLayer.text.typography.variant,fontFamily:b.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:t})}),l&&d.jsx(nt,{children:d.jsx(ut,{variant:mo.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});pt.displayName="Button";var ht=a.div`
  ${({$gap:e="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${e};
  `}
`;function bt(e){const{alert:o,gap:t,children:r}=e;return d.jsxs(ht,{$gap:t,children:[r,o&&o]})}var A=bt,gt=a.div`
  ${({$severity:e})=>{const{tokens:o}=s(),{inlineAlert:t}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${t.gap};
      color: ${t.color[e]};

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
      }
    `}}
`,$t=a.div`
  ${({$severity:e})=>{const{tokens:o}=s(),{inlineAlert:t}=o,r=$(t.iconWrapper.height);return n`
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
`;function ft(e){const{severity:o,children:t,testID:r="inline-alert"}=e,i={error:"alert",warning:"alert",success:"status",info:"status"},l={error:d.jsx(K,{"aria-hidden":"true"}),warning:d.jsx(J,{"aria-hidden":"true"}),success:d.jsx(Q,{"aria-hidden":"true"}),info:d.jsx(Z,{"aria-hidden":"true"})};return d.jsxs(gt,{role:i[o],$severity:o,"data-testid":r,children:[d.jsx($t,{$severity:o,children:l[o]}),d.jsx(f,{color:"inherit",children:t})]})}var M=ft,kt=a.label`
  ${()=>{const{tokens:e}=s(),{inputLabelRight:o}=e;return n`
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
`,vt=a.span`
  ${()=>{const{tokens:e}=s(),{inputLabelRight:o}=e;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function mt(e){const{label:o,children:t,...r}=e,{tokens:i}=s(),{inputLabelRight:l}=i;return d.jsxs(kt,{...r,children:[d.jsx("span",{children:t}),o&&d.jsx(vt,{children:d.jsx(f,{component:"span",color:"inherit",variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:o})})]})}var no=mt,H=a.div`
  ${({$hasError:e})=>{const{tokens:o}=s(),{checkbox:t}=o;return[n`
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
`,yt=a.input`
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
`,wt=a(Ro)`
  ${()=>{const{tokens:e}=s(),{checkbox:o}=e;return[n`
        display: none;

        ${H}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,xt=a(q)`
  ${()=>{const{tokens:e}=s(),{checkbox:o}=e;return[n`
        display: none;

        ${H}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function Ct(e,o){u.useEffect(()=>{e.current&&(e.current.indeterminate=!!o)},[o])}var io=u.forwardRef((e,o)=>{const{hasError:t,isIndeterminate:r,testID:i="checkbox",...l}=e,c=u.useRef(null);Ct(c,r);const p=W([c,o]);function h(b){var g;b.target.indeterminate=!!r,(g=l.onChange)==null||g.call(l,b)}return d.jsxs(H,{$hasError:t,children:[d.jsx(yt,{...l,ref:p,type:"checkbox",onChange:h,"data-testid":i}),d.jsx(wt,{}),d.jsx(xt,{})]})});io.displayName="CheckboxBase";var Rt=io,It=u.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...i}=e,{testID:l="checkbox"}=i;return d.jsx(A,{alert:r?d.jsx(M,{...r,testID:`${l}-alert`}):void 0,children:d.jsx(no,{...t,children:d.jsx(Rt,{...i,ref:o})})})});It.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:e}=s(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var jt=a.ul`
  ${()=>{const{tokens:e}=s(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(jt)`
  ${()=>{const{tokens:e}=s(),{fieldset:o}=e;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:e}=s(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var Lt=a.div`
  ${({$labelText:e})=>{const{tokens:o}=s(),{inputLabelTop:t}=o;return[n`
        width: 100%;
        display: grid;
      `,e&&n`
          gap: ${t.gap};
        `]}}
`,Tt=a.span`
  ${()=>{const{tokens:e}=s(),{inputLabelTop:o}=e;return n`
      color: ${o.label.color.base};
    `}}
`,Bt=a.div`
  ${()=>{const{tokens:e}=s(),{inputLabelTop:o}=e;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function ao(e){const{labelElement:o,labelText:t,labelHint:r,labelHintID:i,children:l}=e,{tokens:c}=s(),{inputLabelTop:p}=c;return d.jsxs(Lt,{$labelText:t,children:[d.jsxs("div",{children:[o,r&&d.jsx(Bt,{children:d.jsx(f,{id:i,component:"span",color:"inherit",variant:p.labelHint.typography.variant,fontFamily:p.labelHint.typography.fontFamily,children:r})})]}),d.jsx("div",{children:l})]})}ao.Label=e=>{const{text:o,component:t="span"}=e,{tokens:r}=s(),{inputLabelTop:i}=r;return d.jsx(Tt,{children:d.jsx(f,{component:t,color:"inherit",variant:i.label.typography.variant,fontFamily:i.label.typography.fontFamily,children:o})})};var U=ao;function St(e){const{label:o,labelHint:t,labelHintID:r,children:i,...l}=e;return d.jsx(U,{labelElement:d.jsx("label",{...l,children:o&&d.jsx(U.Label,{text:o})}),labelText:o,labelHint:t,labelHintID:r,children:i})}var so=St,lo=a(so)`
  ${()=>n`
      width: 100%;
    `}
`,Dt=a.div`
  ${()=>{const{tokens:e}=s(),{textInput:o}=e;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`,Ft=a.input`
  ${()=>{const{tokens:e}=s(),{textInput:o,typography:t}=e,r=o.typography.variant,i=$(t.fontSize[r]),l=$(t.lineHeight[r]);return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${t.fontFamily[r]};
      font-size: ${i};
      line-height: ${l};

      ${lo}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`,Et=a(f)`
  ${()=>{const{tokens:e}=s(),{textInput:o}=e;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`,zt=a.div`
  ${()=>{const{tokens:e}=s(),{textInput:o}=e;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`,y=a.div`
  ${()=>{const{tokens:e}=s(),{outerField:o}=e;return n`
      width: 100%;

      outline-color: ${o.focusRing.color};
      outline-width: ${o.focusRing.width.base};
      outline-style: ${o.focusRing.style};
      outline-offset: ${o.focusRing.offset.base};
      border-radius: ${o.radius};

      &:has(input:focus),
      &:has(textarea:focus) {
        outline-width: ${o.focusRing.width.focus};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,Wt=a.div`
  ${({$hasError:e})=>{const{tokens:o}=s(),{outerField:t}=o;return[n`
        position: relative;
        width: 100%;
        background: ${t.backgroundColor};

        outline-color: ${t.stroke.color.base};
        outline-width: ${t.stroke.width.base};
        outline-offset: ${t.stroke.offset.base};
        outline-style: ${t.stroke.style};
        border-radius: ${t.radius};

        ${y}:has(input:not(:disabled)):hover &&,
        ${y}:has(textarea:not(:disabled)):hover && {
          outline-color: ${t.stroke.color.hover};
          outline-width: ${t.stroke.width.hover};
          outline-offset: ${t.stroke.offset.hover};
        }

        ${y}:has(input:read-only) &&,
        ${y}:has(textarea:read-only) && {
          outline-color: ${t.stroke.color.readOnly};
        }

        ${y}:has(input:focus) &&,
        ${y}:has(textarea:focus) && {
          outline-color: ${t.stroke.color.focus};
          outline-width: ${t.stroke.width.focus};
          outline-offset: ${t.stroke.offset.focus};
        }
      `,e&&n`
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
`;function _t(e){const{hasError:o,children:t}=e;return d.jsx(y,{children:d.jsx(Wt,{$hasError:o,children:t})})}var Pt=_t,Ot=a(f)`
  ${()=>{const{tokens:e}=s(),{charactersCounter:o}=e;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function At(e){const{length:o,maxLength:t,testID:r}=e,{tokens:i}=s(),{charactersCounter:l}=i,c=Math.max(0,t-o);return d.jsx(Ot,{variant:l.typography.variant,fontFamily:l.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}var Mt=u.memo(At),Ht=u.forwardRef((e,o)=>{var D;const{id:t,hasError:r,prefix:i,icon:l,onChange:c,testID:p="input",labelProps:h,alertProps:b,...g}=e,k=u.useId(),m=u.useId(),{labelHint:R}=h,{maxLength:j}=g,{tokens:{textInput:L}}=s(),[w,B]=u.useState(((D=g.value||g.defaultValue)==null?void 0:D.length)||0),S=u.useCallback(F=>{B(F.target.value.length),c==null||c(F)},[c]);return d.jsxs(A,{gap:g.maxLength?"4px":"8px",alert:b?d.jsx(M,{...b,testID:`${p}-alert`}):void 0,children:[d.jsx(lo,{...h,labelHintID:m,htmlFor:t||k,children:d.jsx(Pt,{hasError:r,children:d.jsxs(Dt,{children:[i?d.jsx(Et,{variant:L.prefix.typography.variant,fontFamily:L.prefix.typography.fontFamily,testID:`${p}-prefix`,children:i}):void 0,d.jsx(Ft,{...g,ref:o,id:t||k,onChange:S,"aria-describedby":R?m:void 0,"data-testid":p}),l?d.jsx(zt,{"data-testid":`${p}-icon-wrapper`,children:l}):void 0]})})}),j?d.jsx(Mt,{length:w,maxLength:j,testID:`${p}-characters-counter`}):void 0]})});Ht.displayName="TextInput";a.div`
  ${()=>{const{tokens:e}=s(),{datePicker:o}=e;return n`
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
  ${()=>{const{tokens:e}=s(),{datePicker:o}=e;return n`
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
            cursor: default;
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
`;var I=a.button`
  ${({$variant:e})=>{const{tokens:o}=s(),{iconButton:t}=o;return n`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${t.padding[e]};

      &:not(:disabled) {
        cursor: pointer;
      }
    `}}
`,Nt=a.div`
  ${({$variant:e})=>{const{tokens:o}=s(),{iconButton:t}=o;return[n`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${t.inner.padding[e]};
        border-radius: ${t.inner.radius[e]};
        background: ${t.inner.backgroundColor[e].base};
        opacity: ${t.inner.opacity.base};

        ${I}:disabled && {
          opacity: ${t.inner.opacity.disabled};
        }

        svg {
          display: block;
          width: ${t.inner.icon.width[e]};
          height: ${t.inner.icon.height[e]};
          color: ${t.inner.icon.color.base};
        }

        ${I}:not(:disabled):hover && {
          background: ${t.inner.backgroundColor[e].hover};

          svg {
            color: ${t.inner.icon.color.hover};
          }
        }

        ${I}:not(:disabled):active && {
          background: ${t.inner.backgroundColor[e].active};

          svg {
            color: ${t.inner.icon.color.active};
          }
        }

        ${I}:focus-visible && {
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

          ${I}:not(:disabled):hover &:after {
            outline-color: ${t.inner.stroke.contained.color.hover};
          }

          ${I}:not(:disabled):active &:after {
            outline-color: ${t.inner.stroke.contained.color.active};
          }
        `]}}
`,co=u.forwardRef((e,o)=>{const{variant:t=yo.DEFAULT_VARIANT,children:r,testID:i="icon-button",...l}=e;return d.jsx(I,{...l,ref:o,$variant:t,"data-testid":i,children:d.jsx(Nt,{$variant:t,children:r})})});co.displayName="IconButton";var uo=co,Yt=u.forwardRef((e,o)=>{[e,o]=Fo(e,o,Do);const{buttonProps:t}=So(e,o);return d.jsxs(uo,{...t,ref:o,children:[e.slot==="previous"&&d.jsx(xo,{}),e.slot==="next"&&d.jsx(Co,{})]})});Yt.displayName="DatePickerIconButton";var Vt=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,Gt=a.input`
  ${({$error:e,$hasStartAdornment:o,$hasEndAdornment:t,$hasClearButton:r})=>{const{tokens:i}=s(),{input:l,adornment:c,clearButton:p}=i;return[n`
        height: ${l.height};
        width: 100%;
        padding-left: ${l.paddingLeft};
        padding-right: ${l.paddingRight};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        background-color: ${l.backgroundColor.base};
        color: ${l.color.base};

        border-style: ${l.stroke.style};
        border-width: ${l.stroke.width};
        border-color: ${l.stroke.color.base};

        padding-left: ${o?`calc(${c.width.small} + ${l.paddingLeft})`:l.paddingLeft};
        padding-right: ${t?`calc(${c.width.small} + ${l.paddingRight})`:r?p.width:l.paddingRight};
        outline: none;
        transition: border-color "0.25s"; // TODO candidate for design tokens?

        &:not(:disabled):read-only {
          border-color: ${l.stroke.color.readOnly};
        }

        &:disabled {
          background-color: ${l.backgroundColor.disabled};
          opacity: 0.7; // TODO candidate for design tokens?
          color: ${l.color.disabled};
          border-color: ${l.stroke.color.base};
          cursor: default;
        }

        &:not(:disabled):focus,
        &:not(:disabled):active {
          border-color: ${l.stroke.color.focus};
        }

        &::placeholder {
          color: ${l.color.placeholder};
        }
      `,e&&n`
          border-color: ${l.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${l.stroke.color.error};
          }
        `]}}
`,Ut=a.div`
  ${()=>{const{tokens:e}=s(),{clearButton:o}=e;return n`
      width: ${o.width};
      height: ${o.height};
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;

      &:active {
        opacity: 0.5;
      }
    `}}
`,po=e=>({id:e.id,className:e.className,"data-testid":e.testID}),Xt=({onClick:e,...o})=>{const{tokens:t}=s(),{clearButton:r}=t;return d.jsx(Ut,{...po(o),role:"button",onClick:e,children:d.jsx(O,{width:16,height:16,color:r.color.base})})},Kt=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Jt=a.div`
  ${()=>{const{tokens:e}=s(),{formElementContainer:o}=e;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,Qt=a.div`
  ${()=>{const{tokens:e}=s(),{fontFamily:o,themeColor:t}=e;return[n`
        font-family: ${o.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${t.ragRed};
        width: 100%;
      `]}}
`,Zt=({elementId:e,labelId:o,labelText:t,errorText:r,children:i,labelTestId:l,...c})=>d.jsxs(Kt,{...po(c),children:[t?d.jsx(f,{id:o,component:"label",htmlFor:e,testID:l,children:t}):null,d.jsxs(Jt,{children:[i,r?d.jsx(Qt,{children:r}):null]})]}),qt=u.forwardRef(({hasClearButton:e=!0,startAdornment:o,endAdornment:t,isError:r,errorText:i,onChange:l,labelId:c,labelText:p,labelTestId:h,testID:b,...g},k)=>{const{disabled:m,readOnly:R,value:j="",id:L}=g,w=u.useRef(null),S=e&&!(m||R)&&!!j;u.useImperativeHandle(k,()=>w.current);const D=()=>{typeof l=="function"&&l(""),w.current&&w.current.focus()},F=V=>{typeof l=="function"&&l(V.target.value,V)};return d.jsx(Zt,{labelId:c,labelText:p,labelTestId:h,errorText:i,elementId:L,children:d.jsxs(Vt,{children:[o,d.jsx(Gt,{...g,$hasClearButton:S,$hasStartAdornment:!!o,$hasEndAdornment:!!t,ref:w,$error:r||!!i,onChange:F,"data-testid":b}),S&&!t?d.jsx(Xt,{testID:"input-clear-button",onClick:D}):null,t]})})});qt.displayName="Input";var oe=a.a`
  ${({$display:e})=>{const{tokens:o}=s(),{link:t}=o;return n`
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
`,te=u.forwardRef;function ee(e,o){const{display:t="inline",component:r="a",testID:i="link",...l}=e;return d.jsx(oe,{...l,ref:o,as:r,"data-testid":i,$display:t})}var ho=te(ee),bo=a(ho)``,re=a(f)`
  ${()=>{const{tokens:e}=s(),{link:o}=e;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      &:hover {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      &:active {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${bo}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,ne=u.forwardRef((e,o)=>{const{children:t,...r}=e,{tokens:i}=s(),{link:l}=i;return d.jsx(bo,{...r,ref:o,children:d.jsx(re,{component:"span",color:"inherit",variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:t})})});ne.displayName="Link";var go=a(ho)``,P=a.div`
  ${()=>{const{tokens:e}=s(),{link:o}=e;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,ie=a(f)`
  ${()=>{const{tokens:e}=s(),{link:o}=e;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${P}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${P}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${go}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,X=a.div`
  ${()=>{const{tokens:e}=s(),{link:o}=e,t=$(o.withIcon.size);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${t};
        height: ${t};
      }
    `}}
`,ae=u.forwardRef((e,o)=>{const{children:t,startIcon:r,endIcon:i,testID:l="link",...c}=e,{tokens:p}=s(),{link:h}=p;return d.jsx(go,{...c,ref:o,display:"inline-flex",testID:l,children:d.jsxs(P,{children:[r&&d.jsx(X,{"data-testid":`${l}-start-icon-wrapper`,children:r}),d.jsx(ie,{component:"span",color:"inherit",variant:h.typography.variant,fontFamily:h.typography.fontFamily,children:t}),i&&d.jsx(X,{"data-testid":`${l}-end-icon-wrapper`,children:i})]})})});ae.displayName="LinkWithIcon";a.div`
  overflow: hidden;
`;a.div`
  ${()=>{const{tokens:e}=s(),{multiSelect:o}=e;return n`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=s(),{multiSelect:o}=e;return n`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;a.li`
  ${()=>{const{tokens:e}=s(),{multiSelect:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=s(),{multiSelect:r}=t;return[n`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
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
`;a.div`
  ${()=>{const{tokens:e}=s(),{select:o}=e;return[n`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;a.div`
  ${({$isOpen:e,$hasError:o,$isDisabled:t})=>{const{tokens:r}=s(),{select:i}=r;return[n`
        display: grid;
        background: ${i.button.backgroundColor.base};
        padding-top: ${i.button.paddingTop};
        padding-bottom: ${i.button.paddingBottom};
        padding-left: ${i.button.paddingLeft};
        padding-right: ${i.button.paddingRight};
        border-radius: ${i.button.stroke.radius};
        outline-width: ${i.button.stroke.width.base};
        outline-style: ${i.button.stroke.style};
        outline-color: ${i.button.stroke.color.base};
        outline-offset: ${i.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${i.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${i.button.stroke.width.hover};
          outline-color: ${i.button.stroke.color.hover};
          outline-offset: ${i.button.stroke.offset.hover};

          svg {
            color: ${i.button.icon.color.hover};
          }
        }
      `,o&&n`
          &,
          &:hover,
          &:focus {
            outline-width: ${i.button.stroke.width.error};
            outline-color: ${i.button.stroke.color.error};
            outline-offset: ${i.button.stroke.offset.error};
          }
        `,e&&n`
          &,
          &:hover,
          &:focus {
            outline-width: ${i.button.stroke.width.active};
            outline-color: ${i.button.stroke.color.active};
            outline-offset: ${i.button.stroke.offset.active};

            svg {
              color: ${i.button.icon.color.active};
            }
          }
        `,t&&n`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${i.button.stroke.width.disabled};
            outline-color: ${i.button.stroke.color.disabled};
            outline-offset: ${i.button.stroke.offset.disabled};

            svg {
              color: ${i.button.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=s(),{select:o}=e;return n`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=s(),{select:o}=e;return n`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var de=a(Io)`
  rotate: 0deg;
`;a(de)`
  rotate: 180deg;
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=s(),{select:t}=o;return n`
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
`;var $o=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a($o)`
  ${({$visible:e})=>{const{tokens:o}=s(),{select:t}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.menu.shadow.inner.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`;a($o)`
  ${({$visible:e})=>{const{tokens:o}=s(),{select:t}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.menu.shadow.inner.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`;a.ul`
  ${()=>{const{tokens:e}=s(),{select:o}=e,{menu:{scrollBar:{thumbColor:t,trackColor:r,radius:i}}}=o;return n`
      all: unset;
      display: grid;
      scrollbar-color: ${t} ${r};
      background: ${o.menu.separator.color};
      gap: ${o.menu.separator.width};
      overflow-y: auto;

      @supports not (scrollbar-color: ${t} ${r}) {
        &::-webkit-scrollbar {
          background: ${r};
        }

        &::-webkit-scrollbar-thumb {
          background: ${t};
          border: 4px solid ${r};
          border-radius: ${i};
        }
      }
    `}}
`;var E=a.div`
  ${({$hasError:e})=>{const{tokens:o}=s(),{radio:t}=o;return[n`
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
`,se=a.input`
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
`,le=a.div`
  ${()=>{const{tokens:e}=s(),{radio:o}=e;return[n`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${E}:has(input:checked) && {
          display: block;
        }

        ${E}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${E}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,fo=u.forwardRef((e,o)=>{const{hasError:t,testID:r="radio",...i}=e;return d.jsxs(E,{$hasError:t,children:[d.jsx(se,{...i,ref:o,type:"radio","data-testid":r}),d.jsx(le,{})]})});fo.displayName="RadioBase";var ce=fo,ue=u.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...i}=e,{testID:l="radio"}=i;return d.jsx(A,{alert:r?d.jsx(M,{...r,testID:`${l}-alert`}):void 0,children:d.jsx(no,{...t,children:d.jsx(ce,{...i,ref:o})})})});ue.displayName="Radio";a.div`
  ${({$isDisabled:e,$hasSelectedItem:o})=>{const{tokens:t}=s(),{select:r}=t;return[n`
        overflow: hidden;
        color: ${r.button.placeholder.color.base};
      `,e&&n`
          color: ${r.button.placeholder.color.disabled};
        `,o&&n`
          color: ${r.button.text.color.base};
        `,e&&o&&n`
          color: ${r.button.text.color.disabled};
        `]}}
`;a.li`
  ${()=>{const{tokens:e}=s(),{select:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=s(),{select:r}=t;return[n`
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
`;a(q)`
  ${({$isSelected:e})=>{const{tokens:o}=s(),{select:t}=o;return[n`
        visibility: ${e?"visible":"hidden"};
        width: ${t.menu.option.inner.icon.width};
        height: ${t.menu.option.inner.icon.height};
      `]}}
`;a.div`
  ${()=>{const{tokens:{slider:e}}=s();return n`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${e.track.padding};
    `}}
`;a.div`
  ${()=>{const{tokens:{slider:e}}=s();return n`
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
  ${()=>{const{tokens:{slider:e}}=s();return n`
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
  ${({$notchAsPercent:e})=>{const{tokens:{slider:o,color:t}}=s();return n`
      width: ${e}%;
      border-right: ${o.notchSize} ${t.groundGrey} solid;
    `}};
`;var pe=a.div`
  ${()=>{const{tokens:e}=s(),{modal:o}=e;return n`
      display: grid;
      grid-template-rows: auto 1fr auto;
      max-height: ${o.desktop.maxHeight};
    `}}
`,he=a.header`
  ${({$borderVisible:e})=>{const{tokens:o}=s(),{standardModal:t}=o;return[n`
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        gap: ${t.header.gap};
        overflow: hidden;
        border-bottom-width: ${t.header.stroke.bottom.width};
        border-bottom-style: ${t.header.stroke.bottom.style};
        border-bottom-color: transparent;
        padding-top: ${t.header.padding.top};
        padding-left: ${t.header.padding.left};
        padding-right: ${t.header.padding.right};
        padding-bottom: ${t.header.padding.bottom};
        transition: border-bottom-color 0.15s;
      `,e&&n`
          border-bottom-color: ${t.header.stroke.bottom.color};
        `]}}
`,be=a.div`
  ${({$headingVisible:e})=>{const{tokens:{standardModal:{header:{padding:o}}}}=s(),t=`calc(${o.top} + ${o.bottom} + 100%)`;return[n`
        overflow: hidden;
        transition: transform 0.35s;
        transform: translateY(${t});
      `,!e&&n`
          transform: translateY(0);
        `]}}
`,ge=a.div`
  margin: -8px;
`,$e=a.div`
  ${()=>{const{tokens:e}=s(),{standardModal:o}=e;return n`
      display: grid;
      gap: ${o.content.gap};
      padding-top: ${o.content.padding.top};
      padding-left: ${o.content.padding.left};
      padding-right: ${o.content.padding.right};
      padding-bottom: ${o.content.padding.bottom};
    `}}
`,fe=a.footer`
  ${()=>{const{tokens:e}=s(),{standardModal:o}=e;return n`
      height: ${o.footer.height};
    `}}
`,ke=2;function ve(){const e=u.useRef(null),[o,t]=u.useState(!0);return u.useEffect(()=>{if(!e.current)return;const r=new IntersectionObserver(([i])=>{i&&t(i.isIntersecting)});return r.observe(e.current),()=>{r.disconnect()}},[]),{headingRef:e,headingVisible:o}}var me=a.div`
  position: relative;
  overflow: hidden;
  min-height: 0;
`,ko=a.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,ye=a(ko)`
  ${({$visible:e})=>{const{tokens:o}=s(),{scrollShadowContainer:t}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`,we=a(ko)`
  ${({$visible:e})=>{const{tokens:o}=s(),{scrollShadowContainer:t}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`,xe=a.div`
  ${()=>{const{tokens:e}=s(),{thumbColor:o,trackColor:t}=e.scrollBar;return n`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${o} ${t};
    `}}
`;function Ce(e){const o=u.useRef(null),t=u.useRef(null),[r,i]=u.useState(!1),[l,c]=u.useState(!1);return u.useEffect(()=>{e==null||e({topShadowVisible:r,bottomShadowVisible:l})},[r,l]),u.useEffect(()=>{if(!o.current||!t.current)return;const p=new IntersectionObserver(([b])=>{b&&i(!b.isIntersecting)}),h=new IntersectionObserver(([b])=>{b&&c(!b.isIntersecting)});return p.observe(o.current),h.observe(t.current),()=>{p.disconnect(),h.disconnect()}},[]),{topShadowRef:o,bottomShadowRef:t,topShadowVisible:r,bottomShadowVisible:l}}function Re(e){const{onChange:o,children:t}=e,{topShadowRef:r,bottomShadowRef:i,topShadowVisible:l,bottomShadowVisible:c}=Ce(o);return d.jsxs(me,{children:[d.jsx(ye,{$visible:l}),d.jsxs(xe,{children:[d.jsx("div",{ref:r}),t,d.jsx("div",{ref:i})]}),d.jsx(we,{$visible:c})]})}var Ie=Re,vo=u.forwardRef((e,o)=>{const{heading:t,headingLevel:r=ke,closeButtonProps:i,children:l,testID:c="standard-modal",...p}=e,{onRequestClose:h}=p,{tokens:b}=s(),{standardModal:g}=b,k=u.useId(),[m,R]=u.useState(!1),{headingRef:j,headingVisible:L}=ve();function w(){h==null||h()}return d.jsx(to,{...p,ref:o,"aria-labelledby":k,testID:c,children:d.jsxs(pe,{children:[d.jsxs(he,{$borderVisible:m,children:[d.jsx(be,{$headingVisible:L,inert:"",children:d.jsx(f,{noWrap:!0,component:"p",variant:g.header.heading.typography.variant,fontFamily:g.header.heading.typography.fontFamily,children:t})}),d.jsx(ge,{children:d.jsx(uo,{"aria-label":"Close modal",testID:`${c}-close-button`,...i,onClick:w,children:d.jsx(O,{})})})]}),d.jsx(Ie,{onChange:({topShadowVisible:B})=>{R(B)},children:d.jsxs($e,{children:[d.jsx(f,{ref:j,id:k,component:`h${r}`,variant:g.content.heading.typography.variant,fontFamily:g.content.heading.typography.fontFamily,children:t}),d.jsx("div",{children:l})]})}),d.jsx(fe,{})]})})});vo.displayName="StandardModalBase";var je=u.forwardRef((e,o)=>{const{isOpen:t}=e;return t?d.jsx(vo,{...e,ref:o}):null});je.displayName="StandardModal";a.div`
  margin-bottom: 1rem;
`;a.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"48px"};
  background-color: #dcdcdc;
`;a.div`
  ${()=>{const{tokens:e}=s(),{formElementContainer:o}=e;return n`
      max-width: ${o.maxWidth};
    `}}
`;var Le=a.table`
  ${({$layout:e})=>{const{tokens:o}=s(),{table:t}=o;return[n`
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
`;function T(e){const{layout:o,testID:t="table",...r}=e;return d.jsx(Le,{width:"100%",...r,$layout:o,"data-testid":t})}T.Thead=e=>{const{tokens:o}=s(),{table:t}=o;return d.jsx(f,{component:"thead",variant:t.head.typography.variant,fontFamily:t.head.typography.fontFamily,...e})};T.Tbody=e=>{const{tokens:o}=s(),{table:t}=o;return d.jsx(f,{component:"tbody",variant:t.body.typography.variant,fontFamily:t.body.typography.fontFamily,...e})};T.Tr=e=>d.jsx("tr",{...e});T.Th=e=>{const{align:o="right",...t}=e;return d.jsx("th",{align:o,...t})};T.Td=e=>{const{align:o="right",...t}=e;return d.jsx("td",{align:o,...t})};var Xe=T;a.div`
  font-size: 0;
`;a.div`
  ${({$tabsView:e})=>{const{tokens:o}=s(),{tabs:t}=o;return[n`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!e||e==="mobile")&&n`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=s(),{tabs:o}=e;return n`
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
    pointer-events: none;
  }
`;a.div`
  ${()=>{const{tokens:e}=s(),{tabs:o}=e;return n`
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
  ${({$withIcon:e,$isActive:o})=>{const{tokens:t}=s(),{tabs:r}=t;return[n`
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

        label:hover && {
          background: ${r.desktop.tab.backgroundColor.hover};
        }

        label:has(button:active) && {
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
`;a.div`
  ${({$isActive:e})=>{const{tokens:o}=s(),{tabs:t}=o;return[n`
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
`;a.div`
  ${()=>{const{tokens:e}=s(),{tabs:o}=e;return n`
      color: ${o.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`;a.div`
  ${({$isActive:e})=>{const{tokens:o}=s(),{tabs:t}=o;return[n`
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
`;a.div`
  ${()=>{const{tokens:e}=s(),{tabs:o}=e;return n`
      width: ${o.desktop.tab.separator.width};
      background-color: ${o.desktop.tab.separator.color};
      margin-top: ${o.desktop.tab.separator.marginTop};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=s(),{tabs:o}=e;return n`
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
  ${()=>{const{tokens:e}=s(),{tabs:o}=e;return n`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;a.div`
  ${({$withIcon:e,$isActive:o,$withPadding:t})=>{const{tokens:r}=s(),{tabs:i}=r;return[n`
        display: ${o?"block":"none"};
        background: ${i.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${i.panel.focusRing.width};
          outline-style: ${i.panel.focusRing.style};
          outline-color: ${i.panel.focusRing.color};
        }
      `,t&&n`
          padding-top: ${i.panel.padding.top};
          padding-bottom: ${i.panel.padding.bottom};
          padding-left: ${i.panel.padding.left.base};
          padding-right: ${i.panel.padding.right.base};
        `,t&&e&&n`
          padding-left: ${i.panel.padding.left.withIcon};
          padding-right: ${i.panel.padding.right.withIcon};
        `]}}
`;var Te=a(so)`
  ${()=>n`
      width: 100%;
    `}
`;a.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:e})=>{const{tokens:o}=s(),{textArea:t,outerField:r}=o;return n`
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
`;a(Eo)`
  ${()=>{const{tokens:e}=s(),{textArea:o,typography:t,scrollBar:r,outerField:i}=e,l=o.typography.variant,c=$(t.fontSize[l]),p=$(t.lineHeight[l]);return n`
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
      line-height: ${p};

      ${Te}:has(textarea:read-only) && {
        color: ${o.color.readOnly};
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
          border: 3.5px solid ${i.backgroundColor};
        }
      }
    `}}
`;var N="0.4s",x=a.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=s(),t=$(o.size[e].width),r=$(o.size[e].height);return n`
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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=s(),t=$(o.size[e].width),r=o.thumb.size[e].margin;return[n`
        position: relative;
        width: ${o.thumb.size[e].width};
        height: ${o.thumb.size[e].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[e].height};
        margin: ${r};
        transition: transform ${N};
        ${x}:has(input:checked) && {
          transform: translateX(calc(${t} - ${r} - ${r} - 100%));
        }

        ${x}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a(f)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[e].padding};
        transition: opacity ${N};

        ${x}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${x}:has(input:checked) && {
          opacity: 1;
        }

        ${x}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;a(f)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[e].padding};
        transition: opacity ${N};

        ${x}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${x}:has(input:checked) && {
          opacity: 0;
        }

        ${x}:has(input:not(:checked)) && {
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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=s(),t=$(o.size[e].width),r=$(o.size[e].height);return n`
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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=s(),t=$(o.size[e].width);return n`
      width: ${t};
      background-color: transparent;
    `}}
`;var Be=u.createContext(null),Y=()=>{const e=u.useContext(Be);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e},Se=a.div`
  ${({$isControlled:e})=>{const{tokens:o}=s(),{tooltip:t}=o;return[n`
        max-width: ${t.maxWidth};
        border-radius: ${t.radius};
        padding-top: ${t.padding.top};
        padding-bottom: ${t.padding.bottom};
        padding-left: ${t.padding.left};
        padding-right: ${t.padding.right.default};
        background: ${t.backgroundColor};
        color: ${t.color};
        z-index: ${t.zIndex};
      `,e&&n`
          padding-right: ${t.padding.right.large};
        `]}}
`,De=a.button`
  ${()=>{const{tokens:e}=s(),{tooltip:o}=e;return n`
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
`,Fe=u.forwardRef((e,o)=>{const{children:t,...r}=e,{tokens:i}=s(),{tooltip:l}=i,{open:c,setOpen:p,isControlled:h,arrowRef:b,floatingData:g,interactionsData:k}=Y(),m=W([g.refs.setFloating,o]);return c?d.jsx(To,{children:d.jsxs(Se,{ref:m,style:g.floatingStyles,...k.getFloatingProps(r),$isControlled:h,children:[d.jsx(Bo,{ref:b,context:g.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),h&&d.jsx(De,{onClick:()=>p(!1),"aria-label":"Close tooltip",children:d.jsx(O,{})}),t]})}):null});Fe.displayName="TooltipContent";var C=a.button`
  ${({$isControlled:e})=>{const{tokens:o}=s(),{iconButton:t}=o;return[n`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${t.padding.default};
      `,e&&n`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,Ee=a.div`
  ${()=>{const{tokens:e}=s(),{iconButton:o}=e;return n`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding.default};
      border-radius: ${o.inner.radius.default};
      background: ${o.inner.backgroundColor.default.base};

      ${C}:focus-visible && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,ze=a(jo)`
  ${({$isControlled:e,$isOpen:o})=>{const{tokens:t}=s(),{iconButton:r,tooltipIconButton:i}=t;return[n`
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${i.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.icon.secondaryColor.base};
        }
      `,!e&&n`
          ${C}:hover &&,
          ${C}:focus-visible && {
            display: none;
          }
        `,!o&&n`
          ${C}:hover && {
            & [data-primary-color] {
              color: ${i.icon.primaryColor.hover};
            }
          }
        `,o&&n`
          display: none;
        `]}}
`,We=a(Lo)`
  ${({$isControlled:e,$isOpen:o})=>{const{tokens:t}=s(),{iconButton:r,tooltipIconButton:i}=t;return[n`
        display: none;
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${i.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.iconFilled.secondaryColor.base};
        }
      `,!e&&n`
          ${C}:hover &&,
          ${C}:focus-visible && {
            display: block;
          }
        `,o&&n`
          display: block;
        `,e&&o&&n`
          ${C}:hover && {
            & [data-primary-color] {
              color: ${i.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,_e=u.forwardRef((e,o)=>{const{testID:t="tooltip-icon-button",...r}=e,{open:i,isControlled:l}=Y();return d.jsx(C,{...r,ref:o,$isControlled:l,"data-testid":t,children:d.jsxs(Ee,{children:[d.jsx(ze,{$isOpen:i,$isControlled:l}),d.jsx(We,{$isOpen:i,$isControlled:l})]})})});_e.displayName="TooltipIconButton";var Pe=u.forwardRef((e,o)=>{const{children:t,...r}=e,{open:i,floatingData:l,interactionsData:c}=Y(),p=t.ref,h=W([l.refs.setReference,p,o]);return u.isValidElement(t)?u.cloneElement(t,c.getReferenceProps({ref:h,...r,...t.props,"data-state":i?"open":"closed"})):null});Pe.displayName="TooltipTrigger";export{Xe as T,f as a};
