(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(32),i=n.n(c),s=n(18),l=n(9),o=n(39),u=n(19),d=n(33),b=n(40),p=n.n(b),m=n(41),h=n.n(m),j=n(5),g={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEMS_FROM_CART:"CLEAR_ITEMS_FROM_CART"},O=n(42),f=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},v=function(e,t){var n=e.find((function(e){return e.id===t.id}));return 1===t.quantity?x(e,t):(n&&(e=e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))),e)},x=function(e,t){return e.filter((function(e){return e.id!==t.id}))},y={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case g.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:f(e.cartItems,t.payload)});case g.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:v(e.cartItems,t.payload)});case g.CLEAR_ITEMS_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});default:return e}},k="SET_CURRENT_USER",N={currentUcurrentUserser:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],shopItems:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},T={key:"root",storage:h.a,whitelist:["cart"]},A=Object(u.b)({user:E,cart:w,directory:U,shop:S}),M=Object(d.a)(T,A),R=[p.a],B=Object(u.c)(M,u.a.apply(void 0,R)),P=Object(d.b)(B),_=(n(54),n(16)),D=n.n(_),G=n(20),H=n(25),q=n(26),W=n(28),F=n(27),J=n(8),L=(n(56),n(57),n(21)),V=n(7),z=Object(V.a)([function(e){return e.directory}],(function(e){return e.sections})),K=(n(58),n(2)),Q=Object(J.g)((function(e){var t=e.title,n=e.imageUrl,r=(e.id,e.size),a=e.history,c=e.linkUrl,i=e.match;return Object(K.jsxs)("div",{className:"".concat(r||""," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(c))},children:[Object(K.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(K.jsxs)("div",{className:"content",children:[Object(K.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(K.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),X=(n(63),["id"]),Z=Object(V.b)({sections:z}),Y=Object(l.b)(Z)((function(e){var t=e.sections;return Object(K.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(L.a)(e,X);return Object(K.jsx)(Q,Object(j.a)({},n),t)}))})})),$=function(){return Object(K.jsx)("div",{className:"homepage",children:Object(K.jsx)(Y,{})})},ee=(n(64),Object(V.a)([function(e){return e.shop}],(function(e){return e.collections}))),te=(n(65),["children","isGoogleSignIn","inverted"]),ne=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,a=Object(L.a)(e,te);return Object(K.jsx)("button",Object(j.a)(Object(j.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))},re=(n(66),function(){return{type:g.TOGGLE_CART_HIDDEN}}),ae=function(e){return{type:g.ADD_ITEM,payload:e}},ce=Object(l.b)(null,(function(e){return{addItem:function(t){return e(ae(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,a=t.price,c=t.imageUrl;return Object(K.jsxs)("div",{className:"collection-item",children:[Object(K.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(K.jsxs)("div",{className:"collection-footer",children:[Object(K.jsx)("span",{className:"name",children:r}),Object(K.jsxs)("span",{className:"price",children:["$",a]})]}),Object(K.jsx)(ne,{inverted:!0,onClick:function(){return n(t)},children:" Add to cart"})]})})),ie=(n(67),Object(J.g)((function(e){var t=e.title,n=e.items,r=e.routeName,a=e.history,c=e.match;return Object(K.jsxs)("div",{className:"collection-preview",children:[Object(K.jsxs)("h1",{className:"title",children:[" ",t.toUpperCase()," "]}),Object(K.jsx)("div",{className:"preview",onClick:function(){return a.push("".concat(c.url,"/").concat(r))},children:n.filter((function(e,t){return t<4})).map((function(e){return Object(K.jsx)(ce,{item:e},e.id)}))})]})}))),se=(n(68),["id"]),le=Object(V.b)({collections:ee}),oe=Object(l.b)(le)((function(e){var t=e.collections;return Object(K.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(L.a)(e,se);return Object(K.jsx)(ie,Object(j.a)({},n),t)}))})})),ue=function(e){e.collections;return Object(K.jsx)("div",{className:"shop-page",children:Object(K.jsx)(oe,{})})},de=(n(69),n(24)),be=(n(70),["handleChange","label"]),pe=function(e){var t=e.handleChange,n=e.label,r=Object(L.a)(e,be);return Object(K.jsxs)("div",{className:"group",children:[Object(K.jsx)("input",Object(j.a)({className:"form-input",onChange:t},r)),n?Object(K.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},me=(n(71),n(29)),he=(n(83),n(73),function(){var e=Object(G.a)(D.a.mark((function e(t,n){var r,a,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=ge.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(j.a)({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user ",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());me.a.initializeApp({apiKey:"AIzaSyCPP9tih-uUjOpJPagDAHO_duSLZF9uplg",authDomain:"crown-db-b66a0.firebaseapp.com",projectId:"crown-db-b66a0",storageBucket:"crown-db-b66a0.appspot.com",messagingSenderId:"325507463745",appId:"1:325507463745:web:0b5bef2ca4cc47e66e64c0",measurementId:"G-FZRB1N0ZZ1"});var je=me.a.auth(),ge=me.a.firestore(),Oe=new me.a.auth.GoogleAuthProvider;Oe.setCustomParameters({prompt:"select_account"});var fe,ve,xe=function(){return je.signInWithPopup(Oe)},ye=(me.a,function(e){Object(W.a)(n,e);var t=Object(F.a)(n);function n(e){var r;return Object(H.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(G.a)(D.a.mark((function e(t){var n,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,je.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(de.a)({},a,n))},r.state={email:"",password:""},r}return Object(q.a)(n,[{key:"render",value:function(){return Object(K.jsxs)("div",{className:"sign-in",children:[Object(K.jsx)("h2",{children:"I already have an account"}),Object(K.jsx)("span",{children:"Sign in with your email and password"}),Object(K.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(K.jsx)(pe,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(K.jsx)(pe,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,label:"password",required:!0}),Object(K.jsxs)("div",{className:"buttons",children:[Object(K.jsx)(ne,{type:"submit",children:" Sign in "}),Object(K.jsx)(ne,{type:"button",onClick:xe,isGoogleSignIn:!0,children:" Sign in with Google "})]})]})]})}}]),n}(a.a.Component)),we=(n(75),function(e){Object(W.a)(n,e);var t=Object(F.a)(n);function n(){var e;return Object(H.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(G.a)(D.a.mark((function t(n){var r,a,c,i,s,l,o;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("Passwords does not match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,je.createUserWithEmailAndPassword(c,i);case 8:return l=t.sent,o=l.user,t.next=12,he(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(de.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(q.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,a=e.confirmPassword;return Object(K.jsx)("div",{className:"sign-up",children:Object(K.jsxs)("h2",{className:"title",children:[Object(K.jsx)("span",{children:"Sign up with your email and password"}),Object(K.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(K.jsx)(pe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display name",required:!0}),Object(K.jsx)(pe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(K.jsx)(pe,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(K.jsx)(pe,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm password",required:!0}),Object(K.jsx)(ne,{type:"submit",children:"SIGN UP"})]})]})})}}]),n}(a.a.Component)),ke=function(){return Object(K.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(K.jsx)(ye,{}),Object(K.jsx)(we,{})]})},Ne=["title","titleId"];function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ue(e,t){var n=e.title,a=e.titleId,c=Ce(e,Ne);return r.createElement("svg",Ee({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"Group"):n?r.createElement("title",{id:a},n):null,fe||(fe=r.createElement("desc",null,"Created with Sketch.")),ve||(ve=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Ie,Se,Te,Ae,Me,Re,Be,Pe,_e,De,Ge,He,qe,We,Fe,Je=r.forwardRef(Ue),Le=(n.p,["title","titleId"]);function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ke(e,t){var n=e.title,a=e.titleId,c=ze(e,Le);return r.createElement("svg",Ve({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ie||(Ie=r.createElement("g",null)),Se||(Se=r.createElement("g",null)),Te||(Te=r.createElement("g",null)),Ae||(Ae=r.createElement("g",null)),Me||(Me=r.createElement("g",null)),Re||(Re=r.createElement("g",null)),Be||(Be=r.createElement("g",null)),Pe||(Pe=r.createElement("g",null)),_e||(_e=r.createElement("g",null)),De||(De=r.createElement("g",null)),Ge||(Ge=r.createElement("g",null)),He||(He=r.createElement("g",null)),qe||(qe=r.createElement("g",null)),We||(We=r.createElement("g",null)),Fe||(Fe=r.createElement("g",null)))}var Qe=r.forwardRef(Ke),Xe=(n.p,function(e){return e.cart}),Ze=Object(V.a)([Xe],(function(e){return e.cartItems})),Ye=Object(V.a)([Xe],(function(e){return e.hidden})),$e=Object(V.a)([Ze],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),et=Object(V.a)([Ze],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),tt=(n(76),Object(l.b)((function(e){return{itemCount:$e(e)}}),(function(e){return{toggleCartHidden:function(){return e(re())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(K.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(K.jsx)(Qe,{className:"shopping-icon"}),Object(K.jsx)("span",{className:"item-count",children:n})]})}))),nt=(n(77),n(78),function(e){var t=e.item,n=t.imageUrl,r=t.price,a=t.name,c=t.quantity;return Object(K.jsxs)("div",{className:"cart-item",children:[Object(K.jsx)("img",{src:n,alt:"item"}),Object(K.jsxs)("div",{className:"item-details",children:[Object(K.jsx)("span",{className:"name",children:a}),Object(K.jsxs)("span",{className:"price",children:[c," x $",r," "]})]})]})}),rt=Object(V.b)({cartItems:Ze}),at=Object(J.g)(Object(l.b)(rt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(K.jsxs)("div",{className:"cart-dropdown",children:[Object(K.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(K.jsx)(nt,{item:e},e.id)})):Object(K.jsx)("span",{children:"Empty"})}),Object(K.jsx)(ne,{onClick:function(){n.push("/checkout"),r(re())},children:" GO TO CHECKOUT"})]})}))),ct=(n(79),Object(V.a)([function(e){return e.user}],(function(e){return e.currentUser}))),it=Object(V.b)({currentUser:ct,hidden:Ye}),st=Object(l.b)(it)((function(e){var t=e.currentUser,n=e.hidden;return Object(K.jsxs)("div",{className:"header",children:[Object(K.jsx)(s.b,{to:"/",className:"logo-container",children:Object(K.jsx)(Je,{className:"logo"})}),Object(K.jsxs)("div",{className:"options",children:[Object(K.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(K.jsx)(s.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(K.jsx)("div",{className:"option",onClick:function(){return je.signOut()},children:" SIGN OUT "}):Object(K.jsx)(s.b,{className:"option",to:"/signin",children:" SIGN IN "}),Object(K.jsx)(tt,{})]}),n?null:Object(K.jsx)(at,{})]})})),lt=(n(80),n(81),Object(l.b)(null,(function(e){return{removeItem:function(t){return e(function(e){return{type:g.REMOVE_ITEM,payload:e}}(t))},addItem:function(t){return e(ae(t))},clearItemsFromCart:function(t){return e(function(e){return{type:g.CLEAR_ITEMS_FROM_CART,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.removeItem,r=e.addItem,a=e.clearItemsFromCart,c=t.name,i=t.quantity,s=t.imageUrl,l=t.price;return Object(K.jsxs)("div",{className:"checkout-item",children:[Object(K.jsx)("div",{className:"image-container",children:Object(K.jsx)("img",{src:s,alt:"cart-item"})}),Object(K.jsxs)("span",{className:"name",children:[" ",c," "]}),Object(K.jsxs)("span",{className:"quantity",children:[Object(K.jsx)("div",{className:"arrow",onClick:function(){return n(t)},children:" \u2770"}),Object(K.jsxs)("span",{className:"value",children:[" ",i," "]}),Object(K.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:" \u2771"})]}),Object(K.jsxs)("span",{className:"price",children:[" $",l," "]}),Object(K.jsx)("div",{className:"remove-button",onClick:function(){return a(t)},children:"\u2715"})]})}))),ot=Object(V.b)({cartItems:Ze,total:et}),ut=Object(l.b)(ot)((function(e){var t=e.cartItems,n=e.total;return Object(K.jsxs)("div",{className:"checkout-page",children:[Object(K.jsxs)("div",{className:"checkout-header",children:[Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Product"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Description"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Quantity"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Price"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(K.jsx)(lt,{cartItem:e},e.id)})),Object(K.jsxs)("div",{className:"total",children:["TOTAL: $",n]})]})})),dt=function(e){Object(W.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=je.onAuthStateChanged(function(){var t=Object(G.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,he(n);case 3:t.sent.onSnapshot((function(t){e(Object(j.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(K.jsxs)("div",{children:[Object(K.jsx)(st,{}),Object(K.jsxs)(J.d,{children:[Object(K.jsx)(J.b,{exact:!0,path:"/",component:$}),Object(K.jsx)(J.b,{path:"/shop",component:ue}),Object(K.jsx)(J.b,{exact:!0,path:"/checkout",component:ut}),Object(K.jsx)(J.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(K.jsx)(J.a,{to:"/"}):Object(K.jsx)(ke,{})}})]})]})}}]),n}(a.a.Component),bt=Object(V.b)({currentUser:ct}),pt=Object(l.b)(bt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:k,payload:e}}(t))}}}))(dt);i.a.render(Object(K.jsx)(l.a,{store:B,children:Object(K.jsx)(s.a,{children:Object(K.jsx)(o.a,{persistor:P,children:Object(K.jsx)(pt,{})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.cf167434.chunk.js.map