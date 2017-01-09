(function() {
   var headers = document.body.getElementsByClassName('h1'), 
          outline = document.body.getElementsByClassName('outline')[0];

  function createOutline() {
      var outlineItem = document.createElement('a'), 
          item,
          id;

    //Style
    outlineItem.className = 'outlineItem';

    for(var i = 0, len = headers.length; i < len; i++) {
      item = outlineItem.cloneNode();
      item.innerHTML = headers[i].innerHTML;

      //Add id and link
      headers[i].id = ('header-' + i).toString();
      item.setAttribute('href', ('#header-' + i).toString());

      outline.appendChild(item);
    }
  }

  window.onload = function() {
    createOutline();
  }
})()

var bttn = document.getElementsByTagName('button')[0], 
    main = document.getElementsByClassName('main')[0];

bttn.onclick = function() {
  load('http://localhost:7880', function(xhr) {
    var parser = new DOMParser(),
          doc = parser.parseFromString(xhr.response, "text/html");

    main.innerHTML = xhr.response;
  });
}

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = ensureReadiness;

  function ensureReadiness() {
    if (xhr.readyState < 4) {
      return;
    }
    if (xhr.status !== 200) {
      return;
    }
    // all is well  
    if (xhr.readyState === 4) {
      callback(xhr);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}

//Smooth Scrolling
!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";var t=function(t){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},c=document.documentElement,u=function(){return e?e.scrollTop:window.scrollY||c.scrollTop},l=function(){return e?Math.min(e.offsetHeight,window.innerHeight):window.innerHeight||c.clientHeight},a=function(t){return e?t.offsetTop:t.getBoundingClientRect().top+u()-c.offsetTop},s=function(){clearTimeout(i),r(0)},f=function(o,i,a){if(s(),t(e?e:document.body))(e||window).scrollTo(0,o),a&&a();else{var f=u(),d=Math.max(o,0)-f;i=i||Math.min(Math.abs(d),n);var h=(new Date).getTime();!function t(){r(setTimeout(function(){var n=Math.min(((new Date).getTime()-h)/i,1),o=Math.max(Math.floor(f+d*(n<.5?2*n*n:n*(4-2*n)-1)),0);e?e.scrollTop=o:window.scrollTo(0,o),n<1&&l()+o<(e||c).scrollHeight?t():(setTimeout(s,99),a&&a())},9))}()}},d=function(t,e,n){var i=a(t)-o;return f(i,e,n),i},h=function(t,e,n){var i=t.getBoundingClientRect().height,r=a(t),c=r+i,s=l(),h=u(),w=h+s;r-o<h||i+o>s?d(t,e,n):c+o>w?f(c-s+o,e,n):n&&n()},w=function(t,e,n,o){f(Math.max(a(t)-l()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},m=function(t,e){t&&(n=t),(0===e||e)&&(o=e)};return{setup:m,to:d,toY:f,intoView:h,center:w,stop:s,moving:function(){return!!i},getY:u}},n=e();if("addEventListener"in window&&!t(document.body)&&!window.noZensmooth){"scrollRestoration"in history&&(history.scrollRestoration="manual",window.addEventListener("popstate",function(t){t.state&&t.state.scrollY&&n.toY(t.state.scrollY)},!1));var o=function(t,e){try{history.replaceState({scrollY:n.getY()},""),history.pushState({scrollY:e},"",t)}catch(t){}};window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=e.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),n.toY(0),o(window.location.href.split("#")[0],0);else{var r=e.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),o("#"+r,n.to(c)))}}},!1)}return{createScroller:e,setup:n.setup,to:n.to,toY:n.toY,intoView:n.intoView,center:n.center,stop:n.stop,moving:n.moving}});