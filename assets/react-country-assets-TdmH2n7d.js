import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as a,h as s}from"./index-h2z2PMx4.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D9cuYU45.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const c=`# React country assets

The \`@boi/country-assets\` packaged for React applications.

## Installation

\`\`\`console
npm i @boi/react-country-assets
\`\`\`

## Usage

\`\`\`jsx
import { countriesData } from "@boi/react-country-assets";

{
  countriesData.map(
    ({ code, label, callingCode, component: FlagComponent }) => {
      return (
        <>
          Country code: {code}
          Country name: {label}
          Country calling code: {callingCode}
          Country flag: <FlagComponent />
        </>
      );
    }
  );
}
\`\`\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"About Solas/Developer docs/react-country-assets"}),`
`,n.jsx(s,{children:c})]})}function f(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{f as default};
