import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as i,C as s}from"./index-FR6HMXuu.js";import{S as a,a as c}from"./stacking.stories-COsuSkGJ.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BPTQCGfm.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-D1OOBdzz.js";import"./index-DYziSUm9.js";import"./index-CmedeESG.js";import"./index-Cng6hRot.js";import"./RSPContexts-v-WQ8S-5.js";import"./Button-DPtumZN7.js";import"./utils-BPOuYIA2.js";import"./ProgressBar-OTHehGJ9.js";import"./Label-CxUBTwi1.js";import"./useNumberFormatter-Be2B0OXy.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-N-SZRQyW.js";import"./focusSafely-B-zcuC90.js";import"./useFocusRing-G-z0GAlQ.js";import"./Heading-bsprch0B.js";import"./Text-DC2Lycci.js";import"./Dialog-D7L8ikGJ.js";import"./Collection-C9XxNqm0.js";import"./useEvent-CR-cdJGO.js";import"./FocusScope-DImX_wcQ.js";import"./useControlledState-Bw1hdnkP.js";import"./usePreventScroll-fHWX6szo.js";import"./VisuallyHidden-BNZM_wZC.js";import"./useFilter-CpI-7xqg.js";import"./Group-oOA39aJ_.js";import"./Input-DoxsRZPw.js";import"./Form-lKvwNwi4.js";import"./useFormReset-Bq-COY0f.js";import"./useSpinButton-w7FS3Wln.js";import"./Checkbox-DKjPjTVw.js";import"./useToggle-Cjg9gqo4.js";import"./useToggleState-eLSQACY8.js";import"./ComboBox-DzGXME-S.js";import"./ListBox-BmY3IeC_.js";import"./useSingleSelectListState-C4Znvjww.js";import"./useTextField-BirOXiLr.js";import"./Disclosure-Cqq4V_T6.js";import"./NumberField-BnVqhKsm.js";import"./RadioGroup-BavxDc35.js";import"./SearchField-hkaZAb_f.js";import"./Select-Dk5P5P1R.js";import"./Slider-BLl02R-d.js";import"./Switch-CrkI_3cm.js";import"./Tabs-Bo26tLRZ.js";import"./TextField-Dek19DRu.js";import"./ToggleButton-DlPSlCYG.js";import"./Tooltip-DVGpamPK.js";import"./index-D5asf8ox.js";import"./floating-ui.react-DD7SKzjW.js";import"./immer-VJu7bq0k.js";import"./downshift.esm-CA7rj1sz.js";import"./extends-V8a3TPL4.js";import"./react-textarea-autosize.browser.esm-BTkYjTgr.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function ge(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{ge as default};
