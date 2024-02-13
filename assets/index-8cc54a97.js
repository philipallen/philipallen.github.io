import{a as i,u as s,b as n,j as l}from"./index-771fcc08.js";import{r as h}from"./index-c013ead5.js";import{T as A,a as _}from"./index-d9c054de.js";import{m as E}from"./index-1225df13.js";import{C as D,M as z,T as P,a as W,b as M,c as H}from"./index-23ffefe9.js";/* empty css                         */import{$ as I}from"./import-9a74973a.js";i.div`
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
  ${({$variant:t})=>{const{tokens:e}=s(),{button:o}=e;return[n`
        height: ${o.height};
        max-width: 100%;
        padding-left: ${o.paddingLeft};
        padding-right: ${o.paddingRight};
        border-width: ${o.stroke.width};
        border-style: solid;
        border-color: transparent;
        border-radius: ${o.stroke.radius};
        user-select: none;
        cursor: pointer;
        outline-style: none;

        color: ${o.color[t].base};
        background-color: ${o.backgroundColor[t].base};

        &:disabled {
          pointer-events: none;
          opacity: ${o.opacity.disabled};
        }

        &:focus-visible:not(:active) {
          outline-width: ${o.focusRing.width};
          outline-style: solid;
          outline-color: ${o.focusRing.color[t]};
          outline-offset: ${o.focusRing.offset};
        }

        &:hover {
          color: ${o.color[t].hover};
          background-color: ${o.backgroundColor[t].hover};
        }

        &:active {
          color: ${o.color[t].active};
          background-color: ${o.backgroundColor[t].active};
        }
      `,(t==="secondary"||t==="secondaryAlt")&&n`
          border-color: ${o.stroke.color[t].base};

          &:hover {
            border-color: ${o.stroke.color[t].hover};
          }

          &:active {
            border-color: ${o.stroke.color[t].active};
          }
        `]}}
`;var N=i.p`
  ${({$variant:t,$fontFamily:e,$noWrap:o,$color:r})=>{const{tokens:d}=s(),{typography:a,fontFamily:c}=d;return[n`
        margin: 0;
        font-weight: normal;
        color: ${r||a.color[t]};
        font-size: ${a.fontSize[t]};
        line-height: ${a.lineHeight[t]};
        font-family: ${a.fontFamily[t]};
      `,e&&n`
          font-family: ${c[e]};
        `,o&&n`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,A.includes(t)&&n`
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
            font-family: ${_.includes(e)?c.OpenSansSemiBoldItalic:c.OpenSansItalic};

            & strong,
            & b {
              font-family: ${c.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function Y(t,e){const{variant:o,component:r,color:d,fontFamily:a,noWrap:c,testID:u,...p}=t;return l.jsx(N,{...p,ref:e,as:r,$variant:o,$color:d,$fontFamily:a,$noWrap:c,"data-testid":u})}var V=h.forwardRef(Y),G={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},X=h.forwardRef;function U(t,e){const{variant:o="bodyM",component:r,...d}=t;return l.jsx(V,{...d,ref:e,variant:o,component:r||G[o]})}var b=X(U),Z=i.div`
  ${({$gap:t="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${t};
  `}
`;function q(t){const{alert:e,gap:o,children:r}=t;return l.jsxs(Z,{$gap:o,children:[r,e&&e]})}var j=q,J=i.div`
  ${({$hasError:t})=>{const{tokens:e}=s(),{checkbox:o}=e;return[n`
        display: grid;
        place-items: center;
        width: ${o.width};
        height: ${o.height};
        border-radius: ${o.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;

        label:has(input:not(:checked)) && {
          background: ${o.backgroundColor.unchecked.base};
          outline-width: ${o.stroke.width.unchecked.base};
          outline-color: ${o.stroke.color.base};
        }

        label:hover:has(input:not(:checked):not(:indeterminate)) && {
          background: ${o.backgroundColor.unchecked.hover};
          outline-width: ${o.stroke.width.unchecked.hover};
          outline-color: ${o.stroke.color.hover};
        }

        label:has(input:not(:checked):disabled) && {
          background: ${o.backgroundColor.unchecked.disabled};
          outline-width: ${o.stroke.width.unchecked.disabled};
          outline-color: ${o.stroke.color.disabled};
        }

        label:has(input:checked) && {
          background: ${o.backgroundColor.checked.base};
          outline-width: ${o.stroke.width.checked.base};
          outline-color: ${o.stroke.color.base};
        }

        label:hover:has(input:checked) && {
          background: ${o.backgroundColor.checked.hover};
          outline-width: ${o.stroke.width.checked.hover};
          outline-color: ${o.stroke.color.hover};
        }

        label:has(input:checked:disabled) && {
          background: ${o.backgroundColor.checked.disabled};
          outline-width: ${o.stroke.width.checked.disabled};
          outline-color: ${o.stroke.color.disabled};
        }

        label:has(input:indeterminate) && {
          background: ${o.backgroundColor.checked.base};
          outline-width: ${o.stroke.width.checked.base};
          outline-color: ${o.stroke.color.base};
        }

        label:hover:has(input:indeterminate) && {
          background: ${o.backgroundColor.checked.hover};
          outline-width: ${o.stroke.width.checked.hover};
          outline-color: ${o.stroke.color.hover};
        }

        label:has(input:indeterminate:disabled) && {
          background: ${o.backgroundColor.checked.disabled};
          outline-width: ${o.stroke.width.checked.disabled};
          outline-color: ${o.stroke.color.disabled};
        }
      `,t&&n`
          label:has(input:not(:checked)) && {
            outline-width: ${o.stroke.width.unchecked.error};
            outline-color: ${o.stroke.color.error};
          }

          label:hover:has(input:not(:checked):not(:indeterminate)) && {
            outline-width: ${o.stroke.width.unchecked.hover};
            outline-color: ${o.stroke.color.hover};
          }

          label:has(input:checked) && {
            outline-width: ${o.stroke.width.checked.error};
            outline-color: ${o.stroke.color.error};
          }

          label:hover:has(input:checked:not(:indeterminate)) && {
            outline-width: ${o.stroke.width.checked.hover};
            outline-color: ${o.stroke.color.hover};
          }
        `]}}
`,Q=i(z)`
  ${()=>{const{tokens:t}=s(),{checkbox:e}=t;return[n`
        display: none;

        label:has(input:indeterminate) && {
          display: block;
          width: ${e.icon.width};
          height: ${e.icon.height};
          color: ${e.icon.color.base};
        }
      `]}}
`,K=i(P)`
  ${()=>{const{tokens:t}=s(),{checkbox:e}=t;return[n`
        display: none;

        label:has(input:checked:not(:indeterminate)) && {
          display: block;
          width: ${e.icon.width};
          height: ${e.icon.height};
          color: ${e.icon.color.base};
        }
      `]}}
`;function oo(t,e){h.useEffect(()=>{t.current&&(t.current.indeterminate=!!e)},[e])}var eo=i.label`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:e}=t;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      user-select: none;

      &:has(:disabled) {
        pointer-events: none;
      }

      &:has(:focus-visible) {
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
        border-radius: ${e.focusRing.radius};
      }
    `}}
`,to=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelRight:e}=t;return n`
      color: ${e.label.color.base};

      label:has(:disabled) && {
        color: ${e.label.color.disabled};
      }
    `}}
`;function ro(t){const{label:e,children:o,...r}=t,{tokens:d}=s(),{inputLabelRight:a}=d;return l.jsxs(eo,{...r,children:[l.jsx("div",{children:o}),l.jsx(to,{children:e&&l.jsx(b,{component:"span",color:"inherit",fontFamily:a.label.fontFamily,variant:a.label.typographyVariant,children:e})})]})}var C=ro,no=h.forwardRef((t,e)=>{const{hasError:o,isIndeterminate:r,labelProps:d,testID:a="checkbox",...c}=t,u=h.useRef(null);return oo(u,r),l.jsxs(C,{...d,children:[l.jsx(I,{children:l.jsx("input",{...c,ref:E([u,e]),type:"checkbox",onChange:p=>{var g;p.target.indeterminate=!!r,(g=c.onChange)==null||g.call(c,p)},"data-testid":a})}),l.jsxs(J,{$hasError:o,children:[l.jsx(Q,{}),l.jsx(K,{})]})]})}),io=no,ao=i.div`
  ${({$severity:t})=>{const{tokens:e}=s(),{inputAlert:o}=e;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${o.gap};
      color: ${o.color[t]};

      svg {
        width: ${o.icon.width};
        height: ${o.icon.height};
        color: ${o.icon.color[t]};
      }
    `}}
`,lo=i.div`
  ${()=>{const{tokens:t}=s(),{inputAlert:e}=t;return n`
      display: grid;
      place-content: center;
      height: ${e.iconWrapper.height};
    `}}
`;function so(t){const{severity:e,children:o,testID:r="input-alert"}=t;return l.jsxs(ao,{role:"alert",$severity:e,"data-testid":r,children:[l.jsx(lo,{children:l.jsx(W,{})}),l.jsx(b,{color:"inherit",children:o})]})}var L=so;h.forwardRef((t,e)=>{const{labelProps:o,alertProps:r,...d}=t,{testID:a="checkbox"}=d;return l.jsx(j,{alert:r?l.jsx(L,{...r,testID:`${a}-alert`}):void 0,children:l.jsx(io,{...d,ref:e,labelProps:o})})});i.fieldset`
  ${()=>{const{tokens:t}=s(),{fieldset:e}=t;return n`
      all: unset;
      display: grid;
      gap: ${e.gap};
    `}}
`;var co=i.ul`
  ${()=>{const{tokens:t}=s(),{fieldset:e}=t;return n`
      all: unset;
      display: grid;
      gap: ${e.list.gap};
    `}}
`;i(co)`
  ${()=>{const{tokens:t}=s(),{fieldset:e}=t;return n`
      padding-left: ${e.nestedList.paddingLeft};
    `}}
`;i.li`
  ${()=>{const{tokens:t}=s(),{fieldset:e}=t;return n`
      all: unset;
      display: grid;
      gap: ${e.list.gap};
    `}}
`;var R="1px",uo=i.div`
  ${({position:t})=>{const{tokens:e}=s(),{adornment:o,input:r}=e;return[n`
        width: ${o.width.small};
        color: ${o.color.base};

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
          border-right: ${R} solid ${r.stroke.color.base};
        `}
        ${t==="end"&&n`
          border-left: ${R} solid ${r.stroke.color.base};
        `};
      `]}}
`,m=t=>({id:t.id,className:t.className,"data-testid":t.testID}),ho=({children:t,position:e="start",...o})=>l.jsx(uo,{...m(o),position:e,children:t}),po=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,bo=i.input`
  ${({$error:t,$hasStartAdornment:e,$hasEndAdornment:o,$hasClearButton:r})=>{const{tokens:d}=s(),{input:a,adornment:c,clearButton:u}=d;return[n`
        height: ${a.height};
        width: 100%;
        padding-left: ${a.paddingLeft};
        padding-right: ${a.paddingRight};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        background-color: ${a.backgroundColor.base};
        color: ${a.color.base};

        border-style: ${a.stroke.style};
        border-width: ${a.stroke.width};
        border-color: ${a.stroke.color.base};

        padding-left: ${e?`calc(${c.width.small} + ${a.paddingLeft})`:a.paddingLeft};
        padding-right: ${o?`calc(${c.width.small} + ${a.paddingRight})`:r?u.width:a.paddingRight};
        outline: none;
        transition: border-color "0.25s"; // TODO candidate for design tokens?

        &:not(:disabled):read-only {
          border-color: ${a.stroke.color.readOnly};
        }

        &:disabled {
          background-color: ${a.backgroundColor.disabled};
          opacity: 0.7; // TODO candidate for design tokens?
          color: ${a.color.disabled};
          border-color: ${a.stroke.color.base};
          cursor: default;
        }

        &:not(:disabled):focus,
        &:not(:disabled):active {
          border-color: ${a.stroke.color.focus};
        }

        &::placeholder {
          color: ${a.color.placeholder};
        }
      `,t&&n`
          border-color: ${a.stroke.color.error};
          &:not(:disabled):focus,
          &:not(:disabled):active {
            border-color: ${a.stroke.color.error};
          }
        `]}}
`,go=i.div`
  ${()=>{const{tokens:t}=s(),{clearButton:e}=t;return n`
      width: ${e.width};
      height: ${e.height};
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
`,$o=({onClick:t,...e})=>{const{tokens:o}=s(),{clearButton:r}=o;return l.jsx(go,{...m(e),role:"button",onClick:t,children:l.jsx(D,{width:16,height:16,color:r.color.base})})},fo=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ko=i.div`
  ${()=>{const{tokens:t}=s(),{formElementContainer:e}=t;return[n`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${e.maxWidth};
      `]}}
`,vo=i.div`
  ${()=>{const{tokens:t}=s(),{fontFamily:e,themeColor:o}=t;return[n`
        font-family: ${e.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${o.ragRed};
        width: 100%;
      `]}}
`,mo=({elementId:t,labelId:e,labelText:o,errorText:r,children:d,labelTestId:a,...c})=>l.jsxs(fo,{...m(c),children:[o?l.jsx(b,{id:e,component:"label",htmlFor:t,testID:a,children:o}):null,l.jsxs(ko,{children:[d,r?l.jsx(vo,{children:r}):null]})]}),w=h.forwardRef(({hasClearButton:t=!0,startAdornment:e,endAdornment:o,isError:r,errorText:d,onChange:a,labelId:c,labelText:u,labelTestId:p,testID:g,...f},v)=>{const{disabled:$,readOnly:T,value:O="",id:S}=f,k=h.useRef(null),y=t&&!($||T)&&!!O;h.useImperativeHandle(v,()=>k.current);const B=()=>{typeof a=="function"&&a(""),k.current&&k.current.focus()},F=x=>{typeof a=="function"&&a(x.target.value,x)};return l.jsx(mo,{labelId:c,labelText:u,labelTestId:p,errorText:d,elementId:S,children:l.jsxs(po,{children:[e,l.jsx(bo,{...f,$hasClearButton:y,$hasStartAdornment:!!e,$hasEndAdornment:!!o,ref:k,$error:r||!!d,onChange:F,"data-testid":g}),y&&!o?l.jsx($o,{testID:"input-clear-button",onClick:B}):null,o]})})});w.displayName="Input";var wo=t=>{const e=parseFloat(t);return isNaN(e)?!1:Math.sign(e)<=0};i(({...t})=>l.jsx(w,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>wo(t)?"#b20000":void 0};
  }
`;var yo=i(w)`
  input {
    border-color: ${t=>t.$isFocused&&"#0000ff"};
  }
`,xo=i(M)`
  ${({$hasCursorPointer:t})=>{const{tokens:e}=s(),{adornment:o}=e;return n`
      cursor: ${t?"pointer":"default"};
      width: ${o.width.small};
      height: 16px;
    `}}
`,Ro=h.forwardRef(({value:t,onClick:e,isFocused:o,onChange:r,onFocus:d,onBlur:a,hasDatePicker:c=!1,onDatePickerKeyDown:u,...p},g)=>{const f=$=>{c&&(u==null||u($))},v=$=>{r&&r($)};return l.jsx(yo,{...p,ref:g,onChange:c?void 0:v,placeholder:"DD / MM / YYYY",onFocus:d||e,onBlur:a,onKeyDown:f,value:t,hasClearButton:!1,$isFocused:o,endAdornment:l.jsx(ho,{position:"end",children:l.jsx(xo,{$hasCursorPointer:c,color:o?"#0000ff":"#161616",onClick:e})})})});Ro.displayName="DateInputBase";i.div`
  position: absolute;
  // TODO is z-index a candidate for design tokens?
  z-index: 2;
`;var Io=i.div`
  ${({$hasError:t})=>{const{tokens:e}=s(),{radio:o}=e;return[n`
        display: grid;
        place-items: center;
        width: ${o.width};
        height: ${o.height};
        background: ${o.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${o.stroke.width.base};
        outline-style: solid;
        outline-color: ${o.stroke.color.base};
        outline-offset: -1px;

        label:hover && {
          outline-width: ${o.stroke.width.hover};
          outline-color: ${o.stroke.color.hover};
        }

        label:has(input:disabled) && {
          outline-width: ${o.stroke.width.disabled};
          outline-color: ${o.stroke.color.disabled};
        }
      `,t&&n`
          outline-width: ${o.stroke.width.error};
          outline-color: ${o.stroke.color.error};
        `]}}
`,jo=i.div`
  ${()=>{const{tokens:t}=s(),{radio:e}=t;return[n`
        display: none;
        width: ${e.icon.width};
        height: ${e.icon.height};
        background: ${e.icon.color.base};
        border-radius: 100%;

        label:has(input:checked) && {
          display: block;
        }

        label:hover:has(input:checked) && {
          background: ${e.icon.color.hover};
        }

        label:has(input:checked:disabled) && {
          background: ${e.icon.color.disabled};
        }
      `]}}
`,Co=h.forwardRef((t,e)=>{const{hasError:o,labelProps:r,testID:d="radio",...a}=t;return l.jsxs(C,{...r,children:[l.jsx(I,{children:l.jsx("input",{...a,ref:e,type:"radio","data-testid":d})}),l.jsx(Io,{$hasError:o,children:l.jsx(jo,{})})]})}),Lo=Co;h.forwardRef((t,e)=>{const{labelProps:o,alertProps:r,...d}=t,{testID:a="radio"}=d;return l.jsx(j,{alert:r?l.jsx(L,{...r,testID:`${a}-alert`}):void 0,children:l.jsx(Lo,{...d,ref:e,labelProps:o})})});i.select`
  ${({$isError:t})=>{const{tokens:e}=s(),{fontFamily:o,formElementContainer:r}=e;return[n`
        max-width: ${r.maxWidth};
        height: ${r.height};
        font-family: "${o.OpenSansRegular}";
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
      `,t&&n`
          &,
          &:focus,
          &:active {
            border: 1px solid #b20000;
            background-color: #ffffff;
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{fontFamily:e}=t;return n`
      font-family: "${e.OpenSansRegular}";
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;
      color: #b20000;
      padding-top: 5px;
      text-align: left;
      width: 100%;
    `}}
`;i(H)`
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
  ${({disabled:t,$backgroundSize:e})=>{const{tokens:o}=s(),{color:r}=o;function d(a){return a?r.groundGrey:r.digitalBlue}return n`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${r.groundGrey};
      border-radius: 2px;
      background-size: ${e};
      background-image: linear-gradient(
        ${d(t)},
        ${d(t)}
      );
      background-repeat: no-repeat;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        background-color: ${d(t)};
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
  ${()=>{const{tokens:t}=s(),{formElementContainer:e}=t;return n`
      max-width: ${e.maxWidth};
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
  ${()=>{const{tokens:t}=s(),{tabs:e}=t;return n`
      display: none;
      border-top-left-radius: ${e.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${e.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${e.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${e.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${e.tab.focusRing.width};
        outline-style: ${e.tab.focusRing.style};
        outline-color: ${e.tab.focusRing.color};
        outline-offset: ${e.tab.focusRing.offset};
      }
    `}}
`;i.div`
  ${({$withIcon:t,$isActive:e})=>{const{tokens:o}=s(),{tabs:r}=o;return[n`
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
        `,e&&n`
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
  ${({$isActive:t})=>{const{tokens:e}=s(),{tabs:o}=e;return[n`
        color: ${o.tab.label.color.base};

        label:hover && {
          color: ${o.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${o.tab.label.color.disabled};
        }
      `,t&&n`
          color: ${o.tab.label.color.active};

          label:hover && {
            color: ${o.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${o.tab.label.color.disabled};
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:e}=t;return n`
      color: ${e.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${e.tab.secondaryLabel.color.disabled};
      }
    `}}
`;i.div`
  ${({$isActive:t})=>{const{tokens:e}=s(),{tabs:o}=e;return[n`
        display: grid;
        place-items: center;

        svg {
          width: ${o.tab.icon.width};
          height: ${o.tab.icon.height};
          color: ${o.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${o.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${o.tab.icon.color.disabled};
          }
        }
      `,t&&n`
          svg {
            color: ${o.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${o.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${o.tab.icon.color.disabled};
            }
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:e}=t;return n`
      width: ${e.tab.separator.width};
      background-color: ${e.tab.separator.color};
      margin-top: ${e.tab.separator.marginTop};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{tabs:e}=t;return n`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`;i.div`
  ${({$withIcon:t,$isActive:e,$withPadding:o})=>{const{tokens:r}=s(),{tabs:d}=r;return[n`
        display: ${e?"block":"none"};
        background: ${d.panel.backgroundColor};
      `,o&&n`
          padding-top: ${d.panel.padding.top};
          padding-bottom: ${d.panel.padding.bottom};
          padding-left: ${d.panel.padding.left.base};
          padding-right: ${d.panel.padding.right.base};
        `,o&&t&&n`
          padding-left: ${d.panel.padding.left.withIcon};
          padding-right: ${d.panel.padding.right.withIcon};
        `]}}
`;var To=i.label`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:e}=t;return n`
      width: 100%;
      display: grid;
      gap: ${e.gap};
      user-select: none;

      &:has(:disabled) {
        pointer-events: none;
      }
    `}}
`,Oo=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:e}=t;return n`
      color: ${e.label.color.base};
    `}}
`,So=i.div`
  ${()=>{const{tokens:t}=s(),{inputLabelTop:e}=t;return n`
      color: ${e.labelHint.color.base};
    `}}
`;function Bo(t){const{label:e,labelHint:o,children:r,...d}=t,{tokens:a}=s(),{inputLabelTop:c}=a;return l.jsxs(To,{...d,children:[l.jsxs("div",{children:[e&&l.jsx(Oo,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:c.label.fontFamily,variant:c.label.typographyVariant,children:e})}),o&&l.jsx(So,{children:l.jsx(b,{component:"span",color:"inherit",fontFamily:c.labelHint.fontFamily,variant:c.labelHint.typographyVariant,children:o})})]}),l.jsx("div",{children:r})]})}var Fo=Bo;i(Fo)`
  ${()=>n`
      width: 100%;
    `}
`;i.div`
  ${()=>{const{tokens:t}=s(),{textInput:e}=t;return n`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`;i.input`
  ${()=>{const{tokens:t}=s(),{textInput:e,typography:o}=t,r=e.typographyVariant;return n`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${o.fontFamily[r]};
      font-size: ${o.fontSize[r]};
      line-height: ${o.lineHeight[r]};

      label:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`;i(b)`
  ${()=>{const{tokens:t}=s(),{textInput:e}=t;return n`
      margin-right: ${e.prefix.marginRight};
    `}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{textInput:e}=t;return n`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;i.div`
  ${({$hasError:t})=>{const{tokens:e}=s(),{outerField:o}=e;return[n`
        width: 100%;
        background: ${o.backgroundColor};

        outline-color: ${o.stroke.color.base};
        outline-width: ${o.stroke.width.base};
        outline-style: ${o.stroke.style};
        border-radius: ${o.radius};

        label:hover && {
          outline-color: ${o.stroke.color.hover};
          outline-width: ${o.stroke.width.hover};
          outline-offset: -${o.stroke.width.hover};
        }

        label:has(input:read-only) && {
          outline-color: ${o.stroke.color.readOnly};
        }

        label:has(input:focus) && {
          outline-color: ${o.stroke.color.focus};
          outline-width: ${o.stroke.width.focus};
          outline-offset: -${o.stroke.width.focus};
        }
      `,t&&n`
          &&,
          label:has(input:read-only) &&,
          label:has(input:focus) && {
            outline-width: ${o.stroke.width.error};
            outline-color: ${o.stroke.color.error};
            outline-offset: -${o.stroke.width.error};
          }
        `]}}
`;i.div`
  ${()=>{const{tokens:t}=s(),{outerField:e}=t;return n`
      width: 100%;

      outline-color: ${e.focusRing.color};
      outline-width: ${e.focusRing.width.base};
      outline-style: ${e.focusRing.style};
      outline-offset: ${e.focusRing.offset.base};
      border-radius: ${e.radius};

      label:has(input:focus) && {
        outline-width: ${e.focusRing.width.focus};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`;i(b)`
  ${()=>{const{tokens:t}=s(),{charactersCounter:e}=t;return n`
      width: 100%;
      color: ${e.color};
      text-align: ${e.textAlign};
    `}}
`;export{b as T};
