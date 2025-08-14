import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as a}from"./index-BRkUXrbv.js";import{M as s,C as t,a as l}from"./index-BADpx6yH.js";import{D as c,B as n,W as d,a as p,b as h,c as m,I as x}from"./DatePicker.stories-Ch_V4e1z.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BkPBK69X.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./Heading-DiM1cT3p.js";import"./Button-DPtumZN7.js";import"./utils-BPOuYIA2.js";import"./ProgressBar-OTHehGJ9.js";import"./Label-CxUBTwi1.js";import"./useNumberFormatter-Be2B0OXy.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-N-SZRQyW.js";import"./focusSafely-B-zcuC90.js";import"./useFocusRing-G-z0GAlQ.js";import"./RSPContexts-v-WQ8S-5.js";import"./Text-DC2Lycci.js";import"./Dialog-CLGWj2OB.js";import"./Collection-Bn5P0R-H.js";import"./useEvent-CR-cdJGO.js";import"./FocusScope-DImX_wcQ.js";import"./useControlledState-Bw1hdnkP.js";import"./usePreventScroll-XlKO3Wry.js";import"./VisuallyHidden-BNZM_wZC.js";import"./useFilter-CWiWts7Q.js";import"./Group-oOA39aJ_.js";import"./Input-DoxsRZPw.js";import"./Form-lKvwNwi4.js";import"./useFormReset-Bq-COY0f.js";import"./useSpinButton-DX5laPJU.js";import"./index-DmICCP6d.js";import"./index-CinjkoEf.js";import"./ReactAriaProviders-CFG_2kIo.js";import"./InputAlerts-CmJaV3As.js";import"./InlineAlert-D10KqdVJ.js";import"./Typography-DLKMW7tv.js";import"./index-WLaP1tkh.js";import"./InputLabelTopV2-BAZ0Ssay.js";import"./InputLabelTopTooltip-Cc4U6UHH.js";import"./TooltipPopoverV2-boMBTlA4.js";import"./InlineTooltipIconButtonV2-Ba1eALkp.js";import"./Tooltip-B9i0pIMH.js";import"./OverlayContext-DE6V0lcf.js";import"./IconButtonV2-DVbZoilY.js";function o(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(i.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.p,{children:"To help development with this component, we recommend installing the following:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`npm i @internationalized/date
`})}),`
`,e.jsx(i.p,{children:"Then it can be used like this:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { parseDate } from "@internationalized/date";
import { DatePicker } from "@boi/react-components";

export default function DateOfBirth() {
  return (
    <DatePicker
      labelProps={{
        label: "Date of birth",
      }}
      value={parseDate("1980-01-01")}
    />
  );
}
`})}),`
`,e.jsx(i.h2,{id:"locale",children:"Locale"}),`
`,e.jsxs(i.p,{children:["By default this component will use your browser's ",e.jsx(i.code,{children:"locale"})," and render the date in the language of where you are located. So if you are located in Ireland, your locale will be ",e.jsx(i.code,{children:"en-IE"})," and you will see DD-MM-YYYY. If you are in USA, your locale will be ",e.jsx(i.code,{children:"en-US"})," and you will see MM-DD-YYYY."]}),`
`,e.jsxs(i.p,{children:["You can fix the locale in your app by using React Aria's ",e.jsx(i.code,{children:"I18nProvider"})," component. To understand how this works and how to use it yourself, refer to these React Aria pages:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/I18nProvider.html",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"I18nProvider"})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/DatePicker.html#international-calendars",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"DatePicker using I18nProvider"})}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(i.p,{children:["For a complete list of available props, please refer to the React Aria ",e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/DatePicker.html#props",className:"boi-mdx-link",target:"_blank",children:"documentation"}),"."]}),`
`,e.jsx(t,{of:n}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"with-label",children:"With label"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(i.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h3,{id:"with-calendar",children:"With calendar"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h3,{id:"with-disabled-dates",children:"With Disabled Dates"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(t,{of:x})]})}function de(r={}){const{wrapper:i}={...a(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(o,{...r})}):o(r)}export{de as default};
