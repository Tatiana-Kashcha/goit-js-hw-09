const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d;r.setAttribute("disabled",!0);e.addEventListener("click",(()=>{e.setAttribute("disabled",!0),r.removeAttribute("disabled"),d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3)}));r.addEventListener("click",(()=>{clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.4b7ece47.js.map
