import{j as p}from"./jsx-runtime-DQ32znRX.js";import{f as Re}from"./index-Cnk2rnxF.js";import{r as Se}from"./index-DH5ua8nC.js";import{i as We}from"./index-1pQtRAy1.js";import{a as H,u as A,b as $}from"./index-CzvSJj6w.js";import{I as Ee}from"./InputWrapper-C7of_464.js";import{I as Te}from"./InlineAlert-DF99-eWe.js";import{F as ze}from"./Fieldset-CRF8kD_-.js";import{C as De}from"./Checkbox-DDlRdHaz.js";import{b as Fe}from"./AlertAssociationProps-C5Idu2_l.js";var he=Symbol.for("immer-nothing"),Y=Symbol.for("immer-draftable"),l=Symbol.for("immer-state");function d(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var b=Object.getPrototypeOf;function P(e){return!!e&&!!e[l]}function h(e){var n;return e?ye(e)||Array.isArray(e)||!!e[Y]||!!((n=e.constructor)!=null&&n[Y])||S(e)||W(e):!1}var qe=Object.prototype.constructor.toString();function ye(e){if(!e||typeof e!="object")return!1;const n=b(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===qe}function C(e,n){R(e)===0?Object.entries(e).forEach(([r,t])=>{n(r,t,e)}):e.forEach((r,t)=>n(t,r,e))}function R(e){const n=e[l];return n?n.type_:Array.isArray(e)?1:S(e)?2:W(e)?3:0}function q(e,n){return R(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function be(e,n,r){const t=R(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function Ne(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function S(e){return e instanceof Map}function W(e){return e instanceof Set}function f(e){return e.copy_||e.base_}function N(e,n){if(S(e))return new Map(e);if(W(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!n&&ye(e))return b(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[l];let t=Reflect.ownKeys(r);for(let a=0;a<t.length;a++){const i=t[a],o=r[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(b(e),r)}function K(e,n=!1){return E(e)||P(e)||!h(e)||(R(e)>1&&(e.set=e.add=e.clear=e.delete=je),Object.freeze(e),n&&C(e,(r,t)=>K(t,!0))),e}function je(){d(2)}function E(e){return Object.isFrozen(e)}var Be={};function y(e){const n=Be[e];return n||d(0,e),n}var w;function Pe(){return w}function Ge(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function J(e,n){n&&(y("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function j(e){B(e),e.drafts_.forEach(Le),e.drafts_=null}function B(e){e===w&&(w=e.parent_)}function Q(e){return w=Ge(w,e)}function Le(e){const n=e[l];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Z(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[l].modified_&&(j(n),d(4)),h(e)&&(e=x(n,e),n.parent_||I(n,e)),n.patches_&&y("Patches").generateReplacementPatches_(r[l].base_,e,n.patches_,n.inversePatches_)):e=x(n,r,[]),j(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==he?e:void 0}function x(e,n,r){if(E(n))return n;const t=n[l];if(!t)return C(n,(a,i)=>V(e,t,n,a,i,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return I(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const a=t.copy_;let i=a,o=!1;t.type_===3&&(i=new Set(a),a.clear(),o=!0),C(i,(s,u)=>V(e,t,a,s,u,r,o)),I(e,a,!1),r&&e.patches_&&y("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function V(e,n,r,t,a,i,o){if(P(a)){const s=i&&n&&n.type_!==3&&!q(n.assigned_,t)?i.concat(t):void 0,u=x(e,a,s);if(be(r,t,u),P(u))e.canAutoFreeze_=!1;else return}else o&&r.add(a);if(h(a)&&!E(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;x(e,a),(!n||!n.scope_.parent_)&&I(e,a)}}function I(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&K(n,r)}function Me(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:Pe(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=t,i=U;r&&(a=[t],i=O);const{revoke:o,proxy:s}=Proxy.revocable(a,i);return t.draft_=s,t.revoke_=o,s}var U={get(e,n){if(n===l)return e;const r=f(e);if(!q(r,n))return He(e,r,n);const t=r[n];return e.finalized_||!h(t)?t:t===D(e.base_,n)?(F(e),e.copy_[n]=L(t,e)):t},has(e,n){return n in f(e)},ownKeys(e){return Reflect.ownKeys(f(e))},set(e,n,r){const t=ge(f(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const a=D(f(e),n),i=a==null?void 0:a[l];if(i&&i.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(Ne(r,a)&&(r!==void 0||q(e.base_,n)))return!0;F(e),G(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return D(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,F(e),G(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=f(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){d(11)},getPrototypeOf(e){return b(e.base_)},setPrototypeOf(){d(12)}},O={};C(U,(e,n)=>{O[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});O.deleteProperty=function(e,n){return O.set.call(this,e,n,void 0)};O.set=function(e,n,r){return U.set.call(this,e[0],n,r,e[0])};function D(e,n){const r=e[l];return(r?f(r):e)[n]}function He(e,n,r){var a;const t=ge(n,r);return t?"value"in t?t.value:(a=t.get)==null?void 0:a.call(e.draft_):void 0}function ge(e,n){if(!(n in e))return;let r=b(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=b(r)}}function G(e){e.modified_||(e.modified_=!0,e.parent_&&G(e.parent_))}function F(e){e.copy_||(e.copy_=N(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var $e=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const i=r;r=n;const o=this;return function(u=i,...T){return o.produce(u,z=>r.call(this,z,...T))}}typeof r!="function"&&d(6),t!==void 0&&typeof t!="function"&&d(7);let a;if(h(n)){const i=Q(this),o=L(n,void 0);let s=!0;try{a=r(o),s=!1}finally{s?j(i):B(i)}return J(i,t),Z(a,i)}else if(!n||typeof n!="object"){if(a=r(n),a===void 0&&(a=n),a===he&&(a=void 0),this.autoFreeze_&&K(a,!0),t){const i=[],o=[];y("Patches").generateReplacementPatches_(n,a,i,o),t(i,o)}return a}else d(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(o,...s)=>this.produceWithPatches(o,u=>n(u,...s));let t,a;return[this.produce(n,r,(o,s)=>{t=o,a=s}),t,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){h(e)||d(8),P(e)&&(e=Ke(e));const n=Q(this),r=L(e,void 0);return r[l].isManual_=!0,B(n),r}finishDraft(e,n){const r=e&&e[l];(!r||!r.isManual_)&&d(9);const{scope_:t}=r;return J(t,n),Z(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const a=n[r];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}r>-1&&(n=n.slice(r+1));const t=y("Patches").applyPatches_;return P(e)?t(e,n):this.produce(e,a=>t(a,n))}};function L(e,n){const r=S(e)?y("MapSet").proxyMap_(e,n):W(e)?y("MapSet").proxySet_(e,n):Me(e,n);return(n?n.scope_:Pe()).drafts_.push(r),r}function Ke(e){return P(e)||d(10,e),_e(e)}function _e(e){if(!h(e)||E(e))return e;const n=e[l];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=N(e,n.scope_.immer_.useStrictShallowCopy_)}else r=N(e,!0);return C(r,(t,a)=>{be(r,t,_e(a))}),n&&(n.finalized_=!1),r}var c=new $e,Ue=c.produce;c.produceWithPatches.bind(c);c.setAutoFreeze.bind(c);c.setUseStrictShallowCopy.bind(c);c.applyPatches.bind(c);c.createDraft.bind(c);c.finishDraft.bind(c);const ke=H.ul`
  ${()=>{const{tokens:e}=A(),{checkboxGroup:n}=e;return $`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${n.list.gap};
    `}}
`,Xe=H(ke)`
  ${()=>{const{tokens:e}=A(),{checkboxGroup:n}=e;return $`
      padding-left: ${n.nestedList.paddingLeft};
    `}}
`,Ye=H.li`
  ${()=>{const{tokens:e}=A(),{checkboxGroup:n}=e;return $`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${n.list.gap};
    `}}
`;function M(e){const{alertProps:n,legend:r,legendHint:t,legendTooltipProps:a,legendHintTooltipProps:i,inputs:o,onChange:s,testID:u="checkbox-group"}=e,{tokens:T}=A(),{checkboxGroup:z}=T,X=Se.useId(),Ce=Fe(X,e);function we(Oe){const xe=Ue(o,Ie=>{const Ae=Oe.id;We.updateInputs(Ie,Ae,"checked")});s(xe)}return p.jsx(Ee,{gap:z.gap,alert:n?p.jsx(Te,{id:X,...n,testID:`${u}-alert`}):void 0,children:p.jsx(ze,{legend:r,legendHint:t,legendTooltipProps:a,legendHintTooltipProps:i,testID:u,ariaAlertAssociationProps:Ce,children:p.jsx(ke,{children:ve(o,we)})})})}function ve(e,n){return e.map(({children:r,...t},a)=>{let i;return r&&r.length>0&&(i=r.map(o=>o.id).join(" ")),p.jsxs(Ye,{children:[p.jsx(De,{...t,onChange:()=>n(t),"aria-controls":i}),r&&r.length>0&&p.jsx(Xe,{children:ve(r,n)})]},a)})}M.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""},inputs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
> & {
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "aria-invalid"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
>`},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  label?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightProps, "children">',required:!0}},{key:"alertProps",value:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],required:!1}}]}}]},{name:"union",raw:'"alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"',elements:[{name:"literal",value:'"alertProps"'},{name:"literal",value:'"id"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"onChange"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
>`},{name:"signature",type:"object",raw:`{
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputs: CheckboxGroupInput[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
> & {
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "aria-invalid"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
>`},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  label?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightProps, "children">',required:!0}},{key:"alertProps",value:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],required:!1}}]}}]},{name:"union",raw:'"alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"',elements:[{name:"literal",value:'"alertProps"'},{name:"literal",value:'"id"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"onChange"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
>`},{name:"signature",type:"object",raw:`{
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},name:"inputs"}],return:{name:"void"}}},description:""}}};const{useArgs:Je}=__STORYBOOK_MODULE_PREVIEW_API__,Qe={title:"Components/Inputs/CheckboxGroup",component:M,render:function(n){const[,r]=Je();function t(a){n.onChange(a),r({inputs:a})}return p.jsx(M,{...n,onChange:t})},argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{onChange:Re(),legend:"Group title",inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"}},{id:"2",checked:!1,labelProps:{label:"Cheese"}},{id:"3",checked:!1,labelProps:{label:"Onions"}},{id:"4",checked:!1,labelProps:{label:"Lettuce"}},{id:"5",checked:!1,labelProps:{label:"Tomato"}}]}},m={},g={...m,args:{inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"},hasError:!0},{id:"2",checked:!1,labelProps:{label:"Cheese"},hasError:!0},{id:"3",checked:!1,labelProps:{label:"Onions"},hasError:!0},{id:"4",checked:!1,labelProps:{label:"Lettuce"},hasError:!0},{id:"5",checked:!1,labelProps:{label:"Tomato"},hasError:!0}],alertProps:{severity:"error",children:"Error description over two lines if required."}}},_={...m,args:{legend:"CheckboxGroup title",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},k={...m,args:{legend:"CheckboxGroup title",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},v={args:{inputs:[{id:"1",checked:!1,isIndeterminate:!1,labelProps:{label:"Burger"},children:[{id:"1-1",checked:!1,labelProps:{label:"Bacon"}},{id:"1-2",checked:!1,labelProps:{label:"Cheese"}},{id:"1-3",checked:!1,labelProps:{label:"Onions"}},{id:"1-4",checked:!1,labelProps:{label:"Lettuce"}},{id:"1-5",checked:!1,labelProps:{label:"Tomato"}}]}]}};var ee,ne,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:"{}",...(re=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ae,ie;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var oe,se,le;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "CheckboxGroup title",
    legendTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(le=(se=_.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ue,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "CheckboxGroup title",
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
}`,...(de=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,fe;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    inputs: [{
      id: "1",
      checked: false,
      isIndeterminate: false,
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
}`,...(fe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const Ze=["Basic","WithError","WithLegend","WithLegendHint","Nested"],dn=Object.freeze(Object.defineProperty({__proto__:null,Basic:m,Nested:v,WithError:g,WithLegend:_,WithLegendHint:k,__namedExportsOrder:Ze,default:Qe},Symbol.toStringTag,{value:"Module"}));export{m as B,dn as C,v as N,g as W,_ as a,k as b};
