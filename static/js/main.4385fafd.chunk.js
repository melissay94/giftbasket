(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/GiftBasketLogo.acf6e6f5.png"},115:function(e,t,a){e.exports=a.p+"static/media/createIcon.6b9a78de.png"},116:function(e,t,a){e.exports=a.p+"static/media/organizeIcon.c4413aed.png"},117:function(e,t,a){e.exports=a.p+"static/media/shareIcon.3b56106a.png"},118:function(e,t,a){e.exports=a.p+"static/media/findIcon.32d06af8.png"},139:function(e,t,a){e.exports=a(153)},146:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),o=a(28),c=a(122),s=a(53),d=a(120),u=a(121),m=a(105),g=new d.a,f=new u.a({uri:"https://gift-basket.herokuapp.com/graphql"}),b=Object(m.a)((function(e,t){var a=t.headers,n=localStorage.getItem("token");return{headers:Object(c.a)({},a,{authorization:n?"Bearer ".concat(n):""})}})),v=new s.a({cache:g,link:b.concat(f)}),E=null!=localStorage.getItem("token");v.writeData({data:{isLoggedIn:E}});a(146);var p=a(13),h=a(19),k=a(11),j=a(14),O=a.n(j),y=a(119),x=a(203),I=a(190),S=a(191),w=a(189),G=a(180),N=a(108),$=a.n(N);var C=function(e){var t=e.link;return r.a.createElement(h.b,{to:t,className:"logo_container"},r.a.createElement("img",{src:$.a,alt:"GiftBasket logo",className:"logo"}),r.a.createElement("h1",{className:"app_name"},"GiftBasket"))},B=a(10),L=a(52),P=a(208),M=a(184),T=a(155),D=a(63),A=a(205),W=a(188);function F(){var e=Object(p.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n    }\n  }\n"]);return F=function(){return e},e}var z=Object(G.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},title:{textAlign:"center"}}})),U=O()(F());var q=function(e){var t=e.isShowing,a=e.toggleModal,i=z(),l=Object(n.useState)(""),o=Object(B.a)(l,2),c=o[0],s=o[1],d=Object(n.useState)(""),u=Object(B.a)(d,2),m=u[0],g=u[1],f=Object(k.a)(),b=Object(k.b)(U,{onCompleted:function(e){var t=e.login;localStorage.setItem("token",t.token),f.writeData({data:{isLoggedIn:!0}})}}),v=Object(B.a)(b,2),E=v[0],p=v[1],h=p.data,j=p.loading,O=p.error;return j?r.a.createElement("div",null,"Loading..."):O?r.a.createElement("div",null,"Error!"):h?r.a.createElement(L.a,{to:"/home"}):r.a.createElement(P.a,{"aria-labelledby":"login modal","aria-describedby":"A form to login into Giftbasket with an existing account",className:i.modal,open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500}},r.a.createElement(T.a,{in:t},r.a.createElement("div",{className:"".concat(i.paper," no-outline")},r.a.createElement(D.a,{variant:"h6",className:i.title},"Welcome Back!"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),E({variables:{email:c,password:m}})}(e)}},r.a.createElement(A.a,{variant:"outlined",label:"Email",fullWidth:!0,color:"secondary",margin:"normal",onChange:function(e){return s(e.target.value)},value:c}),r.a.createElement(A.a,{variant:"outlined",label:"Password",type:"password",fullWidth:!0,color:"secondary",margin:"normal",onChange:function(e){return g(e.target.value)},value:m}),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,xs:9}),r.a.createElement(W.a,{item:!0,xs:3},r.a.createElement(w.a,{type:"submit",variant:"contained",color:"secondary",size:"large",fullWidth:!0},"Login")))))))},Y=function(){var e=Object(n.useState)(!1),t=Object(B.a)(e,2),a=t[0],r=t[1];return{isShowing:a,toggleModal:function(e){r(e)}}},R=Object(G.a)((function(){return{root:{flexGrow:1},title:{flexGrow:2}}}));var K=function(){var e=R(),t=Y(),a=t.isShowing,n=t.toggleModal;return r.a.createElement(I.a,{position:"static",className:e.root},r.a.createElement(S.a,null,r.a.createElement("div",{className:e.title},r.a.createElement(C,{link:"/"})),r.a.createElement(w.a,{onClick:function(){return n(!0)}},"Login")),r.a.createElement(q,{toggleModal:n,isShowing:a}))},Q=Object(G.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:2},button:{margin:e.spacing(2)}}}));var _=function(){var e=Object(k.a)(),t=Q();return r.a.createElement(I.a,{position:"static",className:t.root},r.a.createElement(S.a,null,r.a.createElement("div",{className:t.title},r.a.createElement(C,{link:"/home"})),r.a.createElement(h.b,{to:"/home",component:w.a,className:t.button},"My Baskets"),r.a.createElement(h.b,{to:"/gifts",component:w.a,className:t.button},"My Gifts"),r.a.createElement(h.b,{to:"/feed",component:w.a,className:t.button},"Discover"),r.a.createElement(w.a,{className:t.button,onClick:function(){return e.clearStore(),e.writeData({data:{isLoggedIn:!1}}),localStorage.removeItem("token"),r.a.createElement(L.a,{to:"/"})}},"Logout")))},H=a(206),J=a(197),V=a(86),X=a(185),Z=a(186),ee=a(209),te=a(192),ae=a(207);var ne=function(e){var t=e.addGift,a=e.toggleModal,i=Object(n.useState)(null),l=Object(B.a)(i,2),o=l[0],c=l[1],s=Object(n.useState)(null),d=Object(B.a)(s,2),u=d[0],m=d[1],g=Object(n.useState)(null),f=Object(B.a)(g,2),b=f[0],v=f[1],E=Object(n.useState)("false"),p=Object(B.a)(E,2),h=p[0],k=p[1];return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({title:o,description:u,link:b,isPublic:"true"==h}),a(!1)}(e)}},r.a.createElement(A.a,{variant:"outlined",label:"Title",color:"secondary",fullWidth:!0,margin:"normal",value:o,className:"basket-text-field",onChange:function(e){return c(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Description",color:"secondary",fullWidth:!0,margin:"normal",value:u,className:"basket-text-field",onChange:function(e){return m(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Link",color:"secondary",fullWidth:!0,margin:"normal",value:b,className:"basket-text-field",onChange:function(e){return v(e.target.value)}}),r.a.createElement(X.a,{component:"fieldset"},r.a.createElement(Z.a,{component:"legend",color:"secondary"},"Share This Gift?"),r.a.createElement(ee.a,{"aria-label":"Share This Gift",name:"shareGift",value:h,onChange:function(e){k(e.target.value)}},r.a.createElement(te.a,{value:"true",control:r.a.createElement(ae.a,null),label:"Share it!"}),r.a.createElement(te.a,{value:"false",control:r.a.createElement(ae.a,null),label:"Keep it Private"}))),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,xs:5,md:6,lg:7}),r.a.createElement(W.a,{item:!0,xs:7,md:6,lg:5},r.a.createElement(w.a,{type:"submit",variant:"contained",fullWidth:!0,color:"secondary"},"Add Gift"))))};var re=function(e){e.children;var t=e.value,a=e.index,n=e.addGift,i=e.toggleModal,l=Object(V.a)(e,["children","value","index","addGift","toggleModal"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==a,"aria-labelledby":"New gift form tab panel"},l),r.a.createElement(D.a,{variant:"h4"},"Create a New Gift"),r.a.createElement(ne,{addGift:n,toggleModal:i}))},ie=a(187),le=a(194),oe=a(195),ce=a(196),se=a(113),de=a.n(se);var ue=function(e){var t=e.gifts,a=e.existingGiftIds,n=e.toggleExistingGiftIds;return r.a.createElement(ie.a,null,t.map((function(e){return r.a.createElement(le.a,{button:!0,selected:a.includes(e.id),onClick:function(t){return n(t,e.id)},key:e.id},r.a.createElement(oe.a,null,r.a.createElement(de.a,null)),r.a.createElement(ce.a,{primary:e.title,secondary:e.description}))})))};function me(){var e=Object(p.a)(["\n  query {\n    currentUser {\n      gifts {\n        id,\n        title, \n        description,\n        link\n      }\n    }\n  }"]);return me=function(){return e},e}var ge=O()(me());var fe=function(e){e.children;var t=e.value,a=e.index,n=e.toggleExistingGiftIds,i=e.existingGiftIds,l=Object(V.a)(e,["children","value","index","toggleExistingGiftIds","existingGiftIds"]),o=Object(k.c)(ge),c=o.data,s=o.loading,d=o.error;return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==a,"aria-labelledby":"Existing Gifts list tab panel"},l),r.a.createElement(D.a,{variant:"h4"},"Current Saved Gifts"),d?r.a.createElement("div",null,"Error!"):null,s?r.a.createElement("div",null,"Loading..."):null,c?r.a.createElement(ue,{gifts:c.currentUser.gifts,toggleExistingGiftIds:n,existingGiftIds:i}):null)},be=Object(G.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},title:{textAlign:"center"}}}));var ve=function(e){var t=e.isShowing,a=e.toggleModal,i=e.toggleExistingGiftIds,l=e.existingGiftIds,o=e.addGift,c=be(),s=Object(n.useState)(0),d=Object(B.a)(s,2),u=d[0],m=d[1];return r.a.createElement(P.a,{"aria-labelledby":"add gift modal","aria-describedby":"A modal for adding a new gift or select and existing one you've already created",className:c.modal,open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500}},r.a.createElement(T.a,{in:t},r.a.createElement("div",{className:"".concat(c.paper," no-outline")},r.a.createElement(H.a,{indicatorColor:"secondary",value:u,onChange:function(e,t){m(t)},"aria-label":"Gift Option Tabs"},r.a.createElement(J.a,{label:"New Gift",id:"new-gift-tab"}),r.a.createElement(J.a,{label:"Your Gifts",id:"existing-gift-tab"})),r.a.createElement(re,{value:u,index:0,addGift:o,toggleModal:a}),r.a.createElement(fe,{value:u,index:1,toggleExistingGiftIds:i,existingGiftIds:l}))))};function Ee(){var e=Object(p.a)(["\nmutation addGiftToBasket($basketId: Int!, $giftId: Int!) {\n  addGiftToBasket(basketId: $basketId, giftId: $giftId) {\n    id,\n    name,\n  }\n}"]);return Ee=function(){return e},e}function pe(){var e=Object(p.a)(["\nmutation createGift($basketId: Int, $title: String!, $description: String, $link: String, $isPublic: Boolean!) {\n  createGift(basketId: $basketId, title: $title, description: $description, link: $link, isPublic: $isPublic) {\n    id\n  }\n}"]);return pe=function(){return e},e}function he(){var e=Object(p.a)(["\nmutation deleteBasket($id: Int!) {\n  deleteBasket(id: $id)\n}"]);return he=function(){return e},e}var ke=O()(he()),je=O()(pe()),Oe=O()(Ee()),ye=Object(G.a)((function(e){return{title:{margin:e.spacing(5)},info:{marginLeft:e.spacing(5),marginBottom:e.spacing(2)},buttons:{width:"50%",marginLeft:e.spacing(4),marginRight:e.spacing(12),display:"flex",justifyContent:"space-between"}}}));var xe=function(e){var t=e.basket,a=Object(k.b)(ke),n=Object(B.a)(a,2),i=n[0],l=n[1],o=l.data,c=l.loading,s=l.error,d=Object(k.b)(je,{refetchQueries:["basket"]}),u=Object(B.a)(d,2),m=u[0],g=u[1],f=g.loading,b=g.error,v=Object(k.b)(Oe,{refetchQueries:["basket"]}),E=Object(B.a)(v,2),p=E[0],j=E[1],O=j.loading,y=j.error,x=Y(),I=x.isShowing,S=x.toggleModal,G=ye(),N=t.gifts.map((function(e){return e.id}));return c||f||O?r.a.createElement("div",null,"Loading..."):s||b||y?r.a.createElement("div",null,"Error!"):o?r.a.createElement(L.a,{to:"/home"}):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(D.a,{variant:"h2",className:G.title},t.name?t.name:"No name"),r.a.createElement("div",{className:G.info},r.a.createElement(D.a,{variant:"body2"},t.birthdate?function(e){var t=new Date(Date.parse(e)).toString().split(" ");return"".concat(t[1]," ").concat(t[2],", ").concat(t[3])}(t.birthdate):"No birthdate"),r.a.createElement(D.a,{variant:"body2"},t.address?t.address:"No address"))),r.a.createElement("div",{className:G.buttons},r.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(){return S(!0)}},"Add Gift"),r.a.createElement(h.b,{variant:"contained",color:"secondary",component:w.a,to:"/basket/".concat(t.id?t.id:"","/edit")},"Edit"),r.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(e){return function(e){e.preventDefault(),i({variables:{id:t.id}})}(e)}},"Delete")),r.a.createElement(ve,{toggleModal:S,isShowing:I,addGift:function(e){m({variables:{basketId:t.id,title:e.title,description:e.description,link:e.link,isPublic:"true"===e.isPublic}}),S(!1)},existingGiftIds:N,toggleExistingGiftIds:function(e,a){p({variables:{giftId:a,basketId:t.id}}),S(!1)}}))},Ie=a(91),Se=a(198),we=a(199),Ge=a(200),Ne=a(201);function $e(){var e=Object(p.a)(["\n  mutation editGift($id: Int!, $title: String, $description: String, $link: String, $isPublic: Boolean!) {\n    editGift(id: $id, title: $title, description: $description, link: $link, isPublic: $isPublic) {\n      id,\n      title\n    }\n  }"]);return $e=function(){return e},e}var Ce=O()($e());var Be=function(e){var t=e.gift,a=e.toggleModal,i=Object(n.useState)(t.title),l=Object(B.a)(i,2),o=l[0],c=l[1],s=Object(n.useState)(t.description),d=Object(B.a)(s,2),u=d[0],m=d[1],g=Object(n.useState)(t.link),f=Object(B.a)(g,2),b=f[0],v=f[1],E=Object(n.useState)(t.isPublic?"true":"false"),p=Object(B.a)(E,2),h=p[0],j=p[1],O=Object(k.b)(Ce),y=Object(B.a)(O,2),x=y[0],I=y[1],S=I.data,G=I.loading,N=I.error;return G?r.a.createElement("div",null,"Loading..."):N?r.a.createElement("div",null,"Error!"):(S&&a(!1),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(o),x({variables:{id:t.id,title:o,description:u,link:b,isPublic:"true"===h}})}(e)}},r.a.createElement(A.a,{variant:"outlined",label:"Title",color:"secondary",fullWidth:!0,margin:"normal",value:o,className:"basket-text-field",onChange:function(e){return c(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Description",color:"secondary",fullWidth:!0,margin:"normal",value:u,className:"basket-text-field",onChange:function(e){return m(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Link",color:"secondary",fullWidth:!0,margin:"normal",value:b,className:"basket-text-field",onChange:function(e){return v(e.target.value)}}),r.a.createElement(X.a,{component:"fieldset"},r.a.createElement(Z.a,{component:"legend",color:"secondary"},"Share This Gift?"),r.a.createElement(ee.a,{"aria-label":"Share This Gift",name:"shareGift",value:h,onChange:function(e){j(e.target.value)}},r.a.createElement(te.a,{value:"true",control:r.a.createElement(ae.a,null),label:"Share it!"}),r.a.createElement(te.a,{value:"false",control:r.a.createElement(ae.a,null),label:"Keep it Private"}))),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,xs:5,md:6,lg:7}),r.a.createElement(W.a,{item:!0,xs:7,md:6,lg:5},r.a.createElement(w.a,{type:"submit",variant:"contained",fullWidth:!0,color:"secondary"},"Edit Gift")))))},Le=Object(G.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},title:{textAlign:"center"}}}));var Pe=function(e){var t=e.isShowing,a=e.toggleModal,n=e.gift,i=Le();return r.a.createElement(P.a,{"aria-labelledby":"edit gift modal","aria-describedby":"A modal for editing an existing gift",className:i.modal,open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500}},r.a.createElement(T.a,{in:t},r.a.createElement("div",{className:"".concat(i.paper," no-outline")},r.a.createElement(Be,{gift:n,toggleModal:a}))))};function Me(){var e=Object(p.a)(["\nmutation addGiftToUser($id: Int!) {\n  addGiftToUser(id: $id) {\n    id,\n    name,\n  }\n}\n"]);return Me=function(){return e},e}function Te(){var e=Object(p.a)(["\n  mutation removeGiftFromBasket($giftId: Int!, $basketId: Int!) {\n    removeGiftFromBasket(giftId: $giftId, basketId: $basketId)\n  }"]);return Te=function(){return e},e}function De(){var e=Object(p.a)(["\n  mutation deleteGift($id: Int!) {\n    deleteGift(id: $id)\n  }"]);return De=function(){return e},e}var Ae=O()(De()),We=O()(Te()),Fe=O()(Me()),ze=Object(G.a)((function(e){return{card:{margin:"1em"}}}));var Ue=function(e){var t=e.gift,a=e.isNewBasketFlow,n=e.isExistingBasketFlow,i=Y(),l=i.isShowing,o=i.toggleModal,c=Object(L.g)().id,s=Object(k.b)(Ae,{refetchQueries:["basket"]}),d=Object(B.a)(s,2),u=d[0],m=d[1],g=(m.data,m.loading),f=m.error,b=Object(k.b)(We,{refetchQueries:["basket"]}),v=Object(B.a)(b,2),E=v[0];Object(Ie.a)(v[1]);var p=Object(k.b)(Fe),j=Object(B.a)(p,2),O=j[0];Object(Ie.a)(j[1]);var y=ze();return g?r.a.createElement("div",null,"Loading..."):f?r.a.createElement("div",null,"Error!"):r.a.createElement(Se.a,{elevation:3,className:y.card},r.a.createElement(we.a,null,r.a.createElement(D.a,{variant:"h4"},t.title?t.title:"No Title"),r.a.createElement(D.a,{variant:"body2"},t.description?t.description:""),r.a.createElement(D.a,{variant:"subtitle1"},"Status:"," ",t.isPublic?"Public":"Private")),r.a.createElement(Ge.a,null,t.link?r.a.createElement(h.b,{size:"small",color:"secondary",component:Ne.a,to:t.link,target:"_blank"},"See Product"):null,a||t.isPublic?r.a.createElement(w.a,{size:"small",color:"secondary",onClick:function(){O({variables:{id:t.id}})}},"Add"):r.a.createElement("div",null,r.a.createElement(w.a,{size:"small",color:"secondary",onClick:function(){return o(!0)}},"Edit Gift"),n?r.a.createElement(w.a,{size:"small",color:"secondary",onClick:function(){E({variables:{giftId:t.id,basketId:c}})}},"Remove Gift"):r.a.createElement(w.a,{size:"small",color:"secondary",onClick:function(){u({variables:{id:t.id}})}},"Delete Gift"))),r.a.createElement(Pe,{gift:t,isShowing:l,toggleModal:o}))};function qe(){var e=Object(p.a)(["\n  query basket($id: Int!) {\n    basket(id: $id) {\n      id,\n      name,\n      birthdate,\n      gifts {\n        id,\n        title,\n        description\n      }\n    }\n  }"]);return qe=function(){return e},e}var Ye=O()(qe());var Re=function(e){var t=e.isLoggedIn,a=Object(L.g)().id,n=Object(k.c)(Ye,{variables:{id:parseInt(a,10)}}),i=n.data,l=n.loading,o=n.error;if(!t)return r.a.createElement(L.a,{to:"/"});if(l)return r.a.createElement("div",null,"Loading...");if(o)return r.a.createElement("div",null,"Error!");var c=i.basket;return r.a.createElement("div",null,r.a.createElement(xe,{basket:c||null}),c.gifts.map((function(e){return r.a.createElement(Ue,{key:e.id,gift:e,isExistingBasketFlow:!0})})))},Ke=a(92),Qe=a(202),_e=a(114),He=a.n(_e),Je=a(85),Ve=a(29),Xe=a(204);var Ze=function(e){var t=e.gifts,a=e.isNewBasketFlow,n=e.isExistingBasketFlow;return r.a.createElement(W.a,{container:!0},t.length>0?t.map((function(e){return r.a.createElement(W.a,{item:!0,xs:6,md:4,lg:3,key:e.id},r.a.createElement(Ue,{gift:e,isNewBasketFlow:a,isExistingBasketFlow:n}))})):r.a.createElement("div",null,"No Gifts Added Yet."))};function et(){var e=Object(p.a)(["\n  mutation createBasket($name: String!, $birthdate: String, $address: String, $gifts: [CreateGiftInput!]!, $existingGiftIds: [ID!]!) {\n    createBasket(name: $name, birthdate: $birthdate, address: $address, gifts: $gifts, existingGiftIds: $existingGiftIds) {\n      id,\n      name,\n      birthdate,\n      gifts {\n        title,\n        description,\n        isPublic\n      }\n    }\n  }"]);return et=function(){return e},e}var tt=Object(G.a)((function(){return{title:{marginTop:"1em"},submit:{margin:"1em 0 5em 0"},addGift:{marginTop:"1em",marginBottom:"1em"}}})),at=O()(et());var nt=function(e){var t=e.isLoggedIn,a=Object(n.useState)(""),i=Object(B.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(new Date),s=Object(B.a)(c,2),d=s[0],u=s[1],m=Object(n.useState)(""),g=Object(B.a)(m,2),f=g[0],b=g[1],v=Object(n.useState)([]),E=Object(B.a)(v,2),p=E[0],h=E[1],j=Object(n.useState)([]),O=Object(B.a)(j,2),y=O[0],x=O[1],I=tt(),S=Y(),G=S.isShowing,N=S.toggleModal,$=Object(k.b)(at),C=Object(B.a)($,2),P=C[0],M=C[1].data;return t?M?r.a.createElement(L.a,{to:"/basket/".concat(M.createBasket.id)}):r.a.createElement("div",null,r.a.createElement(D.a,{variant:"h2",align:"center",className:I.title}," Create a Basket"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),l.length<1||P({variables:{name:l,birthdate:d,address:f,gifts:p,existingGiftIds:y}})}(e)}},r.a.createElement(W.a,{container:!0,justify:"space-around"},r.a.createElement(A.a,{variant:"outlined",label:"Name",color:"secondary",margin:"normal",value:l,className:"basket-text-field",onChange:function(e){return o(e.target.value)}}),r.a.createElement(Ve.a,{utils:Je.a},r.a.createElement(Xe.a,{variant:"inline",inputVariant:"outlined",color:"secondary",format:"MM/dd/yyyy",margin:"normal",label:"Birthdate",value:d,onChange:u,className:"basket-text-field",KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(A.a,{variant:"outlined",label:"Address",color:"secondary",margin:"normal",className:"basket-text-field",value:f,onChange:function(e){return b(e.target.value)}}),r.a.createElement("div",{className:"basket-text-field"},r.a.createElement(Qe.a,{className:I.addGift,variant:"extended",type:"button",color:"secondary",onClick:function(){return N(!0)}},r.a.createElement(He.a,null),"Add Gift")),r.a.createElement("div",{className:"basket-text-field"},r.a.createElement(Ze,{gifts:p,isNewBasketFlow:!0})),r.a.createElement("div",{className:"basket-text-field"},r.a.createElement(w.a,{type:"submit",className:I.submit,fullWidth:!0,variant:"contained",color:"secondary"},"Create Basket!")))),r.a.createElement(ve,{toggleModal:N,isShowing:G,addGift:function(e){h([].concat(Object(Ke.a)(p),[e]))},existingGiftIds:y,toggleExistingGiftIds:function(e,t){if(y.includes(t)){var a=y.indexOf(t);x(y.slice(0,a).concat(y.slice(a+1)))}else x([].concat(Object(Ke.a)(y),[t]))}})):r.a.createElement(L.a,{to:"/"})};function rt(){var e=Object(p.a)(["\nmutation editBasket($id: Int!, $name: String, $birthdate: String, $address: String) {\n  editBasket(id: $id, name: $name, birthdate: $birthdate, address: $address) {\n    id, \n    name\n  }\n}"]);return rt=function(){return e},e}var it=O()(rt()),lt=Object(G.a)((function(e){return{button:{marginTop:"1em",width:"65%"}}}));var ot=function(e){var t=e.basket,a=Object(n.useState)(t.name),i=Object(B.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(t.birthdate),s=Object(B.a)(c,2),d=s[0],u=s[1],m=Object(n.useState)(t.address),g=Object(B.a)(m,2),f=g[0],b=g[1],v=lt(),E=Object(k.b)(it),p=Object(B.a)(E,2),h=p[0],j=p[1],O=j.data,y=j.loading,x=j.error;return y?r.a.createElement("div",null,"Loading..."):x?r.a.createElement("div",null,"Error!"):O?r.a.createElement(L.a,{to:"/basket/".concat(O.editBasket.id)}):r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),h({variables:{id:t.id,name:l,birthdate:d,address:f}})}(e)}},r.a.createElement(W.a,{container:!0,justify:"space-around"},r.a.createElement(A.a,{variant:"outlined",label:"Name",color:"secondary",margin:"normal",value:l,className:"basket-text-field",onChange:function(e){return o(e.target.value)}}),r.a.createElement(Ve.a,{utils:Je.a},r.a.createElement(Xe.a,{variant:"inline",inputVariant:"outlined",color:"secondary",format:"MM/dd/yyyy",margin:"normal",label:"Birthdate",value:d,onChange:u,className:"basket-text-field",KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(A.a,{variant:"outlined",label:"Address",color:"secondary",margin:"normal",className:"basket-text-field",value:f,onChange:function(e){return b(e.target.value)}}),r.a.createElement(w.a,{className:v.button,variant:"contained",type:"submit",color:"secondary"},"Update Basket")))};function ct(){var e=Object(p.a)(["\nquery basket($id: Int!) {\n  basket(id: $id) {\n    id,\n    name,\n    birthdate,\n    address\n  }\n}"]);return ct=function(){return e},e}var st=O()(ct()),dt=Object(G.a)((function(e){return{title:{margin:e.spacing(5)}}}));var ut=function(e){var t=e.isLoggedIn,a=Object(L.g)().id,n=dt(),i=Object(k.c)(st,{variables:{id:parseInt(a,10)}}),l=i.data,o=i.loading,c=i.error;return t?o?r.a.createElement("div",null,"Loading..."):c?r.a.createElement("div",null,"Error!"):r.a.createElement("div",null,r.a.createElement(D.a,{variant:"h2",align:"center",className:n.title},"Edit ",l.basket.name),r.a.createElement(ot,{basket:l.basket})):r.a.createElement(L.a,{to:"/"})};function mt(){var e=Object(p.a)(["\n  query {\n    gifts {\n      id,\n      title,\n      description,\n      isPublic\n    }\n  }\n"]);return mt=function(){return e},e}var gt=O()(mt()),ft=Object(G.a)((function(e){return{title:{margin:e.spacing(5)},button:{margin:"0 auto",marginTop:e.spacing(5),marginBottom:e.spacing(5),display:"block",width:"65%"}}}));var bt=function(e){var t=e.isLoggedIn,a=Object(k.c)(gt),n=a.data,i=a.loading,l=a.error,o=ft();if(!t)return r.a.createElement(L.a,{to:"/"});if(i)return r.a.createElement("div",null,"Loading...");if(l)return r.a.createElement("div",null,"Error!");var c=n.gifts;return r.a.createElement("div",null,r.a.createElement(D.a,{variant:"h2",align:"center",className:o.title},"Discover Other Gifts!"),r.a.createElement(Ze,{gifts:c}))};function vt(){var e=Object(p.a)(["\nmutation createGift($title: String!, $description: String, $link: String, $isPublic: Boolean!) {\n  createGift(title: $title, description: $description, link: $link, isPublic: $isPublic) {\n    id\n  }\n}"]);return vt=function(){return e},e}var Et=Object(G.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},title:{textAlign:"center"}}})),pt=O()(vt());var ht=function(e){var t=e.isShowing,a=e.toggleModal,n=Et(),i=Object(k.b)(pt,{refetchQueries:["currentUser"]}),l=Object(B.a)(i,2),o=l[0];return l[1].data,r.a.createElement(P.a,{"aria-labelledby":"create gift modal","aria-describedby":"A modal for creating a new gift",className:n.modal,open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500}},r.a.createElement(T.a,{in:t},r.a.createElement("div",{className:"".concat(n.paper," no-outline")},r.a.createElement(D.a,{variant:"h4"},"New Gift"),r.a.createElement(ne,{addGift:function(e){o({variables:{title:e.title,description:e.description,link:e.link,isPublic:e.isPublic}})},toggleModal:a}))))};function kt(){var e=Object(p.a)(["\n  query currentUser{\n    currentUser {\n      gifts {\n        id, \n        title,\n        description,\n        link,\n        isPublic\n      }\n    }\n  }\n"]);return kt=function(){return e},e}var jt=O()(kt()),Ot=Object(G.a)((function(e){return{title:{margin:e.spacing(5)},button:{margin:"0 auto",marginTop:e.spacing(5),marginBottom:e.spacing(5),display:"block",width:"65%"}}}));var yt=function(e){var t=e.isLoggedIn,a=Object(k.a)(),n=Object(k.c)(jt),i=n.data,l=n.loading,o=n.error,c=Y(),s=c.isShowing,d=c.toggleModal,u=Ot();if(!t)return r.a.createElement(L.a,{to:"/"});if(l)return r.a.createElement("div",null,"Loading...");if(o)return a.clearStore(),a.writeData({data:{isLoggedIn:!1}}),localStorage.removeItem("token"),r.a.createElement("div",null,"Error!");var m=i.currentUser.gifts;return r.a.createElement("div",null,r.a.createElement(D.a,{variant:"h2",align:"center",className:u.title},"Your Gifts"),r.a.createElement(w.a,{className:u.button,variant:"contained",color:"secondary",onClick:function(){return d(!0)}},"Add Gift"),r.a.createElement(Ze,{gifts:m}),r.a.createElement(ht,{toggleModal:d,isShowing:s}))},xt=Object(G.a)((function(e){return{root:{maxWidth:"100%",minHeight:180,margin:e.spacing(2)}}}));var It=function(e){var t=e.basket,a=xt();return r.a.createElement(Se.a,{className:a.root,elevation:3},r.a.createElement(we.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5"},t.name?t.name:"Empty Basket"),r.a.createElement(D.a,{variant:"body2"},t.birthdate?function(e){var t=new Date(Date.parse(e)).toString().split(" ");return"".concat(t[1]," ").concat(t[2],", ").concat(t[3])}(t.birthdate):"Empty Birthdate")),r.a.createElement(Ge.a,null,r.a.createElement(h.b,{size:"small",color:"secondary",component:w.a,to:"/basket/".concat(t.id?t.id:"")},"See More")))};function St(){var e=Object(p.a)(["\n  query {\n    currentUser {\n      baskets {\n        id,\n        name,\n        birthdate,\n        address\n      }\n    }\n  }"]);return St=function(){return e},e}var wt=Object(G.a)((function(e){return{title:{margin:e.spacing(5)},button:{margin:"0 auto",marginTop:e.spacing(5),marginBottom:e.spacing(5),display:"block",width:"65%"}}})),Gt=O()(St());var Nt=function(e){var t=e.isLoggedIn,a=wt(),n=Object(k.a)(),i=Object(k.c)(Gt),l=i.data,o=i.loading,c=i.error;if(!t)return r.a.createElement(L.a,{to:"/"});if(o)return r.a.createElement("div",null,"Loading...");if(c)return n.clearStore(),n.writeData({data:{isLoggedIn:!1}}),localStorage.removeItem("token"),r.a.createElement("div",null,"Error!");var s=l.currentUser.baskets;return r.a.createElement("div",null,r.a.createElement(D.a,{variant:"h2",align:"center",className:a.title},"Your Baskets"),r.a.createElement(w.a,{color:"secondary",variant:"contained",component:h.b,to:"/basket/new",className:a.button},"Create New Basket"),s.map((function(e){return r.a.createElement(It,{key:e.id,basket:e})})))},$t=a(124);function Ct(){var e=Object(p.a)(["\n  mutation signup($email: String!, $password: String!, $name: String!) {\n    signup(email: $email, password: $password, name: $name) {\n      token\n    }\n  }\n"]);return Ct=function(){return e},e}var Bt=Object(G.a)((function(){return{root:{flexGrow:1,padding:"1em",opacity:"85%"},title:{textAlign:"center"}}})),Lt=O()(Ct());var Pt=function(){var e=Bt(),t=Object(n.useState)(""),a=Object(B.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(""),c=Object(B.a)(o,2),s=c[0],d=c[1],u=Object(n.useState)(""),m=Object(B.a)(u,2),g=m[0],f=m[1],b=Object(n.useState)(""),v=Object(B.a)(b,2),E=v[0],p=v[1],h=Object(n.useState)(null),j=Object(B.a)(h,2),O=(j[0],j[1]),y=Object(k.a)(),x=Object(k.b)(Lt,{onCompleted:function(e){var t=e.signup;localStorage.setItem("token",t.token),y.writeData({data:{isLoggedIn:!0}})}}),I=Object(B.a)(x,2),S=I[0],G=I[1],N=G.data,$=G.loading,C=G.error;return $?r.a.createElement("div",null,"Loading..."):C?r.a.createElement("div",null,"Error!"):N?r.a.createElement(L.a,{to:"/home"}):r.a.createElement($t.a,{className:e.root},r.a.createElement(D.a,{variant:"h6",className:e.title},"Join Now!"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),g===E?S({variables:{email:i,password:g,name:s}}):O("Your passwords do not match.")}(e)}},r.a.createElement(A.a,{variant:"outlined",label:"Name",fullWidth:!0,color:"secondary",margin:"normal",value:s,onChange:function(e){return d(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Email",fullWidth:!0,color:"secondary",margin:"normal",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Password",type:"password",fullWidth:!0,color:"secondary",margin:"normal",value:g,onChange:function(e){return f(e.target.value)}}),r.a.createElement(A.a,{variant:"outlined",label:"Confirm Password",type:"password",fullWidth:!0,color:"secondary",margin:"normal",value:E,onChange:function(e){return p(e.target.value)}}),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,xs:9}),r.a.createElement(W.a,{item:!0,xs:3},r.a.createElement(w.a,{type:"submit",variant:"contained",color:"secondary",size:"large",fullWidth:!0},"Sign Up")))))},Mt=Object(G.a)((function(e){return{root:{maxWidth:"100%",minHeight:360,margin:e.spacing(2)},mediaContainer:{display:"flex",justifyContent:"center"},media:{height:"180px"}}}));var Tt=function(e){var t=e.cardInfo,a=Mt();return r.a.createElement(Se.a,{className:a.root,elevation:3},r.a.createElement(we.a,null,r.a.createElement("div",{className:a.mediaContainer},r.a.createElement("img",{className:a.media,src:t.image,alt:t.imgTitle})),r.a.createElement(D.a,{gutterBottom:!0,variant:"h5"},t.title),r.a.createElement(D.a,{variant:"body2",color:"textSecondary"},t.description)))},Dt=a(115),At=a.n(Dt),Wt=a(116),Ft=a.n(Wt),zt=a(117),Ut=a.n(zt),qt=a(118),Yt=a.n(qt),Rt=[{image:At.a,imgTitle:"Create Gifts",title:"Create",description:"Create and save new gift ideas to specific baskets or just to your profile to be used later."},{image:Ft.a,imgTitle:"Organize Baskets",title:"Organize",description:"Keep organized of who gets what gift by assigning them to a basket! You can also keep track of gifts you've already given."},{image:Ut.a,imgTitle:"Share Gifts",title:"Share",description:"Got a great gift idea you think others will love? Make it public for others to discover!"},{image:Yt.a,imgTitle:"Find Gifts",title:"Discover",description:"Have a special event coming up but not sure where to start? Explore and discover other gift ideas others have shared."}],Kt=Object(G.a)((function(e){return{title:{color:e.palette.secondary.main,textAlign:"center",fontWeight:"bold"}}}));var Qt=function(){var e=Kt();return r.a.createElement(W.a,{container:!0,className:"section"},r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(D.a,{variant:"h2",className:e.title},"About")),Rt.map((function(e){return r.a.createElement(W.a,{item:!0,lg:3,md:3,xs:6,key:e.title},r.a.createElement(Tt,{cardInfo:e}))})))},_t=Object(G.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},item:{marginTop:e.spacing(4)}}}));var Ht=function(e){var t=e.isLoggedIn,a=_t();return t?r.a.createElement(L.a,{to:"/home"}):r.a.createElement("div",null,r.a.createElement("div",{className:"hero ".concat(a.root)},r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,lg:6,md:2,xs:1}),r.a.createElement(W.a,{item:!0,lg:5,md:8,xs:10,className:a.item},r.a.createElement(Pt,null)))),r.a.createElement("div",null,r.a.createElement(Qt,null)))};var Jt=function(){return r.a.createElement("div",null,"NotFound")};var Vt=function(e){return r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/",exact:!0,render:function(){return r.a.createElement(Ht,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"/home",exact:!0,render:function(){return r.a.createElement(Nt,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"/basket/new",exact:!0,render:function(){return r.a.createElement(nt,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"/basket/:id",exact:!0,render:function(){return r.a.createElement(Re,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"/basket/:id/edit",exact:!0,render:function(){return r.a.createElement(ut,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"/gifts",exact:!0,render:function(){return r.a.createElement(yt,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"/feed",exact:!0,render:function(){return r.a.createElement(bt,{isLoggedIn:e.isLoggedIn})}}),r.a.createElement(L.b,{path:"*",component:Jt}))};var Xt=function(){return r.a.createElement(W.a,{container:!0,className:"footer"},r.a.createElement(W.a,{item:!0,lg:4,md:4,xs:12},r.a.createElement(D.a,{variant:"subtitle2"},"Copyright \xa9 2020, Melissa Young")),r.a.createElement(W.a,{item:!0,lg:4,md:4,xs:12},r.a.createElement(Ne.a,{href:"https://github.com/melissay94/giftbasket",target:"_blank",color:"secondary"},"GiftBasket GitHub")),r.a.createElement(W.a,{item:!0,lg:4,md:4,xs:12},r.a.createElement(Ne.a,{href:"https://linkedin.com/in/melissadcyoung/",target:"_blank",color:"secondary"},"My LinkedIn")))};a(152);function Zt(){var e=Object(p.a)(["{\n  isLoggedIn @client\n}"]);return Zt=function(){return e},e}var ea=Object(y.a)({palette:{primary:{light:"#ffe69b",main:"#ffe082",dark:"#b29c5b",contrastText:"#000000"},secondary:{light:"#8d7bff",main:"#715aff",dark:"#4f3eb2",contrastText:"#FFFFFF"}}}),ta=O()(Zt());var aa=function(){var e=Object(k.c)(ta).data,t=e.isLoggedIn?r.a.createElement(_,null):r.a.createElement(K,null);return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{theme:ea},t,r.a.createElement("main",null,r.a.createElement(Vt,{isLoggedIn:e.isLoggedIn})),r.a.createElement(Xt,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{client:v},r.a.createElement(aa,null))),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.4385fafd.chunk.js.map