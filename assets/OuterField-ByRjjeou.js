import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a as e,u as s,b as r}from"./index-D1OOBdzz.js";import{$ as a}from"./Button-DPtumZN7.js";import{a as l}from"./ListBox-Ch6RuDVl.js";import{u as d}from"./ScrollShadow.hooks-W2KsM_16.js";const i=e(a)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,p=e(i)`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return r`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${o.button.gap};
      padding-left: ${o.button.padding.left};
      padding-right: ${o.button.padding.right};
    `}}
`,k=e(l)`
  ${()=>{const t=d();return r`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`,u=e.div`
  ${()=>{const{tokens:t}=s(),{outerField:o}=t;return r`
      border-radius: ${o.radius};

      &:has(${i}[data-focus-visible]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,c=e.div`
  ${()=>{const{tokens:t}=s(),{outerField:o}=t;return r`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${o.gap};
      min-height: ${o.minHeight};
      border-radius: ${o.radius};
      outline-width: ${o.stroke.width.base};
      outline-style: ${o.stroke.style};
      outline-color: ${o.stroke.color.base};
      outline-offset: ${o.stroke.offset.base};
      background: ${o.backgroundColor};

      .react-aria-Select[data-invalid] & {
        outline-width: ${o.stroke.width.error};
        outline-color: ${o.stroke.color.error};
        outline-offset: ${o.stroke.offset.error};
      }

      &:has(${i}[data-hovered]) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-Select:where(:not([data-invalid]))[data-focused] & {
        outline-width: ${o.stroke.width.focus};
        outline-color: ${o.stroke.color.focus};
        outline-offset: ${o.stroke.offset.focus};
      }

      .react-aria-Select[data-disabled] & {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
      }
    `}}
`;function m(t){const{children:o}=t;return n.jsx(u,{children:n.jsx(c,{children:o})})}export{p as B,k as L,m as O,i as a};
