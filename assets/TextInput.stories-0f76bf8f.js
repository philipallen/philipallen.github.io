import{a as l,u as a,b as s,j as n}from"./index-144fe590.js";import{a as oe}from"./index-583b5bb5.js";import{T as se,I as le}from"./index-ad927c2b.js";import{g as ie}from"./index-1225df13.js";import{r as T}from"./index-c013ead5.js";import{T as y}from"./Typography-ad5c06ac.js";import{I as ce,a as pe}from"./InputAlert-5ca9be79.js";const ue=l.label`
  ${()=>{const{tokens:r}=a(),{inputLabelTop:e}=r;return s`
      width: 100%;
      display: grid;
      gap: ${e.gap};
      user-select: none;

      &:has(:disabled) {
        pointer-events: none;
      }
    `}}
`,de=l.div`
  ${()=>{const{tokens:r}=a(),{inputLabelTop:e}=r;return s`
      color: ${e.label.color.base};
    `}}
`,he=l.div`
  ${()=>{const{tokens:r}=a(),{inputLabelTop:e}=r;return s`
      color: ${e.labelHint.color.base};
    `}}
`;function be(r){const{label:e,labelHint:t,children:o,...p}=r,{tokens:c}=a(),{inputLabelTop:u}=c;return n.jsxs(ue,{...p,children:[n.jsxs("div",{children:[e&&n.jsx(de,{children:n.jsx(y,{component:"span",color:"inherit",fontFamily:u.label.fontFamily,variant:u.label.typographyVariant,children:e})}),t&&n.jsx(he,{children:n.jsx(y,{component:"span",color:"inherit",fontFamily:u.labelHint.fontFamily,variant:u.labelHint.typographyVariant,children:t})})]}),n.jsx("div",{children:o})]})}const ge=l(be)`
  ${()=>s`
      width: 100%;
    `}
`,me=l.div`
  ${()=>{const{tokens:r}=a(),{textInput:e}=r;return s`
      width: 100%;
      height: ${e.height};
      display: flex;
      align-items: center;
      padding-right: ${e.paddingRight};
      padding-left: ${e.paddingLeft};
    `}}
`,fe=l.input`
  ${()=>{const{tokens:r}=a(),{textInput:e,typography:t}=r,o=e.typographyVariant;return s`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${e.color.base};
      font-family: ${t.fontFamily[o]};
      font-size: ${t.fontSize[o]};
      line-height: ${t.lineHeight[o]};

      label:has(input:read-only) && {
        color: ${e.color.readOnly};
      }
    `}}
`,xe=l(y)`
  ${()=>{const{tokens:r}=a(),{textInput:e}=r;return s`
      color: ${e.prefix.color};
      margin-right: ${e.prefix.marginRight};
    `}}
`,Ie=l.div`
  ${()=>{const{tokens:r}=a(),{textInput:e}=r;return s`
      display: flex;
      align-items: center;
      margin-left: ${e.icon.marginLeft};
    `}}
`,$e=l.div`
  ${({$hasError:r})=>{const{tokens:e}=a(),{outerField:t}=e;return[s`
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
      `,r&&s`
          &&,
          label:has(input:read-only) &&,
          label:has(input:focus) && {
            outline-width: ${t.stroke.width.error};
            outline-color: ${t.stroke.color.error};
            outline-offset: -${t.stroke.width.error};
          }
        `]}}
`,ye=l.div`
  ${()=>{const{tokens:r}=a(),{outerField:e}=r;return s`
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
`;function we(r){const{hasError:e,children:t}=r;return n.jsx(ye,{children:n.jsx($e,{$hasError:e,children:t})})}const ke=l(y)`
  ${()=>{const{tokens:r}=a(),{charactersCounter:e}=r;return s`
      width: 100%;
      color: ${e.color};
      text-align: ${e.textAlign};
    `}}
`;function ve(r){const{length:e,maxLength:t,testID:o}=r,{tokens:p}=a(),{charactersCounter:c}=p;return n.jsxs(ke,{variant:c.typographyVariant,testID:o,children:[e,"/",t]})}function L(r){var v;const{hasError:e,prefix:t,icon:o,onChange:p,testID:c="input",labelProps:u,alertProps:w,...d}=r,{maxLength:k}=d,{tokens:{textInput:te}}=a(),[re,ne]=T.useState(((v=d.value||d.defaultValue)==null?void 0:v.length)||0),ae=T.useCallback(P=>{ne(P.target.value.length),p==null||p(P)},[p]);return n.jsxs(ce,{gap:d.maxLength?"4px":"8px",alert:w?n.jsx(pe,{...w,testID:`${c}-alert`}):void 0,children:[n.jsx(ge,{...u,children:n.jsx(we,{hasError:e,children:n.jsxs(me,{children:[t?n.jsx(xe,{variant:te.prefix.typographyVariant,testID:`${c}-prefix`,children:t}):void 0,n.jsx(fe,{"data-testid":c,...d,onChange:ae}),o?n.jsx(Ie,{"data-testid":`${c}-icon-wrapper`,children:o}):void 0]})})}),k?n.jsx(ve,{length:re,maxLength:k,testID:`${c}-characters-counter`}):void 0]})}const Pe={title:"Inputs/TextInput",component:L,render:function(e){function t(o){oe("onChange")(o)}return n.jsx(L,{...e,onChange:t})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:ie(le,24)},args:{hasError:!1,readOnly:!1}},i={args:{labelProps:{"aria-label":"Text Input"}}},h={...i,args:{labelProps:{label:"Labelled Input","aria-label":"Labelled Input"}}},b={...i,args:{labelProps:{label:"Input with Hint",labelHint:"Additional information","aria-label":"Input with Hint"}}},g={args:{prefix:"€",labelProps:{label:"Input with Prefix","aria-label":"Text Input"}}},m={args:{icon:n.jsx(se,{height:24,width:24}),labelProps:{label:"Input with Icon","aria-label":"Text Input"}}},f={args:{maxLength:15,labelProps:{label:"Input with Limit","aria-label":"Text Input"}}},x={...i,args:{hasError:!0,labelProps:{label:"Input with Error","aria-label":"Input with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},I={...i,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled Field","aria-label":"Disabled Input"}}},$={...i,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly Field","aria-label":"ReadOnly Input"}}};var j,S,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Text Input"
    }
  }
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var E,O,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Input",
      "aria-label": "Labelled Input"
    }
  }
}`,...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var C,H,D;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Input with Hint",
      labelHint: "Additional information",
      "aria-label": "Input with Hint"
    }
  }
}`,...(D=(H=b.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var F,B,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Input with Prefix",
      "aria-label": "Text Input"
    }
  }
}`,...(V=(B=g.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var _,A,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Input with Icon",
      "aria-label": "Text Input"
    }
  }
}`,...(z=(A=m.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var q,M,G;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Input with Limit",
      "aria-label": "Text Input"
    }
  }
}`,...(G=(M=f.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,K,N;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled Field",
      "aria-label": "Disabled Input"
    }
  }
}`,...(X=(U=I.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly Field",
      "aria-label": "ReadOnly Input"
    }
  }
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Te=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","Disabled","ReadOnly"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:I,ReadOnly:$,WithError:x,WithHint:b,WithIcon:m,WithLabel:h,WithLimit:f,WithPrefix:g,__namedExportsOrder:Te,default:Pe},Symbol.toStringTag,{value:"Module"}));export{i as B,I as D,$ as R,Ce as T,h as W,b as a,g as b,m as c,f as d,x as e};
