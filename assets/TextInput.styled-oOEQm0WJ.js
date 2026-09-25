import{u as n,i as s,a as i,p as r}from"./index-BpMil6Tx.js";import{$ as d}from"./Input-DAn3HBs7.js";const h=i(d)`
  ${()=>{const{tokens:t}=n(),{textInput:o,typography:a}=t,e=o.typography.variant,l=r(a.fontSize[e]),c=r(a.lineHeight[e]);return s`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${a.fontFamily[e]};
      font-size: ${l};
      line-height: ${c};

      &[data-readonly] {
        color: ${o.color.readOnly};
      }

      &[data-disabled] {
        color: ${o.color.disabled};
      }

      &::placeholder {
        color: ${o.color.placeholder};
      }

      &[data-disabled]::placeholder {
        color: ${o.color.disabled};
      }
    `}}
`,f=i.div`
  ${()=>{const{tokens:t}=n(),{spacing:o}=t;return s`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{f as C,h as I};
