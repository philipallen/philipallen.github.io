import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as s}from"./index-CcKhGcwW.js";import{a as ae}from"./Label-GNbXzScb.js";import{b as le}from"./Text-CoyfJyUy.js";import{u as P,l as x,d as C}from"./index-C1QKVHyt.js";import{b as ie}from"./Input-CWsjCZxx.js";import{$ as Y}from"./useControlledState-CqLB86LT.js";import{b as S}from"./ListBox-BPkSMD1Y.js";import{a as ce}from"./Select-OCV5C0y7.js";import{a as de,L as ue}from"./Select.styled-RqVrZict.js";import{O as pe}from"./OuterField-zbUULvu3.js";import{C as be,P as me}from"./Popover-CJmY6fdk.js";import{L as v}from"./ListBoxItem-_ura-Fpc.js";import{$ as he}from"./VisuallyHidden-CYAIBC6z.js";import{a as F}from"./utils-CrCrZF7Z.js";import{T as fe}from"./TextInput-CI_HrTL9.js";import{b as R,I as ge,a as Ie}from"./InputLabelTop-DThkuFi7.js";import{c as ye}from"./index-C6I6VOZc.js";const Pe=C(ie)`
  ${()=>{const{tokens:n}=P(),{spacing:t}=n;return x`
      display: grid;
      gap: ${t.s8};
      grid-template-columns: 98px 1fr;
    `}}
`,xe=C.div`
  ${()=>{const{tokens:n}=P(),{spacing:t}=n;return x`
      display: grid;
      gap: ${t.s4};
    `}}
`;function Ce(n){const{setGroupWidth:t}=n,r=s.useRef(null);return s.useEffect(()=>{if(r.current){const l=new ResizeObserver(([i])=>{i&&t(i.contentRect.width)});return l.observe(r.current),()=>{l.disconnect()}}},[]),{groupRef:r}}const $=s.createContext({}),q=C(de)`
  ${()=>{const{tokens:n}=P(),{select:t}=n;return x`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      padding-left: ${t.button.padding.left};
      padding-right: ${t.button.padding.right};
    `}}
`,$e=C.div`
  ${()=>{const{tokens:n}=P(),{select:t}=n;return x`
      ${q}[data-disabled] & {
        opacity: ${t.menu.option.inner.icon.opacity.disabled};
      }

      svg {
        display: block;
        width: 32px;
        height: 22px;
      }
    `}}
`,je=C(ue)`
  ${()=>{const{tokens:n}=P(),{select:t}=n;return x`
      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${t.menu.separator.style};
        border-bottom-color: ${t.menu.separator.color};
      }
    `}}
`,z=s.forwardRef((n,t)=>{const{items:r,popoverWidth:l,testID:i="country-select",...c}=n,u=r.find(({id:o})=>o===c.selectedKey),p=s.useMemo(()=>r.filter(o=>o.isPromoted),[r]),d=s.useMemo(()=>r.filter(o=>!o.isPromoted),[r]);return e.jsxs(ce,{...c,"data-testid":i,children:[e.jsx(pe,{children:e.jsxs(q,{ref:t,children:[e.jsx($e,{children:u&&e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":"true",children:u.flag}),e.jsx(he,{children:u.label})]})}),e.jsx(be,{})]})}),e.jsx(me,{width:l,children:e.jsxs(je,{children:[p.length>0&&e.jsx(S,{items:p,children:o=>e.jsx(v,{id:o.id,icon:o.flag,textValue:`${o.label} ${o.callingCode}`,children:`${o.label} ${o.callingCode}`})}),d.length>0&&e.jsx(S,{items:d,children:o=>e.jsx(v,{id:o.id,icon:o.flag,textValue:`${o.label} ${o.callingCode}`,children:`${o.label} ${o.callingCode}`})})]})})]})});z.displayName="CountrySelect";const J=s.forwardRef((n,t)=>{const{countryDescribedBy:r,groupWidth:l,setStartSlot:i}=s.useContext($),[c,u]=Y(n.selectedKey,n.defaultSelectedKey||null),p=F(n.onSelectionChange,u);return s.useEffect(()=>{const d=n.items.find(({id:o})=>o===c);d&&i(d.callingCode)},[c]),e.jsx(z,{"aria-label":"Country code",...n,ref:t,popoverWidth:l,selectedKey:c,onSelectionChange:p,"aria-describedby":r})});J.displayName="Country";const Q=s.forwardRef((n,t)=>{const{numberDescribedBy:r,startSlot:l}=s.useContext($),[i,c]=Y(n.value,n.defaultValue||"");function u(d){return F(n.onChange,c)(d.replace(/[^\d\s]/g,""))}const p=l;return e.jsx(fe,{"aria-label":"Phone number",...n,ref:t,type:"tel",inputMode:"numeric",startSlot:l,value:i,onChange:u,"aria-describedby":r},p)});Q.displayName="Number";function a(n){const{labelProps:t,alerts:r,testID:l="phone-input",...i}=n,c=!!(t!=null&&t.label),u=!!(t!=null&&t.labelHint),p=s.useId(),d=s.useId(),o=s.useId(),j=s.useId(),X={id:p,elementType:"span"},Z={slots:{description:{id:d},countryErrorMessage:{id:o},numberErrorMessage:{id:j}}},ee=s.useMemo(()=>e.jsxs(xe,{children:[(r==null?void 0:r.country)&&e.jsx(R,{slot:"countryErrorMessage",alerts:r.country}),(r==null?void 0:r.number)&&e.jsx(R,{slot:"numberErrorMessage",alerts:r.number})]}),[r]),[te,ne]=s.useState(0),{groupRef:re}=Ce({setGroupWidth:ne}),[oe,se]=s.useState();return e.jsx($.Provider,{value:{countryDescribedBy:o,numberDescribedBy:j,groupWidth:te,startSlot:oe,setStartSlot:se},children:e.jsx(ae.Provider,{value:X,children:e.jsx(le.Provider,{value:Z,children:e.jsx(ge,{alert:r&&ee,children:e.jsx(Ie,{...t,children:e.jsx(Pe,{...i,ref:re,"aria-labelledby":[c&&p,u&&d].filter(Boolean).join(" ")||void 0,"data-testid":l})})})})})})}a.Country=J;a.Number=Q;a.displayName="PhoneInput";const y=ye.map(n=>{const{component:t}=n,r=["IE","GB","US"];return{id:n.code,label:n.label,callingCode:n.callingCode,flag:t&&e.jsx(t,{}),isPromoted:r.includes(n.code)}}),Se={title:"Components/Inputs/PhoneInput",component:a,render:function(t){return e.jsxs(a,{...t,children:[e.jsx(a.Country,{items:y,defaultSelectedKey:"IE"}),e.jsx(a.Number,{})]})},argTypes:{alerts:{control:{disable:!0}}}},b={args:{"aria-label":"PhoneInput label"}},m={args:{labelProps:{label:"PhoneInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{labelProps:{label:"PhoneInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},f={render:function(t){return e.jsxs(a,{...t,children:[e.jsx(a.Country,{items:y,defaultSelectedKey:"IE",isDisabled:!0}),e.jsx(a.Number,{isDisabled:!0})]})},args:{labelProps:{label:"PhoneInput label"}}},g={render:function(t){return e.jsxs(a,{...t,children:[e.jsx(a.Country,{items:y,defaultSelectedKey:"IE"}),e.jsx(a.Number,{isInvalid:!0})]})},args:{labelProps:{label:"PhoneInput label"},alerts:{number:[{severity:"error",children:"Error description over two lines if required."}]}}},I={render:function(t){return e.jsxs(a,{...t,children:[e.jsx(a.Country,{items:y,defaultSelectedKey:"IE",disabledKeys:y.slice(1,3).map(({id:r})=>r)}),e.jsx(a.Number,{})]})},args:{labelProps:{label:"PhoneInput label"}}};var E,B,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    "aria-label": "PhoneInput label"
  }
}`,...(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var T,D,K;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(D=m.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var N,O,_;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(O=h.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var W,w,A;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: function Render(args) {
    return <PhoneInput {...args}>
        <PhoneInput.Country items={MOCK_COUNTRY_ITEMS} defaultSelectedKey="IE" isDisabled />
        <PhoneInput.Number isDisabled />
      </PhoneInput>;
  },
  args: {
    labelProps: {
      label: "PhoneInput label"
    }
  }
}`,...(A=(w=f.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var L,H,k;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function Render(args) {
    return <PhoneInput {...args}>
        <PhoneInput.Country items={MOCK_COUNTRY_ITEMS} defaultSelectedKey="IE" />
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
}`,...(k=(H=g.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var U,V,G;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function Render(args) {
    return <PhoneInput {...args}>
        <PhoneInput.Country items={MOCK_COUNTRY_ITEMS} defaultSelectedKey="IE" disabledKeys={MOCK_COUNTRY_ITEMS.slice(1, 3).map(({
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
}`,...(G=(V=I.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ve=["Basic","WithLabel","WithHint","Disabled","Invalid","DisabledItems"],Ge=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Disabled:f,DisabledItems:I,Invalid:g,WithHint:h,WithLabel:m,__namedExportsOrder:ve,default:Se},Symbol.toStringTag,{value:"Module"}));export{b as B,f as D,g as I,Ge as P,m as W,h as a,I as b};
