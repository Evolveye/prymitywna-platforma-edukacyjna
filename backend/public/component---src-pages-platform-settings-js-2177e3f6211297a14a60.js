(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1qV8":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xNjIuNSwxMDIuNWMwLTM5Ljk3NywzMi41MjMtNzIuNSw3Mi41LTcyLjVzNzIuNSwzMi41MjMsNzIuNSw3Mi41VjE2MGgzMHYtNTcuNUMzMzcuNSw0NS45ODEsMjkxLjUxOSwwLDIzNSwwDQoJCVMxMzIuNSw0NS45ODEsMTMyLjUsMTAyLjVWMTYwaDMwVjEwMi41eiIvPg0KCTxwYXRoIGQ9Ik03Ny41LDE5MHYyODBoMzE1VjE5MEg3Ny41eiBNMjUwLDMzOC4wNTh2NTMuNTU3aC0zMHYtNTMuNTU3Yy0xMS44MjQtNS42MTgtMjAtMTcuNjY2LTIwLTMxLjYyN2MwLTE5LjMzLDE1LjY3LTM1LDM1LTM1DQoJCXMzNSwxNS42NywzNSwzNUMyNzAsMzIwLjM5MiwyNjEuODI0LDMzMi40NDEsMjUwLDMzOC4wNTh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},"7P88":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("dI71"),r=n("q1tI"),c=n.n(r),o=n("Wbzz"),i=n("f23f"),l=n("cA2t"),u=n("adrG"),s=n("nEz2"),m=n("XC1x"),M=n.n(m),N=n("X4fA"),w=[{title:"Nazwa",name:"name"},{title:"Opis",name:"description",type:"textarea"}],d=function(e){function t(t){var n;(n=e.call(this,t)||this).hremovePlatform=function(){fetch(l.b.PLATFORM$ID_DELETE.replace(":platformId",n.platformId),{method:"DELETE",headers:{Authentication:"Bearer "+Object(N.f)()}}).then((function(e){return e.json()})).then((function(e){e.code,e.success;var t=e.error;if(t)return console.error(t);Object(o.navigate)("/user/me")}))},n.render=function(){return c.a.createElement(u.a,{className:"is-centered"},c.a.createElement(o.Link,{className:"return_link",to:"/platform/it?platformId="+n.platformId},"Powrót do widoku platformy"),c.a.createElement(s.a,{fields:w,title:"Ustawienia platformy",submitName:"Zatwierdź",method:"POST",headers:{"Content-Type":"application/json"},address:l.b.PLATFORM$ID_PUT,onOk:function(e){console.log(e)}}),c.a.createElement("button",{className:M.a.removeButton,onClick:n.hremovePlatform},"Skasuj"))};var a=Object(i.f)();return n.platformId=a.get("platformId"),n}return Object(a.a)(t,e),t}(c.a.Component)},AdL1:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c={display:"block",backgroundColor:"#96d588",borderRadius:"50%",border:"1px solid #aaa"};t.a=function(e){var t=e.size,n=void 0===t?100:t;return r.a.createElement("div",{style:Object.assign({width:n+"px",height:n+"px"},c)})}},Ci82:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1DQoJCQlDNTEuMjU1LDM5NS41MzksMzEsNDQ0LjgzMywzMSw0OTdjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg0MjBjOC4yODQsMCwxNS02LjcxNiwxNS0xNQ0KCQkJQzQ4MSw0NDQuODMzLDQ2MC43NDUsMzk1LjUzOSw0MjMuOTY2LDM1OC4xOTV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},TSJ0:function(e,t,n){e.exports={form:"form-module--form--2pvl6",header:"form-module--header--hEF4-",title:"form-module--title--2iPEw",main:"form-module--main--1K9wY",label:"form-module--label--2tuTl",icon:"form-module--icon--1YWpG",input:"form-module--input--1Onr-",button:"form-module--button--1tumX",textarea:"form-module--textarea--2fwil",submit:"form-module--submit--3LLML"}},XC1x:function(e,t,n){e.exports={main:"platform-module--main--ZTUya",removeButton:"platform-module--removeButton--2eOQv"}},Zuv9:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("Ci82"),o=n.n(c),i=n("1qV8"),l=n.n(i),u=n("uR4D"),s=n.n(u);t.a=function(e){var t=e.classes,n=void 0===t?{}:t,a=e.data,c=a.icon,i=a.title,u=a.name,m=a.type,M=void 0===m?"text":m,N=a.autoComplete,w=function(e){switch(e){case"user":return o.a;case"lock":return l.a;case"email":return s.a;default:return null}}(c),d=null;switch(M){case"button":d=r.a.createElement("button",{className:n.button,type:"button",name:u},i);break;case"textarea":d=r.a.createElement("textarea",{className:n.textarea,name:u,placeholder:i});break;default:d=r.a.createElement("label",{className:n.label,key:u},w&&r.a.createElement("img",{className:n.icon,src:w,alt:i||M}),r.a.createElement("input",{className:n.input,type:M,name:u,placeholder:i,autoComplete:N}))}return d}},adrG:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("Wbzz"),o=n("cA2t"),i=n("f23f"),l=n("X4fA"),u=n("Bl7J"),s=n("qQ7Z"),m=[{urn:"settings",name:"Ogólne",permName:"isMaster"},{urn:"users",name:"Użytkownicy",permName:"isMaster"},{urn:"groups",name:"Grupy",permName:"isMaster"}],M=function(e,t){var n=e.id,a=e.name;return r.a.createElement("li",{key:n},r.a.createElement(s.a,{title:a,color:"#3e8bff",linkAddress:"/group/it?platformId="+t+"&groupId="+n}))},N=function(e,t){return m.filter((function(t){var n=t.permName;return!n||e[n]})).map((function(e){var n=e.urn,a=e.name;return r.a.createElement("li",{key:n,className:"list-item"},r.a.createElement(c.Link,{to:"/platform/"+n+"?platformId="+t},a))}))};t.a=function(e){var t=e.children,n=e.className,c=void 0===n?"":n,s=Object(i.f)().get("platformId"),m=o.b.GROUP_FROM_PLATFORM$ID_GET.replace(":platformId",s),w=Object(a.useState)((Object(l.b)({url:m})||{groups:[]}).groups.map((function(e){return M(e,s)}))),d=w[0],D=w[1],C=Object(a.useState)(N(Object(l.e)(s)||{},s)),j=C[0],g=C[1];return Object(a.useEffect)((function(){Object(l.b)({url:m,cb:function(e){var t=e.groups;return D(t.map((function(e){return M(e,s)})))}})}),[m,s]),Object(a.useEffect)((function(){Object(l.e)(s,(function(e){g(N(e||{},s))}))}),[s]),r.a.createElement(l.a,null,r.a.createElement(u.a,{className:"main_wrapper-splited"},r.a.createElement("nav",{className:"main_wrapper-splited-left_column"},j.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Panel ustawień"),r.a.createElement("ul",{className:"list"},j),r.a.createElement("hr",null)):null,r.a.createElement("h2",null,"Grupy"),r.a.createElement("ul",{className:"list"},d.length?d:"Nie należysz do żadnej grupy")),r.a.createElement("article",{className:"main_wrapper-splited-right_column "+c},t)))}},nEz2:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("E9XD");var a=n("dI71"),r=n("q1tI"),c=n.n(r),o=n("AdL1"),i=n("Zuv9"),l=n("TSJ0"),u=n.n(l),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={fields:[]},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.address,r=t.method,c=void 0===r?"GET":r,o=t.headers,i=c.toUpperCase(),l=Array.from(e.target.elements).filter((function(e){return e.name})).reduce((function(e,t){var n;return Object.assign(((n={})[t.name]=t.value,n),e)}),{}),u=["GET","HEAD"].includes(i)?null:JSON.stringify(l);if(["GET"].includes(i))throw new Error("Metoda nie jest jeszcze wspeirana w tym komponencie");fetch(a,{method:i,headers:o,body:u}).then((function(e){return e.text()})).then((function(e){var t=null;try{t=JSON.parse(e)}catch(o){var a=n.props.onUnknownResponse;return console.error("ERROR: Nieoczekiwana odpowiedź serwera, Błąd parsowania odpowiedzi\nPowód błędu: "+o+"\nWiadomość z serwera: "+e),a?a(o,e):null}if(t.error){var r=n.props.onError,c=JSON.parse(e);return console.error("ERROR: Odpowiedź serwera:",c),r?r(c):null}n.props.onOk&&n.props.onOk(JSON.parse(e))})).catch((function(){}))},n.render=function(){return c.a.createElement("form",{className:u.a.form,method:n.props.method||"GET",onSubmit:n.handleSubmit},c.a.createElement("header",{className:u.a.header},c.a.createElement(o.a,{size:50}),c.a.createElement("h3",{className:u.a.title},n.props.title)),c.a.createElement("article",{className:u.a.main},n.state.fields,c.a.createElement("button",{type:"submit",className:u.a.submit},n.props.submitName)))},n.state.fields=t.fields.map((function(e){return c.a.createElement(i.a,{key:e.title,classes:u.a,data:e})})),n}return Object(a.a)(t,e),t}(c.a.Component)},uR4D:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iMzM5LjM5MiwyNTguNjI0IDUxMiwzNjcuNzQ0IDUxMiwxNDQuODk2IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iMCwxNDQuODk2IDAsMzY3Ljc0NCAxNzIuNjA4LDI1OC42MjQgCQkiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ4MCw4MEgzMkMxNi4wMzIsODAsMy4zNiw5MS45MDQsMC45NiwxMDcuMjMyTDI1NiwyNzUuMjY0bDI1NS4wNC0xNjguMDMyQzUwOC42NCw5MS45MDQsNDk1Ljk2OCw4MCw0ODAsODB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMTAuMDgsMjc3Ljk1MmwtNDUuMjgsMjkuODI0Yy0yLjY4OCwxLjc2LTUuNzI4LDIuNjI0LTguOCwyLjYyNGMtMy4wNzIsMC02LjExMi0wLjg2NC04LjgtMi42MjRsLTQ1LjI4LTI5Ljg1Ng0KCQkJTDEuMDI0LDQwNC45OTJDMy40ODgsNDIwLjE5MiwxNi4wOTYsNDMyLDMyLDQzMmg0NDhjMTUuOTA0LDAsMjguNTEyLTExLjgwOCwzMC45NzYtMjcuMDA4TDMxMC4wOCwyNzcuOTUyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-pages-platform-settings-js-2177e3f6211297a14a60.js.map