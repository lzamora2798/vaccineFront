(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),s=n.n(r),o=(n(21),n(22),n(23),n(13)),j=n.n(o),i=n(14),l=n(9),d=n(33),b=n(31),u=n(32),h=n(1);var O=function(e){var t=e.toggle,n=e.modal,c=e.nombre,a=e.edad,r=e.lugar,s=e.fecha;return Object(h.jsxs)(d.a,{show:n,onHide:t,children:[Object(h.jsx)(d.a.Header,{closeButton:!0,children:Object(h.jsx)(d.a.Title,{children:"Informacion de Vacunacion"})}),Object(h.jsx)(d.a.Body,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{children:Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"Nombre: "})," ",c]})}),Object(h.jsxs)(u.a,{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"Edad: "})," ",a]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"Lugar: "})," ",r]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"Fecha: "})," ",s]})]})]})}),Object(h.jsx)(d.a.Footer,{})]})};var x=function(e){var t=e.toggle,n=e.modal;return Object(h.jsxs)(d.a,{show:n,onHide:t,children:[Object(h.jsx)(d.a.Header,{closeButton:!0,children:Object(h.jsx)(d.a.Title,{children:"Informacion de Vacunacion"})}),Object(h.jsx)(d.a.Body,{children:Object(h.jsx)("span",{children:Object(h.jsx)("strong",{children:"No existe informacion para esa cedula "})})}),Object(h.jsx)(d.a.Footer,{})]})},p="http://backend-standalone-0.vaccineapi.vaccineapi:8080";var m=function(){Object(c.useEffect)((function(){console.log(p)}));var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],b=Object(c.useState)(!1),u=Object(l.a)(b,2),m=u[0],f=u[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),N=v[0],y=v[1],w=function(){return d(!o)},E=function(){return f(!m)},S=function(){var e=Object(i.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(p,"/person/id/").concat(n),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 3:c=e.sent,console.log(c),c.length>0?(w(),y(c[0]),console.log(c)):E();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"Form",children:[Object(h.jsxs)("form",{onSubmit:S,children:[Object(h.jsx)("input",{placeholder:"Ingrese nombre de usuario",className:"form-control mb-2",name:"usuario",onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Enviar"})]}),Object(h.jsx)(O,{toggle:w,modal:o,nombre:N.nombre,edad:N.edad,lugar:N.lugar,fecha:N.fecha_vac}),Object(h.jsx)(x,{toggle:E,modal:m})]})};var f=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("img",{src:"main.png",width:"500px",height:"100px",alt:"logo"}),Object(h.jsx)("h2",{children:"CONSULTA TU CENTRO DE VACUNACION"}),Object(h.jsx)(m,{})]})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ba4bbfbd.chunk.js.map