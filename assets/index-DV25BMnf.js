import{r as p}from"./index-DH5ua8nC.js";import{T as G,B as po,I as ho}from"./index-DCR-OBjd.js";import{a,u as d,b as n,p as g,h as bo}from"./index-BW2nVlX_.js";import{A as go,a as $o,C as O,E as fo,M as ko,T as J,b as mo,I as vo,c as yo}from"./index-ef8Z-xiF.js";import{j as s}from"./jsx-runtime-DQ32znRX.js";import{u as S,F as wo,a as xo}from"./floating-ui.react-BezaurJz.js";import{$ as Co,a as Ro}from"./Button-D-U0fkv9.js";import{$ as Io}from"./utils-DMjC9_eM.js";import"./axe-DUGt_Sqm.js";import{i as jo}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";a.div`
  ${({$variant:t})=>{const{tokens:o}=d(),{accordion:e}=o;return[n`
        display: grid;
        background: ${e.background[t]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`;var F=a.button`
  ${()=>{const{tokens:t}=d(),{accordion:o}=t;return[n`
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
  ${({$variant:t})=>{const{tokens:o}=d(),{accordion:e}=o;return[n`
        display: grid;
        gap: ${e.header.inner.gap};
        align-items: center;
        grid-template-columns: 1fr auto;
        padding-top: ${e.header.inner.padding.top[t]};
        padding-left: ${e.header.inner.padding.left};
        padding-right: ${e.header.inner.padding.right};
        padding-bottom: ${e.header.inner.padding.bottom[t]};
        border-radius: ${e.header.inner.radius};
        background: ${e.header.inner.backgroundColor.base};

        ${F}:hover & {
          background: ${e.header.inner.backgroundColor.hover};
        }

        ${F}:active & {
          background: ${e.header.inner.backgroundColor.active[t]};
        }
      `]}}
`;a.div`
  ${({$isOpen:t})=>{const{tokens:o}=d(),{accordion:e}=o;return[n`
        color: ${e.header.icon.color.base};
        transform: rotateX(${t?"180deg":"0deg"});

        svg {
          display: block;
          width: ${e.header.icon.width};
          height: ${e.header.icon.height};
        }

        ${F}:hover & {
          color: ${e.header.icon.color.hover};
        }

        ${F}:active & {
          color: ${e.header.icon.color.active};
        }
      `]}}
`;a.div`
  ${({$isOpen:t})=>{const{tokens:o}=d(),{accordion:e}=o;return[n`
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        display: ${t?"block":"none"};
        height: ${e.separator.stroke.width};
        margin-left: ${e.separator.margin.left};
        margin-right: ${e.separator.margin.right};
        border-top-width: ${e.separator.stroke.width};
        border-top-style: ${e.separator.stroke.style};
        border-top-color: ${e.separator.stroke.color};
      `]}}
`;a.div`
  ${({hidden:t})=>{const{tokens:o}=d(),{accordion:e}=o;return[n`
        display: ${t?"none":"block"};
        padding: ${e.content.padding};
      `]}}
`;var Lo=a.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:r})=>{const{tokens:i}=d(),{typography:l,fontFamily:c}=i,u=g(l.fontSize[t]),h=g(l.lineHeight[t]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||l.color[t]};
        font-size: ${u};
        line-height: ${h};
        font-family: ${l.fontFamily[t]};
      `,o&&n`
          font-family: ${c[o]};
        `,e&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,G.STANDARD_VARIANTS.includes(t)&&n`
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
`;function To(t,o){const{variant:e,component:r,color:i,fontFamily:l,noWrap:c,testID:u,...h}=t;return s.jsx(Lo,{...h,ref:o,as:r,$variant:e,$color:i,$fontFamily:l,$noWrap:c,"data-testid":u})}var Bo=p.forwardRef(To),zo={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},Do=p.forwardRef;function Fo(t,o){const{variant:e="bodyM",component:r,...i}=t;return s.jsx(Bo,{...i,ref:o,variant:e,component:r||zo[e]})}var $=Do(Fo),So=a.div`
  ${()=>{const{tokens:t}=d(),{accordionGroup:o}=t;return[n`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;a(So)`
  ${()=>{const{tokens:t}=d(),{accordionGroup:o}=t;return[n`
        gap: ${o.gap.nested};
      `]}}
`;a.div`
  ${({$severity:t})=>{const{tokens:o}=d(),{alert:e}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      border-radius: ${e.radius};
      border-top-width: ${e.stroke.width.top};
      border-left-width: ${e.stroke.width.left};
      border-right-width: ${e.stroke.width.right};
      border-bottom-width: ${e.stroke.width.bottom};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color[t]};
      padding-top: ${e.padding.top};
      padding-left: ${e.padding.left};
      padding-right: ${e.padding.right};
      padding-bottom: ${e.padding.bottom};
      background-color: ${e.background[t]};
    `}}
`;a.div`
  ${({$severity:t})=>{const{tokens:o}=d(),{alert:e}=o;return n`
      display: grid;
      place-items: center;
      height: ${g(e.iconWrapper.height)};

      svg {
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};

        & [data-primary-color] {
          color: ${e.icon.primaryColor[t]};
        }

        & [data-secondary-color] {
          color: ${e.icon.secondaryColor[t]};
        }
      }
    `}}
`;a.div`
  overflow-wrap: anywhere;
`;var Wo=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,Po=a.span`
  ${({$isLoading:t})=>{const{tokens:o}=d(),{button:e}=o,r=g(e.topLayer.icon.width),i=g(e.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${t?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${i};
      }
    `}}
`,_o=a.div`
  ${({$isLoading:t})=>n`
      visibility: ${t?"hidden":"visible"};
      overflow: hidden;
    `}
`,Oo=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,k=a.button`
  ${({$variant:t,$isLoading:o,$fullWidth:e})=>{const{tokens:r}=d(),{button:i}=r;return[n`
        all: unset;
        position: relative;
        display: grid;
        align-items: start;
        height: ${i.height};
        width: ${e?"100%":"auto"};
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
            outline-color: ${i.focusRing.color[t]};
            outline-offset: ${i.focusRing.offset};
          }
        `]}}
`,Eo=a.div`
  ${({$variant:t,$isLoading:o})=>{const{tokens:e}=d(),{button:r}=e;return[n`
        position: relative;
        overflow: hidden;
        color: ${r.topLayer.color[t].base};
        background: ${r.topLayer.backgroundColor[t].base};
        height: ${r.topLayer.height[t]};
        padding-left: ${r.topLayer.padding[t].left};
        padding-right: ${r.topLayer.padding[t].right};
        border-width: ${r.topLayer.stroke.width};
        border-style: ${r.topLayer.stroke.style};
        border-color: ${r.topLayer.stroke.color[t].base};
        border-radius: ${r.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${r.topLayer.animationDuration}ms;

        ${k}:not(:disabled):hover && {
          color: ${r.topLayer.color[t].hover};
          background: ${r.topLayer.backgroundColor[t].hover};
          transform: translateY(${r.topLayer.translateY[t].hover});
        }

        ${k}:not(:disabled):active && {
          color: ${r.topLayer.color[t].active};
          background: ${r.topLayer.backgroundColor[t].active};
          transform: translateY(${r.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&n`
          ${k}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[t].hover};
          }

          ${k}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[t].active};
          }
        `,o&&n`
          color: ${r.topLayer.color[t].active};
          border-color: ${r.topLayer.stroke.color[t].active};
          background: ${r.topLayer.backgroundColor[t].active};
          transform: translateY(${r.topLayer.translateY[t].active});

          ${k}:not(:disabled):hover && {
            color: ${r.topLayer.color[t].active};
            border-color: ${r.topLayer.stroke.color[t].active};
            background: ${r.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${r.topLayer.translateY[t].active}
            );
          }

          ${k}:not(:disabled):active && {
            color: ${r.topLayer.color[t].active};
            border-color: ${r.topLayer.stroke.color[t].active};
            background: ${r.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${r.topLayer.translateY[t].active}
            );
          }

          ${k}:not(:disabled):focus-visible && {
            border-radius: ${r.topLayer.stroke.radius};
            outline-width: ${r.focusRing.width};
            outline-style: ${r.focusRing.style};
            outline-color: ${r.focusRing.color[t]};
            outline-offset: ${r.focusRing.offset};
          }
        `]}}
`,Ho=a.div`
  ${({$variant:t,$isLoading:o})=>{const{tokens:e}=d(),{button:r}=e,{shadow:i}=r.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[t].base};
        box-shadow: 0px ${i.blur} ${i.offsetY} ${i.color};

        ${k}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[t].hover};
        }

        ${k}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[t].active};
          box-shadow: none;
        }
      `,o&&n`
          background: ${r.bottomLayer.backgroundColor[t].active};
          box-shadow: none;

          ${k}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[t].active};
          }

          ${k}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[t].active};
          }
        `]}}
`,K=p.forwardRef((t,o)=>{const{variant:e,children:r,testID:i,type:l,isLoading:c,fullWidth:u,...h}=t;return s.jsxs(k,{...h,ref:o,$variant:e,$isLoading:c,$fullWidth:u,"data-testid":i,type:l||"button",children:[s.jsx(Ho,{$variant:e,$isLoading:c}),s.jsx(Eo,{$variant:e,$isLoading:c,children:r})]})});K.displayName="ButtonBase";var No=K,Ao=bo`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Yo=a.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:t,$color:o})=>n`
    color: ${o};
    width: ${t};
    height: ${t};
  `}
`,Mo=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:t})=>{const{tokens:{spinner:o}}=d();return n`
      border: ${t} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,P=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${Ao} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:t,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(t+1)}s;
    `}
`,Q=p.memo(t=>{const{testID:o="spinner"}=t,{tokens:{spinner:e}}=d();let r,i;if("variant"in t){const u=e.variants[t.variant];u&&([r,i]=[u.color,u.size])}"size"in t&&t.size?i=t.size:i||(i=e.variants.default.size),"color"in t&&t.color?r=t.color:r||(r=e.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(i)/parseInt(e.borderRatio))}px`};return s.jsxs(Yo,{$color:r,$size:i,"data-testid":o,children:[s.jsx(Mo,{...c}),s.jsx(P,{$index:0,...c}),s.jsx(P,{$index:1,...c}),s.jsx(P,{$index:2,...c})]})});Q.displayName="Spinner";var Vo=Q,Go=p.forwardRef((t,o)=>{const{text:e,variant:r="primary",startIcon:i,isLoading:l,testID:c="button",...u}=t,{tokens:h}=d(),{button:f}=h,b={"aria-disabled":l,"aria-label":l?"Loading":void 0};return s.jsx(No,{...u,...b,ref:o,variant:r,isLoading:l,testID:c,children:s.jsxs(Wo,{children:[i&&s.jsx(Po,{$isLoading:l,children:i}),s.jsx(_o,{$isLoading:l,children:s.jsx($,{variant:f.topLayer.text.typography.variant,fontFamily:f.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:e})}),l&&s.jsx(Oo,{children:s.jsx(Vo,{variant:po.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});Go.displayName="Button";var Xo=a.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function Uo(t){const{alert:o,gap:e,children:r}=t;return s.jsxs(Xo,{$gap:e,children:[r,o&&o]})}var E=Uo,Jo=a.div`
  ${({$severity:t})=>{const{tokens:o}=d(),{inputAlert:e}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      color: ${e.color[t]};

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
      }
    `}}
`,Ko=a.div`
  ${({$severity:t})=>{const{tokens:o}=d(),{inputAlert:e}=o,r=g(e.iconWrapper.height);return n`
      display: grid;
      place-content: center;
      height: ${r};

      & [data-primary-color] {
        color: ${e.icon.primaryColor[t]};
      }

      & [data-secondary-color] {
        color: ${e.icon.secondaryColor[t]};
      }
    `}}
`;function Qo(t){const{severity:o,children:e,testID:r="input-alert"}=t;return s.jsxs(Jo,{role:"alert","aria-live":"polite",$severity:o,"data-testid":r,children:[s.jsx(Ko,{$severity:o,children:s.jsx(fo,{"aria-hidden":"true"})}),s.jsx($,{color:"inherit",children:e})]})}var H=Qo,Zo=a.label`
  ${()=>{const{tokens:t}=d(),{inputLabelRight:o}=t;return n`
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
`,qo=a.span`
  ${()=>{const{tokens:t}=d(),{inputLabelRight:o}=t;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function ot(t){const{label:o,children:e,...r}=t,{tokens:i}=d(),{inputLabelRight:l}=i;return s.jsxs(Zo,{...r,children:[s.jsx("span",{children:e}),o&&s.jsx(qo,{children:s.jsx($,{component:"span",color:"inherit",variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:o})})]})}var Z=ot,N=a.div`
  ${({$hasError:t})=>{const{tokens:o}=d(),{checkbox:e}=o;return[n`
        position: relative;
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        border-radius: ${e.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          cursor: not-allowed;
        }

        &:has(input:not(:checked)) {
          background: ${e.backgroundColor.unchecked.base};
          outline-width: ${e.stroke.width.unchecked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled, :checked, :indeterminate)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled, :checked, :indeterminate)
          )
          && {
          background: ${e.backgroundColor.unchecked.hover};
          outline-width: ${e.stroke.width.unchecked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:not(:checked):disabled) {
          background: ${e.backgroundColor.unchecked.disabled};
          outline-width: ${e.stroke.width.unchecked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:checked) {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled):checked),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:checked:disabled) {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:indeterminate) {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled):indeterminate),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):indeterminate
          )
          && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:indeterminate:disabled) {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }
      `,t&&n`
          &:has(input:not(:checked)) {
            outline-width: ${e.stroke.width.unchecked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :checked, :indeterminate)),
          :is(label:hover, [role="option"][data-hovered]):has(
              input:not(:disabled, :checked, :indeterminate)
            )
            && {
            outline-width: ${e.stroke.width.unchecked.hover};
            outline-color: ${e.stroke.color.hover};
          }

          &:has(input:checked) {
            outline-width: ${e.stroke.width.checked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :indeterminate):checked),
          :is(label:hover, [role="option"][data-hovered]):has(
              input:not(:disabled, :indeterminate):checked
            )
            && {
            outline-width: ${e.stroke.width.checked.hover};
            outline-color: ${e.stroke.color.hover};
          }
        `]}}
`,tt=a.input`
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
`,et=a(ko)`
  ${()=>{const{tokens:t}=d(),{checkbox:o}=t;return[n`
        display: none;

        ${N}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,rt=a(J)`
  ${()=>{const{tokens:t}=d(),{checkbox:o}=t;return[n`
        display: none;

        ${N}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function nt(t,o){p.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var q=p.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:i="checkbox",...l}=t,c=p.useRef(null);nt(c,r);const u=S([c,o]);function h(f){var b;f.target.indeterminate=!!r,(b=l.onChange)==null||b.call(l,f)}return s.jsxs(N,{$hasError:e,children:[s.jsx(tt,{...l,ref:u,type:"checkbox",onChange:h,"data-testid":i}),s.jsx(et,{}),s.jsx(rt,{})]})});q.displayName="CheckboxBase";var it=q,at=p.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:l="checkbox"}=i;return s.jsx(E,{alert:r?s.jsx(H,{...r,testID:`${l}-alert`}):void 0,children:s.jsx(Z,{...e,children:s.jsx(it,{...i,ref:o})})})});at.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var dt=a.ul`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(dt)`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var st=a.div`
  ${({$labelText:t})=>{const{tokens:o}=d(),{inputLabelTop:e}=o;return[n`
        width: 100%;
        display: grid;
      `,t&&n`
          gap: ${e.gap};
        `]}}
`,lt=a.span`
  ${()=>{const{tokens:t}=d(),{inputLabelTop:o}=t;return n`
      color: ${o.label.color.base};
    `}}
`,ct=a.div`
  ${()=>{const{tokens:t}=d(),{inputLabelTop:o}=t;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function oo(t){const{labelElement:o,labelText:e,labelHint:r,labelHintID:i,children:l}=t,{tokens:c}=d(),{inputLabelTop:u}=c;return s.jsxs(st,{$labelText:e,children:[s.jsxs("div",{children:[o,r&&s.jsx(ct,{children:s.jsx($,{id:i,component:"span",color:"inherit",variant:u.labelHint.typography.variant,fontFamily:u.labelHint.typography.fontFamily,children:r})})]}),s.jsx("div",{children:l})]})}oo.Label=t=>{const{text:o,component:e="span"}=t,{tokens:r}=d(),{inputLabelTop:i}=r;return s.jsx(lt,{children:s.jsx($,{component:e,color:"inherit",variant:i.label.typography.variant,fontFamily:i.label.typography.fontFamily,children:o})})};var X=oo;function ut(t){const{label:o,labelHint:e,labelHintID:r,children:i,...l}=t;return s.jsx(X,{labelElement:s.jsx("label",{...l,children:o&&s.jsx(X.Label,{text:o})}),labelText:o,labelHint:e,labelHintID:r,children:i})}var to=ut,eo=a(to)`
  ${()=>n`
      width: 100%;
    `}
`,pt=a.div`
  ${()=>{const{tokens:t}=d(),{textInput:o}=t;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`,ht=a.input`
  ${()=>{const{tokens:t}=d(),{textInput:o,typography:e}=t,r=o.typography.variant,i=g(e.fontSize[r]),l=g(e.lineHeight[r]);return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${e.fontFamily[r]};
      font-size: ${i};
      line-height: ${l};

      ${eo}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`,bt=a($)`
  ${()=>{const{tokens:t}=d(),{textInput:o}=t;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`,gt=a.div`
  ${()=>{const{tokens:t}=d(),{textInput:o}=t;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`,m=a.div`
  ${()=>{const{tokens:t}=d(),{outerField:o}=t;return n`
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
`,$t=a.div`
  ${({$hasError:t})=>{const{tokens:o}=d(),{outerField:e}=o;return[n`
        position: relative;
        width: 100%;
        background: ${e.backgroundColor};

        outline-color: ${e.stroke.color.base};
        outline-width: ${e.stroke.width.base};
        outline-offset: ${e.stroke.offset.base};
        outline-style: ${e.stroke.style};
        border-radius: ${e.radius};

        ${m}:has(input:not(:disabled)):hover &&,
        ${m}:has(textarea:not(:disabled)):hover && {
          outline-color: ${e.stroke.color.hover};
          outline-width: ${e.stroke.width.hover};
          outline-offset: ${e.stroke.offset.hover};
        }

        ${m}:has(input:read-only) &&,
        ${m}:has(textarea:read-only) && {
          outline-color: ${e.stroke.color.readOnly};
        }

        ${m}:has(input:focus) &&,
        ${m}:has(textarea:focus) && {
          outline-color: ${e.stroke.color.focus};
          outline-width: ${e.stroke.width.focus};
          outline-offset: ${e.stroke.offset.focus};
        }
      `,t&&n`
          &&,
          ${m}:has(input:read-only) &&,
          ${m}:has(input:disabled) &&,
          ${m}:has(textarea:read-only) &&,
          ${m}:has(textarea:disabled) && {
            outline-width: ${e.stroke.width.error};
            outline-color: ${e.stroke.color.error};
            outline-offset: ${e.stroke.offset.error};
          }
        `]}}
`;function ft(t){const{hasError:o,children:e}=t;return s.jsx(m,{children:s.jsx($t,{$hasError:o,children:e})})}var kt=ft,mt=a($)`
  ${()=>{const{tokens:t}=d(),{charactersCounter:o}=t;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function vt(t){const{length:o,maxLength:e,testID:r}=t,{tokens:i}=d(),{charactersCounter:l}=i,c=Math.max(0,e-o);return s.jsx(mt,{variant:l.typography.variant,fontFamily:l.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}var yt=p.memo(vt),wt=p.forwardRef((t,o)=>{var B;const{id:e,hasError:r,prefix:i,icon:l,onChange:c,testID:u="input",labelProps:h,alertProps:f,...b}=t,v=p.useId(),C=p.useId(),{labelHint:W}=h,{maxLength:j}=b,{tokens:{textInput:L}}=d(),[R,M]=p.useState(((B=b.value||b.defaultValue)==null?void 0:B.length)||0),T=p.useCallback(z=>{M(z.target.value.length),c==null||c(z)},[c]);return s.jsxs(E,{gap:b.maxLength?"4px":"8px",alert:f?s.jsx(H,{...f,testID:`${u}-alert`}):void 0,children:[s.jsx(eo,{...h,labelHintID:C,htmlFor:e||v,children:s.jsx(kt,{hasError:r,children:s.jsxs(pt,{children:[i?s.jsx(bt,{variant:L.prefix.typography.variant,fontFamily:L.prefix.typography.fontFamily,testID:`${u}-prefix`,children:i}):void 0,s.jsx(ht,{...b,ref:o,id:e||v,onChange:T,"aria-describedby":W?C:void 0,"data-testid":u}),l?s.jsx(gt,{"data-testid":`${u}-icon-wrapper`,children:l}):void 0]})})}),j?s.jsx(yt,{length:R,maxLength:j,testID:`${u}-characters-counter`}):void 0]})});wt.displayName="TextInput";a.div`
  ${()=>{const{tokens:t}=d(),{datePicker:o}=t;return n`
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
  ${()=>{const{tokens:t}=d(),{datePicker:o}=t;return n`
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
`;var x=a.button`
  ${({$variant:t})=>{const{tokens:o}=d(),{iconButton:e}=o;return n`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${e.padding[t]};

      &:not(:disabled) {
        cursor: pointer;
      }
    `}}
`,xt=a.div`
  ${({$variant:t})=>{const{tokens:o}=d(),{iconButton:e}=o;return[n`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${e.inner.padding[t]};
        border-radius: ${e.inner.radius[t]};
        background: ${e.inner.backgroundColor[t].base};
        opacity: ${e.inner.opacity.base};

        ${x}:disabled && {
          opacity: ${e.inner.opacity.disabled};
        }

        svg {
          display: block;
          width: ${e.inner.icon.width[t]};
          height: ${e.inner.icon.height[t]};
          color: ${e.inner.icon.color.base};
        }

        ${x}:not(:disabled):hover && {
          background: ${e.inner.backgroundColor[t].hover};

          svg {
            color: ${e.inner.icon.color.hover};
          }
        }

        ${x}:not(:disabled):active && {
          background: ${e.inner.backgroundColor[t].active};

          svg {
            color: ${e.inner.icon.color.active};
          }
        }

        ${x}:focus-visible && {
          outline-width: ${e.inner.focusRing.width};
          outline-style: ${e.inner.focusRing.style};
          outline-color: ${e.inner.focusRing.color};
          outline-offset: ${e.inner.focusRing.offset[t]};
        }
      `,t==="contained"&&n`
          &:after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: ${e.inner.radius[t]};
            outline-width: ${e.inner.stroke.contained.width};
            outline-style: ${e.inner.stroke.contained.style};
            outline-color: ${e.inner.stroke.contained.color.base};
            outline-offset: ${e.inner.stroke.contained.offset};
          }

          ${x}:not(:disabled):hover &:after {
            outline-color: ${e.inner.stroke.contained.color.hover};
          }

          ${x}:not(:disabled):active &:after {
            outline-color: ${e.inner.stroke.contained.color.active};
          }
        `]}}
`,ro=p.forwardRef((t,o)=>{const{variant:e=ho.DEFAULT_VARIANT,children:r,testID:i="icon-button",...l}=t;return s.jsx(x,{...l,ref:o,$variant:e,"data-testid":i,children:s.jsx(xt,{$variant:e,children:r})})});ro.displayName="IconButton";var no=ro,Ct=p.forwardRef((t,o)=>{[t,o]=Io(t,o,Ro);const{buttonProps:e}=Co(t,o);return s.jsxs(no,{...e,ref:o,children:[t.slot==="previous"&&s.jsx(go,{}),t.slot==="next"&&s.jsx($o,{})]})});Ct.displayName="DatePickerIconButton";var Rt=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,It=a.input`
  ${({$error:t,$hasStartAdornment:o,$hasEndAdornment:e,$hasClearButton:r})=>{const{tokens:i}=d(),{input:l,adornment:c,clearButton:u}=i;return[n`
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
        padding-right: ${e?`calc(${c.width.small} + ${l.paddingRight})`:r?u.width:l.paddingRight};
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
      `,t&&n`
          border-color: ${l.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${l.stroke.color.error};
          }
        `]}}
`,jt=a.div`
  ${()=>{const{tokens:t}=d(),{clearButton:o}=t;return n`
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
`,io=t=>({id:t.id,className:t.className,"data-testid":t.testID}),Lt=({onClick:t,...o})=>{const{tokens:e}=d(),{clearButton:r}=e;return s.jsx(jt,{...io(o),role:"button",onClick:t,children:s.jsx(O,{width:16,height:16,color:r.color.base})})},Tt=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Bt=a.div`
  ${()=>{const{tokens:t}=d(),{formElementContainer:o}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,zt=a.div`
  ${()=>{const{tokens:t}=d(),{fontFamily:o,themeColor:e}=t;return[n`
        font-family: ${o.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${e.ragRed};
        width: 100%;
      `]}}
`,Dt=({elementId:t,labelId:o,labelText:e,errorText:r,children:i,labelTestId:l,...c})=>s.jsxs(Tt,{...io(c),children:[e?s.jsx($,{id:o,component:"label",htmlFor:t,testID:l,children:e}):null,s.jsxs(Bt,{children:[i,r?s.jsx(zt,{children:r}):null]})]}),Ft=p.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:r,errorText:i,onChange:l,labelId:c,labelText:u,labelTestId:h,testID:f,...b},v)=>{const{disabled:C,readOnly:W,value:j="",id:L}=b,R=p.useRef(null),T=t&&!(C||W)&&!!j;p.useImperativeHandle(v,()=>R.current);const B=()=>{typeof l=="function"&&l(""),R.current&&R.current.focus()},z=V=>{typeof l=="function"&&l(V.target.value,V)};return s.jsx(Dt,{labelId:c,labelText:u,labelTestId:h,errorText:i,elementId:L,children:s.jsxs(Rt,{children:[o,s.jsx(It,{...b,$hasClearButton:T,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:R,$error:r||!!i,onChange:z,"data-testid":f}),T&&!e?s.jsx(Lt,{testID:"input-clear-button",onClick:B}):null,e]})})});Ft.displayName="Input";var St=a.a`
  ${({$display:t})=>{const{tokens:o}=d(),{link:e}=o;return n`
      all: unset;
      display: ${t};
      color: ${e.color.base};
      cursor: pointer;

      &:hover {
        color: ${e.color.hover};
      }

      &:active {
        color: ${e.color.active};
      }

      &:focus-visible {
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
        border-radius: ${e.focusRing.radius};
      }
    `}}
`,Wt=p.forwardRef;function Pt(t,o){const{display:e="inline",component:r="a",testID:i="link",...l}=t;return s.jsx(St,{...l,ref:o,as:r,"data-testid":i,$display:e})}var ao=Wt(Pt),so=a(ao)``,_t=a($)`
  ${()=>{const{tokens:t}=d(),{link:o}=t;return n`
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

      ${so}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,Ot=p.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=d(),{link:l}=i;return s.jsx(so,{...r,ref:o,children:s.jsx(_t,{component:"span",color:"inherit",variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:e})})});Ot.displayName="Link";var lo=a(ao)``,_=a.div`
  ${()=>{const{tokens:t}=d(),{link:o}=t;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,Et=a($)`
  ${()=>{const{tokens:t}=d(),{link:o}=t;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${_}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${_}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${lo}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,U=a.div`
  ${()=>{const{tokens:t}=d(),{link:o}=t,e=g(o.withIcon.size);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,Ht=p.forwardRef((t,o)=>{const{children:e,startIcon:r,endIcon:i,testID:l="link",...c}=t,{tokens:u}=d(),{link:h}=u;return s.jsx(lo,{...c,ref:o,display:"inline-flex",testID:l,children:s.jsxs(_,{children:[r&&s.jsx(U,{"data-testid":`${l}-start-icon-wrapper`,children:r}),s.jsx(Et,{component:"span",color:"inherit",variant:h.typography.variant,fontFamily:h.typography.fontFamily,children:e}),i&&s.jsx(U,{"data-testid":`${l}-end-icon-wrapper`,children:i})]})})});Ht.displayName="LinkWithIcon";var Nt=a.dialog`
  ${()=>{const{tokens:t}=d(),{modal:o}=t;return n`
      border: unset;
      padding: unset;
      margin: unset;
      border-radius: ${o.radius};
      background-color: ${o.backgroundColor};

      height: fit-content;
      margin: auto;
      overflow: hidden;

      @media (min-width: ${o.desktop.minWidth}) {
        max-width: ${o.desktop.maxWidth};
        max-height: ${o.desktop.maxHeight};
        min-height: ${o.desktop.minHeight};
      }

      @media (max-width: ${o.desktop.minWidth}) {
        max-width: ${o.mobile.maxWidth};
        min-width: ${o.mobile.minWidth};
        max-height: 90%;
        min-height: ${o.mobile.minHeight};
        margin-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}}
`,At=a.div`
  ${()=>{const{tokens:t}=d(),{modal:o}=t;return n`
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: ${o.desktop.maxHeight};
      padding-bottom: ${o.desktop.paddingBottom};
      @media (max-width: ${o.desktop.minWidth}) {
        padding-bottom: unset;
      }
    `}}
`,Yt=a.header`
  ${()=>{const{tokens:t}=d(),{modal:o}=t;return n`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: ${o.backgroundColor};
      padding: ${o.header.padding};
      border-bottom-width: ${o.header.strokeBottom.width};
      border-bottom-style: ${o.header.strokeBottom.style};
      border-bottom-color: ${o.header.strokeBottom.color};
    `}}
`,Mt=a.div`
  flex-shrink: 0;
  margin: -8px -8px -8px 0;
`,Vt=a.div`
  ${()=>{const{tokens:t}=d(),{modal:{content:o}}=t;return n`
      overflow-y: scroll;
      min-height: 200px;
      padding: ${o.paddingBottom} ${o.paddingHorizontal};
      box-shadow: inset 0px 7px 9px -7px ${o.innerShadowTop.color};
    `}}
`,Gt=p.forwardRef((t,o)=>{const{isOpen:e,onRequestClose:r,title:i,children:l,testID:c="modal"}=t,u=p.useId(),h=p.useRef(null),f=S([h,o]);return p.useEffect(()=>{h.current&&(e&&!h.current.open?h.current.showModal():!e&&h.current.open&&h.current.close())},[e,h]),p.useEffect(()=>{function b(){r==null||r()}if(h.current)return h.current.addEventListener("close",b),()=>{var v;(v=h.current)==null||v.removeEventListener("close",b)}},[h,r]),s.jsx(Nt,{ref:f,"data-testid":c,"aria-labelledby":u,children:s.jsxs(At,{children:[s.jsxs(Yt,{children:[s.jsx(Xt,{id:u,children:i}),s.jsx(Mt,{children:s.jsx(no,{testID:`${c}-close-button`,onClick:r,children:s.jsx(O,{})})})]}),s.jsx(Vt,{children:l})]})})});Gt.displayName="Modal";function Xt(t){const{tokens:{modal:o}}=d();return s.jsx($,{id:t.id,variant:o.header.title.variant,fontFamily:o.header.title.fontFamily,children:t.children})}a.div`
  overflow: hidden;
`;a.div`
  ${()=>{const{tokens:t}=d(),{multiSelect:o}=t;return n`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{multiSelect:o}=t;return n`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=d(),{multiSelect:o}=t;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:t,$isHighlighted:o})=>{const{tokens:e}=d(),{multiSelect:r}=e;return[n`
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
      `,t&&n`
          background: ${r.menu.option.inner.backgroundColor.active};
        `,o&&n`
          background: ${r.menu.option.inner.backgroundColor.hover};
        `]}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{select:o}=t;return[n`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;a.div`
  ${({$isOpen:t,$hasError:o,$isDisabled:e})=>{const{tokens:r}=d(),{select:i}=r;return[n`
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
        `,t&&n`
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
        `,e&&n`
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
  ${()=>{const{tokens:t}=d(),{select:o}=t;return n`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{select:o}=t;return n`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var Ut=a(mo)`
  rotate: 0deg;
`;a(Ut)`
  rotate: 180deg;
`;a.div`
  ${({$isOpen:t})=>{const{tokens:o}=d(),{select:e}=o;return n`
      display: ${t?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${e.menu.radius};
      border-width: ${e.menu.stroke.width};
      border-style: ${e.menu.stroke.style};
      border-color: ${e.menu.stroke.color};
      box-shadow: 0px 2px 2px ${e.menu.shadow.outer.color};
      z-index: ${e.menu.zIndex};
    `}}
`;var co=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a(co)`
  ${({$visible:t})=>{const{tokens:o}=d(),{select:e}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a(co)`
  ${({$visible:t})=>{const{tokens:o}=d(),{select:e}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a.ul`
  ${()=>{const{tokens:t}=d(),{select:o}=t,{menu:{scrollBar:{thumbColor:e,trackColor:r,radius:i}}}=o;return n`
      all: unset;
      display: grid;
      scrollbar-color: ${e} ${r};
      background: ${o.menu.separator.color};
      gap: ${o.menu.separator.width};
      overflow-y: auto;

      @supports not (scrollbar-color: ${e} ${r}) {
        &::-webkit-scrollbar {
          background: ${r};
        }

        &::-webkit-scrollbar-thumb {
          background: ${e};
          border: 4px solid ${r};
          border-radius: ${i};
        }
      }
    `}}
`;var D=a.div`
  ${({$hasError:t})=>{const{tokens:o}=d(),{radio:e}=o;return[n`
        position: relative;
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        background: ${e.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${e.stroke.width.base};
        outline-style: solid;
        outline-color: ${e.stroke.color.base};
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          outline-width: ${e.stroke.width.disabled};
          outline-color: ${e.stroke.color.disabled};
          cursor: not-allowed;
        }

        &:hover:has(input:not(:disabled)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled)
          )
          && {
          outline-width: ${e.stroke.width.hover};
          outline-color: ${e.stroke.color.hover};
        }
      `,t&&n`
          outline-width: ${e.stroke.width.error};
          outline-color: ${e.stroke.color.error};
        `]}}
`,Jt=a.input`
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
`,Kt=a.div`
  ${()=>{const{tokens:t}=d(),{radio:o}=t;return[n`
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
`,uo=p.forwardRef((t,o)=>{const{hasError:e,testID:r="radio",...i}=t;return s.jsxs(D,{$hasError:e,children:[s.jsx(Jt,{...i,ref:o,type:"radio","data-testid":r}),s.jsx(Kt,{})]})});uo.displayName="RadioBase";var Qt=uo,Zt=p.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:l="radio"}=i;return s.jsx(E,{alert:r?s.jsx(H,{...r,testID:`${l}-alert`}):void 0,children:s.jsx(Z,{...e,children:s.jsx(Qt,{...i,ref:o})})})});Zt.displayName="Radio";a.div`
  ${({$isDisabled:t,$hasSelectedItem:o})=>{const{tokens:e}=d(),{select:r}=e;return[n`
        overflow: hidden;
        color: ${r.button.placeholder.color.base};
      `,t&&n`
          color: ${r.button.placeholder.color.disabled};
        `,o&&n`
          color: ${r.button.text.color.base};
        `,t&&o&&n`
          color: ${r.button.text.color.disabled};
        `]}}
`;a.li`
  ${()=>{const{tokens:t}=d(),{select:o}=t;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:t,$isHighlighted:o})=>{const{tokens:e}=d(),{select:r}=e;return[n`
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
      `,t&&n`
          background: ${r.menu.option.inner.backgroundColor.active};
          outline-color: ${r.menu.option.inner.stroke.color.active};
        `,o&&n`
          background: ${r.menu.option.inner.backgroundColor.hover};
          outline-color: ${r.menu.option.inner.stroke.color.hover};
        `]}}
`;a(J)`
  ${({$isSelected:t})=>{const{tokens:o}=d(),{select:e}=o;return[n`
        visibility: ${t?"visible":"hidden"};
        width: ${e.menu.option.inner.icon.width};
        height: ${e.menu.option.inner.icon.height};
      `]}}
`;a.div`
  ${()=>{const{tokens:{slider:t}}=d();return n`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${t.track.padding};
    `}}
`;a.div`
  ${()=>{const{tokens:{slider:t}}=d();return n`
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
          width: ${t.thumb.size};
          height: ${t.thumb.size};
          border-radius: 50%;
          forced-color-adjust: none;

          &[data-focus-visible] {
            outline: ${t.thumb.focusRing.width} solid
              ${t.thumb.focusRing.color};
            outline-offset: ${t.thumb.focusRing.offset};
          }
        }

        &[data-orientation="horizontal"] {
          flex-direction: column;

          .react-aria-SliderTrack {
            height: ${t.thumb.size};
            width: 100%;

            &:before {
              height: ${t.track.size};
              width: 100%;
              top: 50%;
              transform: translateY(-50%);
              background: ${t.track.color};
              border-radius: ${t.track.size};
            }
          }

          .react-aria-SliderThumb {
            top: 50%;
            cursor: pointer;

            & [data-primary-color] {
              color: ${t.thumb.primaryColor.base};
            }

            & [data-secondary-color] {
              color: ${t.thumb.secondaryColor.base};
            }

            &:hover [data-primary-color] {
              color: ${t.thumb.primaryColor.hover};
            }

            &:hover [data-secondary-color] {
              color: ${t.thumb.secondaryColor.hover};
            }

            &:active [data-primary-color] {
              color: ${t.thumb.primaryColor.active};
            }

            &:active [data-secondary-color] {
              color: ${t.thumb.secondaryColor.active};
            }
          }
        }
      }
    `}}
`;a.div`
  ${()=>{const{tokens:{slider:t}}=d();return n`
      height: ${t.thumb.size};
      width: 100%;
      display: flex;
      position: relative;

      &:before {
        height: ${t.track.size};
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    `}}
`;a.div`
  ${({$notchAsPercent:t})=>{const{tokens:{slider:o,color:e}}=d();return n`
      width: ${t}%;
      border-right: ${o.notchSize} ${e.groundGrey} solid;
    `}};
`;a.div`
  margin-bottom: 1rem;
`;a.div`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"48px"};
  background-color: #dcdcdc;
`;a.div`
  ${()=>{const{tokens:t}=d(),{formElementContainer:o}=t;return n`
      max-width: ${o.maxWidth};
    `}}
`;var qt=a.table`
  ${({$layout:t})=>{const{tokens:o}=d(),{table:e}=o;return[n`
        border-collapse: collapse;
        border-bottom-width: ${e.stroke.bottom.width};
        border-bottom-style: ${e.stroke.bottom.style};
        border-bottom-color: ${e.stroke.bottom.color};

        & thead {
          background: ${e.head.backgroundColor};
          border-bottom-width: ${e.head.stroke.bottom.width};
          border-bottom-style: ${e.head.stroke.bottom.style};
          border-bottom-color: ${e.head.stroke.bottom.color};

          & tr {
            & th {
              text-wrap: balance;
              vertical-align: bottom;
              overflow-wrap: break-word;
              padding-top: ${e.head.cell.padding.top};
              padding-left: ${e.head.cell.padding.left.base};
              padding-right: ${e.head.cell.padding.right.base};
              padding-bottom: ${e.head.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${e.head.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${e.head.cell.padding.right.last};
            }
          }
        }

        & tbody {
          & tr {
            & th,
            & td {
              text-wrap: balance;
              overflow-wrap: break-word;
              padding-top: ${e.body.cell.padding.top};
              padding-left: ${e.body.cell.padding.left.base};
              padding-right: ${e.body.cell.padding.right.base};
              padding-bottom: ${e.body.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${e.body.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${e.body.cell.padding.right.last};
            }

            &:nth-of-type(odd) {
              background: ${e.body.row.backgroundColor.odd};
            }

            &:nth-of-type(even) {
              background: ${e.body.row.backgroundColor.even};
            }
          }
        }
      `,t&&n`
          table-layout: ${t};
        `]}}
`;function I(t){const{layout:o,testID:e="table",...r}=t;return s.jsx(qt,{width:"100%",...r,$layout:o,"data-testid":e})}I.Thead=t=>{const{tokens:o}=d(),{table:e}=o;return s.jsx($,{component:"thead",variant:e.head.typography.variant,fontFamily:e.head.typography.fontFamily,...t})};I.Tbody=t=>{const{tokens:o}=d(),{table:e}=o;return s.jsx($,{component:"tbody",variant:e.body.typography.variant,fontFamily:e.body.typography.fontFamily,...t})};I.Tr=t=>s.jsx("tr",{...t});I.Th=t=>{const{align:o="right",...e}=t;return s.jsx("th",{align:o,...e})};I.Td=t=>{const{align:o="right",...e}=t;return s.jsx("td",{align:o,...e})};var ve=I;a.div`
  font-size: 0;
`;a.div`
  ${({$tabsView:t})=>{const{tokens:o}=d(),{tabs:e}=o;return[n`
        display: inline-grid;
        padding-right: ${e.desktop.container.padding.right};
      `,(!t||t==="mobile")&&n`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
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
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
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
  ${({$withIcon:t,$isActive:o})=>{const{tokens:e}=d(),{tabs:r}=e;return[n`
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
      `,t&&n`
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
  ${({$isActive:t})=>{const{tokens:o}=d(),{tabs:e}=o;return[n`
        color: ${e.desktop.tab.label.color.base};

        label:hover && {
          color: ${e.desktop.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${e.desktop.tab.label.color.disabled};
        }
      `,t&&n`
          color: ${e.desktop.tab.label.color.active};

          label:hover && {
            color: ${e.desktop.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${e.desktop.tab.label.color.disabled};
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
      color: ${o.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`;a.div`
  ${({$isActive:t})=>{const{tokens:o}=d(),{tabs:e}=o;return[n`
        display: grid;
        place-items: center;

        svg {
          width: ${e.desktop.tab.icon.width};
          height: ${e.desktop.tab.icon.height};
          color: ${e.desktop.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${e.desktop.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${e.desktop.tab.icon.color.disabled};
          }
        }
      `,t&&n`
          svg {
            color: ${e.desktop.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${e.desktop.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${e.desktop.tab.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
      width: ${o.desktop.tab.separator.width};
      background-color: ${o.desktop.tab.separator.color};
      margin-top: ${o.desktop.tab.separator.marginTop};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
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
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;a.div`
  ${({$withIcon:t,$isActive:o,$withPadding:e})=>{const{tokens:r}=d(),{tabs:i}=r;return[n`
        display: ${o?"block":"none"};
        background: ${i.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${i.panel.focusRing.width};
          outline-style: ${i.panel.focusRing.style};
          outline-color: ${i.panel.focusRing.color};
        }
      `,e&&n`
          padding-top: ${i.panel.padding.top};
          padding-bottom: ${i.panel.padding.bottom};
          padding-left: ${i.panel.padding.left.base};
          padding-right: ${i.panel.padding.right.base};
        `,e&&t&&n`
          padding-left: ${i.panel.padding.left.withIcon};
          padding-right: ${i.panel.padding.right.withIcon};
        `]}}
`;var oe=a(to)`
  ${()=>n`
      width: 100%;
    `}
`;a.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:t})=>{const{tokens:o}=d(),{textArea:e,outerField:r}=o;return n`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${e.innerShadow.height};
        pointer-events: none;
        opacity: ${e.innerShadow.opacity.inactive};
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

      ${()=>(t==="TOP"||t==="BOTH")&&n`
          &::before {
            opacity: ${e.innerShadow.opacity.active};
          }
        `}

      ${()=>(t==="BOTTOM"||t==="BOTH")&&n`
        &::after {
          opacity: ${e.innerShadow.opacity.active};
      `}
    `}}
`;a(jo)`
  ${()=>{const{tokens:t}=d(),{textArea:o,typography:e,scrollBar:r,outerField:i}=t,l=o.typography.variant,c=g(e.fontSize[l]),u=g(e.lineHeight[l]);return n`
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
      font-family: ${e.fontFamily[l]};
      font-size: ${c};
      line-height: ${u};

      ${oe}:has(textarea:read-only) && {
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
`;var A="0.4s",y=a.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=g(o.size[t].width),r=g(o.size[t].height);return n`
      position: relative;
      width: ${e};
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=g(o.size[t].width),r=o.thumb.size[t].margin;return[n`
        position: relative;
        width: ${o.thumb.size[t].width};
        height: ${o.thumb.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[t].height};
        margin: ${r};
        transition: transform ${A};
        ${y}:has(input:checked) && {
          transform: translateX(calc(${e} - ${r} - ${r} - 100%));
        }

        ${y}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a($)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[t].padding};
        transition: opacity ${A};

        ${y}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${y}:has(input:checked) && {
          opacity: 1;
        }

        ${y}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;a($)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[t].padding};
        transition: opacity ${A};

        ${y}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${y}:has(input:checked) && {
          opacity: 0;
        }

        ${y}:has(input:not(:checked)) && {
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=g(o.size[t].width),r=g(o.size[t].height);return n`
      cursor: pointer;
      width: ${e};

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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=g(o.size[t].width);return n`
      width: ${e};
      background-color: transparent;
    `}}
`;var te=p.createContext(null),Y=()=>{const t=p.useContext(te);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},ee=a.div`
  ${({$isControlled:t})=>{const{tokens:o}=d(),{tooltip:e}=o;return[n`
        max-width: ${e.maxWidth};
        border-radius: ${e.radius};
        padding-top: ${e.padding.top};
        padding-bottom: ${e.padding.bottom};
        padding-left: ${e.padding.left};
        padding-right: ${e.padding.right.default};
        background: ${e.backgroundColor};
        color: ${e.color};
        z-index: ${e.zIndex};
      `,t&&n`
          padding-right: ${e.padding.right.large};
        `]}}
`,re=a.button`
  ${()=>{const{tokens:t}=d(),{tooltip:o}=t;return n`
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
`,ne=p.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=d(),{tooltip:l}=i,{open:c,setOpen:u,isControlled:h,arrowRef:f,floatingData:b,interactionsData:v}=Y(),C=S([b.refs.setFloating,o]);return c?s.jsx(wo,{children:s.jsxs(ee,{ref:C,style:b.floatingStyles,...v.getFloatingProps(r),$isControlled:h,children:[s.jsx(xo,{ref:f,context:b.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),h&&s.jsx(re,{onClick:()=>u(!1),"aria-label":"Close tooltip",children:s.jsx(O,{})}),e]})}):null});ne.displayName="TooltipContent";var w=a.button`
  ${({$isControlled:t})=>{const{tokens:o}=d(),{iconButton:e}=o;return[n`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${e.padding.default};
      `,t&&n`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,ie=a.div`
  ${()=>{const{tokens:t}=d(),{iconButton:o}=t;return n`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding.default};
      border-radius: ${o.inner.radius.default};
      background: ${o.inner.backgroundColor.default.base};

      ${w}:focus-visible && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,ae=a(vo)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=d(),{iconButton:r,tooltipIconButton:i}=e;return[n`
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${i.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.icon.secondaryColor.base};
        }
      `,!t&&n`
          ${w}:hover &&,
          ${w}:focus-visible && {
            display: none;
          }
        `,!o&&n`
          ${w}:hover && {
            & [data-primary-color] {
              color: ${i.icon.primaryColor.hover};
            }
          }
        `,o&&n`
          display: none;
        `]}}
`,de=a(yo)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=d(),{iconButton:r,tooltipIconButton:i}=e;return[n`
        display: none;
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${i.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.iconFilled.secondaryColor.base};
        }
      `,!t&&n`
          ${w}:hover &&,
          ${w}:focus-visible && {
            display: block;
          }
        `,o&&n`
          display: block;
        `,t&&o&&n`
          ${w}:hover && {
            & [data-primary-color] {
              color: ${i.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,se=p.forwardRef((t,o)=>{const{testID:e="tooltip-icon-button",...r}=t,{open:i,isControlled:l}=Y();return s.jsx(w,{...r,ref:o,$isControlled:l,"data-testid":e,children:s.jsxs(ie,{children:[s.jsx(ae,{$isOpen:i,$isControlled:l}),s.jsx(de,{$isOpen:i,$isControlled:l})]})})});se.displayName="TooltipIconButton";var le=p.forwardRef((t,o)=>{const{children:e,...r}=t,{open:i,floatingData:l,interactionsData:c}=Y(),u=e.ref,h=S([l.refs.setReference,u,o]);return p.isValidElement(e)?p.cloneElement(e,c.getReferenceProps({ref:h,...r,...e.props,"data-state":i?"open":"closed"})):null});le.displayName="TooltipTrigger";export{ve as T,$ as a};
