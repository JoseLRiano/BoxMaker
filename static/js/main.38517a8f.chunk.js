(this.webpackJsonpcolorboxmaker=this.webpackJsonpcolorboxmaker||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=(n(16),n(10)),l=n(1),h=n(2),u=n(4),s=n(3),m=n(6),d=n(5),b=n(9),v=n.n(b),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=Object(m.a)(Object(m.a)({},a.state),{},{id:v()()});a.props.createBox(t),a.setState({height:"",width:"",color:""})},a.state={height:"",width:"",color:""},a}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"height"},"Height "),o.a.createElement("input",{type:"text",name:"height",id:"height",value:this.state.height,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"width"},"Width "),o.a.createElement("input",{type:"text",name:"width",id:"width",value:this.state.width,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"color"},"Color "),o.a.createElement("input",{type:"text",name:"color",id:"color",value:this.state.color,onChange:this.handleChange})),o.a.createElement("button",null,"Add New Box"))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{height:"".concat(this.props.height,"em"),width:"".concat(this.props.width,"em"),backgroundColor:this.props.color}}),o.a.createElement("button",{onClick:this.props.removeBox},"X"))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).createBox=function(e){a.setState({boxes:[].concat(Object(c.a)(a.state.boxes),[e])})},a.state={boxes:[]},a}return Object(h.a)(n,[{key:"removeBox",value:function(e){this.setState({boxes:this.state.boxes.filter((function(t){return t.id!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.boxes.map((function(t){return o.a.createElement(f,{key:t.id,id:t.id,width:t.width,height:t.height,color:t.color,removeBox:function(){return e.removeBox(t.id)}})}));return o.a.createElement("div",null,o.a.createElement(p,{createBox:this.createBox}),t)}}]),n}(a.Component);n(19);var E=function(){return o.a.createElement("div",null,o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.38517a8f.chunk.js.map