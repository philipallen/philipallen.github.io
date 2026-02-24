import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as i,C as s}from"./index-D59A9RQg.js";import{S as a,a as c}from"./stacking.stories-BN32G1tJ.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BCimKwaU.js";import"./index-CbrIw9sE.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";import"./index-8wM7OKQ9.js";import"./index-BrRYP9Fl.js";import"./index-t7j5zUOh.js";import"./index-B_KGh3jf.js";import"./Text-CoyfJyUy.js";import"./utils-CrCrZF7Z.js";import"./Button-T8IefSzn.js";import"./ProgressBar-Cj3OymJH.js";import"./Label-GNbXzScb.js";import"./useFocusRing-_PMeCXZC.js";import"./Heading-EZ98FGXA.js";import"./Dialog-hTizX22e.js";import"./SelectionIndicator-DbP0QVLC.js";import"./useEvent-FCKskfoF.js";import"./FocusScope-BGa3S4Dp.js";import"./useControlledState-CqLB86LT.js";import"./usePreventScroll-BIkMZHcC.js";import"./VisuallyHidden-CYAIBC6z.js";import"./useFilter-CCyMrQfz.js";import"./Input-CWsjCZxx.js";import"./useFormReset-BxBxhEUg.js";import"./Form-8hXZHMTX.js";import"./useSpinButton-D7zzYS7q.js";import"./Checkbox-DAK6RYb6.js";import"./useToggle-Cwd3ULYz.js";import"./useToggleState-D0ZqcaHP.js";import"./ComboBox-cq-WgVR8.js";import"./ListBox-CCLoVtpV.js";import"./useListState-rvlzpE1a.js";import"./useSingleSelectListState-D5s4PMd9.js";import"./useTextField-yjGfi35G.js";import"./Disclosure-DomN6hwn.js";import"./NumberField-DDFILsZc.js";import"./RadioGroup-Dznjv5PV.js";import"./SearchField-CANzIZfc.js";import"./Select-DCgXxRmU.js";import"./Slider-rnx8uY0_.js";import"./Switch-C0N4Wg7G.js";import"./Tabs-B7E61teA.js";import"./TextField-D2H03Ha-.js";import"./ToggleButton-Dp7mkCC5.js";import"./Tooltip-BDEcZQkA.js";import"./index-NgCCK6aN.js";import"./chunk-4HCWVY2M-B1ssy2Ob.js";import"./floating-ui.react-BJ0ak3XJ.js";import"./immer-VJu7bq0k.js";import"./Pressable-D40CrWL9.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
