import{j as r}from"./jsx-runtime-BkBIjjFT.js";import{a,u as e,b as i,p}from"./index-DT8u_GqS.js";import{e as $,T as h}from"./index-qhhwF6MA.js";import{$ as b}from"./Dialog-CL2ju9PL.js";import{u as g}from"./OverlayContext-CQkNAI0D.js";import{b as k}from"./ListBox-Zuz559Ke.js";import{T as f}from"./Typography-wg1R8lvT.js";const x=a($)`
  ${()=>{const{tokens:n}=e(),{select:o}=n;return i`
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
`;function D(){return r.jsx(x,{"aria-hidden":"true"})}const I=a(b)`
  ${()=>{const{tokens:{select:n,scrollBar:{thumbColor:o,trackColor:t}}}=e();return i`
      display: grid;
      grid-template-rows: 1fr;
      width: var(--trigger-width);
      border-radius: ${n.menu.radius};
      border-width: ${n.menu.stroke.width};
      border-style: ${n.menu.stroke.style};
      border-color: ${n.menu.stroke.color};
      box-shadow: 0px 2px 2px ${n.menu.shadow.outer.color};
      background: ${n.menu.backgroundColor.base};
      scrollbar-color: ${o} ${t};
      z-index: ${n.menu.zIndex};
      overflow: hidden;
    `}}
`,v=6,y=2,w=48,T=w*v,C=y+T;function P(n){const{tokens:o}=e(),{select:t}=o,{portalElement:s}=g();return r.jsx(I,{maxHeight:C,offset:parseInt(t.gap,10),UNSTABLE_portalContainer:s,...n})}const c=a(k)`
  ${()=>{const{tokens:n}=e(),{select:o}=n;return i`
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
`,S=a.div`
  ${()=>{const{tokens:n}=e(),{select:o}=n;return i`
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

      ${c}:not([data-disabled])[data-pressed] & {
        background: ${o.menu.option.inner.backgroundColor.active};
        outline-color: ${o.menu.option.inner.stroke.color.active};
      }

      ${c}[data-disabled] & {
        color: ${o.menu.option.inner.color.disabled};
      }
    `}}
`,_=a.div`
  ${({$withIcon:n})=>{const{tokens:o}=e(),{select:t}=o;return[i`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${t.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,n&&i`
          grid-template-columns: auto auto 1fr;
        `]}}
`,E=a.div`
  ${()=>{const{tokens:n}=e(),{select:o}=n;return[i`
        display: grid;
        place-items: center;
        width: ${o.menu.option.inner.tickIconWrapper.width};
        height: ${p(o.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,j=a(h)`
  ${()=>{const{tokens:n}=e(),{select:o}=n;return[i`
        width: ${o.menu.option.inner.tickIcon.width};
        height: ${o.menu.option.inner.tickIcon.height};
        color: ${o.menu.option.inner.tickIcon.color};
      `]}}
`,H=a.div`
  ${()=>{const{tokens:n}=e(),{select:o}=n;return[i`
        display: grid;
        place-items: center;
        margin-right: 4px;
        height: ${p(o.menu.option.inner.iconWrapper.height)};

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
`;function R(n){const{icon:o,children:t,...s}=n,{tokens:u}=e(),{select:d}=u;return r.jsx(c,{...s,children:l=>{const{isSelected:m}=l;return r.jsx(S,{children:r.jsxs(_,{$withIcon:o!==void 0,children:[r.jsx(E,{children:m&&r.jsx(j,{"aria-hidden":"true"})}),o&&r.jsx(H,{children:o}),r.jsx(f,{component:"div",color:"inherit",variant:d.menu.option.inner.text.typography.variant,fontFamily:d.menu.option.inner.text.typography.fontFamily,children:typeof t=="function"?t(l):t})]})})}})}export{D as C,R as L,P};
