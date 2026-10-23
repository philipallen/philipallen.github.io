import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CR-ysAsT.js";import{M as i,C as s}from"./index-D7muc-Fi.js";import{S as a,a as c}from"./stacking.stories-CBxZ0p6T.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BPfJFIZP.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";import"./index-BpMil6Tx.js";import"./index-C4Ox_nLI.js";import"./index-EybPYVoN.js";import"./index-BVyJnF54.js";import"./Button-C6McDOUd.js";import"./filterDOMProps-CtI5tTFi.js";import"./ProgressBar-BY0g_ds_.js";import"./useLabel-vBTPO4wy.js";import"./useHover-DJhi_-se.js";import"./DatePicker-B6k-bLkv.js";import"./Dialog-Be2QcyNd.js";import"./animation-C75_0guo.js";import"./FocusScope-DYdFEKjI.js";import"./useEvent-B9BVERsV.js";import"./useControlledState-B8koUYCB.js";import"./Text-7Z16qo2S.js";import"./usePreventScroll-CQ3I5-br.js";import"./VisuallyHidden-D4IyfwgT.js";import"./useFilter-BKwEnl5e.js";import"./Input-kbwCvFkH.js";import"./useField-CYMjjWbG.js";import"./useFormReset-DC6GLgml.js";import"./useFormValidation-CxKTNe2g.js";import"./useSpinButton-ClryNjyP.js";import"./Checkbox-BEDno07Z.js";import"./useToggle-Dx3ynB-_.js";import"./useSlot-qSg6Mtf2.js";import"./useToggleState-l6OPg13h.js";import"./ComboBox-DyK6SAmS.js";import"./ListBox-DyPXNC4D.js";import"./useListState-BX7cN2-A.js";import"./useTextField-Dr9GDoJn.js";import"./Disclosure-doyQHPA2.js";import"./Link-B75c7Gjr.js";import"./NumberField-BvysvwI7.js";import"./RadioGroup-dgZbKA7k.js";import"./SearchField-Bwe5C-wD.js";import"./Select-DnJjcf-M.js";import"./Slider-MGXoLRXb.js";import"./Switch-DGrrc8c2.js";import"./Tabs-Bp6-ihOt.js";import"./TextField-2-OB62BW.js";import"./ToggleButton-BqO7gdB2.js";import"./Tooltip-BXWzRUqR.js";import"./Pressable-D1kOZnWa.js";import"./index-Doj3HQ5r.js";import"./useViewportSize-d9vtwvD6.js";import"./chunk-4HCWVY2M-B1ssy2Ob.js";import"./immer-BaRMeUsN.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function xe(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{xe as default};
