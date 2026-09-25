import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as Y}from"./ProgressBar-tTLymDjc.js";import{$ as aa,a as ea,b as ra,c as ta,d as oa,e as na,f as la,g as ia,h as sa,i as da,j as ca,k as ua,l as pa}from"./DatePicker-wgU2JZAO.js";import{r as ba}from"./index-BVaTkfsr.js";import{a as ga,f as $a,$ as ha,h as fa}from"./Dialog-DeeZ7kT2.js";import{$ as ma}from"./Button-BTZi05NT.js";import{a as ka}from"./Input-DAn3HBs7.js";import{u as i,i as m,a as s}from"./index-BpMil6Tx.js";import{c as xa,A as ya,d as Pa}from"./index-BVyJnF54.js";import{f as va}from"./index-Doj3HQ5r.js";import{R as wa}from"./ReactAriaProviders-CP7eKay2.js";import{I as Da,a as Ca,b as ja}from"./InputLabelTop--1mm_taL.js";import{T as f}from"./Typography-G_YOndja.js";import{I as P}from"./IconButton-CC4dc0T7.js";import{u as Ia}from"./OverlayContext-cry3RCsh.js";const M=s(xa)``,Ra=s.div`
  ${()=>{const{tokens:r}=i(),{datePicker:a,outerField:t}=r;return m`
      width: 100%;

      .react-aria-Group {
        display: flex;
        align-items: center;
        gap: ${a.gap};
        min-height: ${a.input.minHeight};
        background: ${a.input.backgroundColor};
        padding-left: ${a.input.padding.left};
        padding-right: ${a.input.padding.right};
        border-radius: ${a.input.radius};
        outline-width: ${a.input.stroke.width.base};
        outline-style: ${a.input.stroke.style};
        outline-color: ${a.input.stroke.color.base};
        outline-offset: ${a.input.stroke.offset.base};
      }

      .react-aria-DatePicker {
        &[data-invalid] .react-aria-Group {
          outline-width: ${a.input.stroke.width.error};
          outline-color: ${a.input.stroke.color.error};
          outline-offset: ${a.input.stroke.offset.error};
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
            opacity: ${a.input.button.icon.opacity.disabled};
          }

          ${N} {
            color: ${a.input.segment.color.disabled};
          }
        }
      }

      .react-aria-Button {
        all: unset;
        width: max-content;
        height: max-content;
        border-radius: ${a.input.button.radius};
        padding: ${a.input.button.padding};
        background: ${a.input.button.backgroundColor.base};
        cursor: pointer;

        svg {
          display: block;
          width: ${a.input.button.icon.width};
          height: ${a.input.button.icon.height};
          color: ${a.input.button.icon.color.base};
        }

        &[data-pressed],
        &[data-focused] {
          background: ${a.input.button.backgroundColor.focus};

          svg {
            color: ${a.input.button.icon.color.focus};
          }
        }

        &[data-hovered] {
          background: ${a.input.button.backgroundColor.hover};

          svg {
            color: ${a.input.button.icon.color.hover};
          }
        }
      }
    `}}
`,Aa=s(aa)`
  display: flex;
  flex: 1;
`,N=s(ea)`
  ${()=>{const{tokens:r}=i(),{datePicker:a}=r;return m`
      padding-top: ${a.input.segment.padding.top};
      padding-left: ${a.input.segment.padding.left};
      padding-right: ${a.input.segment.padding.right};
      padding-bottom: ${a.input.segment.padding.bottom};

      &[data-placeholder] {
        text-transform: uppercase;
      }

      &[inputmode="numeric"] {
        border-radius: ${a.input.segment.radius};
        color: ${a.input.segment.color.base};
        caret-color: transparent;
        white-space: nowrap;
        outline: none;

        &[data-placeholder] {
          color: ${a.input.segment.placeholderColor};
        }

        &[data-focused] {
          color: ${a.input.segment.color.focus};
          background: ${a.input.segment.backgroundColor.focus};
        }

        &[data-hovered] {
          color: ${a.input.segment.color.hover};
          background: ${a.input.segment.backgroundColor.hover};
        }
      }

      &[data-type="literal"] {
        color: ${a.input.segment.separatorColor};
      }
    `}}
`,Ba=s(ga)`
  ${()=>{const{tokens:r}=i(),{datePicker:a}=r;return m`
      padding: ${a.calendar.padding};
      background: ${a.calendar.backgroundColor};
      border-radius: ${a.calendar.radius};
      border-width: ${a.calendar.stroke.width};
      border-style: ${a.calendar.stroke.style};
      border-color: ${a.calendar.stroke.color};
      max-height: inherit;
      overflow-y: auto;

      box-shadow: 0px 2px 2px ${a.calendar.shadow.outer.color};
      z-index: ${a.calendar.zIndex};
    `}}
`,Wa=s(ra)`
  ${()=>{const{tokens:r}=i(),{datePicker:a}=r;return m`
      display: grid;
      gap: ${a.calendar.gap};
      cursor: default;

      header {
        display: grid;
        place-items: center;
        grid-template-columns: auto 1fr auto;
        margin-left: ${a.calendar.header.margin.left};
        margin-right: ${a.calendar.header.margin.right};
      }

      .react-aria-Button {
        all: unset;
        width: max-content;
        height: max-content;
        border-radius: ${a.calendar.button.radius};
        padding-top: ${a.calendar.button.padding.top};
        padding-left: ${a.calendar.button.padding.left};
        padding-right: ${a.calendar.button.padding.right};
        padding-bottom: ${a.calendar.button.padding.bottom};
        background: ${a.calendar.button.backgroundColor.base};
        cursor: pointer;

        svg {
          display: block;
          width: ${a.calendar.button.icon.width};
          height: ${a.calendar.button.icon.height};
          color: ${a.calendar.button.icon.color.base};
        }

        &[data-hovered] {
          background: ${a.calendar.button.backgroundColor.hover};

          svg {
            color: ${a.calendar.button.icon.color.hover};
          }
        }

        &[data-pressed] {
          background: ${a.calendar.button.backgroundColor.focus};

          svg {
            color: ${a.calendar.button.icon.color.focus};
          }
        }

        &[data-focus-visible] {
          outline-width: ${a.calendar.button.focusRing.width};
          outline-style: ${a.calendar.button.focusRing.style};
          outline-color: ${a.calendar.button.focusRing.color};
          outline-offset: ${a.calendar.button.focusRing.offset};
        }
      }

      .react-aria-CalendarCell {
        display: grid;
        place-items: center;
        min-width: ${a.calendar.cell.minWidth};
        margin: ${a.calendar.cell.margin};
        color: ${a.calendar.cell.color.base};
        background: ${a.calendar.cell.backgroundColor.base};
        padding: ${a.calendar.cell.padding};
        border-radius: ${a.calendar.cell.radius};
        cursor: pointer;
        outline: none;

        &[data-unavailable] {
          color: ${a.calendar.cell.color.disabled};
          cursor: not-allowed;
        }

        &[data-outside-month] {
          display: none;
        }

        &[data-selected]:not([data-unavailable]) {
          color: ${a.calendar.cell.color.active};
          background: ${a.calendar.cell.backgroundColor.active};
        }

        &[data-hovered]:not([data-unavailable]) {
          color: ${a.calendar.cell.color.hover};
          background: ${a.calendar.cell.backgroundColor.hover};
        }

        &[data-pressed]:not([data-unavailable]) {
          color: ${a.calendar.cell.color.active};
          background: ${a.calendar.cell.backgroundColor.active};
        }

        &[data-focus-visible] {
          outline-width: ${a.calendar.cell.focusRing.width};
          outline-style: ${a.calendar.cell.focusRing.style};
          outline-color: ${a.calendar.cell.focusRing.color};
          outline-offset: ${a.calendar.cell.focusRing.offset};
        }

        &[data-is-today="true"] {
          border: ${a.calendar.stroke.width}
            ${a.calendar.stroke.style}
            ${a.calendar.cell.color.base};
        }
      }
    `}}
`;function U(r,a){const{labelProps:t,alertProps:o,shouldForceLeadingZeros:n=!0,withCalendar:$,testID:h="date-picker",...k}=r,{isDisabled:Z}=k,{tokens:J}=i(),{input:y}=J.datePicker,x=ba.useMemo(()=>{if(o)return Array.isArray(o)?o:[o]},[o]);return e.jsx(wa,{externallyLabelledBy:r["aria-labelledby"],externallyDescribedBy:r["aria-describedby"],labelProps:t,alerts:x,children:({labelledBy:K,describedBy:Q})=>e.jsx(Ra,{ref:a,"data-testid":h,children:e.jsx(Da,{alert:x&&e.jsx(ja,{alerts:x}),children:e.jsx(Ca,{...t,children:e.jsxs(ta,{...k,placeholderValue:k.placeholderValue||new oa(1980,1,1),"aria-labelledby":K,"aria-describedby":Q,shouldForceLeadingZeros:n,children:[e.jsxs(ka,{children:[e.jsx(Aa,{children:X=>e.jsx(f,{component:"div",variant:y.segment.typography.variant,fontFamily:y.segment.typography.fontFamily,children:e.jsx(N,{segment:X})})}),$&&e.jsx(ma,{isDisabled:Z,"data-testid":`${h}-calendar-button`,children:e.jsx(M,{})})]}),$&&e.jsx(V,{})]})})})})})}function V(){const{tokens:r}=i(),{calendar:a}=r.datePicker,{portalElement:t}=Ia(),o=na();return e.jsx($a,{getContainer:t&&(()=>t),children:e.jsx(ha,{placement:"bottom right",children:e.jsx(Ba,{children:e.jsxs(Wa,{children:[e.jsxs("header",{children:[e.jsx(P,{slot:"previous",children:e.jsx(ya,{})}),e.jsx(f,{component:fa,variant:a.heading.typography.variant,fontFamily:a.heading.typography.fontFamily}),e.jsx(P,{slot:"next",children:e.jsx(Pa,{})})]}),e.jsxs(la,{children:[e.jsx(ia,{children:n=>e.jsx(sa,{children:e.jsx(f,{variant:a.headerCell.typography.variant,fontFamily:a.headerCell.typography.fontFamily,children:n})})}),e.jsx(da,{children:n=>{const $=ca(n,o);return e.jsx(ua,{date:n,"data-is-today":$?"true":void 0,children:({formattedDate:h})=>e.jsx(f,{color:"inherit",variant:a.cell.typography.variant,fontFamily:a.cell.typography.fontFamily,children:h})})}})]})]})})})})}V.displayName="DatePickerCalendar";U.displayName="DatePicker";const Sa=va(U),Fa={title:"Components/Inputs/DatePicker",component:Sa,decorators:[r=>e.jsx(Y,{locale:"en-IE",children:e.jsx(r,{})})]},l={args:{"aria-label":"DatePicker label"}},d={args:{"aria-label":"Disabled DatePicker",isDisabled:!0,withCalendar:!0}},c={args:{labelProps:{label:"DatePicker label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{labelProps:{label:"DatePicker label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},p={args:{withCalendar:!0,labelProps:{label:"DatePicker label"}}},b={args:{withCalendar:!0,labelProps:{label:"DatePicker label"},isDateUnavailable:r=>pa(r,"en-IE")}},g={...l,args:{isInvalid:!0,withCalendar:!0,labelProps:{label:"DatePicker label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var v,w,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    "aria-label": "DatePicker label"
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var C,j,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    "aria-label": "Disabled DatePicker",
    isDisabled: true,
    withCalendar: true
  }
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var R,A,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(L=b.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var O,z,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(z=g.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const Ta=["Basic","Disabled","WithLabel","WithHint","WithCalendar","WithDisabledDates","Invalid"],Qa=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:d,Invalid:g,WithCalendar:p,WithDisabledDates:b,WithHint:u,WithLabel:c,__namedExportsOrder:Ta,default:Fa},Symbol.toStringTag,{value:"Module"}));export{l as B,Qa as D,g as I,c as W,u as a,p as b,d as c,b as d};
