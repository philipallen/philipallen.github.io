import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CR-ysAsT.js";import{M as i,C as s}from"./index-Be1Z4u-t.js";import{S as a,a as c}from"./stacking.stories-DhTfrsrY.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Beyf2FrO.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";import"./index-CiimbDfo.js";import"./index-DPAlNeaY.js";import"./index-CllsIOLz.js";import"./index-BVyJnF54.js";import"./Button-BZNQtBqh.js";import"./filterDOMProps-CtI5tTFi.js";import"./ProgressBar-BY0g_ds_.js";import"./useLabel-vBTPO4wy.js";import"./useHover-D4rWRZh8.js";import"./DatePicker-CNCjGqCt.js";import"./Dialog-BDQcopVk.js";import"./animation-dZy-b8LL.js";import"./FocusScope-Ce9nNFOm.js";import"./useEvent-CZQ5UM4G.js";import"./useControlledState-B8koUYCB.js";import"./Text-7Z16qo2S.js";import"./usePreventScroll-Dxt_ZyPR.js";import"./VisuallyHidden-DNDPtMNw.js";import"./useFilter-IcUKrY43.js";import"./Input-B3uVMOuX.js";import"./useField-CYMjjWbG.js";import"./useFormReset-Du4ZfQzh.js";import"./useFormValidation-DwgWchqw.js";import"./useSpinButton-GOduEecK.js";import"./Checkbox-BP_sJC8w.js";import"./useToggle-tBiTOUf0.js";import"./useSlot-qSg6Mtf2.js";import"./useToggleState-l6OPg13h.js";import"./ComboBox-ArrhWL-h.js";import"./ListBox-DABIdMNe.js";import"./useListState-B9gvNmN2.js";import"./useTextField-ClmKHXuO.js";import"./Disclosure-itZ8PWN4.js";import"./Link-D-F7PFC3.js";import"./NumberField-iLoFDZ2R.js";import"./RadioGroup-DQnJgyYq.js";import"./SearchField-_EDCmFjH.js";import"./Select-CHV9gLpg.js";import"./Slider-CUZbkYJg.js";import"./Switch-CN-GmcOI.js";import"./Tabs-wE8qBWsK.js";import"./TextField-D3ngVkv3.js";import"./ToggleButton-BSkDykCl.js";import"./Tooltip-DL8E99D0.js";import"./Pressable-CU_OIQ3p.js";import"./index-Doj3HQ5r.js";import"./useViewportSize-B4ZXe0v2.js";import"./chunk-4HCWVY2M-B1ssy2Ob.js";import"./immer-BaRMeUsN.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
