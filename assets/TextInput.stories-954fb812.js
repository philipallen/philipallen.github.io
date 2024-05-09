import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as pe}from"./index-6eef940f.js";import{T as ce,I as ue}from"./index-b1e3628a.js";import{g as me}from"./index-aa3a2926.js";import{r as y}from"./index-c013ead5.js";import{a as b,b as x,u as I}from"./index-22f9e29b.js";import{T as de}from"./Typography-df6f4efa.js";import{I as he}from"./InputLabelTop-37b968a9.js";import{I as ge,a as be}from"./InputAlert-5a2c192a.js";import{O as xe,C as Ie}from"./CharactersCounter-e5c29d18.js";const te=b(he)`
  ${()=>x`
      width: 100%;
    `}
`,fe=b.div`
  ${()=>{const{tokens:n}=I(),{textInput:e}=n;return x`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,ye=b.input`
  ${()=>{const{tokens:n}=I(),{textInput:e,typography:s}=n,a=e.typographyVariant;return x`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${s.fontFamily[a]};
      font-size: ${s.fontSize[a]};
      line-height: ${s.lineHeight[a]};

      ${te}:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,Te=b(de)`
  ${()=>{const{tokens:n}=I(),{textInput:e}=n;return x`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,ve=b.div`
  ${()=>{const{tokens:n}=I(),{textInput:e}=n;return x`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;function ne(n){var O;const{id:e,hasError:s,prefix:a,icon:T,onChange:f,testID:o="input",labelProps:v,alertProps:P,...l}=n,w=y.useId(),S=y.useId(),{labelHint:ae}=v,{maxLength:W}=l,{tokens:{textInput:se}}=I(),[oe,le]=y.useState(((O=l.value||l.defaultValue)==null?void 0:O.length)||0),ie=y.useCallback($=>{le($.target.value.length),f==null||f($)},[f]);return r.jsxs(ge,{gap:l.maxLength?"4px":"8px",alert:P?r.jsx(be,{...P,testID:`${o}-alert`}):void 0,children:[r.jsx(te,{...v,labelHintID:S,htmlFor:e||w,children:r.jsx(xe,{hasError:s,children:r.jsxs(fe,{children:[a?r.jsx(Te,{variant:se.prefix.typographyVariant,testID:`${o}-prefix`,children:a}):void 0,r.jsx(ye,{...l,id:e||w,onChange:ie,"aria-describedby":ae?S:void 0,"data-testid":o}),T?r.jsx(ve,{"data-testid":`${o}-icon-wrapper`,children:T}):void 0]})})}),W?r.jsx(Ie,{length:oe,maxLength:W,testID:`${o}-characters-counter`}):void 0]})}ne.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""},labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const Pe={title:"Components/Inputs/TextInput",component:ne,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:me(ue,24)},args:{onChange:pe(),hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextInput"}}},i={...t,args:{labelProps:{label:"Labelled TextInput"}}},p={...t,args:{labelProps:{label:"TextInput with Hint",labelHint:"Additional information"}}},c={args:{prefix:"€",labelProps:{label:"TextInput with Prefix"}}},u={args:{icon:r.jsx(ce,{height:24,width:24}),labelProps:{label:"TextInput with Icon"}}},m={args:{maxLength:15,labelProps:{label:"TextInput with Limit"}}},d={...t,args:{hasError:!0,labelProps:{label:"TextInput with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},h={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextInput"}}},g={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextInput"}}};var D,L,H;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(H=(L=t.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var k,C,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextInput"
    }
  }
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var E,q,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextInput with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,_,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "TextInput with Prefix"
    }
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var B,N,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "TextInput with Icon"
    }
  }
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var z,J,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextInput with Limit"
    }
  }
}`,...(M=(J=m.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var X,G,K;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextInput"
    }
  }
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextInput"
    }
  }
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const we=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:h,ReadOnly:g,WithError:d,WithHint:p,WithIcon:u,WithLabel:i,WithLimit:m,WithPrefix:c,__namedExportsOrder:we,default:Pe},Symbol.toStringTag,{value:"Module"}));export{t as B,h as D,g as R,Ee as T,i as W,p as a,c as b,u as c,m as d,d as e};
