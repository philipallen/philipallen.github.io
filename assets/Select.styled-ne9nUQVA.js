import{u as s,i as n,a}from"./index-BpMil6Tx.js";import{$ as r}from"./Button-BTZi05NT.js";import{$ as e}from"./ListBox-Y0CKnc0k.js";import{u as i}from"./ScrollShadow.hooks-IrBnYoiS.js";const d=a(r)`
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
