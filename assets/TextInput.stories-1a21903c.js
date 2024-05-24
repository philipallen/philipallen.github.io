import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as pe}from"./index-6eef940f.js";import{T as ce,I as me}from"./index-5cf7436a.js";import{g as ue}from"./index-aa3a2926.js";import{r as y}from"./index-c013ead5.js";import{a as g,b as I,u as x}from"./index-912b60f4.js";import{T as de}from"./Typography-7961d08c.js";import{I as he}from"./InputLabelTop-4cd74a97.js";import{I as be,a as ge}from"./InputAlert-0aa61e3e.js";import{O as Ie,C as xe}from"./CharactersCounter-0049ad58.js";const te=g(he)`
  ${()=>I`
      width: 100%;
    `}
`,fe=g.div`
  ${()=>{const{tokens:n}=x(),{textInput:e}=n;return I`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,ye=g.input`
  ${()=>{const{tokens:n}=x(),{textInput:e,typography:s}=n,a=e.typographyVariant;return I`
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
`,Te=g(de)`
  ${()=>{const{tokens:n}=x(),{textInput:e}=n;return I`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,Pe=g.div`
  ${()=>{const{tokens:n}=x(),{textInput:e}=n;return I`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`;function ne(n){var D;const{id:e,hasError:s,prefix:a,icon:T,onChange:f,testID:l="input",labelProps:P,alertProps:v,...o}=n,w=y.useId(),H=y.useId(),{labelHint:ae}=P,{maxLength:S}=o,{tokens:{textInput:se}}=x(),[le,oe]=y.useState(((D=o.value||o.defaultValue)==null?void 0:D.length)||0),ie=y.useCallback(W=>{oe(W.target.value.length),f==null||f(W)},[f]);return r.jsxs(be,{gap:o.maxLength?"4px":"8px",alert:v?r.jsx(ge,{...v,testID:`${l}-alert`}):void 0,children:[r.jsx(te,{...P,labelHintID:H,htmlFor:e||w,children:r.jsx(Ie,{hasError:s,children:r.jsxs(fe,{children:[a?r.jsx(Te,{variant:se.prefix.typographyVariant,testID:`${l}-prefix`,children:a}):void 0,r.jsx(ye,{...o,id:e||w,onChange:ie,"aria-describedby":ae?H:void 0,"data-testid":l}),T?r.jsx(Pe,{"data-testid":`${l}-icon-wrapper`,children:T}):void 0]})})}),S?r.jsx(xe,{length:le,maxLength:S,testID:`${l}-characters-counter`}):void 0]})}ne.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
>`},description:""}}};const ve={title:"Components/Inputs/TextInput",component:ne,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:ue(me,24)},args:{onChange:pe(),hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextInput"}}},i={...t,args:{labelProps:{label:"Labelled TextInput"}}},p={...t,args:{labelProps:{label:"TextInput with Hint",labelHint:"Additional information"}}},c={args:{prefix:"€",labelProps:{label:"TextInput with Prefix"}}},m={args:{icon:r.jsx(ce,{height:24,width:24}),labelProps:{label:"TextInput with Icon"}}},u={args:{maxLength:15,labelProps:{label:"TextInput with Limit"}}},d={...t,args:{hasError:!0,labelProps:{label:"TextInput with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},h={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextInput"}}},b={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextInput"}}};var k,L,O;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(O=(L=t.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,C,E;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextInput"
    }
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var j,q,F;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextInput with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,B,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "TextInput with Prefix"
    }
  }
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var A,N,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "TextInput with Icon"
    }
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var J,X,z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextInput with Limit"
    }
  }
}`,...(z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var M,G,K;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextInput"
    }
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const we=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],je=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:h,ReadOnly:b,WithError:d,WithHint:p,WithIcon:m,WithLabel:i,WithLimit:u,WithPrefix:c,__namedExportsOrder:we,default:ve},Symbol.toStringTag,{value:"Module"}));export{t as B,h as D,b as R,je as T,i as W,p as a,c as b,m as c,u as d,d as e};
