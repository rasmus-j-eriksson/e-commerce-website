(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,l=n(1),o=n.n(l),u=n(34),b=n.n(u),d=n(20),p=n(9),m=n(44),h=n(21),j=n(35),g=n(45),O=n.n(g),f=n(46),x=n.n(f),v=n(5),y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEMS_FROM_CART:"CLEAR_ITEMS_FROM_CART"},w=n(51),k=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(w.a)(e),[Object(v.a)(Object(v.a)({},t),{},{quantity:1})])},N=function(e,t){var n=e.find((function(e){return e.id===t.id}));return 1===t.quantity?E(e,t):(n&&(e=e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity-1}):e}))),e)},E=function(e,t){return e.filter((function(e){return e.id!==t.id}))},C={hidden:!0,cartItems:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(v.a)(Object(v.a)({},e),{},{hidden:!e.hidden});case y.ADD_ITEM:return Object(v.a)(Object(v.a)({},e),{},{cartItems:k(e.cartItems,t.payload)});case y.REMOVE_ITEM:return Object(v.a)(Object(v.a)({},e),{},{cartItems:N(e.cartItems,t.payload)});case y.CLEAR_ITEMS_FROM_CART:return Object(v.a)(Object(v.a)({},e),{},{cartItems:E(e.cartItems,t.payload)});default:return e}},I="SET_CURRENT_USER",S={currentUcurrentUserser:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(v.a)(Object(v.a)({},e),{},{currentUser:t.payload});default:return e}},A={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e},R={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}},shopItems:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B={key:"root",storage:x.a,whitelist:["cart"]},D=Object(h.b)({user:T,cart:U,directory:M,shop:P}),_=Object(j.a)(B,D),G=[O.a],W=Object(h.c)(_,h.a.apply(void 0,G)),H=Object(j.b)(W),J=(n(63),n(16)),q=n.n(J),L=n(22),F=n(28),z=n(29),V=n(31),X=n(30),Y=n(8),K=(n(65),n(23)),Z=n(7),Q=Object(Z.a)([function(e){return e.directory}],(function(e){return e.sections})),$=(n(66),n(2)),ee=Object(Y.g)((function(e){var t=e.title,n=e.imageUrl,r=(e.id,e.size),c=e.history,a=e.linkUrl,i=e.match;return Object($.jsxs)("div",{className:"".concat(r||""," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object($.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object($.jsxs)("div",{className:"content",children:[Object($.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object($.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),te=(n(71),["id"]),ne=Object(Z.b)({sections:Q}),re=Object(p.b)(ne)((function(e){var t=e.sections;return Object($.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(K.a)(e,te);return Object($.jsx)(ee,Object(v.a)({},n),t)}))})})),ce=n(17),ae=n(18),ie=ae.b.div(r||(r=Object(ce.a)(["display: flex;\nflex-direction: column;\nalign-items: center;\npadding: 20px 80px;"]))),se=function(){return Object($.jsx)(ie,{children:Object($.jsx)(re,{})})},le=(n(73),function(e){return e.shop}),oe=Object(Z.a)([le],(function(e){return e.collections})),ue=Object(Z.a)([le],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),be=Object(ae.a)(c||(c=Object(ce.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n        }\n"]))),de=Object(ae.a)(a||(a=Object(ce.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    &:hover {\n        background-color: #357ae8;\n        border: none;\n        }\n"]))),pe=Object(ae.a)(i||(i=Object(ce.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n    \n    &:hover {\n    background-color: #357ae8;\n    border: none;\n    }\n"]))),me=ae.b.button(s||(s=Object(ce.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    background-color: black;\n    color: white;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"])),(function(e){return e.isGoogleSignIn?pe:e.inverted?de:be})),he=["children"],je=function(e){var t=e.children,n=Object(K.a)(e,he);return Object($.jsx)(me,Object(v.a)(Object(v.a)({},n),{},{children:t}))},ge=(n(74),function(){return{type:y.TOGGLE_CART_HIDDEN}}),Oe=function(e){return{type:y.ADD_ITEM,payload:e}},fe=Object(p.b)(null,(function(e){return{addItem:function(t){return e(Oe(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object($.jsxs)("div",{className:"collection-item",children:[Object($.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object($.jsxs)("div",{className:"collection-footer",children:[Object($.jsx)("span",{className:"name",children:r}),Object($.jsxs)("span",{className:"price",children:["$",c]})]}),Object($.jsx)(je,{inverted:!0,onClick:function(){return n(t)},children:" Add to cart"})]})})),xe=(n(75),Object(Y.g)((function(e){var t=e.title,n=e.items,r=e.routeName,c=e.history,a=e.match;return Object($.jsxs)("div",{className:"collection-preview",children:[Object($.jsxs)("h1",{className:"title",children:[" ",t.toUpperCase()," "]}),Object($.jsx)("div",{className:"preview",onClick:function(){return c.push("".concat(a.url,"/").concat(r))},children:n.filter((function(e,t){return t<4})).map((function(e){return Object($.jsx)(fe,{item:e},e.id)}))})]})}))),ve=(n(76),["id"]),ye=Object(Z.b)({collections:ue}),we=Object(p.b)(ye)((function(e){var t=e.collections;return Object($.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(K.a)(e,ve);return Object($.jsx)(xe,Object(v.a)({},n),t)}))})})),ke=(n(77),Object(p.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(Z.a)([oe],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object($.jsxs)("div",{className:"collection-page",children:[Object($.jsx)("h2",{className:"title",children:n}),Object($.jsx)("div",{className:"items",children:r.map((function(e){return Object($.jsx)(fe,{item:e},e.id)}))})]})}))),Ne=function(e){var t=e.match;return Object($.jsxs)("div",{className:"shop-page",children:[Object($.jsx)(Y.b,{exact:!0,path:"".concat(t.path),component:we}),Object($.jsx)(Y.b,{path:"".concat(t.path,"/:collectionId"),component:ke})]})},Ee=(n(78),n(27)),Ce=(n(79),["handleChange","label"]),Ue=function(e){var t=e.handleChange,n=e.label,r=Object(K.a)(e,Ce);return Object($.jsxs)("div",{className:"group",children:[Object($.jsx)("input",Object(v.a)({className:"form-input",onChange:t},r)),n?Object($.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},Ie=(n(80),n(32)),Se=(n(90),n(81),function(){var e=Object(L.a)(q.a.mark((function e(t,n){var r,c,a,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Ae.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(v.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user ",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());Ie.a.initializeApp({apiKey:"AIzaSyCPP9tih-uUjOpJPagDAHO_duSLZF9uplg",authDomain:"crown-db-b66a0.firebaseapp.com",projectId:"crown-db-b66a0",storageBucket:"crown-db-b66a0.appspot.com",messagingSenderId:"325507463745",appId:"1:325507463745:web:0b5bef2ca4cc47e66e64c0",measurementId:"G-FZRB1N0ZZ1"});var Te=Ie.a.auth(),Ae=Ie.a.firestore(),Me=new Ie.a.auth.GoogleAuthProvider;Me.setCustomParameters({prompt:"select_account"});var Re,Pe,Be=function(){return Te.signInWithPopup(Me)},De=(Ie.a,function(e){Object(V.a)(n,e);var t=Object(X.a)(n);function n(e){var r;return Object(F.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(L.a)(q.a.mark((function e(t){var n,c,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,a=n.password,e.prev=2,e.next=5,Te.signInWithEmailAndPassword(c,a);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(Ee.a)({},c,n))},r.state={email:"",password:""},r}return Object(z.a)(n,[{key:"render",value:function(){return Object($.jsxs)("div",{className:"sign-in",children:[Object($.jsx)("h2",{children:"I already have an account"}),Object($.jsx)("span",{children:"Sign in with your email and password"}),Object($.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object($.jsx)(Ue,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object($.jsx)(Ue,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,label:"password",required:!0}),Object($.jsxs)("div",{className:"buttons",children:[Object($.jsx)(je,{type:"submit",children:" Sign in "}),Object($.jsx)(je,{type:"button",onClick:Be,isGoogleSignIn:!0,children:" Sign in with Google "})]})]})]})}}]),n}(o.a.Component)),_e=(n(83),function(e){Object(V.a)(n,e);var t=Object(X.a)(n);function n(){var e;return Object(F.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(L.a)(q.a.mark((function t(n){var r,c,a,i,s,l,o;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("Passwords does not match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Te.createUserWithEmailAndPassword(a,i);case 8:return l=t.sent,o=l.user,t.next=12,Se(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(Ee.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(z.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object($.jsx)("div",{className:"sign-up",children:Object($.jsxs)("h2",{className:"title",children:[Object($.jsx)("span",{children:"Sign up with your email and password"}),Object($.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object($.jsx)(Ue,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display name",required:!0}),Object($.jsx)(Ue,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object($.jsx)(Ue,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object($.jsx)(Ue,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm password",required:!0}),Object($.jsx)(je,{type:"submit",children:"SIGN UP"})]})]})})}}]),n}(o.a.Component)),Ge=function(){return Object($.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object($.jsx)(De,{}),Object($.jsx)(_e,{})]})},We=["title","titleId"];function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function qe(e,t){var n=e.title,r=e.titleId,c=Je(e,We);return l.createElement("svg",He({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?l.createElement("title",{id:r},"Group"):n?l.createElement("title",{id:r},n):null,Re||(Re=l.createElement("desc",null,"Created with Sketch.")),Pe||(Pe=l.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},l.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},l.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),l.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Le,Fe,ze,Ve,Xe,Ye,Ke,Ze,Qe,$e,et,tt,nt,rt,ct,at=l.forwardRef(qe),it=(n.p,["title","titleId"]);function st(){return(st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function lt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ot(e,t){var n=e.title,r=e.titleId,c=lt(e,it);return l.createElement("svg",st({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,l.createElement("g",null,l.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),l.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),l.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),l.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),l.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Le||(Le=l.createElement("g",null)),Fe||(Fe=l.createElement("g",null)),ze||(ze=l.createElement("g",null)),Ve||(Ve=l.createElement("g",null)),Xe||(Xe=l.createElement("g",null)),Ye||(Ye=l.createElement("g",null)),Ke||(Ke=l.createElement("g",null)),Ze||(Ze=l.createElement("g",null)),Qe||(Qe=l.createElement("g",null)),$e||($e=l.createElement("g",null)),et||(et=l.createElement("g",null)),tt||(tt=l.createElement("g",null)),nt||(nt=l.createElement("g",null)),rt||(rt=l.createElement("g",null)),ct||(ct=l.createElement("g",null)))}var ut,bt,dt,pt,mt=l.forwardRef(ot),ht=(n.p,function(e){return e.cart}),jt=Object(Z.a)([ht],(function(e){return e.cartItems})),gt=Object(Z.a)([ht],(function(e){return e.hidden})),Ot=Object(Z.a)([jt],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ft=Object(Z.a)([jt],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),xt=(n(84),Object(p.b)((function(e){return{itemCount:Ot(e)}}),(function(e){return{toggleCartHidden:function(){return e(ge())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object($.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object($.jsx)(mt,{className:"shopping-icon"}),Object($.jsx)("span",{className:"item-count",children:n})]})}))),vt=(n(85),n(86),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object($.jsxs)("div",{className:"cart-item",children:[Object($.jsx)("img",{src:n,alt:"item"}),Object($.jsxs)("div",{className:"item-details",children:[Object($.jsx)("span",{className:"name",children:c}),Object($.jsxs)("span",{className:"price",children:[a," x $",r," "]})]})]})}),yt=Object(Z.b)({cartItems:jt}),wt=Object(Y.g)(Object(p.b)(yt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object($.jsxs)("div",{className:"cart-dropdown",children:[Object($.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object($.jsx)(vt,{item:e},e.id)})):Object($.jsx)("span",{children:"Empty"})}),Object($.jsx)(je,{onClick:function(){n.push("/checkout"),r(ge())},children:" GO TO CHECKOUT"})]})}))),kt=Object(Z.a)([function(e){return e.user}],(function(e){return e.currentUser})),Nt=ae.b.div(ut||(ut=Object(ce.a)(["\nheight: 70px;\nwidth: 100%;\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 25px;\n"]))),Et=Object(ae.b)(d.b)(bt||(bt=Object(ce.a)(["\nheight: 100%;\nwidth: 70px;\npadding: 25px;\n"]))),Ct=ae.b.div(dt||(dt=Object(ce.a)(["\nwidth: 50%;\nheight: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: flex-end;\n"]))),Ut=Object(ae.b)(d.b)(pt||(pt=Object(ce.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]))),It=Object(Z.b)({currentUser:kt,hidden:gt}),St=Object(p.b)(It)((function(e){var t=e.currentUser,n=e.hidden;return Object($.jsxs)(Nt,{children:[Object($.jsx)(Et,{children:Object($.jsx)(at,{className:"logo"})}),Object($.jsxs)(Ct,{children:[Object($.jsx)(Ut,{to:"/shop",children:"SHOP"}),Object($.jsx)(Ut,{to:"/shop",children:"CONTACT"}),t?Object($.jsx)(Ut,{as:"div",onClick:function(){return Te.signOut()},children:" SIGN OUT "}):Object($.jsx)(Ut,{to:"/signin",children:" SIGN IN "}),Object($.jsx)(xt,{})]}),n?null:Object($.jsx)(wt,{})]})})),Tt=(n(87),n(88),Object(p.b)(null,(function(e){return{removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))},addItem:function(t){return e(Oe(t))},clearItemsFromCart:function(t){return e(function(e){return{type:y.CLEAR_ITEMS_FROM_CART,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.removeItem,r=e.addItem,c=e.clearItemsFromCart,a=t.name,i=t.quantity,s=t.imageUrl,l=t.price;return Object($.jsxs)("div",{className:"checkout-item",children:[Object($.jsx)("div",{className:"image-container",children:Object($.jsx)("img",{src:s,alt:"cart-item"})}),Object($.jsxs)("span",{className:"name",children:[" ",a," "]}),Object($.jsxs)("span",{className:"quantity",children:[Object($.jsx)("div",{className:"arrow",onClick:function(){return n(t)},children:" \u2770"}),Object($.jsxs)("span",{className:"value",children:[" ",i," "]}),Object($.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:" \u2771"})]}),Object($.jsxs)("span",{className:"price",children:[" $",l," "]}),Object($.jsx)("div",{className:"remove-button",onClick:function(){return c(t)},children:"\u2715"})]})}))),At=n(50),Mt=n.n(At),Rt=function(e){var t=e.price,n=100*t;return Object($.jsx)(Mt.a,{label:"Pay now",name:"CRWM Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),panelLabel:"Pay ",token:function(e){console.log(e),alert("Payment succesful")},stripeKey:"pk_test_51JuJbMGCROoPUrLE3YXxUqy7p2mVzMB4yeRHuomrr1GHRDWXWBJ8e5dWD0TXYY1yNtlZrAwbEwmoFlDFC78VZ3oS00KhD6qk6J",amount:n})},Pt=Object(Z.b)({cartItems:jt,total:ft}),Bt=Object(p.b)(Pt)((function(e){var t=e.cartItems,n=e.total;return Object($.jsxs)("div",{className:"checkout-page",children:[Object($.jsxs)("div",{className:"checkout-header",children:[Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Product"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Description"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Quantity"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Price"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object($.jsx)(Tt,{cartItem:e},e.id)})),Object($.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object($.jsxs)("div",{className:"test-warning",children:["test card info: 4242 4242 4242 4242",Object($.jsx)("br",{}),"Exp: 10/22 Cvc:123"]}),Object($.jsx)(Rt,{price:n})]})})),Dt=function(e){Object(V.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Te.onAuthStateChanged(function(){var t=Object(L.a)(q.a.mark((function t(n){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Se(n);case 3:t.sent.onSnapshot((function(t){e(Object(v.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object($.jsxs)("div",{children:[Object($.jsx)(St,{}),Object($.jsxs)(Y.d,{children:[Object($.jsx)(Y.b,{exact:!0,path:"/",component:se}),Object($.jsx)(Y.b,{path:"/shop",component:Ne}),Object($.jsx)(Y.b,{exact:!0,path:"/checkout",component:Bt}),Object($.jsx)(Y.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object($.jsx)(Y.a,{to:"/"}):Object($.jsx)(Ge,{})}})]})]})}}]),n}(o.a.Component),_t=Object(Z.b)({currentUser:kt}),Gt=Object(p.b)(_t,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:I,payload:e}}(t))}}}))(Dt);b.a.render(Object($.jsx)(p.a,{store:W,children:Object($.jsx)(d.a,{children:Object($.jsx)(m.a,{persistor:H,children:Object($.jsx)(Gt,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.2f7f031c.chunk.js.map