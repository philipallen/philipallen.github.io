import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as r}from"./index-CNwVr1BN.js";import{M as i,C as s}from"./index-DxvrwgRC.js";import{S as a,a as c}from"./stacking.stories-DnfXu3qU.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DSDJY_uR.js";import"./index-Ccpfuzew.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-BMLrhZi-.js";import"./index-Dbh12NZ5.js";import"./index-BDdHs4nI.js";import"./index-By1nkff0.js";import"./RSPContexts-DVGGaWhm.js";import"./Button-rO-PiLt4.js";import"./utils-HuDI8Qn7.js";import"./ProgressBar-CRICwC8y.js";import"./Label-B4tzsfJl.js";import"./useNumberFormatter-0Jg9Jb_k.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BpjTE7Om.js";import"./useFocusRing-sAzOUMLq.js";import"./platform-COItUIJl.js";import"./Heading-BToeil9s.js";import"./Text-_8HeSx-x.js";import"./useLocalizedStringFormatter-C08OsfvQ.js";import"./useFilter-CLvEAmgz.js";import"./Dialog-7WXOo05O.js";import"./useControlledState-TGcPotj3.js";import"./FocusScope-U4VFcwgb.js";import"./usePreventScroll-DWL7LN1d.js";import"./isScrollable-BSEN4xi5.js";import"./VisuallyHidden-B1KWtvNn.js";import"./scrollIntoView-DfPfi9Ts.js";import"./Group-CdFOvBCo.js";import"./Input-BZ2xU0tK.js";import"./Form-k0ZeE-2g.js";import"./useFormReset-n6f-ydtP.js";import"./useEvent-BQn9_lKw.js";import"./useSpinButton-CQVHZ3iA.js";import"./Checkbox-DBP-ajTr.js";import"./useToggle-kMr8T7oO.js";import"./useToggleState-ChXRUrxj.js";import"./ComboBox-JM0ZuwgH.js";import"./ListBox-BVF5357G.js";import"./Collection-XH8ulj08.js";import"./Separator-DLiRVzmN.js";import"./useSingleSelectListState-jiLWQ0yE.js";import"./useTextField-BTtSWg-b.js";import"./Disclosure-BNr02Y9H.js";import"./Menu-DLH8Q6W-.js";import"./NumberField-DOs23sKA.js";import"./RadioGroup-De_iuCbe.js";import"./SearchField-DFdJ4_F4.js";import"./Select-BGL-I20U.js";import"./Slider-C-Rr0vqr.js";import"./Switch-hNKE0XRb.js";import"./Tabs-CoOgrv01.js";import"./TextField-C5w3GmWO.js";import"./index-DtOTWJJ3.js";import"./floating-ui.react-CUiYS8XL.js";import"./immer-VJu7bq0k.js";import"./downshift.esm-BNKeM0Z8.js";import"./extends-DRpakCH_.js";import"./react-textarea-autosize.browser.esm-DSCtRhza.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(t.h1,{id:"stacking",children:"Stacking"}),`
`,e.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(t.p,{children:"An example of usage might be:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:"zIndex: ${zIndex.modal}; // z-index of 5000\n"})}),`
`,e.jsx(t.h3,{id:"react-project",children:"React project"}),`
`,e.jsxs(t.p,{children:["To understand how to use the z-index property in your React project, see ",e.jsx("a",{href:"./?path=/docs/about-solas-developer-docs-react-design-tokens--docs#using-design-tokens",className:"boi-mdx-link",children:`
the react-design-tokens instructions`})]}),`
`,e.jsxs(t.p,{children:["You will be able to use ",e.jsx(t.code,{children:"zIndex"})," from the ",e.jsx(t.code,{children:"tokens"})," property."]}),`
`,e.jsx(t.h3,{id:"non-react-project",children:"Non-React project"}),`
`,e.jsxs(t.p,{children:["To understand how to use the z-index property in your non-React project, see ",e.jsx("a",{href:"./?path=/docs/about-solas-developer-docs-design-tokens--docs#web-tokens",className:"boi-mdx-link",children:`
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
`,e.jsx("a",{target:"_blank",href:"https://floating-ui.com/docs/floatingportal",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://floating-ui.com/docs/floatingportal",rel:"nofollow",children:"https://floating-ui.com/docs/floatingportal"})})}),`
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function be(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{be as default};
