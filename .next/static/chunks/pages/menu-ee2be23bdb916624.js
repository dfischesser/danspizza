(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{7171:function(e,o,t){"use strict";var n=t(4836);o.Z=void 0;var i=n(t(4938)),s=t(5893),r=(0,i.default)((0,s.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");o.Z=r},9628:function(e,o,t){"use strict";var n=t(4836);o.Z=void 0;var i=n(t(4938)),s=t(5893),r=(0,i.default)((0,s.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");o.Z=r},9119:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return t(7874)}])},7874:function(e,o,t){"use strict";t.r(o),t.d(o,{__N_SSG:function(){return Q},default:function(){return Y}});var n=t(5893),i=t(7294),s=t(1233),r=t(629),l=t(1057),c=t(4871),a=t(4102),u=t(7212),p=t(9334),d=t(9628),m=t(7171),f=t(3366),g=t(7462),h=t(6010),I=t(4780),x=t(1796),y=t(1964),O=t(8169),D=(0,O.Z)((0,n.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),C=(0,O.Z)((0,n.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Z=(0,O.Z)((0,n.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=t(8216),j=t(1657),S=t(948),z=t(1588),k=t(4867);function b(e){return(0,k.Z)("MuiCheckbox",e)}let N=(0,z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],E=e=>{let{classes:o,indeterminate:t,color:n}=e,i={root:["root",t&&"indeterminate",`color${(0,v.Z)(n)}`]},s=(0,I.Z)(i,b,o);return(0,g.Z)({},o,s)},J=(0,S.ZP)(y.Z,{shouldForwardProp:e=>(0,S.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o[`color${(0,v.Z)(t.color)}`]]}})(({theme:e,ownerState:o})=>(0,g.Z)({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===o.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,x.Fq)("default"===o.color?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${N.checked}, &.${N.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${N.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),P=(0,n.jsx)(C,{}),_=(0,n.jsx)(D,{}),F=(0,n.jsx)(Z,{}),L=i.forwardRef(function(e,o){var t,s;let r=(0,j.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=P,color:c="primary",icon:a=_,indeterminate:u=!1,indeterminateIcon:p=F,inputProps:d,size:m="medium",className:I}=r,x=(0,f.Z)(r,w),y=u?p:a,O=u?p:l,D=(0,g.Z)({},r,{color:c,indeterminate:u,size:m}),C=E(D);return(0,n.jsx)(J,(0,g.Z)({type:"checkbox",inputProps:(0,g.Z)({"data-indeterminate":u},d),icon:i.cloneElement(y,{fontSize:null!=(t=y.props.fontSize)?t:m}),checkedIcon:i.cloneElement(O,{fontSize:null!=(s=O.props.fontSize)?s:m}),ownerState:D,ref:o,className:(0,h.Z)(C.root,I)},x,{classes:C}))});function M(e){let{customizeOption:o,handleChange:t}=e,[s,r]=(0,i.useState)([]);return(0,n.jsx)(c.Z,{multiple:!0,disablePortal:!0,limitTags:2,options:o.optionItems,disableCloseOnSelect:!0,value:s,onChange:(e,n)=>{e.currentTarget&&(console.log("change hit. target: "+e.currentTarget.innerText),console.log("newValue: "+JSON.stringify(n))),n.find(e=>"Cheese"===e.customizeOptionItem)?(console.log("found cheese in array"),e.currentTarget.innerText.startsWith("Cheese")?(console.log("current target starts with cheese. setting only cheese"),r(n.filter(e=>"Cheese"===e.customizeOptionItem))):r(n.filter(e=>"Cheese"!==e.customizeOptionItem))):r(n),t({optionItems:n,optionID:o.optionID})},sx:{minWidth:300,mx:"auto",display:"block",pt:2},getOptionLabel:e=>e.customizeOptionItem,size:"small",renderInput:e=>(0,n.jsx)(a.Z,{...e,size:"small",multiline:!0,maxRows:2,label:o.optionName,variant:"filled"}),renderOption:(e,o,t)=>{let{selected:s}=t;return(0,i.createElement)(u.ZP,{...e,key:o.customizeOptionItemID,sx:{backgroundColor:"background.paper"},secondaryAction:o.price.toLocaleString("us-US",{style:"currency",currency:"USD"})},(0,n.jsx)(p.Z,{primary:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L,{icon:(0,n.jsx)(d.Z,{fontSize:"small"}),checkedIcon:(0,n.jsx)(m.Z,{fontSize:"small"}),style:{marginRight:8},checked:s}),o.customizeOptionItem]})}))}})}function V(e){let{customizeOption:o,handleChange:t,defaultValue:s}=e;console.log("autocomplete default value: "+s);let[r,l]=(0,i.useState)(s||null);return(0,n.jsx)(c.Z,{disablePortal:!0,value:r,onChange:(e,n)=>{l(n),t({optionItems:n?[n]:[],optionID:o.optionID})},onInputChange:(e,n)=>{console.log("hit input change, newValue: "+JSON.stringify(n)+". customizeOption: "+JSON.stringify(o.optionItems.every(e=>e.optionID===o.optionItems[0].optionID))),o.optionItems.every(e=>e.optionID===o.optionItems[0].optionID)&&o.optionItems[0].customizeOptionItem===n&&(console.log("handling change"),t({optionItems:[o.optionItems[0]],optionID:o.optionItems[0].optionID}))},options:o.optionItems,getOptionLabel:e=>"string"==typeof e?e:e.customizeOptionItem,sx:1===o.optionItems.length?{display:"none"}:{minWidth:300,mx:"auto",display:"block",pt:2},isOptionEqualToValue:(e,o)=>e.optionItemID===o.optionItemID,renderInput:e=>(0,n.jsx)(a.Z,{...e,label:o.optionName,variant:"filled"}),renderOption:(e,o)=>(0,i.createElement)(u.ZP,{...e,key:o.customizeOptionItemID,sx:{backgroundColor:"background.paper"},secondaryAction:o.price.toLocaleString("us-US",{style:"currency",currency:"USD"})},(0,n.jsx)(p.Z,{primary:o.customizeOptionItem}))},o.optionID)}function T(e){let o=e.customizeFood.customizeOptions.map(e=>({optionID:e.optionID,optionName:e.optionName,isMultiSelect:e.isMultiSelect,isDefaultOption:e.isDefaultOption,price:0,optionItems:[]})),[t,c]=(0,i.useState)(!1),[a,u]=(0,i.useState)(o),[p,d]=(0,i.useState)(0);(0,i.useEffect)(()=>{console.log("setting price: "+a.filter(e=>null!==e.price).reduce((e,o)=>e+o.price,0)),d(a.filter(e=>null!==e.price).reduce((e,o)=>e+o.price,0)),console.log("valid: "+a.every(e=>e.optionItems.length>0))},[a,p]),console.log("customizeOptions: "+JSON.stringify(a)),console.log("current price: "+p);let m=a.filter(e=>null!==e.price).reduce((e,o)=>e+o.price,0);function f(e){console.log("new value: "+JSON.stringify(e)),console.log("custOptions value: "+JSON.stringify(a)),console.log("poop"),console.log("newValue[0]: "+(e.optionItems.length>0)),e.optionItems.length>0?(console.log("incoming price: "+e.optionItems.reduce((e,o)=>e+o.price,0)),e.optionItems.find(e=>"Cheese"===e.customizeOptionItem)&&e.optionItems.length>1&&(e.optionItems=e.optionItems.filter(e=>"Cheese"!==e.customizeOptionItem)),u(a.map(o=>o.optionID===e.optionID?{...o,optionItems:e.optionItems,price:e.optionItems.reduce((e,o)=>e+o.price,0)}:{...o}))):u(a.map(o=>o.optionID===e.optionID?{...o,optionItems:e.optionItems}:{...o}))}m.length>0&&(console.log("filtered options: "+JSON.stringify(m)),console.log("adding prices: "+m.reduce((e,o)=>e+o.price,0)));let g=e=>1===e.optionItems.length||e.isDefaultOption?(console.log("returning default: "+JSON.stringify(e.optionItems[0].customizeOptionItem)),e.optionItems[0].customizeOptionItem):(console.log("NO default found. : "+JSON.stringify(e.optionName)),"");return(0,n.jsx)(r.Z,{sx:{bgcolor:"background.lightest",mx:"auto",px:2},children:(0,n.jsxs)(s.Z,{children:[e.customizeFood.customizeOptions.map(e=>e.isMultiSelect?(0,n.jsx)(M,{handleChange:e=>f(e),customizeOption:e,defaultValue:g(e)},e.optionID):(0,n.jsx)(V,{handleChange:e=>f(e),customizeOption:e,defaultValue:g(e)},e.optionID)),a.every(e=>e.optionItems.length>0)?(0,n.jsxs)(l.Z,{onClick:()=>void(console.log("custOptions final value: "+JSON.stringify(a)),console.log("all optionItems selected: "+JSON.stringify(a.every(e=>e.optionItems.length>0))),e.addCustomItem({...e.customizeFood,customizeOptions:a}),e.collapseCustomizeOnAdd()),variant:"contained",sx:{width:250,mx:"auto",display:"block",my:2},children:["Add To Cart - ",p.toLocaleString("us-US",{style:"currency",currency:"USD"})]}):(0,n.jsx)(l.Z,{disabled:!0,variant:"contained",sx:{width:250,mx:"auto",display:"block",my:2},children:"Add To Cart"})]})})}var A=t(8462),H=t(8619),B=t(8885),$=t(7922),R=t(7720),U=t(181),W=t(3508),q=t(7357),X=t(7400),G=t(5861);function K(e){let{title:o}=e;return(0,n.jsx)("h1",{className:"header-padding",children:o||"Default title"})}var Q=!0;function Y(e){let[o,t]=(0,i.useState)(e.menu.menuCategoryList.slice()),[s,r]=(0,i.useState)(e.menu.menuCategoryList.map(e=>({isOpen:!1,menuCategoryID:e.menuCategoryID,food:e.foodList.map(e=>({isOpen:!1,foodID:e.foodID}))}))),[c,a]=(0,i.useState)(0),[d,m]=(0,i.useState)(1),[f,g]=(0,i.useState)(0);function h(e,o){console.log("food: "+o),console.log("open: "+JSON.stringify(s.find(e=>(e.menuCategoryID===o.menuCategoryID).food))),console.log("selected: "+JSON.stringify(d)),m(o.foodID),r(s.map(e=>({...e,food:e.food.map(e=>e.foodID===o.foodID?{...e,isOpen:e.isOpen=!e.isOpen}:{...e,isOpen:!1})})))}function I(e){let{type:o}=e;switch(o){case 1:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83C\uDF55"});case 2:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83C\uDF5D"});case 3:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83E\uDD57"});case 4:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83E\uDD63"});case 5:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83C\uDF5F"});case 6:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83E\uDD64"});case 7:return(0,n.jsx)(G.Z,{fontSize:"25px",children:"\uD83C\uDF70"})}return(0,n.jsx)(q.Z,{children:o})}return console.log("buttonFocus: "+JSON.stringify(f)),(0,n.jsxs)(X.Z,{container:!0,rowSpacing:1,columnSpacing:2,children:[(0,n.jsx)(X.Z,{xs:12,textAlign:"center",children:(0,n.jsx)(K,{title:"Menu"})}),(0,n.jsx)(X.Z,{xs:10,xsOffset:1,children:(0,n.jsx)(A.Z,{component:"nav",children:o.map((t,i)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(H.Z,{onClick:e=>{var o;console.log("food: "+(o=t.menuCategoryID)),console.log("open: "+JSON.stringify(s)),console.log("selected: "+JSON.stringify(c)),a(o),r(s.map(e=>e.menuCategoryID===o?{...e,isOpen:e.isOpen=!e.isOpen}:{...e,isOpen:!1})),g(t.menuCategoryID)},children:[(0,n.jsx)(B.Z,{children:(0,n.jsx)(I,{type:t.menuCategoryID})}),(0,n.jsx)(p.Z,{primary:t.foodType}),s.find(e=>e.menuCategoryID==t.menuCategoryID).isOpen?(0,n.jsx)(U.Z,{}):(0,n.jsx)(W.Z,{})]}),i!==o.length-1&&(0,n.jsx)(R.Z,{variant:"middle",component:"li"}),(0,n.jsx)($.Z,{in:s.find(e=>e.menuCategoryID==t.menuCategoryID).isOpen,timeout:"auto",unmountOnExit:!0,children:(0,n.jsx)(A.Z,{component:"div",disablePadding:!0,children:t.foodList.map(o=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(u.ZP,{sx:{width:"95%",mx:"auto"},children:[(0,n.jsx)(p.Z,{primary:o.foodName}),s.find(e=>e.menuCategoryID===o.menuCategoryID).food.find(e=>e.foodID==o.foodID).isOpen?(0,n.jsx)(l.Z,{onClick:e=>{h(e,o)},variant:"contained",children:"Cancel"}):(0,n.jsx)(l.Z,{onClick:e=>{h(e,o)},variant:"contained",children:"Add"})]}),(0,n.jsx)($.Z,{in:s.find(e=>e.menuCategoryID===o.menuCategoryID).food.find(e=>e.foodID==o.foodID).isOpen,timeout:"auto",unmountOnExit:!0,children:(0,n.jsx)(A.Z,{component:"div",disablePadding:!0,children:(0,n.jsx)(u.ZP,{children:(0,n.jsx)(T,{customizeFood:o,addCustomItem:o=>e.addCustomItem(o),collapseCustomizeOnAdd:()=>void r(s.map(e=>({...e,food:e.food.map(e=>({...e,isOpen:e.isOpen=!1}))})))})})})})]},o.foodID))})})]},t.menuCategoryID))})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9119)}),_N_E=e.O()}]);