import{a,u as n,b as e}from"./index-Dwsyfx_g.js";import{$ as s}from"./Button-DHrRVfeM.js";import{a as r}from"./ListBox-fUycZjtt.js";import{u as i}from"./ScrollShadow.hooks-ggsIV_6p.js";const d=a(s)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,g=a(d)`
  ${()=>{const{tokens:t}=n(),{select:o}=t;return e`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${o.button.gap};
      padding-left: ${o.button.padding.left};
      padding-right: ${o.button.padding.right};
    `}}
`,$=a(r)`
  ${()=>{const t=i();return e`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`;export{g as B,$ as L,d as a};
