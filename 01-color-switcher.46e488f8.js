const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(e){o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;n.style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(o),t.disabled=!1}));let o=null;
//# sourceMappingURL=01-color-switcher.46e488f8.js.map
