(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={block:"Filter_block__UgYGT",title:"Filter_title__254WA",input:"Filter_input__YMQnt"}},17:function(t,e,n){t.exports={title:"Contacts_title__2UOCu",titleContact:"Contacts_titleContact__2vl52",block:"Contacts_block__329n4"}},21:function(t,e,n){t.exports={btn:"ContactListItem_btn__3JNqZ",textContent:"ContactListItem_textContent__31pzF"}},30:function(t,e,n){t.exports={ul:"ContactList_ul__3yX0D"}},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),o=n(11),i=n(12),l=n(14),u=n(13),b=n(3),j=n(8),f=n.n(j),d=n(1),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.handleSubmit(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{className:f.a.form,onSubmit:this.onSubmit,children:[Object(d.jsx)("span",{className:f.a.title,children:"Name"}),Object(d.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(d.jsx)("span",{className:f.a.title,children:"Number"}),Object(d.jsx)("input",{name:"number",type:"tel",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(d.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),h=n(6),O=n(2),p=Object(O.b)("contacts/addNewContactsRequest"),x=Object(O.b)("contacts/addNewContactsSuccess"),C=Object(O.b)("contacts/addNewContactsError"),v=Object(O.b)("contacts/getAllContactsRequest"),_=Object(O.b)("contacts/getAllContactsSuccess"),g=Object(O.b)("contacts/getAllContactsError"),N=Object(O.b)("contacts/filterChange"),k=Object(O.b)("contacts/removeContactsRequest"),w=Object(O.b)("contacts/removeContactsSuccess"),y=Object(O.b)("contacts/removeContactsError"),A=function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},S=function(t){var e=t.contacts.items,n=t.contacts.filter;console.log(n);var a=n.toLowerCase().trim();return{items:e.filter((function(t){return t.name.toLowerCase().includes(a)})),filter:t.filter}},F=function(t){return t.contacts.filter},D=n(15),L=n.n(D),q={handleChange:N},z=Object(h.b)((function(t){return{filter:F(t)}}),q)((function(t){var e=t.handleChange,n=t.filter;return Object(d.jsxs)("div",{className:L.a.block,children:[Object(d.jsx)("label",{className:L.a.title,htmlFor:"filter",children:"Find contacts by name:"}),Object(d.jsx)("input",{id:"filter",name:"filter",type:"text",className:L.a.input,onChange:e,value:n})]})})),J=n(7),R=n.n(J),E=n(16),Z=n(9),I=n.n(Z);I.a.defaults.baseURL="http://localhost:3001/";var M,T,U=n(21),X=n.n(U),B=function(t){var e=t.item,n=t.handleDelete,a=e.name,c=e.number;return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:X.a.textContent,children:[Object(d.jsxs)("span",{children:[a,": ",c]}),Object(d.jsx)("button",{className:X.a.btn,onClick:n,children:"X"})]})})},Y=n(30),G=n.n(Y),P={handleDelete:function(t){return function(){var e=Object(E.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,I.a.delete("contacts/".concat(t));case 4:n(w(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(y(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},Q=Object(h.b)((function(t){return{items:A(t)}}),P)((function(t){var e=t.items,n=t.handleDelete;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:G.a.ul,children:e.map((function(t){return Object(d.jsx)(B,{item:t,handleDelete:function(){return n(t.id)}},t.id)}))})})})),W=n(17),$=n.n(W),H=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={items:[],filter:""},t.handleSubmit=function(e){if(e)if(t.state.items.some((function(t){return t.name===e.name})))alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442: "+e.name+" \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ");else{var n={name:e.name,number:e.number};t.props.addNewContacts(n)}else alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.items,n=t.filter;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:$.a.title,children:"Phonebook"}),Object(d.jsx)(m,{handleSubmit:this.handleSubmit}),Object(d.jsx)("h2",{className:$.a.titleContact,children:"Contacts"}),Object(d.jsxs)("div",{className:$.a.block,children:[Object(d.jsx)(z,{filter:n,handleChange:this.props.handleChange}),Object(d.jsx)(Q,{items:e,handleDelete:this.props.handleDelete})]})]})}}]),n}(a.Component),K={addNewContacts:function(t){return function(){var e=Object(E.a)(R.a.mark((function e(n,a){var c,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(p()),e.prev=1,e.next=4,I.a.post("contacts",t);case 4:c=e.sent,r=c.data,n(x(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(C(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()},getAllContacts:function(){return function(){var t=Object(E.a)(R.a.mark((function t(e){var n,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(v()),t.prev=1,t.next=4,I.a.get("contacts");case 4:n=t.sent,a=n.data,e(_(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(g(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},V=Object(h.b)((function(t){return{items:S(t),filter:t.filter}}),K)(H),tt=function(){return Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(V,{})})},et=n(31),nt=n(5),at=Object(O.c)(!1,(M={},Object(b.a)(M,v,(function(){return!0})),Object(b.a)(M,_,(function(){return!1})),Object(b.a)(M,g,(function(){return!1})),Object(b.a)(M,p,(function(){return!0})),Object(b.a)(M,x,(function(){return!1})),Object(b.a)(M,C,(function(){return!1})),Object(b.a)(M,k,(function(){return!0})),Object(b.a)(M,w,(function(){return!1})),Object(b.a)(M,y,(function(){return!1})),M)),ct=Object(O.c)([],(T={},Object(b.a)(T,_,(function(t,e){return e.payload})),Object(b.a)(T,x,(function(t,e){return[e.payload].concat(Object(et.a)(t))})),Object(b.a)(T,w,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),T)),rt=Object(O.c)("",Object(b.a)({},N,(function(t,e){return e.payload}))),st=Object(nt.b)({items:ct,filter:rt,loading:at}),ot=Object(O.a)({reducer:{contacts:st}});n(60);s.a.render(Object(d.jsx)(h.a,{store:ot,children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(tt,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__lTxOT",title:"ContactForm_title__25Rn5",btn:"ContactForm_btn__XJaza"}}},[[61,1,2]]]);
//# sourceMappingURL=main.7af041e3.chunk.js.map