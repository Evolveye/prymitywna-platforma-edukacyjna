(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3lQO":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("X4fA"),m=a("f23f"),i=a("cA2t"),u=a("Bl7J"),s=a("qQ7Z"),p=[],o=function(e){var t=e.id,a=e.name,n=e.surname,l=e.avatar;return r.a.createElement("li",{key:t},r.a.createElement(s.a,{src:Object(m.e)(l),alt:a+"'s avatar",title:a+" "+n,color:"#3e8bff"}))},d=function(e,t){return p.filter((function(t){var a=t.permName;return!a||e[a]})).map((function(e){var a=e.urn,n=e.name;return r.a.createElement("li",{key:a,className:"list-item"},r.a.createElement(l.Link,{to:"/meet/"+a+"?"+t},n))}))};t.a=function(e){var t=e.children,a=e.className,l=void 0===a?"":a,s=Object(m.g)(),p=s.get("platformId"),f=s.get("groupId"),E=s.get("meetId"),b="platformId="+p+"&groupId="+f+"&meetId="+E,I=i.a.MEET$ID_USERS_GET.replace(":meetId",E),g=Object(n.useState)(d(Object(c.d)(E)||{},b)),w=g[0],v=g[1],O=Object(n.useState)((Object(c.b)({url:I})||{participants:[]}).participants.map(o)),k=O[0],j=O[1];return Object(n.useEffect)((function(){Object(c.d)(E,(function(e){v(d(e||{},b))})),Object(c.b)({url:i.a.MEET$ID_USERS_GET.replace(":meetId",E),cb:function(e){var t=e.participants;return j(t.map(o))}})}),[E,b]),r.a.createElement(c.a,null,r.a.createElement(u.a,{className:"main_wrapper-splited"},r.a.createElement("nav",{className:"main_wrapper-splited-left_column"},w.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Panel ustawień"),r.a.createElement("ul",{className:"list"},w),r.a.createElement("hr",null)):null,r.a.createElement("h2",null,"Lista uczestników"),r.a.createElement("ul",{className:"list"},k)),r.a.createElement("article",{className:"main_wrapper-splited-right_column "+l},t)))}},FP34:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("f23f"),m=a("3lQO");t.default=function(){var e=Object(c.g)(),t="/meet/it?platformId="+e.get("platformId")+"&groupId="+e.get("groupId")+"&meetId="+e.get("meetId");return r.a.createElement(m.a,{className:"is-centered"},r.a.createElement(l.Link,{className:"return_link",to:t},"Powrót do widoku spotkania"),r.a.createElement("h1",null,"Spotkanie -- uczestnicy"))}}}]);
//# sourceMappingURL=component---src-pages-meet-users-js-e81771bf545bdf7c70b2.js.map