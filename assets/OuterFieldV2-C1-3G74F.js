import{j as i}from"./jsx-runtime-sfY7k0Xq.js";import{a as s,u as l,b as n}from"./index-D1OOBdzz.js";import{T as c}from"./Typography-BoEAGT7d.js";const f=s.div`
  ${()=>{const{tokens:t}=l(),{outerField:o}=t;return n`
      border-radius: ${o.radius};

      &:has(${r} [data-focused]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,g=s.div`
  ${()=>{const{tokens:t}=l(),{outerField:o}=t;return n`
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

      &:has(${r} [data-invalid]) {
        outline-width: ${o.stroke.width.error};
        outline-color: ${o.stroke.color.error};
        outline-offset: ${o.stroke.offset.error};
      }

      &:has(${r}:hover),
      &:has(${u}:hover) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      &:has(${r} [data-focused]) {
        outline-width: ${o.stroke.width.focus};
        outline-color: ${o.stroke.color.focus};
        outline-offset: ${o.stroke.offset.focus};
      }

      &:has(${r} [data-disabled]) {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
        cursor: not-allowed;
      }
    `}}
`,r=s.div`
  ${({$buttonSlot:t})=>{const{tokens:o}=l(),{outerField:e}=o;return[n`
        display: flex;
        align-items: center;
        gap: ${e.column01.gap};
        padding-left: ${e.column01.padding.left};
        padding-right: ${e.column01.padding.right.base};
      `,t&&n`
          padding-right: ${e.column01.padding.right.withButton};
        `]}}
`,m=s(c).attrs({component:"div"})`
  ${()=>{const{tokens:t}=l(),{outerField:o}=t;return n`
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
`,p=s(c).attrs({component:"div"})`
  ${()=>{const{tokens:t}=l(),{outerField:o}=t;return n`
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
`,u=s.div`
  ${()=>{const{tokens:t}=l(),{outerField:o}=t;return n`
      display: grid;
      align-items: center;
      padding-right: ${o.column02.padding.right};
    `}}
`;function b(t){const{startSlot:o,endSlot:e,buttonSlot:d,focusElement:a,children:h}=t;function $(){a()}return i.jsx(f,{children:i.jsxs(g,{onClick:$,children:[i.jsxs(r,{$buttonSlot:d,children:[o&&i.jsx(m,{children:o}),h,e&&i.jsx(p,{children:e})]}),d&&i.jsx(u,{children:d})]})})}export{b as O};
