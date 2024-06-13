import{j as E}from"./jsx-runtime-6eef64cc.js";import{f as se}from"./index-6eef940f.js";import{C as le}from"./index-f5bdf07a.js";import{F as ce}from"./Fieldset-f58fd7a3.js";import{C as ue}from"./Checkbox-6e63caf1.js";var V=Symbol.for("immer-nothing"),M=Symbol.for("immer-draftable"),l=Symbol.for("immer-state");function u(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var h=Object.getPrototypeOf;function y(e){return!!e&&!!e[l]}function d(e){var n;return e?ee(e)||Array.isArray(e)||!!e[M]||!!((n=e.constructor)!=null&&n[M])||O(e)||I(e):!1}var pe=Object.prototype.constructor.toString();function ee(e){if(!e||typeof e!="object")return!1;const n=h(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===pe}function P(e,n){v(e)===0?Object.entries(e).forEach(([r,t])=>{n(r,t,e)}):e.forEach((r,t)=>n(t,r,e))}function v(e){const n=e[l];return n?n.type_:Array.isArray(e)?1:O(e)?2:I(e)?3:0}function z(e,n){return v(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function ne(e,n,r){const t=v(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function me(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function O(e){return e instanceof Map}function I(e){return e instanceof Set}function m(e){return e.copy_||e.base_}function D(e,n){if(O(e))return new Map(e);if(I(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!n&&ee(e))return h(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[l];let t=Reflect.ownKeys(r);for(let i=0;i<t.length;i++){const a=t[i],o=r[a];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(h(e),r)}function G(e,n=!1){return x(e)||y(e)||!d(e)||(v(e)>1&&(e.set=e.add=e.clear=e.delete=de),Object.freeze(e),n&&P(e,(r,t)=>G(t,!0))),e}function de(){u(2)}function x(e){return Object.isFrozen(e)}var fe={};function f(e){const n=fe[e];return n||u(0,e),n}var k;function re(){return k}function he(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function L(e,n){n&&(f("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function W(e){N(e),e.drafts_.forEach(ye),e.drafts_=null}function N(e){e===k&&(k=e.parent_)}function K(e){return k=he(k,e)}function ye(e){const n=e[l];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function U(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[l].modified_&&(W(n),u(4)),d(e)&&(e=C(n,e),n.parent_||w(n,e)),n.patches_&&f("Patches").generateReplacementPatches_(r[l].base_,e,n.patches_,n.inversePatches_)):e=C(n,r,[]),W(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==V?e:void 0}function C(e,n,r){if(x(n))return n;const t=n[l];if(!t)return P(n,(i,a)=>H(e,t,n,i,a,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return w(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const i=t.copy_;let a=i,o=!1;t.type_===3&&(a=new Set(i),i.clear(),o=!0),P(a,(s,p)=>H(e,t,i,s,p,r,o)),w(e,i,!1),r&&e.patches_&&f("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function H(e,n,r,t,i,a,o){if(y(i)){const s=a&&n&&n.type_!==3&&!z(n.assigned_,t)?a.concat(t):void 0,p=C(e,i,s);if(ne(r,t,p),y(p))e.canAutoFreeze_=!1;else return}else o&&r.add(i);if(d(i)&&!x(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;C(e,i),(!n||!n.scope_.parent_)&&w(e,i)}}function w(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&G(n,r)}function be(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:re(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=t,a=B;r&&(i=[t],a=g);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return t.draft_=s,t.revoke_=o,s}var B={get(e,n){if(n===l)return e;const r=m(e);if(!z(r,n))return _e(e,r,n);const t=r[n];return e.finalized_||!d(t)?t:t===R(e.base_,n)?(F(e),e.copy_[n]=j(t,e)):t},has(e,n){return n in m(e)},ownKeys(e){return Reflect.ownKeys(m(e))},set(e,n,r){const t=te(m(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const i=R(m(e),n),a=i==null?void 0:i[l];if(a&&a.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(me(r,i)&&(r!==void 0||z(e.base_,n)))return!0;F(e),T(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return R(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,F(e),T(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=m(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){u(11)},getPrototypeOf(e){return h(e.base_)},setPrototypeOf(){u(12)}},g={};P(B,(e,n)=>{g[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});g.deleteProperty=function(e,n){return g.set.call(this,e,n,void 0)};g.set=function(e,n,r){return B.set.call(this,e[0],n,r,e[0])};function R(e,n){const r=e[l];return(r?m(r):e)[n]}function _e(e,n,r){var i;const t=te(n,r);return t?"value"in t?t.value:(i=t.get)==null?void 0:i.call(e.draft_):void 0}function te(e,n){if(!(n in e))return;let r=h(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=h(r)}}function T(e){e.modified_||(e.modified_=!0,e.parent_&&T(e.parent_))}function F(e){e.copy_||(e.copy_=D(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Pe=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const a=r;r=n;const o=this;return function(p=a,...A){return o.produce(p,S=>r.call(this,S,...A))}}typeof r!="function"&&u(6),t!==void 0&&typeof t!="function"&&u(7);let i;if(d(n)){const a=K(this),o=j(n,void 0);let s=!0;try{i=r(o),s=!1}finally{s?W(a):N(a)}return L(a,t),U(i,a)}else if(!n||typeof n!="object"){if(i=r(n),i===void 0&&(i=n),i===V&&(i=void 0),this.autoFreeze_&&G(i,!0),t){const a=[],o=[];f("Patches").generateReplacementPatches_(n,i,a,o),t(a,o)}return i}else u(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(o,...s)=>this.produceWithPatches(o,p=>n(p,...s));let t,i;return[this.produce(n,r,(o,s)=>{t=o,i=s}),t,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){d(e)||u(8),y(e)&&(e=ke(e));const n=K(this),r=j(e,void 0);return r[l].isManual_=!0,N(n),r}finishDraft(e,n){const r=e&&e[l];(!r||!r.isManual_)&&u(9);const{scope_:t}=r;return L(t,n),U(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(n=n.slice(r+1));const t=f("Patches").applyPatches_;return y(e)?t(e,n):this.produce(e,i=>t(i,n))}};function j(e,n){const r=O(e)?f("MapSet").proxyMap_(e,n):I(e)?f("MapSet").proxySet_(e,n):be(e,n);return(n?n.scope_:re()).drafts_.push(r),r}function ke(e){return y(e)||u(10,e),ie(e)}function ie(e){if(!d(e)||x(e))return e;const n=e[l];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=D(e,n.scope_.immer_.useStrictShallowCopy_)}else r=D(e,!0);return P(r,(t,i)=>{ne(r,t,ie(i))}),n&&(n.finalized_=!1),r}var c=new Pe,ge=c.produce;c.produceWithPatches.bind(c);c.setAutoFreeze.bind(c);c.setUseStrictShallowCopy.bind(c);c.applyPatches.bind(c);c.createDraft.bind(c);c.finishDraft.bind(c);function q(e){const{legend:n,legendHint:r,inputs:t,onChange:i,testID:a="checkbox-group"}=e;function o(s){const p=ge(t,A=>{const S=s.id,oe="checked";le.updateInputs(A,S,oe)});i(p)}return E.jsx(ce,{legend:n,legendHint:r,components:ae(t,o),testID:a})}function ae(e,n){return e.map(({children:r,...t})=>{let i;return r&&r.length>0&&(i=r.map(a=>a.id).join(" ")),{component:E.jsx(ue,{...t,onChange:()=>n(t),"aria-controls":i}),nestedComponents:r?ae(r,n):void 0}})}q.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{inputs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  CheckboxProps,
  "id" | "checked" | "disabled" | "onChange" | "children"
> & {
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<CheckboxBaseProps, "children"> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InputAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<CheckboxBaseProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InputAlertProps;
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
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}],required:!1}}]}}]},{name:"union",raw:'"id" | "checked" | "disabled" | "onChange" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"onChange"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  CheckboxProps,
  "id" | "checked" | "disabled" | "onChange" | "children"
>`},{name:"signature",type:"object",raw:`{
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputs: CheckboxGroupInput[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  CheckboxProps,
  "id" | "checked" | "disabled" | "onChange" | "children"
> & {
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<CheckboxBaseProps, "children"> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InputAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<CheckboxBaseProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InputAlertProps;
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
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}],required:!1}}]}}]},{name:"union",raw:'"id" | "checked" | "disabled" | "onChange" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"onChange"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  CheckboxProps,
  "id" | "checked" | "disabled" | "onChange" | "children"
>`},{name:"signature",type:"object",raw:`{
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},name:"inputs"}],return:{name:"void"}}},description:""}}};const{useArgs:Ce}=__STORYBOOK_MODULE_PREVIEW_API__,we={title:"Components/Inputs/CheckboxGroup",component:q,render:function(n){const[,r]=Ce();function t(i){n.onChange(i),r({inputs:i})}return E.jsx(q,{...n,onChange:t})},argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{onChange:se(),legend:"Group title",inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"}},{id:"2",checked:!1,labelProps:{label:"Cheese"}},{id:"3",checked:!1,labelProps:{label:"Onions"}},{id:"4",checked:!1,labelProps:{label:"Lettuce"}},{id:"5",checked:!1,labelProps:{label:"Tomato"}}]}},b={},_={args:{inputs:[{id:"1",checked:!1,isIndeterminate:!1,labelProps:{label:"Burger"},children:[{id:"1-1",checked:!1,labelProps:{label:"Bacon"}},{id:"1-2",checked:!1,labelProps:{label:"Cheese"}},{id:"1-3",checked:!1,labelProps:{label:"Onions"}},{id:"1-4",checked:!1,labelProps:{label:"Lettuce"}},{id:"1-5",checked:!1,labelProps:{label:"Tomato"}}]}]}};var X,Y,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,Q,Z;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const ve=["Basic","Nested"],Re=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Nested:_,__namedExportsOrder:ve,default:we},Symbol.toStringTag,{value:"Module"}));export{b as B,Re as C,_ as N};
