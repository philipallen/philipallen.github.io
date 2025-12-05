import{a as n,u as s,p as r,b as l}from"./index-Dwsyfx_g.js";import{a as d}from"./Input-DybsVE8b.js";const h=n(d)`
  ${()=>{const{tokens:t}=s(),{textInput:o,typography:a}=t,e=o.typography.variant,i=r(a.fontSize[e]),c=r(a.lineHeight[e]);return l`
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
`,f=n.div`
  ${()=>{const{tokens:t}=s(),{spacing:o}=t;return l`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{f as C,h as I};
