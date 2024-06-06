import{r as u}from"./index-c013ead5.js";import{T as S,B as ao}from"./index-f15beae1.js";import{a,u as d,b as n,p as $,h as so}from"./index-1940508f.js";import{C as lo,E as co,M as uo,T as P,a as ho}from"./index-7aafd469.js";import{j as l}from"./jsx-runtime-6eef64cc.js";import{u as I,F as po,a as bo}from"./floating-ui.react-06582175.js";import{i as go}from"./react-textarea-autosize.browser.esm-ede8cc8b.js";a.div`
  ${({$variant:t})=>{const{tokens:o}=d(),{accordion:e}=o;return[n`
        display: grid;
        background: ${e.background[t]};
        border-width: ${e.stroke.width};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color};
        border-radius: ${e.stroke.radius};
      `]}}
`;var C=a.button`
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

        ${C}:hover & {
          background: ${e.header.inner.backgroundColor.hover};
        }

        ${C}:active & {
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

        ${C}:hover & {
          color: ${e.header.icon.color.hover};
        }

        ${C}:active & {
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
`;var $o=a.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:r})=>{const{tokens:i}=d(),{typography:s,fontFamily:c}=i,h=$(s.fontSize[t]),p=$(s.lineHeight[t]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||s.color[t]};
        font-size: ${h};
        line-height: ${p};
        font-family: ${s.fontFamily[t]};
      `,o&&n`
          font-family: ${c[o]};
        `,e&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,S.STANDARD_VARIANTS.includes(t)&&n`
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
            font-family: ${S.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function fo(t,o){const{variant:e,component:r,color:i,fontFamily:s,noWrap:c,testID:h,...p}=t;return l.jsx($o,{...p,ref:o,as:r,$variant:e,$color:i,$fontFamily:s,$noWrap:c,"data-testid":h})}var ko=u.forwardRef(fo),vo={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},mo=u.forwardRef;function yo(t,o){const{variant:e="bodyM",component:r,...i}=t;return l.jsx(ko,{...i,ref:o,variant:e,component:r||vo[e]})}var b=mo(yo),wo=a.div`
  ${()=>{const{tokens:t}=d(),{accordionGroup:o}=t;return[n`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`;a(wo)`
  ${()=>{const{tokens:t}=d(),{accordionGroup:o}=t;return[n`
        gap: ${o.gap.nested};
      `]}}
`;var xo=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,Co=a.span`
  ${({$isLoading:t})=>{const{tokens:o}=d(),{button:e}=o,r=$(e.topLayer.icon.width),i=$(e.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${t?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${i};
      }
    `}}
`,Ro=a.div`
  ${({$isLoading:t})=>n`
      visibility: ${t?"hidden":"visible"};
      overflow: hidden;
    `}
`,Lo=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,g=a.button`
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
`,Io=a.div`
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

        ${g}:not(:disabled):hover && {
          color: ${r.topLayer.color[t].hover};
          background: ${r.topLayer.backgroundColor[t].hover};
          transform: translateY(${r.topLayer.translateY[t].hover});
        }

        ${g}:not(:disabled):active && {
          color: ${r.topLayer.color[t].active};
          background: ${r.topLayer.backgroundColor[t].active};
          transform: translateY(${r.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&n`
          ${g}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[t].hover};
          }

          ${g}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[t].active};
          }
        `,o&&n`
          color: ${r.topLayer.color[t].active};
          border-color: ${r.topLayer.stroke.color[t].active};
          background: ${r.topLayer.backgroundColor[t].active};
          transform: translateY(${r.topLayer.translateY[t].active});

          ${g}:not(:disabled):hover && {
            color: ${r.topLayer.color[t].active};
            border-color: ${r.topLayer.stroke.color[t].active};
            background: ${r.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${r.topLayer.translateY[t].active}
            );
          }

          ${g}:not(:disabled):active && {
            color: ${r.topLayer.color[t].active};
            border-color: ${r.topLayer.stroke.color[t].active};
            background: ${r.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${r.topLayer.translateY[t].active}
            );
          }

          ${g}:not(:disabled):focus-visible && {
            border-radius: ${r.topLayer.stroke.radius};
            outline-width: ${r.focusRing.width};
            outline-style: ${r.focusRing.style};
            outline-color: ${r.focusRing.color[t]};
            outline-offset: ${r.focusRing.offset};
          }
        `]}}
`,jo=a.div`
  ${({$variant:t,$isLoading:o})=>{const{tokens:e}=d(),{button:r}=e,{shadow:i}=r.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[t].base};
        box-shadow: 0px ${i.blur} ${i.offsetY} ${i.color};

        ${g}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[t].hover};
        }

        ${g}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[t].active};
          box-shadow: none;
        }
      `,o&&n`
          background: ${r.bottomLayer.backgroundColor[t].active};
          box-shadow: none;

          ${g}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[t].active};
          }

          ${g}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[t].active};
          }
        `]}}
`,W=u.forwardRef((t,o)=>{const{variant:e,children:r,testID:i,type:s,isLoading:c,fullWidth:h,...p}=t;return l.jsxs(g,{...p,ref:o,$variant:e,$isLoading:c,$fullWidth:h,"data-testid":i,type:s||"button",children:[l.jsx(jo,{$variant:e,$isLoading:c}),l.jsx(Io,{$variant:e,$isLoading:c,children:r})]})});W.displayName="ButtonBase";var To=W,Bo=so`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,zo=a.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:t,$color:o})=>n`
    color: ${o};
    width: ${t};
    height: ${t};
  `}
`,So=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:t})=>{const{tokens:{spinner:o}}=d();return n`
      border: ${t} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,R=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${Bo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:t,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(t+1)}s;
    `}
`,N=u.memo(t=>{const{testID:o="spinner"}=t,{tokens:{spinner:e}}=d();let r,i;if("variant"in t){const h=e.variants[t.variant];h&&([r,i]=[h.color,h.size])}"size"in t&&t.size?i=t.size:i||(i=e.variants.default.size),"color"in t&&t.color?r=t.color:r||(r=e.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(i)/parseInt(e.borderRatio))}px`};return l.jsxs(zo,{$color:r,$size:i,"data-testid":o,children:[l.jsx(So,{...c}),l.jsx(R,{$index:0,...c}),l.jsx(R,{$index:1,...c}),l.jsx(R,{$index:2,...c})]})});N.displayName="Spinner";var Fo=N,Do=u.forwardRef((t,o)=>{const{text:e,variant:r="primary",startIcon:i,isLoading:s,testID:c="button",...h}=t,{tokens:p}=d(),{button:k}=p,v={"aria-disabled":s,"aria-label":s?"Loading":void 0};return l.jsx(To,{...h,...v,ref:o,variant:r,isLoading:s,testID:c,children:l.jsxs(xo,{children:[i&&l.jsx(Co,{$isLoading:s,children:i}),l.jsx(Ro,{$isLoading:s,children:l.jsx(b,{variant:k.topLayer.text.typography.variant,fontFamily:k.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:e})}),s&&l.jsx(Lo,{children:l.jsx(Fo,{variant:ao.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});Do.displayName="Button";var Oo=a.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function Po(t){const{alert:o,gap:e,children:r}=t;return l.jsxs(Oo,{$gap:e,children:[r,o&&o]})}var _=Po,Wo=a.div`
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
`,No=a.div`
  ${({$severity:t})=>{const{tokens:o}=d(),{inputAlert:e}=o,r=$(e.iconWrapper.height);return n`
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
`;function _o(t){const{severity:o,children:e,testID:r="input-alert"}=t;return l.jsxs(Wo,{role:"alert","aria-live":"polite",$severity:o,"data-testid":r,children:[l.jsx(No,{$severity:o,children:l.jsx(co,{"aria-hidden":"true"})}),l.jsx(b,{color:"inherit",children:e})]})}var A=_o,Ao=a.label`
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
`,Eo=a.span`
  ${()=>{const{tokens:t}=d(),{inputLabelRight:o}=t;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function Ho(t){const{label:o,children:e,...r}=t,{tokens:i}=d(),{inputLabelRight:s}=i;return l.jsxs(Ao,{...r,children:[l.jsx("span",{children:e}),o&&l.jsx(Eo,{children:l.jsx(b,{component:"span",color:"inherit",variant:s.label.typography.variant,fontFamily:s.label.typography.fontFamily,children:o})})]})}var E=Ho,j=a.div`
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
`,Yo=a.input`
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
`,Mo=a(uo)`
  ${()=>{const{tokens:t}=d(),{checkbox:o}=t;return[n`
        display: none;

        ${j}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,Vo=a(P)`
  ${()=>{const{tokens:t}=d(),{checkbox:o}=t;return[n`
        display: none;

        ${j}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function Go(t,o){u.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var H=u.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:i="checkbox",...s}=t,c=u.useRef(null);Go(c,r);const h=I([c,o]);function p(k){var v;k.target.indeterminate=!!r,(v=s.onChange)==null||v.call(s,k)}return l.jsxs(j,{$hasError:e,children:[l.jsx(Yo,{...s,ref:h,type:"checkbox",onChange:p,"data-testid":i}),l.jsx(Mo,{}),l.jsx(Vo,{})]})});H.displayName="CheckboxBase";var Xo=H,Uo=u.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:s="checkbox"}=i;return l.jsx(_,{alert:r?l.jsx(A,{...r,testID:`${s}-alert`}):void 0,children:l.jsx(E,{...e,children:l.jsx(Xo,{...i,ref:o})})})});Uo.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var Zo=a.ul`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(Zo)`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=d(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var F="1px";a.div`
  ${({position:t})=>{const{tokens:o}=d(),{adornment:e,input:r}=o;return[n`
        width: ${e.width.small};
        color: ${e.color.base};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        position: absolute;
        right: ${t==="end"?"0":"auto"};
        height: calc(100% - 1rem);
        display: flex;
        align-items: center;
        justify-content: center;

        ${t==="start"&&n`
          border-right: ${F} solid ${r.stroke.color.base};
        `}
        ${t==="end"&&n`
          border-left: ${F} solid ${r.stroke.color.base};
        `};
      `]}}
`;var Y=t=>({id:t.id,className:t.className,"data-testid":t.testID}),qo=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,Jo=a.input`
  ${({$error:t,$hasStartAdornment:o,$hasEndAdornment:e,$hasClearButton:r})=>{const{tokens:i}=d(),{input:s,adornment:c,clearButton:h}=i;return[n`
        height: ${s.height};
        width: 100%;
        padding-left: ${s.paddingLeft};
        padding-right: ${s.paddingRight};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        background-color: ${s.backgroundColor.base};
        color: ${s.color.base};

        border-style: ${s.stroke.style};
        border-width: ${s.stroke.width};
        border-color: ${s.stroke.color.base};

        padding-left: ${o?`calc(${c.width.small} + ${s.paddingLeft})`:s.paddingLeft};
        padding-right: ${e?`calc(${c.width.small} + ${s.paddingRight})`:r?h.width:s.paddingRight};
        outline: none;
        transition: border-color "0.25s"; // TODO candidate for design tokens?

        &:not(:disabled):read-only {
          border-color: ${s.stroke.color.readOnly};
        }

        &:disabled {
          background-color: ${s.backgroundColor.disabled};
          opacity: 0.7; // TODO candidate for design tokens?
          color: ${s.color.disabled};
          border-color: ${s.stroke.color.base};
          cursor: default;
        }

        &:not(:disabled):focus,
        &:not(:disabled):active {
          border-color: ${s.stroke.color.focus};
        }

        &::placeholder {
          color: ${s.color.placeholder};
        }
      `,t&&n`
          border-color: ${s.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${s.stroke.color.error};
          }
        `]}}
`,Ko=a.div`
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
`,Qo=({onClick:t,...o})=>{const{tokens:e}=d(),{clearButton:r}=e;return l.jsx(Ko,{...Y(o),role:"button",onClick:t,children:l.jsx(lo,{width:16,height:16,color:r.color.base})})},ot=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,tt=a.div`
  ${()=>{const{tokens:t}=d(),{formElementContainer:o}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,et=a.div`
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
`,rt=({elementId:t,labelId:o,labelText:e,errorText:r,children:i,labelTestId:s,...c})=>l.jsxs(ot,{...Y(c),children:[e?l.jsx(b,{id:o,component:"label",htmlFor:t,testID:s,children:e}):null,l.jsxs(tt,{children:[i,r?l.jsx(et,{children:r}):null]})]}),M=u.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:r,errorText:i,onChange:s,labelId:c,labelText:h,labelTestId:p,testID:k,...v},Q)=>{const{disabled:oo,readOnly:to,value:eo="",id:ro}=v,w=u.useRef(null),B=t&&!(oo||to)&&!!eo;u.useImperativeHandle(Q,()=>w.current);const no=()=>{typeof s=="function"&&s(""),w.current&&w.current.focus()},io=z=>{typeof s=="function"&&s(z.target.value,z)};return l.jsx(rt,{labelId:c,labelText:h,labelTestId:p,errorText:i,elementId:ro,children:l.jsxs(qo,{children:[o,l.jsx(Jo,{...v,$hasClearButton:B,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:w,$error:r||!!i,onChange:io,"data-testid":k}),B&&!e?l.jsx(Qo,{testID:"input-clear-button",onClick:no}):null,e]})})});M.displayName="Input";var nt=t=>{const o=parseFloat(t);return isNaN(o)?!1:Math.sign(o)<=0};a(({...t})=>l.jsx(M,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>nt(t)?"#b20000":void 0};
  }
`;a.div`
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
          min-width: 24px;
          margin: 3px;
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
`;var it=a.div`
  ${()=>{const{tokens:t}=d(),{inputLabelTop:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,at=a.span`
  ${()=>{const{tokens:t}=d(),{inputLabelTop:o}=t;return n`
      color: ${o.label.color.base};
    `}}
`,dt=a.div`
  ${()=>{const{tokens:t}=d(),{inputLabelTop:o}=t;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function V(t){const{label:o,labelHint:e,labelHintID:r,children:i}=t,{tokens:s}=d(),{inputLabelTop:c}=s;return l.jsxs(it,{children:[l.jsxs("div",{children:[o,e&&l.jsx(dt,{children:l.jsx(b,{id:r,component:"span",color:"inherit",variant:c.labelHint.typography.variant,fontFamily:c.labelHint.typography.fontFamily,children:e})})]}),l.jsx("div",{children:i})]})}V.Label=t=>{const{text:o,component:e="span"}=t,{tokens:r}=d(),{inputLabelTop:i}=r;return l.jsx(at,{children:l.jsx(b,{component:e,color:"inherit",variant:i.label.typography.variant,fontFamily:i.label.typography.fontFamily,children:o})})};var D=V,st=a.a`
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
`,lt=u.forwardRef;function ct(t,o){const{display:e="inline",component:r="a",testID:i="link",...s}=t;return l.jsx(st,{...s,ref:o,as:r,"data-testid":i,$display:e})}var G=lt(ct),X=a(G)``,ut=a(b)`
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

      ${X}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,ht=u.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=d(),{link:s}=i;return l.jsx(X,{...r,ref:o,children:l.jsx(ut,{component:"span",color:"inherit",variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:e})})});ht.displayName="Link";var U=a(G)``,L=a.div`
  ${()=>{const{tokens:t}=d(),{link:o}=t;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,pt=a(b)`
  ${()=>{const{tokens:t}=d(),{link:o}=t;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${L}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${L}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${U}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,O=a.div`
  ${()=>{const{tokens:t}=d(),{link:o}=t,e=$(o.withIcon.size);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,bt=u.forwardRef((t,o)=>{const{children:e,startIcon:r,endIcon:i,testID:s="link",...c}=t,{tokens:h}=d(),{link:p}=h;return l.jsx(U,{...c,ref:o,display:"inline-flex",testID:s,children:l.jsxs(L,{children:[r&&l.jsx(O,{"data-testid":`${s}-start-icon-wrapper`,children:r}),l.jsx(pt,{component:"span",color:"inherit",variant:p.typography.variant,fontFamily:p.typography.fontFamily,children:e}),i&&l.jsx(O,{"data-testid":`${s}-end-icon-wrapper`,children:i})]})})});bt.displayName="LinkWithIcon";a.div`
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
`;function gt(t){const{label:o,labelHint:e,labelHintID:r,children:i,...s}=t;return l.jsx(D,{label:l.jsx("label",{...s,children:o&&l.jsx(D.Label,{text:o})}),labelHint:e,labelHintID:r,children:i})}var Z=gt;a.div`
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
`;var $t=a(ho)`
  rotate: 0deg;
`;a($t)`
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
`;var q=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a(q)`
  ${({$visible:t})=>{const{tokens:o}=d(),{select:e}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a(q)`
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
`;var x=a.div`
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
`,ft=a.input`
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
`,kt=a.div`
  ${()=>{const{tokens:t}=d(),{radio:o}=t;return[n`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${x}:has(input:checked) && {
          display: block;
        }

        ${x}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${x}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,J=u.forwardRef((t,o)=>{const{hasError:e,testID:r="radio",...i}=t;return l.jsxs(x,{$hasError:e,children:[l.jsx(ft,{...i,ref:o,type:"radio","data-testid":r}),l.jsx(kt,{})]})});J.displayName="RadioBase";var vt=J,mt=u.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:s="radio"}=i;return l.jsx(_,{alert:r?l.jsx(A,{...r,testID:`${s}-alert`}):void 0,children:l.jsx(E,{...e,children:l.jsx(vt,{...i,ref:o})})})});mt.displayName="Radio";a.div`
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
`;a(P)`
  ${({$isSelected:t})=>{const{tokens:o}=d(),{select:e}=o;return[n`
        visibility: ${t?"visible":"hidden"};
        width: ${e.menu.option.inner.icon.width};
        height: ${e.menu.option.inner.icon.height};
      `]}}
`;a.div`
  width: 100%;
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
      padding: 0 ${t.track.padding} 0;
    `}}
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
`;var yt=a.table`
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

            & :first-child {
              padding-left: ${e.head.cell.padding.left.first};
            }

            & :last-child {
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

            & :first-child {
              padding-left: ${e.body.cell.padding.left.first};
            }

            & :last-child {
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
`;function y(t){const{layout:o,testID:e="table",...r}=t;return l.jsx(yt,{width:"100%",...r,$layout:o,"data-testid":e})}y.Thead=t=>{const{tokens:o}=d(),{table:e}=o;return l.jsx(b,{component:"thead",variant:e.head.typography.variant,fontFamily:e.head.typography.fontFamily,...t})};y.Tbody=t=>{const{tokens:o}=d(),{table:e}=o;return l.jsx(b,{component:"tbody",variant:e.body.typography.variant,fontFamily:e.body.typography.fontFamily,...t})};y.Tr=t=>l.jsx("tr",{...t});y.Th=t=>{const{align:o="right",...e}=t;return l.jsx("th",{align:o,...e})};y.Td=t=>{const{align:o="right",...e}=t;return l.jsx("td",{align:o,...e})};var Nt=y;a.div`
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
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
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
  ${({$withIcon:t,$isActive:o})=>{const{tokens:e}=d(),{tabs:r}=e;return[n`
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
  ${({$isActive:t})=>{const{tokens:o}=d(),{tabs:e}=o;return[n`
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
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
      color: ${o.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.tab.secondaryLabel.color.disabled};
      }
    `}}
`;a.div`
  ${({$isActive:t})=>{const{tokens:o}=d(),{tabs:e}=o;return[n`
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
  ${()=>{const{tokens:t}=d(),{tabs:o}=t;return n`
      width: ${o.tab.separator.width};
      background-color: ${o.tab.separator.color};
      margin-top: ${o.tab.separator.marginTop};
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
`;var wt=a(Z)`
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
`;a(go)`
  ${()=>{const{tokens:t}=d(),{textArea:o,typography:e,scrollBar:r,outerField:i}=t,s=o.typography.variant;return n`
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
      font-family: ${e.fontFamily[s]};
      font-size: ${e.fontSize[s]};
      line-height: ${e.lineHeight[s]};

      ${wt}:has(textarea:read-only) && {
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
`;var f=a.div`
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
`;a.div`
  ${({$hasError:t})=>{const{tokens:o}=d(),{outerField:e}=o;return[n`
        position: relative;
        width: 100%;
        background: ${e.backgroundColor};

        outline-color: ${e.stroke.color.base};
        outline-width: ${e.stroke.width.base};
        outline-style: ${e.stroke.style};
        border-radius: ${e.radius};

        ${f}:has(input:not(:disabled)):hover &&,
        ${f}:has(textarea:not(:disabled)):hover && {
          outline-color: ${e.stroke.color.hover};
          outline-width: ${e.stroke.width.hover};
          outline-offset: ${e.stroke.offset.hover};
        }

        ${f}:has(input:read-only) &&,
        ${f}:has(textarea:read-only) && {
          outline-color: ${e.stroke.color.readOnly};
        }

        ${f}:has(input:focus) &&,
        ${f}:has(textarea:focus) && {
          outline-color: ${e.stroke.color.focus};
          outline-width: ${e.stroke.width.focus};
          outline-offset: ${e.stroke.offset.focus};
        }
      `,t&&n`
          &&,
          ${f}:has(input:read-only) &&,
          ${f}:has(input:disabled) &&,
          ${f}:has(textarea:read-only) &&,
          ${f}:has(textarea:disabled) && {
            outline-width: ${e.stroke.width.error};
            outline-color: ${e.stroke.color.error};
            outline-offset: ${e.stroke.offset.error};
          }
        `]}}
`;var xt=a(b)`
  ${()=>{const{tokens:t}=d(),{charactersCounter:o}=t;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function Ct(t){const{length:o,maxLength:e,testID:r}=t,{tokens:i}=d(),{charactersCounter:s}=i,c=Math.max(0,e-o);return l.jsx(xt,{variant:s.typography.variant,fontFamily:s.typography.fontFamily,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}u.memo(Ct);var Rt=a(Z)`
  ${()=>n`
      width: 100%;
    `}
`;a.div`
  ${()=>{const{tokens:t}=d(),{textInput:o}=t;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`;a.input`
  ${()=>{const{tokens:t}=d(),{textInput:o,typography:e}=t,r=o.typography.variant;return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${e.fontFamily[r]};
      font-size: ${e.fontSize[r]};
      line-height: ${e.lineHeight[r]};

      ${Rt}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`;a(b)`
  ${()=>{const{tokens:t}=d(),{textInput:o}=t;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=d(),{textInput:o}=t;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`;var T="0.4s",m=a.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=$(o.size[t].width),r=$(o.size[t].height);return n`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=$(o.size[t].width),r=o.thumb.size[t].margin;return[n`
        position: relative;
        width: ${o.thumb.size[t].width};
        height: ${o.thumb.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[t].height};
        margin: ${r};
        transition: transform ${T};
        ${m}:has(input:checked) && {
          transform: translateX(calc(${e} - ${r} - ${r} - 100%));
        }

        ${m}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a(b)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[t].padding};
        transition: opacity ${T};

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
`;a(b)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[t].padding};
        transition: opacity ${T};

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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=$(o.size[t].width),r=$(o.size[t].height);return n`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=d(),e=$(o.size[t].width);return n`
      width: ${e};
      background-color: transparent;
    `}}
`;var Lt=u.createContext(null),K=()=>{const t=u.useContext(Lt);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},It=a.div`
  ${()=>{const{tokens:t}=d(),{tooltip:o}=t;return n`
      max-width: ${o.maxWidth};
      border-radius: ${o.radius};
      padding-top: ${o.padding.top};
      padding-bottom: ${o.padding.bottom};
      padding-left: ${o.padding.left};
      padding-right: ${o.padding.right};
      background: ${o.backgroundColor};
      color: ${o.color};
      z-index: ${o.zIndex};
    `}}
`,jt=u.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=d(),{tooltip:s}=i,{open:c,arrowRef:h,floatingData:p,interactionsData:k}=K(),v=I([p.refs.setFloating,o]);return c?l.jsx(po,{children:l.jsxs(It,{ref:v,style:p.floatingStyles,...k.getFloatingProps(r),children:[l.jsx(bo,{ref:h,context:p.context,fill:s.backgroundColor,width:parseInt(s.arrow.width),height:parseInt(s.arrow.height)}),e]})}):null});jt.displayName="TooltipContent";var Tt=u.forwardRef((t,o)=>{const{children:e,...r}=t,{open:i,floatingData:s,interactionsData:c}=K(),h=e.ref,p=I([s.refs.setReference,h,o]);return u.isValidElement(e)?u.cloneElement(e,c.getReferenceProps({ref:p,...r,...e.props,"data-state":i?"open":"closed"})):null});Tt.displayName="TooltipTrigger";export{Nt as T,b as a};
