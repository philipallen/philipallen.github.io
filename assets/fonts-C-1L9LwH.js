import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as a}from"./index-CR-ysAsT.js";import{M as i,e as s}from"./index-BbLlB17h.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-AShzwMAR.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";const r=`# Fonts

The Bank of Ireland Group official font families.

## Installation

\`\`\`console
npm i @boi/fonts
\`\`\`

## Available fonts

- OpenSans-Italic
- OpenSans-Regular
- OpenSans-SemiBold
- OpenSans-SemiBoldItalic
- OpenSans-Bold

### Bank of Ireland specific fonts

- BankofIrelandSerif-Regular
- BankofIrelandSerif-Bold

### New Ireland specific fonts

- LeagueSpartan-SemiBold

### Davy specific fonts

- Calibre-SemiBold

## Usage

### React project

Import the package at the root file.

\`\`\`js
import "@boi/fonts";
\`\`\`

### Non-React project

If you are not using React, then include them like this. NB: you may need to edit your webpack (or equivalent) config for your production build

\`\`\`html
<link rel="stylesheet" href="./node_modules/@boi/fonts/dist/boi-fonts.css"></link>
\`\`\`

### React Native project

Add an asset reference (\`..., assets:['../../packages/fonts/src/'], ...\`) into the \`react-native.config.js\` file (if you don't have one, do a little research into it and add the above snippet). You should not import the package in a React Native application.

#### How to handle updates

If any changes are made to the fonts in this package, any react native apps that uses them will need to update their asset references. This is achieved by running \`npx react-native-asset\` in the directory of the app. This step could be done as part of the app's pipeline

#### Known Issues

When adding a new font, be aware that Android font family name is case-sensitive, so it should match exactly the file name.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"About Solas/Developer docs/fonts"}),`
`,n.jsx(s,{children:r})]})}function y(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{y as default};
