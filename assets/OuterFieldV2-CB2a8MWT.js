import{a as s,u as i,p as u,b as n}from"./index-CzvSJj6w.js";import{$ as g}from"./Input-J5UCKjK-.js";import{j as l}from"./jsx-runtime-DQ32znRX.js";import{T as h}from"./Typography-Dt8pkH_V.js";const F=s(g)`
  ${()=>{const{tokens:t}=i(),{textInput:o,typography:e}=t,r=o.typography.variant,d=u(e.fontSize[r]),a=u(e.lineHeight[r]);return n`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${e.fontFamily[r]};
      font-size: ${d};
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

      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }

      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        -webkit-appearance: none;
      }
    `}}
`,p=s.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
      border-radius: ${o.radius};

      &:has(${c} [data-focused]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,m=s.div`
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

      &:has(${c} [data-invalid]) {
        outline-width: ${o.stroke.width.error};
        outline-color: ${o.stroke.color.error};
        outline-offset: ${o.stroke.offset.error};
      }

      &:has(${c}:hover),
      &:has(${$}:hover) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      &:has(${c} [data-focused]) {
        outline-width: ${o.stroke.width.focus};
        outline-color: ${o.stroke.color.focus};
        outline-offset: ${o.stroke.offset.focus};
      }

      &:has(${c} [data-disabled]) {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
        cursor: not-allowed;
      }
    `}}
`,c=s.div`
  ${({$buttonSlot:t})=>{const{tokens:o}=i(),{outerField:e}=o;return[n`
        display: flex;
        align-items: center;
        gap: ${e.column01.gap};
        padding-left: ${e.column01.padding.left};
        padding-right: ${e.column01.padding.right.base};
      `,t&&n`
          padding-right: ${e.column01.padding.right.withButton};
        `]}}
`,k=s(h).attrs({component:"div"})`
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

      svg {
        display: block;
        width: ${o.column01.startSlot.width};
        height: ${o.column01.startSlot.height};
      }
    `}}
`,w=s(h).attrs({component:"div"})`
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

      svg {
        display: block;
        width: ${o.column01.endSlot.width};
        height: ${o.column01.endSlot.height};
      }
    `}}
`,$=s.div`
  ${()=>{const{tokens:t}=i(),{outerField:o}=t;return n`
      display: grid;
      align-items: center;
      padding-right: ${o.column02.padding.right};
    `}}
`;function b(t){const{startSlot:o,endSlot:e,buttonSlot:r,focusElement:d,children:a}=t;function f(){d()}return l.jsx(p,{children:l.jsxs(m,{onClick:f,children:[l.jsxs(c,{$buttonSlot:r,children:[o&&l.jsx(k,{children:o}),a,e&&l.jsx(w,{children:e})]}),r&&l.jsx($,{children:r})]})})}b.__docgenInfo={description:"",methods:[],displayName:"OuterFieldV2"};export{F as I,b as O};
