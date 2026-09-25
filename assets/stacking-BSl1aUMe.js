import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CR-ysAsT.js";import{M as i,C as s}from"./index-BbLlB17h.js";import{S as a,a as c}from"./stacking.stories-ByTsM_Cw.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-AShzwMAR.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";import"./index-BpMil6Tx.js";import"./index-CaBUqBiy.js";import"./index-EybPYVoN.js";import"./index-BVyJnF54.js";import"./Button-BTZi05NT.js";import"./filterDOMProps--0WFEK8x.js";import"./ProgressBar-tTLymDjc.js";import"./useLabel-Di5ZsSG1.js";import"./useHover-B83HWmmw.js";import"./DatePicker-wgU2JZAO.js";import"./Dialog-DeeZ7kT2.js";import"./animation-CM2nom5i.js";import"./FocusScope-lZmE84T1.js";import"./useEvent-CA6G5HXc.js";import"./useControlledState-n_cs0odp.js";import"./Text-BjRUEV8n.js";import"./usePreventScroll-CCxqn7Ri.js";import"./VisuallyHidden-8I7ZAGxa.js";import"./useFilter-Bts38IO_.js";import"./Input-DAn3HBs7.js";import"./useField-W7N9q2B8.js";import"./useFormReset-B2hk_b3D.js";import"./useFormValidation-BhV-Gl1L.js";import"./useSpinButton-DO9V9_Qo.js";import"./Checkbox-BQQwpE5p.js";import"./useToggle-Ccn0JsIi.js";import"./useSlot-BmMMGwvU.js";import"./useToggleState-BflpVqq_.js";import"./ComboBox-Qk0maTTQ.js";import"./ListBox-Y0CKnc0k.js";import"./useListState-CZP8LqSZ.js";import"./useTextField-ChD78dqd.js";import"./Disclosure-BBNDBf5h.js";import"./Link-8-tVykFp.js";import"./NumberField-B-A7hJaB.js";import"./RadioGroup-DO_AH0r_.js";import"./SearchField-xltWEq34.js";import"./Select-BXFaTz8y.js";import"./Slider-CV3OrebJ.js";import"./Switch-DQDVrdar.js";import"./Tabs-Bp_NeZ1H.js";import"./TextField-BmI8UxxW.js";import"./ToggleButton-CQTlrp87.js";import"./Tooltip-RnFmcMOq.js";import"./Pressable-CAX-Hbak.js";import"./index-Doj3HQ5r.js";import"./useViewportSize-BRd7oIjb.js";import"./chunk-4HCWVY2M-B1ssy2Ob.js";import"./immer-BaRMeUsN.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
