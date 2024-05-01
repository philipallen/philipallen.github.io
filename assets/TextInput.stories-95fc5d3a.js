import{a as x,b,u as I,j as r}from"./index-74fe31d7.js";import{a as ce}from"./index-583b5bb5.js";import{T as pe,I as de}from"./index-40416c04.js";import{g as ue}from"./index-219738ab.js";import{r as T}from"./index-c013ead5.js";import{T as me}from"./Typography-5c86d7b4.js";import{I as he}from"./InputLabelTop-9f3f61cf.js";import{I as ge,a as xe}from"./InputAlert-aec6a2b5.js";import{O as be,C as Ie}from"./CharactersCounter-2da8fcc3.js";const ae=x(he)`
  ${()=>b`
      width: 100%;
    `}
`,fe=x.div`
  ${()=>{const{tokens:t}=I(),{textInput:e}=t;return b`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,Te=x.input`
  ${()=>{const{tokens:t}=I(),{textInput:e,typography:s}=t,n=e.typographyVariant;return b`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${s.fontFamily[n]};
      font-size: ${s.fontSize[n]};
      line-height: ${s.lineHeight[n]};

      ${ae}:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,ye=x(me)`
  ${()=>{const{tokens:t}=I(),{textInput:e}=t;return b`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,Pe=x.div`
  ${()=>{const{tokens:t}=I(),{textInput:e}=t;return b`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;function j(t){var L;const{id:e,hasError:s,prefix:n,icon:y,onChange:f,testID:o="input",labelProps:P,alertProps:$,...i}=t,S=T.useId(),v=T.useId(),{labelHint:ne}=P,{maxLength:w}=i,{tokens:{textInput:se}}=I(),[oe,ie]=T.useState(((L=i.value||i.defaultValue)==null?void 0:L.length)||0),le=T.useCallback(W=>{ie(W.target.value.length),f==null||f(W)},[f]);return r.jsxs(ge,{gap:i.maxLength?"4px":"8px",alert:$?r.jsx(xe,{...$,testID:`${o}-alert`}):void 0,children:[r.jsx(ae,{...P,labelHintID:v,htmlFor:e||S,children:r.jsx(be,{hasError:s,children:r.jsxs(fe,{children:[n?r.jsx(ye,{variant:se.prefix.typographyVariant,testID:`${o}-prefix`,children:n}):void 0,r.jsx(Te,{...i,id:e||S,onChange:le,"aria-describedby":ne?v:void 0,"data-testid":o}),y?r.jsx(Pe,{"data-testid":`${o}-icon-wrapper`,children:y}):void 0]})})}),w?r.jsx(Ie,{length:oe,maxLength:w,testID:`${o}-characters-counter`}):void 0]})}const $e={title:"Inputs/TextInput",component:j,render:function(e){function s(n){ce("onChange")(n)}return r.jsx(j,{...e,onChange:s})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:ue(de,24)},args:{hasError:!1,readOnly:!1}},a={args:{labelProps:{"aria-label":"TextInput"}}},l={...a,args:{labelProps:{label:"Labelled TextInput"}}},c={...a,args:{labelProps:{label:"TextInput with Hint",labelHint:"Additional information"}}},p={args:{prefix:"€",labelProps:{label:"TextInput with Prefix"}}},d={args:{icon:r.jsx(pe,{height:24,width:24}),labelProps:{label:"TextInput with Icon"}}},u={args:{maxLength:15,labelProps:{label:"TextInput with Limit"}}},m={...a,args:{hasError:!0,labelProps:{label:"TextInput with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},h={...a,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextInput"}}},g={...a,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextInput"}}};var E,O,D;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var k,C,H;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextInput"
    }
  }
}`,...(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var R,B,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextInput with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var A,V,z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "TextInput with Prefix"
    }
  }
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var F,q,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "TextInput with Icon"
    }
  }
}`,...(M=(q=d.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextInput with Limit"
    }
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "TextInput with Error"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextInput"
    }
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextInput"
    }
  }
}`,...(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Se=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:h,ReadOnly:g,WithError:m,WithHint:c,WithIcon:d,WithLabel:l,WithLimit:u,WithPrefix:p,__namedExportsOrder:Se,default:$e},Symbol.toStringTag,{value:"Module"}));export{a as B,h as D,g as R,Ce as T,l as W,c as a,p as b,d as c,u as d,m as e};
