"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{9308:function(e,s,n){function a(e){var s=new Date(e),n=s.getDate().toString(),a=1==n.length?"0"+n:n,r=(s.getMonth()+1).toString();return a+"/"+(1==r.length?"0"+r:r)+"/"+s.getFullYear()}function r(e){return(e=parseFloat(e)).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}function i(e){return null===e||void 0===e?void 0:e.replace(/[^\d]/g,"").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}function l(){var e=new Date,s=Array("Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"),n=e.getDate(),a=e.getMonth(),r=e.getFullYear();return n+" de "+s[a]+" de "+r}function t(e){return null===e||void 0===e?void 0:e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/([^\w]+|\s+)/g,"-").replace(/\-\-+/g,"-").replace(/(\u02c6-+|-+$)/,"")}n.d(s,{F8:function(){return a},bE:function(){return i},cC:function(){return t},es:function(){return r},tb:function(){return l}})},5728:function(e,s,n){n.r(s);var a=n(5893),r=n(9308),i=n(2647).htmlToText;s.default=function(e){var s=e.bugets,n=e.customers,l=e.products,t=(0,r.F8)(null===n||void 0===n?void 0:n.birth_date),c=(0,r.bE)(null===n||void 0===n?void 0:n.cpf),d=(0,r.es)(s.value),o="";l.map((function(e){o+="".concat(e.technical_details,". ")}));var m=i(o,{wordwrap:130});return(0,a.jsx)("section",{className:"price section-padding","data-scroll-index":"4",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"price-table col-md-10 col-lg-8 margin-rl-auto ",children:[(0,a.jsx)("h5",{children:"Dados do Paciente"}),(0,a.jsxs)("div",{className:"row justify-content-center primery-shadow bg-light",children:[(0,a.jsxs)("div",{className:"customer",children:[(0,a.jsxs)("p",{className:"inline",children:[(0,a.jsx)("span",{children:"Nome:"})," ",n.full_name]}),(0,a.jsxs)("p",{className:"inline",children:[(0,a.jsx)("span",{children:"Endere\xe7o:"})," ",n.address]}),(0,a.jsxs)("p",{className:"inline",children:[(0,a.jsx)("span",{children:"CPF:"})," ",c]}),(0,a.jsxs)("p",{className:"inline",children:[(0,a.jsx)("span",{children:"Data de Nascimento:"})," ",t]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{children:"Doutor Respons\xe1vel:"})," ",n.dr_responsible]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{children:"Tipo de Amputa\xe7\xe3o:"})," ",n.type_of_amputation]})]}),(0,a.jsxs)("div",{className:"item md-mb50",children:[(0,a.jsxs)("div",{className:"round-head span type mb-30 valign text-black",children:[(0,a.jsx)("h6",{className:"ls2 text-u fz-12",children:"Proposta Comercial para Solu\xe7\xe3o I"}),(0,a.jsxs)("span",{className:"ls2 fz-12 fw-600",children:["v",null===s||void 0===s?void 0:s.version]})]}),(0,a.jsx)("div",{className:"amount text-center",children:(0,a.jsxs)("table",{className:"table-border",children:[(0,a.jsxs)("tr",{className:"fw-600",children:[(0,a.jsx)("td",{children:"Item"}),(0,a.jsx)("td",{style:{width:"70%"},children:"Descri\xe7\xe3o"}),(0,a.jsx)("td",{children:"Valor Unit."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"1"}),(0,a.jsx)("td",{children:m}),(0,a.jsx)("td",{children:d})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{style:{border:"none"}}),(0,a.jsx)("td",{style:{textAlign:"right"},children:"Total c/ Desconto"}),(0,a.jsx)("td",{className:"fw-700",children:(0,r.es)(s.value-s.discount)})]})]})}),(0,a.jsxs)("table",{children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"text-u",children:"Condi\xe7\xe3o de Pagamento"})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:s.payment_conditions})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"Obs: *Sujeito a an\xe1lise de cr\xe9dito. **Sujeito a limite dispon\xedvel no cart\xe3o de cr\xe9dito. O pagamento pode ser realizado em mais um um cart\xe3o."}),(0,a.jsx)("p",{style:{fontSize:"16px",color:"#15171f",padding:"20px 0"},children:"*ESTE OR\xc7AMENTO INCLUI TODO SERVI\xc7O E FISIOTERAPIA NECESS\xc1RIOS PARA A COMPLETA REABILITA\xc7\xc3O DO(A) PACIENTE"}),(0,a.jsxs)("table",{className:"table-bd-none",children:[(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{className:"fw-700",children:["Prazo de Entrega: ",(0,a.jsx)("span",{className:"fw-400",children:"A combinar"})]}),(0,a.jsxs)("td",{className:"fw-700",children:["Validade deste Or\xe7amento:  ",(0,a.jsx)("span",{className:"fw-400",children:"30 Dias"})]}),(0,a.jsxs)("td",{className:"fw-700",children:["Garantia dos componentes: ",(0,a.jsx)("span",{className:"fw-400",children:"Do fabricante"})]})]}),(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{colSpan:3,children:[(0,a.jsx)("span",{className:"fw-700",children:"Assist\xeancia T\xe9cnica:"})," Toda e qualquer assist\xeancia t\xe9cnica do material ser\xe1 prestado por esta empresa sempre que necess\xe1rio, sendo recomendado a cada oito meses de manuten\xe7\xe3o para conserva\xe7\xe3o do material. Certos de contarmos com a sua prefer\xeancia, colocamo-nos ao inteiro dispor para qualquer eventual esclarecimento "]})})]})]}),(0,a.jsxs)("div",{style:{flexDirection:"column",alignItems:"flex-end"},className:"flex pb-30 pr-30",children:[(0,a.jsx)("img",{style:{width:"250px",transform:"translateY(45px)"},src:"/img/davinci/ass.png",alt:""}),(0,a.jsx)("span",{style:{width:"250px",borderBottom:"2px black solid"}})]}),(0,a.jsxs)("div",{className:"valign pl-30",children:[(0,a.jsx)("img",{style:{width:"140px"},src:"/img/davinci/logo.png",alt:""}),(0,a.jsx)("p",{className:"fz-16 pl-30",children:"Av. Aruan\xe2, n\xba 280/352 - 1\xba andar - Sala 7 - Tambor\xe9 - Barueri - SP"})]})]})]})]})})})}}}]);