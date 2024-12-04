import{a as o,b as e,u as i,p as s}from"./index-CtBUti8q.js";import{T as l}from"./Typography-v4_88_aK.js";import{I as g}from"./InputLabelTop-CsiLVEXO.js";const f=o(g)`
  ${()=>e`
      width: 100%;
    `}
`,$=o.div`
  ${()=>{const{tokens:n}=i(),{textInput:t}=n;return e`
      width: 100%;
      height: ${t.height};
      display: flex;
      align-items: center;
      padding-right: ${t.paddingRight};
      padding-left: ${t.paddingLeft};
    `}}
`,m=o.input`
  ${()=>{const{tokens:n}=i(),{textInput:t,typography:r}=n,a=t.typography.variant,p=s(r.fontSize[a]),c=s(r.lineHeight[a]);return e`
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
`,y=o(l)`
  ${()=>{const{tokens:n}=i(),{textInput:t}=n;return e`
      color: ${t.prefix.color};
      margin-right: ${t.prefix.marginRight};
    `}}
`,x=o.div`
  ${()=>{const{tokens:n}=i(),{textInput:t}=n;return e`
      display: flex;
      align-items: center;
      margin-left: ${t.icon.marginLeft};
    `}}
`;export{f as C,x as I,y as P,$ as T,m as a};
