import{C as s}from"./config.DKJm7QDE.js";const e=document.getElementById("contact-form");e&&e.addEventListener("submit",o=>{o.preventDefault();const t=e.querySelector("#name")?.value||"",n=e.querySelector("#email")?.value||"",c=e.querySelector("#subject")?.value||"General Enquiry",a=e.querySelector("#message")?.value||"",m=`From: ${t} (${n})

${a}`,r=`mailto:${s}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(m)}`;window.location.href=r});
