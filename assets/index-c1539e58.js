import{r as p}from"./index-c013ead5.js";import{T as B,B as oo}from"./index-7aa2f780.js";import{a,u as s,p as g,b as n,h as to}from"./index-22f9e29b.js";import{j as l}from"./jsx-runtime-6eef64cc.js";import{C as eo,a as ro,M as no,T as F,b as io}from"./index-b1e3628a.js";import{u as R,F as ao,a as so}from"./floating-ui.react-06582175.js";import{i as lo}from"./react-textarea-autosize.browser.esm-05f9ff93.js";var co=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,uo=a.span`
  ${({$isLoading:t})=>{const{tokens:o}=s(),{button:e}=o,r=g(e.topLayer.icon.width),i=g(e.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${t?"hidden":"visible"};

      svg {
        width: ${r};
        height: ${i};
      }
    `}}
`,ho=a.div`
  ${({$isLoading:t})=>n`
      visibility: ${t?"hidden":"visible"};
      overflow: hidden;
    `}
`,po=a.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,b=a.button`
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
`,bo=a.div`
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

        ${b}:not(:disabled):hover && {
          color: ${r.topLayer.color[t].hover};
          background: ${r.topLayer.backgroundColor[t].hover};
          transform: translateY(${r.topLayer.translateY[t].hover});
        }

        ${b}:not(:disabled):active && {
          color: ${r.topLayer.color[t].active};
          background: ${r.topLayer.backgroundColor[t].active};
          transform: translateY(${r.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&n`
          ${b}:not(:disabled):hover && {
            border-color: ${r.topLayer.stroke.color[t].hover};
          }

          ${b}:not(:disabled):active && {
            border-color: ${r.topLayer.stroke.color[t].active};
          }
        `,o&&n`
          color: ${r.topLayer.color[t].active};
          border-color: ${r.topLayer.stroke.color[t].active};
          background: ${r.topLayer.backgroundColor[t].active};
          transform: translateY(${r.topLayer.translateY[t].active});

          ${b}:not(:disabled):hover && {
            color: ${r.topLayer.color[t].active};
            border-color: ${r.topLayer.stroke.color[t].active};
            background: ${r.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${r.topLayer.translateY[t].active}
            );
          }

          ${b}:not(:disabled):active && {
            color: ${r.topLayer.color[t].active};
            border-color: ${r.topLayer.stroke.color[t].active};
            background: ${r.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${r.topLayer.translateY[t].active}
            );
          }

          ${b}:not(:disabled):focus-visible && {
            border-radius: ${r.topLayer.stroke.radius};
            outline-width: ${r.focusRing.width};
            outline-style: ${r.focusRing.style};
            outline-color: ${r.focusRing.color[t]};
            outline-offset: ${r.focusRing.offset};
          }
        `]}}
`,go=a.div`
  ${({$variant:t,$isLoading:o})=>{const{tokens:e}=s(),{button:r}=e,{shadow:i}=r.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${r.bottomLayer.height};
        border-radius: ${r.bottomLayer.radius};
        background: ${r.bottomLayer.backgroundColor[t].base};
        box-shadow: 0px ${i.blur} ${i.offsetY} ${i.color};

        ${b}:not(:disabled):hover && {
          background: ${r.bottomLayer.backgroundColor[t].hover};
        }

        ${b}:not(:disabled):active && {
          background: ${r.bottomLayer.backgroundColor[t].active};
          box-shadow: none;
        }
      `,o&&n`
          background: ${r.bottomLayer.backgroundColor[t].active};
          box-shadow: none;

          ${b}:not(:disabled):hover && {
            background: ${r.bottomLayer.backgroundColor[t].active};
          }

          ${b}:not(:disabled):active && {
            background: ${r.bottomLayer.backgroundColor[t].active};
          }
        `]}}
`,D=p.forwardRef((t,o)=>{const{variant:e,children:r,testID:i,type:d,isLoading:c,fullWidth:u,...h}=t;return l.jsxs(b,{...h,ref:o,$variant:e,$isLoading:c,$fullWidth:u,"data-testid":i,type:d||"button",children:[l.jsx(go,{$variant:e,$isLoading:c}),l.jsx(bo,{$variant:e,$isLoading:c,children:r})]})});D.displayName="ButtonBase";var $o=D,fo=a.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:r})=>{const{tokens:i}=s(),{typography:d,fontFamily:c}=i,u=g(d.fontSize[t]),h=g(d.lineHeight[t]);return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||d.color[t]};
        font-size: ${u};
        line-height: ${h};
        font-family: ${d.fontFamily[t]};
      `,o&&n`
          font-family: ${c[o]};
        `,e&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,B.STANDARD_VARIANTS.includes(t)&&n`
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
            font-family: ${B.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function ko(t,o){const{variant:e,component:r,color:i,fontFamily:d,noWrap:c,testID:u,...h}=t;return l.jsx(fo,{...h,ref:o,as:r,$variant:e,$color:i,$fontFamily:d,$noWrap:c,"data-testid":u})}var vo=p.forwardRef(ko),mo={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},yo=p.forwardRef;function wo(t,o){const{variant:e="bodyM",component:r,...i}=t;return l.jsx(vo,{...i,ref:o,variant:e,component:r||mo[e]})}var $=yo(wo),xo=to`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Co=a.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:t,$color:o})=>n`
    color: ${o};
    width: ${t};
    height: ${t};
  `}
`,Ro=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:t})=>{const{tokens:{spinner:o}}=s();return n`
      border: ${t} solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,x=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${xo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:t,$borderWidth:o})=>n`
      border-width: ${o};
      border-style: solid;
      animation-delay: ${.15*(t+1)}s;
    `}
`,O=p.memo(t=>{const{testID:o="spinner"}=t,{tokens:{spinner:e}}=s();let r,i;if("variant"in t){const u=e.variants[t.variant];u&&([r,i]=[u.color,u.size])}"size"in t&&t.size?i=t.size:i||(i=e.variants.default.size),"color"in t&&t.color?r=t.color:r||(r=e.variants.default.color);const c={$borderWidth:`${Math.round(parseInt(i)/parseInt(e.borderRatio))}px`};return l.jsxs(Co,{$color:r,$size:i,"data-testid":o,children:[l.jsx(Ro,{...c}),l.jsx(x,{$index:0,...c}),l.jsx(x,{$index:1,...c}),l.jsx(x,{$index:2,...c})]})});O.displayName="Spinner";var Lo=O,Io=p.forwardRef((t,o)=>{const{text:e,variant:r="primary",startIcon:i,isLoading:d,testID:c="button",...u}=t,{tokens:h}=s(),{button:k}=h,v={"aria-disabled":d,"aria-label":d?"Loading":void 0};return l.jsx($o,{...u,...v,ref:o,variant:r,isLoading:d,testID:c,children:l.jsxs(co,{children:[i&&l.jsx(uo,{$isLoading:d,children:i}),l.jsx(ho,{$isLoading:d,children:l.jsx($,{fontFamily:k.topLayer.text.fontFamily,variant:k.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${c}-text`,children:e})}),d&&l.jsx(po,{children:l.jsx(Lo,{variant:oo.SPINNER_VARIANTS[r],testID:`${c}-spinner`})})]})})});Io.displayName="Button";var jo=a.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function To(t){const{alert:o,gap:e,children:r}=t;return l.jsxs(jo,{$gap:e,children:[r,o&&o]})}var P=To,Bo=a.div`
  ${({$severity:t})=>{const{tokens:o}=s(),{inputAlert:e}=o;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      color: ${e.color[t]};

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
        color: ${e.icon.color[t]};
      }
    `}}
`,zo=a.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:o}=t,e=g(o.iconWrapper.height);return n`
      display: grid;
      place-content: center;
      height: ${e};
    `}}
`;function So(t){const{severity:o,children:e,testID:r="input-alert"}=t;return l.jsxs(Bo,{role:"alert","aria-live":"polite",$severity:o,"data-testid":r,children:[l.jsx(zo,{children:l.jsx(ro,{"aria-hidden":"true"})}),l.jsx($,{color:"inherit",children:e})]})}var W=So,Fo=a.label`
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
`,Do=a.span`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function Oo(t){const{label:o,children:e,...r}=t,{tokens:i}=s(),{inputLabelRight:d}=i;return l.jsxs(Fo,{...r,children:[l.jsx("span",{children:e}),o&&l.jsx(Do,{children:l.jsx($,{component:"span",color:"inherit",fontFamily:d.label.fontFamily,variant:d.label.typographyVariant,children:o})})]})}var N=Oo,L=a.div`
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
`,Po=a.input`
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
`,Wo=a(no)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${L}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,No=a(F)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${L}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function _o(t,o){p.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var _=p.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:i="checkbox",...d}=t,c=p.useRef(null);_o(c,r);const u=R([c,o]);function h(k){var v;k.target.indeterminate=!!r,(v=d.onChange)==null||v.call(d,k)}return l.jsxs(L,{$hasError:e,children:[l.jsx(Po,{...d,ref:u,type:"checkbox",onChange:h,"data-testid":i}),l.jsx(Wo,{}),l.jsx(No,{})]})});_.displayName="CheckboxBase";var Ao=_,Eo=p.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:d="checkbox"}=i;return l.jsx(P,{alert:r?l.jsx(W,{...r,testID:`${d}-alert`}):void 0,children:l.jsx(N,{...e,children:l.jsx(Ao,{...i,ref:o})})})});Eo.displayName="Checkbox";a.fieldset`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var Ho=a.ul`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(Ho)`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var z="1px";a.div`
  ${({position:t})=>{const{tokens:o}=s(),{adornment:e,input:r}=o;return[n`
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
          border-right: ${z} solid ${r.stroke.color.base};
        `}
        ${t==="end"&&n`
          border-left: ${z} solid ${r.stroke.color.base};
        `};
      `]}}
`;var A=t=>({id:t.id,className:t.className,"data-testid":t.testID}),Vo=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,Yo=a.input`
  ${({$error:t,$hasStartAdornment:o,$hasEndAdornment:e,$hasClearButton:r})=>{const{tokens:i}=s(),{input:d,adornment:c,clearButton:u}=i;return[n`
        height: ${d.height};
        width: 100%;
        padding-left: ${d.paddingLeft};
        padding-right: ${d.paddingRight};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        background-color: ${d.backgroundColor.base};
        color: ${d.color.base};

        border-style: ${d.stroke.style};
        border-width: ${d.stroke.width};
        border-color: ${d.stroke.color.base};

        padding-left: ${o?`calc(${c.width.small} + ${d.paddingLeft})`:d.paddingLeft};
        padding-right: ${e?`calc(${c.width.small} + ${d.paddingRight})`:r?u.width:d.paddingRight};
        outline: none;
        transition: border-color "0.25s"; // TODO candidate for design tokens?

        &:not(:disabled):read-only {
          border-color: ${d.stroke.color.readOnly};
        }

        &:disabled {
          background-color: ${d.backgroundColor.disabled};
          opacity: 0.7; // TODO candidate for design tokens?
          color: ${d.color.disabled};
          border-color: ${d.stroke.color.base};
          cursor: default;
        }

        &:not(:disabled):focus,
        &:not(:disabled):active {
          border-color: ${d.stroke.color.focus};
        }

        &::placeholder {
          color: ${d.color.placeholder};
        }
      `,t&&n`
          border-color: ${d.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${d.stroke.color.error};
          }
        `]}}
`,Mo=a.div`
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
`,Go=({onClick:t,...o})=>{const{tokens:e}=s(),{clearButton:r}=e;return l.jsx(Mo,{...A(o),role:"button",onClick:t,children:l.jsx(eo,{width:16,height:16,color:r.color.base})})},Xo=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Uo=a.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,Zo=a.div`
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
`,qo=({elementId:t,labelId:o,labelText:e,errorText:r,children:i,labelTestId:d,...c})=>l.jsxs(Xo,{...A(c),children:[e?l.jsx($,{id:o,component:"label",htmlFor:t,testID:d,children:e}):null,l.jsxs(Uo,{children:[i,r?l.jsx(Zo,{children:r}):null]})]}),E=p.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:r,errorText:i,onChange:d,labelId:c,labelText:u,labelTestId:h,testID:k,...v},X)=>{const{disabled:U,readOnly:Z,value:q="",id:J}=v,y=p.useRef(null),j=t&&!(U||Z)&&!!q;p.useImperativeHandle(X,()=>y.current);const K=()=>{typeof d=="function"&&d(""),y.current&&y.current.focus()},Q=T=>{typeof d=="function"&&d(T.target.value,T)};return l.jsx(qo,{labelId:c,labelText:u,labelTestId:h,errorText:i,elementId:J,children:l.jsxs(Vo,{children:[o,l.jsx(Yo,{...v,$hasClearButton:j,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:y,$error:r||!!i,onChange:Q,"data-testid":k}),j&&!e?l.jsx(Go,{testID:"input-clear-button",onClick:K}):null,e]})})});E.displayName="Input";var Jo=t=>{const o=parseFloat(t);return isNaN(o)?!1:Math.sign(o)<=0};a(({...t})=>l.jsx(E,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>Jo(t)?"#b20000":void 0};
  }
`;a.div`
  ${()=>{const{tokens:t}=s(),{datePicker:o}=t;return n`
      cursor: default;
      margin-bottom: ${o.label.gap};
    `}}
`;a.div`
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
            color: ${o.input.button.icon.color.focus};
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

          &[data-outside-month] {
            display: none;
          }

          &[data-focused] {
            color: ${o.calendar.cell.color.focus};
            background: ${o.calendar.cell.backgroundColor.focus};
          }

          &[data-hovered] {
            color: ${o.calendar.cell.color.hover};
            background: ${o.calendar.cell.backgroundColor.hover};
          }

          &[data-selected] {
            color: ${o.calendar.cell.color.focus};
            background: ${o.calendar.cell.backgroundColor.focus};
          }
        }
      }

      z-index: ${o.calendar.zIndex};
    `}}
`;var Ko=a($)`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: 2px;

      &:hover {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      &:active {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }
    `}}
`,Qo=a.a`
  ${({$display:t})=>{const{tokens:o}=s(),{link:e}=o;return n`
      all: unset;
      display: ${t};
      color: ${e.color.base};
      cursor: pointer;

      &:hover {
        color: ${e.color.hover};
      }

      &:focus-visible {
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
        border-radius: ${e.focusRing.radius};
      }
    `}}
`,ot=p.forwardRef;function tt(t,o){const{display:e="inline",component:r="a",testID:i="link",...d}=t;return l.jsx(Qo,{...d,ref:o,as:r,"data-testid":i,$display:e})}var H=ot(tt),et=p.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=s(),{link:d}=i;return l.jsx(H,{...r,ref:o,children:l.jsx(Ko,{component:"span",color:"inherit",variant:d.typographyVariant,fontFamily:d.fontFamily,children:e})})});et.displayName="Link";var C=a.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,rt=a($)`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: 2px;

      ${C}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${C}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }
    `}}
`,S=a.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t,e=g(o.withIcon.size);return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,nt=p.forwardRef((t,o)=>{const{children:e,startIcon:r,endIcon:i,testID:d="link",...c}=t,{tokens:u}=s(),{link:h}=u;return l.jsx(H,{...c,ref:o,display:"inline-flex",testID:d,children:l.jsxs(C,{children:[r&&l.jsx(S,{"data-testid":`${d}-start-icon-wrapper`,children:r}),l.jsx(rt,{component:"span",color:"inherit",variant:h.typographyVariant,fontFamily:h.fontFamily,children:e}),i&&l.jsx(S,{"data-testid":`${d}-end-icon-wrapper`,children:i})]})})});nt.displayName="LinkWithIcon";a.div`
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
`;var it=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,at=a.span`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.label.color.base};
    `}}
`,st=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function dt(t){const{htmlFor:o,label:e,labelHint:r,labelHintID:i,children:d,...c}=t,{tokens:u}=s(),{inputLabelTop:h}=u;return l.jsxs(it,{children:[l.jsxs("div",{children:[l.jsx("label",{...c,htmlFor:o,children:e&&l.jsx(at,{children:l.jsx($,{component:"span",color:"inherit",fontFamily:h.label.fontFamily,variant:h.label.typographyVariant,children:e})})}),r&&l.jsx(st,{children:l.jsx($,{id:i,component:"span",color:"inherit",fontFamily:h.labelHint.fontFamily,variant:h.labelHint.typographyVariant,children:r})})]}),l.jsx("div",{children:d})]})}var V=dt;a.div`
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

        &:hover {
          outline-width: ${i.button.stroke.width.hover};
          outline-color: ${i.button.stroke.color.hover};
          outline-offset: ${i.button.stroke.offset.hover};

          svg {
            color: ${i.button.icon.color.hover};
          }
        }
      `,o&&n`
          &,
          &:hover {
            outline-width: ${i.button.stroke.width.error};
            outline-color: ${i.button.stroke.color.error};
            outline-offset: ${i.button.stroke.offset.error};
          }
        `,t&&n`
          &,
          &:hover {
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
          &:hover {
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
`;var lt=a(io)`
  rotate: 0deg;
`;a(lt)`
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
`;var Y=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a(Y)`
  ${({$visible:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a(Y)`
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
`;var w=a.div`
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
`,ct=a.input`
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
`,ut=a.div`
  ${()=>{const{tokens:t}=s(),{radio:o}=t;return[n`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${w}:has(input:checked) && {
          display: block;
        }

        ${w}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${w}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,M=p.forwardRef((t,o)=>{const{hasError:e,testID:r="radio",...i}=t;return l.jsxs(w,{$hasError:e,children:[l.jsx(ct,{...i,ref:o,type:"radio","data-testid":r}),l.jsx(ut,{})]})});M.displayName="RadioBase";var ht=M,pt=p.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:d="radio"}=i;return l.jsx(P,{alert:r?l.jsx(W,{...r,testID:`${d}-alert`}):void 0,children:l.jsx(N,{...e,children:l.jsx(ht,{...i,ref:o})})})});pt.displayName="Radio";a.div`
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
`;a(F)`
  ${({$isSelected:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        visibility: ${t?"visible":"hidden"};
        width: ${e.menu.option.inner.icon.width};
        height: ${e.menu.option.inner.icon.height};
      `]}}
`;a.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
`;a.input`
  ${({disabled:t,$backgroundSize:o})=>{const{tokens:e}=s(),{color:r}=e;function i(d){return d?r.groundGrey:r.digitalBlue}return n`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${r.groundGrey};
      border-radius: 2px;
      background-size: ${o};
      background-image: linear-gradient(
        ${i(t)},
        ${i(t)}
      );
      background-repeat: no-repeat;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        background-color: ${i(t)};
        border-radius: 50%;
        cursor: ${t?"auto":"pointer"};
      }
    `}}
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
`;a.div`
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
`;var bt=a(V)`
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
`;a(lo)`
  ${()=>{const{tokens:t}=s(),{textArea:o,typography:e,scrollBar:r,outerField:i}=t,d=o.typographyVariant;return n`
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
      font-family: ${e.fontFamily[d]};
      font-size: ${e.fontSize[d]};
      line-height: ${e.lineHeight[d]};

      ${bt}:has(textarea:read-only) && {
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
`;a.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{outerField:e}=o;return[n`
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
`;var gt=a($)`
  ${()=>{const{tokens:t}=s(),{charactersCounter:o}=t;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function $t(t){const{length:o,maxLength:e,testID:r}=t,{tokens:i}=s(),{charactersCounter:d}=i,c=Math.max(0,e-o);return l.jsx(gt,{variant:d.typographyVariant,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}p.memo($t);var ft=a(V)`
  ${()=>n`
      width: 100%;
    `}
`;a.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`;a.input`
  ${()=>{const{tokens:t}=s(),{textInput:o,typography:e}=t,r=o.typographyVariant;return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${e.fontFamily[r]};
      font-size: ${e.fontSize[r]};
      line-height: ${e.lineHeight[r]};

      ${ft}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`;a($)`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`;a.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`;var I="0.4s",m=a.div`
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
        transition: transform ${I};
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
        transition: opacity ${I};

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
        transition: opacity ${I};

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
`;var kt=p.createContext(null),G=()=>{const t=p.useContext(kt);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},vt=a.div`
  ${()=>{const{tokens:t}=s(),{tooltip:o}=t;return n`
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
`,mt=p.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=s(),{tooltip:d}=i,{open:c,arrowRef:u,floatingData:h,interactionsData:k}=G(),v=R([h.refs.setFloating,o]);return c?l.jsx(ao,{children:l.jsxs(vt,{ref:v,style:h.floatingStyles,...k.getFloatingProps(r),children:[l.jsx(so,{ref:u,context:h.context,fill:d.backgroundColor,width:parseInt(d.arrow.width),height:parseInt(d.arrow.height)}),e]})}):null});mt.displayName="TooltipContent";var yt=p.forwardRef((t,o)=>{const{children:e,...r}=t,{open:i,floatingData:d,interactionsData:c}=G(),u=e.ref,h=R([d.refs.setReference,u,o]);return p.isValidElement(e)?p.cloneElement(e,c.getReferenceProps({ref:h,...r,...e.props,"data-state":i?"open":"closed"})):null});yt.displayName="TooltipTrigger";export{$ as T};
