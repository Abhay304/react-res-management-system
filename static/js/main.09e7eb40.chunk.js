(this["webpackJsonpres-management"]=this["webpackJsonpres-management"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(15),r=n.n(s),o=(n(31),n(32),n(5)),i=n(10),l=n(26),m=n(12),j={paymentSummary:JSON.parse(localStorage.getItem("paymentJson"))||[]},u="ADD_ITEM",d="DEL_ITEM",p="CLEAR_ITEM",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{paymentSummary:[].concat(Object(m.a)(e.paymentSummary),[t.payload])};case d:return{paymentSummary:e.paymentSummary.filter((function(e){return e.name!==t.payload}))};case p:return{paymentSummary:[]};default:return e}},h={paymentHistory:JSON.parse(localStorage.getItem("historyJson"))||[],totalAmount:JSON.parse(localStorage.getItem("totalAmount"))||[]},y="ADD_PAYMENT",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{paymentHistory:[].concat(Object(m.a)(e.paymentHistory),[t.payload]),totalAmount:e.totalAmount.concat(t.payload.map((function(e){return e.amount})))};default:return e}},x=Object(i.combineReducers)({payDetails:b,historyDetails:O}),g=Object(i.createStore)(x,Object(l.composeWithDevTools)(Object(i.applyMiddleware)())),f=n.p+"static/media/cutlery.10867b82.svg",v=n(18),_=n(3),N=n(4),S=n.p+"static/media/search.bc2178ae.svg",T=n(1);function I(e){var t=Object(a.useState)([]),n=Object(N.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),o=Object(N.a)(r,2),i=o[0],l=o[1];return Object(a.useEffect)((function(){var t=[];e.paymentHistory.forEach((function(e){e.forEach((function(e){(i.length>9&&e.dateTime.split(",")[0]==i||i.length<1)&&t.push(e)}))})),s(t)}),[i]),Object(T.jsxs)("div",{className:"history-table-block",children:[Object(T.jsx)("input",{type:"text",placeholder:"mm/dd/yyy",className:"filter-history-table",value:i,onChange:function(e){return l(e.target.value)}}),Object(T.jsx)("img",{className:"search-logo",src:S}),Object(T.jsx)("table",{className:"payment-history-table",children:Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Name"}),Object(T.jsx)("th",{children:"No of Plate"}),Object(T.jsx)("th",{children:"Amount"}),Object(T.jsx)("th",{children:"Payment Type"}),Object(T.jsx)("th",{children:"Payment Date/Time"})]}),c.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:e.name}),Object(T.jsx)("td",{children:e.plate}),Object(T.jsx)("td",{children:e.amount}),Object(T.jsx)("td",{children:e.paymentType}),Object(T.jsx)("td",{children:e.dateTime})]},t)}))]})})]})}var P=Object(o.b)((function(e){return{paymentHistory:e.historyDetails.paymentHistory}}),null)(c.a.memo(I)),C=n.p+"static/media/noodles.9e5f8f19.svg",k=[{typeof:"Veg",amount:120,name:"Veg Manchurian",slug:""},{typeof:"Veg",amount:140,name:"Panner Manchurian",slug:""},{typeof:"Veg",amount:60,name:"Baby Corn Manchurian",slug:""},{typeof:"nonVeg",amount:60,name:"Chicken Chilly Bone",slug:""},{typeof:"nonVeg",amount:60,name:"Chicken Chilly Boneless",slug:""},{typeof:"nonVeg",amount:60,name:"Chicken Lolipop",slug:""}],w=function(e){return{type:u,info:"Items Added",payload:e}};function A(e){var t=Object(a.useState)([]),n=Object(N.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){s((function(){return k}))}),[e]);var r=function(t,n){var a={amount:t.amount,name:t.name,plate:1};e.addItem(a)};return Object(T.jsx)("div",{className:"app__food__block",children:c.map((function(e,t){return"nonVeg"===e.typeof?Object(T.jsxs)("div",{className:"food__card",onClick:r.bind(null,e),children:[Object(T.jsx)("p",{children:"0"}),Object(T.jsx)("img",{src:C,alt:e.name+"_logo"}),Object(T.jsx)("h3",{children:e.name})]},e.name):null}))})}var V=Object(o.b)(null,(function(e){return{addItem:function(t){return e(w(t))}}}))(c.a.memo(A));function D(e){var t=Object(a.useState)([]),n=Object(N.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){s((function(){return k}))}),[e]);var r=function(t){var n={amount:t.amount,name:t.name,plate:1};e.addItem(n)};return Object(T.jsx)("div",{className:"app__food__block",children:c.map((function(e,t){return"Veg"===e.typeof?Object(T.jsxs)("div",{className:"food__card",onClick:r.bind(null,e),children:[Object(T.jsx)("p",{children:"0"}),Object(T.jsx)("img",{src:C,alt:e.name+"_logo"}),Object(T.jsx)("h3",{children:e.name})]},e.name):null}))})}var E=Object(o.b)(null,(function(e){return{addItem:function(t){return e(w(t))}}}))(c.a.memo(D)),M=n.p+"static/media/lettuce.a53ddc43.svg",J=n.p+"static/media/nonVeg.b6933e07.svg",H=n.p+"static/media/Phone-Pe-logo.3022ba50.png",L=n.p+"static/media/Gpay.9aec8ab1.png",F=n.p+"static/media/cash.a0de5261.svg",B=n.p+"static/media/paytm-logo.c6c0b954.svg";function G(e){var t=e.summary,n=e.toggleModal,s=Object(a.useState)(""),r=Object(N.a)(s,2),o=r[0],i=r[1],l=c.a.useRef();return Object(T.jsx)("div",{className:"modal__wrraper",children:Object(T.jsxs)("div",{className:"modal__inner__wrraper",children:[Object(T.jsx)("span",{className:"close-btn",onClick:n,children:"X"}),Object(T.jsx)("p",{className:"modal__title",children:"Payment Done Using"}),Object(T.jsxs)("div",{className:"modal__payment__block",onChange:function(e){return i(e.target.value)},children:[Object(T.jsxs)("div",{className:"payment__type",children:[Object(T.jsx)("input",{type:"radio",id:"cash",name:"paymentType",value:"Cash"}),Object(T.jsx)("label",{htmlFor:"cash",children:Object(T.jsx)("img",{src:F,alt:"cash-logo"})})]}),Object(T.jsxs)("div",{className:"payment__type",children:[Object(T.jsx)("input",{type:"radio",id:"phonePe",name:"paymentType",value:"Phone Pe"}),Object(T.jsx)("label",{htmlFor:"phonePe",children:Object(T.jsx)("img",{src:H,alt:"phonePe-logo"})})]}),Object(T.jsxs)("div",{className:"payment__type",children:[Object(T.jsx)("input",{type:"radio",id:"googlePay",name:"paymentType",value:"Google Pay"}),Object(T.jsx)("label",{htmlFor:"googlePay",children:Object(T.jsx)("img",{src:L,alt:"Gpay-logo"})})]}),Object(T.jsxs)("div",{className:"payment__type",children:[Object(T.jsx)("input",{type:"radio",id:"Paytm",name:"paymentType",value:"Paytm"}),Object(T.jsx)("label",{htmlFor:"Paytm",children:Object(T.jsx)("img",{src:B,alt:"Paytm-logo"})})]})]}),Object(T.jsx)("div",{className:"errorText",ref:l}),Object(T.jsx)("button",{className:"submit-btn",onClick:function(){if(!o)return l.current.innerText="Kindly Select Payment Type  to Continue",null;l.current.innerText="";var a=(new Date).toLocaleString();t.map((function(e){e.paymentType=o,e.dateTime=a})),console.log(t),e.addpayment(t),e.clearItem(),n()},children:"Submit"})]})})}var R=Object(o.b)(null,(function(e){return{addpayment:function(t){return e({type:y,info:"Items Added",payload:t})},clearItem:function(){return e({type:p,info:"Items Cleared"})}}}))(c.a.memo(G));function $(e){var t=Object(a.useState)([]),n=Object(N.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),o=Object(N.a)(r,2),i=o[0],l=o[1],j=Object(a.useState)(!0),u=Object(N.a)(j,2),d=u[0],p=u[1];Object(a.useEffect)((function(){Boolean(e.paymentSummary.length)?p(!1):p(!0),localStorage.setItem("paymentJson",JSON.stringify(e.paymentSummary));var t,n=e.paymentSummary,a=n.map((function(e){var t=0;for(var a in n)n[a].name===e.name&&t++;return{amount:e.amount*t,name:e.name,plate:e.plate*t}}));return t=Object(m.a)(new Map(a.map((function(e){return[e.name,e]}))).values()),s((function(){return t})),function(){}}),[e]);var b=function(t){e.delItem(t.name)};function h(){l(!i)}return Object(T.jsxs)("div",{className:"app__payment__block",children:[Object(T.jsx)("p",{children:"PAYMENT DETAILS"}),Object(T.jsx)("ul",{className:"payments",children:c.map((function(e,t){return Object(T.jsxs)("li",{children:[Object(T.jsx)("span",{children:e.name}),Object(T.jsxs)("span",{children:["$",e.amount]}),Object(T.jsx)("span",{children:e.plate}),Object(T.jsx)("button",{className:"delete-btn",onClick:b.bind(null,e),children:"x"})]},t)}))}),Object(T.jsx)("p",{children:"Total Amount :"}),Object(T.jsxs)("p",{className:"total-amt",children:["$",c.reduce((function(e,t){return e+t.amount}),0)]}),Object(T.jsx)("button",{className:"pay-btn",onClick:h,disabled:d,children:"SUBMIT"}),i&&Object(T.jsx)(R,{toggleModal:h,summary:c})]})}var U=Object(o.b)((function(e){return{paymentSummary:e.payDetails.paymentSummary}}),(function(e){return{delItem:function(t){return e({type:d,info:"Items removed",payload:t})}}}))(c.a.memo($));function Y(e){localStorage.setItem("historyJson",JSON.stringify(e.paymentHistory)),localStorage.setItem("totalAmount",JSON.stringify(e.totalAmount));var t=Object(a.useState)("nonVeg"),n=Object(N.a)(t,2),c=n[0],s=n[1],r=function(e){var t=e.target.attributes[0].value;s(t)};return Object(T.jsx)("div",{className:"app__wrapper",children:Object(T.jsxs)("div",{className:"app__inner__wrapper",children:[Object(T.jsxs)("div",{className:"app__inner__title",children:[Object(T.jsx)("p",{children:"Menu"}),Object(T.jsxs)("p",{children:["Earned :$",e.totalAmount.reduce((function(e,t){return e+t}),0)]})]}),Object(T.jsxs)("div",{className:"app__menu__wrapper",children:[Object(T.jsxs)("span",{className:"nonVeg"===c?"app__menu__wrapper-active":void 0,children:[Object(T.jsx)("a",{onClick:r,"food-type":"nonVeg",children:"Non-Veg"}),Object(T.jsx)("img",{src:J,alt:"nonVeg-logo"})]}),Object(T.jsxs)("span",{className:"Veg"===c?"app__menu__wrapper-active":void 0,children:[Object(T.jsx)("a",{onClick:r,"food-type":"Veg",children:"Veg"}),Object(T.jsx)("img",{src:M,alt:"veg-Logo"})]})]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("div",{className:"app__food__wrapper",children:["nonVeg"===c&&Object(T.jsx)(V,{}),"Veg"===c&&Object(T.jsx)(E,{}),Object(T.jsx)(U,{})]})]})})}var K=Object(o.b)((function(e){return{totalAmount:e.historyDetails.totalAmount,paymentHistory:e.historyDetails.paymentHistory}}),null)(c.a.memo(Y));function W(){return Object(T.jsxs)(v.a,{children:[Object(T.jsx)("div",{className:"header__wrapper",children:Object(T.jsxs)("div",{className:"header__inner__wrapper",children:[Object(T.jsx)("div",{className:"header__logo",children:Object(T.jsx)("button",{children:Object(T.jsx)("img",{className:"logo",src:f,alt:"res-logo"})})}),Object(T.jsx)("div",{className:"header__nav__block",children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(v.b,{to:"/react-res-management-system/",children:"Home"})}),Object(T.jsx)("li",{children:Object(T.jsx)(v.b,{to:"/react-res-management-system/history",children:"History"})}),Object(T.jsxs)("li",{onClick:function(){window.print()},children:["Print",Object(T.jsx)("i",{className:"fa fa-angle-down","aria-hidden":"true"})]}),Object(T.jsx)("li",{children:"Logout"})]})})]})}),Object(T.jsxs)(_.c,{children:[Object(T.jsx)(_.a,{exact:!0,path:"/",component:K}),Object(T.jsx)(_.a,{exact:!0,path:"/history",component:P})]})]})}var X=c.a.memo(W);var q=function(){return Object(T.jsx)(o.a,{store:g,children:Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(X,{})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(q,{})}),document.getElementById("root")),z()}},[[39,1,2]]]);
//# sourceMappingURL=main.09e7eb40.chunk.js.map