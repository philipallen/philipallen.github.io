import{j as n}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as a}from"./index-CNwVr1BN.js";import{M as i,h as s}from"./index-Bfa_Y5mY.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Mxng_W-2.js";import"./index-CVhlOzZO.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const r=`# BOI Fonts

The Bank of Ireland official font families.

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
- BankofIrelandSerif-Regular
- BankofIrelandSerif-Bold

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
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/fonts"}),`
`,n.jsx(s,{children:r})]})}function j(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{j as default};
