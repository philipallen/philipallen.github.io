import{a as b,b as g,u as I,j as t}from"./index-e76b8df1.js";import{a as ie}from"./index-583b5bb5.js";import{T as le,I as pe}from"./index-19b017fb.js";import{g as ce}from"./index-219738ab.js";import{r as f}from"./index-c013ead5.js";import{T as ue}from"./Typography-ab363d23.js";import{I as de}from"./InputLabelTop-e8979608.js";import{I as xe,a as me}from"./InputAlert-e9669a4d.js";import{O as he,C as be}from"./CharactersCounter-a20fd925.js";const te=b(de)`
  ${()=>g`
      width: 100%;
    `}
`,ge=b.div`
  ${()=>{const{tokens:r}=I(),{textInput:e}=r;return g`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,Ie=b.input`
  ${()=>{const{tokens:r}=I(),{textInput:e,typography:s}=r,n=e.typographyVariant;return g`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${s.fontFamily[n]};
      font-size: ${s.fontSize[n]};
      line-height: ${s.lineHeight[n]};

      ${te}:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,Te=b(ue)`
  ${()=>{const{tokens:r}=I(),{textInput:e}=r;return g`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,fe=b.div`
  ${()=>{const{tokens:r}=I(),{textInput:e}=r;return g`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;function v(r){var $;const{id:e,hasError:s,prefix:n,icon:y,onChange:T,testID:o="input",labelProps:re,alertProps:P,...i}=r,w=f.useId(),{maxLength:L}=i,{tokens:{textInput:ae}}=I(),[ne,se]=f.useState((($=i.value||i.defaultValue)==null?void 0:$.length)||0),oe=f.useCallback(S=>{se(S.target.value.length),T==null||T(S)},[T]);return t.jsxs(xe,{gap:i.maxLength?"4px":"8px",alert:P?t.jsx(me,{...P,testID:`${o}-alert`}):void 0,children:[t.jsx(te,{...re,htmlFor:e||w,children:t.jsx(he,{hasError:s,children:t.jsxs(ge,{children:[n?t.jsx(Te,{variant:ae.prefix.typographyVariant,testID:`${o}-prefix`,children:n}):void 0,t.jsx(Ie,{...i,id:e||w,onChange:oe,"data-testid":o}),y?t.jsx(fe,{"data-testid":`${o}-icon-wrapper`,children:y}):void 0]})})}),L?t.jsx(be,{length:ne,maxLength:L,testID:`${o}-characters-counter`}):void 0]})}const ye={title:"Inputs/TextInput",component:v,render:function(e){function s(n){ie("onChange")(n)}return t.jsx(v,{...e,onChange:s})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:ce(pe,24)},args:{hasError:!1,readOnly:!1}},a={args:{labelProps:{"aria-label":"TextInput"}}},l={...a,args:{labelProps:{label:"Labelled TextInput","aria-label":"Labelled TextInput"}}},p={...a,args:{labelProps:{label:"TextInput with Hint",labelHint:"Additional information","aria-label":"TextInput with Hint"}}},c={args:{prefix:"€",labelProps:{label:"TextInput with Prefix","aria-label":"TextInput with Prefix"}}},u={args:{icon:t.jsx(le,{height:24,width:24}),labelProps:{label:"TextInput with Icon","aria-label":"Text TextInput"}}},d={args:{maxLength:15,labelProps:{label:"TextInput with Limit","aria-label":"TextInput with Limit"}}},x={...a,args:{hasError:!0,labelProps:{label:"TextInput with Error","aria-label":"TextInput with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},m={...a,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextInput","aria-label":"Disabled TextInput"}}},h={...a,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextInput","aria-label":"ReadOnly TextInput"}}};var E,O,W;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(W=(O=a.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,D,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextInput",
      "aria-label": "Labelled TextInput"
    }
  }
}`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var C,R,H;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextInput with Hint",
      labelHint: "Additional information",
      "aria-label": "TextInput with Hint"
    }
  }
}`,...(H=(R=p.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var B,_,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "TextInput with Prefix",
      "aria-label": "TextInput with Prefix"
    }
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var V,z,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "TextInput with Icon",
      "aria-label": "Text TextInput"
    }
  }
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var q,M,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextInput with Limit",
      "aria-label": "TextInput with Limit"
    }
  }
}`,...(G=(M=d.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,K,N;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "TextInput with Error",
      "aria-label": "TextInput with Error"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextInput",
      "aria-label": "Disabled TextInput"
    }
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextInput",
      "aria-label": "ReadOnly TextInput"
    }
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Pe=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],De=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:m,ReadOnly:h,WithError:x,WithHint:p,WithIcon:u,WithLabel:l,WithLimit:d,WithPrefix:c,__namedExportsOrder:Pe,default:ye},Symbol.toStringTag,{value:"Module"}));export{a as B,m as D,h as R,De as T,l as W,p as a,c as b,u as c,d,x as e};
