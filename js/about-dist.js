function scrollTo(e){e.getBoundingClientRect().top,main.getBoundingClientRect().top;TweenMax.to(main,.3,{scrollTo:"#spotlight"})}var navTrigger=document.querySelector(".navTrigger"),nav=document.querySelector("nav"),header=document.querySelector("header"),loading=document.querySelector(".loading"),main=document.querySelector(".main"),spotlightItems=document.querySelectorAll(".spotlightItem"),oldScrollY=0,quotes=["First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack."];names=["George Carrette"],navTrigger.onclick=function(){"block"===nav.style.display?TweenMax.to(nav,.3,{left:"-100%",display:"none"}):(TweenMax.to(nav,0,{left:"101%"}),TweenMax.to(nav,.2,{display:"block",left:"0%"}),TweenMax.staggerTo(".navItem",.2,{opacity:1},.2))},window.addEventListener("DOMContentLoaded",function(){TweenMax.to(loading,.25,{left:"-100%"}),TweenMax.from(main,.25,{left:"101%"}),TweenMax.from(header,.25,{delay:.2,top:"-100%"})},!1),main.addEventListener("scroll",function(){oldScrollY<main.scrollTop?TweenMax.to(header,.2,{top:"-3.95rem"}):oldScrollY>main.scrollTop&&TweenMax.to(header,.2,{top:"0"}),oldScrollY=main.scrollTop},!1);