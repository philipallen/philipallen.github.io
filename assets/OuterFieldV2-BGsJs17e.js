import{a as r,u as i,p as u,b as n}from"./index-CzvSJj6w.js";import{$ as g}from"./Input-Bz8SL9gO.js";import{j as l}from"./jsx-runtime-DQ32znRX.js";import{T as h}from"./Typography-RMDmhaRB.js";const C=r(g)`
  ${()=>{const{tokens:t}=i(),{textInput:o,typography:e}=t,s=o.typography.variant,c=u(e.fontSize[s]),a=u(e.lineHeight[s]);return n`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${e.fontFamily[s]};
      font-size: ${c};
      line-height: ${a};

      &[data-readonly] {
        color: ${o.color.readOnly};
      }

      &[data-disabled] {
        color: ${o.color.disabled};
      }

      &::placeholder {
        color: ${o.color.placeholder};
      }
    `}}
`,F=r.div`
  ${()=>{const{tokens:t}=i(),{spacing:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`,p=r.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
      border-radius: ${o.radius};

      &:has(${d} [data-focused]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,m=r.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
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

      &:has(${d} [data-invalid]) {
        outline-width: ${o.stroke.width.error};
        outline-color: ${o.stroke.color.error};
        outline-offset: ${o.stroke.offset.error};
      }

      &:has(${d}:hover),
      &:has(${$}:hover) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      &:has(${d} [data-focused]) {
        outline-width: ${o.stroke.width.focus};
        outline-color: ${o.stroke.color.focus};
        outline-offset: ${o.stroke.offset.focus};
      }

      &:has(${d} [data-disabled]) {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
        cursor: not-allowed;
      }
    `}}
`,d=r.div`
  ${({$buttonSlot:t})=>{const{tokens:o}=i(),{outerField:e}=o;return[n`
        display: flex;
        align-items: center;
        gap: ${e.column01.gap};
        padding-left: ${e.column01.padding.left};
        padding-right: ${e.column01.padding.right.base};
      `,t&&n`
          padding-right: ${e.column01.padding.right.withButton};
        `]}}
`,k=r(h).attrs({component:"div"})`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
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
`,w=r(h).attrs({component:"div"})`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
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
`,$=r.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
      display: grid;
      align-items: center;
      padding-right: ${o.column02.padding.right};
    `}}
`;function y(t){const{startSlot:o,endSlot:e,buttonSlot:s,focusElement:c,children:a}=t;function f(){c()}return l.jsx(p,{children:l.jsxs(m,{onClick:f,children:[l.jsxs(d,{$buttonSlot:s,children:[o&&l.jsx(k,{children:o}),a,e&&l.jsx(w,{children:e})]}),s&&l.jsx($,{children:s})]})})}y.__docgenInfo={description:"",methods:[],displayName:"OuterFieldV2"};export{F as C,C as I,y as O};
