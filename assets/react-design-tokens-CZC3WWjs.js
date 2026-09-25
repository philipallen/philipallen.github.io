import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-CR-ysAsT.js";import{M as r,e as i}from"./index-BbLlB17h.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-AShzwMAR.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";const a=`# React design tokens

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

#### Using a different brand's tokens

Instead of passing \`BOI_THEME_TOKENS\` to \`themeTokens\`, you can pass in another brand's tokens instead. Currently supported brands are:

- \`BOI_THEME_TOKENS\`
- \`NEW_IRELAND_THEME_TOKENS\`

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
  const { updateTheme, resetToSystemTheme } = useDesignTokens();

  return (
    <>
      <button onClick={() => updateTheme("dark")}>Change to dark theme</button>
      <button onClick={() => updateTheme("system")}>Use system theme</button>
      <button onClick={resetToSystemTheme}>Use system theme (explicit)</button>
    </>
  );
}
\`\`\`

Calling \`updateTheme("system")\` and calling \`resetToSystemTheme()\` are equivalent.

Supported values for \`updateTheme\` are \`"light"\`, \`"dark"\`, and \`"system"\`.

If you pass a \`theme\` prop to \`DesignTokensProvider\`, that external value takes precedence.
In that mode, \`updateTheme\` and \`resetToSystemTheme\` still update the persisted preference,
but they do not change the resolved active theme until the external \`theme\` prop is removed.

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
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"About Solas/Developer docs/react-design-tokens"}),`
`,e.jsx(i,{children:a})]})}function f(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{f as default};
