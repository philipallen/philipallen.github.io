import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{f as U}from"./index-iP1lhtUC.js";import{r as x}from"./index-CcKhGcwW.js";import{p as V}from"./immer-VJu7bq0k.js";import{e as Y}from"./index-WLaP1tkh.js";import{a as g,u,b as f}from"./index-BVzVw2jm.js";import{I as J,a as Q}from"./InputAlerts-qNYk2mzd.js";import{F as X}from"./Fieldset-BSCpq3li.js";import{C as Z}from"./Checkbox-BZNIfBWJ.js";import{b as ee}from"./AlertAssociationProps-CEhVpbTc.js";const S=g.ul`
  ${()=>{const{tokens:o}=u(),{checkboxGroup:e}=o;return f`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${e.list.gap};
    `}}
`,re=g(S)`
  ${()=>{const{tokens:o}=u(),{checkboxGroup:e}=o;return f`
      padding-left: ${e.nestedList.paddingLeft};
    `}}
`,oe=g.li`
  ${()=>{const{tokens:o}=u(),{checkboxGroup:e}=o;return f`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${e.list.gap};
    `}}
`,b=x.forwardRef((o,e)=>{const{alertProps:r,legend:s,legendHint:t,legendTooltipProps:p,legendHintTooltipProps:h,inputs:m,onChange:w,testID:P="checkbox-group"}=o,{tokens:$}=u(),{checkboxGroup:N}=$,k=x.useId(),z=ee(k,o);function D(q){const F=V(m,M=>{const K=q.id;Y.updateInputs(M,K,"checked")});w(F)}return n.jsx(J,{gap:N.gap,alert:r&&n.jsx("div",{id:k,"data-testid":`${P}-alerts`,children:n.jsx(Q,{alerts:Array.isArray(r)?r:[r]})}),children:n.jsx(X,{ref:e,legend:s,legendHint:t,legendTooltipProps:p,legendHintTooltipProps:h,testID:P,ariaAlertAssociationProps:z,children:n.jsx(S,{children:W(m,D)})})})});b.displayName="CheckboxGroup";function W(o,e){return o.map(({children:r,...s},t)=>{let p;return r&&r.length>0&&(p=r.map(h=>h.id).join(" ")),n.jsxs(oe,{children:[n.jsx(Z,{...s,onChange:()=>e(s),"aria-controls":p}),r&&r.length>0&&n.jsx(re,{children:W(r,e)})]},t)})}const{useArgs:ne}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/Inputs/CheckboxGroup",component:b,render:function(e){const[,r]=ne();function s(t){e.onChange(t),r({inputs:t})}return n.jsx(b,{...e,onChange:s})},argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{onChange:U(),legend:"Group legend",inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"}},{id:"2",checked:!1,labelProps:{label:"Cheese"}},{id:"3",checked:!1,labelProps:{label:"Onions"}},{id:"4",checked:!1,labelProps:{label:"Lettuce"}},{id:"5",checked:!1,labelProps:{label:"Tomato"}}]}},a={},l={...a,args:{inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"},hasError:!0},{id:"2",checked:!1,labelProps:{label:"Cheese"},hasError:!0},{id:"3",checked:!1,labelProps:{label:"Onions"},hasError:!0},{id:"4",checked:!1,labelProps:{label:"Lettuce"},hasError:!0},{id:"5",checked:!1,labelProps:{label:"Tomato"},hasError:!0}],alertProps:{severity:"error",children:"Error description over two lines if required."}}},c={...a,args:{legend:"CheckboxGroup legend",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},i={...a,args:{legend:"CheckboxGroup legend",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},d={args:{inputs:[{id:"1",checked:!1,labelProps:{label:"Burger"},children:[{id:"1-1",checked:!1,labelProps:{label:"Bacon"}},{id:"1-2",checked:!1,labelProps:{label:"Cheese"}},{id:"1-3",checked:!1,labelProps:{label:"Onions"}},{id:"1-4",checked:!1,labelProps:{label:"Lettuce"}},{id:"1-5",checked:!1,labelProps:{label:"Tomato"}}]}]}};var C,B,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var A,E,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Basic,
  args: {
    inputs: [{
      id: "1",
      checked: false,
      labelProps: {
        label: "Bacon"
      },
      hasError: true
    }, {
      id: "2",
      checked: false,
      labelProps: {
        label: "Cheese"
      },
      hasError: true
    }, {
      id: "3",
      checked: false,
      labelProps: {
        label: "Onions"
      },
      hasError: true
    }, {
      id: "4",
      checked: false,
      labelProps: {
        label: "Lettuce"
      },
      hasError: true
    }, {
      id: "5",
      checked: false,
      labelProps: {
        label: "Tomato"
      },
      hasError: true
    }],
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,j,G;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "CheckboxGroup legend",
    legendTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var _,L,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "CheckboxGroup legend",
    legendHint: "Additional information",
    legendHintTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var O,v,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    inputs: [{
      id: "1",
      checked: false,
      labelProps: {
        label: "Burger"
      },
      children: [{
        id: "1-1",
        checked: false,
        labelProps: {
          label: "Bacon"
        }
      }, {
        id: "1-2",
        checked: false,
        labelProps: {
          label: "Cheese"
        }
      }, {
        id: "1-3",
        checked: false,
        labelProps: {
          label: "Onions"
        }
      }, {
        id: "1-4",
        checked: false,
        labelProps: {
          label: "Lettuce"
        }
      }, {
        id: "1-5",
        checked: false,
        labelProps: {
          label: "Tomato"
        }
      }]
    }]
  }
}`,...(H=(v=d.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};const se=["Basic","WithError","WithLegend","WithHint","Nested"],me=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Nested:d,WithError:l,WithHint:i,WithLegend:c,__namedExportsOrder:se,default:ae},Symbol.toStringTag,{value:"Module"}));export{a as B,me as C,d as N,l as W,c as a,i as b};
