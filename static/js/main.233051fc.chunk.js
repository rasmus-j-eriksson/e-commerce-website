(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(32),c=n.n(i),s=n(20),l=n(11),o=n(31),u=n(38),b=n.n(u),d=n(6),p={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM"},m=n(39),h=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(m.a)(e),[Object(d.a)(Object(d.a)({},t),{},{quantity:1})])},j={hidden:!0,cartItems:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.TOGGLE_CART_HIDDEN:return Object(d.a)(Object(d.a)({},e),{},{hidden:!e.hidden});case p.ADD_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:h(e.cartItems,t.payload)});default:return e}},O="SET_CURRENT_USER",f={currentUcurrentUserser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(d.a)(Object(d.a)({},e),{},{currentUser:t.payload});default:return e}},x=Object(o.b)({user:v,cart:g}),y=[b.a],w=Object(o.c)(x,o.a.apply(void 0,y)),k=(n(49),n(16)),N=n.n(k),U=n(23),C=n(18),E=n(19),S=n(22),I=n(21),T=n(7),P=(n(51),n(52),n(24)),B=(n(53),n(2)),A=Object(T.g)((function(e){var t=e.title,n=e.imageUrl,a=(e.id,e.size),r=e.history,i=e.linkUrl,c=e.match;return Object(B.jsxs)("div",{className:"".concat(a||""," menu-item"),onClick:function(){return r.push("".concat(c.url).concat(i))},children:[Object(B.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(B.jsxs)("div",{className:"content",children:[Object(B.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(B.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),D=(n(58),["id"]),G=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).state={section:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(E.a)(n,[{key:"render",value:function(){return Object(B.jsx)("div",{className:"directory-menu",children:this.state.section.map((function(e){var t=e.id,n=Object(P.a)(e,D);return Object(B.jsx)(A,Object(d.a)({},n),t)}))})}}]),n}(r.a.Component),H=function(){return Object(B.jsx)("div",{className:"homepage",children:Object(B.jsx)(G,{})})},M=(n(59),[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]),R=(n(60),["children","isGoogleSignIn","inverted"]),W=function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,r=Object(P.a)(e,R);return Object(B.jsx)("button",Object(d.a)(Object(d.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))},J=(n(61),function(){return{type:p.TOGGLE_CART_HIDDEN}}),q=Object(l.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:p.ADD_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,r=t.price,i=t.imageUrl;return Object(B.jsxs)("div",{className:"collection-item",children:[Object(B.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(B.jsxs)("div",{className:"collection-footer",children:[Object(B.jsx)("span",{className:"name",children:a}),Object(B.jsxs)("span",{className:"price",children:["$",r]})]}),Object(B.jsx)(W,{inverted:!0,onClick:function(){return n(t)},children:" Add to cart"})]})})),_=(n(62),Object(T.g)((function(e){var t=e.title,n=e.items,a=e.routeName,r=e.history,i=e.match;return Object(B.jsxs)("div",{className:"collection-preview",children:[Object(B.jsxs)("h1",{className:"title",children:[" ",t.toUpperCase()," "]}),Object(B.jsx)("div",{className:"preview",onClick:function(){return r.push("".concat(i.url).concat(a))},children:n.filter((function(e,t){return t<4})).map((function(e){return Object(B.jsx)(q,{item:e},e.id)}))})]})}))),z=["id"],L=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={collection:M},a}return Object(E.a)(n,[{key:"render",value:function(){var e=this.state.collection;return Object(B.jsxs)("div",{className:"shop-page",children:["SHOP PAGE",e.map((function(e){var t=e.id,n=Object(P.a)(e,z);return Object(B.jsx)(_,Object(d.a)({},n),t)}))]})}}]),n}(r.a.Component),F=(n(63),n(27)),V=(n(64),["handleChange","label"]),K=function(e){var t=e.handleChange,n=e.label,a=Object(P.a)(e,V);return Object(B.jsxs)("div",{className:"group",children:[Object(B.jsx)("input",Object(d.a)({className:"form-input",onChange:t},a)),n?Object(B.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})},Q=(n(65),n(28)),X=(n(77),n(67),function(){var e=Object(U.a)(N.a.mark((function e(t,n){var a,r,i,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Y.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,a.set(Object(d.a)({displayName:r,email:i,createdAt:c},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user ",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());Q.a.initializeApp({apiKey:"AIzaSyCPP9tih-uUjOpJPagDAHO_duSLZF9uplg",authDomain:"crown-db-b66a0.firebaseapp.com",projectId:"crown-db-b66a0",storageBucket:"crown-db-b66a0.appspot.com",messagingSenderId:"325507463745",appId:"1:325507463745:web:0b5bef2ca4cc47e66e64c0",measurementId:"G-FZRB1N0ZZ1"});var Z=Q.a.auth(),Y=Q.a.firestore(),$=new Q.a.auth.GoogleAuthProvider;$.setCustomParameters({prompt:"select_account"});var ee,te,ne=function(){return Z.signInWithPopup($)},ae=(Q.a,function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(U.a)(N.a.mark((function e(t){var n,r,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,i=n.password,e.prev=2,e.next=5,Z.signInWithEmailAndPassword(r,i);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(F.a)({},r,n))},a.state={email:"",password:""},a}return Object(E.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("div",{className:"sign-in",children:[Object(B.jsx)("h2",{children:"I already have an account"}),Object(B.jsx)("span",{children:"Sign in with your email and password"}),Object(B.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(B.jsx)(K,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(B.jsx)(K,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,label:"password",required:!0}),Object(B.jsxs)("div",{className:"buttons",children:[Object(B.jsx)(W,{type:"submit",children:" Sign in "}),Object(B.jsx)(W,{type:"button",onClick:ne,isGoogleSignIn:!0,children:" Sign in with Google "})]})]})]})}}]),n}(r.a.Component)),re=(n(69),function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(U.a)(N.a.mark((function t(n){var a,r,i,c,s,l,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,i=a.email,c=a.password,s=a.confirmPassword,c===s){t.next=5;break}return alert("Passwords does not match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Z.createUserWithEmailAndPassword(i,c);case 8:return l=t.sent,o=l.user,t.next=12,X(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(F.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(B.jsx)("div",{className:"sign-up",children:Object(B.jsxs)("h2",{className:"title",children:[Object(B.jsx)("span",{children:"Sign up with your email and password"}),Object(B.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(B.jsx)(K,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display name",required:!0}),Object(B.jsx)(K,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(B.jsx)(K,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(B.jsx)(K,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm password",required:!0}),Object(B.jsx)(W,{type:"submit",children:"SIGN UP"})]})]})})}}]),n}(r.a.Component)),ie=function(){return Object(B.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(B.jsx)(ae,{}),Object(B.jsx)(re,{})]})},ce=["title","titleId"];function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function oe(e,t){var n=e.title,r=e.titleId,i=le(e,ce);return a.createElement("svg",se({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,ee||(ee=a.createElement("desc",null,"Created with Sketch.")),te||(te=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var ue,be,de,pe,me,he,je,ge,Oe,fe,ve,xe,ye,we,ke,Ne=a.forwardRef(oe),Ue=(n.p,["title","titleId"]);function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Se(e,t){var n=e.title,r=e.titleId,i=Ee(e,Ue);return a.createElement("svg",Ce({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ue||(ue=a.createElement("g",null)),be||(be=a.createElement("g",null)),de||(de=a.createElement("g",null)),pe||(pe=a.createElement("g",null)),me||(me=a.createElement("g",null)),he||(he=a.createElement("g",null)),je||(je=a.createElement("g",null)),ge||(ge=a.createElement("g",null)),Oe||(Oe=a.createElement("g",null)),fe||(fe=a.createElement("g",null)),ve||(ve=a.createElement("g",null)),xe||(xe=a.createElement("g",null)),ye||(ye=a.createElement("g",null)),we||(we=a.createElement("g",null)),ke||(ke=a.createElement("g",null)))}var Ie=a.forwardRef(Se),Te=(n.p,n(10)),Pe=function(e){return e.cart},Be=Object(Te.a)([Pe],(function(e){return e.cartItems})),Ae=Object(Te.a)([Pe],(function(e){return e.hidden})),De=Object(Te.a)([Be],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ge=Object(Te.a)([Be],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),He=(n(70),Object(l.b)((function(e){return{itemCount:De(e)}}),(function(e){return{toggleCartHidden:function(){return e(J())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(B.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(B.jsx)(Ie,{className:"shopping-icon"}),Object(B.jsx)("span",{className:"item-count",children:n})]})}))),Me=(n(71),n(72),function(e){var t=e.item,n=t.imageUrl,a=t.price,r=t.name,i=t.quantity;return Object(B.jsxs)("div",{className:"cart-item",children:[Object(B.jsx)("img",{src:n,alt:"item"}),Object(B.jsxs)("div",{className:"item-details",children:[Object(B.jsx)("span",{className:"name",children:r}),Object(B.jsxs)("span",{className:"price",children:[i," x $",a," "]})]})]})}),Re=Object(Te.b)({cartItems:Be}),We=Object(T.g)(Object(l.b)(Re)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return Object(B.jsxs)("div",{className:"cart-dropdown",children:[Object(B.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(B.jsx)(Me,{item:e},e.id)})):Object(B.jsx)("span",{children:"Empty"})}),Object(B.jsx)(W,{onClick:function(){n.push("/checkout"),a(J())},children:" GO TO CHECKOUT"})]})}))),Je=(n(73),Object(Te.a)([function(e){return e.user}],(function(e){return e.currentUser}))),qe=Object(Te.b)({currentUser:Je,hidden:Ae}),_e=Object(l.b)(qe)((function(e){var t=e.currentUser,n=e.hidden;return Object(B.jsxs)("div",{className:"header",children:[Object(B.jsx)(s.b,{to:"/",className:"logo-container",children:Object(B.jsx)(Ne,{className:"logo"})}),Object(B.jsxs)("div",{className:"options",children:[Object(B.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(B.jsx)(s.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(B.jsx)("div",{className:"option",onClick:function(){return Z.signOut()},children:" SIGN OUT "}):Object(B.jsx)(s.b,{className:"option",to:"/signin",children:" SIGN IN "}),Object(B.jsx)(He,{})]}),n?null:Object(B.jsx)(We,{})]})})),ze=(n(74),n(75),function(e){var t=e.item,n=t.name,a=t.quantity,r=t.price,i=t.imageUrl;return Object(B.jsxs)("div",{className:"checkout-item",children:[Object(B.jsx)("div",{className:"image-container",children:Object(B.jsx)("img",{src:i,alt:"cart-item"})}),Object(B.jsxs)("span",{className:"name",children:[" ",n," "]}),Object(B.jsxs)("span",{className:"quantity",children:["\u2770 ",a," \u2771"]}),Object(B.jsxs)("span",{className:"price",children:[" $",r," "]}),Object(B.jsx)("div",{className:"remove-button",children:"\u2715"})]})}),Le=Object(Te.b)({cartItems:Be,total:Ge}),Fe=Object(l.b)(Le)((function(e){var t=e.cartItems,n=e.total;return Object(B.jsxs)("div",{className:"checkout-page",children:[Object(B.jsxs)("div",{className:"checkout-header",children:[Object(B.jsx)("div",{className:"header-block",children:Object(B.jsx)("span",{children:"Product"})}),Object(B.jsx)("div",{className:"header-block",children:Object(B.jsx)("span",{children:"Description"})}),Object(B.jsx)("div",{className:"header-block",children:Object(B.jsx)("span",{children:"Quantity"})}),Object(B.jsx)("div",{className:"header-block",children:Object(B.jsx)("span",{children:"Price"})}),Object(B.jsx)("div",{className:"header-block",children:Object(B.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(B.jsx)(ze,{item:e},e.id)})),Object(B.jsxs)("div",{className:"total",children:["TOTAL: $",n]})]})})),Ve=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Z.onAuthStateChanged(function(){var t=Object(U.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,X(n);case 3:t.sent.onSnapshot((function(t){e(Object(d.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(B.jsxs)("div",{children:[Object(B.jsx)(_e,{}),Object(B.jsxs)(T.d,{children:[Object(B.jsx)(T.b,{exact:!0,path:"/",component:H}),Object(B.jsx)(T.b,{path:"/shop",component:L}),Object(B.jsx)(T.b,{exact:!0,path:"/checkout",component:Fe}),Object(B.jsx)(T.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(B.jsx)(T.a,{to:"/"}):Object(B.jsx)(ie,{})}})]})]})}}]),n}(r.a.Component),Ke=Object(Te.b)({currentUser:Je}),Qe=Object(l.b)(Ke,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(Ve);c.a.render(Object(B.jsx)(l.a,{store:w,children:Object(B.jsx)(s.a,{children:Object(B.jsx)(Qe,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.233051fc.chunk.js.map