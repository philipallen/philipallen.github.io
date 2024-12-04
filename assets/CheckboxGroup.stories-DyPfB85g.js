import{j as k}from"./jsx-runtime-DQ32znRX.js";import{f as he}from"./index-Cnk2rnxF.js";import{r as ye}from"./index-DH5ua8nC.js";import{C as be}from"./index-DKJt7waT.js";import{u as Pe}from"./index-CtBUti8q.js";import{b as _e,I as ke}from"./AlertAssociationProps-x_hs0fx1.js";import{I as ge}from"./InlineAlert-uKr_Jbz9.js";import{F as ve}from"./Fieldset-BYDjfDFG.js";import{C as Ce}from"./Checkbox-CY3SbDNL.js";var te=Symbol.for("immer-nothing"),L=Symbol.for("immer-draftable"),o=Symbol.for("immer-state");function u(e,...r){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var y=Object.getPrototypeOf;function b(e){return!!e&&!!e[o]}function m(e){var r;return e?ae(e)||Array.isArray(e)||!!e[L]||!!((r=e.constructor)!=null&&r[L])||A(e)||S(e):!1}var we=Object.prototype.constructor.toString();function ae(e){if(!e||typeof e!="object")return!1;const r=y(e);if(r===null)return!0;const n=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===we}function g(e,r){x(e)===0?Object.entries(e).forEach(([n,t])=>{r(n,t,e)}):e.forEach((n,t)=>r(t,n,e))}function x(e){const r=e[o];return r?r.type_:Array.isArray(e)?1:A(e)?2:S(e)?3:0}function z(e,r){return x(e)===2?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function ie(e,r,n){const t=x(e);t===2?e.set(r,n):t===3?e.add(n):e[r]=n}function Oe(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r}function A(e){return e instanceof Map}function S(e){return e instanceof Set}function p(e){return e.copy_||e.base_}function q(e,r){if(A(e))return new Map(e);if(S(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!r&&ae(e))return y(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[o];let t=Reflect.ownKeys(n);for(let a=0;a<t.length;a++){const i=t[a],s=n[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(y(e),n)}function B(e,r=!1){return R(e)||b(e)||!m(e)||(x(e)>1&&(e.set=e.add=e.clear=e.delete=Ie),Object.freeze(e),r&&g(e,(n,t)=>B(t,!0))),e}function Ie(){u(2)}function R(e){return Object.isFrozen(e)}var xe={};function f(e){const r=xe[e];return r||u(0,e),r}var v;function se(){return v}function Ae(e,r){return{drafts_:[],parent_:e,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function K(e,r){r&&(f("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=r)}function T(e){N(e),e.drafts_.forEach(Se),e.drafts_=null}function N(e){e===v&&(v=e.parent_)}function U(e){return v=Ae(v,e)}function Se(e){const r=e[o];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function H(e,r){r.unfinalizedDrafts_=r.drafts_.length;const n=r.drafts_[0];return e!==void 0&&e!==n?(n[o].modified_&&(T(r),u(4)),m(e)&&(e=O(r,e),r.parent_||I(r,e)),r.patches_&&f("Patches").generateReplacementPatches_(n[o].base_,e,r.patches_,r.inversePatches_)):e=O(r,n,[]),T(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),e!==te?e:void 0}function O(e,r,n){if(R(r))return r;const t=r[o];if(!t)return g(r,(a,i)=>$(e,t,r,a,i,n)),r;if(t.scope_!==e)return r;if(!t.modified_)return I(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const a=t.copy_;let i=a,s=!1;t.type_===3&&(i=new Set(a),a.clear(),s=!0),g(i,(l,d)=>$(e,t,a,l,d,n,s)),I(e,a,!1),n&&e.patches_&&f("Patches").generatePatches_(t,n,e.patches_,e.inversePatches_)}return t.copy_}function $(e,r,n,t,a,i,s){if(b(a)){const l=i&&r&&r.type_!==3&&!z(r.assigned_,t)?i.concat(t):void 0,d=O(e,a,l);if(ie(n,t,d),b(d))e.canAutoFreeze_=!1;else return}else s&&n.add(a);if(m(a)&&!R(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;O(e,a),(!r||!r.scope_.parent_)&&I(e,a)}}function I(e,r,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&B(r,n)}function Re(e,r){const n=Array.isArray(e),t={type_:n?1:0,scope_:r?r.scope_:se(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=t,i=M;n&&(a=[t],i=C);const{revoke:s,proxy:l}=Proxy.revocable(a,i);return t.draft_=l,t.revoke_=s,l}var M={get(e,r){if(r===o)return e;const n=p(e);if(!z(n,r))return We(e,n,r);const t=n[r];return e.finalized_||!m(t)?t:t===D(e.base_,r)?(F(e),e.copy_[r]=j(t,e)):t},has(e,r){return r in p(e)},ownKeys(e){return Reflect.ownKeys(p(e))},set(e,r,n){const t=le(p(e),r);if(t!=null&&t.set)return t.set.call(e.draft_,n),!0;if(!e.modified_){const a=D(p(e),r),i=a==null?void 0:a[o];if(i&&i.base_===n)return e.copy_[r]=n,e.assigned_[r]=!1,!0;if(Oe(n,a)&&(n!==void 0||z(e.base_,r)))return!0;F(e),E(e)}return e.copy_[r]===n&&(n!==void 0||r in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[r])||(e.copy_[r]=n,e.assigned_[r]=!0),!0},deleteProperty(e,r){return D(e.base_,r)!==void 0||r in e.base_?(e.assigned_[r]=!1,F(e),E(e)):delete e.assigned_[r],e.copy_&&delete e.copy_[r],!0},getOwnPropertyDescriptor(e,r){const n=p(e),t=Reflect.getOwnPropertyDescriptor(n,r);return t&&{writable:!0,configurable:e.type_!==1||r!=="length",enumerable:t.enumerable,value:n[r]}},defineProperty(){u(11)},getPrototypeOf(e){return y(e.base_)},setPrototypeOf(){u(12)}},C={};g(M,(e,r)=>{C[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}});C.deleteProperty=function(e,r){return C.set.call(this,e,r,void 0)};C.set=function(e,r,n){return M.set.call(this,e[0],r,n,e[0])};function D(e,r){const n=e[o];return(n?p(n):e)[r]}function We(e,r,n){var a;const t=le(r,n);return t?"value"in t?t.value:(a=t.get)==null?void 0:a.call(e.draft_):void 0}function le(e,r){if(!(r in e))return;let n=y(e);for(;n;){const t=Object.getOwnPropertyDescriptor(n,r);if(t)return t;n=y(n)}}function E(e){e.modified_||(e.modified_=!0,e.parent_&&E(e.parent_))}function F(e){e.copy_||(e.copy_=q(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var De=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(r,n,t)=>{if(typeof r=="function"&&typeof n!="function"){const i=n;n=r;const s=this;return function(d=i,...w){return s.produce(d,W=>n.call(this,W,...w))}}typeof n!="function"&&u(6),t!==void 0&&typeof t!="function"&&u(7);let a;if(m(r)){const i=U(this),s=j(r,void 0);let l=!0;try{a=n(s),l=!1}finally{l?T(i):N(i)}return K(i,t),H(a,i)}else if(!r||typeof r!="object"){if(a=n(r),a===void 0&&(a=r),a===te&&(a=void 0),this.autoFreeze_&&B(a,!0),t){const i=[],s=[];f("Patches").generateReplacementPatches_(r,a,i,s),t(i,s)}return a}else u(1,r)},this.produceWithPatches=(r,n)=>{if(typeof r=="function")return(s,...l)=>this.produceWithPatches(s,d=>r(d,...l));let t,a;return[this.produce(r,n,(s,l)=>{t=s,a=l}),t,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){m(e)||u(8),b(e)&&(e=Fe(e));const r=U(this),n=j(e,void 0);return n[o].isManual_=!0,N(r),n}finishDraft(e,r){const n=e&&e[o];(!n||!n.isManual_)&&u(9);const{scope_:t}=n;return K(t,r),H(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,r){let n;for(n=r.length-1;n>=0;n--){const a=r[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(r=r.slice(n+1));const t=f("Patches").applyPatches_;return b(e)?t(e,r):this.produce(e,a=>t(a,r))}};function j(e,r){const n=A(e)?f("MapSet").proxyMap_(e,r):S(e)?f("MapSet").proxySet_(e,r):Re(e,r);return(r?r.scope_:se()).drafts_.push(n),n}function Fe(e){return b(e)||u(10,e),oe(e)}function oe(e){if(!m(e)||R(e))return e;const r=e[o];let n;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,n=q(e,r.scope_.immer_.useStrictShallowCopy_)}else n=q(e,!0);return g(n,(t,a)=>{ie(n,t,oe(a))}),r&&(r.finalized_=!1),n}var c=new De,ze=c.produce;c.produceWithPatches.bind(c);c.setAutoFreeze.bind(c);c.setUseStrictShallowCopy.bind(c);c.applyPatches.bind(c);c.createDraft.bind(c);c.finishDraft.bind(c);function G(e){const{alertProps:r,legend:n,legendHint:t,inputs:a,onChange:i,testID:s="checkbox-group"}=e,{tokens:l}=Pe(),{checkboxGroup:d}=l,w=ye.useId(),W=_e(w,e);function ue(de){const pe=ze(a,me=>{const fe=de.id;be.updateInputs(me,fe,"checked")});i(pe)}return k.jsx(ke,{gap:d.gap,alert:r?k.jsx(ge,{id:w,...r,testID:`${s}-alert`}):void 0,children:k.jsx(ve,{legend:n,legendHint:t,components:ce(a,ue),testID:s,ariaAlertAssociationProps:W})})}function ce(e,r){return e.map(({children:n,...t})=>{let a;return n&&n.length>0&&(a=n.map(i=>i.id).join(" ")),{component:k.jsx(Ce,{...t,onChange:()=>r(t),"aria-controls":a}),nestedComponents:n?ce(n,r):void 0}})}G.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
  "children" | "aria-errormessage" | "aria-invalid"
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
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "aria-errormessage" | "aria-invalid"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"aria-errormessage"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-errormessage" | "aria-invalid"
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
  "children" | "aria-errormessage" | "aria-invalid"
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
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "aria-errormessage" | "aria-invalid"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"aria-errormessage"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-errormessage" | "aria-invalid"
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
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},name:"inputs"}],return:{name:"void"}}},description:""}}};const{useArgs:qe}=__STORYBOOK_MODULE_PREVIEW_API__,Te={title:"Components/Inputs/CheckboxGroup",component:G,render:function(r){const[,n]=qe();function t(a){r.onChange(a),n({inputs:a})}return k.jsx(G,{...r,onChange:t})},argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{onChange:he(),legend:"Group title",inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"}},{id:"2",checked:!1,labelProps:{label:"Cheese"}},{id:"3",checked:!1,labelProps:{label:"Onions"}},{id:"4",checked:!1,labelProps:{label:"Lettuce"}},{id:"5",checked:!1,labelProps:{label:"Tomato"}}]}},h={},P={...h,args:{inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"},hasError:!0},{id:"2",checked:!1,labelProps:{label:"Cheese"}},{id:"3",checked:!1,labelProps:{label:"Onions"}},{id:"4",checked:!1,labelProps:{label:"Lettuce"}},{id:"5",checked:!1,labelProps:{label:"Tomato"}}],alertProps:{severity:"error",children:"Error description over two lines if required."}}},_={args:{inputs:[{id:"1",checked:!1,isIndeterminate:!1,labelProps:{label:"Burger"},children:[{id:"1-1",checked:!1,labelProps:{label:"Bacon"}},{id:"1-2",checked:!1,labelProps:{label:"Cheese"}},{id:"1-3",checked:!1,labelProps:{label:"Onions"}},{id:"1-4",checked:!1,labelProps:{label:"Lettuce"}},{id:"1-5",checked:!1,labelProps:{label:"Tomato"}}]}]}};var X,Y,J;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...(J=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,Z,V;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      }
    }, {
      id: "3",
      checked: false,
      labelProps: {
        label: "Onions"
      }
    }, {
      id: "4",
      checked: false,
      labelProps: {
        label: "Lettuce"
      }
    }, {
      id: "5",
      checked: false,
      labelProps: {
        label: "Tomato"
      }
    }],
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(V=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:V.source}}};var ee,re,ne;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ne=["Basic","WithError","Nested"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Basic:h,Nested:_,WithError:P,__namedExportsOrder:Ne,default:Te},Symbol.toStringTag,{value:"Module"}));export{h as B,Xe as C,_ as N,P as W};
