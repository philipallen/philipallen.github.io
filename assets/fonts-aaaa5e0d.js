import{j as n}from"./jsx-runtime-6eef64cc.js";import{u as a}from"./index-2d8ea55a.js";import{M as i,e as s}from"./index-12054c48.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-126a13e8.js";import"../sb-preview/runtime.js";import"./index-cda6679a.js";import"./extends-98964cd2.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const r=`# BOI Fonts

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