import{a as o,u as e,b as i,p as s}from"./index-ByEiyUmp.js";import{T as g}from"./Typography-C-GpEjPp.js";const h=o.div`
  ${()=>{const{tokens:n}=e(),{textInput:t}=n;return i`
      width: 100%;
      height: ${t.height};
      display: flex;
      align-items: center;
      padding-right: ${t.paddingRight};
      padding-left: ${t.paddingLeft};
    `}}
`,f=o.input`
  ${()=>{const{tokens:n}=e(),{textInput:t,typography:r}=n,a=t.typography.variant,p=s(r.fontSize[a]),c=s(r.lineHeight[a]);return i`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${t.color.base};
      font-family: ${r.fontFamily[a]};
      font-size: ${p};
      line-height: ${c};

      &:read-only {
        color: ${t.color.readOnly};
      }

      &:disabled {
        color: ${t.color.disabled};
      }
    `}}
`,u=o(g)`
  ${()=>{const{tokens:n}=e(),{textInput:t}=n;return i`
      color: ${t.prefix.color};
      margin-right: ${t.prefix.marginRight};
    `}}
`,$=o.div`
  ${()=>{const{tokens:n}=e(),{textInput:t}=n;return i`
      display: flex;
      align-items: center;
      margin-left: ${t.icon.marginLeft};
    `}}
`;export{f as C,$ as I,u as P,h as T};
