function scrollTo(e){console.log(e.getBoundingClientRect().top),TweenMax.to(main,.3,{scrollTop:e.getBoundingClientRect().top})}function isVisible(e){var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}var navTrigger=document.querySelector(".navTrigger"),nav=document.querySelector("nav"),header=document.querySelector("header"),loading=document.querySelector(".loading"),main=document.querySelector(".main"),spotlightItems=document.querySelectorAll(".spotlightItem");navTrigger.onclick=function(){"block"===nav.style.display?TweenMax.to(nav,.3,{height:0,paddingTop:0,display:"none"}):(TweenMax.to(nav,.3,{display:"block",height:"100%",paddingTop:"4rem"}),TweenMax.from(".navItem",.3,{right:0,delay:.3}))},window.addEventListener("DOMContentLoaded",function(){TweenMax.to(loading,.25,{left:"-100%"}),TweenMax.from(main,.25,{left:"101%"}),TweenMax.from(header,.25,{delay:.2,top:"-100%"})},!1),main.addEventListener("scroll",function(){},!1);