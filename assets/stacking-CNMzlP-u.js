import{j as e}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as r}from"./index-COxJNofV.js";import{M as i,C as s}from"./index-IFYCzHGa.js";import{S as a,a as c}from"./stacking.stories-rH3iSFs-.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cuil7yz6.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";import"./index-CzvSJj6w.js";import"./index-Ds_Ymp0n.js";import"./index-BrtwDHqb.js";import"./index-BYwLR37K.js";import"./Button-nmnqENox.js";import"./useFocusRing-CELWytXw.js";import"./chain-Crd5RmWG.js";import"./useFocusWithin-Dp0pJUJ1.js";import"./platform-kF5l1-53.js";import"./useFocusable-B98p06UY.js";import"./useKeyboard-BZGC9FVW.js";import"./usePress-DAUyqWol.js";import"./textSelection-Bw2skZTh.js";import"./DateField-CtoZbQD-.js";import"./RSPContexts-BdMZCg0Y.js";import"./Text-X8DQBs4N.js";import"./Group-5H7x078x.js";import"./context-CIGhUvog.js";import"./useLabels-cU4IwlF2.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./scrollIntoView-Bir1BNbC.js";import"./useControlledState-BSXamw7l.js";import"./VisuallyHidden-C0e1y2IE.js";import"./FocusScope-DBUbNCbs.js";import"./Input-Bz8SL9gO.js";import"./Form-OUETqAF2.js";import"./useLabel-hJ0mwhYX.js";import"./useEvent-C-yNCX7Y.js";import"./useSpinButton-DKe1YD98.js";import"./NumberFormatter-_LhaN6n2.js";import"./useCollator-C1eRjvOk.js";import"./Checkbox-BGx8Jbfn.js";import"./Disclosure-CFwmEZX-.js";import"./Menu-BbEnN8Mh.js";import"./Collection-HyIYbscu.js";import"./NumberField-BgJjWP6l.js";import"./useTextField-CAP8eoL_.js";import"./useNumberFormatter-C0f_lCpF.js";import"./RadioGroup-Cb3_cV61.js";import"./SearchField-CjE0l0cJ.js";import"./Tabs-Bg99tFfy.js";import"./TextField-7rVZ2oDw.js";import"./floating-ui.react-Bc49jMsR.js";import"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(t.h1,{id:"stacking",children:"Stacking"}),`
`,e.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(t.p,{children:"An example of usage might be:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:"zIndex: ${zIndex.modal}; // z-index of 5000\n"})}),`
`,e.jsx(t.h3,{id:"react-project",children:"React project"}),`
`,e.jsxs(t.p,{children:["To understand how to use the z-index property in your React project, see ",e.jsx("a",{href:"./?path=/docs/developer-docs-react-design-tokens--docs#using-design-tokens",className:"boi-mdx-link",children:`
the react-design-tokens instructions`})]}),`
`,e.jsxs(t.p,{children:["You will be able to use ",e.jsx(t.code,{children:"zIndex"})," from the ",e.jsx(t.code,{children:"tokens"})," property."]}),`
`,e.jsx(t.h3,{id:"non-react-project",children:"Non-React project"}),`
`,e.jsxs(t.p,{children:["To understand how to use the z-index property in your non-React project, see ",e.jsx("a",{href:"./?path=/docs/developer-docs-design-tokens--docs#web-tokens",className:"boi-mdx-link",children:`
the design-tokens instructions`})]}),`
`,e.jsx(t.h2,{id:"list-of-values",children:"List of values"}),`
`,e.jsx(t.p,{children:"Below is a list of z-index values available to use."}),`
`,e.jsx(s,{of:c,sourceState:"none"}),`
`,e.jsxs(t.p,{children:["According to our z-index values the ",e.jsx(t.code,{children:"Tooltip"})," and ",e.jsx(t.code,{children:"Menu"})," components should render under navigation elements (e.g. sticky header). This is fine for most page content, but when a ",e.jsx(t.code,{children:"Tooltip"})," or ",e.jsx(t.code,{children:"Menu"})," is rendered ",e.jsx(t.strong,{children:"inside"})," a sticky header then we don't want that to be the case as we wouldn't be able to see the floating elements."]}),`
`,e.jsxs(t.p,{children:["By default all our floating UI elements are rendered in a React portal at the bottom of the page, but the process of creating a sticky header in CSS (setting the ",e.jsx(t.code,{children:"position"})," property) makes a new stacking context so we need to add a new React portal inside the sticky header so that the ",e.jsx(t.code,{children:"Tooltip"})," and ",e.jsx(t.code,{children:"Menu"})," render as expected."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function StickyHeader(props: StickyHeaderProps) {
  const { children } = props;

  /**
   * Note: the OverlayProvider intentionally takes the DOM node, not refs, in order to be able to update when the nodes change.
   * A callback ref is used here to permit this behaviour, and useState is an appropriate way to implement this.
   */
  const [portalElement, setPortalElement] = useState<HTMLDivElement>();

  function setPortalRef(element: HTMLDivElement | null) {
    if (element) {
      setPortalElement(element);
    }
  }

  return (
    <OverlayProvider portalElement={portalElement}>
      <S.Container>
        {children}
        <div ref={setPortalRef} />
      </S.Container>
    </OverlayProvider>
  );
}
`})}),`
`,e.jsxs(t.p,{children:["You can find a working example here: ",e.jsx(t.code,{children:"packages/react-components/src/Modal/Modal.tsx"}),"."]}),`
`,e.jsx(t.h2,{id:"related-links",children:"Related links"}),`
`,e.jsx("a",{target:"_blank",href:"https://floating-ui.com/docs/floatingportal",className:"boi-mdx-link",children:e.jsx(t.p,{children:"https://floating-ui.com/docs/floatingportal"})}),`
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:"https://www.joshwcomeau.com/css/stacking-contexts"})})]})}function xe(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{xe as default};
