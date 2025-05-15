import{j as a}from"./jsx-runtime-BkBIjjFT.js";import{g as M,h as N,i as V,$ as Z,a as J,b as K,c as Q,d as X,e as Y,f as ee,j as ae}from"./Heading-BToeil9s.js";import{r as re}from"./index-KmaxkdDD.js";import{$ as te}from"./Button-rO-PiLt4.js";import{$ as oe}from"./Group-CdFOvBCo.js";import{a as ne,$ as le}from"./Dialog-7WXOo05O.js";import{a as u,u as n,b as f}from"./index-BMLrhZi-.js";import{a as ie,A as se,b as ce}from"./index-By1nkff0.js";import{f as de}from"./index-DtOTWJJ3.js";import{R as ue}from"./ReactAriaProviders-xi03RDfa.js";import{I as pe,a as be}from"./InputAlerts-B4c5m-Fy.js";import{I as fe}from"./InputLabelTopV2-BT9gFvQr.js";import{T as b}from"./Typography-Bt5r6amG.js";import{I as x}from"./IconButtonV2-795yXhQF.js";import{u as ge}from"./OverlayContext-CQkNAI0D.js";import{$ as he}from"./useNumberFormatter-0Jg9Jb_k.js";const $e=u.div`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return f`
      width: 100%;

      .react-aria-Group {
        display: flex;
        align-items: center;
        gap: ${e.gap};
        min-height: ${e.input.minHeight};
        background: ${e.input.backgroundColor};
        padding-left: ${e.input.padding.left};
        padding-right: ${e.input.padding.right};
        border-radius: ${e.input.radius};
        outline-width: ${e.input.stroke.width.base};
        outline-style: ${e.input.stroke.style};
        outline-color: ${e.input.stroke.color.base};
        outline-offset: ${e.input.stroke.offset.base};
      }

      .react-aria-DatePicker {
        &[data-invalid] .react-aria-Group {
          outline-width: ${e.input.stroke.width.error};
          outline-color: ${e.input.stroke.color.error};
          outline-offset: ${e.input.stroke.offset.error};
        }

        &[data-focus-within] .react-aria-Group {
          outline-width: ${e.input.stroke.width.focus};
          outline-color: ${e.input.stroke.color.focus};
          outline-offset: ${e.input.stroke.offset.focus};
        }
      }

      .react-aria-Button {
        all: unset;
        width: max-content;
        height: max-content;
        border-radius: ${e.input.button.radius};
        padding: ${e.input.button.padding};
        background: ${e.input.button.backgroundColor.base};
        cursor: pointer;

        svg {
          display: block;
          width: ${e.input.button.icon.width};
          height: ${e.input.button.icon.height};
          color: ${e.input.button.icon.color.base};
        }

        &[data-pressed],
        &[data-focused] {
          background: ${e.input.button.backgroundColor.focus};

          svg {
            color: ${e.input.button.icon.color.focus};
          }
        }

        &[data-hovered] {
          background: ${e.input.button.backgroundColor.hover};

          svg {
            color: ${e.input.button.icon.color.hover};
          }
        }
      }
    `}}
`,me=u(M)`
  display: flex;
  flex: 1;
`,ke=u(N)`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return f`
      padding-top: ${e.input.segment.padding.top};
      padding-left: ${e.input.segment.padding.left};
      padding-right: ${e.input.segment.padding.right};
      padding-bottom: ${e.input.segment.padding.bottom};

      &[inputmode="numeric"] {
        border-radius: ${e.input.segment.radius};
        color: ${e.input.segment.color.base};
        caret-color: transparent;
        white-space: nowrap;
        outline: none;

        &[data-placeholder] {
          text-transform: uppercase;
          color: ${e.input.segment.placeholderColor};
        }

        &[data-focused] {
          color: ${e.input.segment.color.focus};
          background: ${e.input.segment.backgroundColor.focus};
        }

        &[data-hovered] {
          color: ${e.input.segment.color.hover};
          background: ${e.input.segment.backgroundColor.hover};
        }
      }

      &[data-type="literal"] {
        color: ${e.input.segment.separatorColor};
      }
    `}}
`,xe=u(ne)`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return f`
      padding: ${e.calendar.padding};
      background: ${e.calendar.backgroundColor};
      border-radius: ${e.calendar.radius};
      border-width: ${e.calendar.stroke.width};
      border-style: ${e.calendar.stroke.style};
      border-color: ${e.calendar.stroke.color};
      max-height: inherit;
      overflow-y: auto;

      z-index: ${e.calendar.zIndex};
    `}}
`,ye=u(V)`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return f`
      display: grid;
      gap: ${e.calendar.gap};
      cursor: default;

      header {
        display: grid;
        place-items: center;
        grid-template-columns: auto 1fr auto;
        margin-left: ${e.calendar.header.margin.left};
        margin-right: ${e.calendar.header.margin.right};
      }

      .react-aria-Button {
        all: unset;
        width: max-content;
        height: max-content;
        border-radius: ${e.calendar.button.radius};
        padding-top: ${e.calendar.button.padding.top};
        padding-left: ${e.calendar.button.padding.left};
        padding-right: ${e.calendar.button.padding.right};
        padding-bottom: ${e.calendar.button.padding.bottom};
        background: ${e.calendar.button.backgroundColor.base};
        cursor: pointer;

        svg {
          display: block;
          width: ${e.calendar.button.icon.width};
          height: ${e.calendar.button.icon.height};
          color: ${e.calendar.button.icon.color.base};
        }

        &[data-hovered] {
          background: ${e.calendar.button.backgroundColor.hover};

          svg {
            color: ${e.calendar.button.icon.color.hover};
          }
        }

        &[data-pressed] {
          background: ${e.calendar.button.backgroundColor.focus};

          svg {
            color: ${e.calendar.button.icon.color.focus};
          }
        }

        &[data-focus-visible] {
          outline-width: ${e.calendar.button.focusRing.width};
          outline-style: ${e.calendar.button.focusRing.style};
          outline-color: ${e.calendar.button.focusRing.color};
          outline-offset: ${e.calendar.button.focusRing.offset};
        }
      }

      .react-aria-CalendarCell {
        display: grid;
        place-items: center;
        min-width: ${e.calendar.cell.minWidth};
        margin: ${e.calendar.cell.margin};
        color: ${e.calendar.cell.color.base};
        background: ${e.calendar.cell.backgroundColor.base};
        padding: ${e.calendar.cell.padding};
        border-radius: ${e.calendar.cell.radius};
        cursor: pointer;
        outline: none;

        &[data-unavailable] {
          color: ${e.calendar.cell.color.disabled};
          cursor: not-allowed;
        }

        &[data-outside-month] {
          display: none;
        }

        &[data-selected]:not([data-unavailable]) {
          color: ${e.calendar.cell.color.active};
          background: ${e.calendar.cell.backgroundColor.active};
        }

        &[data-hovered]:not([data-unavailable]) {
          color: ${e.calendar.cell.color.hover};
          background: ${e.calendar.cell.backgroundColor.hover};
        }

        &[data-pressed]:not([data-unavailable]) {
          color: ${e.calendar.cell.color.active};
          background: ${e.calendar.cell.backgroundColor.active};
        }

        &[data-focus-visible] {
          outline-width: ${e.calendar.cell.focusRing.width};
          outline-style: ${e.calendar.cell.focusRing.style};
          outline-color: ${e.calendar.cell.focusRing.color};
          outline-offset: ${e.calendar.cell.focusRing.offset};
        }
      }
    `}}
`;function Pe(r,e){const{labelProps:p,alertProps:t,shouldForceLeadingZeros:g=!0,withCalendar:$,testID:m="date-picker",...G}=r,{tokens:O}=n(),{input:k}=O.datePicker,h=re.useMemo(()=>{if(t)return Array.isArray(t)?t:[t]},[t]);return a.jsx(ue,{labelProps:p,alerts:h,children:({labelledBy:z,describedBy:U})=>a.jsx($e,{ref:e,"data-testid":m,children:a.jsx(pe,{alert:h&&a.jsx(be,{alerts:h}),children:a.jsx(fe,{...p,children:a.jsxs(Z,{...G,"aria-labelledby":z,"aria-describedby":U,shouldForceLeadingZeros:g,children:[a.jsxs(oe,{children:[a.jsx(me,{children:q=>a.jsx(b,{component:"div",variant:k.segment.typography.variant,fontFamily:k.segment.typography.fontFamily,children:a.jsx(ke,{segment:q})})}),$&&a.jsx(te,{"data-testid":`${m}-calendar-button`,children:a.jsx(ie,{})})]}),$&&a.jsx(H,{})]})})})})})}function H(){const{tokens:r}=n(),{calendar:e}=r.datePicker,{portalElement:p}=ge();return a.jsx(le,{placement:"bottom right",UNSTABLE_portalContainer:p,children:a.jsx(xe,{children:a.jsxs(ye,{children:[a.jsxs("header",{children:[a.jsx(x,{slot:"previous",children:a.jsx(se,{})}),a.jsx(b,{component:J,variant:e.heading.typography.variant,fontFamily:e.heading.typography.fontFamily}),a.jsx(x,{slot:"next",children:a.jsx(ce,{})})]}),a.jsxs(K,{children:[a.jsx(Q,{children:t=>a.jsx(X,{children:a.jsx(b,{variant:e.headerCell.typography.variant,fontFamily:e.headerCell.typography.fontFamily,children:t})})}),a.jsx(Y,{children:t=>a.jsx(ee,{date:t,children:({formattedDate:g})=>a.jsx(b,{color:"inherit",variant:e.cell.typography.variant,fontFamily:e.cell.typography.fontFamily,children:g})})})]})]})})})}H.displayName="DatePickerCalendar";const ve=de(Pe),we={title:"Components/Inputs/DatePicker",component:ve,decorators:[r=>a.jsx(he,{locale:"en-IE",children:a.jsx(r,{})})]},o={args:{"aria-label":"Label for DatePicker"}},l={args:{labelProps:{label:"Label for DatePicker",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{labelProps:{label:"Label for DatePicker",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker"}}},c={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker"},isDateUnavailable:r=>ae(r,"en-IE")}},d={...o,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"Label for DatePicker"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var y,P,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "Label for DatePicker"
  }
}`,...(v=(P=o.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var w,j,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for DatePicker",
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,I,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for DatePicker",
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
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,L,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "Label for DatePicker"
    }
  }
}`,...(B=(L=s.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var W,S,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "Label for DatePicker"
    },
    isDateUnavailable: date => {
      return isWeekend(date, "en-IE");
    }
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var T,_,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Basic,
  args: {
    isInvalid: true,
    withCalendar: true,
    labelProps: {
      label: "Label for DatePicker"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const je=["Basic","WithLabel","WithHint","WithCalendar","WithDisabledDates","Invalid"],ze=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Invalid:d,WithCalendar:s,WithDisabledDates:c,WithHint:i,WithLabel:l,__namedExportsOrder:je,default:we},Symbol.toStringTag,{value:"Module"}));export{o as B,ze as D,d as I,l as W,i as a,s as b,c};
