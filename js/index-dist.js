function isVisible(e){var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}var navTrigger=document.querySelector(".navTrigger"),nav=document.querySelector("nav"),header=document.querySelector("header"),loading=document.querySelector(".loading"),main=document.querySelector(".main"),spotlightItems=document.querySelectorAll(".spotlightItem"),oldScrollY=0;window.addEventListener("DOMContentLoaded",function(){TweenMax.to(loading,.25,{ease:Expo.easeInOut,left:"-100%"}),TweenMax.from(main,.25,{ease:Expo.easeInOut,left:"101%"}),TweenMax.from(header,.25,{ease:Expo.easeInOut,delay:.2,top:"-100%"}),TweenMax.from(".main .content .header",.25,{ease:Expo.easeInOut,delay:.4,x:"101%"}),TweenMax.from(".main .content .subheader",.25,{ease:Expo.easeInOut,delay:.5,x:"-101%"}),TweenMax.from(".main .content p",.5,{ease:Expo.easeInOut,delay:.8,opacity:0})},!1),navTrigger.addEventListener("click",function(){"block"===nav.style.display?(TweenMax.to(nav,.3,{ease:Expo.easeInOut,left:"-100%",display:"none"}),TweenMax.to(main,0,{left:"101%"}),TweenMax.to(main,.3,{ease:Expo.easeInOut,left:"0%"})):(TweenMax.to(main,.3,{ease:Expo.easeInOut,left:"-100%"}),TweenMax.to(nav,0,{left:"101%"}),TweenMax.to(nav,.3,{ease:Expo.easeInOut,display:"block",left:"0%"}))},!1),main.addEventListener("scroll",function(){oldScrollY<main.scrollTop?TweenMax.to(header,.2,{top:"-3.95rem"}):oldScrollY>main.scrollTop&&TweenMax.to(header,.2,{top:"0"}),oldScrollY=main.scrollTop},!1);