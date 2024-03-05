import{a as i,u as s,b as n,j as l}from"./index-b51be3ed.js";import{r as h}from"./index-c013ead5.js";import{T as P,a as G}from"./index-c13ff105.js";import{C as X,a as U,M as Z,T as F,b as q,c as J,R as Q}from"./index-3215a802.js";import{u as K}from"./floating-ui.react-c559d281.js";/* empty css                         */i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`;i.span`
  ${()=>{const{tokens:t}=s(),{button:o}=t;return n`
      display: flex;
      flex-shrink: 0;

      svg {
        width: ${o.topLayer.icon.width};
        height: ${o.topLayer.icon.height};
      }
    `}}
`;var v=i.button`
  ${({$variant:t})=>{const{tokens:o}=s(),{button:e}=o;return n`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${e.height};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: ${e.opacity.disabled};
      }

      &:not(:disabled):focus-visible {
        border-radius: ${e.topLayer.stroke.radius};
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color[t]};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`;i.div`
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
        transition: transform 150ms;

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
`;i.div`
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
`;var oo=i.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:r})=>{const{tokens:a}=s(),{typography:d,fontFamily:c}=a;return[n`
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
        `,P.includes(t)&&n`
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
            font-family: ${G.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function to(t,o){const{variant:e,component:r,color:a,fontFamily:d,noWrap:c,testID:u,...$}=t;return l.jsx(oo,{...$,ref:o,as:r,$variant:e,$color:a,$fontFamily:d,$noWrap:c,"data-testid":u})}var eo=h.forwardRef(to),ro={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},no=h.forwardRef;function io(t,o){const{variant:e="bodyM",component:r,...a}=t;return l.jsx(eo,{...a,ref:o,variant:e,component:r||ro[e]})}var b=no(io),ao=i.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function so(t){const{alert:o,gap:e,children:r}=t;return l.jsxs(ao,{$gap:e,children:[r,o&&o]})}var A=so,lo=i.div`
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
`,co=i.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:o}=t;return n`
      display: grid;
      place-content: center;
      height: ${o.iconWrapper.height};
    `}}
`;function uo(t){const{severity:o,children:e,testID:r="input-alert"}=t;return l.jsxs(lo,{role:"alert",$severity:o,"data-testid":r,children:[l.jsx(co,{children:l.jsx(U,{})}),l.jsx(b,{color:"inherit",children:e})]})}var _=uo,ho=i.label`
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
`,po=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return n`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function bo(t){const{label:o,children:e,...r}=t,{tokens:a}=s(),{inputLabelRight:d}=a;return l.jsxs(ho,{...r,children:[l.jsx("div",{children:e}),o&&l.jsx(po,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:d.label.fontFamily,variant:d.label.typographyVariant,children:o})})]})}var Y=bo,I=i.div`
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
`,$o=i.input`
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
`,go=i(Z)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${I}:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,fo=i(F)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[n`
        display: none;

        ${I}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function ko(t,o){h.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var vo=h.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:r,testID:a="checkbox",...d}=t,c=h.useRef(null);ko(c,r);const u=K([c,o]);function $(g){var k;g.target.indeterminate=!!r,(k=d.onChange)==null||k.call(d,g)}return l.jsxs(I,{$hasError:e,children:[l.jsx($o,{...d,ref:u,type:"checkbox",onChange:$,"data-testid":a}),l.jsx(go,{}),l.jsx(fo,{})]})}),mo=vo;h.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...a}=t,{testID:d="checkbox"}=a;return l.jsx(A,{alert:r?l.jsx(_,{...r,testID:`${d}-alert`}):void 0,children:l.jsx(Y,{...e,children:l.jsx(mo,{...a,ref:o})})})});i.fieldset`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var wo=i.ul`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;i(wo)`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;i.li`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return n`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var O="1px",yo=i.div`
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
          border-right: ${O} solid ${r.stroke.color.base};
        `}
        ${t==="end"&&n`
          border-left: ${O} solid ${r.stroke.color.base};
        `};
      `]}}
`,L=t=>({id:t.id,className:t.className,"data-testid":t.testID}),xo=({children:t,position:o="start",...e})=>l.jsx(yo,{...L(e),position:o,children:t}),Ro=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,Co=i.input`
  ${({$error:t,$hasStartAdornment:o,$hasEndAdornment:e,$hasClearButton:r})=>{const{tokens:a}=s(),{input:d,adornment:c,clearButton:u}=a;return[n`
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
`,Io=i.div`
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
`,Lo=({onClick:t,...o})=>{const{tokens:e}=s(),{clearButton:r}=e;return l.jsx(Io,{...L(o),role:"button",onClick:t,children:l.jsx(X,{width:16,height:16,color:r.color.base})})},jo=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,To=i.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,Bo=i.div`
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
`,So=({elementId:t,labelId:o,labelText:e,errorText:r,children:a,labelTestId:d,...c})=>l.jsxs(jo,{...L(c),children:[e?l.jsx(b,{id:o,component:"label",htmlFor:t,testID:d,children:e}):null,l.jsxs(To,{children:[a,r?l.jsx(Bo,{children:r}):null]})]}),j=h.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:r,errorText:a,onChange:d,labelId:c,labelText:u,labelTestId:$,testID:g,...k},R)=>{const{disabled:m,readOnly:E,value:M="",id:W}=k,y=h.useRef(null),B=t&&!(m||E)&&!!M;h.useImperativeHandle(R,()=>y.current);const N=()=>{typeof d=="function"&&d(""),y.current&&y.current.focus()},V=S=>{typeof d=="function"&&d(S.target.value,S)};return l.jsx(So,{labelId:c,labelText:u,labelTestId:$,errorText:a,elementId:W,children:l.jsxs(Ro,{children:[o,l.jsx(Co,{...k,$hasClearButton:B,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:y,$error:r||!!a,onChange:V,"data-testid":g}),B&&!e?l.jsx(Lo,{testID:"input-clear-button",onClick:N}):null,e]})})});j.displayName="Input";var Oo=t=>{const o=parseFloat(t);return isNaN(o)?!1:Math.sign(o)<=0};i(({...t})=>l.jsx(j,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>Oo(t)?"#b20000":void 0};
  }
`;var zo=i(j)`
  input {
    border-color: ${t=>t.$isFocused&&"#0000ff"};
  }
`,Fo=i(q)`
  ${({$hasCursorPointer:t})=>{const{tokens:o}=s(),{adornment:e}=o;return n`
      cursor: ${t?"pointer":"default"};
      width: ${e.width.small};
      height: 16px;
    `}}
`,Ao=h.forwardRef(({value:t,onClick:o,isFocused:e,onChange:r,onFocus:a,onBlur:d,hasDatePicker:c=!1,onDatePickerKeyDown:u,...$},g)=>{const k=m=>{c&&(u==null||u(m))},R=m=>{r&&r(m)};return l.jsx(zo,{...$,ref:g,onChange:c?void 0:R,placeholder:"DD / MM / YYYY",onFocus:a||o,onBlur:d,onKeyDown:k,value:t,hasClearButton:!1,$isFocused:e,endAdornment:l.jsx(xo,{position:"end",children:l.jsx(Fo,{$hasCursorPointer:c,color:e?"#0000ff":"#161616",onClick:o})})})});Ao.displayName="DateInputBase";i.div`
  position: absolute;
  // TODO is z-index a candidate for design tokens?
  z-index: 2;
`;var C=i.a`
  ${({$hasIcon:t})=>{const{tokens:o}=s(),{link:e}=o;return[n`
        all: unset;
        display: inline;
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
      `,t&&n`
          display: inline-flex;
          gap: ${e.withIcon.gap};
        `]}}
`,_o=i(b)`
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
`,z=i.div`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return n`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${o.withIcon.size};
        height: ${o.withIcon.size};
      }
    `}}
`,Yo=h.forwardRef;function Do(t,o){const{children:e,startIcon:r,endIcon:a,component:d="a",testID:c="link",...u}=t,{tokens:$}=s(),{link:g}=$;return l.jsxs(C,{...u,ref:o,as:d,"data-testid":c,$hasIcon:!!(r||a),children:[r&&l.jsx(z,{"data-testid":`${c}-start-icon-wrapper`,children:r}),l.jsx("span",{children:l.jsx(_o,{component:"span",color:"inherit",variant:g.typographyVariant,fontFamily:g.fontFamily,children:e})}),a&&l.jsx(z,{"data-testid":`${c}-end-icon-wrapper`,children:a})]})}Yo(Do);i.div`
  overflow: hidden;
`;i.div`
  ${()=>{const{tokens:t}=s(),{multiSelect:o}=t;return n`
      overflow: hidden;
      color: ${o.button.headingText.color.base};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{multiSelect:o}=t;return n`
      overflow: hidden;
      color: ${o.button.selectedText.color.base};
    `}}
`;i.li`
  ${()=>{const{tokens:t}=s(),{multiSelect:o}=t;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;i.div`
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
`;var Ho=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,Eo=i.span`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.label.color.base};
    `}}
`,Mo=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return n`
      color: ${o.labelHint.color.base};
    `}}
`;function Wo(t){const{htmlFor:o,label:e,labelHint:r,children:a,...d}=t,{tokens:c}=s(),{inputLabelTop:u}=c;return l.jsxs(Ho,{children:[l.jsxs("div",{children:[l.jsx("label",{...d,htmlFor:o,children:e&&l.jsx(Eo,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:u.label.fontFamily,variant:u.label.typographyVariant,children:e})})}),r&&l.jsx(Mo,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:u.labelHint.fontFamily,variant:u.labelHint.typographyVariant,children:r})})]}),l.jsx("div",{children:a})]})}var D=Wo;i.div`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return[n`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;i.div`
  ${({$isOpen:t,$hasError:o,$isDisabled:e})=>{const{tokens:r}=s(),{select:a}=r;return[n`
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

        &:hover {
          outline-width: ${a.button.stroke.width.hover};
          outline-color: ${a.button.stroke.color.hover};
          outline-offset: ${a.button.stroke.offset.hover};

          svg {
            color: ${a.button.icon.color.hover};
          }
        }
      `,o&&n`
          &,
          &:hover {
            outline-width: ${a.button.stroke.width.error};
            outline-color: ${a.button.stroke.color.error};
            outline-offset: ${a.button.stroke.offset.error};
          }
        `,t&&n`
          &,
          &:hover {
            outline-width: ${a.button.stroke.width.active};
            outline-color: ${a.button.stroke.color.active};
            outline-offset: ${a.button.stroke.offset.active};

            svg {
              color: ${a.button.icon.color.active};
            }
          }
        `,e&&n`
          cursor: not-allowed;

          &,
          &:hover {
            outline-width: ${a.button.stroke.width.disabled};
            outline-color: ${a.button.stroke.color.disabled};
            outline-offset: ${a.button.stroke.offset.disabled};

            svg {
              color: ${a.button.icon.color.disabled};
            }
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return n`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return n`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var No=i(J)`
  rotate: 0deg;
`;i(No)`
  rotate: 180deg;
`;i.div`
  ${({$isOpen:t})=>{const{tokens:o}=s(),{select:e}=o;return n`
      display: ${t?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${e.menu.radius};
      border-width: ${e.menu.stroke.width};
      border-style: ${e.menu.stroke.style};
      border-color: ${e.menu.stroke.color};
      box-shadow: 0px 2px 2px ${e.menu.shadow.outer.color};
      z-index: 1000;
    `}}
`;var H=i.div`
  ${()=>n`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;i(H)`
  ${({$visible:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;i(H)`
  ${({$visible:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&n`
          transform: translateY(0px);
        `]}}
`;i.ul`
  ${()=>{const{tokens:t}=s(),{select:o}=t,{menu:{scrollbar:{thumbColor:e,trackColor:r}}}=o;return n`
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
          border-radius: ${o.menu.radius};
        }
      }
    `}}
`;var x=i.div`
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
`,Vo=i.input`
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
`,Po=i.div`
  ${()=>{const{tokens:t}=s(),{radio:o}=t;return[n`
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
`,Go=h.forwardRef((t,o)=>{const{hasError:e,testID:r="radio",...a}=t;return l.jsxs(x,{$hasError:e,children:[l.jsx(Vo,{...a,ref:o,type:"radio","data-testid":r}),l.jsx(Po,{})]})}),Xo=Go;h.forwardRef((t,o)=>{const{labelProps:e,alertProps:r,...a}=t,{testID:d="radio"}=a;return l.jsx(A,{alert:r?l.jsx(_,{...r,testID:`${d}-alert`}):void 0,children:l.jsx(Y,{...e,children:l.jsx(Xo,{...a,ref:o})})})});i.div`
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
`;i.li`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return[n`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;i.div`
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
`;i(F)`
  ${({$isSelected:t})=>{const{tokens:o}=s(),{select:e}=o;return[n`
        visibility: ${t?"visible":"hidden"};
        width: ${e.menu.option.inner.icon.width};
        height: ${e.menu.option.inner.icon.height};
      `]}}
`;i.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
`;i.input`
  ${({disabled:t,$backgroundSize:o})=>{const{tokens:e}=s(),{color:r}=e;function a(d){return d?r.groundGrey:r.digitalBlue}return n`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${r.groundGrey};
      border-radius: 2px;
      background-size: ${o};
      background-image: linear-gradient(
        ${a(t)},
        ${a(t)}
      );
      background-repeat: no-repeat;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        background-color: ${a(t)};
        border-radius: 50%;
        cursor: ${t?"auto":"pointer"};
      }
    `}}
`;i.div`
  margin-bottom: 1rem;
`;i.div`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"48px"};
  background-color: #dcdcdc;
`;i.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return n`
      max-width: ${o.maxWidth};
    `}}
`;i.div`
  display: inline-grid;
  grid-auto-flow: column;
`;i.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`;i.div`
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
`;i.div`
  ${({$withIcon:t,$isActive:o})=>{const{tokens:e}=s(),{tabs:r}=e;return[n`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

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
`;i.div`
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
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      color: ${o.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.tab.secondaryLabel.color.disabled};
      }
    `}}
`;i.div`
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
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      width: ${o.tab.separator.width};
      background-color: ${o.tab.separator.color};
      margin-top: ${o.tab.separator.marginTop};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return n`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;i.div`
  ${({$withIcon:t,$isActive:o,$withPadding:e})=>{const{tokens:r}=s(),{tabs:a}=r;return[n`
        display: ${o?"block":"none"};
        background: ${a.panel.backgroundColor};
      `,e&&n`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,e&&t&&n`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`;var w=navigator.userAgent.match(/firefox/gi),Uo=i(D)`
  ${()=>n`
      width: 100%;
    `}
`;i.div`
  display: flex;
  position: relative;

  ${({$scrollPercentage:t})=>{const{tokens:o}=s(),{textArea:e,scrollBar:r,outerField:a}=o;return n`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: calc(100% - ${r.width});
        height: ${e.innerShadow.height};
        pointer-events: none;
        opacity: ${e.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
        ${()=>w?n`
                width: 100%;
              `:void 0}
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px inset;
        border-radius: ${a.radius} 0 0 0;
        ${()=>w?n`
                border-radius: 0 0 ${a.radius} ${a.radius};
              `:void 0}
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px inset;
        border-radius: 0 0 0 ${a.radius};
        ${()=>w?n`
                border-radius: 0 0 ${a.radius} ${a.radius};
              `:void 0}
      }

      ${()=>t!==void 0&&t>0&&n`
          &::before {
            opacity: ${e.innerShadow.opacity.active};
          }
        `}

      ${()=>t!==void 0&&t<1&&n`
        &::after {
          opacity: ${e.innerShadow.opacity.active};
      `}
    `}}
`;i.textarea`
  ${()=>{const{tokens:t}=s(),{textArea:o,typography:e,scrollBar:r}=t,a=o.typographyVariant;return n`
      all: unset;
      width: 100%;
      height: 100%;

      resize: vertical;
      min-height: ${o.minHeight};
      padding: ${o.paddingVertical} ${o.paddingHorizontal};

      color: ${o.color.base};
      font-family: ${e.fontFamily[a]};
      font-size: ${e.fontSize[a]};
      line-height: ${e.lineHeight[a]};

      ${Uo}:has(textarea:read-only) && {
        color: ${o.color.readOnly};
      }

      ${()=>w?n`
              scrollbar-color: ${r.thumbStroke.color.base} transparent;
              margin: 4px;
              padding-top: 4px;
              padding-bottom: 4px;
            `:void 0};

      &::-webkit-scrollbar {
        border-left-color: ${r.strokeLeft.color};
        border-left-width: ${r.strokeLeft.width};
        border-left-style: ${r.strokeLeft.style};
        width: ${r.width};
      }

      &::-webkit-scrollbar-thumb {
        outline-color: ${r.thumbStroke.color.base};
        outline-width: ${r.thumbStroke.width};
        outline-style: ${r.thumbStroke.style};
        border-radius: ${r.thumbStroke.radius};
        outline-offset: -5.5px;
      }

      &::-webkit-scrollbar-thumb:hover {
        outline-color: ${r.thumbStroke.color.hover};
      }
      &::-webkit-scrollbar-corner {
        background-color: transparent;
        border-left-color: ${r.strokeLeft.color};
        border-left-width: ${r.strokeLeft.width};
        border-left-style: ${r.strokeLeft.style};
      }

      &::-webkit-resizer {
        opacity: 0;
      }
    `}}
`;i(Q)`
  ${()=>{const{tokens:t}=s(),{textArea:o}=t;return w?n`
          display: none;
        `:n`
          position: absolute;
          right: 5px;
          bottom: 5px;
          width: 9px;
          height: 9px;
          pointer-events: none;
          color: ${o.resizeHandle.color};
        `}}
`;var p=i.div`
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
`;i.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{outerField:e}=o;return[n`
        position: relative;
        width: 100%;
        background: ${e.backgroundColor};

        outline-color: ${e.stroke.color.base};
        outline-width: ${e.stroke.width.base};
        outline-style: ${e.stroke.style};
        border-radius: ${e.radius};

        ${p}:has(input:not(:disabled)):hover &&,
        ${p}:has(textarea:not(:disabled)):hover && {
          outline-color: ${e.stroke.color.hover};
          outline-width: ${e.stroke.width.hover};
          outline-offset: ${e.stroke.offset.hover};
        }

        ${p}:has(input:read-only) &&,
        ${p}:has(textarea:read-only) && {
          outline-color: ${e.stroke.color.readOnly};
        }

        ${p}:has(input:focus) &&,
        ${p}:has(textarea:focus) && {
          outline-color: ${e.stroke.color.focus};
          outline-width: ${e.stroke.width.focus};
          outline-offset: ${e.stroke.offset.focus};
        }
      `,t&&n`
          &&,
          ${p}:has(input:read-only) &&,
          ${p}:has(input:disabled) &&,
          ${p}:has(textarea:read-only) &&,
          ${p}:has(textarea:disabled) && {
            outline-width: ${e.stroke.width.error};
            outline-color: ${e.stroke.color.error};
            outline-offset: ${e.stroke.offset.error};
          }
        `]}}
`;var Zo=i(b)`
  ${()=>{const{tokens:t}=s(),{charactersCounter:o}=t;return n`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;function qo(t){const{length:o,maxLength:e,testID:r}=t,{tokens:a}=s(),{charactersCounter:d}=a,c=Math.max(0,e-o);return l.jsx(Zo,{variant:d.typographyVariant,testID:r,"aria-live":"polite",children:`${c} character${c!==1?"s":""} remaining`})}h.memo(qo);var Jo=i(D)`
  ${()=>n`
      width: 100%;
    `}
`;i.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`;i.input`
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

      ${Jo}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`;i(b)`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return n`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`;var T="0.4s",f=i.div`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: relative;
        width: ${o.inner.size[t].width};
        height: ${o.inner.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${o.inner.backgroundColor.base};
        border-radius: ${o.inner.size[t].height};
        margin: ${o.inner.size[t].margin};
        transition: transform ${T};

        ${f}:has(input:checked) && {
          transform: translateX(
            ${o.inner.size[t].uncheckedOffset}
          );
        }

        ${f}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;i(b)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[t].padding};
        transition: opacity ${T};

        ${f}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${f}:has(input:checked) && {
          opacity: 1;
        }

        ${f}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;i(b)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[n`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[t].padding};
        transition: opacity ${T};

        ${f}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${f}:has(input:checked) && {
          opacity: 0;
        }

        ${f}:has(input:not(:checked)) && {
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
`;i.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return n`
      width: ${o.size[t].width};
      background-color: transparent;
    `}}
`;export{b as T};
