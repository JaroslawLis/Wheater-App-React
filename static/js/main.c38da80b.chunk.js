(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),o=(a(36),a(19)),l=a(13),s=a(14),u=a(16),m=a(15),d=a(17),h=(a(37),a(8)),f=a(9),p=a(48),g=a(49),v=a(47),y=a(28),E=a(50),b=function(e){return r.a.createElement(g.a,{onSubmit:e.submit},r.a.createElement(v.a,null,r.a.createElement(y.a,{xs:9},r.a.createElement(g.a.Control,{type:"text",placeholder:"Nazwa miasta",value:e.value,onChange:e.change})," ")," ",r.a.createElement(y.a,null,r.a.createElement(E.a,{variant:"primary",type:"submit",block:!0},r.a.createElement("i",{className:"fa fa-search-plus"})," ","     ","Dodaj"," ")," ")," ")," ")},w=function(){return r.a.createElement(v.a,{className:"settings"},r.a.createElement(y.a,{md:{span:3,offset:10}},r.a.createElement(h.b,{to:"/settings"},r.a.createElement(E.a,{variant:"outline-primary"}," Ustawienia ")," ")," ")," ")},C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("fieldset",null,r.a.createElement(g.a.Group,{as:v.a},r.a.createElement(g.a.Label,{as:"legend",column:!0,sm:2},"Jednostka:")," ",r.a.createElement(y.a,{sm:10},r.a.createElement(g.a.Check,{type:"radio",label:"\xb0C",name:"formHorizontalRadios",id:"formHorizontalRadios1",value:"metric",checked:"metric"===e.units,onChange:e.handleFormSettings}),r.a.createElement(g.a.Check,{type:"radio",label:"\xb0F",name:"formHorizontalRadios",id:"formHorizontalRadios2",value:"imperial",checked:"imperial"===e.units,onChange:e.handleFormSettings}))," ")," ")," ",r.a.createElement(h.b,{to:"/"},r.a.createElement(E.a,{variant:"outline-primary"}," Powr\xf3t ")," ")," ")},k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.map(function(t,a){return r.a.createElement(v.a,{className:"displayCity",key:t.cityID},r.a.createElement(y.a,{xs:1}," ",a+1," ")," ",r.a.createElement(y.a,{xs:6},r.a.createElement(h.b,{to:"/showcity/".concat(t.cityID)}," ",t.cityName," ")," ")," ",r.a.createElement(y.a,null," ",t.averageTemp," \xb0 ","metric"===e.props.units?"C":"F"," ")," ",r.a.createElement(y.a,{className:"button"},r.a.createElement(E.a,{variant:"outline-danger",block:!0,onClick:function(){return e.props.handleRemoveButton(a)}},r.a.createElement("i",{className:"fa fa-minus-circle"})," Usu\u0144"," ")," ")," ")});return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"title"},r.a.createElement(y.a,{xs:1}," # ")," ",r.a.createElement(y.a,{xs:6}," Miasto ")," ",r.a.createElement(y.a,null," \u015arednia prognozowana temperatura ")," ",r.a.createElement(y.a,null))," ",t," ")}}]),t}(n.Component),S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," ",e.city.cityName," ")," ",r.a.createElement("h3",null," szeroko\u015b\u0107 geograficzna: ",e.city.cityLat," ")," ",r.a.createElement("h3",null," d\u0142ugo\u015b\u0107 geograficzna: ",e.city.cityLon," ")," ",r.a.createElement(h.b,{to:"/"},r.a.createElement(E.a,{variant:"outline-primary"}," Powr\xf3t ")," ")," ")},j="36d3d56a52da5b9081da981e4b9a0dc3",N=JSON.parse(localStorage.getItem("savedCities"))||[],I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",cities:[],units:"metric"},a.handleInputChange=function(e){a.setState({value:e.target.value})},a.writeCity=function(e){var t=Object(o.a)(a.state.cities);t.push(e),a.setState({cities:t,value:""})},a.averageTemp=function(e){var t,a=0;for(t=0;t<e.length;t++)a+=e[t].main.temp;return(a/t).toFixed(1)},a.handleCitySubmit=function(e){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/forecast?q=".concat(a.state.value,"&units=").concat(a.state.units,"&appid=").concat(j);fetch(t).then(function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")}).then(function(e){return e.json()}).then(function(e){if(N.findIndex(function(t){return t===e.city.id})>=0)console.log("miasto istnieje");else{var t={cityID:e.city.id,cityName:e.city.name,cityLat:e.city.coord.lat,cityLon:e.city.coord.lon,averageTemp:a.averageTemp(e.list)};N.push(e.city.id),localStorage.setItem("savedCities",JSON.stringify(N)),a.writeCity(t)}}).catch(function(e){console.log(e)})},a.handleRemoveButton=function(e){var t=N[e];N.splice(e,1),localStorage.setItem("savedCities",JSON.stringify(N));var n=Object(o.a)(a.state.cities),r=n.findIndex(function(e){return e.cityID===t});n.splice(r,1),a.setState({cities:n})},a.getWheater=function(e){var t=[];Promise.all(N.map(function(n,r){return fetch("https://api.openweathermap.org/data/2.5/forecast?id=".concat(n,"&units=").concat(e,"&appid=").concat(j)).then(function(e){return e.json()}).then(function(e){var n={cityID:e.city.id,cityName:e.city.name,cityLat:e.city.coord.lat,cityLon:e.city.coord.lon,averageTemp:a.averageTemp(e.list)};if(t.push(n),!n)return"error"})})).then(function(e){return a.setState({cities:t})}).catch(function(e){throw e})},a.handleFormSettings=function(e){"imperial"===e.target.value?(a.setState({units:"imperial"}),a.getWheater("imperial")):"metric"===e.target.value&&(a.setState({units:"metric"}),a.getWheater("metric"))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getWheater(this.state.units)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{className:"App"},r.a.createElement(h.a,null,r.a.createElement(w,{click:this.handleSettingsButton})," ",r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{value:e.state.value,change:e.handleInputChange,submit:e.handleCitySubmit})," ",r.a.createElement(k,{data:e.state.cities,units:e.state.units,handleRemoveButton:e.handleRemoveButton})," ")}})," ",r.a.createElement(f.a,{path:"/settings",exact:!0,render:function(t){return r.a.createElement(C,{units:e.state.units,handleFormSettings:e.handleFormSettings})}})," ",r.a.createElement(f.a,{path:"/showcity/:id",exact:!0,render:function(t){return r.a.createElement(S,{city:e.state.cities.find(function(e){return e.cityID===parseInt(t.match.params.id)})})}})," ",r.a.createElement(f.a,{path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{value:e.state.value,change:e.handleInputChange,submit:e.handleCitySubmit})," ",r.a.createElement(k,{data:e.state.cities,handleRemoveButton:e.handleRemoveButton})," ")}})," ")," ")," ")}}]),t}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Wheater-App-React",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Wheater-App-React","/service-worker.js");O?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.c38da80b.chunk.js.map