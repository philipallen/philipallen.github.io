import{j as n}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as s}from"./index-COxJNofV.js";import{M as i,e as r}from"./index-CyvV42we.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-hsjcDPHV.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const a=`# BOI React Design Tokens

React components for the \`@boi/design-tokens\` files.

## Installation

\`\`\`console
npm i @boi/react-design-tokens
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

### Using design tokens

Then use the design tokens inside your components:

\`\`\`jsx
import { useDesignTokens } from "@boi/react-design-tokens";

export default function Layout() {
  const { tokens } = useDesignTokens();
  const { themeColor, color } = tokens;

  return (
    <>
      <div style={{ backgroundColor: themeColor.core100 }}>
        The colour of this will automatically change if your app's theme changes
      </div>
      <div style={{ backgroundColor: color.white }}>
        If you're app is not using themes, then you can use the colours directly
        like this
      </div>
    </>
  );
}
\`\`\`

### Updating the theme

To update the theme, use \`updateTheme\` in your React component, like so:

\`\`\`jsx
import { useDesignTokens } from "@boi/react-design-tokens";

export default function MyComponent() {
  const { updateTheme } = useDesignTokens();

  return (
    <button onClick={() => updateTheme("dark")}>Change to dark theme</button>
  );
}
\`\`\`

## Troubleshooting

If your tests fail with the following error:

\`TypeError: window.matchMedia is not a function\`

You will need to include the below jest mock into your setup tests file, so that jsdom understands the \`matchMedia\` property:

\`\`\`js
// matchMedia.mock.js
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// setupTests.js
import "./matchMedia.mock.js";
\`\`\`
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/react-design-tokens"}),`
`,n.jsx(r,{children:a})]})}function j(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{j as default};
