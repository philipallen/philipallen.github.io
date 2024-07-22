import{j as n}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as a}from"./index-COxJNofV.js";import{M as i,e as s}from"./index-C0hjwx6E.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-ONVFCf-9.js";import"../sb-preview/runtime.js";import"./index-5Gu-hNp0.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const r=`# BOI Fonts

The Bank of Ireland official font families.

## Installation

\`\`\`
npm i @boi/fonts
\`\`\`

## Available fonts

- OpenSans-Italic
- OpenSans-Regular
- OpenSans-SemiBold
- OpenSans-SemiBoldItalic
- OpenSans-Bold
- BankofIrelandSerif-Regular
- BankofIrelandSerif-Bold

## Usage

### React project

Import the package at the root file.

\`import "@boi/fonts";\`

### Non-React project

If you are not using React, then include them like this. NB: you may need to edit your webpack (or equivalent) config for your production build

\`<link rel="stylesheet" href="./node_modules/@boi/fonts/dist/boi-fonts.css"></link>\`

### React Native project

Add an asset reference (\`..., assets:['../../packages/fonts/src/'], ...\`) into the \`react-native.config.js\` file (if you don't have one, do a little research into it and add the above snippet). You should not import the package in a React Native application.

#### How to handle updates

If any changes are made to the fonts in this package, any react native apps that uses them will need to update their asset references. This is achieved by running \`npx react-native-asset\` in the directory of the app. This step could be done as part of the app's pipeline
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/fonts"}),`
`,n.jsx(s,{children:r})]})}function v(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{v as default};
