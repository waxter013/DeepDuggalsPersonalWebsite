function handleTouchStart(o){xDown=o.touches[0].clientX,yDown=o.touches[0].clientY}function handleTouchMove(o){if(xDown&&yDown){var e=o.touches[0].clientX,n=o.touches[0].clientY,t=xDown-e,a=yDown-n;Math.abs(t)>Math.abs(a)&&(t>0?TweenMax.to(story,.3,{scrollLeft:"+="+window.innerWidth/5}):TweenMax.to(story,.3,{scrollLeft:"-="+window.innerWidth/5})),xDown=null,yDown=null}}var audio1=new Audio("../res/sounds/woosh.wav"),audio2=new Audio("../res/sounds/holidaysinthesun.mp3"),musicOnOff=document.querySelector(".music.bttn"),story=document.querySelector(".story"),oldScrollX=0,isScrolling=!1,curYPos,curXPos,curDown;window.addEventListener("DOMContentLoaded",function(){TweenMax.from(".main",1,{opacity:0}),TweenMax.staggerFrom(".story .item",1,{delay:1,opacity:0},.2),TweenMax.from(".story-menu",1,{height:0,opacity:0}),audio1.play(),TweenMax.from(audio1,4,{volume:0}),audio2.load(),audio2.play(),audio2.loop=!0,TweenMax.from(audio2,1,{volume:0})},!1),window.addEventListener("keydown",function(o){var e;if(o.key||o.code)e=o.key||o.code;else{var n=o.which||o.keyCode;e=String.fromCharCode(n)}"ArrowLeft"===e||37===e?TweenMax.to(story,.3,{scrollLeft:"+="+Math.min(window.innerWidth/-10,-1),ease:Sine.easeInOut}):"ArrowRight"!==e&&39!==e||TweenMax.to(story,.3,{scrollLeft:"+="+Math.max(window.innerWidth/10,1),ease:Sine.easeInOut})},!1),story.addEventListener("wheel",function(o){var e=Math.max(-1,Math.min(1,o.deltaY));TweenMax.to(story,.3,{scrollLeft:"+="+60*e,ease:Expo.easeOut})},!1),story.addEventListener("mousemove",function(o){curDown&&TweenMax.to(story,.3,{scrollLeft:"+="+(curXPos-o.pageX),scrollTop:"+="+(curYPos-o.pageY)})}),story.addEventListener("mousedown",function(o){curYPos=o.pageY,curXPos=o.pageX,curDown=!0,story.style.cursor="grabbing"}),story.addEventListener("mouseup",function(){curDown=!1,story.style.cursor="grab"}),document.addEventListener("touchstart",handleTouchStart,!1),document.addEventListener("touchmove",handleTouchMove,!1);var xDown=null,yDown=null;musicOnOff.addEventListener("click",function(){audio1.paused&&audio2.paused?(TweenMax.to(audio1,1,{volume:1}),TweenMax.to(audio2,1,{volume:1}),audio1.play(),audio2.play()):(TweenMax.to(audio1,1,{volume:0,onComplete:function(){audio1.pause()}}),TweenMax.to(audio2,1,{volume:0,onComplete:function(){audio2.pause()}}))},!1);