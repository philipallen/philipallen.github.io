import{a as l,b as s,u as i,j as a}from"./index-e4c57c99.js";import{a as ce}from"./index-583b5bb5.js";import{T as ue,I as pe}from"./index-e1b96a7a.js";import{g as de}from"./index-219738ab.js";import{r as w}from"./index-c013ead5.js";import{T as te}from"./Typography-2bd14f01.js";import{I as he}from"./InputLabelTop-cf58e370.js";import{I as be,a as ge}from"./InputAlert-d02adbdb.js";const ae=l(he)`
  ${()=>s`
      width: 100%;
    `}
`,me=l.div`
  ${()=>{const{tokens:t}=i(),{textInput:e}=t;return s`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,fe=l.input`
  ${()=>{const{tokens:t}=i(),{textInput:e,typography:r}=t,n=e.typographyVariant;return s`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${r.fontFamily[n]};
      font-size: ${r.fontSize[n]};
      line-height: ${r.lineHeight[n]};

      ${ae}:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,xe=l(te)`
  ${()=>{const{tokens:t}=i(),{textInput:e}=t;return s`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,Ie=l.div`
  ${()=>{const{tokens:t}=i(),{textInput:e}=t;return s`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`,u=l.div`
  ${()=>{const{tokens:t}=i(),{outerField:e}=t;return s`
      width: 100%;

      outline-color: ${e.focusRing.color};
      outline-width: ${e.focusRing.width.base};
      outline-style: ${e.focusRing.style};
      outline-offset: ${e.focusRing.offset.base};
      border-radius: ${e.radius};

      &:has(input:focus) {
        outline-width: ${e.focusRing.width.focus};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,$e=l.div`
  ${({$hasError:t})=>{const{tokens:e}=i(),{outerField:r}=e;return[s`
        width: 100%;
        background: ${r.backgroundColor};

        outline-color: ${r.stroke.color.base};
        outline-width: ${r.stroke.width.base};
        outline-style: ${r.stroke.style};
        border-radius: ${r.radius};

        ${u}:has(input:not(:disabled)):hover && {
          outline-color: ${r.stroke.color.hover};
          outline-width: ${r.stroke.width.hover};
          outline-offset: -${r.stroke.width.hover};
        }

        ${u}:has(input:read-only) && {
          outline-color: ${r.stroke.color.readOnly};
        }

        ${u}:has(input:focus) && {
          outline-color: ${r.stroke.color.focus};
          outline-width: ${r.stroke.width.focus};
          outline-offset: -${r.stroke.width.focus};
        }
      `,t&&s`
          &&,
          ${u}:has(input:read-only) &&,
          ${u}:has(input:disabled) && {
            outline-width: ${r.stroke.width.error};
            outline-color: ${r.stroke.color.error};
            outline-offset: -${r.stroke.width.error};
          }
        `]}}
`;function ye(t){const{hasError:e,children:r}=t;return a.jsx(u,{children:a.jsx($e,{$hasError:e,children:r})})}const we=l(te)`
  ${()=>{const{tokens:t}=i(),{charactersCounter:e}=t;return s`
      width: 100%;
      color: ${e.color};
      text-align: ${e.textAlign};
    `}}
`;function ke(t){const{length:e,maxLength:r,testID:n}=t,{tokens:y}=i(),{charactersCounter:c}=y;return a.jsxs(we,{variant:c.typographyVariant,testID:n,children:[e,"/",r]})}function S(t){var T;const{id:e,hasError:r,prefix:n,icon:y,onChange:c,testID:p="input",labelProps:ne,alertProps:k,...d}=t,P=w.useId(),{maxLength:v}=d,{tokens:{textInput:oe}}=i(),[se,ie]=w.useState(((T=d.value||d.defaultValue)==null?void 0:T.length)||0),le=w.useCallback(L=>{ie(L.target.value.length),c==null||c(L)},[c]);return a.jsxs(be,{gap:d.maxLength?"4px":"8px",alert:k?a.jsx(ge,{...k,testID:`${p}-alert`}):void 0,children:[a.jsx(ae,{...ne,htmlFor:e||P,children:a.jsx(ye,{hasError:r,children:a.jsxs(me,{children:[n?a.jsx(xe,{variant:oe.prefix.typographyVariant,testID:`${p}-prefix`,children:n}):void 0,a.jsx(fe,{...d,id:e||P,onChange:le,"data-testid":p}),y?a.jsx(Ie,{"data-testid":`${p}-icon-wrapper`,children:y}):void 0]})})}),v?a.jsx(ke,{length:se,maxLength:v,testID:`${p}-characters-counter`}):void 0]})}const Pe={title:"Inputs/TextInput",component:S,render:function(e){function r(n){ce("onChange")(n)}return a.jsx(S,{...e,onChange:r})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:de(pe,24)},args:{hasError:!1,readOnly:!1}},o={args:{labelProps:{"aria-label":"Text Input"}}},h={...o,args:{labelProps:{label:"Labelled Input","aria-label":"Labelled Input"}}},b={...o,args:{labelProps:{label:"Input with Hint",labelHint:"Additional information","aria-label":"Input with Hint"}}},g={args:{prefix:"€",labelProps:{label:"Input with Prefix","aria-label":"Text Input"}}},m={args:{icon:a.jsx(ue,{height:24,width:24}),labelProps:{label:"Input with Icon","aria-label":"Text Input"}}},f={args:{maxLength:15,labelProps:{label:"Input with Limit","aria-label":"Text Input"}}},x={...o,args:{hasError:!0,labelProps:{label:"Input with Error","aria-label":"Input with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},I={...o,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled Field","aria-label":"Disabled Input"}}},$={...o,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly Field","aria-label":"ReadOnly Input"}}};var j,E,W;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Text Input"
    }
  }
}`,...(W=(E=o.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var O,R,C;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Input",
      "aria-label": "Labelled Input"
    }
  }
}`,...(C=(R=h.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var D,F,H;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Input with Hint",
      labelHint: "Additional information",
      "aria-label": "Input with Hint"
    }
  }
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var B,_,A;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Input with Prefix",
      "aria-label": "Text Input"
    }
  }
}`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var V,z,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Input with Icon",
      "aria-label": "Text Input"
    }
  }
}`,...(q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var M,G,J;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Input with Limit",
      "aria-label": "Text Input"
    }
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Input with Error",
      "aria-label": "Input with Error"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(Q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled Field",
      "aria-label": "Disabled Input"
    }
  }
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly Field",
      "aria-label": "ReadOnly Input"
    }
  }
}`,...(re=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ve=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:I,ReadOnly:$,WithError:x,WithHint:b,WithIcon:m,WithLabel:h,WithLimit:f,WithPrefix:g,__namedExportsOrder:ve,default:Pe},Symbol.toStringTag,{value:"Module"}));export{o as B,I as D,$ as R,Ce as T,h as W,b as a,g as b,m as c,f as d,x as e};
