import{a as n,u as r,b as s,p as l}from"./index-5VPm3mt9.js";import{a as d}from"./Input-ByoGzd43.js";const h=n.div`
  ${({$isDisabled:a})=>{const{tokens:o}=r(),{textInput:t}=o;return s`
      display: contents;
      color: ${a?t.color.disabled:t.color.base};
    `}}
`,y=n(d)`
  ${()=>{const{tokens:a}=r(),{textInput:o,typography:t}=a,e=o.typography.variant,c=l(t.fontSize[e]),i=l(t.lineHeight[e]);return s`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${t.fontFamily[e]};
      font-size: ${c};
      line-height: ${i};

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
  ${()=>{const{tokens:a}=r(),{spacing:o}=a;return s`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{f as C,y as I,h as S};
