import{a as i,u as s,b as r,j as d}from"./index-e4c57c99.js";import{r as h}from"./index-c013ead5.js";import{T as N,a as Y}from"./index-b62ae16e.js";import{C as H,a as P,M as V,T as O,b as G,c as B}from"./index-e1b96a7a.js";import{u as X}from"./floating-ui.react-ba44fe65.js";/* empty css                         */i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`;i.span`
  display: flex;
  flex-shrink: 0;
`;i.button`
  ${({$variant:t})=>{const{tokens:o}=s(),{button:e}=o;return[r`
        height: ${e.height};
        max-width: 100%;
        padding-left: ${e.paddingLeft};
        padding-right: ${e.paddingRight};
        border-width: ${e.stroke.width};
        border-style: solid;
        border-color: transparent;
        border-radius: ${e.stroke.radius};
        user-select: none;
        cursor: pointer;
        outline-style: none;

        color: ${e.color[t].base};
        background-color: ${e.backgroundColor[t].base};

        &:disabled {
          pointer-events: none;
          opacity: ${e.opacity.disabled};
        }

        &:focus-visible:not(:active) {
          outline-width: ${e.focusRing.width};
          outline-style: solid;
          outline-color: ${e.focusRing.color[t]};
          outline-offset: ${e.focusRing.offset};
        }

        &:hover {
          color: ${e.color[t].hover};
          background-color: ${e.backgroundColor[t].hover};
        }

        &:active {
          color: ${e.color[t].active};
          background-color: ${e.backgroundColor[t].active};
        }
      `,(t==="secondary"||t==="secondaryAlt")&&r`
          border-color: ${e.stroke.color[t].base};

          &:hover {
            border-color: ${e.stroke.color[t].hover};
          }

          &:active {
            border-color: ${e.stroke.color[t].active};
          }
        `]}}
`;var U=i.p`
  ${({$variant:t,$fontFamily:o,$noWrap:e,$color:n})=>{const{tokens:a}=s(),{typography:l,fontFamily:c}=a;return[r`
        margin: 0;
        font-weight: normal;
        color: ${n||l.color[t]};
        font-size: ${l.fontSize[t]};
        line-height: ${l.lineHeight[t]};
        font-family: ${l.fontFamily[t]};
      `,o&&r`
          font-family: ${c[o]};
        `,e&&r`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,N.includes(t)&&r`
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
            font-family: ${Y.includes(o)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function Z(t,o){const{variant:e,component:n,color:a,fontFamily:l,noWrap:c,testID:u,...g}=t;return d.jsx(U,{...g,ref:o,as:n,$variant:e,$color:a,$fontFamily:l,$noWrap:c,"data-testid":u})}var q=h.forwardRef(Z),J={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},Q=h.forwardRef;function K(t,o){const{variant:e="bodyM",component:n,...a}=t;return d.jsx(q,{...a,ref:o,variant:e,component:n||J[e]})}var p=Q(K),oo=i.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function to(t){const{alert:o,gap:e,children:n}=t;return d.jsxs(oo,{$gap:e,children:[n,o&&o]})}var A=to,eo=i.div`
  ${({$severity:t})=>{const{tokens:o}=s(),{inputAlert:e}=o;return r`
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
`,no=i.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:o}=t;return r`
      display: grid;
      place-content: center;
      height: ${o.iconWrapper.height};
    `}}
`;function ro(t){const{severity:o,children:e,testID:n="input-alert"}=t;return d.jsxs(eo,{role:"alert",$severity:o,"data-testid":n,children:[d.jsx(no,{children:d.jsx(P,{})}),d.jsx(p,{color:"inherit",children:e})]})}var F=ro,io=i.label`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return r`
      display: grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      user-select: none;

      &:has(:disabled) {
        pointer-events: none;
      }

      &:has(:focus-visible) {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
        border-radius: ${o.focusRing.radius};
      }
    `}}
`,ao=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:o}=t;return r`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function so(t){const{label:o,children:e,...n}=t,{tokens:a}=s(),{inputLabelRight:l}=a;return d.jsxs(io,{...n,children:[d.jsx("div",{children:e}),o&&d.jsx(ao,{children:d.jsx(p,{component:"span",color:"inherit",fontFamily:l.label.fontFamily,variant:l.label.typographyVariant,children:o})})]})}var z=so,x=i.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{checkbox:e}=o;return[r`
        position: relative;
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        border-radius: ${e.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;

        &:has(input:not(:checked)),
        label:has(input:not(:checked)) && {
          background: ${e.backgroundColor.unchecked.base};
          outline-width: ${e.stroke.width.unchecked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:checked):not(:indeterminate)),
        label:hover:has(input:not(:checked):not(:indeterminate)) && {
          background: ${e.backgroundColor.unchecked.hover};
          outline-width: ${e.stroke.width.unchecked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:not(:checked):disabled),
        label:has(input:not(:checked):disabled) && {
          background: ${e.backgroundColor.unchecked.disabled};
          outline-width: ${e.stroke.width.unchecked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:checked),
        label:has(input:checked) && {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:checked),
        label:hover:has(input:checked) && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:checked:disabled),
        label:has(input:checked:disabled) && {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:indeterminate),
        label:has(input:indeterminate) && {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:indeterminate),
        label:hover:has(input:indeterminate) && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:indeterminate:disabled),
        label:has(input:indeterminate:disabled) && {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }
      `,t&&r`
          &:has(input:not(:checked)),
          label:has(input:not(:checked)) && {
            outline-width: ${e.stroke.width.unchecked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:checked):not(:indeterminate)),
          label:hover:has(input:not(:checked):not(:indeterminate)) && {
            outline-width: ${e.stroke.width.unchecked.hover};
            outline-color: ${e.stroke.color.hover};
          }

          &:has(input:checked),
          label:has(input:checked) && {
            outline-width: ${e.stroke.width.checked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:checked:not(:indeterminate)),
          label:hover:has(input:checked:not(:indeterminate)) && {
            outline-width: ${e.stroke.width.checked.hover};
            outline-color: ${e.stroke.color.hover};
          }
        `]}}
`,lo=i.input`
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
`,co=i(V)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[r`
        display: none;

        ${x}:has(input:indeterminate) &&,
        label:has(input:indeterminate) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`,uo=i(O)`
  ${()=>{const{tokens:t}=s(),{checkbox:o}=t;return[r`
        display: none;

        ${x}:has(input:checked:not(:indeterminate)) &&,
        label:has(input:checked:not(:indeterminate)) && {
          display: block;
          width: ${o.icon.width};
          height: ${o.icon.height};
          color: ${o.icon.color.base};
        }
      `]}}
`;function ho(t,o){h.useEffect(()=>{t.current&&(t.current.indeterminate=!!o)},[o])}var po=h.forwardRef((t,o)=>{const{hasError:e,isIndeterminate:n,testID:a="checkbox",...l}=t,c=h.useRef(null);ho(c,n);const u=X([c,o]);function g(f){var $;f.target.indeterminate=!!n,($=l.onChange)==null||$.call(l,f)}return d.jsxs(x,{$hasError:e,children:[d.jsx(lo,{...l,ref:u,type:"checkbox",onChange:g,"data-testid":a}),d.jsx(co,{}),d.jsx(uo,{})]})}),bo=po;h.forwardRef((t,o)=>{const{labelProps:e,alertProps:n,...a}=t,{testID:l="checkbox"}=a;return d.jsx(A,{alert:n?d.jsx(F,{...n,testID:`${l}-alert`}):void 0,children:d.jsx(z,{...e,children:d.jsx(bo,{...a,ref:o})})})});i.fieldset`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return r`
      all: unset;
      display: grid;
      gap: ${o.gap};
    `}}
`;var go=i.ul`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return r`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;i(go)`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return r`
      padding-left: ${o.nestedList.paddingLeft};
    `}}
`;i.li`
  ${()=>{const{tokens:t}=s(),{fieldset:o}=t;return r`
      all: unset;
      display: grid;
      gap: ${o.list.gap};
    `}}
`;var T="1px",$o=i.div`
  ${({position:t})=>{const{tokens:o}=s(),{adornment:e,input:n}=o;return[r`
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

        ${t==="start"&&r`
          border-right: ${T} solid ${n.stroke.color.base};
        `}
        ${t==="end"&&r`
          border-left: ${T} solid ${n.stroke.color.base};
        `};
      `]}}
`,R=t=>({id:t.id,className:t.className,"data-testid":t.testID}),fo=({children:t,position:o="start",...e})=>d.jsx($o,{...R(e),position:o,children:t}),ko=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,vo=i.input`
  ${({$error:t,$hasStartAdornment:o,$hasEndAdornment:e,$hasClearButton:n})=>{const{tokens:a}=s(),{input:l,adornment:c,clearButton:u}=a;return[r`
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
        padding-right: ${e?`calc(${c.width.small} + ${l.paddingRight})`:n?u.width:l.paddingRight};
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
      `,t&&r`
          border-color: ${l.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${l.stroke.color.error};
          }
        `]}}
`,mo=i.div`
  ${()=>{const{tokens:t}=s(),{clearButton:o}=t;return r`
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
`,wo=({onClick:t,...o})=>{const{tokens:e}=s(),{clearButton:n}=e;return d.jsx(mo,{...R(o),role:"button",onClick:t,children:d.jsx(H,{width:16,height:16,color:n.color.base})})},yo=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,xo=i.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return[r`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${o.maxWidth};
      `]}}
`,Ro=i.div`
  ${()=>{const{tokens:t}=s(),{fontFamily:o,themeColor:e}=t;return[r`
        font-family: ${o.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${e.ragRed};
        width: 100%;
      `]}}
`,Co=({elementId:t,labelId:o,labelText:e,errorText:n,children:a,labelTestId:l,...c})=>d.jsxs(yo,{...R(c),children:[e?d.jsx(p,{id:o,component:"label",htmlFor:t,testID:l,children:e}):null,d.jsxs(xo,{children:[a,n?d.jsx(Ro,{children:n}):null]})]}),C=h.forwardRef(({hasClearButton:t=!0,startAdornment:o,endAdornment:e,isError:n,errorText:a,onChange:l,labelId:c,labelText:u,labelTestId:g,testID:f,...$},y)=>{const{disabled:k,readOnly:S,value:E="",id:D}=$,m=h.useRef(null),j=t&&!(k||S)&&!!E;h.useImperativeHandle(y,()=>m.current);const M=()=>{typeof l=="function"&&l(""),m.current&&m.current.focus()},W=L=>{typeof l=="function"&&l(L.target.value,L)};return d.jsx(Co,{labelId:c,labelText:u,labelTestId:g,errorText:a,elementId:D,children:d.jsxs(ko,{children:[o,d.jsx(vo,{...$,$hasClearButton:j,$hasStartAdornment:!!o,$hasEndAdornment:!!e,ref:m,$error:n||!!a,onChange:W,"data-testid":f}),j&&!e?d.jsx(wo,{testID:"input-clear-button",onClick:M}):null,e]})})});C.displayName="Input";var Io=t=>{const o=parseFloat(t);return isNaN(o)?!1:Math.sign(o)<=0};i(({...t})=>d.jsx(C,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>Io(t)?"#b20000":void 0};
  }
`;var jo=i(C)`
  input {
    border-color: ${t=>t.$isFocused&&"#0000ff"};
  }
`,Lo=i(G)`
  ${({$hasCursorPointer:t})=>{const{tokens:o}=s(),{adornment:e}=o;return r`
      cursor: ${t?"pointer":"default"};
      width: ${e.width.small};
      height: 16px;
    `}}
`,To=h.forwardRef(({value:t,onClick:o,isFocused:e,onChange:n,onFocus:a,onBlur:l,hasDatePicker:c=!1,onDatePickerKeyDown:u,...g},f)=>{const $=k=>{c&&(u==null||u(k))},y=k=>{n&&n(k)};return d.jsx(jo,{...g,ref:f,onChange:c?void 0:y,placeholder:"DD / MM / YYYY",onFocus:a||o,onBlur:l,onKeyDown:$,value:t,hasClearButton:!1,$isFocused:e,endAdornment:d.jsx(fo,{position:"end",children:d.jsx(Lo,{$hasCursorPointer:c,color:e?"#0000ff":"#161616",onClick:o})})})});To.displayName="DateInputBase";i.div`
  position: absolute;
  // TODO is z-index a candidate for design tokens?
  z-index: 2;
`;i.div`
  ${()=>{const{tokens:t}=s(),{dropdown:o}=t;return r`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`;i.div`
  ${({$isDisabled:t,$hasSelectedItem:o})=>{const{tokens:e}=s(),{dropdown:n}=e;return[r`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${n.button.placeholder.color.base};
      `,t&&r`
          color: ${n.button.placeholder.color.disabled};
        `,o&&r`
          color: ${n.button.text.color.base};
        `,t&&o&&r`
          color: ${n.button.text.color.disabled};
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{dropdown:o}=t;return r`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`;var Oo=i(B)`
  rotate: 0deg;
`;i(Oo)`
  rotate: 180deg;
`;i.div`
  ${({$isSelected:t,$isHighlighted:o})=>{const{tokens:e}=s(),{dropdown:n}=e;return[r`
        display: grid;
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
      `,t&&r`
          background: ${n.menu.option.inner.backgroundColor.active};
          outline-color: ${n.menu.option.inner.stroke.color.active};
        `,o&&r`
          background: ${n.menu.option.inner.backgroundColor.hover};
          outline-color: ${n.menu.option.inner.stroke.color.hover};
        `]}}
`;i(O)`
  ${({$isSelected:t})=>{const{tokens:o}=s(),{dropdown:e}=o;return[r`
        visibility: ${t?"visible":"hidden"};
        width: ${e.menu.option.inner.icon.width};
        height: ${e.menu.option.inner.icon.height};
      `]}}
`;var Bo=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return r`
      width: 100%;
      display: grid;
      gap: ${o.gap};
    `}}
`,Ao=i.span`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return r`
      color: ${o.label.color.base};
    `}}
`,Fo=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:o}=t;return r`
      color: ${o.labelHint.color.base};
    `}}
`;function zo(t){const{htmlFor:o,label:e,labelHint:n,children:a,...l}=t,{tokens:c}=s(),{inputLabelTop:u}=c;return d.jsxs(Bo,{children:[d.jsxs("div",{children:[d.jsx("label",{...l,htmlFor:o,children:e&&d.jsx(Ao,{children:d.jsx(p,{component:"span",color:"inherit",fontFamily:u.label.fontFamily,variant:u.label.typographyVariant,children:e})})}),n&&d.jsx(Fo,{children:d.jsx(p,{component:"span",color:"inherit",fontFamily:u.labelHint.fontFamily,variant:u.labelHint.typographyVariant,children:n})})]}),d.jsx("div",{children:a})]})}var _o=zo;i.div`
  ${()=>{const{tokens:t}=s(),{dropdown:o}=t;return[r`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`;i.div`
  ${({$isOpen:t,$hasError:o,$isDisabled:e})=>{const{tokens:n}=s(),{dropdown:a}=n;return[r`
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
      `,o&&r`
          &,
          &:hover {
            outline-width: ${a.button.stroke.width.error};
            outline-color: ${a.button.stroke.color.error};
            outline-offset: ${a.button.stroke.offset.error};
          }
        `,t&&r`
          &,
          &:hover {
            outline-width: ${a.button.stroke.width.active};
            outline-color: ${a.button.stroke.color.active};
            outline-offset: ${a.button.stroke.offset.active};

            svg {
              color: ${a.button.icon.color.active};
            }
          }
        `,e&&r`
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
  ${({$isOpen:t})=>{const{tokens:o}=s(),{dropdown:e}=o;return r`
      display: ${t?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${e.menu.radius};
      border-width: ${e.menu.stroke.width};
      border-style: ${e.menu.stroke.style};
      border-color: ${e.menu.stroke.color};
      box-shadow: 0px 2px 2px ${e.menu.shadow.outer.color};
    `}}
`;var _=i.div`
  ${()=>r`
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      pointer-events: none;
    `}
`;i(_)`
  ${({$visible:t})=>{const{tokens:o}=s(),{dropdown:e}=o;return[r`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&r`
          transform: translateY(0px);
        `]}}
`;i(_)`
  ${({$visible:t})=>{const{tokens:o}=s(),{dropdown:e}=o;return[r`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${e.menu.shadow.inner.color};
      `,t&&r`
          transform: translateY(0px);
        `]}}
`;i.ul`
  ${()=>{const{tokens:t}=s(),{dropdown:o}=t,{menu:{scrollbar:{thumbColor:e,trackColor:n}}}=o;return r`
      all: unset;
      display: grid;
      scrollbar-color: ${e} ${n};
      background: ${o.menu.separator.color};
      gap: ${o.menu.separator.width};
      overflow-y: auto;
    `}}
`;i.li`
  ${()=>{const{tokens:t}=s(),{dropdown:o}=t;return[r`
        all: unset;
        display: grid;
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`;var w=i.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{radio:e}=o;return[r`
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

        &:hover,
        label:hover && {
          outline-width: ${e.stroke.width.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:disabled),
        label:has(input:disabled) && {
          outline-width: ${e.stroke.width.disabled};
          outline-color: ${e.stroke.color.disabled};
        }
      `,t&&r`
          outline-width: ${e.stroke.width.error};
          outline-color: ${e.stroke.color.error};
        `]}}
`,So=i.input`
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
`,Eo=i.div`
  ${()=>{const{tokens:t}=s(),{radio:o}=t;return[r`
        display: none;
        width: ${o.icon.width};
        height: ${o.icon.height};
        background: ${o.icon.color.base};
        border-radius: 100%;

        ${w}:has(input:checked) &&,
        label:has(input:checked) && {
          display: block;
        }

        ${w}:hover:has(input:checked) &&,
        label:hover:has(input:checked) && {
          background: ${o.icon.color.hover};
        }

        ${w}:has(input:checked:disabled) &&,
        label:has(input:checked:disabled) && {
          background: ${o.icon.color.disabled};
        }
      `]}}
`,Do=h.forwardRef((t,o)=>{const{hasError:e,testID:n="radio",...a}=t;return d.jsxs(w,{$hasError:e,children:[d.jsx(So,{...a,ref:o,type:"radio","data-testid":n}),d.jsx(Eo,{})]})}),Mo=Do;h.forwardRef((t,o)=>{const{labelProps:e,alertProps:n,...a}=t,{testID:l="radio"}=a;return d.jsx(A,{alert:n?d.jsx(F,{...n,testID:`${l}-alert`}):void 0,children:d.jsx(z,{...e,children:d.jsx(Mo,{...a,ref:o})})})});i.select`
  ${({$isError:t})=>{const{tokens:o}=s(),{fontFamily:e,formElementContainer:n}=o;return[r`
        max-width: ${n.maxWidth};
        height: ${n.height};
        font-family: "${e.OpenSansRegular}";
        font-size: 16px;
        outline: none;
        border: 1px solid #ccc;
        cursor: pointer;
        padding: 0px 2.5rem 0px 8px;
        text-align: left;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        &:focus {
          background-color: #ffffff;
          border: 1px solid #00f;
        }

        &:active {
          background-color: #ffffff;
          border: 1px solid #00f;
        }

        &:disabled {
          border: 1px solid #ccc;
          background-color: #fff;
          opacity: 0.5;
          color: #a0a1a3;
          cursor: default;
        }
      `,t&&r`
          &,
          &:focus,
          &:active {
            border: 1px solid #b20000;
            background-color: #ffffff;
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{fontFamily:o}=t;return r`
      font-family: "${o.OpenSansRegular}";
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;
      color: #b20000;
      padding-top: 5px;
      text-align: left;
      width: 100%;
    `}}
`;i(B)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 24px;
  width: 24px;
  pointer-events: none;
  color: #161616;
`;i.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
`;i.input`
  ${({disabled:t,$backgroundSize:o})=>{const{tokens:e}=s(),{color:n}=e;function a(l){return l?n.groundGrey:n.digitalBlue}return r`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${n.groundGrey};
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
  ${()=>{const{tokens:t}=s(),{formElementContainer:o}=t;return r`
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
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return r`
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
  ${({$withIcon:t,$isActive:o})=>{const{tokens:e}=s(),{tabs:n}=e;return[r`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        border-top-left-radius: ${n.tab.radius.topLeft};
        border-top-right-radius: ${n.tab.radius.topLeft};
        border-top-width: ${n.tab.strokeTop.width};
        border-top-style: ${n.tab.strokeTop.style};
        border-top-color: ${n.tab.strokeTop.color.base};

        padding-top: ${n.tab.padding.top};
        padding-bottom: ${n.tab.padding.bottom};
        padding-left: ${n.tab.padding.left.base};
        padding-right: ${n.tab.padding.right.base};

        label:hover && {
          background: ${n.tab.backgroundColor.hover};
        }

        label:has(button:active) && {
          outline-width: ${n.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${n.tab.activeRing.color};
          outline-offset: ${n.tab.activeRing.offset};
        }

        user-select: none;
      `,t&&r`
          padding-left: ${n.tab.padding.left.withIcon};
          padding-right: ${n.tab.padding.right.withIcon};
        `,o&&r`
          background: ${n.tab.backgroundColor.active};
          border-top-color: ${n.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${n.tab.backgroundColor.active};
          }
        `]}}
`;i.div`
  ${({$isActive:t})=>{const{tokens:o}=s(),{tabs:e}=o;return[r`
        color: ${e.tab.label.color.base};

        label:hover && {
          color: ${e.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${e.tab.label.color.disabled};
        }
      `,t&&r`
          color: ${e.tab.label.color.active};

          label:hover && {
            color: ${e.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${e.tab.label.color.disabled};
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return r`
      color: ${o.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${o.tab.secondaryLabel.color.disabled};
      }
    `}}
`;i.div`
  ${({$isActive:t})=>{const{tokens:o}=s(),{tabs:e}=o;return[r`
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
      `,t&&r`
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
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return r`
      width: ${o.tab.separator.width};
      background-color: ${o.tab.separator.color};
      margin-top: ${o.tab.separator.marginTop};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:o}=t;return r`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`;i.div`
  ${({$withIcon:t,$isActive:o,$withPadding:e})=>{const{tokens:n}=s(),{tabs:a}=n;return[r`
        display: ${o?"block":"none"};
        background: ${a.panel.backgroundColor};
      `,e&&r`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,e&&t&&r`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`;var Wo=i(_o)`
  ${()=>r`
      width: 100%;
    `}
`;i.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return r`
      width: 100%;
      height: ${o.height};
      display: flex;
      align-items: center;
      padding-right: ${o.paddingRight};
      padding-left: ${o.paddingLeft};
    `}}
`;i.input`
  ${()=>{const{tokens:t}=s(),{textInput:o,typography:e}=t,n=o.typographyVariant;return r`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${o.color.base};
      font-family: ${e.fontFamily[n]};
      font-size: ${e.fontSize[n]};
      line-height: ${e.lineHeight[n]};

      ${Wo}:has(input:read-only) && {
        color: ${o.color.readOnly};
      }
    `}}
`;i(p)`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return r`
      color: ${o.prefix.color};
      margin-right: ${o.prefix.marginRight};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{textInput:o}=t;return r`
      display: flex;
      align-items: center;
      margin-left: ${o.icon.marginLeft};
    `}}
`;var v=i.div`
  ${()=>{const{tokens:t}=s(),{outerField:o}=t;return r`
      width: 100%;

      outline-color: ${o.focusRing.color};
      outline-width: ${o.focusRing.width.base};
      outline-style: ${o.focusRing.style};
      outline-offset: ${o.focusRing.offset.base};
      border-radius: ${o.radius};

      &:has(input:focus) {
        outline-width: ${o.focusRing.width.focus};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`;i.div`
  ${({$hasError:t})=>{const{tokens:o}=s(),{outerField:e}=o;return[r`
        width: 100%;
        background: ${e.backgroundColor};

        outline-color: ${e.stroke.color.base};
        outline-width: ${e.stroke.width.base};
        outline-style: ${e.stroke.style};
        border-radius: ${e.radius};

        ${v}:has(input:not(:disabled)):hover && {
          outline-color: ${e.stroke.color.hover};
          outline-width: ${e.stroke.width.hover};
          outline-offset: -${e.stroke.width.hover};
        }

        ${v}:has(input:read-only) && {
          outline-color: ${e.stroke.color.readOnly};
        }

        ${v}:has(input:focus) && {
          outline-color: ${e.stroke.color.focus};
          outline-width: ${e.stroke.width.focus};
          outline-offset: -${e.stroke.width.focus};
        }
      `,t&&r`
          &&,
          ${v}:has(input:read-only) &&,
          ${v}:has(input:disabled) && {
            outline-width: ${e.stroke.width.error};
            outline-color: ${e.stroke.color.error};
            outline-offset: -${e.stroke.width.error};
          }
        `]}}
`;i(p)`
  ${()=>{const{tokens:t}=s(),{charactersCounter:o}=t;return r`
      width: 100%;
      color: ${o.color};
      text-align: ${o.textAlign};
    `}}
`;var I="0.4s",b=i.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return r`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[r`
        position: relative;
        width: ${o.inner.size[t].width};
        height: ${o.inner.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${o.inner.backgroundColor.base};
        border-radius: ${o.inner.size[t].height};
        margin: ${o.inner.size[t].margin};
        transition: transform ${I};

        ${b}:has(input:checked) && {
          transform: translateX(
            ${o.inner.size[t].uncheckedOffset}
          );
        }

        ${b}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`;i(p)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[r`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        text-align: right;
        padding-right: ${o.text.size[t].padding};
        transition: opacity ${I};

        ${b}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${b}:has(input:checked) && {
          opacity: 1;
        }

        ${b}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`;i(p)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return[r`
        position: absolute;
        width: 100%;
        color: ${o.text.color.base};
        padding-left: ${o.text.size[t].padding};
        transition: opacity ${I};

        ${b}:has(input:disabled) && {
          color: ${o.text.color.disabled};
        }

        ${b}:has(input:checked) && {
          opacity: 0;
        }

        ${b}:has(input:not(:checked)) && {
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return r`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=s();return r`
      width: ${o.size[t].width};
      background-color: transparent;
    `}}
`;export{p as T};
