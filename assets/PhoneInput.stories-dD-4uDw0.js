import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as s}from"./index-CcKhGcwW.js";import{a as re}from"./Label-CxUBTwi1.js";import{a as ne}from"./Text-DC2Lycci.js";import{a as x,u as I,b as y}from"./index-D1OOBdzz.js";import{$ as oe}from"./Group-oOA39aJ_.js";import{$ as V}from"./useControlledState-Bw1hdnkP.js";import{$ as j}from"./ListBox-Ch6RuDVl.js";import{$ as se}from"./Select-5wogoinJ.js";import{a as ae,L as le,O as ie}from"./OuterField-ByRjjeou.js";import{C as ce,P as de,L as S}from"./ListBoxItem-Dri0CUW8.js";import{$ as ue}from"./VisuallyHidden-BNZM_wZC.js";import{a as k}from"./utils-BPOuYIA2.js";import{T as pe}from"./TextInputV2-B5B9-AM2.js";import{a as v,I as be}from"./InputAlerts-BK_QjMFS.js";import{I as me}from"./InputLabelTopV2-Cp-x5XMa.js";import{c as he}from"./index-rDNCPyWx.js";const fe=x(oe)`
  ${()=>{const{tokens:r}=I(),{spacing:e}=r;return y`
      display: grid;
      gap: ${e.s8};
      grid-template-columns: 98px 1fr;
    `}}
`,ge=x.div`
  ${()=>{const{tokens:r}=I(),{spacing:e}=r;return y`
      display: grid;
      gap: ${e.s4};
    `}}
`;function xe(r){const{setGroupWidth:e}=r,n=s.useRef(null);return s.useEffect(()=>{if(n.current){const l=new ResizeObserver(([i])=>{i&&e(i.contentRect.width)});return l.observe(n.current),()=>{l.disconnect()}}},[]),{groupRef:n}}const P=s.createContext({}),G=x(ae)`
  ${()=>{const{tokens:r}=I(),{select:e}=r;return y`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      padding-left: ${e.button.padding.left};
      padding-right: ${e.button.padding.right};
    `}}
`,Ie=x.div`
  ${()=>{const{tokens:r}=I(),{select:e}=r;return y`
      ${G}[data-disabled] & {
        opacity: ${e.menu.option.inner.icon.opacity.disabled};
      }

      svg {
        display: block;
        width: 32px;
        height: 22px;
      }
    `}}
`,ye=x(le)`
  ${()=>{const{tokens:r}=I(),{select:e}=r;return y`
      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,U=s.forwardRef((r,e)=>{const{items:n,popoverWidth:l,testID:i="country-select",...c}=r,d=n.find(({id:o})=>o===c.selectedKey),u=s.useMemo(()=>n.filter(o=>o.isPromoted),[n]),p=s.useMemo(()=>n.filter(o=>!o.isPromoted),[n]);return t.jsxs(se,{...c,"data-testid":i,children:[t.jsx(ie,{children:t.jsxs(G,{ref:e,children:[t.jsx(Ie,{children:d&&t.jsxs(t.Fragment,{children:[t.jsx("div",{"aria-hidden":"true",children:d.flag}),t.jsx(ue,{children:d.label})]})}),t.jsx(ce,{})]})}),t.jsx(de,{width:l,children:t.jsxs(ye,{children:[u.length>0&&t.jsx(j,{items:u,children:o=>t.jsx(S,{id:o.id,icon:o.flag,textValue:`${o.label} ${o.callingCode}`,children:`${o.label} ${o.callingCode}`})}),p.length>0&&t.jsx(j,{items:p,children:o=>t.jsx(S,{id:o.id,icon:o.flag,textValue:`${o.label} ${o.callingCode}`,children:`${o.label} ${o.callingCode}`})})]})})]})});U.displayName="CountrySelect";const F=s.forwardRef((r,e)=>{const{countryDescribedBy:n,groupWidth:l,setStartSlot:i}=s.useContext(P),[c,d]=V(r.selectedKey,r.defaultSelectedKey||null),u=k(r.onSelectionChange,d);return s.useEffect(()=>{const p=r.items.find(({id:o})=>o===c);p&&i(p.callingCode)},[c]),t.jsx(U,{"aria-label":"Country code",...r,ref:e,popoverWidth:l,selectedKey:c,onSelectionChange:u,"aria-describedby":n})});F.displayName="Country";const Y=s.forwardRef((r,e)=>{const{numberDescribedBy:n,startSlot:l}=s.useContext(P),[i,c]=V(r.value,r.defaultValue||"");function d(u){return k(r.onChange,c)(u.replace(/[^\d\s]/g,""))}return t.jsx(pe,{"aria-label":"Phone number",...r,ref:e,type:"tel",inputMode:"numeric",startSlot:l,value:i,onChange:d,"aria-describedby":n})});Y.displayName="Number";function a(r){const{labelProps:e,alerts:n,testID:l="phone-input",...i}=r,c=!!(e!=null&&e.label),d=!!(e!=null&&e.labelHint),u=s.useId(),p=s.useId(),o=s.useId(),C=s.useId(),q={id:u,elementType:"span"},z={slots:{description:{id:p},countryErrorMessage:{id:o},numberErrorMessage:{id:C}}},J=s.useMemo(()=>t.jsxs(ge,{children:[(n==null?void 0:n.country)&&t.jsx(v,{slot:"countryErrorMessage",alerts:n.country}),(n==null?void 0:n.number)&&t.jsx(v,{slot:"numberErrorMessage",alerts:n.number})]}),[n]),[Q,X]=s.useState(0),{groupRef:Z}=xe({setGroupWidth:X}),[ee,te]=s.useState();return t.jsx(P.Provider,{value:{countryDescribedBy:o,numberDescribedBy:C,groupWidth:Q,startSlot:ee,setStartSlot:te},children:t.jsx(re.Provider,{value:q,children:t.jsx(ne.Provider,{value:z,children:t.jsx(be,{alert:J,children:t.jsx(me,{...e,children:t.jsx(fe,{...i,ref:Z,"aria-labelledby":[c&&u,d&&p].filter(Boolean).join(" ")||void 0,"data-testid":l})})})})})})}a.Country=F;a.Number=Y;const $=he.map(r=>{const{component:e}=r,n=["IE","GB","US"];return{id:r.code,label:r.label,callingCode:r.callingCode,flag:e&&t.jsx(e,{}),isPromoted:n.includes(r.code)}}),Pe={title:"Components/Inputs/PhoneInput",component:a,render:function(e){return t.jsxs(a,{...e,children:[t.jsx(a.Country,{items:$,defaultSelectedKey:"IE"}),t.jsx(a.Number,{})]})},argTypes:{alerts:{control:{disable:!0}}}},b={args:{"aria-label":"PhoneInput label"}},m={args:{labelProps:{label:"PhoneInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{labelProps:{label:"PhoneInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},f={render:function(e){return t.jsxs(a,{...e,children:[t.jsx(a.Country,{items:$,defaultSelectedKey:"IE",isDisabled:!0}),t.jsx(a.Number,{isDisabled:!0})]})},args:{labelProps:{label:"PhoneInput label"}}},g={render:function(e){return t.jsxs(a,{...e,children:[t.jsx(a.Country,{items:$,defaultSelectedKey:"IE"}),t.jsx(a.Number,{isInvalid:!0})]})},args:{labelProps:{label:"PhoneInput label"},alerts:{number:[{severity:"error",children:"Error description over two lines if required."}]}}};var B,R,E;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    "aria-label": "PhoneInput label"
  }
}`,...(E=(R=b.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var D,M,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var W,w,N;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(w=h.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var O,A,K;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(A=f.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var _,L,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const $e=["Basic","WithLabel","WithHint","Disabled","Invalid"],Le=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Disabled:f,Invalid:g,WithHint:h,WithLabel:m,__namedExportsOrder:$e,default:Pe},Symbol.toStringTag,{value:"Module"}));export{b as B,f as D,g as I,Le as P,m as W,h as a};
