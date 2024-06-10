import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as pe}from"./index-6eef940f.js";import{T as ce,I as me}from"./index-7aafd469.js";import{g as ue}from"./index-aa3a2926.js";import{r as y}from"./index-c013ead5.js";import{a as h,b as f,u as x}from"./index-1940508f.js";import{T as de}from"./Typography-5392f73e.js";import{I as be}from"./InputLabelTop-ca51ab3b.js";import{I as ge,a as he}from"./InputAlert-7e99775e.js";import{O as fe,C as xe}from"./CharactersCounter-fa0177be.js";const ae=h(be)`
  ${()=>f`
      width: 100%;
    `}
`,Ie=h.div`
  ${()=>{const{tokens:a}=x(),{textInput:e}=a;return f`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,ye=h.input`
  ${()=>{const{tokens:a}=x(),{textInput:e,typography:s}=a,n=e.typography.variant;return f`
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
`,Te=h(de)`
  ${()=>{const{tokens:a}=x(),{textInput:e}=a;return f`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,ve=h.div`
  ${()=>{const{tokens:a}=x(),{textInput:e}=a;return f`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;function ne(a){var D;const{id:e,hasError:s,prefix:n,icon:T,onChange:I,testID:l="input",labelProps:v,alertProps:P,...o}=a,L=y.useId(),S=y.useId(),{labelHint:se}=v,{maxLength:H}=o,{tokens:{textInput:W}}=x(),[le,oe]=y.useState(((D=o.value||o.defaultValue)==null?void 0:D.length)||0),ie=y.useCallback(k=>{oe(k.target.value.length),I==null||I(k)},[I]);return r.jsxs(ge,{gap:o.maxLength?"4px":"8px",alert:P?r.jsx(he,{...P,testID:`${l}-alert`}):void 0,children:[r.jsx(ae,{...v,labelHintID:S,htmlFor:e||L,children:r.jsx(fe,{hasError:s,children:r.jsxs(Ie,{children:[n?r.jsx(Te,{variant:W.prefix.typography.variant,fontFamily:W.prefix.typography.fontFamily,testID:`${l}-prefix`,children:n}):void 0,r.jsx(ye,{...o,id:e||L,onChange:ie,"aria-describedby":se?S:void 0,"data-testid":l}),T?r.jsx(ve,{"data-testid":`${l}-icon-wrapper`,children:T}):void 0]})})}),H?r.jsx(xe,{length:le,maxLength:H,testID:`${l}-characters-counter`}):void 0]})}ne.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
>`},description:""}}};const Pe={title:"Components/Inputs/TextInput",component:ne,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:ue(me,24)},args:{onChange:pe(),hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextInput"}}},i={...t,args:{labelProps:{label:"Label for TextInput"}}},p={...t,args:{labelProps:{label:"Label for TextInput",labelHint:"Additional information"}}},c={args:{prefix:"€",labelProps:{label:"Label for TextInput"}}},m={args:{icon:r.jsx(ce,{height:24,width:24}),labelProps:{label:"Label for TextInput"}}},u={args:{maxLength:15,labelProps:{label:"Label for TextInput"}}},d={...t,args:{hasError:!0,labelProps:{label:"Label for TextInput"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},b={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}},g={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}};var w,$,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(C=($=t.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var O,j,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var q,F,B;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextInput",
      labelHint: "Additional information"
    }
  }
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var R,_,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,J,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var z,V,M;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(M=(V=u.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var G,K,Q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Label for TextInput"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Le=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:b,ReadOnly:g,WithError:d,WithHint:p,WithIcon:m,WithLabel:i,WithLimit:u,WithPrefix:c,__namedExportsOrder:Le,default:Pe},Symbol.toStringTag,{value:"Module"}));export{t as B,b as D,g as R,Ee as T,i as W,p as a,c as b,m as c,u as d,d as e};
