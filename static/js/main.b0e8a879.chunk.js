(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),l=(n(29),n(5)),o=n(16),u=n(17),s=n(18),b=n(22),m=n(19),d=n(9),p=n(23),f=function(e){var t=e.click,n=e.title,a=e.activeTabIndex,c=e.index;return r.a.createElement("button",{className:a===c?"active item":"item",type:"button",onClick:t},n)};var v=function(e){var t=e.tabs,n=e.index;return r.a.createElement("div",{className:"ui segment active tab"},t[n].content)};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this,e))).state={activeTabIndex:0},n.onTabSelected=n.onTabSelected.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onTabSelected",value:function(e){this.setState(function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{activeTabIndex:e})})}},{key:"render",value:function(){var e=this,t=this.props.tabs,n=this.state.activeTabIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui attached tabular menu"},t.map(function(t,a){return r.a.createElement(f,{click:function(){return e.onTabSelected(a)},title:t.title,key:t.title,index:a,activeTabIndex:n})})),r.a.createElement(v,{tabs:t,index:n}))}}]),t}(r.a.Component),h=n(7);var y=function(){return r.a.createElement("div",{className:"links"},r.a.createElement(h.b,{to:"/",className:"ui primary button"},"Home"),r.a.createElement(h.b,{to:"/tabs",className:"ui secondary button"},"Tabs"))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"heading"},"Home page"),r.a.createElement(y,null))},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(y,null),r.a.createElement(O,{tabs:j,currentTabId:"tab-1"}))},T=function(){return r.a.createElement("h1",{className:"heading"},"Tabs Page")},w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{path:"/",exact:!0,component:g}),r.a.createElement(l.a,{path:"/tabs",exact:!0,component:x}))};i.a.render(r.a.createElement(h.a,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b0e8a879.chunk.js.map