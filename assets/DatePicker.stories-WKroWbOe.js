import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{$ as Y,a as ee,b as ae,c as re,d as te,e as oe,f as ne,g as le,h as ie,i as de,j as se,k as ce,l as ue,m as pe}from"./Heading-BpjlUOqF.js";import{r as be}from"./index-CcKhGcwW.js";import{$ as fe}from"./Button-T8IefSzn.js";import{b as ge}from"./Input-CWsjCZxx.js";import{a as $e,f as he,$ as me}from"./Dialog-DbzGPUs_.js";import{u as i,l as m,d}from"./index-C1QKVHyt.js";import{c as ke,A as xe,d as ye}from"./index-B_KGh3jf.js";import{f as Pe}from"./index-NgCCK6aN.js";import{R as ve}from"./ReactAriaProviders-UpnGrWCN.js";import{I as we,a as De,b as Ce}from"./InputLabelTop-DThkuFi7.js";import{T as h}from"./Typography-BK_ZjFCe.js";import{I as P}from"./IconButton-52dBxF5j.js";import{u as je}from"./OverlayContext-BmgfW47V.js";import{a as Ie}from"./ProgressBar-Cj3OymJH.js";const M=d(ke)``,Re=d.div`
  ${()=>{const{tokens:r}=i(),{datePicker:e,outerField:t}=r;return m`
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
        &[data-disabled] {
          .react-aria-Group {
            outline-width: ${t.stroke.width.base};
            outline-color: ${t.stroke.color.disabled};
            outline-offset: ${t.stroke.offset.base};
            cursor: not-allowed;
          }

          button {
            cursor: not-allowed;
          }

          ${M} {
            opacity: ${e.input.button.icon.opacity.disabled};
          }

          ${N} {
            color: ${e.input.segment.color.disabled};
          }
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
`,Ae=d(Y)`
  display: flex;
  flex: 1;
`,N=d(ee)`
  ${()=>{const{tokens:r}=i(),{datePicker:e}=r;return m`
      padding-top: ${e.input.segment.padding.top};
      padding-left: ${e.input.segment.padding.left};
      padding-right: ${e.input.segment.padding.right};
      padding-bottom: ${e.input.segment.padding.bottom};

      &[data-placeholder] {
        text-transform: uppercase;
      }

      &[inputmode="numeric"] {
        border-radius: ${e.input.segment.radius};
        color: ${e.input.segment.color.base};
        caret-color: transparent;
        white-space: nowrap;
        outline: none;

        &[data-placeholder] {
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
`,Be=d($e)`
  ${()=>{const{tokens:r}=i(),{datePicker:e}=r;return m`
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
`,We=d(ae)`
  ${()=>{const{tokens:r}=i(),{datePicker:e}=r;return m`
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
`;function U(r,e){const{labelProps:t,alertProps:o,shouldForceLeadingZeros:n=!0,withCalendar:g,testID:$="date-picker",...k}=r,{isDisabled:Z}=k,{tokens:J}=i(),{input:y}=J.datePicker,x=be.useMemo(()=>{if(o)return Array.isArray(o)?o:[o]},[o]);return a.jsx(ve,{externallyLabelledBy:r["aria-labelledby"],externallyDescribedBy:r["aria-describedby"],labelProps:t,alerts:x,children:({labelledBy:K,describedBy:Q})=>a.jsx(Re,{ref:e,"data-testid":$,children:a.jsx(we,{alert:x&&a.jsx(Ce,{alerts:x}),children:a.jsx(De,{...t,children:a.jsxs(re,{...k,placeholderValue:k.placeholderValue||new te(1980,1,1),"aria-labelledby":K,"aria-describedby":Q,shouldForceLeadingZeros:n,children:[a.jsxs(ge,{children:[a.jsx(Ae,{children:X=>a.jsx(h,{component:"div",variant:y.segment.typography.variant,fontFamily:y.segment.typography.fontFamily,children:a.jsx(N,{segment:X})})}),g&&a.jsx(fe,{isDisabled:Z,"data-testid":`${$}-calendar-button`,children:a.jsx(M,{})})]}),g&&a.jsx(V,{})]})})})})})}function V(){const{tokens:r}=i(),{calendar:e}=r.datePicker,{portalElement:t}=je(),o=oe();return a.jsx(he,{getContainer:t&&(()=>t),children:a.jsx(me,{placement:"bottom right",children:a.jsx(Be,{children:a.jsxs(We,{children:[a.jsxs("header",{children:[a.jsx(P,{slot:"previous",children:a.jsx(xe,{})}),a.jsx(h,{component:ne,variant:e.heading.typography.variant,fontFamily:e.heading.typography.fontFamily}),a.jsx(P,{slot:"next",children:a.jsx(ye,{})})]}),a.jsxs(le,{children:[a.jsx(ie,{children:n=>a.jsx(de,{children:a.jsx(h,{variant:e.headerCell.typography.variant,fontFamily:e.headerCell.typography.fontFamily,children:n})})}),a.jsx(se,{children:n=>{const g=ce(n,o);return a.jsx(ue,{date:n,"data-is-today":g?"true":void 0,children:({formattedDate:$})=>a.jsx(h,{color:"inherit",variant:e.cell.typography.variant,fontFamily:e.cell.typography.fontFamily,children:$})})}})]})]})})})})}V.displayName="DatePickerCalendar";U.displayName="DatePicker";const Se=Pe(U),Fe={title:"Components/Inputs/DatePicker",component:Se,decorators:[r=>a.jsx(Ie,{locale:"en-IE",children:a.jsx(r,{})})]},l={args:{"aria-label":"DatePicker label"}},s={args:{"aria-label":"Disabled DatePicker",isDisabled:!0,withCalendar:!0}},c={args:{labelProps:{label:"DatePicker label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{labelProps:{label:"DatePicker label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},p={args:{withCalendar:!0,labelProps:{label:"DatePicker label"}}},b={args:{withCalendar:!0,labelProps:{label:"DatePicker label"},isDateUnavailable:r=>pe(r,"en-IE")}},f={...l,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"DatePicker label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var v,w,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    "aria-label": "DatePicker label"
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var C,j,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    "aria-label": "Disabled DatePicker",
    isDisabled: true,
    withCalendar: true
  }
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var R,A,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var W,S,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(S=u.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var T,E,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    }
  }
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var H,L,G;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    },
    isDateUnavailable: date => {
      return isWeekend(date, "en-IE");
    }
  }
}`,...(G=(L=b.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var O,z,q;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(z=f.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const Te=["Basic","Disabled","WithLabel","WithHint","WithCalendar","WithDisabledDates","Invalid"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:s,Invalid:f,WithCalendar:p,WithDisabledDates:b,WithHint:u,WithLabel:c,__namedExportsOrder:Te,default:Fe},Symbol.toStringTag,{value:"Module"}));export{l as B,Qe as D,f as I,c as W,u as a,p as b,s as c,b as d};
