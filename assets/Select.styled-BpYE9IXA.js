import{u as s,l as n,d as e}from"./index-DO5xE0d-.js";import{$ as a}from"./Button-T8IefSzn.js";import{$ as r}from"./ListBox-KxFc8pjw.js";import{u as i}from"./ScrollShadow.hooks-BneRXakm.js";const d=e(a)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,$=e(d)`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return n`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${o.button.gap};
      padding-left: ${o.button.padding.left};
      padding-right: ${o.button.padding.right};
    `}}
`,g=e(r)`
  ${()=>{const t=i();return n`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`;export{$ as B,g as L,d as a};
