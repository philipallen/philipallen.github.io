import{j as i}from"./jsx-runtime-sfY7k0Xq.js";import{a as r,u as l,b as n}from"./index-BHlkTKmU.js";import{T as c}from"./Typography-CYNqbWwa.js";const g=r.div`
  ${()=>{const{tokens:e}=l(),{outerField:t}=e;return n`
      border-radius: ${t.radius};

      &:has(${s} [data-focused]) {
        outline-width: ${t.focusRing.width.focus};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset.focus};
      }
    `}}
`,m=r.div`
  ${({$isReadOnly:e})=>{const{tokens:t}=l(),{outerField:o}=t;return n`
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
      cursor: text;

      &:has(${s} [data-invalid]) {
        outline-width: ${o.stroke.width.error};
        outline-color: ${o.stroke.color.error};
        outline-offset: ${o.stroke.offset.error};
      }

      &:has(${s}:hover),
      &:has(${u}:hover) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      &:has(${s} [data-focused]) {
        outline-width: ${o.stroke.width.focus};
        outline-color: ${o.stroke.color.focus};
        outline-offset: ${o.stroke.offset.focus};
      }

      &:has(${s} [data-disabled]) {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
        cursor: not-allowed;
      }

      ${e&&n`
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.readOnly};
        outline-offset: ${o.stroke.offset.base};
        cursor: not-allowed;
      `}
    `}}
`,s=r.div`
  ${({$buttonSlot:e})=>{const{tokens:t}=l(),{outerField:o}=t;return[n`
        display: flex;
        align-items: center;
        gap: ${o.column01.gap};
        padding-left: ${o.column01.padding.left};
        padding-right: ${o.column01.padding.right.base};
      `,e&&n`
          padding-right: ${o.column01.padding.right.withButton};
        `]}}
`,p=r(c).attrs({component:"div"})`
  ${()=>{const{tokens:e}=l(),{outerField:t}=e;return n`
      display: grid;
      align-items: center;
      flex-shrink: 0;
      width: ${t.column01.startSlot.width};
      height: ${t.column01.startSlot.height};
      color: ${t.column01.startSlot.color};
      pointer-events: none;
      user-select: none;
      overflow: hidden;
      line-height: 1;

      svg {
        display: block;
        width: ${t.column01.startSlot.width};
        height: ${t.column01.startSlot.height};
      }
    `}}
`,k=r(c).attrs({component:"div"})`
  ${()=>{const{tokens:e}=l(),{outerField:t}=e;return n`
      display: grid;
      align-items: center;
      flex-shrink: 0;
      width: ${t.column01.endSlot.width};
      height: ${t.column01.endSlot.height};
      color: ${t.column01.endSlot.color};
      pointer-events: none;
      user-select: none;
      overflow: hidden;
      line-height: 1;

      svg {
        display: block;
        width: ${t.column01.endSlot.width};
        height: ${t.column01.endSlot.height};
      }
    `}}
`,u=r.div`
  ${()=>{const{tokens:e}=l(),{outerField:t}=e;return n`
      display: grid;
      align-items: center;
      padding-right: ${t.column02.padding.right};
    `}}
`;function S(e){const{startSlot:t,endSlot:o,buttonSlot:d,focusElement:a,isReadOnly:h,children:$}=e;function f(){a()}return i.jsx(g,{children:i.jsxs(m,{onClick:f,$isReadOnly:h,children:[i.jsxs(s,{$buttonSlot:d,children:[t&&i.jsx(p,{children:t}),$,o&&i.jsx(k,{children:o})]}),d&&i.jsx(u,{children:d})]})})}export{S as O};
