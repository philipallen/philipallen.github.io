import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{g as U,h as V,i as N,$ as Z,a as J,b as K,c as Q,d as X,e as Y,f as ee,j as ae}from"./Heading-bsprch0B.js";import{r as re}from"./index-CcKhGcwW.js";import{$ as te}from"./Button-DPtumZN7.js";import{$ as oe}from"./Group-oOA39aJ_.js";import{c as ne,a as le,b as ie}from"./Dialog-D7L8ikGJ.js";import{a as p,u as n,b as f}from"./index-COZsQx0K.js";import{a as de,A as se,b as ce}from"./index-Cng6hRot.js";import{f as ue}from"./index-CG-U_esM.js";import{R as pe}from"./ReactAriaProviders-BwEeAT52.js";import{I as be,a as fe}from"./InputAlerts-Bp_UC4fJ.js";import{I as ge}from"./InputLabelTopV2-DNCsgte8.js";import{T as b}from"./Typography-cxmeyP_c.js";import{I as x}from"./IconButtonV2-DFRYHId_.js";import{u as he}from"./OverlayContext-DE6V0lcf.js";import{$ as $e}from"./useNumberFormatter-Be2B0OXy.js";const me=p.div`
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
`,ke=p(U)`
  display: flex;
  flex: 1;
`,xe=p(V)`
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
`,ye=p(ne)`
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
`,Pe=p(N)`
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
`;function ve(r,e){const{labelProps:l,alertProps:t,shouldForceLeadingZeros:g=!0,withCalendar:$,testID:m="date-picker",...G}=r,{tokens:O}=n(),{input:k}=O.datePicker,h=re.useMemo(()=>{if(t)return Array.isArray(t)?t:[t]},[t]);return a.jsx(pe,{labelProps:l,alerts:h,children:({labelledBy:z,describedBy:q})=>a.jsx(me,{ref:e,"data-testid":m,children:a.jsx(be,{alert:h&&a.jsx(fe,{alerts:h}),children:a.jsx(ge,{...l,children:a.jsxs(Z,{...G,"aria-labelledby":z,"aria-describedby":q,shouldForceLeadingZeros:g,children:[a.jsxs(oe,{children:[a.jsx(ke,{children:M=>a.jsx(b,{component:"div",variant:k.segment.typography.variant,fontFamily:k.segment.typography.fontFamily,children:a.jsx(xe,{segment:M})})}),$&&a.jsx(te,{"data-testid":`${m}-calendar-button`,children:a.jsx(de,{})})]}),$&&a.jsx(H,{})]})})})})})}function H(){const{tokens:r}=n(),{calendar:e}=r.datePicker,{portalElement:l}=he();return a.jsx(le,{getContainer:l&&(()=>l),children:a.jsx(ie,{placement:"bottom right",children:a.jsx(ye,{children:a.jsxs(Pe,{children:[a.jsxs("header",{children:[a.jsx(x,{slot:"previous",children:a.jsx(se,{})}),a.jsx(b,{component:J,variant:e.heading.typography.variant,fontFamily:e.heading.typography.fontFamily}),a.jsx(x,{slot:"next",children:a.jsx(ce,{})})]}),a.jsxs(K,{children:[a.jsx(Q,{children:t=>a.jsx(X,{children:a.jsx(b,{variant:e.headerCell.typography.variant,fontFamily:e.headerCell.typography.fontFamily,children:t})})}),a.jsx(Y,{children:t=>a.jsx(ee,{date:t,children:({formattedDate:g})=>a.jsx(b,{color:"inherit",variant:e.cell.typography.variant,fontFamily:e.cell.typography.fontFamily,children:g})})})]})]})})})})}H.displayName="DatePickerCalendar";const we=ue(ve),je={title:"Components/Inputs/DatePicker",component:we,decorators:[r=>a.jsx($e,{locale:"en-IE",children:a.jsx(r,{})})]},o={args:{"aria-label":"Label for DatePicker"}},i={args:{labelProps:{label:"Label for DatePicker",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"Label for DatePicker",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker"}}},c={args:{withCalendar:!0,labelProps:{label:"Label for DatePicker"},isDateUnavailable:r=>ae(r,"en-IE")}},u={...o,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"Label for DatePicker"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var y,P,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "Label for DatePicker"
  }
}`,...(v=(P=o.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var w,j,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,I,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,L,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var F,T,_;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(T=u.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Ce=["Basic","WithLabel","WithHint","WithCalendar","WithDisabledDates","Invalid"],qe=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Invalid:u,WithCalendar:s,WithDisabledDates:c,WithHint:d,WithLabel:i,__namedExportsOrder:Ce,default:je},Symbol.toStringTag,{value:"Module"}));export{o as B,qe as D,u as I,i as W,d as a,s as b,c};
