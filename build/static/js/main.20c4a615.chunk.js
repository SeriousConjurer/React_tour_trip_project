(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(11),a(2)),o=a.n(s),m=a(5),u=a(1),i=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"loading..."))},d=function(e){var t=e.tour,a=e.removeIt,c=t.id,l=t.image,s=t.info,o=t.name,m=t.price,i=Object(n.useState)(!1),d=Object(u.a)(i,2),E=d[0],f=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container row mx-auto"},r.a.createElement("div",{className:"card mb-3 col-8 mx-auto p-5 shadow g-3"},r.a.createElement("img",{src:l,className:"card-img-top image-fluid",alt:"No"}),r.a.createElement("div",{className:"card-body row my-2"},r.a.createElement("h3",{className:"card-title text-start col-8 g-2"},o),r.a.createElement("h5",{className:"card-title text-end col-4 g-2"},"$ ",m),r.a.createElement("p",{className:"card-text g-2"},E?s:"".concat(s.substring(0,100)," ... "),r.a.createElement("span",{className:"text-primary p-2 fe-bold",onClick:function(){return f(!E)}},E?"Show less":"Read More")),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),r.a.createElement("button",{className:" btn-outline-danger",onClick:function(){return a(c)}}," ","Not Interested")))))},E=function(e){var t=e.tours,a=e.removeIt;return r.a.createElement("section",null,r.a.createElement("h1",{className:"title"}," OUR TOUR TRIP LIST"),r.a.createElement("div",{className:"underline"}),r.a.createElement("div",null,0!==t.length?t.map((function(e){return r.a.createElement(d,{key:e.id,tour:e,removeIt:a})})):r.a.createElement("h2",{className:"text-center my-5"}," NO TRIP ADDED ")))};var f=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),d=s[0],f=s[1],p=function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tours-project");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,f(a),c("1"),console.log(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),""===a?r.a.createElement(i,null):r.a.createElement(E,{tours:d,removeIt:function(e){var t=d.filter((function(t){return t.id!==e}));f(t)}})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.20c4a615.chunk.js.map