(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(38),i=n.n(a),s=n(26),o=n(11),l=n(49),u=n(18),d=n(50),b=n.n(d),j=n(40),p=n(57),O=n(12),m=n.n(O),h=n(17),f={FETCH_COLLECTION_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTION_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTION_FAILURE:"FETCH_COLLECTION_FAILURE"},x=n(7),g=n(33),v=n(36),E=(n(96),n(68),function(){var e=Object(g.a)(m.a.mark((function e(t,n){var r,c,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=C.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(x.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user ",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());v.a.initializeApp({apiKey:"AIzaSyCPP9tih-uUjOpJPagDAHO_duSLZF9uplg",authDomain:"crown-db-b66a0.firebaseapp.com",projectId:"crown-db-b66a0",storageBucket:"crown-db-b66a0.appspot.com",messagingSenderId:"325507463745",appId:"1:325507463745:web:0b5bef2ca4cc47e66e64c0",measurementId:"G-FZRB1N0ZZ1"});var y=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}}));return console.log(t),t.reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},I=v.a.auth(),C=v.a.firestore(),N=new v.a.auth.GoogleAuthProvider;N.setCustomParameters({prompt:"select_account"});v.a;var _=function(e){return{type:f.FETCH_COLLECTION_SUCCESS,payload:e}},w=m.a.mark(k),S=m.a.mark(T);function k(){var e,t,n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,console.log("I'm fired");case 2:return r.prev=2,e=C.collection("collections"),r.next=6,e.get();case 6:return t=r.sent,r.next=9,Object(h.b)(y,t);case 9:return n=r.sent,r.next=12,Object(h.c)(_(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(2),r.next=18,Object(h.c)((c=r.t0.message,{type:f.FETCH_COLLECTION_FAILURE,payload:c}));case 18:case"end":return r.stop()}var c}),w,null,[[2,14]])}function T(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(f.FETCH_COLLECTION_START,k);case 2:case"end":return e.stop()}}),S)}var L=n(51),G=n.n(L),A={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEMS_FROM_CART:"CLEAR_ITEMS_FROM_CART"},U=n(56),R=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(U.a)(e),[Object(x.a)(Object(x.a)({},t),{},{quantity:1})])},F=function(e,t){var n=e.find((function(e){return e.id===t.id}));return 1===t.quantity?M(e,t):(n&&(e=e.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{quantity:e.quantity-1}):e}))),e)},M=function(e,t){return e.filter((function(e){return e.id!==t.id}))},H={hidden:!0,cartItems:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.TOGGLE_CART_HIDDEN:return Object(x.a)(Object(x.a)({},e),{},{hidden:!e.hidden});case A.ADD_ITEM:return Object(x.a)(Object(x.a)({},e),{},{cartItems:R(e.cartItems,t.payload)});case A.REMOVE_ITEM:return Object(x.a)(Object(x.a)({},e),{},{cartItems:F(e.cartItems,t.payload)});case A.CLEAR_ITEMS_FROM_CART:return Object(x.a)(Object(x.a)({},e),{},{cartItems:M(e.cartItems,t.payload)});default:return e}},D={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",GOOGLE_SIGN_IN_SUCCESS:"GOOGLE_SIGN_IN_SUCCESS",GOOGLE_SIGN_IN_FAILIURE:"GOOGLE_SIGN_IN_FAILIURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",EMAIL_SIGN_IN_SUCCESS:"EMAIL_SIGN_IN_SUCCESS",EMAIL_SIGN_IN_FAILIURE:"EMAIL_SIGN_IN_FAILIURE"},q={currentUcurrentUserser:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.GOOGLE_SIGN_IN_SUCCESS:case D.EMAIL_SIGN_IN_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{currentUser:t.payload});case D.GOOGLE_SIGN_IN_FAILIURE:case D.EMAIL_SIGN_IN_FAILIURE:return Object(x.a)(Object(x.a)({},e),{},{error:t.payload});default:return e}},W={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B={collections:null,isFetching:!1,errorMessage:void 0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.FETCH_COLLECTION_START:return Object(x.a)(Object(x.a)({},e),{},{isFetching:!0});case f.FETCH_COLLECTION_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{isFetching:!1,collections:t.payload});case f.FETCH_COLLECTION_FAILURE:return Object(x.a)(Object(x.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Z={key:"root",storage:G.a,whitelist:["cart"]},X=Object(u.b)({user:z,cart:P,directory:V,shop:J}),$=Object(j.a)(Z,X),K=function(e){return{type:D.GOOGLE_SIGN_IN_SUCCESS,payload:e}},Y=m.a.mark(te),Q=m.a.mark(ne),ee=m.a.mark(re);function te(){var e,t,n,r;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,I.signInWithPopup(N);case 3:return e=c.sent,t=e.user,c.next=7,Object(h.b)(E,t);case 7:return n=c.sent,c.next=10,n.get();case 10:return r=c.sent,c.next=13,Object(h.c)(K(Object(x.a)({id:r.id},r.data())));case 13:c.next=19;break;case 15:return c.prev=15,c.t0=c.catch(0),c.next=19,Object(h.c)((a=c.t0,{type:D.GOOGLE_SIGN_IN_FAILIURE,payload:a}));case 19:case"end":return c.stop()}var a}),Y,null,[[0,15]])}function ne(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(D.GOOGLE_SIGN_IN_START,te);case 2:case"end":return e.stop()}}),Q)}function re(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(ne)]);case 2:case"end":return e.stop()}}),ee)}var ce=m.a.mark(ae);function ae(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(T),Object(h.b)(re)]);case 2:case"end":return e.stop()}}),ce)}var ie=Object(p.a)(),se=[ie,b.a],oe=Object(u.d)($,u.a.apply(void 0,se));ie.run(ae);var le,ue,de,be,je,pe,Oe,me,he,fe=Object(j.b)(oe),xe=(n(72),n(27)),ge=n(28),ve=n(30),Ee=n(29),ye=n(13),Ie=(n(73),n(25)),Ce=n(10),Ne=Object(Ce.a)([function(e){return e.directory}],(function(e){return e.sections})),_e=(n(74),n(2)),we=Object(ye.g)((function(e){var t=e.title,n=e.imageUrl,r=(e.id,e.size),c=e.history,a=e.linkUrl,i=e.match;return Object(_e.jsxs)("div",{className:"".concat(r||""," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(_e.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(_e.jsxs)("div",{className:"content",children:[Object(_e.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(_e.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),Se=(n(79),["id"]),ke=Object(Ce.b)({sections:Ne}),Te=Object(o.b)(ke)((function(e){var t=e.sections;return Object(_e.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(Ie.a)(e,Se);return Object(_e.jsx)(we,Object(x.a)({},n),t)}))})})),Le=n(19),Ge=n(20),Ae=Ge.b.div(le||(le=Object(Le.a)(["display: flex;\nflex-direction: column;\nalign-items: center;\npadding: 20px 80px;"]))),Ue=function(){return Object(_e.jsx)(Ae,{children:Object(_e.jsx)(Te,{})})},Re=(n(81),function(e){return e.shop}),Fe=Object(Ce.a)([Re],(function(e){return e.collections})),Me=(Object(Ce.a)([Re],(function(e){return e.items})),Object(Ce.a)([Fe],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]}))),He=Object(Ce.a)([Re],(function(e){return e.isFetching})),Pe=Object(Ce.a)([Re],(function(e){return!!e.collections})),De=Ge.b.div(ue||(ue=Object(Le.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),qe=Ge.b.div(de||(de=Object(Le.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),ze=["isLoading"],We=function(e){return function(t){var n=t.isLoading,r=Object(Ie.a)(t,ze);return n?Object(_e.jsx)(De,{children:Object(_e.jsx)(qe,{})}):Object(_e.jsx)(e,Object(x.a)({},r))}},Ve=Object(Ge.a)(be||(be=Object(Le.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n        }\n"]))),Be=Object(Ge.a)(je||(je=Object(Le.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    &:hover {\n        background-color: #357ae8;\n        border: none;\n        }\n"]))),Je=Object(Ge.a)(pe||(pe=Object(Le.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n    \n    &:hover {\n    background-color: #357ae8;\n    border: none;\n    }\n"]))),Ze=Ge.b.button(Oe||(Oe=Object(Le.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    background-color: black;\n    color: white;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"])),(function(e){return e.isGoogleSignIn?Je:e.inverted?Be:Ve})),Xe=["children"],$e=function(e){var t=e.children,n=Object(Ie.a)(e,Xe);return Object(_e.jsx)(Ze,Object(x.a)(Object(x.a)({},n),{},{children:t}))},Ke=(n(82),function(){return{type:A.TOGGLE_CART_HIDDEN}}),Ye=function(e){return{type:A.ADD_ITEM,payload:e}},Qe=Object(o.b)(null,(function(e){return{addItem:function(t){return e(Ye(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object(_e.jsxs)("div",{className:"collection-item",children:[Object(_e.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(_e.jsxs)("div",{className:"collection-footer",children:[Object(_e.jsx)("span",{className:"name",children:r}),Object(_e.jsxs)("span",{className:"price",children:["$",c]})]}),Object(_e.jsx)($e,{inverted:!0,onClick:function(){return n(t)},children:" Add to cart"})]})})),et=(n(83),Object(ye.g)((function(e){var t=e.title,n=e.items,r=e.routeName,c=e.history,a=e.match;return Object(_e.jsxs)("div",{className:"collection-preview",children:[Object(_e.jsxs)("h1",{className:"title",children:[" ",t.toUpperCase()," "]}),Object(_e.jsx)("div",{className:"preview",onClick:function(){return c.push("".concat(a.url,"/").concat(r))},children:n.filter((function(e,t){return t<4})).map((function(e){return Object(_e.jsx)(Qe,{item:e},e.id)}))})]})}))),tt=(n(84),["id"]),nt=Object(Ce.b)({collections:Me}),rt=Object(o.b)(nt)((function(e){var t=e.collections;return Object(_e.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(Ie.a)(e,tt);return Object(_e.jsx)(et,Object(x.a)({},n),t)}))})})),ct=Object(Ce.b)({isLoading:He}),at=Object(u.c)(Object(o.b)(ct),We)(rt),it=(n(85),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(Ce.a)([Fe],(function(e){return e?e[n]:[]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object(_e.jsxs)("div",{className:"collection-page",children:[Object(_e.jsx)("h2",{className:"title",children:n}),Object(_e.jsx)("div",{className:"items",children:r.map((function(e){return Object(_e.jsx)(Qe,{item:e},e.id)}))})]})}))),st=Object(Ce.b)({isLoading:function(e){return!Pe(e)}}),ot=Object(u.c)(Object(o.b)(st),We)(it),lt=function(e){Object(ve.a)(n,e);var t=Object(Ee.a)(n);function n(){return Object(xe.a)(this,n),t.apply(this,arguments)}return Object(ge.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionStart)()}},{key:"render",value:function(){var e=this.props.match;return Object(_e.jsxs)("div",{className:"shop-page",children:[Object(_e.jsx)(ye.b,{exact:!0,path:"".concat(e.path),component:at}),Object(_e.jsx)(ye.b,{path:"".concat(e.path,"/:collectionId"),component:ot})]})}}]),n}(c.a.Component),ut=Object(o.b)(null,(function(e){return{fetchCollectionStart:function(){return e({type:f.FETCH_COLLECTION_START})}}}))(lt),dt=(n(86),n(35)),bt=(n(87),["handleChange","label"]),jt=function(e){var t=e.handleChange,n=e.label,r=Object(Ie.a)(e,bt);return Object(_e.jsxs)("div",{className:"group",children:[Object(_e.jsx)("input",Object(x.a)({className:"form-input",onChange:t},r)),n?Object(_e.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},pt=(n(88),function(e){Object(ve.a)(n,e);var t=Object(Ee.a)(n);function n(e){var r;return Object(xe.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(g.a)(m.a.mark((function e(t){var n,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,a=n.password,e.prev=2,e.next=5,I.signInWithEmailAndPassword(c,a);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(dt.a)({},c,n))},r.state={email:"",password:""},r}return Object(ge.a)(n,[{key:"render",value:function(){var e=this.props.googleSignInStart;return Object(_e.jsxs)("div",{className:"sign-in",children:[Object(_e.jsx)("h2",{children:"I already have an account"}),Object(_e.jsx)("span",{children:"Sign in with your email and password"}),Object(_e.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_e.jsx)(jt,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(_e.jsx)(jt,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,label:"password",required:!0}),Object(_e.jsxs)("div",{className:"buttons",children:[Object(_e.jsx)($e,{type:"submit",children:" Sign in "}),Object(_e.jsx)($e,{type:"button",onClick:e,isGoogleSignIn:!0,children:" Sign in with Google "})]})]})]})}}]),n}(c.a.Component)),Ot=Object(o.b)(null,(function(e){return{googleSignInStart:function(){return e({type:D.GOOGLE_SIGN_IN_START})}}}))(pt),mt=(n(89),function(e){Object(ve.a)(n,e);var t=Object(Ee.a)(n);function n(){var e;return Object(xe.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(g.a)(m.a.mark((function t(n){var r,c,a,i,s,o,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("Passwords does not match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,I.createUserWithEmailAndPassword(a,i);case 8:return o=t.sent,l=o.user,t.next=12,E(l,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(dt.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(ge.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object(_e.jsx)("div",{className:"sign-up",children:Object(_e.jsxs)("h2",{className:"title",children:[Object(_e.jsx)("span",{children:"Sign up with your email and password"}),Object(_e.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(_e.jsx)(jt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display name",required:!0}),Object(_e.jsx)(jt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(_e.jsx)(jt,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(_e.jsx)(jt,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm password",required:!0}),Object(_e.jsx)($e,{type:"submit",children:"SIGN UP"})]})]})})}}]),n}(c.a.Component)),ht=function(){return Object(_e.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(_e.jsx)(Ot,{}),Object(_e.jsx)(mt,{})]})},ft=["title","titleId"];function xt(){return(xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function gt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function vt(e,t){var n=e.title,c=e.titleId,a=gt(e,ft);return r.createElement("svg",xt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,me||(me=r.createElement("desc",null,"Created with Sketch.")),he||(he=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Et,yt,It,Ct,Nt,_t,wt,St,kt,Tt,Lt,Gt,At,Ut,Rt,Ft=r.forwardRef(vt),Mt=(n.p,["title","titleId"]);function Ht(){return(Ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Pt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Dt(e,t){var n=e.title,c=e.titleId,a=Pt(e,Mt);return r.createElement("svg",Ht({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Et||(Et=r.createElement("g",null)),yt||(yt=r.createElement("g",null)),It||(It=r.createElement("g",null)),Ct||(Ct=r.createElement("g",null)),Nt||(Nt=r.createElement("g",null)),_t||(_t=r.createElement("g",null)),wt||(wt=r.createElement("g",null)),St||(St=r.createElement("g",null)),kt||(kt=r.createElement("g",null)),Tt||(Tt=r.createElement("g",null)),Lt||(Lt=r.createElement("g",null)),Gt||(Gt=r.createElement("g",null)),At||(At=r.createElement("g",null)),Ut||(Ut=r.createElement("g",null)),Rt||(Rt=r.createElement("g",null)))}var qt,zt,Wt,Vt,Bt=r.forwardRef(Dt),Jt=(n.p,function(e){return e.cart}),Zt=Object(Ce.a)([Jt],(function(e){return e.cartItems})),Xt=Object(Ce.a)([Jt],(function(e){return e.hidden})),$t=Object(Ce.a)([Zt],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Kt=Object(Ce.a)([Zt],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Yt=(n(90),Object(o.b)((function(e){return{itemCount:$t(e)}}),(function(e){return{toggleCartHidden:function(){return e(Ke())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(_e.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(_e.jsx)(Bt,{className:"shopping-icon"}),Object(_e.jsx)("span",{className:"item-count",children:n})]})}))),Qt=(n(91),n(92),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(_e.jsxs)("div",{className:"cart-item",children:[Object(_e.jsx)("img",{src:n,alt:"item"}),Object(_e.jsxs)("div",{className:"item-details",children:[Object(_e.jsx)("span",{className:"name",children:c}),Object(_e.jsxs)("span",{className:"price",children:[a," x $",r," "]})]})]})}),en=Object(Ce.b)({cartItems:Zt}),tn=Object(ye.g)(Object(o.b)(en)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(_e.jsxs)("div",{className:"cart-dropdown",children:[Object(_e.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(_e.jsx)(Qt,{item:e},e.id)})):Object(_e.jsx)("span",{children:"Empty"})}),Object(_e.jsx)($e,{onClick:function(){n.push("/checkout"),r(Ke())},children:" GO TO CHECKOUT"})]})}))),nn=Object(Ce.a)([function(e){return e.user}],(function(e){return e.currentUser})),rn=Ge.b.div(qt||(qt=Object(Le.a)(["\nheight: 70px;\nwidth: 100%;\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 25px;\n"]))),cn=Object(Ge.b)(s.b)(zt||(zt=Object(Le.a)(["\nheight: 100%;\nwidth: 70px;\npadding: 25px;\n"]))),an=Ge.b.div(Wt||(Wt=Object(Le.a)(["\nwidth: 50%;\nheight: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: flex-end;\n"]))),sn=Object(Ge.b)(s.b)(Vt||(Vt=Object(Le.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]))),on=Object(Ce.b)({currentUser:nn,hidden:Xt}),ln=Object(o.b)(on)((function(e){var t=e.currentUser,n=e.hidden;return Object(_e.jsxs)(rn,{children:[Object(_e.jsx)(cn,{to:"/",children:Object(_e.jsx)(Ft,{className:"logo"})}),Object(_e.jsxs)(an,{children:[Object(_e.jsx)(sn,{to:"/shop",children:"SHOP"}),Object(_e.jsx)(sn,{to:"/shop",children:"CONTACT"}),t?Object(_e.jsx)(sn,{as:"div",onClick:function(){return I.signOut()},children:" SIGN OUT "}):Object(_e.jsx)(sn,{to:"/signin",children:" SIGN IN "}),Object(_e.jsx)(Yt,{})]}),n?null:Object(_e.jsx)(tn,{})]})})),un=(n(93),n(94),Object(o.b)(null,(function(e){return{removeItem:function(t){return e(function(e){return{type:A.REMOVE_ITEM,payload:e}}(t))},addItem:function(t){return e(Ye(t))},clearItemsFromCart:function(t){return e(function(e){return{type:A.CLEAR_ITEMS_FROM_CART,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.removeItem,r=e.addItem,c=e.clearItemsFromCart,a=t.name,i=t.quantity,s=t.imageUrl,o=t.price;return Object(_e.jsxs)("div",{className:"checkout-item",children:[Object(_e.jsx)("div",{className:"image-container",children:Object(_e.jsx)("img",{src:s,alt:"cart-item"})}),Object(_e.jsxs)("span",{className:"name",children:[" ",a," "]}),Object(_e.jsxs)("span",{className:"quantity",children:[Object(_e.jsx)("div",{className:"arrow",onClick:function(){return n(t)},children:" \u2770"}),Object(_e.jsxs)("span",{className:"value",children:[" ",i," "]}),Object(_e.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:" \u2771"})]}),Object(_e.jsxs)("span",{className:"price",children:[" $",o," "]}),Object(_e.jsx)("div",{className:"remove-button",onClick:function(){return c(t)},children:"\u2715"})]})}))),dn=n(55),bn=n.n(dn),jn=function(e){var t=e.price,n=100*t;return Object(_e.jsx)(bn.a,{label:"Pay now",name:"CRWM Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),panelLabel:"Pay ",token:function(e){console.log(e),alert("Payment succesful")},stripeKey:"pk_test_51JuJbMGCROoPUrLE3YXxUqy7p2mVzMB4yeRHuomrr1GHRDWXWBJ8e5dWD0TXYY1yNtlZrAwbEwmoFlDFC78VZ3oS00KhD6qk6J",amount:n})},pn=Object(Ce.b)({cartItems:Zt,total:Kt}),On=Object(o.b)(pn)((function(e){var t=e.cartItems,n=e.total;return Object(_e.jsxs)("div",{className:"checkout-page",children:[Object(_e.jsxs)("div",{className:"checkout-header",children:[Object(_e.jsx)("div",{className:"header-block",children:Object(_e.jsx)("span",{children:"Product"})}),Object(_e.jsx)("div",{className:"header-block",children:Object(_e.jsx)("span",{children:"Description"})}),Object(_e.jsx)("div",{className:"header-block",children:Object(_e.jsx)("span",{children:"Quantity"})}),Object(_e.jsx)("div",{className:"header-block",children:Object(_e.jsx)("span",{children:"Price"})}),Object(_e.jsx)("div",{className:"header-block",children:Object(_e.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(_e.jsx)(un,{cartItem:e},e.id)})),Object(_e.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(_e.jsxs)("div",{className:"test-warning",children:["test card info: 4242 4242 4242 4242",Object(_e.jsx)("br",{}),"Exp: 10/22 Cvc:123"]}),Object(_e.jsx)(jn,{price:n})]})})),mn=function(e){Object(ve.a)(n,e);var t=Object(Ee.a)(n);function n(){var e;Object(xe.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(ge.a)(n,[{key:"componentDidMount",value:function(){this.props.setCurrentUser}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(_e.jsxs)("div",{children:[Object(_e.jsx)(ln,{}),Object(_e.jsxs)(ye.d,{children:[Object(_e.jsx)(ye.b,{exact:!0,path:"/",component:Ue}),Object(_e.jsx)(ye.b,{path:"/shop",component:ut}),Object(_e.jsx)(ye.b,{exact:!0,path:"/checkout",component:On}),Object(_e.jsx)(ye.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(_e.jsx)(ye.a,{to:"/"}):Object(_e.jsx)(ht,{})}})]})]})}}]),n}(c.a.Component),hn=Object(Ce.b)({currentUser:nn}),fn=Object(o.b)(hn,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:D.SET_CURRENT_USER,payload:e}}(t))}}}))(mn);i.a.render(Object(_e.jsx)(o.a,{store:oe,children:Object(_e.jsx)(s.a,{children:Object(_e.jsx)(l.a,{persistor:fe,children:Object(_e.jsx)(fn,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.3fae6f68.chunk.js.map