import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{j as U,k as V,l as Z,$ as J,a as K,b as Q,c as X,d as Y,e as ee,f as ae,g as re,h as te,i as oe,m as ne}from"./Heading-BOh7G33Y.js";import{r as le}from"./index-CcKhGcwW.js";import{$ as ie}from"./Button-DHrRVfeM.js";import{$ as de}from"./Group-C9HJNTvQ.js";import{e as ce,b as se,c as ue}from"./Dialog-CYmhaE2o.js";import{a as b,u as l,b as h}from"./index-Dwsyfx_g.js";import{a as pe,A as be,b as fe}from"./index-BKbNTvCu.js";import{f as ge}from"./index-BfVxfGWx.js";import{R as $e}from"./ReactAriaProviders-CHHp38ws.js";import{I as he,a as me,b as ke}from"./InputLabelTop-Cx21JY_9.js";import{T as $}from"./Typography-Ck2BLUk-.js";import{I as y}from"./IconButton-BxQdJ-A4.js";import{u as xe}from"./OverlayContext-DE6V0lcf.js";import{a as ye}from"./ProgressBar-MIXQhSCM.js";const Pe=b.div`
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
`,ve=b(U)`
  display: flex;
  flex: 1;
`,we=b(V)`
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
`,je=b(ce)`
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
`,Ce=b(Z)`
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
`;function G(r,e){const{labelProps:i,alertProps:t,shouldForceLeadingZeros:o=!0,withCalendar:f,testID:g="date-picker",...k}=r,{tokens:z}=l(),{input:x}=z.datePicker,m=le.useMemo(()=>{if(t)return Array.isArray(t)?t:[t]},[t]);return a.jsx($e,{externallyLabelledBy:r["aria-labelledby"],externallyDescribedBy:r["aria-describedby"],labelProps:i,alerts:m,children:({labelledBy:q,describedBy:M})=>a.jsx(Pe,{ref:e,"data-testid":g,children:a.jsx(he,{alert:m&&a.jsx(me,{alerts:m}),children:a.jsx(ke,{...i,children:a.jsxs(J,{...k,placeholderValue:k.placeholderValue||new K(1980,1,1),"aria-labelledby":q,"aria-describedby":M,shouldForceLeadingZeros:o,children:[a.jsxs(de,{children:[a.jsx(ve,{children:N=>a.jsx($,{component:"div",variant:x.segment.typography.variant,fontFamily:x.segment.typography.fontFamily,children:a.jsx(we,{segment:N})})}),f&&a.jsx(ie,{"data-testid":`${g}-calendar-button`,children:a.jsx(pe,{})})]}),f&&a.jsx(O,{})]})})})})})}function O(){const{tokens:r}=l(),{calendar:e}=r.datePicker,{portalElement:i}=xe(),t=Q();return a.jsx(se,{getContainer:i&&(()=>i),children:a.jsx(ue,{placement:"bottom right",children:a.jsx(je,{children:a.jsxs(Ce,{children:[a.jsxs("header",{children:[a.jsx(y,{slot:"previous",children:a.jsx(be,{})}),a.jsx($,{component:X,variant:e.heading.typography.variant,fontFamily:e.heading.typography.fontFamily}),a.jsx(y,{slot:"next",children:a.jsx(fe,{})})]}),a.jsxs(Y,{children:[a.jsx(ee,{children:o=>a.jsx(ae,{children:a.jsx($,{variant:e.headerCell.typography.variant,fontFamily:e.headerCell.typography.fontFamily,children:o})})}),a.jsx(re,{children:o=>{const f=te(o,t);return a.jsx(oe,{date:o,"data-is-today":f?"true":void 0,children:({formattedDate:g})=>a.jsx($,{color:"inherit",variant:e.cell.typography.variant,fontFamily:e.cell.typography.fontFamily,children:g})})}})]})]})})})})}O.displayName="DatePickerCalendar";G.displayName="DatePicker";const De=ge(G),Ie={title:"Components/Inputs/DatePicker",component:De,decorators:[r=>a.jsx(ye,{locale:"en-IE",children:a.jsx(r,{})})]},n={args:{"aria-label":"DatePicker label"}},d={args:{labelProps:{label:"DatePicker label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"DatePicker label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{withCalendar:!0,labelProps:{label:"DatePicker label"}}},u={args:{withCalendar:!0,labelProps:{label:"DatePicker label"},isDateUnavailable:r=>ne(r,"en-IE")}},p={...n,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"DatePicker label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var P,v,w;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "DatePicker label"
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,C,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,R,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,W,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    }
  }
}`,...(S=(W=s.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var T,E,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    withCalendar: true,
    labelProps: {
      label: "DatePicker label"
    },
    isDateUnavailable: date => {
      return isWeekend(date, "en-IE");
    }
  }
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var _,H,L;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const Re=["Basic","WithLabel","WithHint","WithCalendar","WithDisabledDates","Invalid"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Invalid:p,WithCalendar:s,WithDisabledDates:u,WithHint:c,WithLabel:d,__namedExportsOrder:Re,default:Ie},Symbol.toStringTag,{value:"Module"}));export{n as B,Ne as D,p as I,d as W,c as a,s as b,u as c};
