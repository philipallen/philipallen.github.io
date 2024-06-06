import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as pe}from"./index-6eef940f.js";import{T as ce,I as me}from"./index-7aafd469.js";import{g as ue}from"./index-aa3a2926.js";import{r as y}from"./index-c013ead5.js";import{a as g,b as x,u as I}from"./index-1940508f.js";import{T as de}from"./Typography-5392f73e.js";import{I as he}from"./InputLabelTop-ca51ab3b.js";import{I as be,a as ge}from"./InputAlert-7e99775e.js";import{O as xe,C as Ie}from"./CharactersCounter-fa0177be.js";const ne=g(he)`
  ${()=>x`
      width: 100%;
    `}
`,fe=g.div`
  ${()=>{const{tokens:n}=I(),{textInput:e}=n;return x`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,ye=g.input`
  ${()=>{const{tokens:n}=I(),{textInput:e,typography:s}=n,a=e.typography.variant;return x`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${s.fontFamily[a]};
      font-size: ${s.fontSize[a]};
      line-height: ${s.lineHeight[a]};

      ${ne}:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,Te=g(de)`
  ${()=>{const{tokens:n}=I(),{textInput:e}=n;return x`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,Pe=g.div`
  ${()=>{const{tokens:n}=I(),{textInput:e}=n;return x`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;function ae(n){var W;const{id:e,hasError:s,prefix:a,icon:T,onChange:f,testID:l="input",labelProps:P,alertProps:v,...o}=n,w=y.useId(),H=y.useId(),{labelHint:se}=P,{maxLength:S}=o,{tokens:{textInput:D}}=I(),[le,oe]=y.useState(((W=o.value||o.defaultValue)==null?void 0:W.length)||0),ie=y.useCallback(k=>{oe(k.target.value.length),f==null||f(k)},[f]);return r.jsxs(be,{gap:o.maxLength?"4px":"8px",alert:v?r.jsx(ge,{...v,testID:`${l}-alert`}):void 0,children:[r.jsx(ne,{...P,labelHintID:H,htmlFor:e||w,children:r.jsx(xe,{hasError:s,children:r.jsxs(fe,{children:[a?r.jsx(Te,{variant:D.prefix.typography.variant,fontFamily:D.prefix.typography.fontFamily,testID:`${l}-prefix`,children:a}):void 0,r.jsx(ye,{...o,id:e||w,onChange:ie,"aria-describedby":se?H:void 0,"data-testid":l}),T?r.jsx(Pe,{"data-testid":`${l}-icon-wrapper`,children:T}):void 0]})})}),S?r.jsx(Ie,{length:le,maxLength:S,testID:`${l}-characters-counter`}):void 0]})}ae.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""},labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> &
  Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID"> & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  label: JSX.Element;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  label: JSX.Element;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"label",value:{name:"JSX.Element",required:!0}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'}]}],raw:'Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID">'},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const ve={title:"Components/Inputs/TextInput",component:ae,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:ue(me,24)},args:{onChange:pe(),hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextInput"}}},i={...t,args:{labelProps:{label:"Labelled TextInput"}}},p={...t,args:{labelProps:{label:"TextInput with Hint",labelHint:"Additional information"}}},c={args:{prefix:"€",labelProps:{label:"TextInput with Prefix"}}},m={args:{icon:r.jsx(ce,{height:24,width:24}),labelProps:{label:"TextInput with Icon"}}},u={args:{maxLength:15,labelProps:{label:"TextInput with Limit"}}},d={...t,args:{hasError:!0,labelProps:{label:"TextInput with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},h={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextInput"}}},b={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextInput"}}};var L,O,$;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...($=(O=t.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var C,E,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextInput"
    }
  }
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var q,F,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextInput with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var B,_,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "TextInput with Prefix"
    }
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,J,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "TextInput with Icon"
    }
  }
}`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var z,V,M;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextInput with Limit"
    }
  }
}`,...(M=(V=u.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var G,K,Q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextInput"
    }
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextInput"
    }
  }
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const we=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],je=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:h,ReadOnly:b,WithError:d,WithHint:p,WithIcon:m,WithLabel:i,WithLimit:u,WithPrefix:c,__namedExportsOrder:we,default:ve},Symbol.toStringTag,{value:"Module"}));export{t as B,h as D,b as R,je as T,i as W,p as a,c as b,m as c,u as d,d as e};
