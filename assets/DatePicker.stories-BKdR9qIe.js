import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{i as U,j as V,k as Z,$ as N,a as J,b as K,c as Q,d as X,e as Y,f as ee,g as ae,h as re,l as te}from"./Heading-DiM1cT3p.js";import{r as oe}from"./index-CcKhGcwW.js";import{$ as ne}from"./Button-DPtumZN7.js";import{$ as le}from"./Group-oOA39aJ_.js";import{c as ie,a as de,b as ce}from"./Dialog-CLGWj2OB.js";import{a as b,u as l,b as h}from"./index-BHlkTKmU.js";import{f as se,a as ue,A as pe,b as be}from"./index-DlgNzAt3.js";import{R as fe}from"./ReactAriaProviders-CFG_2kIo.js";import{I as ge,a as $e}from"./InputAlerts-DCLtABKX.js";import{I as he}from"./InputLabelTopV2-BD3mOok3.js";import{T as $}from"./Typography-BTmT2kbZ.js";import{I as x}from"./IconButtonV2-ZPVEghNH.js";import{u as me}from"./OverlayContext-DE6V0lcf.js";import{$ as ke}from"./useNumberFormatter-Be2B0OXy.js";const xe=b.div`
  ${()=>{const{tokens:r}=l(),{datePicker:e}=r;return h`
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
`,ye=b(U)`
  display: flex;
  flex: 1;
`,Pe=b(V)`
  ${()=>{const{tokens:r}=l(),{datePicker:e}=r;return h`
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
`,ve=b(ie)`
  ${()=>{const{tokens:r}=l(),{datePicker:e}=r;return h`
      padding: ${e.calendar.padding};
      background: ${e.calendar.backgroundColor};
      border-radius: ${e.calendar.radius};
      border-width: ${e.calendar.stroke.width};
      border-style: ${e.calendar.stroke.style};
      border-color: ${e.calendar.stroke.color};
      max-height: inherit;
      overflow-y: auto;

      box-shadow: 0px 2px 2px ${e.calendar.shadow.outer.color};
      z-index: ${e.calendar.zIndex};
    `}}
`,we=b(Z)`
  ${()=>{const{tokens:r}=l(),{datePicker:e}=r;return h`
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

        &[data-is-today="true"] {
          border: ${e.calendar.stroke.width}
            ${e.calendar.stroke.style}
            ${e.calendar.cell.color.base};
        }
      }
    `}}
`;function je(r,e){const{labelProps:i,alertProps:t,shouldForceLeadingZeros:o=!0,withCalendar:f,testID:g="date-picker",...G}=r,{tokens:O}=l(),{input:k}=O.datePicker,m=oe.useMemo(()=>{if(t)return Array.isArray(t)?t:[t]},[t]);return a.jsx(fe,{externallyLabelledBy:r["aria-labelledby"],externallyDescribedBy:r["aria-describedby"],labelProps:i,alerts:m,children:({labelledBy:z,describedBy:q})=>a.jsx(xe,{ref:e,"data-testid":g,children:a.jsx(ge,{alert:m&&a.jsx($e,{alerts:m}),children:a.jsx(he,{...i,children:a.jsxs(N,{...G,"aria-labelledby":z,"aria-describedby":q,shouldForceLeadingZeros:o,children:[a.jsxs(le,{children:[a.jsx(ye,{children:M=>a.jsx($,{component:"div",variant:k.segment.typography.variant,fontFamily:k.segment.typography.fontFamily,children:a.jsx(Pe,{segment:M})})}),f&&a.jsx(ne,{"data-testid":`${g}-calendar-button`,children:a.jsx(ue,{})})]}),f&&a.jsx(L,{})]})})})})})}function L(){const{tokens:r}=l(),{calendar:e}=r.datePicker,{portalElement:i}=me(),t=J();return a.jsx(de,{getContainer:i&&(()=>i),children:a.jsx(ce,{placement:"bottom right",children:a.jsx(ve,{children:a.jsxs(we,{children:[a.jsxs("header",{children:[a.jsx(x,{slot:"previous",children:a.jsx(pe,{})}),a.jsx($,{component:K,variant:e.heading.typography.variant,fontFamily:e.heading.typography.fontFamily}),a.jsx(x,{slot:"next",children:a.jsx(be,{})})]}),a.jsxs(Q,{children:[a.jsx(X,{children:o=>a.jsx(Y,{children:a.jsx($,{variant:e.headerCell.typography.variant,fontFamily:e.headerCell.typography.fontFamily,children:o})})}),a.jsx(ee,{children:o=>{const f=ae(o,t);return a.jsx(re,{date:o,"data-is-today":f?"true":void 0,children:({formattedDate:g})=>a.jsx($,{color:"inherit",variant:e.cell.typography.variant,fontFamily:e.cell.typography.fontFamily,children:g})})}})]})]})})})})}L.displayName="DatePickerCalendar";const Ce=se(je),De={title:"Components/Inputs/DatePicker",component:Ce,decorators:[r=>a.jsx(ke,{locale:"en-IE",children:a.jsx(r,{})})]},n={args:{"aria-label":"DatePicker label"}},d={args:{labelProps:{label:"DatePicker label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"DatePicker label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{withCalendar:!0,labelProps:{label:"DatePicker label"}}},u={args:{withCalendar:!0,labelProps:{label:"DatePicker label"},isDateUnavailable:r=>te(r,"en-IE")}},p={...n,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"DatePicker label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var y,P,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "DatePicker label"
  }
}`,...(v=(P=n.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var w,j,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "DatePicker label",
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
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,I,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "DatePicker label",
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
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,B,W;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    }
  }
}`,...(W=(B=s.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var S,T,E;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    },
    isDateUnavailable: date => {
      return isWeekend(date, "en-IE");
    }
  }
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var F,_,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Basic,
  args: {
    isInvalid: true,
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const Ie=["Basic","WithLabel","WithHint","WithCalendar","WithDisabledDates","Invalid"],Me=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Invalid:p,WithCalendar:s,WithDisabledDates:u,WithHint:c,WithLabel:d,__namedExportsOrder:Ie,default:De},Symbol.toStringTag,{value:"Module"}));export{n as B,Me as D,p as I,d as W,c as a,s as b,u as c};
