import{r as h}from"./index-c013ead5.js";import{a,u as s,b as n,j as l,h as Z}from"./index-e76b8df1.js";import{T as O}from"./index-f9a152de.js";import{C as q,a as J,M as Q,T as W,b as K,c as oo}from"./index-19b017fb.js";import{u as I,F as to,a as eo}from"./floating-ui.react-b73a43d5.js";/* empty css                         */import{i as ro}from"./react-textarea-autosize.browser.esm-05f9ff93.js";var no=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,io=a.span`
  ${()=>{const{tokens:t}=s(),{button:o}=t;return n`
      display: flex;
      flex-shrink: 0;

      svg {
        width: ${o.topLayer.icon.width};
        height: ${o.topLayer.icon.height};
      }
    `}}
`,v=a.button`
  ${({$variant:t,$fullWidth:o})=>{const{tokens:e}=s(),{button:r}=e;return n`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${r.height};
      width: ${o?"100%":"auto"};
      min-width: ${r.minWidth};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: ${r.opacity.disabled};
      }

      &:not(:disabled):focus-visible {
        border-radius: ${r.topLayer.stroke.radius};
        outline-width: ${r.focusRing.width};
        outline-style: ${r.focusRing.style};
        outline-color: ${r.focusRing.color[t]};
        outline-offset: ${r.focusRing.offset};
      }
    `}}
`,ao=a.div`
  ${({$variant:t})=>{const{tokens:o}=s(),{button:e}=o;return[n`
        position: relative;
        overflow: hidden;
        color: ${e.topLayer.color[t].base};
        background: ${e.topLayer.backgroundColor[t].base};
        padding-top: ${e.topLayer.padding[t].top};
        padding-bottom: ${e.topLayer.padding[t].bottom};
        padding-left: ${e.topLayer.padding[t].left};
        padding-right: ${e.topLayer.padding[t].right};
        border-width: ${e.topLayer.stroke.width};
        border-style: ${e.topLayer.stroke.style};
        border-color: ${e.topLayer.stroke.color[t].base};
        border-radius: ${e.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${e.topLayer.animationDuration}ms;

        ${v}:not(:disabled):hover && {
          color: ${e.topLayer.color[t].hover};
          background: ${e.topLayer.backgroundColor[t].hover};
          transform: translateY(${e.topLayer.translateY[t].hover});
        }

        ${v}:not(:disabled):active && {
          color: ${e.topLayer.color[t].active};
          background: ${e.topLayer.backgroundColor[t].active};
          transform: translateY(${e.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&n`
          ${v}:not(:disabled):hover && {
            border-color: ${e.topLayer.stroke.color[t].hover};
          }

          ${v}:not(:disabled):active && {
            border-color: ${e.topLayer.stroke.color[t].active};
          }
        `]}}
`,so=a.div`
  ${({$variant:t})=>{const{tokens:o}=s(),{button:e}=o,{shadow:r}=e.bottomLayer;return n`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${e.bottomLayer.height};
      border-radius: ${e.bottomLayer.radius};
      background: ${e.bottomLayer.backgroundColor[t].base};
      box-shadow: 0px ${r.blur} ${r.offsetY} ${r.color};

      ${v}:not(:disabled):hover && {
        background: ${e.bottomLayer.backgroundColor[t].hover};
      }

      ${v}:not(:disabled):active && {
        background: ${e.bottomLayer.backgroundColor[t].active};
        box-shadow: none;
      }
    `}}
`,lo=h.forwardRef((t,o)=>{const{variant:e,children:r,testID:i,type:d,fullWidth:c,...u}=t;return l.jsxs(v,{...u,ref:o,$variant:e,$fullWidth:c,"data-testid":i,type:d||"button",children:[l.jsx(so,{$variant:e}),l.jsx(ao,{$variant:e,children:r})]})}),co=lo,uo=a.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:r})=>{const{tokens:i}=s(),{typography:d,fontFamily:c}=i;return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||d.color[t]};
        font-size: ${d.fontSize[t]};
        line-height: ${d.lineHeight[t]};
        font-family: ${d.fontFamily[t]};
      `,o&&n`
          font-family: ${c[o]};
        `,e&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,O.STANDARD_VARIANTS.includes(t)&&n`
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
            font-family: ${O.BOLD_FONT_FAMILIES.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function ho(t,o){const{variant:e,component:r,color:i,fontFamily:d,noWrap:c,testID:u,...p}=t;return l.jsx(uo,{...p,ref:o,as:r,$variant:e,$color:i,$fontFamily:d,$noWrap:c,"data-testid":u})}var po=h.forwardRef(ho),bo={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},$o=h.forwardRef;function go(t,o){const{variant:e="bodyM",component:r,...i}=t;return l.jsx(po,{...i,ref:o,variant:e,component:r||bo[e]})}var b=$o(go);h.forwardRef((t,o)=>{const{text:e,variant:r="primary",startIcon:i,testID:d="button",...c}=t,{tokens:u}=s(),{button:p}=u;return l.jsx(co,{...c,ref:o,variant:r,testID:d,children:l.jsxs(no,{children:[i&&l.jsx(io,{children:i}),l.jsx(b,{fontFamily:p.topLayer.text.fontFamily,variant:p.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${d}-text`,children:e})]})})});var fo=a.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function ko(t){const{alert:o,gap:e,children:r}=t;return l.jsxs(fo,{$gap:e,children:[r,o&&o]})}var A=ko,vo=a.div`
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
`,mo=a.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:o}=t;return n`
      display: grid;
      place-content: center;
      height: ${o.iconWrapper.height};
    `}}
`;function wo(t){const{severity:o,children:e,testID:r="input-alert"}=t;return l.jsxs(vo,{role:"alert","aria-live":"polite",$severity:o,"data-testid":r,children:[l.jsx(mo,{children:l.jsx(J,{"aria-hidden":"true"})}),l.jsx(b,{color:"inherit",children:e})]})}var _=wo,yo=a.label`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return n`
      display: grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      user-select: none;
      cursor: pointer;

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
`,xo=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function Co(t){const{label:o,children:e,...r}=t,{tokens:i}=s(),{inputLabelRight:d}=i;return l.jsxs(yo,{...r,children:[l.jsx("div",{children:e}),o&&l.jsx(xo,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:d.label.fontFamily,variant:d.label.typographyVariant,children:o})})]})}var P=Co,j=a.div`
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
`,Ro=a.input`
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
`,Io=a(Q)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${j}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,jo=a(W)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${j}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function Lo(t,o){h.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var To=h.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:i="checkbox",...d}=t,c=h.useRef(null);Lo(c,r);const u=I([c,o]);function p(f){var g;f.target.indeterminate=!!r,(g=d.onChange)==null||g.call(d,f)}return l.jsxs(j,{$hasError:e,children:[l.jsx(Ro,{...d,ref:u,type:"checkbox",onChange:p,"data-testid":i}),l.jsx(Io,{}),l.jsx(jo,{})]})}),Bo=To;h.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:d="checkbox"}=i;return l.jsx(A,{alert:r?l.jsx(_,{...r,testID:`${d}-alert`}):void 0,children:l.jsx(P,{...e,children:l.jsx(Bo,{...i,ref:o})})})});a.fieldset`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var zo=a.ul`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;a(zo)`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;a.li`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var S="1px",Fo=a.div`
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
          border-right: ${S} solid ${r.stroke.color.base};
        `}
        ${t==="end"&&n`
          border-left: ${S} solid ${r.stroke.color.base};
        `};
      `]}}
`,L=t=>({id:t.id,className:t.className,"data-testid":t.testID}),Oo=({children:t,position:o="start",...e})=>l.jsx(Fo,{...L(e),position:o,children:t}),So=a.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,Do=a.input`
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
`,Wo=a.div`
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
`,Ao=({onClick:t,...o})=>{const{tokens:e}=s(),{clearButton:r}=e;return l.jsx(Wo,{...L(o),role:"button",onClick:t,children:l.jsx(q,{width:16,height:16,color:r.color.base})})},_o=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Po=a.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,Eo=a.div`
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
`,Mo=({elementId:t,labelId:o,labelText:e,errorText:r,children:i,labelTestId:d,...c})=>l.jsxs(_o,{...L(c),children:[e?l.jsx(b,{id:o,component:"label",htmlFor:t,testID:d,children:e}):null,l.jsxs(Po,{children:[i,r?l.jsx(Eo,{children:r}):null]})]}),T=h.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:r,errorText:i,onChange:d,labelId:c,labelText:u,labelTestId:p,testID:f,...g},x)=>{const{disabled:m,readOnly:H,value:Y="",id:X}=g,w=h.useRef(null),z=t&&!(m||H)&&!!Y;h.useImperativeHandle(x,()=>w.current);const G=()=>{typeof d=="function"&&d(""),w.current&&w.current.focus()},U=F=>{typeof d=="function"&&d(F.target.value,F)};return l.jsx(Mo,{labelId:c,labelText:u,labelTestId:p,errorText:i,elementId:X,children:l.jsxs(So,{children:[o,l.jsx(Do,{...g,$hasClearButton:z,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:w,$error:r||!!i,onChange:U,"data-testid":f}),z&&!e?l.jsx(Ao,{testID:"input-clear-button",onClick:G}):null,e]})})});T.displayName="Input";var No=t=>{const o=parseFloat(t);return isNaN(o)?!1:Math.sign(o)<=0};a(({...t})=>l.jsx(T,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>No(t)?"#b20000":void 0};
  }
`;var Vo=a(T)`
  input {
    border-color: ${t=>t.$isFocused&&"#0000ff"};
  }
`,Ho=a(K)`
  ${({$hasCursorPointer:t})=>{const{tokens:o}=s(),{adornment:e}=o;return n`
      cursor: ${t?"pointer":"default"};
      width: ${e.width.small};
      height: 16px;
    `}}
`,Yo=h.forwardRef(({value:t,onClick:o,isFocused:e,onChange:r,onFocus:i,onBlur:d,hasDatePicker:c=!1,onDatePickerKeyDown:u,...p},f)=>{const g=m=>{c&&(u==null||u(m))},x=m=>{r&&r(m)};return l.jsx(Vo,{...p,ref:f,onChange:c?void 0:x,placeholder:"DD / MM / YYYY",onFocus:i||o,onBlur:d,onKeyDown:g,value:t,hasClearButton:!1,$isFocused:e,endAdornment:l.jsx(Oo,{position:"end",children:l.jsx(Ho,{$hasCursorPointer:c,color:e?"#0000ff":"#161616",onClick:o})})})});Yo.displayName="DateInputBase";a.div`
  position: absolute;
  // TODO is z-index a candidate for design tokens?
  z-index: 2;
`;var Xo=a(b)`
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
`,Go=a.a`
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
`,Uo=h.forwardRef;function Zo(t,o){const{display:e="inline",component:r="a",testID:i="link",...d}=t;return l.jsx(Go,{...d,ref:o,as:r,"data-testid":i,$display:e})}var E=Uo(Zo),qo=h.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=s(),{link:d}=i;return l.jsx(E,{...r,ref:o,children:l.jsx(Xo,{component:"span",color:"inherit",variant:d.typographyVariant,fontFamily:d.fontFamily,children:e})})});qo.displayName="Link";var R=a.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return[n`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,Jo=a(b)`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: 2px;

      ${R}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${R}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }
    `}}
`,D=a.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${o.withIcon.size};
        height: ${o.withIcon.size};
      }
    `}}
`,Qo=h.forwardRef((t,o)=>{const{children:e,startIcon:r,endIcon:i,testID:d="link",...c}=t,{tokens:u}=s(),{link:p}=u;return l.jsx(E,{...c,ref:o,display:"inline-flex",testID:d,children:l.jsxs(R,{children:[r&&l.jsx(D,{"data-testid":`${d}-start-icon-wrapper`,children:r}),l.jsx(Jo,{component:"span",color:"inherit",variant:p.typographyVariant,fontFamily:p.fontFamily,children:e}),i&&l.jsx(D,{"data-testid":`${d}-end-icon-wrapper`,children:i})]})})});Qo.displayName="LinkWithIcon";a.div`
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
`;var Ko=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,ot=a.span`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.label.color.base};
    `}}
`,tt=a.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function et(t){const{htmlFor:o,label:e,labelHint:r,children:i,...d}=t,{tokens:c}=s(),{inputLabelTop:u}=c;return l.jsxs(Ko,{children:[l.jsxs("div",{children:[l.jsx("label",{...d,htmlFor:o,children:e&&l.jsx(ot,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:u.label.fontFamily,variant:u.label.typographyVariant,children:e})})}),r&&l.jsx(tt,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:u.labelHint.fontFamily,variant:u.labelHint.typographyVariant,children:r})})]}),l.jsx("div",{children:i})]})}var M=et;a.div`
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
`;var rt=a(oo)`
  rotate: 0deg;
`;a(rt)`
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
`;var N=a.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;a(N)`
  ${({$visible:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;a(N)`
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
`;var y=a.div`
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
`,nt=a.input`
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
`,it=a.div`
  ${()=>{const{tokens:t}=s(),{radio:o}=t;return[n`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${y}:has(input:checked) && {
          display: block;
        }

        ${y}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${o.icon.color.hover};
        }

        ${y}:has(input:disabled:checked) {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,at=h.forwardRef((t,o)=>{const{hasError:e,testID:r="radio",...i}=t;return l.jsxs(y,{$hasError:e,children:[l.jsx(nt,{...i,ref:o,type:"radio","data-testid":r}),l.jsx(it,{})]})}),st=at;h.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...i}=t,{testID:d="radio"}=i;return l.jsx(A,{alert:r?l.jsx(_,{...r,testID:`${d}-alert`}):void 0,children:l.jsx(P,{...e,children:l.jsx(st,{...i,ref:o})})})});a.div`
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
`;a(W)`
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
`;var dt=Z`
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
  ${({$size:t,$color:o})=>n`
    color: ${o};
    width: ${t}px;
    height: ${t}px;
  `}
`,ct=a.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:t})=>{const{tokens:{spinner:o}}=s();return n`
      border: ${t}px solid currentColor;
      opacity: ${o.backgroundOpacity};
    `}}
`,C=a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${dt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:t,$borderWidth:o})=>n`
      border-width: ${o}px;
      border-style: solid;
      animation-delay: ${.15*(t+1)}s;
    `}
`,ut=h.memo(t=>{const{testID:o="spinner"}=t,{tokens:{spinner:e}}=s();let r,i;if("variant"in t){const u=e.variants[t.variant];u&&([r,i]=[u.color,u.size])}"size"in t&&t.size?i=t.size:i||(i=e.variants.default.size),"color"in t&&t.color?r=t.color:r||(r=e.variants.default.color);const c={$borderWidth:Math.round(i/Number(e.borderRatio))};return l.jsxs(lt,{$color:r,$size:i,"data-testid":o,children:[l.jsx(ct,{...c}),l.jsx(C,{$index:0,...c}),l.jsx(C,{$index:1,...c}),l.jsx(C,{$index:2,...c})]})});ut.displayName="Spinner";a.div`
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
`;var ht=a(M)`
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
`;a(ro)`
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

      ${ht}:has(textarea:read-only) && {
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
`;var $=a.div`
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

        ${$}:has(input:not(:disabled)):hover &&,
        ${$}:has(textarea:not(:disabled)):hover && {
          outline-color: ${e.stroke.color.hover};
          outline-width: ${e.stroke.width.hover};
          outline-offset: ${e.stroke.offset.hover};
        }

        ${$}:has(input:read-only) &&,
        ${$}:has(textarea:read-only) && {
          outline-color: ${e.stroke.color.readOnly};
        }

        ${$}:has(input:focus) &&,
        ${$}:has(textarea:focus) && {
          outline-color: ${e.stroke.color.focus};
          outline-width: ${e.stroke.width.focus};
          outline-offset: ${e.stroke.offset.focus};
        }
      `,t&&n`
          &&,
          ${$}:has(input:read-only) &&,
          ${$}:has(input:disabled) &&,
          ${$}:has(textarea:read-only) &&,
          ${$}:has(textarea:disabled) && {
            outline-width: ${e.stroke.width.error};
            outline-color: ${e.stroke.color.error};
            outline-offset: ${e.stroke.offset.error};
          }
        `]}}
`;var pt=a(b)`
  ${()=>{const{tokens:t}=s(),{charactersCounter:o}=t;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function bt(t){const{length:o,maxLength:e,testID:r}=t,{tokens:i}=s(),{charactersCounter:d}=i,c=Math.max(0,e-o);return l.jsx(pt,{variant:d.typographyVariant,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}h.memo(bt);var $t=a(M)`
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

      ${$t}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`;a(b)`
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
`;var B="0.4s",k=a.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return n`
      position: relative;
      width: ${o.size[t].width};
      height: ${o.size[t].height};
      display: flex;
      align-items: center;
      border-radius: ${o.size[t].height};

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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: relative;
        width: ${o.thumb.size[t].width};
        height: ${o.thumb.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${o.thumb.backgroundColor.base};
        border-radius: ${o.thumb.size[t].height};
        margin: ${o.thumb.size[t].margin};
        transition: transform ${B};

        ${k}:has(input:checked) && {
          transform: translateX(
            ${o.thumb.size[t].uncheckedOffset}
          );
        }

        ${k}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;a(b)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[t].padding};
        transition: opacity ${B};

        ${k}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${k}:has(input:checked) && {
          opacity: 1;
        }

        ${k}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;a(b)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[t].padding};
        transition: opacity ${B};

        ${k}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${k}:has(input:checked) && {
          opacity: 0;
        }

        ${k}:has(input:not(:checked)) && {
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return n`
      cursor: pointer;
      width: ${o.size[t].width};

      outline-style: solid;
      border-radius: ${o.size[t].height};
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return n`
      width: ${o.size[t].width};
      background-color: transparent;
    `}}
`;var gt=h.createContext(null),V=()=>{const t=h.useContext(gt);if(!t)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},ft=a.div`
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
`;h.forwardRef((t,o)=>{const{children:e,...r}=t,{tokens:i}=s(),{tooltip:d}=i,{open:c,arrowRef:u,floatingData:p,interactionsData:f}=V(),g=I([p.refs.setFloating,o]);return c?l.jsx(to,{children:l.jsxs(ft,{ref:g,style:p.floatingStyles,...f.getFloatingProps(r),children:[l.jsx(eo,{ref:u,context:p.context,fill:d.backgroundColor,width:parseInt(d.arrow.width),height:parseInt(d.arrow.height)}),e]})}):null});h.forwardRef((t,o)=>{const{children:e,...r}=t,{open:i,floatingData:d,interactionsData:c}=V(),u=e.ref,p=I([d.refs.setReference,u,o]);return h.isValidElement(e)?h.cloneElement(e,c.getReferenceProps({ref:p,...r,...e.props,"data-state":i?"open":"closed"})):null});export{b as T};
