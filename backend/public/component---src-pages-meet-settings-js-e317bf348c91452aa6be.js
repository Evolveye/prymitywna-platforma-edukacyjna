(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3lQO":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("X4fA"),i=a("f23f"),m=a("cA2t"),u=a("Bl7J"),s=a("qQ7Z"),p=[],o=function(e){var t=e.id,a=e.name,n=e.surname;e.avatar;return r.a.createElement("li",{key:t},r.a.createElement(s.a,{src:"{processUrn(avatar)}",alt:a+"'s avatar",title:a+" "+n,color:"#3e8bff"}))},f=function(e,t){return p.filter((function(t){var a=t.permName;return!a||e[a]})).map((function(e){var a=e.urn,n=e.name;return r.a.createElement("li",{key:a,className:"list-item"},r.a.createElement(l.Link,{to:"/meet/"+a+"?"+t},n))}))};t.a=function(e){var t=e.children,a=e.className,l=void 0===a?"":a,s=Object(i.f)(),p=s.get("platformId"),d=s.get("groupId"),E=s.get("meetId"),b="platformId="+p+"&groupId="+d+"&meetId="+E,I=m.b.MEET$ID_USERS_GET.replace(":meetId",E),w=Object(n.useState)(f(Object(c.d)(E)||{},b)),g=w[0],v=w[1],k=Object(n.useState)((Object(c.b)({url:I})||{participants:[]}).participants.map(o)),O=k[0],N=k[1];return Object(n.useEffect)((function(){Object(c.d)(E,(function(e){v(f(e||{},b))})),Object(c.b)({url:m.b.MEET$ID_USERS_GET.replace(":meetId",E),cb:function(e){var t=e.participants;return N(t.map(o))}})}),[E,b]),r.a.createElement(c.a,null,r.a.createElement(u.a,{className:"main_wrapper-splited"},r.a.createElement("nav",{className:"main_wrapper-splited-left_column"},g.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Panel ustawień"),r.a.createElement("ul",{className:"list"},g),r.a.createElement("hr",null)):null,r.a.createElement("h2",null,"Lista uczestników"),r.a.createElement("ul",{className:"list"},O)),r.a.createElement("article",{className:"main_wrapper-splited-right_column "+l},t)))}},"8PGa":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("f23f"),i=a("3lQO");t.default=function(){var e=Object(c.f)(),t="/meet/it?platformId="+e.get("platformId")+"&groupId="+e.get("groupId")+"&meetId="+e.get("meetId");return r.a.createElement(i.a,{className:"is-centered"},r.a.createElement(l.Link,{className:"return_link",to:t},"Powrót do widoku spotkania"),r.a.createElement("h1",null,"Spotkanie -- ustawienia"))}}}]);
//# sourceMappingURL=component---src-pages-meet-settings-js-e317bf348c91452aa6be.js.map