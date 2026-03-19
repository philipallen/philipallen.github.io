import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{u as l,l as n,d as r}from"./index-C1QKVHyt.js";import{T as a}from"./Typography-BK_ZjFCe.js";const p=r.div`
  ${()=>{const{tokens:e}=l(),{outerField:o}=e;return n`
      border-radius: ${o.radius};

      &:has(${s} [data-focused]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,m=r.div`
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

      &:has(${s} [data-invalid]) {
        outline-width: ${t.stroke.width.error};
        outline-color: ${t.stroke.color.error};
        outline-offset: ${t.stroke.offset.error};
      }

      &:has(${s}:hover),
      &:has(${u}:hover) {
        outline-width: ${t.stroke.width.hover};
        outline-color: ${t.stroke.color.hover};
        outline-offset: ${t.stroke.offset.hover};
      }

      &:has(${s} [data-focused]) {
        outline-width: ${t.stroke.width.active};
        outline-color: ${t.stroke.color.active};
        outline-offset: ${t.stroke.offset.active};
      }

      &:has(${s} [data-disabled]) {
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
`,s=r.div`
  ${({$buttonSlot:e})=>{const{tokens:o}=l(),{outerField:t}=o;return[n`
        display: flex;
        align-items: center;
        gap: ${t.column01.gap};
        padding-left: ${t.column01.padding.left};
        padding-right: ${t.column01.padding.right.base};
      `,e&&n`
          padding-right: ${t.column01.padding.right.withButton};
        `]}}
`,k=r(a).attrs({component:"div"})`
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
`,w=r(a).attrs({component:"div"})`
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
`,v=r.div`
  display: grid;
  align-items: center;
`,u=r.div`
  ${()=>{const{tokens:e}=l(),{outerField:o}=e;return n`
      display: grid;
      align-items: center;
      padding-right: ${o.column02.padding.right};
    `}}
`;function x(e){const{startSlot:o,innerButtonSlot:t,endSlot:c,buttonSlot:d,focusElement:h,isReadOnly:$,children:g}=e;function f(){h()}return i.jsx(p,{children:i.jsxs(m,{onClick:f,$isReadOnly:$,children:[i.jsxs(s,{$buttonSlot:d,children:[o&&i.jsx(k,{children:o}),g,t&&i.jsx(v,{children:t}),c&&i.jsx(w,{children:c})]}),d&&i.jsx(u,{children:d})]})})}export{x as O};
