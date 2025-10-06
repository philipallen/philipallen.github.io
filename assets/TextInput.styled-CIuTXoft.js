import{a as n,u as e,b as r,p as s}from"./index-BVzVw2jm.js";import{T as c}from"./Typography-DZZq2lFF.js";const h=n.div`
  ${()=>{const{tokens:o}=e(),{textInput:t}=o;return r`
      width: 100%;
      height: ${t.height};
      display: flex;
      align-items: center;
      padding-right: ${t.paddingRight};
      padding-left: ${t.paddingLeft};
    `}}
`,$=n.input`
  ${()=>{const{tokens:o}=e(),{textInput:t,typography:i}=o,a=t.typography.variant,l=s(i.fontSize[a]),p=s(i.lineHeight[a]);return r`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${t.color.base};
      font-family: ${i.fontFamily[a]};
      font-size: ${l};
      line-height: ${p};

      &:read-only {
        color: ${t.color.readOnly};
      }

      &:disabled {
        color: ${t.color.disabled};
      }

      &::placeholder {
        color: ${t.color.placeholder};
      }

      &:disabled::placeholder {
        color: ${t.color.disabled};
      }
    `}}
`,f=n(c)`
  ${()=>{const{tokens:o}=e(),{textInput:t}=o;return r`
      color: ${t.prefix.color};
      margin-right: ${t.prefix.marginRight};
    `}}
`,u=n.div`
  ${()=>{const{tokens:o}=e(),{textInput:t}=o;return r`
      display: flex;
      align-items: center;
      margin-left: ${t.icon.marginLeft};
    `}}
`;export{$ as C,u as I,f as P,h as T};
