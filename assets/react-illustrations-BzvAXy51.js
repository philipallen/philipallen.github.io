import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CR-ysAsT.js";import{M as i,e as s}from"./index-BbLlB17h.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-AShzwMAR.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";const a=`# React illustrations

React SVG illustration components.

## Installation

\`\`\`console
npm i @boi/react-design-tokens
npm i @boi/react-illustrations
\`\`\`

## Usage

### Initialising design tokens

Render the \`DesignTokensProvider\` at the root of your application:

\`\`\`jsx
import {
  DesignTokensProvider,
  DesignTokensGlobalStyles,
  BOI_THEME_TOKENS,
} from "@boi/react-design-tokens";

import Layout from "./Layout";

export default function App() {
  return (
    <DesignTokensProvider themeTokens={BOI_THEME_TOKENS}>
      <DesignTokensGlobalStyles />
      <Layout />
    </DesignTokensProvider>
  );
}
\`\`\`

### Using an illustration

Then render the illustration with an optional \`colorPalette\` prop:

\`\`\`jsx
import { CalculatorIllustration } from "@boi/react-illustrations";

export default function Layout() {
  return <CalculatorIllustration colorPalette="hueA" />;
}
\`\`\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"About Solas/Developer docs/react-illustrations"}),`
`,n.jsx(s,{children:a})]})}function T(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{T as default};
