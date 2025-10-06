import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{a as c,u as r,b as i,p}from"./index-BVzVw2jm.js";import{b as $}from"./ListBox-BTSqjZ8H.js";import{T as h}from"./index-Do3d1oBb.js";import{T as g}from"./Typography-DZZq2lFF.js";const t=c($)`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return i`
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
`,b=c.div`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return i`
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

      ${t}[data-selected] & {
        background: ${o.menu.option.inner.backgroundColor.selected};
        outline-color: ${o.menu.option.inner.stroke.color.selected};
      }

      ${t}[data-hovered] &,
      ${t}[data-focus-visible] & {
        background: ${o.menu.option.inner.backgroundColor.hover};
        outline-color: ${o.menu.option.inner.stroke.color.hover};
      }

      ${t}[data-pressed] & {
        background: ${o.menu.option.inner.backgroundColor.active};
        outline-color: ${o.menu.option.inner.stroke.color.active};
      }

      ${t}[data-disabled] & {
        color: ${o.menu.option.inner.color.disabled};
      }
    `}}
`,k=c.div`
  ${({$withIcon:n})=>{const{tokens:o}=r(),{select:a}=o;return[i`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${a.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,n&&i`
          grid-template-columns: auto auto 1fr;
        `]}}
`,y=c.div`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return[i`
        display: grid;
        place-items: center;
        width: ${o.menu.option.inner.tickIconWrapper.width};
        height: ${p(o.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,f=c(h)`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return[i`
        width: ${o.menu.option.inner.tickIcon.width};
        height: ${o.menu.option.inner.tickIcon.height};
        color: ${o.menu.option.inner.tickIcon.color};
      `]}}
`,x=c.div`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return[i`
        display: grid;
        place-items: center;
        margin-right: 4px;
        height: ${p(o.menu.option.inner.iconWrapper.height)};

        svg {
          width: ${o.menu.option.inner.icon.width};
          max-height: ${o.menu.option.inner.icon.maxHeight};
          color: ${o.menu.option.inner.icon.color};
          opacity  ${o.menu.option.inner.icon.opacity.base};

          ${t}[data-disabled] & {
            opacity: ${o.menu.option.inner.icon.opacity.disabled};
          }
        }
      `]}}
`;function C(n){const{icon:o,children:a,...l}=n,{tokens:u}=r(),{select:s}=u;return e.jsx(t,{...l,children:d=>{const{isSelected:m}=d;return e.jsx(b,{children:e.jsxs(k,{$withIcon:o!==void 0,children:[e.jsx(y,{children:m&&e.jsx(f,{"aria-hidden":"true"})}),o&&e.jsx(x,{children:o}),e.jsx(g,{component:"div",color:"inherit",variant:s.menu.option.inner.text.typography.variant,fontFamily:s.menu.option.inner.text.typography.fontFamily,children:typeof a=="function"?a(d):a})]})})}})}export{C as L};
