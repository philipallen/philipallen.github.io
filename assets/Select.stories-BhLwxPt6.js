import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{f as ne}from"./index-iP1lhtUC.js";import{f as K}from"./index-WLaP1tkh.js";import{r as p}from"./index-CcKhGcwW.js";import{a as ae}from"./downshift.esm-CA7rj1sz.js";import{a as c,u as l,b as a,p as se}from"./index-DmICCP6d.js";import{T as ie,f as le}from"./index-CinjkoEf.js";import{M as ce}from"./Select.constants-D58dHOlB.js";import{I as pe,a as de}from"./InputAlerts-CmJaV3As.js";import{I as ue}from"./InputLabelTop-BduwRT1d.js";import{S as me}from"./SelectBase-CQdt8LmA.js";import{T}from"./Typography-DLKMW7tv.js";import{b as be}from"./AlertAssociationProps-CEhVpbTc.js";const he=c.div`
  ${({$isDisabled:t,$hasSelectedItem:o})=>{const{tokens:i}=l(),{select:e}=i;return[a`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,t&&a`
          color: ${e.button.placeholder.color.disabled};
        `,o&&a`
          color: ${e.button.text.color.base};
        `,t&&o&&a`
          color: ${e.button.text.color.disabled};
        `]}}
`,ge=c.li`
  ${()=>{const{tokens:t}=l(),{select:o}=t;return[a`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${o.menu.option.minHeight};
        padding: ${o.menu.option.padding};
        background: ${o.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,fe=c.div`
  ${({$isSelected:t,$isHighlighted:o})=>{const{tokens:i}=l(),{select:e}=i;return[a`
        display: grid;
        align-items: center;
        color: ${e.menu.option.inner.color.base};
        padding-top: ${e.menu.option.inner.padding.top};
        padding-left: ${e.menu.option.inner.padding.left};
        padding-right: ${e.menu.option.inner.padding.right};
        padding-bottom: ${e.menu.option.inner.padding.bottom};
        border-radius: ${e.menu.option.inner.radius};
        background: ${e.menu.option.inner.backgroundColor.base};
        outline-width: ${e.menu.option.inner.stroke.width};
        outline-style: ${e.menu.option.inner.stroke.style};
        outline-color: ${e.menu.option.inner.stroke.color.base};
        outline-offset: ${e.menu.option.inner.stroke.offset};

        &:active {
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        }
      `,t&&a`
          background: ${e.menu.option.inner.backgroundColor.selected};
          outline-color: ${e.menu.option.inner.stroke.color.selected};
        `,o&&a`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,Pe=c.div`
  ${()=>{const{tokens:t}=l(),{select:o}=t;return[a`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${o.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,Ie=c.div`
  ${()=>{const{tokens:t}=l(),{select:o}=t;return[a`
        display: grid;
        place-items: center;
        width: ${o.menu.option.inner.tickIconWrapper.width};
        height: ${se(o.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,ye=c(ie)`
  ${()=>{const{tokens:t}=l(),{select:o}=t;return[a`
        width: ${o.menu.option.inner.tickIcon.width};
        height: ${o.menu.option.inner.tickIcon.height};
        color: ${o.menu.option.inner.tickIcon.color};
      `]}}
`;function $e(t,o){const{labelProps:i,placeholder:e="Select",selectedItem:n,onChange:I,alertProps:g,testID:y="select",...$}=t,{isDisabled:U,items:V}=$,{tokens:X}=l(),{select:f}=X,P=p.useRef(n);p.useEffect(()=>{P.current=n},[n]);const Y=p.useCallback(({selectedItem:s})=>{P.current!==s&&(P.current=s,I(s))},[I]),{getLabelProps:J,getToggleButtonProps:N,getMenuProps:Q,isOpen:Z,getItemProps:ee,highlightedIndex:oe}=ae({items:V,selectedItem:n,itemToString:K.itemToString,onSelectedItemChange:Y}),k=p.useId(),{labelHint:te}=i,S=te?k:void 0,x=p.useId(),re=be(x,t,S);return r.jsx("div",{ref:o,children:r.jsx(pe,{alert:g&&r.jsx("div",{id:x,"data-testid":`${y}-alerts`,children:r.jsx(de,{alerts:Array.isArray(g)?g:[g]})}),children:r.jsx(ue,{...i,...J(),labelHintID:k,children:r.jsx(me,{...$,toggleButtonProps:{"aria-describedby":S},getToggleButtonProps:N,getMenuProps:Q,isOpen:Z,renderButtonContent:()=>r.jsx(he,{$isDisabled:U,$hasSelectedItem:!!n,children:r.jsx(T,{component:"div",color:"inherit",variant:f.button.text.typography.variant,fontFamily:f.button.text.typography.fontFamily,noWrap:!0,children:n?n.title:e})}),renderListItem:(s,v)=>{const L=n===s,A=oe===v;return r.jsx(ge,{...ee({item:s,index:v}),"data-hovered":A||void 0,tabIndex:-1,children:r.jsx(fe,{$isSelected:L,$isHighlighted:A,children:r.jsxs(Pe,{children:[r.jsx(Ie,{children:L&&r.jsx(ye,{"aria-hidden":"true"})}),r.jsx(T,{component:"div",color:"inherit",title:s.title,variant:f.menu.option.inner.text.typography.variant,fontFamily:f.menu.option.inner.text.typography.fontFamily,children:s.title})]})})},s.id)},maxListHeight:ce,testID:y,alertAssociationProps:re})})})})}const j=le($e),{useArgs:ke}=__STORYBOOK_MODULE_PREVIEW_API__,Se={title:"Components/Inputs/Select",component:j,render:function(o){const[,i]=ke();function e(n){o.onChange(n),i({selectedItem:n})}return r.jsx("div",{style:{height:420},children:r.jsx(j,{...o,onChange:e})})},argTypes:{labelProps:{control:{disable:!0}},placeholder:{type:"string"},items:{control:{disable:!0}},selectedItem:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{placeholder:"Select",items:K.mockItems,selectedItem:null,onChange:ne(),hasError:!1,isDisabled:!1}},d={args:{labelProps:{"aria-label":"Label"}}},u={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},m={args:{labelProps:{label:"Label for Select",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={args:{labelProps:{label:"Label for Select",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{hasError:!0,labelProps:{label:"Label for Select"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var B,C,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var _,E,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,W,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select",
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
}`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var O,M,F;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select",
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
}`,...(F=(M=b.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var z,q,G;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label for Select"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const xe=["Basic","Disabled","WithLabel","WithHint","WithError"],De=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:u,WithError:h,WithHint:b,WithLabel:m,__namedExportsOrder:xe,default:Se},Symbol.toStringTag,{value:"Module"}));export{d as B,u as D,De as S,m as W,b as a,h as b};
