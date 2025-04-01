import{j as a}from"./jsx-runtime-BkBIjjFT.js";import{h as _,i as F,j as H,$ as G,a as O,b as z,c as U,d as q,e as N,f as V,g as M,k as Z}from"./Heading-Dj9jARm8.js";import{$ as J}from"./Button-lwQFUGeW.js";import{$ as K}from"./Group-0XpLwnZ6.js";import{a as Q,$ as X}from"./Dialog-CL2ju9PL.js";import{a as s,u as n,b}from"./index-DT8u_GqS.js";import{a as Y,A as ee,b as ae}from"./index-qhhwF6MA.js";import{f as re}from"./index-DG677SqA.js";import{I as te,a as oe}from"./InputAlerts-BvMSond2.js";import{I as ne}from"./InputLabelTopV2-BVu8QFKb.js";import{T as p}from"./Typography-Ck-NcY7i.js";import{I as $}from"./IconButtonV2-DtbOd6YA.js";import{u as le}from"./OverlayContext-CQkNAI0D.js";import{a as ie}from"./context-CQmu07jL.js";const de=s.div`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return b`
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
`,ce=s(_)`
  display: flex;
  flex: 1;
`,se=s(F)`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return b`
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
`,ue=s(Q)`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return b`
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
`,pe=s(H)`
  ${()=>{const{tokens:r}=n(),{datePicker:e}=r;return b`
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
`;function be(r,e){const{labelProps:f,alertProps:t,withCalendar:u,testID:g="date-picker",...E}=r,{tokens:S}=n(),{input:h}=S.datePicker;return a.jsx(de,{ref:e,"data-testid":g,children:a.jsx(G.Provider,{value:{shouldForceLeadingZeros:!0},children:a.jsx(O,{...E,children:a.jsxs(te,{alert:t&&a.jsx(oe,{alerts:Array.isArray(t)?t:[t]}),children:[a.jsx(ne,{...f,children:a.jsxs(K,{children:[a.jsx(ce,{children:T=>a.jsx(p,{component:"div",variant:h.segment.typography.variant,fontFamily:h.segment.typography.fontFamily,children:a.jsx(se,{segment:T})})}),u&&a.jsx(J,{"data-testid":`${g}-calendar-button`,children:a.jsx(Y,{})})]})}),u&&a.jsx(W,{})]})})})})}function W(){const{tokens:r}=n(),{calendar:e}=r.datePicker,{portalElement:f}=le();return a.jsx(X,{placement:"bottom right",UNSTABLE_portalContainer:f,children:a.jsx(ue,{children:a.jsxs(pe,{children:[a.jsxs("header",{children:[a.jsx($,{slot:"previous",children:a.jsx(ee,{})}),a.jsx(p,{component:z,variant:e.heading.typography.variant,fontFamily:e.heading.typography.fontFamily}),a.jsx($,{slot:"next",children:a.jsx(ae,{})})]}),a.jsxs(U,{children:[a.jsx(q,{children:t=>a.jsx(N,{children:a.jsx(p,{variant:e.cell.typography.variant,fontFamily:e.cell.typography.fontFamily,children:t})})}),a.jsx(V,{children:t=>a.jsx(M,{date:t,children:({formattedDate:u})=>a.jsx(p,{color:"inherit",children:u})})})]})]})})})}W.displayName="DatePickerCalendar";const fe=re(be),ge={title:"Components/Inputs/DatePicker",component:fe,decorators:[r=>a.jsx(ie,{locale:"en-IE",children:a.jsx(r,{})})]},o={args:{labelProps:{label:"Label for DatePicker"}}},l={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker"},isDateUnavailable:r=>Z(r,"en-IE")}},c={...o,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"Label for DatePicker"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var m,k,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for DatePicker"
    }
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var P,v,y;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,j,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
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
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,I,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "Label for DatePicker"
    },
    isDateUnavailable: date => {
      return isWeekend(date, "en-IE");
    }
  }
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,B,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const he=["Basic","WithCalendar","WithHint","WithDisabledDates","WithError"],Be=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,WithCalendar:l,WithDisabledDates:d,WithError:c,WithHint:i,__namedExportsOrder:he,default:ge},Symbol.toStringTag,{value:"Module"}));export{o as B,Be as D,l as W,i as a,d as b,c};
