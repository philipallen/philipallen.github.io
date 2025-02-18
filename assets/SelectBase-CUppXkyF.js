import{j as n}from"./jsx-runtime-DQ32znRX.js";import{c as E,d as L,o as I,f as H,m as W,F as q}from"./floating-ui.react-Bc49jMsR.js";import{a as i,u as l,b as s}from"./index-CzvSJj6w.js";import{b as O}from"./index-Bl852yH3.js";import{r as D}from"./index-DH5ua8nC.js";import{r as F}from"./index-D9uilScg.js";import{u as A}from"./OverlayContext-0eIRNS6h.js";import{S as J}from"./ScrollShadowContainer-5PBttQuR.js";const M=i.div`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return[s`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,X=i.div`
  ${({$isOpen:o,$hasError:t,$isDisabled:r})=>{const{tokens:a}=l(),{select:e}=a;return[s`
        display: grid;
        min-height: ${e.button.minHeight};
        background: ${e.button.backgroundColor.base};
        padding-top: ${e.button.padding.top};
        padding-left: ${e.button.padding.left};
        padding-right: ${e.button.padding.right};
        padding-bottom: ${e.button.padding.bottom};
        border-radius: ${e.button.stroke.radius};
        outline-width: ${e.button.stroke.width.base};
        outline-style: ${e.button.stroke.style};
        outline-color: ${e.button.stroke.color.base};
        outline-offset: ${e.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${e.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${e.button.stroke.width.hover};
          outline-color: ${e.button.stroke.color.hover};
          outline-offset: ${e.button.stroke.offset.hover};

          svg {
            color: ${e.button.icon.color.hover};
          }
        }
      `,t&&s`
          &,
          &:hover,
          &:focus {
            outline-width: ${e.button.stroke.width.error};
            outline-color: ${e.button.stroke.color.error};
            outline-offset: ${e.button.stroke.offset.error};
          }
        `,o&&s`
          &,
          &:hover,
          &:focus {
            outline-width: ${e.button.stroke.width.active};
            outline-color: ${e.button.stroke.color.active};
            outline-offset: ${e.button.stroke.offset.active};

            svg {
              color: ${e.button.icon.color.active};
            }
          }
        `,r&&s`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${e.button.stroke.width.disabled};
            outline-color: ${e.button.stroke.color.disabled};
            outline-offset: ${e.button.stroke.offset.disabled};

            svg {
              color: ${e.button.icon.color.disabled};
            }
          }
        `]}}
`,z=i.div`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return s`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,_=i.div`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,$=i(O)`
  rotate: 0deg;
`,V=i($)`
  rotate: 180deg;
`,N=i.div`
  ${({$isOpen:o})=>{const{tokens:t}=l(),{select:r}=t;return s`
      display: ${o?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${r.menu.radius};
      border-width: ${r.menu.stroke.width};
      border-style: ${r.menu.stroke.style};
      border-color: ${r.menu.stroke.color};
      box-shadow: 0px 2px 2px ${r.menu.shadow.outer.color};
      z-index: ${r.menu.zIndex};
    `}}
`,U=i.ul`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return s`
      all: unset;
      display: grid;
      gap: ${t.menu.separator.width};
      background: ${t.menu.separator.color};
    `}}
`;function G(o){const{offsetValue:t}=o,[r,a]=D.useState(),{refs:e,floatingStyles:u}=E({placement:"bottom",whileElementsMounted:L,middleware:[I(t),H({padding:16}),W({padding:16,apply({rects:d,elements:c,availableHeight:p}){Object.assign(c.floating.style,{minWidth:`${d.reference.width}px`}),F.flushSync(()=>a(p))}})]});return{refs:e,floatingStyles:u,availableListHeight:r}}function K(o){const{getToggleButtonProps:t,getMenuProps:r,isOpen:a,items:e,toggleButtonProps:u,renderButtonContent:d,renderListItem:c,hasError:p,isDisabled:b,maxListHeight:m,alertAssociationProps:v,testID:y="select"}=o,{tokens:k}=l(),{select:w}=k,{refs:g,floatingStyles:x,availableListHeight:f}=G({offsetValue:parseInt(w.gap,10)}),P={ref:g.setFloating},j={suppressRefError:!0},{ref:C,...R}=r(P,j),{portalElement:S}=A();let h=m;return f&&m&&f<m&&(h=f),n.jsxs(n.Fragment,{children:[n.jsx(M,{children:n.jsx(X,{...u,...t({ref:g.setReference,disabled:b}),$isOpen:a,$hasError:p,$isDisabled:b,"data-testid":y,...v,children:n.jsxs(z,{children:[d(),n.jsx(_,{children:a?n.jsx(V,{"aria-hidden":"true"}):n.jsx($,{"aria-hidden":"true"})})]})})}),n.jsx(q,{root:S,children:n.jsx(N,{ref:C,style:x,$isOpen:a,children:n.jsx("div",{style:{maxHeight:h},children:n.jsx(J,{children:n.jsx(U,{...R,children:e.map((T,B)=>c(T,B))})})})})})]})}K.__docgenInfo={description:"",methods:[],displayName:"SelectBase",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},toggleButtonProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"literal",value:'"aria-describedby"'}],raw:`Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-describedby"
>`},description:""},renderButtonContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},renderListItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},maxListHeight:{required:!1,tsType:{name:"number"},description:""},alertAssociationProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"aria-invalid" | "aria-describedby"',elements:[{name:"literal",value:'"aria-invalid"'},{name:"literal",value:'"aria-describedby"'}]}],raw:`Pick<
  ComponentPropsWithRef<"input">,
  "aria-invalid" | "aria-describedby"
>`},description:""}}};export{K as S};
