import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as i,C as s}from"./index-O_i3ukAC.js";import{S as a,a as c}from"./stacking.stories-CCm7XIgM.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-XrG4CbpW.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-5VPm3mt9.js";import"./index-Bndd801g.js";import"./index-HXCmP3Qs.js";import"./index-jIEI4ct_.js";import"./Text-NX4aVxts.js";import"./utils-2-3EihAd.js";import"./Button-CUYx7hLe.js";import"./ProgressBar-D-5At-XA.js";import"./Label-CZfe87EJ.js";import"./useFocusRing-UK40PMEA.js";import"./Heading-Bxe_L4Pz.js";import"./Dialog-BBveVv4I.js";import"./Collection-D5d6PqKy.js";import"./useEvent-CL6PvOsD.js";import"./FocusScope-Ck7OBOj_.js";import"./useControlledState-Bw1hdnkP.js";import"./usePreventScroll-H9RN8w3y.js";import"./VisuallyHidden-MKMaY1dA.js";import"./useFilter-C5YRLfB_.js";import"./Group-2RCNFabS.js";import"./Input-GVbW0m5a.js";import"./Form-59FgyCDB.js";import"./useFormReset-CdUqESZ_.js";import"./useSpinButton-B0EBQuRA.js";import"./Checkbox-C_udBPW0.js";import"./useToggle-BXc8dhrZ.js";import"./useToggleState-eLSQACY8.js";import"./ComboBox-CCOnGHQA.js";import"./ListBox-DAs4lUDL.js";import"./useListState-Bei5Go53.js";import"./useSingleSelectListState-DUJz9Kva.js";import"./useTextField-BgBMFPmL.js";import"./Disclosure-5N7oJD32.js";import"./NumberField-BbWuBIXX.js";import"./RadioGroup-C7_x1g-Q.js";import"./SearchField-DHCSeMpx.js";import"./Select-EXq63j9m.js";import"./Slider-BilFR3HQ.js";import"./Switch-DPSedUEs.js";import"./Tabs-DxAfl9t9.js";import"./TextField-AdpVHhIs.js";import"./ToggleButton-DpBMIF1a.js";import"./Tooltip-BmXECRlm.js";import"./index-Bt5smqGw.js";import"./chunk-4HCWVY2M-B1ssy2Ob.js";import"./floating-ui.react-tt5DnblY.js";import"./immer-VJu7bq0k.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function me(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{me as default};
