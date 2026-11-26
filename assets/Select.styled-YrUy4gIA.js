import{u as s,i as n,a}from"./index-BRwMcuml.js";import{$ as r}from"./Button-BzFa2UX0.js";import{$ as e}from"./ListBox-c1YHq7Zo.js";import{u as i}from"./ScrollShadow.hooks-BC8x-UmR.js";const d=a(r)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,$=a(d)`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return n`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${o.button.gap};
      padding-left: ${o.button.padding.left};
      padding-right: ${o.button.padding.right};
    `}}
`,f=a(e)`
  ${()=>{const t=i();return n`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`;export{$ as B,f as L,d as a};
