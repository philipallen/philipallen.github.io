import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as a}from"./index-CR-ysAsT.js";import{M as s,C as n,a as l}from"./index-D7muc-Fi.js";import{D as d,B as r,W as c,a as h,b as p,c as m,d as x,I as j}from"./DatePicker.stories-m7h3oKQP.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BPfJFIZP.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";import"./ProgressBar-BY0g_ds_.js";import"./filterDOMProps-CtI5tTFi.js";import"./useLabel-vBTPO4wy.js";import"./DatePicker-B6k-bLkv.js";import"./Button-C6McDOUd.js";import"./useHover-DJhi_-se.js";import"./Dialog-Be2QcyNd.js";import"./animation-C75_0guo.js";import"./index-BpMil6Tx.js";import"./FocusScope-DYdFEKjI.js";import"./useEvent-B9BVERsV.js";import"./useControlledState-B8koUYCB.js";import"./Text-7Z16qo2S.js";import"./usePreventScroll-CQ3I5-br.js";import"./VisuallyHidden-D4IyfwgT.js";import"./useFilter-BKwEnl5e.js";import"./Input-kbwCvFkH.js";import"./useField-CYMjjWbG.js";import"./useFormReset-DC6GLgml.js";import"./useFormValidation-CxKTNe2g.js";import"./useSpinButton-ClryNjyP.js";import"./index-BVyJnF54.js";import"./index-Doj3HQ5r.js";import"./ReactAriaProviders-C2XMcc1v.js";import"./InputLabelTop-DU8kmb5Z.js";import"./InlineAlert-4JCFjazs.js";import"./Typography-G_YOndja.js";import"./index-EybPYVoN.js";import"./TooltipPopover-BToez5E4.js";import"./InlineTooltipIconButton-6qS-Y6Nc.js";import"./Tooltip-BXWzRUqR.js";import"./OverlayContext-cry3RCsh.js";import"./IconButton-K0Bzoj3C.js";function o(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`,e.jsx("a",{href:"https://react-aria.adobe.com/I18nProvider.html",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"I18nProvider"})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx("a",{href:"https://react-aria.adobe.com/DatePicker.html#international-calendars",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"DatePicker using I18nProvider"})}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(i.p,{children:["For a complete list of available props, please refer to the React Aria ",e.jsx("a",{href:"https://react-aria.adobe.com/DatePicker.html#api",className:"boi-mdx-link",target:"_blank",children:"documentation"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"with-label",children:"With label"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"with-calendar",children:"With calendar"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"with-disabled-input",children:"With Disabled Input"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"with-disabled-dates",children:"With Disabled Dates"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:j})]})}function oe(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{oe as default};
