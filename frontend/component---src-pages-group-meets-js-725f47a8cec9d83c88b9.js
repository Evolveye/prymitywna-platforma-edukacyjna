(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5kzk":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),c=r("f23f"),s=r("X4fA"),l=r("cA2t"),i=r("Bl7J"),u=r("qQ7Z"),d=[{urn:"notes",name:"Oceny",permName:"isMaster"},{urn:"users",name:"Użytkownicy",permName:"isMaster"},{urn:"meets",name:"Spotkania",permName:"isMaster"}],p=function(e,t){var r=e.id,n=e.dateStart,o=e.description;return a.a.createElement("li",{key:r},a.a.createElement(u.a,{title:Object(c.b)("YYYY.MM.DD - hh:mm",n),description:o,color:"#3e8bff",linkAddress:"/meet/it?"+t+"&meetId="+r}))},m=function(e,t){return d.filter((function(t){var r=t.permName;return!r||e[r]})).map((function(e){var r=e.urn,n=e.name;return a.a.createElement("li",{key:r,className:"list-item"},a.a.createElement(o.Link,{to:"/group/"+r+"?"+t},n))}))};t.a=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,u=Object(c.g)(),d=u.get("platformId"),f=u.get("groupId"),b="platformId="+d+"&groupId="+f,E=l.a.MEET_FROM_GROUP$ID_GET.replace(":groupId",f),h=Object(n.useState)((Object(s.b)({url:E})||{meets:[]}).meets.map((function(e){return p(e,b)}))),g=h[0],y=h[1],j=Object(n.useState)(m(Object(s.c)(f)||{},b)),v=j[0],w=j[1];return Object(n.useEffect)((function(){Object(s.b)({url:E,cb:function(e){var t=e.meets;return y(t.map((function(e){return p(e,b)})))}})}),[E,b]),Object(n.useEffect)((function(){Object(s.c)(f,(function(e){w(m(e||{},b))}))}),[f,b]),a.a.createElement(s.a,null,a.a.createElement(i.a,{className:"main_wrapper-splited"},a.a.createElement("nav",{className:"main_wrapper-splited-left_column"},v.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Panel ustawień"),a.a.createElement("ul",{className:"list"},v),a.a.createElement("hr",null)):null,a.a.createElement("h2",null,"Spotkania"),a.a.createElement("ul",{className:"list"},g.length?g:"Nie należysz do żadnego spotkania")),a.a.createElement("article",{className:"main_wrapper-splited-right_column "+o},t)))}},j3jx:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("KQm4");function a(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var o=r("dI71"),c=r("q1tI"),s=r.n(c),l=r("X4fA"),i=r("4DYZ"),u=r("f23f");function d(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))||this).state={error:"",rows:[],data:[],creatingLis:[],creationAllowed:!0},t.onFillListeners=[],t.updateNewField=function(e){var r,n=e.target||e;t.setState(((r={})[n.name]=n.value,r))},t.deleteRow=function(e){Object(u.a)(t.props.fetchDeleteAddress.replace(t.props.deleteIdParameterName,e),{method:"DELETE",headers:{Authentication:"Bearer "+Object(l.f)()}}).then((function(r){var n=r.code,a=r.error,o=r.success;return a?console.error({code:n,error:a}):o?(t.setState((function(t){return{rows:t.rows.filter((function(t){return t.key!==e}))}})),t.onFillListeners.forEach((function(e){var t=e.ref,r=e.field;return t.current[r]()})),console.info({code:n,success:o})):void 0}))},t.sendCreationData=function(){var e=t.state,r=(e.error,e.rows,e.data,e.creatingLis,e.creationAllowed,a(e,["error","rows","data","creatingLis","creationAllowed"]));t.setCreatingElements(),t.setState({creationAllowed:!1}),Object(u.a)(t.props.fetchPostAddress,{method:"POST",headers:{Authentication:"Bearer "+Object(l.f)(),"Content-Type":"application/json"},body:JSON.stringify(Object.assign({},r,t.props.staticPostBodyData))}).then((function(e){if(t.setState({creationAllowed:!0}),e.error){var r=e.code,n=e.error;return console.error({code:r,error:n}),t.setState({error:i.b[e.code]})}if(t.setState({error:""}),e.success){var a=e.code,o=e.success;return console.info({code:a,success:o}),Object(u.c)()&&window.location.reload()}t.props.responsePostDataName&&t.addToTable(e[t.props.responsePostDataName])}))},t.addToTable=function(e){Array.isArray(e)||(e=[e]);var r=e.map((function(e){for(var r,n=[],a=d(t.props.objectsFields);!(r=a()).done;){var o=r.value;"object"==typeof o?n.push(s.a.createElement("td",{key:o.name},o.processor(e[o.name]))):n.push(s.a.createElement("td",{key:o},e[o]))}return s.a.createElement("tr",{key:e.id},n,s.a.createElement("td",null,s.a.createElement("button",{type:"button",onClick:function(){return t.deleteRow(e.id)}},t.props.buttonDelete)))}));t.setState((function(t){return{rows:[].concat(Object(n.a)(r),Object(n.a)(t.rows)),data:[].concat(Object(n.a)(e),Object(n.a)(t.data))}}))},t.setCreatingElements=function(){for(var e=[],r=0;r<t.props.objectsFields.length;++r){var n,a,o=t.props.objectsFields[r],c=o.name||o,l=null===(n=t.props.inputFieldsComponents)||void 0===n?void 0:n[c],i=null===(a=t.props.colSpans)||void 0===a?void 0:a[c],u=s.a.createElement("input",{onChange:t.updateNewField,name:c});if(i&&(r+=i-1),l)if("props"in l||(l.props={}),"string"==typeof l.component)u=s.a.createElement(l.component,Object.assign({name:c},l.props,{onChange:t.updateNewField}));else{var d=s.a.createRef();u=s.a.createElement(l.component,Object.assign({name:c},l.props,{onChange:t.updateNewField,getTableData:function(){return t.state.data},ref:d})),l.onTableFillTrigger&&t.onFillListeners.push({ref:d,field:l.onTableFillTrigger})}e.push(s.a.createElement("td",{key:Date.now()+"."+Math.random(),colSpan:i,className:"inputCell"},u))}t.setState({creatingLis:e})},t.render=function(){return s.a.createElement("table",{className:"table"},s.a.createElement("thead",{className:"thead"},s.a.createElement("tr",null,t.props.titleFields.map((function(e){return s.a.createElement("td",{key:e},e)})),s.a.createElement("td",null,"Akcja"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,t.state.creatingLis,s.a.createElement("td",null,s.a.createElement("button",{type:"button",onClick:t.sendCreationData,disabled:!t.state.creationAllowed},t.props.buttonAdd))),s.a.createElement("tr",{className:"emptyRow"},s.a.createElement("td",{colSpan:"5"},t.state.error)),s.a.createElement("tr",{className:"emptyRow"}),t.state.rows))},t}return Object(o.a)(t,e),t.prototype.componentDidMount=function(){var e=this;this.setCreatingElements(),Object(u.a)(this.props.fetchGetAddress,{method:"GET",headers:{Authentication:"Bearer "+Object(l.f)()}}).then((function(t){if(t.error){var r=t.code,n=t.error;return console.error({code:r,error:n})}if(t.success){var a=t.code,o=t.success;return console.info({code:a,success:o})}e.addToTable(t[e.props.responseGetDataName]),e.onFillListeners.forEach((function(e){var t=e.ref,r=e.field;return t.current[r]()}))}))},t}(s.a.Component)},xng8:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r("dI71"),a=r("q1tI"),o=r.n(a),c=r("Wbzz"),s=r("f23f"),l=r("cA2t"),i=r("5kzk"),u=r("j3jx"),d=function(e){return o.a.createElement("input",Object.assign({type:"datetime-local"},e))},p=function(e){function t(t){var r;(r=e.call(this,t)||this).render=function(){return o.a.createElement(i.a,{className:"is-centered"},o.a.createElement(c.Link,{className:"return_link",to:r.href},"Powrót do widoku grupy"),o.a.createElement("h1",null,"Grupa -- spotkania"),o.a.createElement("p",null,o.a.createElement("strong",null,"Ważne!")," Lista spotkań po lewej stronie zaktualizuje się dopiero po odświeżeniu strony"),o.a.createElement(u.a,{fetchPostAddress:l.a.MEET_POST,fetchGetAddress:l.a.MEET_FROM_GROUP$ID_GET.replace(":groupId",r.groupId).replace(":platformId",r.platformId),fetchDeleteAddress:l.a.MEET$ID_DELETE,deleteIdParameterName:":meetId",responseGetDataName:"meets",responsePostDataName:"meet",buttonAdd:"Dodaj do grupy",buttonDelete:"Usuń z grupy",staticPostBodyData:{groupId:r.groupId,platformId:r.platformId},objectsFields:[{name:"dateStart",processor:function(e){return Object(s.b)("YYYY:MM:DD hh:mm",e)}},{name:"dateEnd",processor:function(e){return Object(s.b)("YYYY:MM:DD hh:mm",e)}},"description",{name:"externalUrl",processor:function(e){return o.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer"},"Link do spotkania")}}],titleFields:["Data rozpoczęcia","Data zakończenia","Opis","Link do spotkania"],inputFieldsComponents:{dateStart:{component:d},dateEnd:{component:d}}}))};var n=Object(s.g)();return r.groupId=n.get("groupId"),r.platformId=n.get("platformId"),r.href="/group/it?platformId="+r.platformId+"&groupId="+r.groupId,r}return Object(n.a)(t,e),t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-group-meets-js-725f47a8cec9d83c88b9.js.map