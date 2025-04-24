import{a as r,u as s,p as n,b as i}from"./index-CFGjHfra.js";import{$ as p}from"./Input-BgVT1H5e.js";const f=r(p)`
  ${()=>{const{tokens:t}=s(),{textInput:o,typography:a}=t,e=o.typography.variant,l=n(a.fontSize[e]),c=n(a.lineHeight[e]);return i`
      all: unset;
      flex: 1;
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
    `}}
`,h=r.div`
  ${()=>{const{tokens:t}=s(),{spacing:o}=t;return i`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{h as C,f as I};
