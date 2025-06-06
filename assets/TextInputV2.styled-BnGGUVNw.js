import{a as n,u as s,p as r,b as i}from"./index-COZsQx0K.js";import{$ as p}from"./Input-DoxsRZPw.js";const h=n.div`
  display: contents;
`,y=n(p)`
  ${()=>{const{tokens:t}=s(),{textInput:o,typography:a}=t,e=o.typography.variant,c=r(a.fontSize[e]),l=r(a.lineHeight[e]);return i`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${a.fontFamily[e]};
      font-size: ${c};
      line-height: ${l};

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
`,f=n.div`
  ${()=>{const{tokens:t}=s(),{spacing:o}=t;return i`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{f as C,y as I,h as S};
