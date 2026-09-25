import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-BVaTkfsr.js";import{a as se}from"./useLabel-Di5ZsSG1.js";import{a as le}from"./Text-BjRUEV8n.js";import{u as P,i as y,a as $}from"./index-BpMil6Tx.js";import{a as ie}from"./Input-DAn3HBs7.js";import{a as Y}from"./filterDOMProps--0WFEK8x.js";import{$ as F}from"./useControlledState-n_cs0odp.js";import{$ as ce}from"./VisuallyHidden-8I7ZAGxa.js";import{$ as ue,b as v}from"./ListBox-Y0CKnc0k.js";import{a as de}from"./Select-BXFaTz8y.js";import{a as pe}from"./Select.styled-ne9nUQVA.js";import{u as be}from"./ScrollShadow.hooks-IrBnYoiS.js";import{O as me}from"./OuterField-CV3eciED.js";import{C as he,P as fe}from"./Popover-BDZ94LIb.js";import{L as S}from"./ListBoxItem-CmJAxWOy.js";import{T as ge}from"./TextInput-CAmTEWb0.js";import{b as R,I as Ie,a as xe}from"./InputLabelTop--1mm_taL.js";import{c as Pe}from"./index-CJ8cel7t.js";const ye=$(ie)`
  ${()=>{const{tokens:e}=P(),{spacing:n}=e;return y`
      display: grid;
      gap: ${n.s8};
      grid-template-columns: 98px 1fr;
    `}}
`,$e=$.div`
  ${()=>{const{tokens:e}=P(),{spacing:n}=e;return y`
      display: grid;
      gap: ${n.s4};
    `}}
`;function Ce(e){const{setGroupWidth:n}=e,r=a.useRef(null);return a.useEffect(()=>{if(r.current){const l=new ResizeObserver(([i])=>{i&&n(i.contentRect.width)});return l.observe(r.current),()=>{l.disconnect()}}},[]),{groupRef:r}}const C=a.createContext({}),q=$(pe)`
  ${()=>{const{tokens:e}=P(),{select:n}=e;return y`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      padding-left: ${n.button.padding.left};
      padding-right: ${n.button.padding.right};
    `}}
`,je=$.div`
  ${()=>{const{tokens:e}=P(),{select:n}=e;return y`
      ${q}[data-disabled] & {
        opacity: ${n.menu.option.inner.icon.opacity.disabled};
      }

      svg {
        display: block;
        width: 32px;
        height: 22px;
      }
    `}}
`,ve=$(ue)`
  ${()=>{const{tokens:e}=P(),{select:n}=e,r=be();return y`
      outline: none;
      overflow-y: auto;

      ${r}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${n.menu.separator.style};
        border-bottom-color: ${n.menu.separator.color};
      }
    `}}
`,z=a.forwardRef((e,n)=>{const{items:r,popoverWidth:l,testID:i="country-select",...u}=e,d=r.find(({id:o})=>o===e.value||e.selectedKey),p=a.useMemo(()=>r.filter(o=>o.isPromoted),[r]),c=a.useMemo(()=>r.filter(o=>!o.isPromoted),[r]);return t.jsxs(de,{...u,"data-testid":i,children:[t.jsx(me,{children:t.jsxs(q,{ref:n,children:[t.jsx(je,{children:d&&t.jsxs(t.Fragment,{children:[t.jsx("div",{"aria-hidden":"true",children:d.flag}),t.jsx(ce,{children:d.label})]})}),t.jsx(he,{})]})}),t.jsx(fe,{width:l,children:t.jsxs(ve,{children:[p.length>0&&t.jsx(v,{items:p,children:o=>t.jsx(S,{id:o.id,icon:o.flag,textValue:`${o.label} ${o.callingCode}`,children:`${o.label} ${o.callingCode}`})}),c.length>0&&t.jsx(v,{items:c,children:o=>t.jsx(S,{id:o.id,icon:o.flag,textValue:`${o.label} ${o.callingCode}`,children:`${o.label} ${o.callingCode}`})})]})})]})});z.displayName="CountrySelect";const J=a.forwardRef((e,n)=>{const{countryDescribedBy:r,groupWidth:l,setStartSlot:i}=a.useContext(C),[u,d]=F(e.value||e.selectedKey,e.defaultValue||e.defaultSelectedKey||null),p=Y(e.onChange,d);return a.useEffect(()=>{const c=e.items.find(({id:o})=>o===u);c&&i(c.callingCode)},[u]),t.jsx(z,{"aria-label":"Country code",...e,ref:n,value:u,onChange:p,popoverWidth:l,"aria-describedby":r})});J.displayName="Country";const Q=a.forwardRef((e,n)=>{const{numberDescribedBy:r,startSlot:l}=a.useContext(C);function i(o){return o.replace(/[^\d\s]/g,"")}const[u,d]=F(e.value,e.defaultValue||"");function p(o){return Y(e.onChange,d)(i(o))}const c=l;return t.jsx(ge,{"aria-label":"Phone number",...e,ref:n,type:"tel",inputMode:"numeric",startSlot:l,value:u,onChange:p,"aria-describedby":r},c)});Q.displayName="Number";function s(e){const{labelProps:n,alerts:r,testID:l="phone-input",...i}=e,u=!!(n!=null&&n.label),d=!!(n!=null&&n.labelHint),p=a.useId(),c=a.useId(),o=a.useId(),j=a.useId(),X={id:p,elementType:"span"},Z={slots:{description:{id:c},countryErrorMessage:{id:o},numberErrorMessage:{id:j}}},ee=a.useMemo(()=>t.jsxs($e,{children:[(r==null?void 0:r.country)&&t.jsx(R,{slot:"countryErrorMessage",alerts:r.country}),(r==null?void 0:r.number)&&t.jsx(R,{slot:"numberErrorMessage",alerts:r.number})]}),[r]),[te,ne]=a.useState(0),{groupRef:re}=Ce({setGroupWidth:ne}),[oe,ae]=a.useState();return t.jsx(C.Provider,{value:{countryDescribedBy:o,numberDescribedBy:j,groupWidth:te,startSlot:oe,setStartSlot:ae},children:t.jsx(se.Provider,{value:X,children:t.jsx(le.Provider,{value:Z,children:t.jsx(Ie,{alert:r&&ee,children:t.jsx(xe,{...n,children:t.jsx(ye,{...i,ref:re,"aria-labelledby":[u&&p,d&&c].filter(Boolean).join(" ")||void 0,"data-testid":l})})})})})})}s.Country=J;s.Number=Q;s.displayName="PhoneInput";const x=Pe.map(e=>{const{component:n}=e,r=["IE","GB","US"];return{id:e.code,label:e.label,callingCode:e.callingCode,flag:n&&t.jsx(n,{}),isPromoted:r.includes(e.code)}}),Se={title:"Components/Inputs/PhoneInput",component:s,render:function(n){return t.jsxs(s,{...n,children:[t.jsx(s.Country,{items:x,defaultValue:"IE"}),t.jsx(s.Number,{})]})},argTypes:{alerts:{control:{disable:!0}}}},b={args:{"aria-label":"PhoneInput label"}},m={args:{labelProps:{label:"PhoneInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{labelProps:{label:"PhoneInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},f={render:function(n){return t.jsxs(s,{...n,children:[t.jsx(s.Country,{items:x,defaultValue:"IE",isDisabled:!0}),t.jsx(s.Number,{isDisabled:!0})]})},args:{labelProps:{label:"PhoneInput label"}}},g={render:function(n){return t.jsxs(s,{...n,children:[t.jsx(s.Country,{items:x,defaultValue:"IE"}),t.jsx(s.Number,{isInvalid:!0})]})},args:{labelProps:{label:"PhoneInput label"},alerts:{number:[{severity:"error",children:"Error description over two lines if required."}]}}},I={render:function(n){return t.jsxs(s,{...n,children:[t.jsx(s.Country,{items:x,defaultValue:"IE",disabledKeys:x.slice(1,3).map(({id:r})=>r)}),t.jsx(s.Number,{})]})},args:{labelProps:{label:"PhoneInput label"}}};var E,B,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    "aria-label": "PhoneInput label"
  }
}`,...(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var D,T,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "PhoneInput label",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var O,w,_;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "PhoneInput label",
      labelHint: "Additional information",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(_=(w=h.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var V,W,A;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render(args) {
    return <PhoneInput {...args}>
        <PhoneInput.Country items={MOCK_COUNTRY_ITEMS} defaultValue="IE" isDisabled />
        <PhoneInput.Number isDisabled />
      </PhoneInput>;
  },
  args: {
    labelProps: {
      label: "PhoneInput label"
    }
  }
}`,...(A=(W=f.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var K,L,k;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: function Render(args) {
    return <PhoneInput {...args}>
        <PhoneInput.Country items={MOCK_COUNTRY_ITEMS} defaultValue="IE" />
        <PhoneInput.Number isInvalid />
      </PhoneInput>;
  },
  args: {
    labelProps: {
      label: "PhoneInput label"
    },
    alerts: {
      number: [{
        severity: "error",
        children: "Error description over two lines if required."
      }]
    }
  }
}`,...(k=(L=g.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var H,U,G;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function Render(args) {
    return <PhoneInput {...args}>
        <PhoneInput.Country items={MOCK_COUNTRY_ITEMS} defaultValue="IE" disabledKeys={MOCK_COUNTRY_ITEMS.slice(1, 3).map(({
        id
      }) => id)} />
        <PhoneInput.Number />
      </PhoneInput>;
  },
  args: {
    labelProps: {
      label: "PhoneInput label"
    }
  }
}`,...(G=(U=I.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const Re=["Basic","WithLabel","WithHint","Disabled","Invalid","DisabledItems"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Disabled:f,DisabledItems:I,Invalid:g,WithHint:h,WithLabel:m,__namedExportsOrder:Re,default:Se},Symbol.toStringTag,{value:"Module"}));export{b as B,f as D,g as I,Fe as P,m as W,h as a,I as b};
