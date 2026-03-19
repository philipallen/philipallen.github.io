import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{u as r,l as i,d as c,p}from"./index-C1QKVHyt.js";import{a as h}from"./ListBox-BPkSMD1Y.js";import{T as g}from"./index-B_KGh3jf.js";import{T as b}from"./Typography-BK_ZjFCe.js";const t=c(h)`
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
`,k=c.div`
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
`,y=c.div`
  ${({$withIcon:n})=>{const{tokens:o}=r(),{select:s}=o;return[i`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${s.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,n&&i`
          grid-template-columns: auto auto 1fr;
        `]}}
`,f=c.div`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return[i`
        display: grid;
        place-items: center;
        width: ${o.menu.option.inner.tickIconWrapper.width};
        height: ${p(o.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,x=c(g)`
  ${()=>{const{tokens:n}=r(),{select:o}=n;return[i`
        width: ${o.menu.option.inner.tickIcon.width};
        height: ${o.menu.option.inner.tickIcon.height};
        color: ${o.menu.option.inner.tickIcon.color};
      `]}}
`,v=c.div`
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
`;function W(n){const{icon:o,children:s,isDisabled:l,...u}=n,{tokens:m}=r(),{select:a}=m;return e.jsx(t,{isDisabled:l,...u,children:d=>{const{isSelected:$}=d;return e.jsx(k,{children:e.jsxs(y,{$withIcon:o!==void 0,children:[e.jsx(f,{children:$&&e.jsx(x,{"aria-hidden":"true"})}),o&&e.jsx(v,{children:o}),e.jsx(b,{component:"div",color:"inherit",variant:a.menu.option.inner.text.typography.variant,fontFamily:a.menu.option.inner.text.typography.fontFamily,children:typeof s=="function"?s(d):s})]})})}})}export{W as L};
