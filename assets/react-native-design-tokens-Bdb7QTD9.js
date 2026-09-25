import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-CR-ysAsT.js";import{M as i,e as r}from"./index-BbLlB17h.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-AShzwMAR.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";const a=`# React Native design tokens

React Native components for the \`@boi/design-tokens\` files.

## Installation

\`\`\`console
npm i @react-native-async-storage/async-storage
npm i @boi/react-native-design-tokens
\`\`\`

## Usage

### Initialising design tokens

Render the \`DesignTokensProvider\` at the root of your application:

\`\`\`jsx
import {
  DesignTokensProvider,
  BOI_THEME_TOKENS,
} from "@boi/react-native-design-tokens";

import Layout from "./Layout";

export default function App() {
  return (
    <DesignTokensProvider themeTokens={BOI_THEME_TOKENS}>
      <Layout />
    </DesignTokensProvider>
  );
}
\`\`\`

### Using design tokens

Then use the design tokens inside your components:

\`\`\`jsx
import { View } from "react-native";
import { useDesignTokens } from "@boi/react-native-design-tokens";

export default function Layout() {
  const { tokens } = useDesignTokens();
  const { themeColor, color } = tokens;

  return (
    <>
      <View style={{ backgroundColor: themeColor.core100 }}>
        The colour of this will automatically change if your app's theme changes
      </View>
      <View style={{ backgroundColor: color.white }}>
        If you're app is not using themes, then you can use the colours directly
        like this
      </View>
    </>
  );
}
\`\`\`

### Updating the theme

To update the theme, use \`updateTheme\` in your React component, like so:

\`\`\`jsx
import { Button, View } from "react-native";
import { useDesignTokens } from "@boi/react-native-design-tokens";

export default function MyComponent() {
  const { updateTheme, resetToSystemTheme } = useDesignTokens();

  return (
    <View>
      <Button
        title="Change to dark theme"
        onPress={() => updateTheme("dark")}
      />
      <Button title="Use system theme" onPress={() => updateTheme("system")} />
      <Button
        title="Use system theme (explicit)"
        onPress={resetToSystemTheme}
      />
    </View>
  );
}
\`\`\`

Calling \`updateTheme("system")\` and calling \`resetToSystemTheme()\` are equivalent.

Supported values for \`updateTheme\` are \`"light"\`, \`"dark"\`, and \`"system"\`.

If you pass a \`theme\` prop to \`DesignTokensProvider\`, that external value takes precedence.
In that mode, \`updateTheme\` and \`resetToSystemTheme\` still update the persisted preference,
but they do not change the resolved active theme until the external \`theme\` prop is removed.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"About Solas/Developer docs/react-native-design-tokens"}),`
`,e.jsx(r,{children:a})]})}function k(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{k as default};
