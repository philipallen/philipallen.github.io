import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{f as q}from"./index-iP1lhtUC.js";import{r as x}from"./index-CcKhGcwW.js";import{u as fe}from"./downshift.esm-CA7rj1sz.js";import{a as l,u as c,b as i,p as me}from"./index-BHlkTKmU.js";import{d as $e}from"./index-WLaP1tkh.js";import{T as Ie,e as xe,f as Pe}from"./index-DTdU3ZNX.js";import{C as ke}from"./TextInput.styled-BmIWFU8-.js";import{M as ye}from"./Select.constants-D58dHOlB.js";import{I as ve,a as we}from"./InputAlerts-C0T-ByS6.js";import{I as Ce}from"./InputLabelTop-BcKQCRLF.js";import{c as Le,d as je,o as He,f as Se,s as Te,F as Ae}from"./floating-ui.react-DD7SKzjW.js";import{r as Be}from"./index-uaANFLeC.js";import{u as Ee}from"./OverlayContext-DE6V0lcf.js";import{S as Re}from"./ScrollShadowContainer-CKmEiZsq.js";import{T as De}from"./Typography-CTcPHIiy.js";import{b as We}from"./AlertAssociationProps-CEhVpbTc.js";import{m as _e,a as Oe,b as Ve}from"./Combobox.mocks-Ba1YtT-l.js";const Me=l(ke)`
  &:disabled {
    cursor: not-allowed;
  }
`,Fe=l.li`
  ${({$withSeparator:t})=>{const{tokens:e}=c(),{select:s}=e;return[i`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${s.menu.option.minHeight};
        padding: ${s.menu.option.padding};
        background: ${s.menu.option.backgroundColor.base};
        cursor: pointer;
      `,t&&i`
          border-bottom-style: 2px;
          border-bottom-style: ${s.menu.separator.style};
          border-bottom-color: ${s.menu.separator.color};
        `]}}
`,ze=l.div`
  ${({$isSelected:t,$isHighlighted:e})=>{const{tokens:s}=c(),{select:n}=s;return[i`
        display: grid;
        align-items: center;
        color: ${n.menu.option.inner.color.base};
        padding-top: ${n.menu.option.inner.padding.top};
        padding-left: ${n.menu.option.inner.padding.left};
        padding-right: ${n.menu.option.inner.padding.right};
        padding-bottom: ${n.menu.option.inner.padding.bottom};
        border-radius: ${n.menu.option.inner.radius};
        background: ${n.menu.option.inner.backgroundColor.base};
        outline-width: ${n.menu.option.inner.stroke.width};
        outline-style: ${n.menu.option.inner.stroke.style};
        outline-color: ${n.menu.option.inner.stroke.color.base};
        outline-offset: ${n.menu.option.inner.stroke.offset};

        &:active {
          background: ${n.menu.option.inner.backgroundColor.active};
          outline-color: ${n.menu.option.inner.stroke.color.active};
        }
      `,t&&i`
          background: ${n.menu.option.inner.backgroundColor.selected};
          outline-color: ${n.menu.option.inner.stroke.color.selected};
        `,e&&i`
          background: ${n.menu.option.inner.backgroundColor.hover};
          outline-color: ${n.menu.option.inner.stroke.color.hover};
        `]}}
`,qe=l.div`
  ${({$withIcon:t})=>{const{tokens:e}=c(),{select:s}=e;return[i`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${s.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,t&&i`
          grid-template-columns: auto auto 1fr;
        `]}}
`,Ge=l.div`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return[i`
        display: grid;
        place-items: center;
        width: ${e.menu.option.inner.tickIconWrapper.width};
        height: ${me(e.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,Ue=l(Ie)`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return[i`
        width: ${e.menu.option.inner.tickIcon.width};
        height: ${e.menu.option.inner.tickIcon.height};
        color: ${e.menu.option.inner.tickIcon.color};
      `]}}
`,Ke=l.div`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return[i`
        display: grid;
        place-items: center;
        margin-right: 4px;
        height: ${me(e.menu.option.inner.iconWrapper.height)};

        svg {
          width: ${e.menu.option.inner.icon.width};
          max-height: ${e.menu.option.inner.icon.maxHeight};
        }
      `]}}
`,Xe=l.div`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return[i`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${e.button.focusRing.radius};
          outline-width: ${e.button.focusRing.width};
          outline-style: ${e.button.focusRing.style};
          outline-color: ${e.button.focusRing.color};
          outline-offset: ${e.button.focusRing.offset};
        }
      `]}}
`,Ye=l.div`
  ${({$isOpen:t,$hasError:e,$isDisabled:s})=>{const{tokens:n}=c(),{select:o}=n;return[i`
        display: grid;
        min-height: ${o.button.minHeight};
        background: ${o.button.backgroundColor.base};
        padding-top: ${o.button.padding.top};
        padding-left: ${o.button.padding.left};
        padding-right: ${o.button.padding.right};
        padding-bottom: ${o.button.padding.bottom};
        border-radius: ${o.button.stroke.radius};
        outline-width: ${o.button.stroke.width.base};
        outline-style: ${o.button.stroke.style};
        outline-color: ${o.button.stroke.color.base};
        outline-offset: ${o.button.stroke.offset.base};

        svg {
          color: ${o.button.icon.color.base};
        }

        &:hover,
        &:has(:focus) {
          outline-width: ${o.button.stroke.width.hover};
          outline-color: ${o.button.stroke.color.hover};
          outline-offset: ${o.button.stroke.offset.hover};

          svg {
            color: ${o.button.icon.color.hover};
          }
        }
      `,e&&i`
          & {
            outline-width: ${o.button.stroke.width.error};
            outline-color: ${o.button.stroke.color.error};
            outline-offset: ${o.button.stroke.offset.error};
          }
        `,t&&i`
          &,
          &:hover,
          &:has(:focus) {
            outline-width: ${o.button.stroke.width.active};
            outline-color: ${o.button.stroke.color.active};
            outline-offset: ${o.button.stroke.offset.active};

            svg {
              color: ${o.button.icon.color.active};
            }
          }
        `,s&&i`
          cursor: not-allowed;

          &,
          &:hover,
          &:has(:focus) {
            outline-width: ${o.button.stroke.width.disabled};
            outline-color: ${o.button.stroke.color.disabled};
            outline-offset: ${o.button.stroke.offset.disabled};

            svg {
              color: ${o.button.icon.color.disabled};
            }
          }
        `]}}
`,Je=l.div`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return i`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${e.button.gap};
    `}}
`,Ne=l.button`
  all: unset;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`,Qe=l.div`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return i`
      display: grid;
      place-items: center;

      svg {
        width: ${e.button.icon.width};
        height: ${e.button.icon.height};
      }
    `}}
`,be=l(xe)`
  rotate: 0deg;
`,Ze=l(be)`
  rotate: 180deg;
`,eo=l.div`
  ${({$isOpen:t})=>{const{tokens:e}=c(),{select:s}=e;return i`
      display: ${t?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${s.menu.radius};
      border-width: ${s.menu.stroke.width};
      border-style: ${s.menu.stroke.style};
      border-color: ${s.menu.stroke.color};
      box-shadow: 0px 2px 2px ${s.menu.shadow.outer.color};
      z-index: ${s.menu.zIndex};
    `}}
`,oo=l.ul`
  ${()=>{const{tokens:t}=c(),{select:e}=t;return i`
      all: unset;
      display: grid;
      gap: ${e.menu.separator.width};
      background: ${e.menu.separator.color};
    `}}
`;function to(t){const{offsetValue:e}=t,[s,n]=x.useState(),{refs:o,floatingStyles:d}=Le({placement:"bottom",whileElementsMounted:je,middleware:[He(e),Se({padding:16}),Te({padding:16,apply({rects:$,elements:u,availableHeight:I}){Object.assign(u.floating.style,{minWidth:`${$.reference.width}px`}),Be.flushSync(()=>n(I))}})]});return{refs:o,floatingStyles:d,availableListHeight:s}}function ro(t){const{getToggleButtonProps:e,getMenuProps:s,isOpen:n,items:o,toggleButtonProps:d,renderHeaderContent:$,renderListItem:u,hasError:I,isDisabled:p,maxListHeight:g,alertAssociationProps:j,testID:B="combobox"}=t,{tokens:m}=c(),{select:E}=m,{refs:H,floatingStyles:R,availableListHeight:h}=to({offsetValue:parseInt(E.gap,10)}),D={ref:H.setFloating},W={suppressRefError:!0},{ref:_,...O}=s(D,W),{portalElement:V}=Ee();let S=g;return h&&g&&h<g&&(S=h),r.jsxs(r.Fragment,{children:[r.jsx(Xe,{children:r.jsx(Ye,{ref:H.setReference,$isOpen:n,$hasError:I,$isDisabled:p,"data-testid":B,...j,children:r.jsxs(Je,{children:[$(),r.jsx(Ne,{type:"button","aria-label":"Toggle",...d,...e({disabled:p}),children:r.jsx(Qe,{children:n?r.jsx(Ze,{"aria-hidden":"true"}):r.jsx(be,{"aria-hidden":"true"})})})]})})}),r.jsx(Ae,{root:V,children:r.jsx(eo,{ref:_,style:R,$isOpen:n&&o.length>0,children:r.jsx("div",{style:{maxHeight:S},children:r.jsx(Re,{children:r.jsx(oo,{...O,children:o.map((M,T)=>u(M,T))})})})})})]})}function no(t,e){const{labelProps:s,placeholder:n="Select",items:o,selectedItem:d,onChange:$,inputValue:u,setInputValue:I,alertProps:p,testID:g="combobox",...j}=t,{isDisabled:B}=j,m=x.useMemo(()=>{let a=o;return u.length>0&&(a=a.filter(b=>{const f=b.title.toLowerCase(),A=u.trim().toLowerCase();return f.includes(A)})),a.sort((b,f)=>b.isPromoted===f.isPromoted?0:b.isPromoted?-1:1)},[o,u]),E=m.at(-1),H=x.useMemo(()=>m.filter(a=>a.isPromoted).at(-1),[m]),{tokens:R}=c(),{select:h}=R,{getLabelProps:D,getToggleButtonProps:W,getMenuProps:_,getInputProps:O,isOpen:V,getItemProps:S,highlightedIndex:M}=fe({onInputValueChange({inputValue:a}){I(a)},items:m,selectedItem:d,itemToString:$e.itemToString,onSelectedItemChange:({selectedItem:a})=>$(a)}),T=x.useId(),{labelHint:ge}=s,F=ge?T:void 0,z=x.useId(),he=We(z,t,F);return r.jsx("div",{ref:e,children:r.jsx(ve,{alert:p&&r.jsx("div",{id:z,"data-testid":`${g}-alerts`,children:r.jsx(we,{alerts:Array.isArray(p)?p:[p]})}),children:r.jsx(Ce,{...s,...D(),labelHintID:T,children:r.jsx(ro,{...j,items:m,toggleButtonProps:{"aria-describedby":F},getToggleButtonProps:W,getMenuProps:_,isOpen:V,renderHeaderContent:()=>r.jsx(Me,{disabled:B,placeholder:n,...O()}),renderListItem:(a,b)=>{const f=d===a,A=M===b;return r.jsx(Fe,{$withSeparator:a!==E&&a===H,...S({item:a,index:b}),"data-hovered":A||void 0,tabIndex:-1,children:r.jsx(ze,{$isSelected:f,$isHighlighted:A,children:r.jsxs(qe,{$withIcon:a.icon!==void 0,children:[r.jsx(Ge,{children:f&&r.jsx(Ue,{"aria-hidden":"true"})}),a.icon&&r.jsx(Ke,{children:a.icon}),r.jsx(De,{component:"div",color:"inherit",title:a.title,variant:h.menu.option.inner.text.typography.variant,fontFamily:h.menu.option.inner.text.typography.fontFamily,children:a.title})]})})},a.id)},maxListHeight:ye,testID:g,alertAssociationProps:he})})})})}const G=Pe(no),{useArgs:so}=__STORYBOOK_MODULE_PREVIEW_API__,ao={title:"Components/Inputs/Combobox",component:G,render:function(e){const[,s]=so();function n(d){e.onChange(d),s({selectedItem:d})}function o(d){e.setInputValue(d),s({inputValue:d})}return r.jsx("div",{style:{height:420},children:r.jsx(G,{...e,onChange:n,setInputValue:o})})},argTypes:{labelProps:{control:{disable:!0}},placeholder:{type:"string"},items:{control:{disable:!0}},selectedItem:{control:{disable:!0}},onChange:{control:{disable:!0}},inputValue:{type:"string"},setInputValue:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{placeholder:"Search",items:_e,selectedItem:null,onChange:q(),inputValue:"",setInputValue:q(),hasError:!1,isDisabled:!1}},P={args:{labelProps:{"aria-label":"Label"}}},k={args:{items:Oe,labelProps:{"aria-label":"Label"}}},y={args:{items:Ve,labelProps:{"aria-label":"Label"}}},v={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},w={args:{labelProps:{label:"Label for Combobox",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},C={args:{labelProps:{label:"Label for Combobox",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},L={args:{hasError:!0,labelProps:{label:"Label for Combobox"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var U,K,X;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(X=(K=P.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,J,N;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(N=(J=k.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,re;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,ae;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Combobox",
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
}`,...(ae=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,le,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Combobox",
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
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label for Combobox"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const io=["Basic","IconItems","PromotedItems","Disabled","WithLabel","WithHint","WithError"],Lo=Object.freeze(Object.defineProperty({__proto__:null,Basic:P,Disabled:v,IconItems:k,PromotedItems:y,WithError:L,WithHint:C,WithLabel:w,__namedExportsOrder:io,default:ao},Symbol.toStringTag,{value:"Module"}));export{P as B,Lo as C,v as D,k as I,y as P,w as W,C as a,L as b};
