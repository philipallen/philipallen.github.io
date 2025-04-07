import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as r}from"./index-CNwVr1BN.js";import{M as i,C as s}from"./index-BQNdGnmF.js";import{S as a,a as c}from"./stacking.stories-BiB4OBho.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DaCOH5i2.js";import"./index-CVhlOzZO.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-DT8u_GqS.js";import"./index-BTIScfC8.js";import"./index-VIbBARS4.js";import"./index-qhhwF6MA.js";import"./RSPContexts-DVGGaWhm.js";import"./Button-lwQFUGeW.js";import"./utils-l5KLAjAw.js";import"./chain-Z-ySmOka.js";import"./useFocusRing-xuvxHm_5.js";import"./platform-COItUIJl.js";import"./usePress-DcYN71RK.js";import"./Heading-Dj9jARm8.js";import"./Text-DsbvCy5R.js";import"./useLocalizedStringFormatter-CNu4t9Cv.js";import"./context-CQmu07jL.js";import"./useLabels-BOZ2JF2m.js";import"./useFilter-B0GUC4g1.js";import"./Dialog-CL2ju9PL.js";import"./useControlledState-BCPvzKxG.js";import"./number-Q_rDNm0P.js";import"./FocusScope-DK63zPm7.js";import"./usePreventScroll-DIPv515L.js";import"./isScrollable-BSEN4xi5.js";import"./VisuallyHidden-to5K4EiD.js";import"./scrollIntoView-JLfw0xOA.js";import"./Group-0XpLwnZ6.js";import"./Input-DQodsJoB.js";import"./Form-DDhzfXRW.js";import"./Label-DGdLAgDC.js";import"./useEvent-B95XB3Pl.js";import"./useSpinButton-BgJva7mx.js";import"./NumberFormatter-DNR9MAW-.js";import"./Checkbox-fbKcaDqu.js";import"./ComboBox-B7JmemaN.js";import"./ListBox-Zuz559Ke.js";import"./Collection-EYIO8LIo.js";import"./Separator-DM_ENBr9.js";import"./useSingleSelectListState-BfWSOh7m.js";import"./useTextField-BF95WJiu.js";import"./Disclosure-BkHCYATX.js";import"./Menu-DH7g12se.js";import"./NumberField-BC1f6D8o.js";import"./useNumberFormatter-75ZYSi36.js";import"./RadioGroup-D9o1GlB7.js";import"./SearchField-7SfLJVZJ.js";import"./Select-C_dq5qTI.js";import"./Slider-CNkNOX_n.js";import"./Tabs-BsPeZygm.js";import"./TextField-C4j0Nh0A.js";import"./index-BQlaamZD.js";import"./floating-ui.react-DZDdj-Od.js";import"./immer-VJu7bq0k.js";import"./downshift.esm-BNKeM0Z8.js";import"./extends-DRpakCH_.js";import"./react-textarea-autosize.browser.esm-DSCtRhza.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function we(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{we as default};
