(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(5),s=r.n(a),o=(r(14),r(2)),i=r.n(o),u=r(3),l=r(6),p=r(7),h=r(9),m=r(8),d=r(0),f=function(e){return Object(d.jsx)("div",{className:"Form",children:Object(d.jsxs)("form",{onSubmit:e.loadWeather,children:[Object(d.jsx)("div",{children:e.error?j():""}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"City"}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"Country"}),Object(d.jsx)("button",{type:"submit",className:"btn",children:"Get Weather"})]})})},j=function(){return Object(d.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Please Enter City and Country"})},b=function(e){return Object(d.jsxs)("div",{className:"Weather",children:[Object(d.jsx)("h1",{children:e.city}),Object(d.jsx)("i",{className:"wi ".concat(e.weatherIcon)}),e.temp_celsius?Object(d.jsxs)("h1",{children:[e.temp_celsius,"\xb0"]}):null,w(e.temp_min,e.temp_max),Object(d.jsx)("h4",{children:e.description})]})};function w(e,t){if(e&&t)return Object(d.jsxs)("h3",{children:[Object(d.jsxs)("span",{children:[e,"\xb0"]}),Object(d.jsxs)("span",{children:[t,"\xb0"]})]})}var x=function(){var e=Object(u.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://api.openweathermap.org/data/2.5/weather","?q=").concat(t,",").concat(r,"&appid=").concat("3ce3d19e821ae1cfed5238064639d347")).then((function(e){if(e.ok)return e.json();if(404===e.status)return alert("No such place");throw alert("Error! Error!"),new Error("Found an error!")})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(t,"&client_id=").concat("sLA1J7rLSOnQRBwTB99y8MOtUPCcD4p-X60zGQpIf5c")).then((function(e){if(e.ok)return e.json();throw new Error("No such place")})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(r(17),r(18),function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={city:"",country:"",icon:"",temp_celsius:0,temp_max:0,temp_min:0,description:"",error:"",image:""},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-shower",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e.getWeatherIcon=function(t){switch(!0){case t>=200&&t<=232:e.setState({icon:e.weatherIcon.Thunderstorm});break;case t>=300&&t<=321:e.setState({icon:e.weatherIcon.Drizzle});break;case t>=500&&t<=531:e.setState({icon:e.weatherIcon.Rain});break;case t>=600&&t<=622:e.setState({icon:e.weatherIcon.Snow});break;case t>=701&&t<=781:e.setState({icon:e.weatherIcon.Atmosphere});break;case 800===t:e.setState({icon:e.weatherIcon.Clear});break;default:e.setState({icon:e.weatherIcon.Clouds})}},e.calcCelsius=function(e){return Math.floor(e-273.15)},e.loadWeather=function(){var t=Object(u.a)(i.a.mark((function t(r){var n,c,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),n=r.target.elements.city.value,c=r.target.elements.country.value,!n||!c){t.next=16;break}return t.next=6,x(n,c);case 6:return a=t.sent,t.next=9,y(n);case 9:s=t.sent,console.log(a),console.log(s),e.getWeatherIcon(a.weather[0].id),e.setState({city:"".concat(a.name,", ").concat(a.sys.country),country:a.sys.country,temp_celsius:e.calcCelsius(a.main.temp),temp_max:e.calcCelsius(a.main.temp_max),temp_min:e.calcCelsius(a.main.temp_min),description:a.weather[0].description,error:!1,image:s.results[0].urls.raw}),t.next=17;break;case 16:e.setState({error:!0});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(r,[{key:"render",value:function(){var e=this.state,t=e.city,r=e.temp_celsius,n=e.temp_max,c=e.temp_min,a=e.description,s=e.icon,o=e.error,i=e.image;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{loadWeather:this.loadWeather,error:o}),Object(d.jsx)(b,{city:t,temp_celsius:r,temp_max:n,temp_min:c,description:a,weatherIcon:s}),Object(d.jsx)("img",{className:"app__image",src:i,alt:""})]})}}]),r}(c.a.Component)),v=O;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fdda0430.chunk.js.map