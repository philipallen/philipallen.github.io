import{r as u}from"./index-c013ead5.js";import{T as V,B as uo,I as ho}from"./index-f3e1dd3b.js";import{a,u as s,b as n,p as g,h as po}from"./index-7d8df789.js";import{A as bo,a as go,C as U,E as $o,M as fo,T as q,b as ko,I as vo,c as mo}from"./index-03e177c8.js";import{j as d}from"./jsx-runtime-6eef64cc.js";import{u as W,F as yo,a as wo}from"./floating-ui.react-06582175.js";import{$ as xo,a as Co}from"./Button-4761aa70.js";import{$ as Ro}from"./utils-6c976ac0.js";import{i as Io}from"./react-textarea-autosize.browser.esm-ede8cc8b.js";a.div`
  ${({$variant:t})=>{const{tokens:o}=s(),{accordion:e}=o;return[n`
        display: grid;
        background: ${e.background[t]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`;var D=a.button`
  ${()=>{const{tokens:t}=s(),{accordion:o}=t;return[n`
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
  ${({$variant:t})=>{const{tokens:o}=s(),{accordion:e}=o;return[n`
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

        ${D}:hover & {
          background: ${e.header.inner.backgroundColor.hover};
        }

        ${D}:active & {
          background: ${e.header.inner.backgroundColor.active[t]};
        }
      `]}}
`;a.div`
  ${({$isOpen:t})=>{const{tokens:o}=s(),{accordion:e}=o;return[n`
        color: ${e.header.icon.color.base};
        transform: rotateX(${t?"180deg":"0deg"});

        svg {
          display: block;
          width: ${e.header.icon.width};
          height: ${e.header.icon.height};
        }

        ${D}:hover & {
          color: ${e.header.icon.color.hover};
        }

        ${D}:active & {
          color: ${e.header.icon.color.active};
        }
      `]}}
`;a.div`
  ${({$isOpen:t})=>{const{tokens:o}=s(),{accordion:e}=o;return[n`
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
  ${({hidden:t})=>{const{tokens:o}=s(),{accordion:e}=o;return[n`
        display: ${t?"none":"block"};
        padding: ${e.content.padding};
      `]}}
`;var Lo=a.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:r})=>{const{tokens:i}=s(),{typography:l,fontFamily:c}=i,h=g(l.fontSize[t]),p=g(l.lineHeight[t]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||l.color[t]};
        font-size: ${h};
        line-height: ${p};
        font-family: ${l.fontFamily[t]};
      `,o&&n`
          font-family: ${c[o]};
        `,e&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,V.STANDARD_VARIANTS.includes(t)&&n`
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
            font-family: ${V.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function jo(t,o){const{variant:e,component:r,color:i,fontFamily:l,noWrap:c,testID:h,...p}=t;return d.jsx(Lo,{...p,ref:o,as:r,$variant:e,$color:i,$fontFamily:l,$noWrap:c,"data-testid":h})}var Bo=u.forwardRef(jo),To={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},zo=u.forwardRef;function Fo(t,o){const{variant:e="bodyM",component:r,...i}=t;return d.jsx(Bo,{...i,ref:o,variant:e,component:r||To[e]})}var $=zo(Fo),Do=a.div`
  ${()=>{const{tokens:t}=s(),{accordionGroup:o}=t;return[n`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;a(Do)`
  ${()=>{const{tokens:t}=s(),{accordionGroup:o}=t;return[n`
        gap: ${o.gap.nested};
      `]}}
`;var So=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,Po=a.span`
  ${({$isLoading:t})=>{const{tokens:o}=s(),{button:e}=o,r=g(e.topLayer.icon.width),i=g(e.topLayer.icon.width);return n`
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
`,Wo=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,k=a.button`
  ${({$variant:t,$isLoading:o,$fullWidth:e})=>{const{tokens:r}=s(),{button:i}=r;return[n`
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
`,Oo=a.div`
  ${({$variant:t,$isLoading:o})=>{const{tokens:e}=s(),{button:r}=e;return[n`
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
`,Ao=a.div`
  ${({$variant:t,$isLoading:o})=>{const{tokens:e}=s(),{button:r}=e,{shadow:i}=r.bottomLayer;return[n`
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
`,J=u.forwardRef((t,o)=>{const{variant:e,children:r,testID:i,type:l,isLoading:c,fullWidth:h,...p}=t;return d.jsxs(k,{...p,ref:o,$variant:e,$isLoading:c,$fullWidth:h,"data-testid":i,type:l||"button",children:[d.jsx(Ao,{$variant:e,$isLoading:c}),d.jsx(Oo,{$variant:e,$isLoading:c,children:r})]})});J.displayName="ButtonBase";var No=J,Eo=po`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ho=a.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:t,$color:o})=>n`
    color: ${o};
    width: ${t};
    height: ${t};
  `}
`,Yo=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:t})=>{const{tokens:{spinner:o}}=s();return n`
      border: ${t} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,P=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${Eo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:t,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(t+1)}s;
    `}
`,K=u.memo(t=>{const{testID:o="spinner"}=t,{tokens:{spinner:e}}=s();let r,i;if("variant"in t){const h=e.variants[t.variant];h&&([r,i]=[h.color,h.size])}"size"in t&&t.size?i=t.size:i||(i=e.variants.default.size),"color"in t&&t.color?r=t.color:r||(r=e.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(i)/parseInt(e.borderRatio))}px`};return d.jsxs(Ho,{$color:r,$size:i,"data-testid":o,children:[d.jsx(Yo,{...c}),d.jsx(P,{$index:0,...c}),d.jsx(P,{$index:1,...c}),d.jsx(P,{$index:2,...c})]})});K.displayName="Spinner";var Mo=K,Vo=u.forwardRef((t,o)=>{const{text:e,variant:r="primary",startIcon:i,isLoading:l,testID:c="button",...h}=t,{tokens:p}=s(),{button:f}=p,b={"aria-disabled":l,"aria-label":l?"Loading":void 0};return d.jsx(No,{...h,...b,ref:o,variant:r,isLoading:l,testID:c,children:d.jsxs(So,{children:[i&&d.jsx(Po,{$isLoading:l,children:i}),d.jsx(_o,{$isLoading:l,children:d.jsx($,{variant:f.topLayer.text.typography.variant,fontFamily:f.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:e})}),l&&d.jsx(Wo,{children:d.jsx(Mo,{variant:uo.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});Vo.displayName="Button";var Go=a.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function Xo(t){const{alert:o,gap:e,children:r}=t;return d.jsxs(Go,{$gap:e,children:[r,o&&o]})}var O=Xo,Uo=a.div`
  ${({$severity:t})=>{const{tokens:o}=s(),{inputAlert:e}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      color: ${e.color[t]};

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
      }
    `}}
`,qo=a.div`
  ${({$severity:t})=>{const{tokens:o}=s(),{inputAlert:e}=o,r=g(e.iconWrapper.height);return n`
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
`;function Jo(t){const{severity:o,children:e,testID:r="input-alert"}=t;return d.jsxs(Uo,{role:"alert","aria-live":"polite",$severity:o,"data-testid":r,children:[d.jsx(qo,{$severity:o,children:d.jsx($o,{"aria-hidden":"true"})}),d.jsx($,{color:"inherit",children:e})]})}var A=Jo,Ko=a.label`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return n`
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
`,Qo=a.span`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function Zo(t){const{label:o,children:e,...r}=t,{tokens:i}=s(),{inputLabelRight:l}=i;return d.jsxs(Ko,{...r,children:[d.jsx("span",{children:e}),o&&d.jsx(Qo,{children:d.jsx($,{component:"span",color:"inherit",variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:o})})]})}var Q=Zo,N=a.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{checkbox:e}=o;return[n`
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
`,ot=a.input`
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
`,tt=a(fo)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${N}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,et=a(q)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${N}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function rt(t,o){u.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var Z=u.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:i="checkbox",...l}=t,c=u.useRef(null);rt(c,r);const h=W([c,o]);function p(f){var b;f.target.indeterminate=!!r,(b=l.onChange)==null||b.call(l,f)}return d.jsxs(N,{$hasError:e,children:[d.jsx(ot,{...l,ref:h,type:"checkbox",onChange:p,"data-testid":i}),d.jsx(tt,{}),d.jsx(et,{})]})});Z.displayName="CheckboxBase";var nt=Z,it=u.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:l="checkbox"}=i;return d.jsx(O,{alert:r?d.jsx(A,{...r,testID:`${l}-alert`}):void 0,children:d.jsx(Q,{...e,children:d.jsx(nt,{...i,ref:o})})})});it.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var at=a.ul`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(at)`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var st=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,dt=a.span`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.label.color.base};
    `}}
`,lt=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function oo(t){const{label:o,labelHint:e,labelHintID:r,children:i}=t,{tokens:l}=s(),{inputLabelTop:c}=l;return d.jsxs(st,{children:[d.jsxs("div",{children:[o,e&&d.jsx(lt,{children:d.jsx($,{id:r,component:"span",color:"inherit",variant:c.labelHint.typography.variant,fontFamily:c.labelHint.typography.fontFamily,children:e})})]}),d.jsx("div",{children:i})]})}oo.Label=t=>{const{text:o,component:e="span"}=t,{tokens:r}=s(),{inputLabelTop:i}=r;return d.jsx(dt,{children:d.jsx($,{component:e,color:"inherit",variant:i.label.typography.variant,fontFamily:i.label.typography.fontFamily,children:o})})};var G=oo;function ct(t){const{label:o,labelHint:e,labelHintID:r,children:i,...l}=t;return d.jsx(G,{label:d.jsx("label",{...l,children:o&&d.jsx(G.Label,{text:o})}),labelHint:e,labelHintID:r,children:i})}var to=ct,eo=a(to)`
  ${()=>n`
      width: 100%;
    `}
`,ut=a.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`,ht=a.input`
  ${()=>{const{tokens:t}=s(),{textInput:o,typography:e}=t,r=o.typography.variant,i=g(e.fontSize[r]),l=g(e.lineHeight[r]);return n`
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
`,pt=a($)`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`,bt=a.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`,v=a.div`
  ${()=>{const{tokens:t}=s(),{outerField:o}=t;return n`
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
`,gt=a.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{outerField:e}=o;return[n`
        position: relative;
        width: 100%;
        background: ${e.backgroundColor};

        outline-color: ${e.stroke.color.base};
        outline-width: ${e.stroke.width.base};
        outline-offset: ${e.stroke.offset.base};
        outline-style: ${e.stroke.style};
        border-radius: ${e.radius};

        ${v}:has(input:not(:disabled)):hover &&,
        ${v}:has(textarea:not(:disabled)):hover && {
          outline-color: ${e.stroke.color.hover};
          outline-width: ${e.stroke.width.hover};
          outline-offset: ${e.stroke.offset.hover};
        }

        ${v}:has(input:read-only) &&,
        ${v}:has(textarea:read-only) && {
          outline-color: ${e.stroke.color.readOnly};
        }

        ${v}:has(input:focus) &&,
        ${v}:has(textarea:focus) && {
          outline-color: ${e.stroke.color.focus};
          outline-width: ${e.stroke.width.focus};
          outline-offset: ${e.stroke.offset.focus};
        }
      `,t&&n`
          &&,
          ${v}:has(input:read-only) &&,
          ${v}:has(input:disabled) &&,
          ${v}:has(textarea:read-only) &&,
          ${v}:has(textarea:disabled) && {
            outline-width: ${e.stroke.width.error};
            outline-color: ${e.stroke.color.error};
            outline-offset: ${e.stroke.offset.error};
          }
        `]}}
`;function $t(t){const{hasError:o,children:e}=t;return d.jsx(v,{children:d.jsx(gt,{$hasError:o,children:e})})}var ft=$t,kt=a($)`
  ${()=>{const{tokens:t}=s(),{charactersCounter:o}=t;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function vt(t){const{length:o,maxLength:e,testID:r}=t,{tokens:i}=s(),{charactersCounter:l}=i,c=Math.max(0,e-o);return d.jsx(kt,{variant:l.typography.variant,fontFamily:l.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}var mt=u.memo(vt),yt=u.forwardRef((t,o)=>{var T;const{id:e,hasError:r,prefix:i,icon:l,onChange:c,testID:h="input",labelProps:p,alertProps:f,...b}=t,w=u.useId(),x=u.useId(),{labelHint:S}=p,{maxLength:L}=b,{tokens:{textInput:j}}=s(),[C,Y]=u.useState(((T=b.value||b.defaultValue)==null?void 0:T.length)||0),B=u.useCallback(z=>{Y(z.target.value.length),c==null||c(z)},[c]);return d.jsxs(O,{gap:b.maxLength?"4px":"8px",alert:f?d.jsx(A,{...f,testID:`${h}-alert`}):void 0,children:[d.jsx(eo,{...p,labelHintID:x,htmlFor:e||w,children:d.jsx(ft,{hasError:r,children:d.jsxs(ut,{children:[i?d.jsx(pt,{variant:j.prefix.typography.variant,fontFamily:j.prefix.typography.fontFamily,testID:`${h}-prefix`,children:i}):void 0,d.jsx(ht,{...b,ref:o,id:e||w,onChange:B,"aria-describedby":S?x:void 0,"data-testid":h}),l?d.jsx(bt,{"data-testid":`${h}-icon-wrapper`,children:l}):void 0]})})}),L?d.jsx(mt,{length:C,maxLength:L,testID:`${h}-characters-counter`}):void 0]})});yt.displayName="TextInput";a.div`
  ${()=>{const{tokens:t}=s(),{datePicker:o}=t;return n`
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
  ${()=>{const{tokens:t}=s(),{datePicker:o}=t;return n`
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
`;var R=a.button`
  ${({$variant:t})=>{const{tokens:o}=s(),{iconButton:e}=o;return n`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${e.padding[t]};

      &:not(:disabled) {
        cursor: pointer;
      }
    `}}
`,wt=a.div`
  ${({$variant:t})=>{const{tokens:o}=s(),{iconButton:e}=o;return[n`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${e.inner.padding[t]};
        border-radius: ${e.inner.radius[t]};
        background: ${e.inner.backgroundColor[t].base};

        svg {
          display: block;
          width: ${e.inner.icon.width[t]};
          height: ${e.inner.icon.height[t]};
          color: ${e.inner.icon.color.base};
        }

        ${R}:hover && {
          background: ${e.inner.backgroundColor[t].hover};

          svg {
            color: ${e.inner.icon.color.hover};
          }
        }

        ${R}:active && {
          background: ${e.inner.backgroundColor[t].active};

          svg {
            color: ${e.inner.icon.color.active};
          }
        }

        ${R}:focus-visible && {
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

          ${R}:hover &:after {
            outline-color: ${e.inner.stroke.contained.color.hover};
          }

          ${R}:active &:after {
            outline-color: ${e.inner.stroke.contained.color.active};
          }
        `]}}
`,ro=u.forwardRef((t,o)=>{const{variant:e=ho.DEFAULT_VARIANT,children:r,testID:i="icon-button",...l}=t;return d.jsx(R,{...l,ref:o,$variant:e,"data-testid":i,children:d.jsx(wt,{$variant:e,children:r})})});ro.displayName="IconButton";var xt=ro,Ct=u.forwardRef((t,o)=>{[t,o]=Ro(t,o,Co);const{buttonProps:e}=xo(t,o);return d.jsxs(xt,{...e,ref:o,children:[t.slot==="previous"&&d.jsx(bo,{}),t.slot==="next"&&d.jsx(go,{})]})});Ct.displayName="DatePickerIconButton";var Rt=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,It=a.input`
  ${({$error:t,$hasStartAdornment:o,$hasEndAdornment:e,$hasClearButton:r})=>{const{tokens:i}=s(),{input:l,adornment:c,clearButton:h}=i;return[n`
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
        padding-right: ${e?`calc(${c.width.small} + ${l.paddingRight})`:r?h.width:l.paddingRight};
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
`,Lt=a.div`
  ${()=>{const{tokens:t}=s(),{clearButton:o}=t;return n`
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
`,no=t=>({id:t.id,className:t.className,"data-testid":t.testID}),jt=({onClick:t,...o})=>{const{tokens:e}=s(),{clearButton:r}=e;return d.jsx(Lt,{...no(o),role:"button",onClick:t,children:d.jsx(U,{width:16,height:16,color:r.color.base})})},Bt=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Tt=a.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,zt=a.div`
  ${()=>{const{tokens:t}=s(),{fontFamily:o,themeColor:e}=t;return[n`
        font-family: ${o.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${e.ragRed};
        width: 100%;
      `]}}
`,Ft=({elementId:t,labelId:o,labelText:e,errorText:r,children:i,labelTestId:l,...c})=>d.jsxs(Bt,{...no(c),children:[e?d.jsx($,{id:o,component:"label",htmlFor:t,testID:l,children:e}):null,d.jsxs(Tt,{children:[i,r?d.jsx(zt,{children:r}):null]})]}),Dt=u.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:r,errorText:i,onChange:l,labelId:c,labelText:h,labelTestId:p,testID:f,...b},w)=>{const{disabled:x,readOnly:S,value:L="",id:j}=b,C=u.useRef(null),B=t&&!(x||S)&&!!L;u.useImperativeHandle(w,()=>C.current);const T=()=>{typeof l=="function"&&l(""),C.current&&C.current.focus()},z=M=>{typeof l=="function"&&l(M.target.value,M)};return d.jsx(Ft,{labelId:c,labelText:h,labelTestId:p,errorText:i,elementId:j,children:d.jsxs(Rt,{children:[o,d.jsx(It,{...b,$hasClearButton:B,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:C,$error:r||!!i,onChange:z,"data-testid":f}),B&&!e?d.jsx(jt,{testID:"input-clear-button",onClick:T}):null,e]})})});Dt.displayName="Input";var St=a.a`
  ${({$display:t})=>{const{tokens:o}=s(),{link:e}=o;return n`
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
`,Pt=u.forwardRef;function _t(t,o){const{display:e="inline",component:r="a",testID:i="link",...l}=t;return d.jsx(St,{...l,ref:o,as:r,"data-testid":i,$display:e})}var io=Pt(_t),ao=a(io)``,Wt=a($)`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
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

      ${ao}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,Ot=u.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=s(),{link:l}=i;return d.jsx(ao,{...r,ref:o,children:d.jsx(Wt,{component:"span",color:"inherit",variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:e})})});Ot.displayName="Link";var so=a(io)``,_=a.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,At=a($)`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
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

      ${so}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,X=a.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t,e=g(o.withIcon.size);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,Nt=u.forwardRef((t,o)=>{const{children:e,startIcon:r,endIcon:i,testID:l="link",...c}=t,{tokens:h}=s(),{link:p}=h;return d.jsx(so,{...c,ref:o,display:"inline-flex",testID:l,children:d.jsxs(_,{children:[r&&d.jsx(X,{"data-testid":`${l}-start-icon-wrapper`,children:r}),d.jsx(At,{component:"span",color:"inherit",variant:p.typography.variant,fontFamily:p.typography.fontFamily,children:e}),i&&d.jsx(X,{"data-testid":`${l}-end-icon-wrapper`,children:i})]})})});Nt.displayName="LinkWithIcon";a.div`
  overflow: hidden;
`;a.div`
  ${()=>{const{tokens:t}=s(),{multiSelect:o}=t;return n`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=s(),{multiSelect:o}=t;return n`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=s(),{multiSelect:o}=t;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:t,$isHighlighted:o})=>{const{tokens:e}=s(),{multiSelect:r}=e;return[n`
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
  ${()=>{const{tokens:t}=s(),{select:o}=t;return[n`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;a.div`
  ${({$isOpen:t,$hasError:o,$isDisabled:e})=>{const{tokens:r}=s(),{select:i}=r;return[n`
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
  ${()=>{const{tokens:t}=s(),{select:o}=t;return n`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return n`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var Et=a(ko)`
  rotate: 0deg;
`;a(Et)`
  rotate: 180deg;
`;a.div`
  ${({$isOpen:t})=>{const{tokens:o}=s(),{select:e}=o;return n`
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
`;var lo=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a(lo)`
  ${({$visible:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a(lo)`
  ${({$visible:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a.ul`
  ${()=>{const{tokens:t}=s(),{select:o}=t,{menu:{scrollBar:{thumbColor:e,trackColor:r,radius:i}}}=o;return n`
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
`;var F=a.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{radio:e}=o;return[n`
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
`,Ht=a.input`
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
`,Yt=a.div`
  ${()=>{const{tokens:t}=s(),{radio:o}=t;return[n`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${F}:has(input:checked) && {
          display: block;
        }

        ${F}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${F}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,co=u.forwardRef((t,o)=>{const{hasError:e,testID:r="radio",...i}=t;return d.jsxs(F,{$hasError:e,children:[d.jsx(Ht,{...i,ref:o,type:"radio","data-testid":r}),d.jsx(Yt,{})]})});co.displayName="RadioBase";var Mt=co,Vt=u.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:l="radio"}=i;return d.jsx(O,{alert:r?d.jsx(A,{...r,testID:`${l}-alert`}):void 0,children:d.jsx(Q,{...e,children:d.jsx(Mt,{...i,ref:o})})})});Vt.displayName="Radio";a.div`
  ${({$isDisabled:t,$hasSelectedItem:o})=>{const{tokens:e}=s(),{select:r}=e;return[n`
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
  ${()=>{const{tokens:t}=s(),{select:o}=t;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:t,$isHighlighted:o})=>{const{tokens:e}=s(),{select:r}=e;return[n`
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
`;a(q)`
  ${({$isSelected:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        visibility: ${t?"visible":"hidden"};
        width: ${e.menu.option.inner.icon.width};
        height: ${e.menu.option.inner.icon.height};
      `]}}
`;a.div`
  width: 100%;
`;a.div`
  ${()=>{const{tokens:{slider:t}}=s();return n`
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
  ${()=>{const{tokens:{slider:t}}=s();return n`
      padding: 0 ${t.track.padding} 0;
    `}}
`;a.div`
  ${()=>{const{tokens:{slider:t}}=s();return n`
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
  ${({$notchAsPercent:t})=>{const{tokens:{slider:o,color:e}}=s();return n`
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
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return n`
      max-width: ${o.maxWidth};
    `}}
`;var Gt=a.table`
  ${({$layout:t})=>{const{tokens:o}=s(),{table:e}=o;return[n`
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
`;function I(t){const{layout:o,testID:e="table",...r}=t;return d.jsx(Gt,{width:"100%",...r,$layout:o,"data-testid":e})}I.Thead=t=>{const{tokens:o}=s(),{table:e}=o;return d.jsx($,{component:"thead",variant:e.head.typography.variant,fontFamily:e.head.typography.fontFamily,...t})};I.Tbody=t=>{const{tokens:o}=s(),{table:e}=o;return d.jsx($,{component:"tbody",variant:e.body.typography.variant,fontFamily:e.body.typography.fontFamily,...t})};I.Tr=t=>d.jsx("tr",{...t});I.Th=t=>{const{align:o="right",...e}=t;return d.jsx("th",{align:o,...e})};I.Td=t=>{const{align:o="right",...e}=t;return d.jsx("td",{align:o,...e})};var he=I;a.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`;a.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`;a.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      display: none;
      border-top-left-radius: ${o.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${o.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${o.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${o.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${o.tab.focusRing.width};
        outline-style: ${o.tab.focusRing.style};
        outline-color: ${o.tab.focusRing.color};
        outline-offset: ${o.tab.focusRing.offset};
      }
    `}}
`;a.div`
  ${({$withIcon:t,$isActive:o})=>{const{tokens:e}=s(),{tabs:r}=e;return[n`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        background: ${r.tab.backgroundColor.base};

        border-top-left-radius: ${r.tab.radius.topLeft};
        border-top-right-radius: ${r.tab.radius.topLeft};
        border-top-width: ${r.tab.strokeTop.width};
        border-top-style: ${r.tab.strokeTop.style};
        border-top-color: ${r.tab.strokeTop.color.base};

        padding-top: ${r.tab.padding.top};
        padding-bottom: ${r.tab.padding.bottom};
        padding-left: ${r.tab.padding.left.base};
        padding-right: ${r.tab.padding.right.base};

        label:hover && {
          background: ${r.tab.backgroundColor.hover};
        }

        label:has(button:active) && {
          outline-width: ${r.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${r.tab.activeRing.color};
          outline-offset: ${r.tab.activeRing.offset};
        }

        user-select: none;
      `,t&&n`
          padding-left: ${r.tab.padding.left.withIcon};
          padding-right: ${r.tab.padding.right.withIcon};
        `,o&&n`
          background: ${r.tab.backgroundColor.active};
          border-top-color: ${r.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${r.tab.backgroundColor.active};
          }
        `]}}
`;a.div`
  ${({$isActive:t})=>{const{tokens:o}=s(),{tabs:e}=o;return[n`
        color: ${e.tab.label.color.base};

        label:hover && {
          color: ${e.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${e.tab.label.color.disabled};
        }
      `,t&&n`
          color: ${e.tab.label.color.active};

          label:hover && {
            color: ${e.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${e.tab.label.color.disabled};
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      color: ${o.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.tab.secondaryLabel.color.disabled};
      }
    `}}
`;a.div`
  ${({$isActive:t})=>{const{tokens:o}=s(),{tabs:e}=o;return[n`
        display: grid;
        place-items: center;

        svg {
          width: ${e.tab.icon.width};
          height: ${e.tab.icon.height};
          color: ${e.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${e.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${e.tab.icon.color.disabled};
          }
        }
      `,t&&n`
          svg {
            color: ${e.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${e.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${e.tab.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      width: ${o.tab.separator.width};
      background-color: ${o.tab.separator.color};
      margin-top: ${o.tab.separator.marginTop};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;a.div`
  ${({$withIcon:t,$isActive:o,$withPadding:e})=>{const{tokens:r}=s(),{tabs:i}=r;return[n`
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
`;var Xt=a(to)`
  ${()=>n`
      width: 100%;
    `}
`;a.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:t})=>{const{tokens:o}=s(),{textArea:e,outerField:r}=o;return n`
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
`;a(Io)`
  ${()=>{const{tokens:t}=s(),{textArea:o,typography:e,scrollBar:r,outerField:i}=t,l=o.typography.variant,c=g(e.fontSize[l]),h=g(e.lineHeight[l]);return n`
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
      line-height: ${h};

      ${Xt}:has(textarea:read-only) && {
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
`;var E="0.4s",m=a.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s(),e=g(o.size[t].width),r=g(o.size[t].height);return n`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s(),e=g(o.size[t].width),r=o.thumb.size[t].margin;return[n`
        position: relative;
        width: ${o.thumb.size[t].width};
        height: ${o.thumb.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[t].height};
        margin: ${r};
        transition: transform ${E};
        ${m}:has(input:checked) && {
          transform: translateX(calc(${e} - ${r} - ${r} - 100%));
        }

        ${m}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a($)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[t].padding};
        transition: opacity ${E};

        ${m}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${m}:has(input:checked) && {
          opacity: 1;
        }

        ${m}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;a($)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[t].padding};
        transition: opacity ${E};

        ${m}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${m}:has(input:checked) && {
          opacity: 0;
        }

        ${m}:has(input:not(:checked)) && {
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s(),e=g(o.size[t].width),r=g(o.size[t].height);return n`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s(),e=g(o.size[t].width);return n`
      width: ${e};
      background-color: transparent;
    `}}
`;var Ut=u.createContext(null),H=()=>{const t=u.useContext(Ut);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},qt=a.div`
  ${({$isControlled:t})=>{const{tokens:o}=s(),{tooltip:e}=o;return[n`
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
`,Jt=a.button`
  ${()=>{const{tokens:t}=s(),{tooltip:o}=t;return n`
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
`,Kt=u.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=s(),{tooltip:l}=i,{open:c,setOpen:h,isControlled:p,arrowRef:f,floatingData:b,interactionsData:w}=H(),x=W([b.refs.setFloating,o]);return c?d.jsx(yo,{children:d.jsxs(qt,{ref:x,style:b.floatingStyles,...w.getFloatingProps(r),$isControlled:p,children:[d.jsx(wo,{ref:f,context:b.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),p&&d.jsx(Jt,{onClick:()=>h(!1),"aria-label":"Close tooltip",children:d.jsx(U,{})}),e]})}):null});Kt.displayName="TooltipContent";var y=a.button`
  ${({$isControlled:t})=>{const{tokens:o}=s(),{iconButton:e}=o;return[n`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${e.padding.default};
      `,t&&n`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,Qt=a.div`
  ${()=>{const{tokens:t}=s(),{iconButton:o}=t;return n`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding.default};
      border-radius: ${o.inner.radius.default};
      background: ${o.inner.backgroundColor.default.base};

      ${y}:focus-visible && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,Zt=a(vo)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=s(),{iconButton:r,tooltipIconButton:i}=e;return[n`
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${i.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.icon.secondaryColor.base};
        }
      `,!t&&n`
          ${y}:hover &&,
          ${y}:focus-visible && {
            display: none;
          }
        `,!o&&n`
          ${y}:hover && {
            & [data-primary-color] {
              color: ${i.icon.primaryColor.hover};
            }
          }
        `,o&&n`
          display: none;
        `]}}
`,oe=a(mo)`
  ${({$isControlled:t,$isOpen:o})=>{const{tokens:e}=s(),{iconButton:r,tooltipIconButton:i}=e;return[n`
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
          ${y}:hover &&,
          ${y}:focus-visible && {
            display: block;
          }
        `,o&&n`
          display: block;
        `,t&&o&&n`
          ${y}:hover && {
            & [data-primary-color] {
              color: ${i.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,te=u.forwardRef((t,o)=>{const{testID:e="tooltip-icon-button",...r}=t,{open:i,isControlled:l}=H();return d.jsx(y,{...r,ref:o,$isControlled:l,"data-testid":e,children:d.jsxs(Qt,{children:[d.jsx(Zt,{$isOpen:i,$isControlled:l}),d.jsx(oe,{$isOpen:i,$isControlled:l})]})})});te.displayName="TooltipIconButton";var ee=u.forwardRef((t,o)=>{const{children:e,...r}=t,{open:i,floatingData:l,interactionsData:c}=H(),h=e.ref,p=W([l.refs.setReference,h,o]);return u.isValidElement(e)?u.cloneElement(e,c.getReferenceProps({ref:p,...r,...e.props,"data-state":i?"open":"closed"})):null});ee.displayName="TooltipTrigger";export{he as T,$ as a};
