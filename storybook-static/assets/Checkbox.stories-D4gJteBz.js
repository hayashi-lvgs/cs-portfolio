import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CKzsDAux.js";import"./preload-helper-PPVm8Dsz.js";const u=({label:p,checked:r,width:d,state:a,border:i,onChange:m})=>{const h=["checkbox-container",`is-${d}`,`is-${a}`,i?"has-border":""].join(" ");return e.jsxs("div",{className:h,onClick:()=>a!=="disabled"&&m?.(!r),children:[e.jsx("div",{className:`checkbox-box ${r?"is-checked":""}`,children:r&&e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M2 6L5 9L10 3",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:"checkbox-label",children:p}),e.jsx("span",{className:"help-icon",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})})]})};u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},width:{required:!0,tsType:{name:"union",raw:"'hug' | 'fill'",elements:[{name:"literal",value:"'hug'"},{name:"literal",value:"'fill'"}]},description:""},state:{required:!0,tsType:{name:"union",raw:"'default' | 'hover' | 'selected' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:""},border:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,k={title:"Components/Checkbox",component:u,args:{label:"選択肢選択肢選択肢選択肢",checked:!1,width:"hug",state:"default",border:!1},argTypes:{checked:{control:"boolean"},width:{control:"inline-radio",options:["hug","fill"]},state:{control:"select",options:["default","hover","selected","error","disabled"]},border:{control:"boolean"}}},s={render:function(r){const[{checked:d},a]=b();return e.jsx(u,{...r,checked:d,onChange:i=>a({checked:i})})}},t={args:{state:"default",label:"デフォルト"}},o={args:{state:"hover",label:"ホバー状態"}},n={args:{state:"selected",checked:!0,label:"選択済み"}},c={args:{state:"error",label:"エラーが発生しています",border:!0}},l={args:{state:"disabled",label:"操作できません"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      checked
    }, updateArgs] = useArgs();
    return <Checkbox {...args} checked={checked} onChange={(next: any) => updateArgs({
      checked: next
    })} />;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: "default",
    label: "デフォルト"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "hover",
    label: "ホバー状態"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    state: "selected",
    checked: true,
    label: "選択済み"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    label: "エラーが発生しています",
    border: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    label: "操作できません"
  }
}`,...l.parameters?.docs?.source}}};const f=["Basic","Default","Hover","Selected","Error","Disabled"];export{s as Basic,t as Default,l as Disabled,c as Error,o as Hover,n as Selected,f as __namedExportsOrder,k as default};
