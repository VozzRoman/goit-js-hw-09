!function(){var t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.querySelector("body");t.addEventListener("click",(function(){n.starColor(),t.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){n.stopColor(),t.disabled=!1,o.disabled=!0}));var n={isActive:!1,starColor:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log(e.style.backgroundColor)}),1e3))},stopColor:function(){this.isActive=!1,clearInterval(this.intervalId)}}}();
//# sourceMappingURL=01-color-switcher.928d40da.js.map