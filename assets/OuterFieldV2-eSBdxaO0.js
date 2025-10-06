import{j as i}from"./jsx-runtime-sfY7k0Xq.js";import{a as s,u as l,b as n}from"./index-BVzVw2jm.js";import{T as c}from"./Typography-DZZq2lFF.js";const g=s.div`
  ${()=>{const{tokens:e}=l(),{outerField:o}=e;return n`
      border-radius: ${o.radius};

      &:has(${r} [data-focused]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,m=s.div`
  ${({$isReadOnly:e})=>{const{tokens:o}=l(),{outerField:t}=o;return n`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${t.gap};
      min-height: ${t.minHeight};
      border-radius: ${t.radius};
      outline-width: ${t.stroke.width.base};
      outline-style: ${t.stroke.style};
      outline-color: ${t.stroke.color.base};
      outline-offset: ${t.stroke.offset.base};
      background: ${t.backgroundColor};
      cursor: text;

      &:has(${r} [data-invalid]) {
        outline-width: ${t.stroke.width.error};
        outline-color: ${t.stroke.color.error};
        outline-offset: ${t.stroke.offset.error};
      }

      &:has(${r}:hover),
      &:has(${a}:hover) {
        outline-width: ${t.stroke.width.hover};
        outline-color: ${t.stroke.color.hover};
        outline-offset: ${t.stroke.offset.hover};
      }

      &:has(${r} [data-focused]) {
        outline-width: ${t.stroke.width.active};
        outline-color: ${t.stroke.color.active};
        outline-offset: ${t.stroke.offset.active};
      }

      &:has(${r} [data-disabled]) {
        outline-width: ${t.stroke.width.base};
        outline-color: ${t.stroke.color.disabled};
        outline-offset: ${t.stroke.offset.base};
        cursor: not-allowed;
      }

      ${e&&n`
        outline-width: ${t.stroke.width.base};
        outline-color: ${t.stroke.color.readOnly};
        outline-offset: ${t.stroke.offset.base};
        cursor: not-allowed;
      `}
    `}}
`,r=s.div`
  ${({$buttonSlot:e})=>{const{tokens:o}=l(),{outerField:t}=o;return[n`
        display: flex;
        align-items: center;
        gap: ${t.column01.gap};
        padding-left: ${t.column01.padding.left};
        padding-right: ${t.column01.padding.right.base};
      `,e&&n`
          padding-right: ${t.column01.padding.right.withButton};
        `]}}
`,p=s(c).attrs({component:"div"})`
  ${()=>{const{tokens:e}=l(),{outerField:o}=e;return n`
      display: grid;
      align-items: center;
      flex-shrink: 0;
      width: ${o.column01.startSlot.width};
      height: ${o.column01.startSlot.height};
      color: ${o.column01.startSlot.color};
      pointer-events: none;
      user-select: none;
      overflow: hidden;
      line-height: 1;

      svg {
        display: block;
        width: ${o.column01.startSlot.width};
        height: ${o.column01.startSlot.height};
      }
    `}}
`,k=s(c).attrs({component:"div"})`
  ${()=>{const{tokens:e}=l(),{outerField:o}=e;return n`
      display: grid;
      align-items: center;
      flex-shrink: 0;
      width: ${o.column01.endSlot.width};
      height: ${o.column01.endSlot.height};
      color: ${o.column01.endSlot.color};
      pointer-events: none;
      user-select: none;
      overflow: hidden;
      line-height: 1;

      svg {
        display: block;
        width: ${o.column01.endSlot.width};
        height: ${o.column01.endSlot.height};
      }
    `}}
`,a=s.div`
  ${()=>{const{tokens:e}=l(),{outerField:o}=e;return n`
      display: grid;
      align-items: center;
      padding-right: ${o.column02.padding.right};
    `}}
`;function S(e){const{startSlot:o,endSlot:t,buttonSlot:d,focusElement:u,isReadOnly:h,children:$}=e;function f(){u()}return i.jsx(g,{children:i.jsxs(m,{onClick:f,$isReadOnly:h,children:[i.jsxs(r,{$buttonSlot:d,children:[o&&i.jsx(p,{children:o}),$,t&&i.jsx(k,{children:t})]}),d&&i.jsx(a,{children:d})]})})}export{S as O};
