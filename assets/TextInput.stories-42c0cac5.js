import{a as i,u as s,b as o,j as n}from"./index-771fcc08.js";import{a as ae}from"./index-583b5bb5.js";import{T as oe,I as se}from"./index-23ffefe9.js";import{g as le}from"./index-1225df13.js";import{r as T}from"./index-c013ead5.js";import{T as y}from"./Typography-4da87cb1.js";import{I as ie,a as ce}from"./InputAlert-b00bcc36.js";const pe=i.label`
  ${()=>{const{tokens:r}=s(),{inputLabelTop:e}=r;return o`
      width: 100%;
      display: grid;
      gap: ${e.gap};
      user-select: none;

      &:has(:disabled) {
        pointer-events: none;
      }
    `}}
`,ue=i.div`
  ${()=>{const{tokens:r}=s(),{inputLabelTop:e}=r;return o`
      color: ${e.label.color.base};
    `}}
`,de=i.div`
  ${()=>{const{tokens:r}=s(),{inputLabelTop:e}=r;return o`
      color: ${e.labelHint.color.base};
    `}}
`;function he(r){const{label:e,labelHint:t,children:a,...l}=r,{tokens:p}=s(),{inputLabelTop:u}=p;return n.jsxs(pe,{...l,children:[n.jsxs("div",{children:[e&&n.jsx(ue,{children:n.jsx(y,{component:"span",color:"inherit",fontFamily:u.label.fontFamily,variant:u.label.typographyVariant,children:e})}),t&&n.jsx(de,{children:n.jsx(y,{component:"span",color:"inherit",fontFamily:u.labelHint.fontFamily,variant:u.labelHint.typographyVariant,children:t})})]}),n.jsx("div",{children:a})]})}const be=i(he)`
  ${()=>o`
      width: 100%;
    `}
`,ge=i.div`
  ${()=>{const{tokens:r}=s(),{textInput:e}=r;return o`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,me=i.input`
  ${()=>{const{tokens:r}=s(),{textInput:e,typography:t}=r,a=e.typographyVariant;return o`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${t.fontFamily[a]};
      font-size: ${t.fontSize[a]};
      line-height: ${t.lineHeight[a]};

      label:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,fe=i(y)`
  ${()=>{const{tokens:r}=s(),{textInput:e}=r;return o`
      margin-right: ${e.prefix.marginRight};
    `}}
`,xe=i.div`
  ${()=>{const{tokens:r}=s(),{textInput:e}=r;return o`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`,Ie=i.div`
  ${({$hasError:r})=>{const{tokens:e}=s(),{outerField:t}=e;return[o`
        width: 100%;
        background: ${t.backgroundColor};

        outline-color: ${t.stroke.color.base};
        outline-width: ${t.stroke.width.base};
        outline-style: ${t.stroke.style};
        border-radius: ${t.radius};

        label:hover && {
          outline-color: ${t.stroke.color.hover};
          outline-width: ${t.stroke.width.hover};
          outline-offset: -${t.stroke.width.hover};
        }

        label:has(input:read-only) && {
          outline-color: ${t.stroke.color.readOnly};
        }

        label:has(input:focus) && {
          outline-color: ${t.stroke.color.focus};
          outline-width: ${t.stroke.width.focus};
          outline-offset: -${t.stroke.width.focus};
        }
      `,r&&o`
          &&,
          label:has(input:read-only) &&,
          label:has(input:focus) && {
            outline-width: ${t.stroke.width.error};
            outline-color: ${t.stroke.color.error};
            outline-offset: -${t.stroke.width.error};
          }
        `]}}
`,$e=i.div`
  ${()=>{const{tokens:r}=s(),{outerField:e}=r;return o`
      width: 100%;

      outline-color: ${e.focusRing.color};
      outline-width: ${e.focusRing.width.base};
      outline-style: ${e.focusRing.style};
      outline-offset: ${e.focusRing.offset.base};
      border-radius: ${e.radius};

      label:has(input:focus) && {
        outline-width: ${e.focusRing.width.focus};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`;function ye(r){const{hasError:e,children:t}=r;return n.jsx($e,{children:n.jsx(Ie,{$hasError:e,children:t})})}const we=i(y)`
  ${()=>{const{tokens:r}=s(),{charactersCounter:e}=r;return o`
      width: 100%;
      color: ${e.color};
      text-align: ${e.textAlign};
    `}}
`;function ke(r){const{length:e,maxLength:t,testID:a}=r,{tokens:l}=s(),{charactersCounter:p}=l;return n.jsxs(we,{variant:p.typographyVariant,testID:a,children:[e,"/",t]})}function L(r){var v;const{hasError:e,prefix:t,icon:a,onChange:l,testID:p="input",labelProps:u,alertProps:w,...d}=r,{maxLength:k}=d,[te,re]=T.useState(((v=d.value||d.defaultValue)==null?void 0:v.length)||0),ne=T.useCallback(P=>{re(P.target.value.length),l==null||l(P)},[l]);return n.jsxs(ie,{gap:d.maxLength?"4px":"8px",alert:w?n.jsx(ce,{...w,testID:`${p}-alert`}):void 0,children:[n.jsx(be,{...u,children:n.jsx(ye,{hasError:e,children:n.jsxs(ge,{children:[t?n.jsx(fe,{testID:`${p}-prefix`,children:t}):void 0,n.jsx(me,{"data-testid":p,...d,onChange:ne}),a?n.jsx(xe,{"data-testid":`${p}-icon-wrapper`,children:a}):void 0]})})}),k?n.jsx(ke,{length:te,maxLength:k,testID:`${p}-characters-counter`}):void 0]})}const{useArgs:ve}=__STORYBOOK_MODULE_CLIENT_API__,Pe={title:"Inputs/TextInput",component:L,render:function(e){const[,t]=ve();function a(l){t({value:l.target.value}),ae("onChange")(l)}return n.jsx(L,{...e,onChange:a})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:le(se,24)},args:{hasError:!1,readOnly:!1}},c={args:{labelProps:{"aria-label":"Text Input"}}},h={...c,args:{labelProps:{label:"Labelled Input","aria-label":"Labelled Input"}}},b={...c,args:{labelProps:{label:"Input with Hint",labelHint:"Additional information","aria-label":"Input with Hint"}}},g={args:{prefix:"€",labelProps:{label:"Input with Prefix","aria-label":"Text Input"}}},m={args:{icon:n.jsx(oe,{height:24,width:24}),labelProps:{label:"Input with Icon","aria-label":"Text Input"}}},f={args:{maxLength:15,labelProps:{label:"Input with Limit","aria-label":"Text Input"}}},x={...c,args:{hasError:!0,labelProps:{label:"Input with Error","aria-label":"Input with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},I={...c,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled Field","aria-label":"Disabled Input"}}},$={...c,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly Field","aria-label":"ReadOnly Input"}}};var j,O,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Text Input"
    }
  }
}`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var E,W,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Input",
      "aria-label": "Labelled Input"
    }
  }
}`,...(R=(W=h.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var C,H,D;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Input with Hint",
      labelHint: "Additional information",
      "aria-label": "Input with Hint"
    }
  }
}`,...(D=(H=b.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var _,F,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Input with Prefix",
      "aria-label": "Text Input"
    }
  }
}`,...(B=(F=g.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var A,V,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Input with Icon",
      "aria-label": "Text Input"
    }
  }
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var q,M,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Input with Limit",
      "aria-label": "Text Input"
    }
  }
}`,...(K=(M=f.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var N,U,Y;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,J,Q;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled Field",
      "aria-label": "Disabled Input"
    }
  }
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly Field",
      "aria-label": "ReadOnly Input"
    }
  }
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Te=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,Disabled:I,ReadOnly:$,WithError:x,WithHint:b,WithIcon:m,WithLabel:h,WithLimit:f,WithPrefix:g,__namedExportsOrder:Te,default:Pe},Symbol.toStringTag,{value:"Module"}));export{c as B,I as D,$ as R,Ce as T,h as W,b as a,g as b,m as c,f as d,x as e};
