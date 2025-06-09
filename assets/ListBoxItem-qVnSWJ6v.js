import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a,u as r,b as t,p as u}from"./index-D1OOBdzz.js";import{e as $,T as h}from"./index-Cng6hRot.js";import{b,a as g}from"./Dialog-D7L8ikGJ.js";import{u as k}from"./OverlayContext-DE6V0lcf.js";import{b as f}from"./ListBox-BmY3IeC_.js";import{T as x}from"./Typography-BoEAGT7d.js";const I=a($)`
  ${()=>{const{tokens:e}=r(),{select:o}=e;return t`
      display: block;
      width: ${o.button.icon.width};
      height: ${o.button.icon.height};
      color: ${o.button.icon.color.base};

      .react-aria-Select [data-hovered] &,
      .react-aria-ComboBox [data-hovered] & {
        color: ${o.button.icon.color.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-ComboBox[data-open] & {
        color: ${o.button.icon.color.active};
        rotate: 180deg;
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${o.button.icon.color.disabled};
      }
    `}}
`;function R(){return n.jsx(I,{"aria-hidden":"true"})}const v=a(b)`
  ${({$width:e})=>{const{tokens:{select:o,scrollBar:{thumbColor:i,trackColor:s}}}=r();return[t`
        display: grid;
        grid-template-rows: 1fr;
        width: var(--trigger-width);
        border-radius: ${o.menu.radius};
        border-width: ${o.menu.stroke.width};
        border-style: ${o.menu.stroke.style};
        border-color: ${o.menu.stroke.color};
        box-shadow: 0px 2px 2px ${o.menu.shadow.outer.color};
        background: ${o.menu.backgroundColor.base};
        scrollbar-color: ${i} ${s};
        z-index: ${o.menu.zIndex};
        overflow: hidden;
      `,e&&t`
          width: ${e}px;
        `]}}
`,w=6,y=2,T=48,C=T*w,S=y+C;function A(e){const{width:o,...i}=e,{tokens:s}=r(),{select:l}=s,{portalElement:d}=k();return n.jsx(g,{getContainer:d&&(()=>d),children:n.jsx(v,{$width:o,maxHeight:S,offset:parseInt(l.gap,10),...i})})}const c=a(f)`
  ${()=>{const{tokens:e}=r(),{select:o}=e;return t`
      display: grid;
      min-height: ${o.menu.option.minHeight};
      padding: ${o.menu.option.padding};
      background: ${o.menu.option.backgroundColor.base};
      border-bottom-width: ${o.menu.separator.width};
      border-bottom-style: ${o.menu.separator.style};
      border-bottom-color: ${o.menu.separator.color};
      cursor: pointer;
      outline: none;

      &[data-disabled] {
        cursor: not-allowed;
      }

      &:last-of-type {
        border-bottom-color: transparent;
      }
    `}}
`,_=a.div`
  ${()=>{const{tokens:e}=r(),{select:o}=e;return t`
      display: grid;
      align-items: center;
      color: ${o.menu.option.inner.color.base};
      padding-top: ${o.menu.option.inner.padding.top};
      padding-left: ${o.menu.option.inner.padding.left};
      padding-right: ${o.menu.option.inner.padding.right};
      padding-bottom: ${o.menu.option.inner.padding.bottom};
      border-radius: ${o.menu.option.inner.radius};
      background: ${o.menu.option.inner.backgroundColor.base};
      outline-width: ${o.menu.option.inner.stroke.width};
      outline-style: ${o.menu.option.inner.stroke.style};
      outline-color: ${o.menu.option.inner.stroke.color.base};
      outline-offset: ${o.menu.option.inner.stroke.offset};
      overflow: hidden;

      ${c}[data-selected] & {
        background: ${o.menu.option.inner.backgroundColor.selected};
        outline-color: ${o.menu.option.inner.stroke.color.selected};
      }

      ${c}[data-hovered] &,
      ${c}[data-focus-visible] & {
        background: ${o.menu.option.inner.backgroundColor.hover};
        outline-color: ${o.menu.option.inner.stroke.color.hover};
      }

      ${c}[data-pressed] & {
        background: ${o.menu.option.inner.backgroundColor.active};
        outline-color: ${o.menu.option.inner.stroke.color.active};
      }

      ${c}[data-disabled] & {
        color: ${o.menu.option.inner.color.disabled};
      }
    `}}
`,j=a.div`
  ${({$withIcon:e})=>{const{tokens:o}=r(),{select:i}=o;return[t`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${i.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,e&&t`
          grid-template-columns: auto auto 1fr;
        `]}}
`,E=a.div`
  ${()=>{const{tokens:e}=r(),{select:o}=e;return[t`
        display: grid;
        place-items: center;
        width: ${o.menu.option.inner.tickIconWrapper.width};
        height: ${u(o.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,H=a(h)`
  ${()=>{const{tokens:e}=r(),{select:o}=e;return[t`
        width: ${o.menu.option.inner.tickIcon.width};
        height: ${o.menu.option.inner.tickIcon.height};
        color: ${o.menu.option.inner.tickIcon.color};
      `]}}
`,L=a.div`
  ${()=>{const{tokens:e}=r(),{select:o}=e;return[t`
        display: grid;
        place-items: center;
        margin-right: 4px;
        height: ${u(o.menu.option.inner.iconWrapper.height)};

        svg {
          width: ${o.menu.option.inner.icon.width};
          max-height: ${o.menu.option.inner.icon.maxHeight};
          color: ${o.menu.option.inner.icon.color};
          opacity  ${o.menu.option.inner.icon.opacity.base};

          ${c}[data-disabled] & {
            opacity: ${o.menu.option.inner.icon.opacity.disabled};
          }
        }
      `]}}
`;function F(e){const{icon:o,children:i,...s}=e,{tokens:l}=r(),{select:d}=l;return n.jsx(c,{...s,children:p=>{const{isSelected:m}=p;return n.jsx(_,{children:n.jsxs(j,{$withIcon:o!==void 0,children:[n.jsx(E,{children:m&&n.jsx(H,{"aria-hidden":"true"})}),o&&n.jsx(L,{children:o}),n.jsx(x,{component:"div",color:"inherit",variant:d.menu.option.inner.text.typography.variant,fontFamily:d.menu.option.inner.text.typography.fontFamily,children:typeof i=="function"?i(p):i})]})})}})}export{R as C,F as L,A as P};
