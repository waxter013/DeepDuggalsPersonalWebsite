function load(e,o){function t(){i.readyState<4||200===i.status&&4===i.readyState&&o(i)}var i=new XMLHttpRequest;i.onreadystatechange=t,i.open("GET",e,!0),i.send("")}!function(){function e(){var e,i=document.createElement("a");i.className="outlineItem";for(var l=0,n=o.length;l<n;l++)e=i.cloneNode(),e.innerHTML=o[l].innerHTML,o[l].id=("header-"+l).toString(),e.setAttribute("href",("#header-"+l).toString()),t.appendChild(e)}var o=document.body.getElementsByClassName("h1"),t=document.body.getElementsByClassName("outline")[0];window.onload=function(){e()}}();var bttn=document.getElementsByTagName("button")[0],main=document.getElementsByClassName("main")[0];bttn.onclick=function(){load("http://localhost:7880",function(e){var o=new DOMParser;o.parseFromString(e.response,"text/html");main.innerHTML=e.response})},!function(e,o){"function"==typeof define&&define.amd?define([],o()):"object"==typeof module&&module.exports?module.exports=o():e.zenscroll=o()}(this,function(){"use strict";var e=function(e){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(e)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var o=function(o,t,i){t=t||999,i||0===i||(i=9);var l,n=function(e){l=e},r=document.documentElement,c=function(){return o?o.scrollTop:window.scrollY||r.scrollTop},s=function(){return o?Math.min(o.offsetHeight,window.innerHeight):window.innerHeight||r.clientHeight},a=function(e){return o?e.offsetTop:e.getBoundingClientRect().top+c()-r.offsetTop},d=function(){clearTimeout(l),n(0)},m=function(i,l,a){if(d(),e(o?o:document.body))(o||window).scrollTo(0,i),a&&a();else{var m=c(),u=Math.max(i,0)-m;l=l||Math.min(Math.abs(u),t);var p=(new Date).getTime();!function e(){n(setTimeout(function(){var t=Math.min(((new Date).getTime()-p)/l,1),i=Math.max(Math.floor(m+u*(t<.5?2*t*t:t*(4-2*t)-1)),0);o?o.scrollTop=i:window.scrollTo(0,i),t<1&&s()+i<(o||r).scrollHeight?e():(setTimeout(d,99),a&&a())},9))}()}},u=function(e,o,t){var l=a(e)-i;return m(l,o,t),l},p=function(e,o,t){var l=e.getBoundingClientRect().height,n=a(e),r=n+l,d=s(),p=c(),w=p+d;n-i<p||l+i>d?u(e,o,t):r+i>w?m(r-d+i,o,t):t&&t()},w=function(e,o,t,i){m(Math.max(a(e)-s()/2+(t||e.getBoundingClientRect().height/2),0),o,i)},f=function(e,o){e&&(t=e),(0===o||o)&&(i=o)};return{setup:f,to:u,toY:m,intoView:p,center:w,stop:d,moving:function(){return!!l},getY:c}},t=o();if("addEventListener"in window&&!e(document.body)&&!window.noZensmooth){"scrollRestoration"in history&&(history.scrollRestoration="manual",window.addEventListener("popstate",function(e){e.state&&e.state.scrollY&&t.toY(e.state.scrollY)},!1));var i=function(e,o){try{history.replaceState({scrollY:t.getY()},""),history.pushState({scrollY:o},"",e)}catch(e){}};window.addEventListener("click",function(e){for(var o=e.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==e.which||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey)){var l=o.getAttribute("href")||"";if(0===l.indexOf("#"))if("#"===l)e.preventDefault(),t.toY(0),i(window.location.href.split("#")[0],0);else{var n=o.hash.substring(1),r=document.getElementById(n);r&&(e.preventDefault(),i("#"+n,t.to(r)))}}},!1)}return{createScroller:o,setup:t.setup,to:t.to,toY:t.toY,intoView:t.intoView,center:t.center,stop:t.stop,moving:t.moving}});