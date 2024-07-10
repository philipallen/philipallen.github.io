import{r as h}from"./index-DH5ua8nC.js";import{T as V,B as uo,I as ho}from"./index-Cee7vv5h.js";import{a,u as d,b as n,p as g,h as po}from"./index-CWEVnOcG.js";import{A as bo,a as go,C as U,E as $o,M as fo,T as q,b as ko,I as vo,c as mo}from"./index-ef8Z-xiF.js";import{j as s}from"./jsx-runtime-DQ32znRX.js";import{u as _,F as yo,a as wo}from"./floating-ui.react-BezaurJz.js";import{$ as xo,a as Co}from"./Button-D-U0fkv9.js";import{$ as Ro}from"./utils-DMjC9_eM.js";import"./index-DoFh-0Xn.js";import{i as Io}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";a.div`
  ${({$variant:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
        display: grid;
        background: ${t.background[e]};
        border-width: ${t.stroke.width};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color};
        border-radius: ${t.stroke.radius};
      `]}}
`;var D=a.button`
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
`;a.div`
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

        ${D}:hover & {
          background: ${t.header.inner.backgroundColor.hover};
        }

        ${D}:active & {
          background: ${t.header.inner.backgroundColor.active[e]};
        }
      `]}}
`;a.div`
  ${({$isOpen:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
        color: ${t.header.icon.color.base};
        transform: rotateX(${e?"180deg":"0deg"});

        svg {
          display: block;
          width: ${t.header.icon.width};
          height: ${t.header.icon.height};
        }

        ${D}:hover & {
          color: ${t.header.icon.color.hover};
        }

        ${D}:active & {
          color: ${t.header.icon.color.active};
        }
      `]}}
`;a.div`
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
`;a.div`
  ${({hidden:e})=>{const{tokens:o}=d(),{accordion:t}=o;return[n`
        display: ${e?"none":"block"};
        padding: ${t.content.padding};
      `]}}
`;var Lo=a.p`
  ${({$variant:e,$fontFamily:o,$noWrap:t,$color:r})=>{const{tokens:i}=d(),{typography:l,fontFamily:c}=i,u=g(l.fontSize[e]),p=g(l.lineHeight[e]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||l.color[e]};
        font-size: ${u};
        line-height: ${p};
        font-family: ${l.fontFamily[e]};
      `,o&&n`
          font-family: ${c[o]};
        `,t&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,V.STANDARD_VARIANTS.includes(e)&&n`
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
`;function jo(e,o){const{variant:t,component:r,color:i,fontFamily:l,noWrap:c,testID:u,...p}=e;return s.jsx(Lo,{...p,ref:o,as:r,$variant:t,$color:i,$fontFamily:l,$noWrap:c,"data-testid":u})}var To=h.forwardRef(jo),Bo={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},zo=h.forwardRef;function Fo(e,o){const{variant:t="bodyM",component:r,...i}=e;return s.jsx(To,{...i,ref:o,variant:t,component:r||Bo[t]})}var $=zo(Fo),Do=a.div`
  ${()=>{const{tokens:e}=d(),{accordionGroup:o}=e;return[n`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;a(Do)`
  ${()=>{const{tokens:e}=d(),{accordionGroup:o}=e;return[n`
        gap: ${o.gap.nested};
      `]}}
`;a.div`
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
`;a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{alert:t}=o;return n`
      display: grid;
      place-items: center;
      height: ${g(t.iconWrapper.height)};

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
`;var So=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,Po=a.span`
  ${({$isLoading:e})=>{const{tokens:o}=d(),{button:t}=o,r=g(t.topLayer.icon.width),i=g(t.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${e?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${i};
      }
    `}}
`,Wo=a.div`
  ${({$isLoading:e})=>n`
      visibility: ${e?"hidden":"visible"};
      overflow: hidden;
    `}
`,_o=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,k=a.button`
  ${({$variant:e,$isLoading:o,$fullWidth:t})=>{const{tokens:r}=d(),{button:i}=r;return[n`
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
`,Oo=a.div`
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

        ${k}:not(:disabled):hover && {
          color: ${r.topLayer.color[e].hover};
          background: ${r.topLayer.backgroundColor[e].hover};
          transform: translateY(${r.topLayer.translateY[e].hover});
        }

        ${k}:not(:disabled):active && {
          color: ${r.topLayer.color[e].active};
          background: ${r.topLayer.backgroundColor[e].active};
          transform: translateY(${r.topLayer.translateY[e].active});
        }
      `,e==="secondary"&&n`
          ${k}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[e].hover};
          }

          ${k}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[e].active};
          }
        `,o&&n`
          color: ${r.topLayer.color[e].active};
          border-color: ${r.topLayer.stroke.color[e].active};
          background: ${r.topLayer.backgroundColor[e].active};
          transform: translateY(${r.topLayer.translateY[e].active});

          ${k}:not(:disabled):hover && {
            color: ${r.topLayer.color[e].active};
            border-color: ${r.topLayer.stroke.color[e].active};
            background: ${r.topLayer.backgroundColor[e].active};
            transform: translateY(
              ${r.topLayer.translateY[e].active}
            );
          }

          ${k}:not(:disabled):active && {
            color: ${r.topLayer.color[e].active};
            border-color: ${r.topLayer.stroke.color[e].active};
            background: ${r.topLayer.backgroundColor[e].active};
            transform: translateY(
              ${r.topLayer.translateY[e].active}
            );
          }

          ${k}:not(:disabled):focus-visible && {
            border-radius: ${r.topLayer.stroke.radius};
            outline-width: ${r.focusRing.width};
            outline-style: ${r.focusRing.style};
            outline-color: ${r.focusRing.color[e]};
            outline-offset: ${r.focusRing.offset};
          }
        `]}}
`,Ao=a.div`
  ${({$variant:e,$isLoading:o})=>{const{tokens:t}=d(),{button:r}=t,{shadow:i}=r.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[e].base};
        box-shadow: 0px ${i.blur} ${i.offsetY} ${i.color};

        ${k}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[e].hover};
        }

        ${k}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;
        }
      `,o&&n`
          background: ${r.bottomLayer.backgroundColor[e].active};
          box-shadow: none;

          ${k}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }

          ${k}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[e].active};
          }
        `]}}
`,J=h.forwardRef((e,o)=>{const{variant:t,children:r,testID:i,type:l,isLoading:c,fullWidth:u,...p}=e;return s.jsxs(k,{...p,ref:o,$variant:t,$isLoading:c,$fullWidth:u,"data-testid":i,type:l||"button",children:[s.jsx(Ao,{$variant:t,$isLoading:c}),s.jsx(Oo,{$variant:t,$isLoading:c,children:r})]})});J.displayName="ButtonBase";var Eo=J,No=po`
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
  ${({$size:e,$color:o})=>n`
    color: ${o};
    width: ${e};
    height: ${e};
  `}
`,Yo=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:e})=>{const{tokens:{spinner:o}}=d();return n`
      border: ${e} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,P=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${No} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:e,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(e+1)}s;
    `}
`,K=h.memo(e=>{const{testID:o="spinner"}=e,{tokens:{spinner:t}}=d();let r,i;if("variant"in e){const u=t.variants[e.variant];u&&([r,i]=[u.color,u.size])}"size"in e&&e.size?i=e.size:i||(i=t.variants.default.size),"color"in e&&e.color?r=e.color:r||(r=t.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(i)/parseInt(t.borderRatio))}px`};return s.jsxs(Ho,{$color:r,$size:i,"data-testid":o,children:[s.jsx(Yo,{...c}),s.jsx(P,{$index:0,...c}),s.jsx(P,{$index:1,...c}),s.jsx(P,{$index:2,...c})]})});K.displayName="Spinner";var Mo=K,Vo=h.forwardRef((e,o)=>{const{text:t,variant:r="primary",startIcon:i,isLoading:l,testID:c="button",...u}=e,{tokens:p}=d(),{button:f}=p,b={"aria-disabled":l,"aria-label":l?"Loading":void 0};return s.jsx(Eo,{...u,...b,ref:o,variant:r,isLoading:l,testID:c,children:s.jsxs(So,{children:[i&&s.jsx(Po,{$isLoading:l,children:i}),s.jsx(Wo,{$isLoading:l,children:s.jsx($,{variant:f.topLayer.text.typography.variant,fontFamily:f.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:t})}),l&&s.jsx(_o,{children:s.jsx(Mo,{variant:uo.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});Vo.displayName="Button";var Go=a.div`
  ${({$gap:e="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${e};
  `}
`;function Xo(e){const{alert:o,gap:t,children:r}=e;return s.jsxs(Go,{$gap:t,children:[r,o&&o]})}var O=Xo,Uo=a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{inputAlert:t}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${t.gap};
      color: ${t.color[e]};

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
      }
    `}}
`,qo=a.div`
  ${({$severity:e})=>{const{tokens:o}=d(),{inputAlert:t}=o,r=g(t.iconWrapper.height);return n`
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
`;function Jo(e){const{severity:o,children:t,testID:r="input-alert"}=e;return s.jsxs(Uo,{role:"alert","aria-live":"polite",$severity:o,"data-testid":r,children:[s.jsx(qo,{$severity:o,children:s.jsx($o,{"aria-hidden":"true"})}),s.jsx($,{color:"inherit",children:t})]})}var A=Jo,Ko=a.label`
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
`,Qo=a.span`
  ${()=>{const{tokens:e}=d(),{inputLabelRight:o}=e;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function Zo(e){const{label:o,children:t,...r}=e,{tokens:i}=d(),{inputLabelRight:l}=i;return s.jsxs(Ko,{...r,children:[s.jsx("span",{children:t}),o&&s.jsx(Qo,{children:s.jsx($,{component:"span",color:"inherit",variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:o})})]})}var Q=Zo,E=a.div`
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
  ${()=>{const{tokens:e}=d(),{checkbox:o}=e;return[n`
        display: none;

        ${E}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,et=a(q)`
  ${()=>{const{tokens:e}=d(),{checkbox:o}=e;return[n`
        display: none;

        ${E}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function rt(e,o){h.useEffect(()=>{e.current&&(e.current.indeterminate=!!o)},[o])}var Z=h.forwardRef((e,o)=>{const{hasError:t,isIndeterminate:r,testID:i="checkbox",...l}=e,c=h.useRef(null);rt(c,r);const u=_([c,o]);function p(f){var b;f.target.indeterminate=!!r,(b=l.onChange)==null||b.call(l,f)}return s.jsxs(E,{$hasError:t,children:[s.jsx(ot,{...l,ref:u,type:"checkbox",onChange:p,"data-testid":i}),s.jsx(tt,{}),s.jsx(et,{})]})});Z.displayName="CheckboxBase";var nt=Z,it=h.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...i}=e,{testID:l="checkbox"}=i;return s.jsx(O,{alert:r?s.jsx(A,{...r,testID:`${l}-alert`}):void 0,children:s.jsx(Q,{...t,children:s.jsx(nt,{...i,ref:o})})})});it.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var at=a.ul`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(at)`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:e}=d(),{fieldset:o}=e;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var dt=a.div`
  ${({$labelText:e})=>{const{tokens:o}=d(),{inputLabelTop:t}=o;return[n`
        width: 100%;
        display: grid;
      `,e&&n`
          gap: ${t.gap};
        `]}}
`,st=a.span`
  ${()=>{const{tokens:e}=d(),{inputLabelTop:o}=e;return n`
      color: ${o.label.color.base};
    `}}
`,lt=a.div`
  ${()=>{const{tokens:e}=d(),{inputLabelTop:o}=e;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function oo(e){const{labelElement:o,labelText:t,labelHint:r,labelHintID:i,children:l}=e,{tokens:c}=d(),{inputLabelTop:u}=c;return s.jsxs(dt,{$labelText:t,children:[s.jsxs("div",{children:[o,r&&s.jsx(lt,{children:s.jsx($,{id:i,component:"span",color:"inherit",variant:u.labelHint.typography.variant,fontFamily:u.labelHint.typography.fontFamily,children:r})})]}),s.jsx("div",{children:l})]})}oo.Label=e=>{const{text:o,component:t="span"}=e,{tokens:r}=d(),{inputLabelTop:i}=r;return s.jsx(st,{children:s.jsx($,{component:t,color:"inherit",variant:i.label.typography.variant,fontFamily:i.label.typography.fontFamily,children:o})})};var G=oo;function ct(e){const{label:o,labelHint:t,labelHintID:r,children:i,...l}=e;return s.jsx(G,{labelElement:s.jsx("label",{...l,children:o&&s.jsx(G.Label,{text:o})}),labelText:o,labelHint:t,labelHintID:r,children:i})}var to=ct,eo=a(to)`
  ${()=>n`
      width: 100%;
    `}
`,ut=a.div`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`,ht=a.input`
  ${()=>{const{tokens:e}=d(),{textInput:o,typography:t}=e,r=o.typography.variant,i=g(t.fontSize[r]),l=g(t.lineHeight[r]);return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${t.fontFamily[r]};
      font-size: ${i};
      line-height: ${l};

      ${eo}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`,pt=a($)`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`,bt=a.div`
  ${()=>{const{tokens:e}=d(),{textInput:o}=e;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`,v=a.div`
  ${()=>{const{tokens:e}=d(),{outerField:o}=e;return n`
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
  ${({$hasError:e})=>{const{tokens:o}=d(),{outerField:t}=o;return[n`
        position: relative;
        width: 100%;
        background: ${t.backgroundColor};

        outline-color: ${t.stroke.color.base};
        outline-width: ${t.stroke.width.base};
        outline-offset: ${t.stroke.offset.base};
        outline-style: ${t.stroke.style};
        border-radius: ${t.radius};

        ${v}:has(input:not(:disabled)):hover &&,
        ${v}:has(textarea:not(:disabled)):hover && {
          outline-color: ${t.stroke.color.hover};
          outline-width: ${t.stroke.width.hover};
          outline-offset: ${t.stroke.offset.hover};
        }

        ${v}:has(input:read-only) &&,
        ${v}:has(textarea:read-only) && {
          outline-color: ${t.stroke.color.readOnly};
        }

        ${v}:has(input:focus) &&,
        ${v}:has(textarea:focus) && {
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
`;function $t(e){const{hasError:o,children:t}=e;return s.jsx(v,{children:s.jsx(gt,{$hasError:o,children:t})})}var ft=$t,kt=a($)`
  ${()=>{const{tokens:e}=d(),{charactersCounter:o}=e;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function vt(e){const{length:o,maxLength:t,testID:r}=e,{tokens:i}=d(),{charactersCounter:l}=i,c=Math.max(0,t-o);return s.jsx(kt,{variant:l.typography.variant,fontFamily:l.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}var mt=h.memo(vt),yt=h.forwardRef((e,o)=>{var B;const{id:t,hasError:r,prefix:i,icon:l,onChange:c,testID:u="input",labelProps:p,alertProps:f,...b}=e,x=h.useId(),C=h.useId(),{labelHint:S}=p,{maxLength:L}=b,{tokens:{textInput:j}}=d(),[R,Y]=h.useState(((B=b.value||b.defaultValue)==null?void 0:B.length)||0),T=h.useCallback(z=>{Y(z.target.value.length),c==null||c(z)},[c]);return s.jsxs(O,{gap:b.maxLength?"4px":"8px",alert:f?s.jsx(A,{...f,testID:`${u}-alert`}):void 0,children:[s.jsx(eo,{...p,labelHintID:C,htmlFor:t||x,children:s.jsx(ft,{hasError:r,children:s.jsxs(ut,{children:[i?s.jsx(pt,{variant:j.prefix.typography.variant,fontFamily:j.prefix.typography.fontFamily,testID:`${u}-prefix`,children:i}):void 0,s.jsx(ht,{...b,ref:o,id:t||x,onChange:T,"aria-describedby":S?C:void 0,"data-testid":u}),l?s.jsx(bt,{"data-testid":`${u}-icon-wrapper`,children:l}):void 0]})})}),L?s.jsx(mt,{length:R,maxLength:L,testID:`${u}-characters-counter`}):void 0]})});yt.displayName="TextInput";a.div`
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
`;var w=a.button`
  ${({$variant:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return n`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${t.padding[e]};

      &:not(:disabled) {
        cursor: pointer;
      }
    `}}
`,wt=a.div`
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

        ${w}:not(:disabled):active && {
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
`,ro=h.forwardRef((e,o)=>{const{variant:t=ho.DEFAULT_VARIANT,children:r,testID:i="icon-button",...l}=e;return s.jsx(w,{...l,ref:o,$variant:t,"data-testid":i,children:s.jsx(wt,{$variant:t,children:r})})});ro.displayName="IconButton";var xt=ro,Ct=h.forwardRef((e,o)=>{[e,o]=Ro(e,o,Co);const{buttonProps:t}=xo(e,o);return s.jsxs(xt,{...t,ref:o,children:[e.slot==="previous"&&s.jsx(bo,{}),e.slot==="next"&&s.jsx(go,{})]})});Ct.displayName="DatePickerIconButton";var Rt=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,It=a.input`
  ${({$error:e,$hasStartAdornment:o,$hasEndAdornment:t,$hasClearButton:r})=>{const{tokens:i}=d(),{input:l,adornment:c,clearButton:u}=i;return[n`
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
        padding-right: ${t?`calc(${c.width.small} + ${l.paddingRight})`:r?u.width:l.paddingRight};
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
`,Lt=a.div`
  ${()=>{const{tokens:e}=d(),{clearButton:o}=e;return n`
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
`,no=e=>({id:e.id,className:e.className,"data-testid":e.testID}),jt=({onClick:e,...o})=>{const{tokens:t}=d(),{clearButton:r}=t;return s.jsx(Lt,{...no(o),role:"button",onClick:e,children:s.jsx(U,{width:16,height:16,color:r.color.base})})},Tt=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Bt=a.div`
  ${()=>{const{tokens:e}=d(),{formElementContainer:o}=e;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,zt=a.div`
  ${()=>{const{tokens:e}=d(),{fontFamily:o,themeColor:t}=e;return[n`
        font-family: ${o.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${t.ragRed};
        width: 100%;
      `]}}
`,Ft=({elementId:e,labelId:o,labelText:t,errorText:r,children:i,labelTestId:l,...c})=>s.jsxs(Tt,{...no(c),children:[t?s.jsx($,{id:o,component:"label",htmlFor:e,testID:l,children:t}):null,s.jsxs(Bt,{children:[i,r?s.jsx(zt,{children:r}):null]})]}),Dt=h.forwardRef(({hasClearButton:e=!0,startAdornment:o,endAdornment:t,isError:r,errorText:i,onChange:l,labelId:c,labelText:u,labelTestId:p,testID:f,...b},x)=>{const{disabled:C,readOnly:S,value:L="",id:j}=b,R=h.useRef(null),T=e&&!(C||S)&&!!L;h.useImperativeHandle(x,()=>R.current);const B=()=>{typeof l=="function"&&l(""),R.current&&R.current.focus()},z=M=>{typeof l=="function"&&l(M.target.value,M)};return s.jsx(Ft,{labelId:c,labelText:u,labelTestId:p,errorText:i,elementId:j,children:s.jsxs(Rt,{children:[o,s.jsx(It,{...b,$hasClearButton:T,$hasStartAdornment:!!o,$hasEndAdornment:!!t,ref:R,$error:r||!!i,onChange:z,"data-testid":f}),T&&!t?s.jsx(jt,{testID:"input-clear-button",onClick:B}):null,t]})})});Dt.displayName="Input";var St=a.a`
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
`,Pt=h.forwardRef;function Wt(e,o){const{display:t="inline",component:r="a",testID:i="link",...l}=e;return s.jsx(St,{...l,ref:o,as:r,"data-testid":i,$display:t})}var io=Pt(Wt),ao=a(io)``,_t=a($)`
  ${()=>{const{tokens:e}=d(),{link:o}=e;return n`
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
`,Ot=h.forwardRef((e,o)=>{const{children:t,...r}=e,{tokens:i}=d(),{link:l}=i;return s.jsx(ao,{...r,ref:o,children:s.jsx(_t,{component:"span",color:"inherit",variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:t})})});Ot.displayName="Link";var so=a(io)``,W=a.div`
  ${()=>{const{tokens:e}=d(),{link:o}=e;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,At=a($)`
  ${()=>{const{tokens:e}=d(),{link:o}=e;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${W}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${W}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${so}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,X=a.div`
  ${()=>{const{tokens:e}=d(),{link:o}=e,t=g(o.withIcon.size);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${t};
        height: ${t};
      }
    `}}
`,Et=h.forwardRef((e,o)=>{const{children:t,startIcon:r,endIcon:i,testID:l="link",...c}=e,{tokens:u}=d(),{link:p}=u;return s.jsx(so,{...c,ref:o,display:"inline-flex",testID:l,children:s.jsxs(W,{children:[r&&s.jsx(X,{"data-testid":`${l}-start-icon-wrapper`,children:r}),s.jsx(At,{component:"span",color:"inherit",variant:p.typography.variant,fontFamily:p.typography.fontFamily,children:t}),i&&s.jsx(X,{"data-testid":`${l}-end-icon-wrapper`,children:i})]})})});Et.displayName="LinkWithIcon";a.div`
  overflow: hidden;
`;a.div`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return n`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return n`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;a.li`
  ${()=>{const{tokens:e}=d(),{multiSelect:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
  ${({$isSelected:e,$isHighlighted:o})=>{const{tokens:t}=d(),{multiSelect:r}=t;return[n`
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
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[n`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;a.div`
  ${({$isOpen:e,$hasError:o,$isDisabled:t})=>{const{tokens:r}=d(),{select:i}=r;return[n`
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
  ${()=>{const{tokens:e}=d(),{select:o}=e;return n`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return n`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var Nt=a(ko)`
  rotate: 0deg;
`;a(Nt)`
  rotate: 180deg;
`;a.div`
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
`;var lo=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a(lo)`
  ${({$visible:e})=>{const{tokens:o}=d(),{select:t}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.menu.shadow.inner.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`;a(lo)`
  ${({$visible:e})=>{const{tokens:o}=d(),{select:t}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.menu.shadow.inner.color};
      `,e&&n`
          transform: translateY(0px);
        `]}}
`;a.ul`
  ${()=>{const{tokens:e}=d(),{select:o}=e,{menu:{scrollBar:{thumbColor:t,trackColor:r,radius:i}}}=o;return n`
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
`;var F=a.div`
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
  ${()=>{const{tokens:e}=d(),{radio:o}=e;return[n`
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
`,co=h.forwardRef((e,o)=>{const{hasError:t,testID:r="radio",...i}=e;return s.jsxs(F,{$hasError:t,children:[s.jsx(Ht,{...i,ref:o,type:"radio","data-testid":r}),s.jsx(Yt,{})]})});co.displayName="RadioBase";var Mt=co,Vt=h.forwardRef((e,o)=>{const{labelProps:t,alertProps:r,...i}=e,{testID:l="radio"}=i;return s.jsx(O,{alert:r?s.jsx(A,{...r,testID:`${l}-alert`}):void 0,children:s.jsx(Q,{...t,children:s.jsx(Mt,{...i,ref:o})})})});Vt.displayName="Radio";a.div`
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
`;a.li`
  ${()=>{const{tokens:e}=d(),{select:o}=e;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;a.div`
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
`;a(q)`
  ${({$isSelected:e})=>{const{tokens:o}=d(),{select:t}=o;return[n`
        visibility: ${e?"visible":"hidden"};
        width: ${t.menu.option.inner.icon.width};
        height: ${t.menu.option.inner.icon.height};
      `]}}
`;a.div`
  ${()=>{const{tokens:{slider:e}}=d();return n`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${e.track.padding};
    `}}
`;a.div`
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
`;a.div`
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
`;a.div`
  ${({$notchAsPercent:e})=>{const{tokens:{slider:o,color:t}}=d();return n`
      width: ${e}%;
      border-right: ${o.notchSize} ${t.groundGrey} solid;
    `}};
`;a.div`
  margin-bottom: 1rem;
`;a.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"48px"};
  background-color: #dcdcdc;
`;a.div`
  ${()=>{const{tokens:e}=d(),{formElementContainer:o}=e;return n`
      max-width: ${o.maxWidth};
    `}}
`;var Gt=a.table`
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
`;function I(e){const{layout:o,testID:t="table",...r}=e;return s.jsx(Gt,{width:"100%",...r,$layout:o,"data-testid":t})}I.Thead=e=>{const{tokens:o}=d(),{table:t}=o;return s.jsx($,{component:"thead",variant:t.head.typography.variant,fontFamily:t.head.typography.fontFamily,...e})};I.Tbody=e=>{const{tokens:o}=d(),{table:t}=o;return s.jsx($,{component:"tbody",variant:t.body.typography.variant,fontFamily:t.body.typography.fontFamily,...e})};I.Tr=e=>s.jsx("tr",{...e});I.Th=e=>{const{align:o="right",...t}=e;return s.jsx("th",{align:o,...t})};I.Td=e=>{const{align:o="right",...t}=e;return s.jsx("td",{align:o,...t})};var pe=I;a.div`
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
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
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
  ${({$withIcon:e,$isActive:o})=>{const{tokens:t}=d(),{tabs:r}=t;return[n`
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
      `,e&&n`
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
  ${({$isActive:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[n`
        color: ${t.tab.label.color.base};

        label:hover && {
          color: ${t.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.tab.label.color.disabled};
        }
      `,e&&n`
          color: ${t.tab.label.color.active};

          label:hover && {
            color: ${t.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.tab.label.color.disabled};
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      color: ${o.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.tab.secondaryLabel.color.disabled};
      }
    `}}
`;a.div`
  ${({$isActive:e})=>{const{tokens:o}=d(),{tabs:t}=o;return[n`
        display: grid;
        place-items: center;

        svg {
          width: ${t.tab.icon.width};
          height: ${t.tab.icon.height};
          color: ${t.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${t.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${t.tab.icon.color.disabled};
          }
        }
      `,e&&n`
          svg {
            color: ${t.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${t.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${t.tab.icon.color.disabled};
            }
          }
        `]}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      width: ${o.tab.separator.width};
      background-color: ${o.tab.separator.color};
      margin-top: ${o.tab.separator.marginTop};
    `}}
`;a.div`
  ${()=>{const{tokens:e}=d(),{tabs:o}=e;return n`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;a.div`
  ${({$withIcon:e,$isActive:o,$withPadding:t})=>{const{tokens:r}=d(),{tabs:i}=r;return[n`
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
`;var Xt=a(to)`
  ${()=>n`
      width: 100%;
    `}
`;a.div`
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
`;a(Io)`
  ${()=>{const{tokens:e}=d(),{textArea:o,typography:t,scrollBar:r,outerField:i}=e,l=o.typography.variant,c=g(t.fontSize[l]),u=g(t.lineHeight[l]);return n`
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
`;var N="0.4s",m=a.div`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=g(o.size[e].width),r=g(o.size[e].height);return n`
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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=g(o.size[e].width),r=o.thumb.size[e].margin;return[n`
        position: relative;
        width: ${o.thumb.size[e].width};
        height: ${o.thumb.size[e].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[e].height};
        margin: ${r};
        transition: transform ${N};
        ${m}:has(input:checked) && {
          transform: translateX(calc(${t} - ${r} - ${r} - 100%));
        }

        ${m}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a($)`
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[e].padding};
        transition: opacity ${N};

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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[e].padding};
        transition: opacity ${N};

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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=g(o.size[e].width),r=g(o.size[e].height);return n`
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
  ${({$toggleSize:e})=>{const{tokens:{toggle:o}}=d(),t=g(o.size[e].width);return n`
      width: ${t};
      background-color: transparent;
    `}}
`;var Ut=h.createContext(null),H=()=>{const e=h.useContext(Ut);if(!e)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e},qt=a.div`
  ${({$isControlled:e})=>{const{tokens:o}=d(),{tooltip:t}=o;return[n`
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
`,Jt=a.button`
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
`,Kt=h.forwardRef((e,o)=>{const{children:t,...r}=e,{tokens:i}=d(),{tooltip:l}=i,{open:c,setOpen:u,isControlled:p,arrowRef:f,floatingData:b,interactionsData:x}=H(),C=_([b.refs.setFloating,o]);return c?s.jsx(yo,{children:s.jsxs(qt,{ref:C,style:b.floatingStyles,...x.getFloatingProps(r),$isControlled:p,children:[s.jsx(wo,{ref:f,context:b.context,fill:l.backgroundColor,width:parseInt(l.arrow.width),height:parseInt(l.arrow.height)}),p&&s.jsx(Jt,{onClick:()=>u(!1),"aria-label":"Close tooltip",children:s.jsx(U,{})}),t]})}):null});Kt.displayName="TooltipContent";var y=a.button`
  ${({$isControlled:e})=>{const{tokens:o}=d(),{iconButton:t}=o;return[n`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${t.padding.default};
      `,e&&n`
          &:not(:disabled) {
            cursor: pointer;
          }
        `]}}
`,Qt=a.div`
  ${()=>{const{tokens:e}=d(),{iconButton:o}=e;return n`
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
  ${({$isControlled:e,$isOpen:o})=>{const{tokens:t}=d(),{iconButton:r,tooltipIconButton:i}=t;return[n`
        width: ${r.inner.icon.width.default};
        height: ${r.inner.icon.height.default};

        & [data-primary-color] {
          color: ${i.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.icon.secondaryColor.base};
        }
      `,!e&&n`
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
  ${({$isControlled:e,$isOpen:o})=>{const{tokens:t}=d(),{iconButton:r,tooltipIconButton:i}=t;return[n`
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
          ${y}:hover &&,
          ${y}:focus-visible && {
            display: block;
          }
        `,o&&n`
          display: block;
        `,e&&o&&n`
          ${y}:hover && {
            & [data-primary-color] {
              color: ${i.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,te=h.forwardRef((e,o)=>{const{testID:t="tooltip-icon-button",...r}=e,{open:i,isControlled:l}=H();return s.jsx(y,{...r,ref:o,$isControlled:l,"data-testid":t,children:s.jsxs(Qt,{children:[s.jsx(Zt,{$isOpen:i,$isControlled:l}),s.jsx(oe,{$isOpen:i,$isControlled:l})]})})});te.displayName="TooltipIconButton";var ee=h.forwardRef((e,o)=>{const{children:t,...r}=e,{open:i,floatingData:l,interactionsData:c}=H(),u=t.ref,p=_([l.refs.setReference,u,o]);return h.isValidElement(t)?h.cloneElement(t,c.getReferenceProps({ref:p,...r,...t.props,"data-state":i?"open":"closed"})):null});ee.displayName="TooltipTrigger";export{pe as T,$ as a};
