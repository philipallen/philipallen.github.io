import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as r}from"./index-CNwVr1BN.js";import{M as i,C as s}from"./index-DKP50l4T.js";import{S as a,a as c}from"./stacking.stories-TWLxs8iS.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Do_qKmAt.js";import"./index-Ccpfuzew.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-BMLrhZi-.js";import"./index-DkSDhRWn.js";import"./index-BDdHs4nI.js";import"./index-By1nkff0.js";import"./RSPContexts-DVGGaWhm.js";import"./Button-BCrc0Htn.js";import"./utils-gyFJKyBV.js";import"./ProgressBar-D7cUUrB_.js";import"./Label-D5Kag7W1.js";import"./useNumberFormatter-CsjwgOH6.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3z6nG1y.js";import"./useFocusRing-ByLANK_J.js";import"./platform-COItUIJl.js";import"./Heading-BbrSzFrS.js";import"./Text-BN8FYGRk.js";import"./useLocalizedStringFormatter-zwC8H8KM.js";import"./useFilter-Drpe8Agm.js";import"./Dialog-hSn_xMF0.js";import"./useControlledState-BCPvzKxG.js";import"./FocusScope-DVP7JJNc.js";import"./usePreventScroll-B_jZxvVS.js";import"./isScrollable-BSEN4xi5.js";import"./VisuallyHidden-S4eak3vu.js";import"./scrollIntoView-DVwMkJKD.js";import"./Group-NvaM69tE.js";import"./Input-BgVT1H5e.js";import"./Form-BkdJ6Er4.js";import"./useFormReset-DazYPasm.js";import"./useEvent-CS_6-_h7.js";import"./useSpinButton-DpZ0wl1I.js";import"./Checkbox-CodyVJ2Y.js";import"./useToggle-BlQHpWnf.js";import"./useToggleState-1cO8jUJ5.js";import"./ComboBox-CQgLXIWD.js";import"./ListBox-5Zhetep4.js";import"./Collection-BJBX1VXz.js";import"./Separator-BQWB5PMu.js";import"./useSingleSelectListState-9FNI6kI1.js";import"./useTextField-B5U_2U97.js";import"./Disclosure-CxUniDmH.js";import"./Menu-B4rPCnWw.js";import"./NumberField-EI-5syo6.js";import"./RadioGroup-Du7H1bwH.js";import"./SearchField-CaK2ySJX.js";import"./Select-BF15oNcS.js";import"./Slider-aspjjC5H.js";import"./Switch-eLGC0gOC.js";import"./Tabs-sQ4pRc5q.js";import"./TextField-kLfYqjPY.js";import"./index-BUbIWl_8.js";import"./floating-ui.react-CUiYS8XL.js";import"./immer-VJu7bq0k.js";import"./downshift.esm-BNKeM0Z8.js";import"./extends-DRpakCH_.js";import"./react-textarea-autosize.browser.esm-DSCtRhza.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
