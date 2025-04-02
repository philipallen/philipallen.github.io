import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as r}from"./index-CNwVr1BN.js";import{M as i,C as s}from"./index-BocHJ2yc.js";import{S as a,a as c}from"./stacking.stories-DUYRs0C6.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DZ7LQs7D.js";import"./index-CVhlOzZO.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-ByEiyUmp.js";import"./index-hUy8cv-f.js";import"./index-DYe-GrfV.js";import"./index-BwV_lsCf.js";import"./RSPContexts-DVGGaWhm.js";import"./Button-D3muM46r.js";import"./utils-l5KLAjAw.js";import"./chain-Z-ySmOka.js";import"./useHover-DDDaVluF.js";import"./platform-kF5l1-53.js";import"./usePress-D8-PWMl6.js";import"./useFocusRing-BBh_VJBv.js";import"./Heading-CvsSH47a.js";import"./Text-DsbvCy5R.js";import"./useLocalizedStringFormatter-CNu4t9Cv.js";import"./context-CQmu07jL.js";import"./useLabels-BOZ2JF2m.js";import"./useFilter-CnCJzQEP.js";import"./useOverlayTriggerState-BVShW717.js";import"./useControlledState-BCPvzKxG.js";import"./usePreventScroll-De5YQ1AI.js";import"./isScrollable-BSEN4xi5.js";import"./scrollIntoView-JLfw0xOA.js";import"./VisuallyHidden-Cl-nnxjw.js";import"./Group-DVZU1Mqg.js";import"./Input-D9kvmmGc.js";import"./Form-BxKkh07K.js";import"./Label-uyz5dJOn.js";import"./FocusScope-um4QTQqo.js";import"./useEvent-B95XB3Pl.js";import"./useSpinButton-B1cZ1F-w.js";import"./NumberFormatter-DNR9MAW-.js";import"./Dialog-Bow7UHhh.js";import"./number-Q_rDNm0P.js";import"./Checkbox-CUjyyXsn.js";import"./ComboBox-DLnLbHaL.js";import"./ListBox-BvcAl4ro.js";import"./Collection-ZvNUfI9p.js";import"./Separator-CKTcrEJv.js";import"./useSingleSelectListState-gzOp8nHW.js";import"./useTextField-DMd3_LUt.js";import"./Disclosure-BUAxwmoY.js";import"./Menu-NFXRKHzP.js";import"./NumberField-aMRL7uDM.js";import"./useNumberFormatter-75ZYSi36.js";import"./RadioGroup-BKV_DNRM.js";import"./SearchField-Yb6sYe8c.js";import"./Select-FRMuhISC.js";import"./Slider-BMnTBxhe.js";import"./Tabs-AxLDVYgv.js";import"./TextField-BQkd_d0D.js";import"./index-DG677SqA.js";import"./floating-ui.react-DZDdj-Od.js";import"./immer-VJu7bq0k.js";import"./downshift.esm-BNKeM0Z8.js";import"./extends-DRpakCH_.js";import"./react-textarea-autosize.browser.esm-DSCtRhza.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`,e.jsx("a",{target:"_blank",href:"https://floating-ui.com/docs/floatingportal",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://floating-ui.com/docs/floatingportal",rel:"nofollow",children:"https://floating-ui.com/docs/floatingportal"})})}),`
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function ve(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{ve as default};
