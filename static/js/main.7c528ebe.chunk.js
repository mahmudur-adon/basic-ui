(this["webpackJsonpbasic-ui"]=this["webpackJsonpbasic-ui"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),r=n.n(a),i=(n(12),n(4)),u=n(5),o=n(7),d=n(6),h=(n(13),n(14),n(0)),l=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"sadfuck",src:"https://robohash.org/${props.sadfuck.id}?set=set2&size=180x180"}),Object(h.jsxs)("h2",{children:[" ",e.sadfuck.name," "]}),Object(h.jsx)("p",{children:e.sadfuck.email})]})},f=function(e){return Object(h.jsx)("div",{className:"card-list",children:e.sadfucks.map((function(e){return Object(h.jsx)(l,{sadfuck:e},e.id)}))})},j=(n(16),n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={sadfucks:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({sadfucks:t})}))}},{key:"render",value:function(){var e=this.state,t=e.sadfucks,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Wanted List"}),Object(h.jsx)(j,{placeholder:"search away",handleChange:this.handleChange}),Object(h.jsx)(f,{sadfucks:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.7c528ebe.chunk.js.map