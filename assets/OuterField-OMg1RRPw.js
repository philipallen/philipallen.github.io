import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{a as r,u as i,b as s}from"./index-BVzVw2jm.js";const n=r.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return s`
      border-radius: ${o.radius};

      &:has(button[data-focus-visible]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,l=r.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return s`
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

      &:has(button[data-hovered]) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      .react-aria-Select[data-open] & {
        outline-width: ${o.stroke.width.active};
        outline-color: ${o.stroke.color.active};
        outline-offset: ${o.stroke.offset.active};
      }

      .react-aria-Select:where(:not([data-invalid]))[data-hovered] & {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      .react-aria-Select[data-disabled] & {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
      }
    `}}
`;function d(t){const{children:o}=t;return e.jsx(n,{children:e.jsx(l,{children:o})})}export{d as O};
