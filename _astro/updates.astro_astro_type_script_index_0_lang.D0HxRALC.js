import{C as m}from"./config.DKJm7QDE.js";const t=document.getElementById("signup-form");t&&!t.dataset.endpoint&&t.addEventListener("submit",n=>{n.preventDefault();const e=new FormData(t),o=e.get("name")||"",a=e.get("email")||"",l=[e.get("list-local")?"Padiham & Burnley weekly":null,e.get("list-national")?"National spending newsletter":null].filter(Boolean).join(", ")||"Padiham & Burnley weekly",i=encodeURIComponent("Mailing list signup"),s=encodeURIComponent(`Please add me to: ${l}

Name: ${o}
Email: ${a}

(Sent from tompickup.co.uk/updates)`);window.location.href=`mailto:${m}?subject=${i}&body=${s}`});
