import{u as n,l as s,d as l,p as r}from"./index-C1QKVHyt.js";import{$ as d}from"./Input-CWsjCZxx.js";const h=l(d)`
  ${()=>{const{tokens:t}=n(),{textInput:o,typography:a}=t,e=o.typography.variant,i=r(a.fontSize[e]),c=r(a.lineHeight[e]);return s`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${a.fontFamily[e]};
      font-size: ${i};
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
`,f=l.div`
  ${()=>{const{tokens:t}=n(),{spacing:o}=t;return s`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{f as C,h as I};
