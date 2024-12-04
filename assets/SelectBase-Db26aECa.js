import{j as r}from"./jsx-runtime-DQ32znRX.js";import{a,u as l,b as s}from"./index-CtBUti8q.js";import{c as E}from"./index-Bkh50RYL.js";import{b as P,c as R,o as B,f as C,m as j}from"./floating-ui.react-C2UAdtMt.js";import{S as _}from"./ScrollShadowContainer-F3QY9P2s.js";const p=6,H=48,L=1,A=H*p,M=L*p-1,Y=A+M,W=a.div`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return[s`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,q=a.div`
  ${({$isOpen:o,$hasError:t,$isDisabled:n})=>{const{tokens:i}=l(),{select:e}=i;return[s`
        display: grid;
        background: ${e.button.backgroundColor.base};
        padding-top: ${e.button.paddingTop};
        padding-bottom: ${e.button.paddingBottom};
        padding-left: ${e.button.paddingLeft};
        padding-right: ${e.button.paddingRight};
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
        `,n&&s`
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
`,O=a.div`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return s`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,D=a.div`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,m=a(E)`
  rotate: 0deg;
`,X=a(m)`
  rotate: 180deg;
`,G=a.div`
  ${({$isOpen:o})=>{const{tokens:t}=l(),{select:n}=t;return s`
      display: ${o?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${n.menu.radius};
      border-width: ${n.menu.stroke.width};
      border-style: ${n.menu.stroke.style};
      border-color: ${n.menu.stroke.color};
      box-shadow: 0px 2px 2px ${n.menu.shadow.outer.color};
      z-index: ${n.menu.zIndex};
    `}}
`,F=a.ul`
  ${()=>{const{tokens:o}=l(),{select:t}=o;return s`
      all: unset;
      display: grid;
      gap: ${t.menu.separator.width};
      background: ${t.menu.separator.color};
    `}}
`;function J(o){const{offsetValue:t}=o,{refs:n,floatingStyles:i}=P({placement:"bottom-start",whileElementsMounted:R,middleware:[B(t),C({padding:16}),j({apply({rects:e,elements:u}){Object.assign(u.floating.style,{minWidth:`${e.reference.width}px`})}})]});return{refs:n,floatingStyles:i}}function z(o){const{getToggleButtonProps:t,getMenuProps:n,isOpen:i,items:e,toggleButtonProps:u,renderButtonContent:f,renderListItem:b,hasError:g,isDisabled:d,maxListHeight:h,alertAssociationProps:$,testID:v="select"}=o,{tokens:y}=l(),{select:k}=y,{refs:c,floatingStyles:w}=J({offsetValue:parseInt(k.gap,10)}),{ref:T,...x}=n({ref:c.setFloating});return r.jsxs(r.Fragment,{children:[r.jsx(W,{children:r.jsx(q,{...u,...t({ref:c.setReference,disabled:d}),$isOpen:i,$hasError:g,$isDisabled:d,"data-testid":v,...$,children:r.jsxs(O,{children:[f(),r.jsx(D,{children:i?r.jsx(X,{"aria-hidden":"true"}):r.jsx(m,{"aria-hidden":"true"})})]})})}),r.jsx(G,{ref:T,style:w,$isOpen:i,children:i&&r.jsx("div",{style:{maxHeight:h},children:r.jsx(_,{children:r.jsx(F,{...x,children:e.map((I,S)=>b(I,S))})})})})]})}z.__docgenInfo={description:"",methods:[],displayName:"SelectBase",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},toggleButtonProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"literal",value:'"aria-describedby"'}],raw:`Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-describedby"
>`},description:""},renderButtonContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},renderListItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},maxListHeight:{required:!1,tsType:{name:"number"},description:""},alertAssociationProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"aria-errormessage" | "aria-invalid" | "aria-describedby"',elements:[{name:"literal",value:'"aria-errormessage"'},{name:"literal",value:'"aria-invalid"'},{name:"literal",value:'"aria-describedby"'}]}],raw:`Pick<
  ComponentPropsWithRef<"input">,
  "aria-errormessage" | "aria-invalid" | "aria-describedby"
>`},description:""}}};export{Y as M,z as S};
