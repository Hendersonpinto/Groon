!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}({0:function(e,t,o){},6:function(e,t,o){"use strict";o.r(t);o(0);(()=>{const e=document.querySelectorAll(".nav-link"),t={howItWorks:document.querySelector(".section--howitworks"),forPartners:document.querySelector(".section--forPartners"),forShoppers:document.querySelector(".section--forShoppers"),contact:document.querySelector(".contact")};function o(){event.preventDefault(),window.scroll({top:t[this.dataset.linkto].offsetTop-60,left:0,behavior:"smooth"})}e.forEach(e=>{e.addEventListener("click",o)})})(),(()=>{const e=document.getElementById("contactForm"),t=document.querySelector(".contact");e.addEventListener("submit",()=>{event.preventDefault(),t.innerHTML='<div class="contact2" style="margin:100px auto; text-align: center;">\n\t<div class="contact__title">\n\t\t<h2>We\'ve successfully received your message - stay tuned!</h2>\n\t\t<p class="greentext">Thank you, we’ll get back to you as soon as possible</p>\n\t</div>\n\t<div class="womantext">\n\t\t<img src="./images/womantexting.svg" alt="" />\n\t</div>\n</div>',window.scroll({top:t.offsetTop-60,left:0,behavior:"smooth"})})})(),(()=>{const e=document.querySelector(".navbarfixed"),t=document.getElementById("howitworks"),o=document.getElementById("contact"),n=document.getElementById("forPartners"),r=document.getElementById("forShoppers"),s=document.querySelector(".section--howitworks"),c=document.querySelector(".contact"),i=document.querySelector(".section--forPartners"),a=document.querySelector(".section--forShoppers"),l=i.offsetTop,u=l+i.offsetHeight,d=a.offsetTop,f=d+a.offsetHeight,m=s.offsetTop,v=m+s.offsetHeight,p=c.offsetTop,y=p+c.offsetHeight,g=document.querySelector(".banner").offsetHeight-250;console.log(i.offsetTop),console.log(a.offsetTop),window.addEventListener("scroll",(function(){const s=window.pageYOffset;s>g?(e.classList.remove("hidden"),e.classList.add("shown"),s>m&&s<v?t.classList.add("active"):t.classList.remove("active"),s>p&&s<y?o.classList.add("active"):o.classList.remove("active"),s>l&&s<u?n.classList.add("active"):n.classList.remove("active"),s>d&&s<f?r.classList.add("active"):r.classList.remove("active")):(e.classList.remove("shown"),e.classList.add("hidden"))}))})()}});